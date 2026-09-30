/**
 * amusic.js
 *
 * Apple Music (AMusic) macOS Desktop Theme for Navidrome.
 * Transforms the application UX and UI into an authentic Apple Music experience:
 * - Exact Apple Music Dark Palette: Pitch black (#000000), Obsidian Glass (#121214 / #1C1C1E),
 *   and radiant Apple Crimson (#FA243C).
 * - Full macOS UX Overhaul: Apple Music sidebar with crimson SF icons and capsule navigation,
 *   floating liquid glass island player dock (NOT full-width!), spacious album cards with
 *   drop shadows and circular play button, and borderless tracklists with hover capsules.
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
      padding: '9px 22px',
      margin: '0 6px',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      color: '#FFFFFF',
      transition: 'all 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.15) !important',
        transform: 'scale(1.04)',
      },
      '&:active': {
        transform: 'scale(0.96)',
      },
    },
    // Primary Action Button ("Play"): Apple Music Crimson Pill
    'button:first-child:not(:only-child)': {
      background: `${ACCENT_GRADIENT} !important`,
      color: '#FFFFFF !important',
      border: 'none !important',
      padding: '10px 28px !important',
      fontSize: '0.95rem !important',
      boxShadow: '0 6px 20px rgba(250, 36, 60, 0.45) !important',
      '&:hover': {
        background: 'linear-gradient(135deg, #FF4D6D 0%, #FA243C 100%) !important',
        transform: 'scale(1.04) !important',
        boxShadow: '0 8px 24px rgba(250, 36, 60, 0.6) !important',
      },
      '&:active': {
        transform: 'scale(0.96) !important',
      },
      '& svg': {
        color: '#FFFFFF !important',
        fontSize: '20px !important',
      },
    },
    // Secondary Action Button ("Shuffle"): Apple Frosted Glass Pill
    'button:nth-child(2):not(:only-child)': {
      background: 'rgba(255, 255, 255, 0.1) !important',
      backdropFilter: 'blur(16px)',
      color: `${ACCENT} !important`,
      border: '1px solid rgba(255, 255, 255, 0.14) !important',
      padding: '10px 24px !important',
      fontSize: '0.95rem !important',
      '&:hover': {
        background: 'rgba(255, 255, 255, 0.18) !important',
        color: '#FFFFFF !important',
      },
      '& svg': {
        color: `${ACCENT} !important`,
        fontSize: '18px !important',
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
    // Apple Music macOS Obsidian Sidebar
    MuiDrawer: {
      root: {
        background: 'rgba(18, 18, 22, 0.96) !important',
        borderRight: '1px solid rgba(255, 255, 255, 0.06)',
      },
      paper: {
        background: 'rgba(18, 18, 22, 0.96) !important',
        backdropFilter: 'blur(30px) saturate(180%)',
        WebkitBackdropFilter: 'blur(30px) saturate(180%)',
        borderRight: '1px solid rgba(255, 255, 255, 0.06)',
      },
    },
    // Sidebar Navigation Links
    MuiListItem: {
      root: {
        borderRadius: '9px',
        margin: '3px 10px',
        padding: '8px 14px',
        color: '#D1D1D6',
        transition: 'all 0.18s cubic-bezier(0.25, 1, 0.5, 1)',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          color: '#FFFFFF',
          transform: 'translateX(2px)',
        },
        '&.Mui-selected': {
          backgroundColor: `${ACCENT_TINT} !important`,
          color: `${ACCENT} !important`,
          fontWeight: 600,
          boxShadow: `inset 3px 0 0 0 ${ACCENT}`,
          '& .MuiListItemIcon-root': {
            color: `${ACCENT} !important`,
          },
        },
      },
    },
    // Apple Music Pink Sidebar Icons
    MuiListItemIcon: {
      root: {
        color: `${ACCENT} !important`,
        minWidth: '34px',
        transition: 'color 0.18s ease',
      },
    },
    NDSubMenu: {
      menuHeader: {
        width: '100%',
        color: '#86868B',
        textTransform: 'uppercase',
        fontSize: '0.72rem',
        fontWeight: 700,
        letterSpacing: '0.08em',
      },
      headerText: {
        fontSize: '0.72rem !important',
        fontWeight: '700 !important',
        letterSpacing: '0.08em !important',
        textTransform: 'uppercase !important',
        color: '#86868B !important',
      },
      icon: {
        minWidth: '34px',
        color: `${ACCENT} !important`,
      },
    },
    RaMenuItemLink: {
      root: {
        borderRadius: '9px',
        margin: '3px 10px',
        padding: '8px 14px',
        color: '#D1D1D6 !important',
        transition: 'all 0.18s cubic-bezier(0.25, 1, 0.5, 1)',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.08) !important',
          color: '#FFFFFF !important',
          transform: 'translateX(2px)',
        },
        '&[class*="makeStyles-active"]': {
          backgroundColor: `${ACCENT_TINT} !important`,
          color: `${ACCENT} !important`,
          fontWeight: 600,
          boxShadow: `inset 3px 0 0 0 ${ACCENT}`,
          '& .MuiListItemIcon-root': {
            color: `${ACCENT} !important`,
          },
        },
      },
      active: {
        backgroundColor: `${ACCENT_TINT} !important`,
        color: `${ACCENT} !important`,
        fontWeight: 600,
        boxShadow: `inset 3px 0 0 0 ${ACCENT}`,
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
        padding: '8px 22px',
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
      root: {
        gap: '28px !important',
        margin: '24px !important',
        padding: '0 !important',
      },
      albumName: {
        color: '#FFFFFF',
        fontWeight: 600,
        fontSize: '0.95rem',
        letterSpacing: '-0.015em',
        marginTop: '10px',
        lineHeight: 1.35,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      albumArtistName: {
        color: '#86868B',
        fontSize: '0.85rem',
        marginTop: '2px',
        fontWeight: 400,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      albumPlayButton: {
        color: `${ACCENT} !important`,
        backgroundColor: 'rgba(255, 255, 255, 0.95) !important',
        borderRadius: '50% !important',
        width: '44px !important',
        height: '44px !important',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.6) !important',
        transition: 'all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)',
        '&:hover': {
          transform: 'scale(1.12) !important',
          backgroundColor: '#FFFFFF !important',
        },
      },
      cover: {
        borderRadius: '14px !important',
        boxShadow: '0 10px 28px rgba(0, 0, 0, 0.55)',
        transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
        '&:hover': {
          transform: 'translateY(-8px) scale(1.025)',
          boxShadow: '0 20px 48px rgba(0, 0, 0, 0.75), 0 0 20px rgba(250, 36, 60, 0.2)',
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
        borderRadius: '10px',
        transition: 'background-color 0.15s ease',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.07) !important',
        },
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: '1px solid rgba(255, 255, 255, 0.04) !important',
        padding: '12px 18px !important',
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
        borderRadius: '16px',
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
          backgroundColor: 'rgba(255, 255, 255, 0.09) !important',
          borderRadius: '9999px !important',
          color: '#FFFFFF',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          height: '34px',
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
            backgroundColor: 'rgba(255, 255, 255, 0.13) !important',
          },
          '&.Mui-focused': {
            backgroundColor: 'rgba(255, 255, 255, 0.16) !important',
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
        padding: '1.5rem 0',
      },
      cover: {
        borderRadius: '16px',
        boxShadow: '0 24px 50px rgba(0, 0, 0, 0.75)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
      },
      recordName: {
        fontWeight: 800,
        fontSize: '2.4rem',
        letterSpacing: '-0.03em',
        color: '#FFFFFF',
      },
      artistName: {
        color: ACCENT,
        fontWeight: 600,
        fontSize: '1.35rem',
      },
      recordMeta: {
        color: '#86868B',
        fontSize: '0.875rem',
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
        borderRadius: '20px',
        boxShadow: '0 24px 60px rgba(0, 0, 0, 0.85)',
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
        fontSize: '2.4rem',
        letterSpacing: '-0.03em',
      },
    },
    NDDesktopArtistDetails: {
      artistName: {
        fontWeight: 800,
        fontSize: '2.8rem',
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
