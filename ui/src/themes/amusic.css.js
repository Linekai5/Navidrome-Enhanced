/**
 * amusic.css.js
 *
 * Apple Music (AMusic) macOS Desktop UI & Liquid Glass Experience.
 * Features:
 * - Floating Liquid Glass Island player with smooth 9999px pill border radius
 * - Custom Apple Music Play/Resume & Pause buttons on player and album cards
 * - Responsive Apple Music sidebar with smooth mobile drawer overlay
 * - Borderless album artwork with clean floating circular play button
 * - Borderless song rows with translucent hover capsules
 * - Sleek floating Up Next popover sheet
 */

const stylesheet = `
/* ==========================================================================
   Apple Music Design Tokens
   ========================================================================== */
:root {
  --am-accent: #FA243C;
  --am-accent-hover: #FF375F;
  --am-accent-active: #D70015;
  --am-accent-gradient: linear-gradient(135deg, #FF375F 0%, #FA243C 55%, #D70015 100%);
  --am-accent-glow: rgba(250, 36, 60, 0.45);
  --am-accent-tint: rgba(250, 36, 60, 0.14);

  --am-bg-base: #000000;
  --am-bg-surface: #121214;
  --am-bg-elevated: #1C1C1E;
  --am-bg-sidebar: rgba(18, 18, 22, 0.96);
  --am-bg-glass: rgba(28, 28, 34, 0.74);
  --am-bg-popover: rgba(24, 24, 30, 0.90);

  --am-glass-border: rgba(255, 255, 255, 0.16);
  --am-glass-rim: inset 0 1px 1px 0 rgba(255, 255, 255, 0.28);
  --am-glass-shadow: 0 24px 60px rgba(0, 0, 0, 0.75);

  --am-text-primary: #FFFFFF;
  --am-text-secondary: #86868B;
  --am-text-tertiary: #6E6E73;

  --am-ease-spring: cubic-bezier(0.25, 1, 0.5, 1);
  --am-ease-snappy: cubic-bezier(0.16, 1, 0.3, 1);
}

/* ==========================================================================
   Global Base & Responsive Layout Padding
   ========================================================================== */
html, body {
  background-color: var(--am-bg-base) !important;
  color: var(--am-text-primary) !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#main-content, 
.MuiContainer-root, 
.RaList-content, 
.RaShow-main,
main {
  padding-bottom: 130px !important;
}

@media (max-width: 768px) {
  #main-content, 
  .MuiContainer-root, 
  .RaList-content, 
  .RaShow-main,
  main {
    padding-bottom: 110px !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
  }
}

/* ==========================================================================
   Responsive Sidebar Overhaul
   ========================================================================== */
.MuiDrawer-docked .MuiDrawer-paper {
  transition: width 0.25s var(--am-ease-spring) !important;
  overflow-x: hidden !important;
}

@media (max-width: 768px) {
  .MuiDrawer-modal {
    z-index: 10001 !important;
  }
  .MuiDrawer-modal .MuiDrawer-paper {
    width: 260px !important;
    background: rgba(18, 18, 22, 0.98) !important;
    backdrop-filter: blur(40px) saturate(200%) !important;
    -webkit-backdrop-filter: blur(40px) saturate(200%) !important;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.8) !important;
  }
}

/* ==========================================================================
   Floating Liquid Glass Island Player Dock (Continuous 9999px Pill)
   ========================================================================== */
.react-jinke-music-player-main .music-player-panel {
  position: fixed !important;
  left: 50% !important;
  bottom: 24px !important;
  transform: translateX(-50%) !important;
  width: min(880px, calc(100% - 48px)) !important;
  height: 76px !important;
  border-radius: 9999px !important;
  background: var(--am-bg-glass) !important;
  backdrop-filter: blur(50px) saturate(220%) !important;
  -webkit-backdrop-filter: blur(50px) saturate(220%) !important;
  border: 1px solid var(--am-glass-border) !important;
  box-shadow: 
    var(--am-glass-shadow),
    var(--am-glass-rim),
    inset 0 -1px 1px 0 rgba(0, 0, 0, 0.45) !important;
  padding: 0 28px !important;
  z-index: 9999 !important;
  overflow: visible !important;
  transition: all 0.35s var(--am-ease-spring) !important;
}

/* Specular refraction sheen */
.react-jinke-music-player-main .music-player-panel::before {
  content: "";
  position: absolute;
  top: 0;
  left: 15%;
  right: 15%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  pointer-events: none;
  z-index: 2;
}

/* Mobile responsive floating pill */
@media (max-width: 768px) {
  .react-jinke-music-player-main .music-player-panel {
    width: calc(100% - 24px) !important;
    left: 12px !important;
    right: 12px !important;
    transform: none !important;
    bottom: 12px !important;
    border-radius: 9999px !important;
    height: 70px !important;
    padding: 0 16px !important;
  }
}

.react-jinke-music-player-main .music-player-panel .panel-content {
  display: flex !important;
  align-items: center !important;
  height: 100% !important;
  position: relative !important;
  overflow: visible !important;
}

/* ==========================================================================
   Album Artwork in Floating Dock
   ========================================================================== */
.react-jinke-music-player-main .music-player-panel .panel-content .img-content {
  width: 48px !important;
  height: 48px !important;
  border-radius: 9px !important;
  overflow: hidden !important;
  margin-right: 14px !important;
  flex-shrink: 0 !important;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.6) !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  transition: transform 0.25s var(--am-ease-spring), box-shadow 0.25s ease !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .img-content:hover {
  transform: scale(1.08) !important;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.75) !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .img-rotate,
.react-jinke-music-player-mobile .react-jinke-music-player-mobile-cover img.cover,
.react-jinke-music-player-mobile-cover {
  border-radius: 9px !important;
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
  font-size: 0.9rem !important;
  letter-spacing: -0.015em !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  max-width: 160px !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .player-singer {
  color: var(--am-text-secondary) !important;
  font-size: 0.78rem !important;
  font-weight: 400 !important;
  margin-top: 1px !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  max-width: 160px !important;
}

/* ==========================================================================
   Scrubber Bar: Apple Precision Liquid Slider
   ========================================================================== */
.react-jinke-music-player-main .progress-bar-content {
  padding: 6px 0 !important;
  cursor: pointer !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-rail {
  background-color: rgba(255, 255, 255, 0.16) !important;
  height: 4px !important;
  border-radius: 9999px !important;
  transition: height 0.18s var(--am-ease-spring) !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-track,
.react-jinke-music-player-mobile-progress .rc-slider-track {
  background: var(--am-accent-gradient) !important;
  height: 4px !important;
  border-radius: 9999px !important;
  box-shadow: 0 0 10px var(--am-accent-glow) !important;
  transition: height 0.18s var(--am-ease-spring) !important;
}

.react-jinke-music-player-main .progress-bar-content:hover .rc-slider-rail,
.react-jinke-music-player-main .progress-bar-content:hover .rc-slider-track {
  height: 6px !important;
}

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
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.7), 0 0 0 2px rgba(255, 255, 255, 0.6) !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .audio-time {
  color: var(--am-text-secondary) !important;
  font-size: 0.725rem !important;
  font-weight: 500 !important;
  font-variant-numeric: tabular-nums !important;
}

/* ==========================================================================
   Custom Smooth Play & Pause Buttons on Player
   ========================================================================== */
.react-jinke-music-player-main .music-player-panel svg {
  color: rgba(255, 255, 255, 0.88) !important;
  transition: all 0.2s var(--am-ease-spring) !important;
}

.react-jinke-music-player-main .music-player-panel svg:hover {
  color: var(--am-accent-hover) !important;
  transform: scale(1.15) !important;
}

.react-jinke-music-player-main .music-player-panel svg:active {
  transform: scale(0.92) !important;
}

/* Custom Circular White Play/Pause Button */
.react-jinke-music-player-main .play-btn {
  background: #FFFFFF !important;
  color: #000000 !important;
  border-radius: 50% !important;
  width: 38px !important;
  height: 38px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin: 0 10px !important;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5) !important;
  transition: all 0.22s var(--am-ease-spring) !important;
}

.react-jinke-music-player-main .play-btn svg {
  color: #000000 !important;
  fill: #000000 !important;
}

.react-jinke-music-player-main .play-btn:hover {
  transform: scale(1.12) !important;
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4) !important;
}

.react-jinke-music-player-main .play-btn:active {
  transform: scale(0.92) !important;
}

/* Reset any legacy circle border overrides */
.react-jinke-music-player-play-icon,
.react-jinke-music-player-pause-icon {
  background: transparent !important;
  outline: none !important;
}

/* ==========================================================================
   Album Grid Hover: Borderless Cover & Custom Play/Pause Overlay
   ========================================================================== */
/* Remove old rectangular dark bar across bottom of album */
.NDAlbumGridView-tileBar,
.MuiGridListTileBar-root {
  background: transparent !important;
  height: auto !important;
  padding: 10px !important;
  display: flex !important;
  justify-content: flex-end !important;
  align-items: flex-end !important;
}

.MuiGridListTileBar-titleWrap {
  display: none !important;
}

/* Custom Apple Music floating Play/Pause button on album covers */
.NDAlbumGridView-albumPlayButton,
.NDAlbumGridView-albumPlayButton button {
  background: rgba(255, 255, 255, 0.95) !important;
  color: var(--am-accent) !important;
  border-radius: 50% !important;
  width: 44px !important;
  height: 44px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6) !important;
  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
}

.NDAlbumGridView-albumPlayButton:hover,
.NDAlbumGridView-albumPlayButton button:hover {
  transform: scale(1.15) !important;
  background: #FFFFFF !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.75) !important;
}

.NDAlbumGridView-albumPlayButton:active,
.NDAlbumGridView-albumPlayButton button:active {
  transform: scale(0.92) !important;
}

.NDAlbumGridView-albumPlayButton svg {
  color: var(--am-accent) !important;
  fill: var(--am-accent) !important;
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
   Up Next Queue Popover (Apple Music Floating Panel)
   ========================================================================== */
.audio-lists-panel {
  position: fixed !important;
  bottom: 114px !important;
  right: max(24px, calc((100vw - 880px) / 2)) !important;
  width: 400px !important;
  max-width: calc(100vw - 48px) !important;
  max-height: 520px !important;
  background: var(--am-bg-popover) !important;
  backdrop-filter: blur(60px) saturate(220%) !important;
  -webkit-backdrop-filter: blur(60px) saturate(220%) !important;
  border: 1px solid var(--am-glass-border) !important;
  border-radius: 20px !important;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.85), var(--am-glass-rim) !important;
}

.audio-lists-panel-header {
  border-bottom: 1px solid var(--am-glass-border) !important;
  color: var(--am-text-primary) !important;
  padding: 12px 18px !important;
}

.audio-lists-panel-header-title {
  font-size: 1rem !important;
  font-weight: 700 !important;
  letter-spacing: -0.015em !important;
}

.audio-lists-panel-header-num {
  color: var(--am-accent) !important;
  background: var(--am-accent-tint) !important;
  border-radius: 9999px !important;
  padding: 2px 8px !important;
  font-size: 0.75rem !important;
  font-weight: 600 !important;
}

.audio-lists-panel-content .audio-item {
  border-radius: 8px !important;
  margin: 3px 8px !important;
  padding: 9px 12px !important;
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
   Mobile Player Screen
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
