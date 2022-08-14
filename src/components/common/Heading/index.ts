// Style
import styled, { align } from "@app/style"

const Heading = styled("h1", {
	display: "flex",
	flexGrow: "unset",

	marginTop: 0,

	variants: {
		align: align,

		size: {
			1: {
				fontSize: "3em",
			},
			2: {
				fontSize: "2em",
			},
			3: {
				fontSize: "1.2em",
			},
			4: {
				fontSize: "1em",
			},
		},

		m: {
			0: {
				margin: 0,
			},
			1: {
				margin: "$margin",
			},
		},
	},

	defaultVariants: {
		size: 1,
	},
})

export default Heading