// Style
import { css } from "@app/style"

// -------------------------------------------------
// Label
// -------------------------------------------------

export const label = css({
	fontSize: "0.9em",
	opacity: 0.7,
})

// -------------------------------------------------
// Wrapper
// -------------------------------------------------

export const wrapper = css({
	color: "$dark",

	width: "100%",

	"& > textarea": {
		width: "100%",

		transition: "border .2s ease",
		resize: "vertical",
	},

	variants: {
		invalid: {
			true: {
				"& > textarea": {
					border: "$danger 2px solid",
				},
			},
		},

		size: {
			default: {
				"& > textarea": {
					margin: "$margin 0",
					padding: "calc($padding / 2) $padding",
				},
			},
			minimal: {

			},
		},
	},

	defaultVariants: {
		size: "default",
	},
})

// -------------------------------------------------
// Error
// -------------------------------------------------

export const error = css({
	color: "$danger",

	fontSize: "0.8em",
})