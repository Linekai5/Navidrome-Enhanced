/**
 * amusic.js
 *
 * Apple Music (AMusic) Theme for Navidrome.
 * Implements Apple Music's authentic design language:
 * - Signature Apple Music Red/Pink (#FA2D48) accents
 * - Translucent frosted glassmorphism (backdrop-filter)
 * - SF Pro system typography with refined letter spacing
 * - Rounded pill buttons and cards
 * - Sleek, borderless tracklists and high-contrast metadata
 */

import stylesheet from './amusic.css.js'

export default {
  themeName: 'AMusic',
  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'SF Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    h6: {
      fontSize: '1.05rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontSize: '1.75rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    body1: {
      fontSize: '0.9rem',
      letterSpacing: '-0.005em',
    },
    body2: {
      fontSize: '0.825rem',
    },
  },
  palette: {
    primary: {
      main: '#FA2D48',
      light: '#FF4762',
      dark: '#D61A34',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FA2D48',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#121214',
      paper: '#1C1C1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A1A1A6',
      disabled: '#636366',
    },
    type: 'dark',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#121214',
          color: '#FFFFFF',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
      },
    },
    MuiAppBar: {
      positionFixed: {
        backgroundColor: 'rgba(18, 18, 20, 0.78) !important',
        backdropFilter: 'blur(30px) saturate(190%)',
        WebkitBackdropFilter: 'blur(30px) saturate(190%)',
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
    MuiDrawer: {
      root: {
        background: '#161618 !important',
        borderRight: '1px solid rgba(255, 255, 255, 0.06)',
      },
      paper: {
        background: '#161618 !important',
        borderRight: '1px solid rgba(255, 255, 255, 0.06)',
      },
    },
    MuiListItem: {
      root: {
        borderRadius: '8px',
        margin: '2px 10px',
        padding: '8px 12px',
        color: '#A1A1A6',
        transition: 'all 0.18s cubic-bezier(0.2, 0.8, 0.2, 1)',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          color: '#FFFFFF',
        },
        '&.Mui-selected': {
          backgroundColor: 'rgba(250, 45, 72, 0.15) !important',
          color: '#FA2D48 !important',
          fontWeight: 600,
          '& .MuiListItemIcon-root': {
            color: '#FA2D48 !important',
          },
        },
      },
    },
    MuiListItemIcon: {
      root: {
        color: '#A1A1A6',
        minWidth: '36px',
        transition: 'color 0.18s ease',
      },
    },
    MuiButton: {
      root: {
        background: '#FA2D48',
        color: '#FFFFFF',
        borderRadius: '9999px',
        padding: '6px 18px',
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '0.875rem',
        boxShadow: '0 4px 14px rgba(250, 45, 72, 0.35)',
        transition: 'all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
        '&:hover': {
          background: '#FF4762 !important',
          transform: 'scale(1.03)',
          boxShadow: '0 6px 20px rgba(250, 45, 72, 0.45)',
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
        backgroundColor: '#FA2D48',
      },
      textSizeSmall: {
        fontSize: '0.8rem',
        padding: '4px 12px',
      },
      label: {
        padding: '0 4px',
      },
    },
    MuiIconButton: {
      root: {
        color: 'rgba(255, 255, 255, 0.85)',
        transition: 'all 0.18s cubic-bezier(0.2, 0.8, 0.2, 1)',
        '&:hover': {
          color: '#FA2D48',
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          transform: 'scale(1.08)',
        },
        '&:active': {
          transform: 'scale(0.92)',
        },
      },
    },
    MuiCardMedia: {
      img: {
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45)',
        transition: 'all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
    },
    NDAlbumGridView: {
      albumName: {
        color: '#FFFFFF',
        fontWeight: 600,
        fontSize: '0.95rem',
        letterSpacing: '-0.01em',
        marginTop: '6px',
      },
      albumArtistName: {
        color: '#A1A1A6',
        fontSize: '0.825rem',
      },
      albumPlayButton: {
        color: '#FA2D48 !important',
        backgroundColor: 'rgba(255, 255, 255, 0.95) !important',
        borderRadius: '50%',
        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.5)',
        transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        '&:hover': {
          transform: 'scale(1.15) !important',
          backgroundColor: '#FFFFFF !important',
        },
      },
      cover: {
        borderRadius: '10px !important',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.35)',
        transition: 'all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 14px 32px rgba(0, 0, 0, 0.55)',
        },
      },
    },
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
          backgroundColor: 'rgba(255, 255, 255, 0.05) !important',
        },
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: '1px solid rgba(255, 255, 255, 0.04) !important',
        padding: '10px 16px !important',
        color: '#A1A1A6 !important',
        fontSize: '0.875rem',
        '& img[alt="playing"], & img[alt="paused"]': {
          filter:
            'brightness(0) saturate(100%) invert(35%) sepia(91%) saturate(3475%) hue-rotate(334deg) brightness(99%) contrast(98%)',
        },
        '& img[alt="playing"] + span, & img[alt="paused"] + span': {
          color: '#FA2D48 !important',
          fontWeight: 600,
        },
      },
      head: {
        borderBottom: '1px solid rgba(255, 255, 255, 0.08) !important',
        color: '#6E6E73 !important',
        fontSize: '0.75rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
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
        backgroundColor: '#1C1C1E',
        color: '#FFFFFF',
      },
      rounded: {
        borderRadius: '12px',
      },
    },
    MuiChip: {
      root: {
        borderRadius: '9999px',
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        color: '#FFFFFF',
      },
    },
    RaSearchInput: {
      input: {
        '& .MuiInputBase-root': {
          backgroundColor: 'rgba(255, 255, 255, 0.08) !important',
          borderRadius: '9999px !important',
          color: '#FFFFFF',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.2s ease',
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
            backgroundColor: 'rgba(255, 255, 255, 0.16) !important',
            boxShadow: '0 0 0 2px #FA2D48',
          },
          '& svg': {
            color: '#A1A1A6 !important',
          },
        },
      },
    },
    NDAlbumDetails: {
      root: {
        boxShadow: 'none',
        background: 'transparent',
      },
      cover: {
        borderRadius: '14px',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.65)',
      },
      recordName: {
        fontWeight: 700,
        fontSize: '2rem',
        letterSpacing: '-0.02em',
      },
      artistName: {
        color: '#FA2D48',
        fontWeight: 600,
      },
    },
    NDLogin: {
      systemNameLink: {
        color: '#FA2D48',
      },
      welcome: {
        color: '#FFFFFF',
      },
      card: {
        minWidth: 320,
        backgroundColor: '#1C1C1E',
        borderRadius: '16px',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.7)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
      },
      icon: {
        filter:
          'brightness(0) saturate(100%) invert(35%) sepia(91%) saturate(3475%) hue-rotate(334deg) brightness(99%) contrast(98%)',
      },
    },
    NDMobileArtistDetails: {
      bgContainer: {
        background: '#121214',
      },
      artistName: {
        fontWeight: 700,
        fontSize: '2rem',
        letterSpacing: '-0.02em',
      },
    },
    NDDesktopArtistDetails: {
      artistName: {
        fontWeight: 700,
        fontSize: '2.2rem',
        letterSpacing: '-0.02em',
      },
      artistDetail: {
        padding: 'unset',
        paddingBottom: '1rem',
      },
    },
    RaPaginationActions: {
      currentPageButton: {
        border: '1px solid #FA2D48',
        color: '#FA2D48',
        background: 'rgba(250, 45, 72, 0.12)',
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
