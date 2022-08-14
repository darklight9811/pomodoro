// Packages
import { createStitches } from "@stitches/react"
import type * as Stitches from "@stitches/react"

const theme = createStitches({
	// -------------------------------------------------
	// Color table
	// -------------------------------------------------
	//
	// Responsible for handling color references to be
	// used inside of our scope. Does not contain a
	// direct link to any component.
	//
	// -------------------------------------------------

	theme: {
		colors: {
			/** Basic */
			dark: "#3e4146",
			dark_alter: "#909097",
			dark_disabled: "#606065",

			light: "#f9f9f9",
			light_alter: "#606060",
			light_disabled: "#909090",

			success: "#49A939",
			warning: "#F4E73F",
			info: "#315CA5",
			danger: "#CC2724",

			/** Identity */
			primary: "#663200",
			primary_light: "#F2E5CC",
		},

		sizes: {
			// container
			containerXS: "100%",
			containerSM: "540px",
			containerMD: "720px",
			containerLG: "960px",
			containerXL: "1140px",
			containerXXL: "1320px",

			// general
			borderWidth: "2px",

			// font-sizes
		},

		fontWeights: {
			light: 300,
			regular: 400,
			bold: 700,
			black: 900,
		},

		references: {
			color: "$colors$dark",
			background: "$colors$light",
		},

		space: {
			margin: "12px",
			padding: "12px",
		},

		radii: {
			sm: "4px",
			radius: "8px",
		},
		fontSizes: {
			title: "2.625rem",
			subtitle: "1.5rem",
			text: "1rem",
			components: "18px",
			aux: "0.75rem",
		},
	},

	// -------------------------------------------------
	// Responsivity
	// -------------------------------------------------

	media: {
		xs: "(max-width: 576px)",
		sm: "(min-width: 576px) and (max-width: 768px)",
		md: "(min-width: 768px) and (max-width: 992px)",
		lg: "(min-width: 992px) and (max-width: 1200px)",
		xl: "(min-width: 1200px)",
	},
})

export const css = theme.css
export const keyframes = theme.keyframes
export const globalCss = theme.globalCss
export const getCssText = theme.getCssText
export const createTheme = theme.createTheme
export default theme

export type CSS = Stitches.CSS<typeof theme.config>

export type Colors = keyof typeof theme.config.theme.colors

export type VariantProps<T> = Stitches.VariantProps<T>

export type ComponentProps<T> = Stitches.ComponentProps<T>
