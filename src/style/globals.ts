// Style
import { globalCss } from "./theme"

const globalStyles = globalCss({
	// -------------------------------------------------
	// General hotfixes
	// -------------------------------------------------

	body: {
		margin: 0,
		padding: 0,

		background: "$references$background",
	},

	// -------------------------------------------------
	// General
	// -------------------------------------------------

	"*": {
		fontFamily: "\"Oxanium\", sans-serif",
		color: "$references$color",
		boxSizing: "border-box",
	},

	"svg": {
		stroke: "$references$content",
	},
})

export default globalStyles