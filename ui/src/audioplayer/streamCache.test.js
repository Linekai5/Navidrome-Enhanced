import { describe, it, expect, beforeEach, vi } from 'vitest'
import { streamCache } from './streamCache'

describe('StreamCache', () => {
  beforeEach(() => {
    streamCache.clear()
    vi.restoreAllMocks()
  })

  it('initializes with empty cache', () => {
    expect(streamCache.has('track-1')).toBe(false)
    expect(streamCache.getCachedUrl('track-1')).toBeNull()
  })

  it('prefetches and caches audio blob', async () => {
    const mockBlob = new Blob(['dummy audio content'], { type: 'audio/flac' })
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      blob: () => Promise.resolve(mockBlob),
    })

    const mockBlobUrl = 'blob:http://localhost/mock-uuid'
    globalThis.URL.createObjectURL = vi.fn().mockReturnValue(mockBlobUrl)
    globalThis.URL.revokeObjectURL = vi.fn()

    const result = await streamCache.prefetch('track-1', 'http://localhost/stream/track-1')
    expect(result).toBe(mockBlobUrl)
    expect(streamCache.has('track-1')).toBe(true)
    expect(streamCache.getCachedUrl('track-1')).toBe(mockBlobUrl)
  })

  it('prunes tracks outside keep list and revokes blob URLs', async () => {
    const mockBlob = new Blob(['data'], { type: 'audio/mp3' })
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      blob: () => Promise.resolve(mockBlob),
    })
    globalThis.URL.createObjectURL = vi.fn((b) => `blob:mock-${Math.random()}`)
    const revokeSpy = vi.fn()
    globalThis.URL.revokeObjectURL = revokeSpy

    await streamCache.prefetch('t1', 'http://stream/1')
    await streamCache.prefetch('t2', 'http://stream/2')
    await streamCache.prefetch('t3', 'http://stream/3')

    expect(streamCache.has('t1')).toBe(true)
    expect(streamCache.has('t2')).toBe(true)
    expect(streamCache.has('t3')).toBe(true)

    // Prune keeping only t2 and t3
    streamCache.prune(['t2', 't3'])

    expect(streamCache.has('t1')).toBe(false)
    expect(streamCache.has('t2')).toBe(true)
    expect(streamCache.has('t3')).toBe(true)
    expect(revokeSpy).toHaveBeenCalledTimes(1)
  })

  it('gracefully handles fetch failure without breaking', async () => {
    globalThis.fetch = vi.fn().mockRejectedValue(new Error('Network offline'))

    const result = await streamCache.prefetch('bad-track', 'http://stream/bad')
    expect(result).toBeNull()
    expect(streamCache.has('bad-track')).toBe(false)
  })
})
