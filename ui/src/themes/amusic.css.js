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
   Floating Liquid Glass Island Player Dock (Apple Music Pill)
   ========================================================================== */
.react-jinke-music-player-main .music-player-panel {
  position: fixed !important;
  left: 50% !important;
  bottom: 24px !important;
  transform: translateX(-50%) !important;
  width: min(1360px, calc(100% - 48px)) !important;
  height: 78px !important;
  border-radius: 9999px !important;
  background: var(--am-bg-glass) !important;
  backdrop-filter: blur(50px) saturate(220%) !important;
  -webkit-backdrop-filter: blur(50px) saturate(220%) !important;
  border: 1px solid var(--am-glass-border) !important;
  box-shadow: 
    var(--am-glass-shadow),
    var(--am-glass-rim),
    inset 0 -1px 1px 0 rgba(0, 0, 0, 0.45) !important;
  padding: 0 24px !important;
  z-index: 9999 !important;
  overflow: visible !important;
  transition: all 0.35s var(--am-ease-spring) !important;
  box-sizing: border-box !important;
}

/* Specular refraction sheen */
.react-jinke-music-player-main .music-player-panel::before {
  content: "";
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
  pointer-events: none;
  z-index: 2;
}

.react-jinke-music-player-main .music-player-panel .panel-content {
  display: flex !important;
  align-items: center !important;
  height: 100% !important;
  width: 100% !important;
  position: relative !important;
  overflow: visible !important;
  gap: 12px !important;
}

/* ==========================================================================
   Album Artwork in Floating Dock
   ========================================================================== */
.react-jinke-music-player-main .music-player-panel .panel-content .img-content {
  width: 50px !important;
  height: 50px !important;
  border-radius: 10px !important;
  overflow: hidden !important;
  margin: 0 !important;
  flex-shrink: 0 !important;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.6) !important;
  border: 1px solid rgba(255, 255, 255, 0.14) !important;
  transition: transform 0.25s var(--am-ease-spring), box-shadow 0.25s ease !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .img-content:hover {
  transform: scale(1.08) !important;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.75) !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .img-rotate,
.react-jinke-music-player-mobile .react-jinke-music-player-mobile-cover img.cover,
.react-jinke-music-player-mobile-cover {
  border-radius: 10px !important;
  animation: none !important;
  transform: none !important;
  object-fit: cover !important;
}

/* ==========================================================================
   Progress Bar & Track Info: Wide, Prominent Apple Music Scrubber
   ========================================================================== */
.react-jinke-music-player-main .music-player-panel .panel-content .progress-bar-content {
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  flex: 2 1 300px !important;
  min-width: 140px !important;
  padding: 0 8px !important;
  overflow: hidden !important;
}

/* Track Title & Artist Row */
.react-jinke-music-player-main .music-player-panel .panel-content .audio-title {
  display: block !important;
  width: 100% !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  line-height: 1.3 !important;
  margin-bottom: 2px !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .audio-title a {
  display: inline-flex !important;
  align-items: baseline !important;
  gap: 8px !important;
  max-width: 100% !important;
  text-decoration: none !important;
}

.react-jinke-music-player-main .songTitle {
  color: var(--am-text-primary) !important;
  font-weight: 600 !important;
  font-size: 0.92rem !important;
  letter-spacing: -0.015em !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .songInfo,
.react-jinke-music-player-main .music-player-panel .panel-content .songArtist,
.react-jinke-music-player-main .music-player-panel .panel-content .songAlbum {
  color: var(--am-text-secondary) !important;
  font-size: 0.8rem !important;
  font-weight: 400 !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}

/* Audio Main Row: [Current Time] [Wide Scrubber Track] [Duration] */
.react-jinke-music-player-main .music-player-panel .panel-content .audio-main,
.react-jinke-music-player-main .music-player-panel .panel-content .progress-bar-content section.audio-main {
  display: flex !important;
  align-items: center !important;
  width: 100% !important;
  margin-top: 3px !important;
  gap: 10px !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .current-time,
.react-jinke-music-player-main .music-player-panel .panel-content .duration,
.react-jinke-music-player-main .music-player-panel .panel-content .audio-time {
  color: var(--am-text-secondary) !important;
  font-size: 0.75rem !important;
  font-weight: 500 !important;
  font-variant-numeric: tabular-nums !important;
  min-width: 34px !important;
  flex-shrink: 0 !important;
  text-align: center !important;
  user-select: none !important;
  opacity: 0.85 !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .progress-bar {
  flex: 1 1 auto !important;
  width: 100% !important;
  margin: 0 !important;
  position: relative !important;
  height: 18px !important;
  display: flex !important;
  align-items: center !important;
  cursor: pointer !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider {
  position: relative !important;
  width: 100% !important;
  height: 16px !important;
  padding: 5px 0 !important;
  touch-action: none !important;
  box-sizing: border-box !important;
  display: flex !important;
  align-items: center !important;
}

/* Scrubber Rail (Apple Frosted Glass Track) */
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-rail {
  background-color: rgba(255, 255, 255, 0.22) !important;
  height: 5px !important;
  border-radius: 9999px !important;
  transition: height 0.18s var(--am-ease-spring), background-color 0.18s ease !important;
}

/* Scrubber Played Track (Radiant Apple Music Crimson Gradient) */
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-track,
.react-jinke-music-player-mobile-progress .rc-slider-track {
  background: var(--am-accent-gradient) !important;
  height: 5px !important;
  border-radius: 9999px !important;
  box-shadow: 0 0 12px var(--am-accent-glow) !important;
  transition: height 0.18s var(--am-ease-spring) !important;
}

.react-jinke-music-player-main .progress-bar-content:hover .rc-slider-rail,
.react-jinke-music-player-main .progress-bar-content:hover .rc-slider-track {
  height: 7px !important;
  background-color: rgba(255, 255, 255, 0.3) !important;
}

/* Apple Music Scrubber Pearl Handle - Smooth, Beautiful, and Clear */
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle,
.react-jinke-music-player-mobile-progress .rc-slider-handle {
  width: 14px !important;
  height: 14px !important;
  margin-top: -4.5px !important;
  background-color: #FFFFFF !important;
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.4) !important;
  opacity: 1 !important;
  transform: scale(1) !important;
  transition: transform 0.2s var(--am-ease-spring), box-shadow 0.2s ease !important;
}

.react-jinke-music-player-main .progress-bar-content:hover .rc-slider-handle,
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle:active {
  transform: scale(1.3) !important;
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.75), 0 0 0 2px rgba(255, 255, 255, 0.7) !important;
}

/* ==========================================================================
   Playback Controls & Action Toolbar
   ========================================================================== */
.react-jinke-music-player-main .music-player-panel .panel-content .player-content {
  display: flex !important;
  align-items: center !important;
  flex: 0 0 auto !important;
  padding-left: 0 !important;
  margin-left: auto !important;
  gap: 4px !important;
}

.react-jinke-music-player-main .music-player-panel .panel-content .player-content > .group {
  margin: 0 4px !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
}

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
  width: 40px !important;
  height: 40px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin: 0 8px !important;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5) !important;
  transition: all 0.22s var(--am-ease-spring) !important;
  flex-shrink: 0 !important;
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

.react-jinke-music-player-main .prev-audio svg,
.react-jinke-music-player-main .next-audio svg {
  font-size: 24px !important;
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
  right: max(24px, calc((100vw - 1360px) / 2 + 16px)) !important;
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
   Adaptive Responsiveness for Audio Player & Progress Bar
   ========================================================================== */

/* Laptops / Smaller Desktops (<= 1100px) */
@media (max-width: 1100px) {
  .react-jinke-music-player-main .music-player-panel {
    width: calc(100% - 36px) !important;
    padding: 0 20px !important;
  }
  .react-jinke-music-player-main .music-player-panel .panel-content .play-sounds .sound-operation {
    width: 60px !important;
  }
  .react-jinke-music-player-main .music-player-panel .panel-content .player-content > .group {
    margin: 0 3px !important;
  }
}

/* Tablets (<= 850px) */
@media (max-width: 850px) {
  .react-jinke-music-player-main .music-player-panel {
    width: calc(100% - 24px) !important;
    bottom: 16px !important;
    height: 74px !important;
    padding: 0 16px !important;
  }
  .react-jinke-music-player-main .music-player-panel .panel-content .progress-bar-content {
    min-width: 130px !important;
  }
  .react-jinke-music-player-main .music-player-panel .panel-content .play-sounds .sound-operation,
  .react-jinke-music-player-main .music-player-panel .panel-content .hide-panel,
  .react-jinke-music-player-main .music-player-panel .panel-content .destroy-btn {
    display: none !important;
  }
}

/* Mobile Screens (<= 768px) - CRITICAL: Override library's display:none on progress-bar-content */
@media (max-width: 768px) {
  .react-jinke-music-player-main .music-player-panel {
    width: calc(100% - 20px) !important;
    left: 10px !important;
    right: 10px !important;
    transform: none !important;
    bottom: 12px !important;
    border-radius: 9999px !important;
    height: 72px !important;
    padding: 0 14px !important;
  }

  /* Force progress bar content to STAY VISIBLE on mobile! */
  .react-jinke-music-player-main .music-player-panel .panel-content .progress-bar-content {
    display: flex !important;
    flex: 1 1 auto !important;
    min-width: 100px !important;
    padding: 0 6px !important;
    overflow: hidden !important;
  }

  .react-jinke-music-player-main .music-player-panel .panel-content .img-content {
    width: 44px !important;
    height: 44px !important;
  }

  .react-jinke-music-player-main .music-player-panel .panel-content .audio-main,
  .react-jinke-music-player-main .music-player-panel .panel-content .progress-bar-content section.audio-main {
    gap: 6px !important;
  }

  .react-jinke-music-player-main .music-player-panel .panel-content .play-sounds,
  .react-jinke-music-player-main .music-player-panel .panel-content .hide-panel,
  .react-jinke-music-player-main .music-player-panel .panel-content .destroy-btn {
    display: none !important;
  }
}

/* Small Mobile Screens (<= 500px) */
@media (max-width: 500px) {
  .react-jinke-music-player-main .music-player-panel {
    width: calc(100% - 12px) !important;
    left: 6px !important;
    right: 6px !important;
    bottom: 8px !important;
    height: 66px !important;
    padding: 0 10px !important;
  }

  .react-jinke-music-player-main .music-player-panel .panel-content .img-content {
    width: 38px !important;
    height: 38px !important;
  }

  .react-jinke-music-player-main .play-btn {
    width: 34px !important;
    height: 34px !important;
    margin: 0 4px !important;
  }

  .react-jinke-music-player-main .music-player-panel .panel-content .play-mode-title,
  .react-jinke-music-player-main .music-player-panel .panel-content .lyric-btn,
  .react-jinke-music-player-main .music-player-panel .panel-content [data-testid="save-queue-button"] {
    display: none !important;
  }

  .react-jinke-music-player-main .music-player-panel .panel-content .current-time,
  .react-jinke-music-player-main .music-player-panel .panel-content .duration {
    font-size: 0.68rem !important;
    min-width: 28px !important;
  }
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
