// -------------------------------------------------
// Theme
// -------------------------------------------------

import _theme from "./theme"
const styled = _theme.styled

export const theme = _theme
export const css = theme.css
export const keyframes = theme.keyframes
export const globalCss = theme.globalCss
export const getCssText = theme.getCssText
export const createTheme = theme.createTheme
export default styled

// -------------------------------------------------
// Variants
// -------------------------------------------------

export * from "./variants/gap"

// -------------------------------------------------
// Animations
// -------------------------------------------------

export * as animations from "./animations"

// -------------------------------------------------
// Globals
// -------------------------------------------------

export { default as globalStyles } from "./globals"

// -------------------------------------------------
// Types
// -------------------------------------------------

export type { CSS } from "./theme"
export type { Colors } from "./theme"
export type { VariantProps } from "./theme"
export type { ComponentProps } from "./theme"
