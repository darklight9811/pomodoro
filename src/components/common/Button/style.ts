// Style
import { css } from "@app/style"

// -------------------------------------------------
// Button
// -------------------------------------------------

export const button = css({
	position: "relative",

	fontWeight: "bold",

	padding: "$padding calc($padding * 2)",
	borderRadius: 10,

	variants: {
		fill: {
			true: {
				width: "100%",
			},
		},

		type: {
			primary: {},
			link: {
				color: "$dark",
				background: "transparent",
			},
		},

		overlay: {
			true: {},
			false: {},
		},

		size: {
			lg: {
				fontSize: "1.7em",
			},
			sm: {
				fontSize: "1em",
				padding: "calc($padding / 2) $padding",
			}
		},

		disabled: {
			true: {
				opacity: 0.6,
			},
			false: {
				"&:hover": {
					cursor: "pointer",
				},
			},
		},

		active: {
			true: {},
		},
	},

	defaultVariants: {
		disabled: false,
		overlay: false,
		type: "primary",
	},
})