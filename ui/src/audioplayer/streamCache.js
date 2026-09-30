/**
 * streamCache.js
 *
 * High-performance audio stream prefetcher and in-memory Blob cache.
 * Eliminates track-change latency and prevents playback cutouts caused by
 * network jitter on remote/mobile/Wi-Fi connections.
 */

class StreamCache {
  constructor(maxEntries = 3) {
    this.maxEntries = maxEntries
    this.cache = new Map() // trackId -> { blobUrl, blob, abortController, timestamp }
    this.inFlight = new Map() // trackId -> Promise<string>
    this.listeners = new Set()
  }

  subscribe(listener) {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  notify() {
    this.listeners.forEach((fn) => {
      try {
        fn()
      } catch (err) {
        // ignore subscriber errors
      }
    })
  }

  has(trackId) {
    return this.cache.has(trackId)
  }

  getCachedUrl(trackId) {
    const entry = this.cache.get(trackId)
    return entry ? entry.blobUrl : null
  }

  async prefetch(trackId, streamUrl) {
    if (!trackId || !streamUrl || streamUrl.startsWith('blob:')) {
      return null
    }

    // Already cached
    if (this.cache.has(trackId)) {
      return this.cache.get(trackId).blobUrl
    }

    // Already in-flight
    if (this.inFlight.has(trackId)) {
      return this.inFlight.get(trackId)
    }

    const abortController = typeof AbortController !== 'undefined' ? new AbortController() : null
    const signal = abortController ? abortController.signal : undefined

    const promise = (async () => {
      try {
        const response = await fetch(streamUrl, {
          signal,
          credentials: 'include',
        })

        if (!response.ok) {
          return null
        }

        const blob = await response.blob()
        if (!blob || blob.size === 0) {
          return null
        }

        const blobUrl = URL.createObjectURL(blob)

        // Enforce max capacity
        if (this.cache.size >= this.maxEntries) {
          const oldestKey = this.cache.keys().next().value
          if (oldestKey) {
            this.remove(oldestKey)
          }
        }

        this.cache.set(trackId, {
          blobUrl,
          blob,
          abortController,
          timestamp: Date.now(),
        })

        this.notify()
        return blobUrl
      } catch (err) {
        if (err.name !== 'AbortError') {
          // fetch error; fallback smoothly
        }
        return null
      } finally {
        this.inFlight.delete(trackId)
      }
    })()

    this.inFlight.set(trackId, promise)
    return promise
  }

  remove(trackId) {
    const entry = this.cache.get(trackId)
    if (entry) {
      try {
        URL.revokeObjectURL(entry.blobUrl)
      } catch {
        // ignore
      }
      this.cache.delete(trackId)
    }

    if (this.inFlight.has(trackId)) {
      const entry = this.cache.get(trackId)
      if (entry?.abortController) {
        entry.abortController.abort()
      }
      this.inFlight.delete(trackId)
    }
  }

  prune(keepTrackIds = []) {
    const keepSet = new Set(keepTrackIds.filter(Boolean))
    for (const key of Array.from(this.cache.keys())) {
      if (!keepSet.has(key)) {
        this.remove(key)
      }
    }
    this.notify()
  }

  clear() {
    for (const key of Array.from(this.cache.keys())) {
      this.remove(key)
    }
    this.inFlight.clear()
    this.notify()
  }
}

export const streamCache = new StreamCache()
export default streamCache
