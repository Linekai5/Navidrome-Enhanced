/**
 * amusic.js
 *
 * Apple Music (AMusic) Liquid Glass Theme for Navidrome.
 * Transforms the application UX and UI into an authentic Apple Music experience:
 * - Exact Apple Music Dark Palette: Pitch black (#000000), Obsidian Glass (#121214 / #18181B),
 *   and radiant Apple Crimson (#FA243C).
 * - Full UX Overhaul: Apple Music sidebar with capsule navigation, borderless
 *   tracklists with hover capsules, hero album details with Play/Shuffle pill buttons,
 *   and rounded album cards.
 * - Buttery Smooth Performance: 60fps spring transitions (cubic-bezier(0.25, 1, 0.5, 1)).
 */

import stylesheet from './amusic.css.js'

const ACCENT = '#FA243C'
const ACCENT_HOVER = '#FF375F'
const ACCENT_ACTIVE = '#D70015'
const ACCENT_TINT = 'rgba(250, 36, 60, 0.14)'
const ACCENT_GRADIENT = 'linear-gradient(135deg, #FF375F 0%, #FA243C 55%, #D70015 100%)'

const actionButtonsStyle = () => ({
  padding: '1.25rem 0',
  display: 'flex',
  alignItems: 'center',
  '@global': {
    button: {
      borderRadius: '9999px',
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '0.9rem',
      padding: '8px 20px',
      margin: '0 6px',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      color: '#FFFFFF',
      transition: 'all 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.15) !important',
        transform: 'scale(1.03)',
      },
      '&:active': {
        transform: 'scale(0.96)',
      },
    },
    // Primary Action Button ("Play"): Apple Music Red Capsule
    'button:first-child:not(:only-child)': {
      background: `${ACCENT_GRADIENT} !important`,
      color: '#FFFFFF !important',
      border: 'none !important',
      padding: '8px 24px !important',
      boxShadow: '0 4px 16px rgba(250, 36, 60, 0.45) !important',
      '&:hover': {
        background: 'linear-gradient(135deg, #FF4D6D 0%, #FA243C 100%) !important',
        transform: 'scale(1.04) !important',
        boxShadow: '0 6px 22px rgba(250, 36, 60, 0.6) !important',
      },
      '&:active': {
        transform: 'scale(0.96) !important',
      },
      '& svg': {
        color: '#FFFFFF !important',
      },
    },
    // Secondary Action Button ("Shuffle"): Apple Translucent Glass Capsule
    'button:nth-child(2):not(:only-child)': {
      background: 'rgba(255, 255, 255, 0.1) !important',
      backdropFilter: 'blur(20px)',
      color: `${ACCENT} !important`,
      border: '1px solid rgba(255, 255, 255, 0.14) !important',
      '&:hover': {
        background: 'rgba(255, 255, 255, 0.18) !important',
        color: '#FFFFFF !important',
      },
      '& svg': {
        color: `${ACCENT} !important`,
      },
    },
  },
})

export default {
  themeName: 'AMusic',
  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'SF Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    h6: {
      fontSize: '1.05rem',
      fontWeight: 600,
      letterSpacing: '-0.015em',
    },
    h5: {
      fontSize: '1.75rem',
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    body1: {
      fontSize: '0.9rem',
      letterSpacing: '-0.01em',
    },
    body2: {
      fontSize: '0.825rem',
    },
  },
  palette: {
    primary: {
      main: ACCENT,
      light: ACCENT_HOVER,
      dark: ACCENT_ACTIVE,
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: ACCENT,
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#000000',
      paper: '#18181B',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#86868B',
      disabled: '#6E6E73',
    },
    type: 'dark',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#000000',
          color: '#FFFFFF',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
      },
    },
    // Apple Translucent Top Bar
    MuiAppBar: {
      positionFixed: {
        backgroundColor: 'rgba(14, 14, 16, 0.75) !important',
        backdropFilter: 'blur(40px) saturate(200%)',
        WebkitBackdropFilter: 'blur(40px) saturate(200%)',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      },
      colorSecondary: {
        color: '#FFFFFF',
      },
    },
    MuiToolbar: {
      root: {
        background: 'transparent !important',
      },
    },
    // Apple Obsidian Glass Sidebar
    MuiDrawer: {
      root: {
        background: 'rgba(17, 17, 20, 0.95) !important',
        borderRight: '1px solid rgba(255, 255, 255, 0.06)',
      },
      paper: {
        background: 'rgba(17, 17, 20, 0.95) !important',
        backdropFilter: 'blur(30px) saturate(180%)',
        WebkitBackdropFilter: 'blur(30px) saturate(180%)',
        borderRight: '1px solid rgba(255, 255, 255, 0.06)',
      },
    },
    // Apple Sidebar Navigation Links
    MuiListItem: {
      root: {
        borderRadius: '8px',
        margin: '2px 8px',
        padding: '7px 12px',
        color: '#A1A1A6',
        transition: 'all 0.18s cubic-bezier(0.25, 1, 0.5, 1)',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.07)',
          color: '#FFFFFF',
        },
        '&.Mui-selected': {
          backgroundColor: `${ACCENT_TINT} !important`,
          color: `${ACCENT} !important`,
          fontWeight: 600,
          '& .MuiListItemIcon-root': {
            color: `${ACCENT} !important`,
          },
        },
      },
    },
    MuiListItemIcon: {
      root: {
        color: '#86868B',
        minWidth: '34px',
        transition: 'color 0.18s ease',
      },
    },
    RaMenuItemLink: {
      root: {
        borderRadius: '8px',
        margin: '2px 8px',
        padding: '7px 12px',
        color: '#A1A1A6 !important',
        transition: 'all 0.18s cubic-bezier(0.25, 1, 0.5, 1)',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.07) !important',
          color: '#FFFFFF !important',
        },
        '&[class*="makeStyles-active"]': {
          backgroundColor: `${ACCENT_TINT} !important`,
          color: `${ACCENT} !important`,
          fontWeight: 600,
          '& .MuiListItemIcon-root': {
            color: `${ACCENT} !important`,
          },
        },
      },
      active: {
        backgroundColor: `${ACCENT_TINT} !important`,
        color: `${ACCENT} !important`,
        fontWeight: 600,
        '& .MuiListItemIcon-root': {
          color: `${ACCENT} !important`,
        },
      },
    },
    // Apple Music Pill Buttons
    MuiButton: {
      root: {
        background: ACCENT_GRADIENT,
        color: '#FFFFFF',
        borderRadius: '9999px',
        padding: '7px 20px',
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '0.875rem',
        boxShadow: '0 4px 14px rgba(250, 36, 60, 0.35)',
        transition: 'all 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
        '&:hover': {
          background: 'linear-gradient(135deg, #FF4D6D 0%, #FA243C 100%) !important',
          transform: 'scale(1.03)',
          boxShadow: '0 6px 20px rgba(250, 36, 60, 0.5)',
        },
        '&:active': {
          transform: 'scale(0.96)',
        },
      },
      textPrimary: {
        color: '#FFFFFF',
        background: 'transparent',
        boxShadow: 'none',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.08) !important',
          boxShadow: 'none',
        },
      },
      textSecondary: {
        color: '#FFFFFF',
        backgroundColor: ACCENT,
      },
      textSizeSmall: {
        fontSize: '0.8rem',
        padding: '5px 14px',
      },
      label: {
        padding: '0 4px',
      },
    },
    MuiIconButton: {
      root: {
        color: 'rgba(255, 255, 255, 0.85)',
        transition: 'all 0.18s cubic-bezier(0.25, 1, 0.5, 1)',
        '&:hover': {
          color: ACCENT_HOVER,
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          transform: 'scale(1.08)',
        },
        '&:active': {
          transform: 'scale(0.92)',
        },
      },
    },
    // Apple Grid View for Albums
    NDAlbumGridView: {
      albumName: {
        color: '#FFFFFF',
        fontWeight: 600,
        fontSize: '0.925rem',
        letterSpacing: '-0.01em',
        marginTop: '8px',
      },
      albumArtistName: {
        color: '#86868B',
        fontSize: '0.825rem',
        marginTop: '2px',
      },
      albumPlayButton: {
        color: `${ACCENT} !important`,
        backgroundColor: 'rgba(255, 255, 255, 0.95) !important',
        borderRadius: '50%',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.55)',
        transition: 'all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)',
        '&:hover': {
          transform: 'scale(1.15) !important',
          backgroundColor: '#FFFFFF !important',
        },
      },
      cover: {
        borderRadius: '12px !important',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
        transition: 'all 0.28s cubic-bezier(0.25, 1, 0.5, 1)',
        '&:hover': {
          transform: 'translateY(-5px) scale(1.02)',
          boxShadow: '0 16px 36px rgba(0, 0, 0, 0.7)',
        },
      },
    },
    // Apple Music Track Table (Borderless, Capsule Hover)
    MuiTableBody: {
      root: {
        '& > tr:nth-child(odd)': {
          background: 'transparent',
        },
      },
    },
    MuiTableRow: {
      root: {
        background: 'transparent',
        borderRadius: '8px',
        transition: 'background-color 0.15s ease',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.06) !important',
        },
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: '1px solid rgba(255, 255, 255, 0.04) !important',
        padding: '11px 16px !important',
        color: '#86868B !important',
        fontSize: '0.875rem',
        '& img[alt="playing"], & img[alt="paused"]': {
          filter:
            'brightness(0) saturate(100%) invert(27%) sepia(85%) saturate(4500%) hue-rotate(345deg) brightness(98%) contrast(97%)',
        },
        '& img[alt="playing"] + span, & img[alt="paused"] + span': {
          color: `${ACCENT} !important`,
          fontWeight: 600,
        },
      },
      head: {
        borderBottom: '1px solid rgba(255, 255, 255, 0.08) !important',
        color: '#6E6E73 !important',
        fontSize: '0.72rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
      },
    },
    MuiMenuItem: {
      root: {
        fontSize: '0.875rem',
        borderRadius: '8px',
        margin: '2px 6px',
        color: '#FFFFFF',
        transition: 'background-color 0.15s ease',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.08) !important',
        },
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: 'none',
      },
      root: {
        backgroundColor: '#18181B',
        color: '#FFFFFF',
      },
      rounded: {
        borderRadius: '14px',
      },
    },
    MuiChip: {
      root: {
        borderRadius: '9999px',
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        color: '#FFFFFF',
        fontWeight: 500,
      },
    },
    // Apple Search Capsule
    RaSearchInput: {
      input: {
        '& .MuiInputBase-root': {
          backgroundColor: 'rgba(255, 255, 255, 0.08) !important',
          borderRadius: '9999px !important',
          color: '#FFFFFF',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
          '& fieldset': {
            borderColor: 'transparent',
          },
          '&:hover fieldset': {
            borderColor: 'transparent',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'transparent',
          },
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.12) !important',
          },
          '&.Mui-focused': {
            backgroundColor: 'rgba(255, 255, 255, 0.15) !important',
            boxShadow: `0 0 0 2px ${ACCENT}`,
          },
          '& svg': {
            color: '#86868B !important',
          },
        },
      },
    },
    // Hero Album Details Page
    NDAlbumDetails: {
      root: {
        boxShadow: 'none',
        background: 'transparent',
      },
      cover: {
        borderRadius: '16px',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.75)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      },
      recordName: {
        fontWeight: 800,
        fontSize: '2.2rem',
        letterSpacing: '-0.025em',
        color: '#FFFFFF',
      },
      artistName: {
        color: ACCENT,
        fontWeight: 600,
        fontSize: '1.25rem',
      },
    },
    NDAlbumShow: {
      albumActions: actionButtonsStyle(),
    },
    NDPlaylistShow: {
      playlistActions: actionButtonsStyle(),
    },
    NDLogin: {
      systemNameLink: {
        color: ACCENT,
      },
      welcome: {
        color: '#FFFFFF',
      },
      card: {
        minWidth: 320,
        backgroundColor: '#18181B',
        borderRadius: '18px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
      },
      icon: {
        filter:
          'brightness(0) saturate(100%) invert(27%) sepia(85%) saturate(4500%) hue-rotate(345deg) brightness(98%) contrast(97%)',
      },
    },
    NDMobileArtistDetails: {
      bgContainer: {
        background: '#000000',
      },
      artistName: {
        fontWeight: 800,
        fontSize: '2.2rem',
        letterSpacing: '-0.025em',
      },
    },
    NDDesktopArtistDetails: {
      artistName: {
        fontWeight: 800,
        fontSize: '2.5rem',
        letterSpacing: '-0.03em',
      },
      artistDetail: {
        padding: 'unset',
        paddingBottom: '1rem',
      },
    },
    RaPaginationActions: {
      currentPageButton: {
        border: `1px solid ${ACCENT}`,
        color: ACCENT,
        background: ACCENT_TINT,
        borderRadius: '8px',
      },
      button: {
        borderRadius: '8px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        color: '#FFFFFF',
      },
      actions: {
        '@global': {
          '.next-page, .previous-page': {
            border: '0 none',
            color: '#FFFFFF',
          },
        },
      },
    },
  },
  player: {
    theme: 'dark',
    stylesheet,
  },
}
