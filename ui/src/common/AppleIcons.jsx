import React from 'react'

/**
 * Smooth Apple Music Play (Resume) Icon.
 * Smoothly rounded solid triangle pointing right.
 */
export const ApplePlayIcon = ({ size = 20, color = 'currentColor', className = '', style = {} }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }}
  >
    <path d="M7.75 4.98a1 1 0 0 1 1.51-.86l10.35 6.21a1 1 0 0 1 0 1.72L9.26 18.26a1 1 0 0 1-1.51-.86V4.98z" />
  </svg>
)

/**
 * Smooth Apple Music Pause Icon.
 * Two rounded vertical bars with Apple's exact proportions.
 */
export const ApplePauseIcon = ({ size = 20, color = 'currentColor', className = '', style = {} }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }}
  >
    <rect x="6.5" y="4.5" width="3.5" height="15" rx="1.75" />
    <rect x="14" y="4.5" width="3.5" height="15" rx="1.75" />
  </svg>
)

export default {
  ApplePlayIcon,
  ApplePauseIcon,
}
