/**
 * amusic.css.js
 *
 * Pixel-perfect Apple Music dark mode stylesheet.
 * Features frosted glassmorphism (backdrop-filter blur), authentic Apple Music
 * red/pink (#FA2D48) accents, modern sleek scrubber with hover expansion,
 * rounded album art with soft drop shadows, and fluid spring transitions.
 */

const stylesheet = `
/* ==========================================================================
   Apple Music Root & Global Aesthetics
   ========================================================================== */
:root {
  --am-accent: #FA2D48;
  --am-accent-hover: #FB3C56;
  --am-accent-active: #D61A34;
  --am-accent-glow: rgba(250, 45, 72, 0.35);
  --am-accent-tint: rgba(250, 45, 72, 0.14);
  --am-glass-bg: rgba(24, 24, 28, 0.82);
  --am-glass-border: rgba(255, 255, 255, 0.08);
  --am-text-primary: #FFFFFF;
  --am-text-secondary: #A1A1A6;
  --am-text-tertiary: #6E6E73;
}

/* Smooth system font rendering across the UI */
body, .react-jinke-music-player-main, .music-player-panel {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ==========================================================================
   Apple Music Floating / Docked Player Bar
   ========================================================================== */
.react-jinke-music-player-main .music-player-panel {
  background: var(--am-glass-bg) !important;
  backdrop-filter: blur(40px) saturate(200%) !important;
  -webkit-backdrop-filter: blur(40px) saturate(200%) !important;
  border-top: 1px solid var(--am-glass-border) !important;
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.55) !important;
  height: 86px !important;
  padding: 0 24px !important;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
}

/* Bottom panel content layout */
.react-jinke-music-player-main .music-player-panel .panel-content {
  align-items: center !important;
  height: 100% !important;
}

/* ==========================================================================
   Album Artwork: Modern Rounded Corner (No dated spinning vinyl!)
   ========================================================================== */
.react-jinke-music-player-main .music-player-panel .panel-content .img-content {
  width: 56px !important;
  height: 56px !important;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45) !important;
  border-radius: 8px !important;
  overflow: hidden !important;
  margin-right: 14px !important;
  transition: transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .img-content:hover {
  transform: scale(1.05) !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6) !important;
}

/* Disable rotation animation - Apple Music uses static square cards */
.react-jinke-music-player-main .music-player-panel .panel-content .img-rotate,
.react-jinke-music-player-mobile .react-jinke-music-player-mobile-cover img.cover,
.react-jinke-music-player-mobile-cover {
  border-radius: 8px !important;
  animation: none !important;
  transform: none !important;
  object-fit: cover !important;
}

/* ==========================================================================
   Typography: Track Title & Artist Info
   ========================================================================== */
.react-jinke-music-player-main .songTitle,
.react-jinke-music-player-main .music-player-panel .panel-content .audio-title {
  color: var(--am-text-primary) !important;
  font-weight: 600 !important;
  font-size: 0.95rem !important;
  letter-spacing: -0.01em !important;
  transition: color 0.15s ease !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .player-singer {
  color: var(--am-text-secondary) !important;
  font-size: 0.85rem !important;
  font-weight: 400 !important;
  margin-top: 2px !important;
}

/* ==========================================================================
   Scrubber / Progress Bar: Apple Music Sleek Line with Expansion
   ========================================================================== */
.react-jinke-music-player-main .progress-bar-content {
  padding: 6px 0 !important;
  cursor: pointer !important;
}

/* Rail (Unplayed track) */
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-rail {
  background-color: rgba(255, 255, 255, 0.16) !important;
  height: 4px !important;
  border-radius: 9999px !important;
  transition: height 0.15s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
}

/* Track (Played portion) */
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-track,
.react-jinke-music-player-mobile-progress .rc-slider-track {
  background-color: var(--am-accent) !important;
  height: 4px !important;
  border-radius: 9999px !important;
  box-shadow: 0 0 10px rgba(250, 45, 72, 0.3) !important;
  transition: height 0.15s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
}

/* Expand track and rail on scrubber hover */
.react-jinke-music-player-main .progress-bar-content:hover .rc-slider-rail,
.react-jinke-music-player-main .progress-bar-content:hover .rc-slider-track {
  height: 6px !important;
}

/* Scrubber Thumb (White handle that emerges on hover/drag) */
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle,
.react-jinke-music-player-mobile-progress .rc-slider-handle {
  width: 14px !important;
  height: 14px !important;
  margin-top: -5px !important;
  background-color: #FFFFFF !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5) !important;
  opacity: 0 !important;
  transform: scale(0.6) !important;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
}

.react-jinke-music-player-main .progress-bar-content:hover .rc-slider-handle,
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle:active {
  opacity: 1 !important;
  transform: scale(1) !important;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.6) !important;
}

/* Progress bar timestamps */
.react-jinke-music-player-main .music-player-panel .panel-content .audio-time {
  color: var(--am-text-secondary) !important;
  font-size: 0.75rem !important;
  font-weight: 500 !important;
  font-variant-numeric: tabular-nums !important;
}

/* ==========================================================================
   Playback Controls & Action Icons
   ========================================================================== */
.react-jinke-music-player-main .music-player-panel svg {
  color: rgba(255, 255, 255, 0.85) !important;
  transition: all 0.18s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
}

.react-jinke-music-player-main .music-player-panel svg:hover {
  color: var(--am-accent) !important;
  transform: scale(1.12) !important;
}

.react-jinke-music-player-main .music-player-panel svg:active {
  transform: scale(0.92) !important;
}

.react-jinke-music-player-main .music-player-panel button:disabled svg {
  opacity: 0.2 !important;
  pointer-events: none !important;
}

/* Play/Pause Button */
.react-jinke-music-player-main .play-btn svg {
  color: #FFFFFF !important;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4)) !important;
}

.react-jinke-music-player-main .play-btn:hover svg {
  color: var(--am-accent-hover) !important;
  transform: scale(1.18) !important;
}

/* Active states (Shuffle, Repeat, Lyrics enabled) */
.react-jinke-music-player-main .lyric-btn-active svg,
.react-jinke-music-player-main .audio-lists-btn-active svg {
  color: var(--am-accent) !important;
  filter: drop-shadow(0 0 8px var(--am-accent-glow)) !important;
}

.react-jinke-music-player-main .lyric-btn-active {
  color: var(--am-accent) !important;
}

.react-jinke-music-player-main .loading svg {
  color: var(--am-accent) !important;
}

/* ==========================================================================
   Queue / Playlist Drawer (Apple Music "Up Next" Sheet)
   ========================================================================== */
.audio-lists-panel {
  background: rgba(24, 24, 28, 0.94) !important;
  backdrop-filter: blur(40px) saturate(200%) !important;
  -webkit-backdrop-filter: blur(40px) saturate(200%) !important;
  border: 1px solid var(--am-glass-border) !important;
  border-radius: 16px 16px 0 0 !important;
  box-shadow: 0 -12px 48px rgba(0, 0, 0, 0.7) !important;
}

.audio-lists-panel-header {
  border-bottom: 1px solid var(--am-glass-border) !important;
  color: var(--am-text-primary) !important;
  font-weight: 600 !important;
}

.audio-lists-panel-header-title {
  font-size: 1rem !important;
  font-weight: 700 !important;
}

.audio-lists-panel-header-num {
  color: var(--am-accent) !important;
  background: var(--am-accent-tint) !important;
  border-radius: 9999px !important;
  padding: 2px 8px !important;
  font-size: 0.75rem !important;
  font-weight: 600 !important;
}

/* Queue items */
.audio-lists-panel-content .audio-item {
  border-radius: 8px !important;
  margin: 2px 8px !important;
  padding: 8px 12px !important;
  color: var(--am-text-secondary) !important;
  transition: all 0.15s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
}

.audio-lists-panel-content .audio-item:hover {
  background: rgba(255, 255, 255, 0.06) !important;
  color: #FFFFFF !important;
}

.audio-lists-panel-content .audio-item:hover svg {
  color: var(--am-accent) !important;
}

/* Currently playing queue track */
.audio-lists-panel-content .audio-item.playing,
.react-jinke-music-player-main .audio-item.playing svg {
  background: var(--am-accent-tint) !important;
  color: var(--am-accent) !important;
  font-weight: 600 !important;
}

.react-jinke-music-player-main .audio-item.playing .player-singer {
  color: var(--am-accent) !important;
}

/* ==========================================================================
   Volume Slider
   ========================================================================== */
.react-jinke-music-player-main .music-player-panel .panel-content .sound-operation .rc-slider-rail {
  background-color: rgba(255, 255, 255, 0.18) !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .sound-operation .rc-slider-track {
  background-color: #FFFFFF !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .sound-operation .rc-slider-handle {
  background-color: #FFFFFF !important;
  opacity: 1 !important;
  transform: scale(0.9) !important;
}

/* ==========================================================================
   Mobile Player Screen (Apple Music iOS Now Playing Style)
   ========================================================================== */
.react-jinke-music-player-mobile {
  background: rgba(18, 18, 20, 0.98) !important;
  backdrop-filter: blur(50px) saturate(200%) !important;
  -webkit-backdrop-filter: blur(50px) saturate(200%) !important;
}

.react-jinke-music-player-mobile .react-jinke-music-player-mobile-cover {
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7) !important;
  border-radius: 14px !important;
}

.react-jinke-music-player-mobile .react-jinke-music-player-mobile-cover img.cover {
  border-radius: 14px !important;
}

/* ==========================================================================
   Minimal Apple macOS Scrollbars
   ========================================================================== */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.18);
  border-radius: 9999px;
  transition: background-color 0.2s ease;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.35);
}

.lastfm-icon, 
.musicbrainz-icon {
  color: var(--am-text-secondary) !important;
  transition: color 0.15s ease !important;
}

.lastfm-icon:hover,
.musicbrainz-icon:hover {
  color: var(--am-accent) !important;
}
`

export default stylesheet
