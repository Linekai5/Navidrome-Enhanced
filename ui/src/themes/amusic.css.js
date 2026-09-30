/**
 * amusic.css.js
 *
 * Apple Music (AMusic) Liquid Glass Dark Theme.
 * Implements Apple's exact dark mode palette (#FA243C accent, OLED black,
 * obsidian glass surfaces) and a smooth liquid glass player bar with specular
 * rim highlights, frosted glass refraction, hover-expanding scrubber,
 * prominent circular play button, and spring transitions.
 */

const stylesheet = `
/* ==========================================================================
   Apple Music Design Tokens & Variables
   ========================================================================== */
:root {
  --am-accent: #FA243C;
  --am-accent-hover: #FF375F;
  --am-accent-active: #D70015;
  --am-accent-gradient: linear-gradient(135deg, #FF375F 0%, #FA243C 55%, #D70015 100%);
  --am-accent-glow: rgba(250, 36, 60, 0.45);
  --am-accent-tint: rgba(250, 36, 60, 0.15);

  --am-bg-base: #000000;
  --am-bg-surface: #121214;
  --am-bg-elevated: #1C1C1E;
  --am-bg-sidebar: rgba(18, 18, 20, 0.94);
  --am-bg-glass: rgba(24, 24, 28, 0.65);
  --am-bg-sheet: rgba(28, 28, 32, 0.92);

  --am-glass-border: rgba(255, 255, 255, 0.12);
  --am-glass-rim: inset 0 1px 1px 0 rgba(255, 255, 255, 0.22);
  --am-glass-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);

  --am-text-primary: #FFFFFF;
  --am-text-secondary: #86868B;
  --am-text-tertiary: #6E6E73;

  --am-ease-spring: cubic-bezier(0.25, 1, 0.5, 1);
  --am-ease-snappy: cubic-bezier(0.16, 1, 0.3, 1);
}

/* ==========================================================================
   Global Base & Typography
   ========================================================================== */
html, body {
  background-color: var(--am-bg-base) !important;
  color: var(--am-text-primary) !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ==========================================================================
   Smooth Liquid Glass Music Player Dock
   ========================================================================== */
.react-jinke-music-player-main .music-player-panel {
  background: var(--am-bg-glass) !important;
  backdrop-filter: blur(50px) saturate(220%) !important;
  -webkit-backdrop-filter: blur(50px) saturate(220%) !important;
  border-top: 1px solid var(--am-glass-border) !important;
  border-radius: 18px 18px 0 0 !important;
  box-shadow: 
    0 -12px 40px rgba(0, 0, 0, 0.7),
    var(--am-glass-rim),
    inset 0 -1px 1px 0 rgba(0, 0, 0, 0.4) !important;
  height: 88px !important;
  padding: 0 28px !important;
  position: fixed !important;
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 9999 !important;
  transition: all 0.35s var(--am-ease-spring) !important;
}

/* Specular liquid sheen along top glass rim */
.react-jinke-music-player-main .music-player-panel::before {
  content: "";
  position: absolute;
  top: 0;
  left: 5%;
  right: 5%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
  pointer-events: none;
  z-index: 2;
}

/* Bottom panel inner alignment */
.react-jinke-music-player-main .music-player-panel .panel-content {
  align-items: center !important;
  height: 100% !important;
  position: relative !important;
  overflow: visible !important;
}

/* ==========================================================================
   Album Artwork: High-Fidelity Apple Card (Non-spinning)
   ========================================================================== */
.react-jinke-music-player-main .music-player-panel .panel-content .img-content {
  width: 58px !important;
  height: 58px !important;
  border-radius: 10px !important;
  overflow: hidden !important;
  margin-right: 16px !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6) !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  transition: transform 0.25s var(--am-ease-spring), box-shadow 0.25s ease !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .img-content:hover {
  transform: scale(1.06) !important;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.75) !important;
}

/* Completely remove spinning vinyl rotation animation */
.react-jinke-music-player-main .music-player-panel .panel-content .img-rotate,
.react-jinke-music-player-mobile .react-jinke-music-player-mobile-cover img.cover,
.react-jinke-music-player-mobile-cover {
  border-radius: 10px !important;
  animation: none !important;
  transform: none !important;
  object-fit: cover !important;
}

/* ==========================================================================
   Track Info Typography
   ========================================================================== */
.react-jinke-music-player-main .songTitle,
.react-jinke-music-player-main .music-player-panel .panel-content .audio-title {
  color: var(--am-text-primary) !important;
  font-weight: 600 !important;
  font-size: 0.95rem !important;
  letter-spacing: -0.015em !important;
  transition: color 0.15s ease !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .player-singer {
  color: var(--am-text-secondary) !important;
  font-size: 0.825rem !important;
  font-weight: 400 !important;
  margin-top: 2px !important;
}

/* ==========================================================================
   Scrubber Bar: Apple Music Precision Liquid Progress
   ========================================================================== */
.react-jinke-music-player-main .progress-bar-content {
  padding: 8px 0 !important;
  cursor: pointer !important;
}

/* Rail (Unplayed track) */
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-rail {
  background-color: rgba(255, 255, 255, 0.16) !important;
  height: 4px !important;
  border-radius: 9999px !important;
  transition: height 0.18s var(--am-ease-spring) !important;
}

/* Played track with Apple Music radiant crimson gradient */
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-track,
.react-jinke-music-player-mobile-progress .rc-slider-track {
  background: var(--am-accent-gradient) !important;
  height: 4px !important;
  border-radius: 9999px !important;
  box-shadow: 0 0 12px var(--am-accent-glow) !important;
  transition: height 0.18s var(--am-ease-spring) !important;
}

/* Scrubber expansion on hover */
.react-jinke-music-player-main .progress-bar-content:hover .rc-slider-rail,
.react-jinke-music-player-main .progress-bar-content:hover .rc-slider-track {
  height: 6px !important;
}

/* Apple white pearl handle */
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle,
.react-jinke-music-player-mobile-progress .rc-slider-handle {
  width: 14px !important;
  height: 14px !important;
  margin-top: -5px !important;
  background-color: #FFFFFF !important;
  border: 1px solid rgba(0, 0, 0, 0.15) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.3) !important;
  opacity: 0 !important;
  transform: scale(0.6) !important;
  transition: opacity 0.15s ease, transform 0.2s var(--am-ease-spring) !important;
}

.react-jinke-music-player-main .progress-bar-content:hover .rc-slider-handle,
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle:active {
  opacity: 1 !important;
  transform: scale(1) !important;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.7), 0 0 0 2px rgba(255, 255, 255, 0.5) !important;
}

/* Timestamps */
.react-jinke-music-player-main .music-player-panel .panel-content .audio-time {
  color: var(--am-text-secondary) !important;
  font-size: 0.75rem !important;
  font-weight: 500 !important;
  font-variant-numeric: tabular-nums !important;
}

/* ==========================================================================
   Playback Controls: Prominent Apple Music Play Button & Icons
   ========================================================================== */
.react-jinke-music-player-main .music-player-panel svg {
  color: rgba(255, 255, 255, 0.88) !important;
  transition: all 0.2s var(--am-ease-spring) !important;
}

.react-jinke-music-player-main .music-player-panel svg:hover {
  color: var(--am-accent-hover) !important;
  transform: scale(1.14) !important;
}

.react-jinke-music-player-main .music-player-panel svg:active {
  transform: scale(0.92) !important;
}

/* Distinct Prominent Play/Pause Button */
.react-jinke-music-player-main .play-btn {
  background: #FFFFFF !important;
  color: #000000 !important;
  border-radius: 50% !important;
  width: 38px !important;
  height: 38px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin: 0 12px !important;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5) !important;
  transition: all 0.22s var(--am-ease-spring) !important;
}

.react-jinke-music-player-main .play-btn svg {
  color: #000000 !important;
  font-size: 20px !important;
}

.react-jinke-music-player-main .play-btn:hover {
  transform: scale(1.1) !important;
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.35) !important;
}

.react-jinke-music-player-main .play-btn:hover svg {
  color: #000000 !important;
  transform: none !important;
}

.react-jinke-music-player-main .play-btn:active {
  transform: scale(0.92) !important;
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

/* ==========================================================================
   Up Next Queue Sheet (Apple Music Glass Drawer)
   ========================================================================== */
.audio-lists-panel {
  background: var(--am-bg-sheet) !important;
  backdrop-filter: blur(60px) saturate(220%) !important;
  -webkit-backdrop-filter: blur(60px) saturate(220%) !important;
  border: 1px solid var(--am-glass-border) !important;
  border-radius: 20px 20px 0 0 !important;
  box-shadow: 0 -16px 60px rgba(0, 0, 0, 0.8), var(--am-glass-rim) !important;
}

.audio-lists-panel-header {
  border-bottom: 1px solid var(--am-glass-border) !important;
  color: var(--am-text-primary) !important;
}

.audio-lists-panel-header-title {
  font-size: 1.05rem !important;
  font-weight: 700 !important;
  letter-spacing: -0.015em !important;
}

.audio-lists-panel-header-num {
  color: var(--am-accent) !important;
  background: var(--am-accent-tint) !important;
  border-radius: 9999px !important;
  padding: 3px 10px !important;
  font-size: 0.75rem !important;
  font-weight: 600 !important;
}

.audio-lists-panel-content .audio-item {
  border-radius: 8px !important;
  margin: 3px 8px !important;
  padding: 10px 14px !important;
  color: var(--am-text-secondary) !important;
  transition: all 0.18s var(--am-ease-spring) !important;
}

.audio-lists-panel-content .audio-item:hover {
  background: rgba(255, 255, 255, 0.08) !important;
  color: #FFFFFF !important;
}

.audio-lists-panel-content .audio-item.playing {
  background: var(--am-accent-tint) !important;
  color: var(--am-accent) !important;
  font-weight: 600 !important;
}

/* ==========================================================================
   Volume Slider (Apple Clean Line)
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
  background: rgba(14, 14, 16, 0.98) !important;
  backdrop-filter: blur(60px) saturate(220%) !important;
  -webkit-backdrop-filter: blur(60px) saturate(220%) !important;
}

.react-jinke-music-player-mobile .react-jinke-music-player-mobile-cover {
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8) !important;
  border-radius: 16px !important;
}

.react-jinke-music-player-mobile .react-jinke-music-player-mobile-cover img.cover {
  border-radius: 16px !important;
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
  background-color: rgba(255, 255, 255, 0.38);
}
`

export default stylesheet
