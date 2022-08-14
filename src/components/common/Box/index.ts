// Style
import styled, { gap } from "@app/style"

const Box = styled("div", {
	display: "flex",

	// -------------------------------------------------
	// Variants
	// -------------------------------------------------

	variants: {
		gap,
		// -------------------------------------------------
		// Column
		// -------------------------------------------------
		fill: { true: { width: "100%" } },
		col: {
			0: { display: "none" },
			1: { width: `${100 / 12}%` },
			2: { width: `${100 / 12 * 2}%` },
			3: { width: `${100 / 12 * 3}%` },
			4: { width: `${100 / 12 * 4}%` },
			5: { width: `${100 / 12 * 5}%` },
			6: { width: `${100 / 12 * 6}%` },
			7: { width: `${100 / 12 * 7}%` },
			8: { width: `${100 / 12 * 8}%` },
			9: { width: `${100 / 12 * 9}%` },
			10: { width: `${100 / 12 * 10}%` },
			11: { width: `${100 / 12 * 11}%` },
			12: { width: `${100}%` },
		},
		// -------------------------------------------------
		// Margin
		// -------------------------------------------------
		m: {
			"0": { margin: 0 },
			"1": { margin: "$padding" },
			"2": { margin: "calc($padding * 2)" },
			"3": { margin: "calc($padding * 3)" },
			"4": { margin: "calc($padding * 4)" },
		},
		mx: {
			"0": { marginLeft: 0, marginRight: 0 },
			"1": { marginLeft: "$padding", marginRight: "$padding" },
			"2": { marginLeft: "calc($padding * 2)", marginRight: "calc($padding * 2)" },
			"3": { marginLeft: "calc($padding * 3)", marginRight: "calc($padding * 3)" },
			"4": { marginLeft: "calc($padding * 4)", marginRight: "calc($padding * 4)" },
		},
		my: {
			"0": { marginTop: 0, marginBottom: 0 },
			"1": { marginTop: "$padding", marginBottom: "$padding" },
			"2": { marginTop: "calc($padding * 2)", marginBottom: "calc($padding * 2)" },
			"3": { marginTop: "calc($padding * 3)", marginBottom: "calc($padding * 3)" },
			"4": { marginTop: "calc($padding * 4)", marginBottom: "calc($padding * 4)" },
		},
		mb: {
			"0": { marginBottom: 0 },
			"1": { marginBottom: "$padding" },
			"2": { marginBottom: "calc($padding * 2)" },
			"3": { marginBottom: "calc($padding * 3)" },
			"4": { marginBottom: "calc($padding * 4)" },
		},
		ml: {
			"0": { marginLeft: 0 },
			"1": { marginLeft: "$padding" },
			"2": { marginLeft: "calc($padding * 2)" },
			"3": { marginLeft: "calc($padding * 3)" },
			"4": { marginLeft: "calc($padding * 4)" },
		},
		mr: {
			"0": { marginRight: 0 },
			"1": { marginRight: "$padding" },
			"2": { marginRight: "calc($padding * 2)" },
			"3": { marginRight: "calc($padding * 3)" },
			"4": { marginRight: "calc($padding * 4)" },
		},
		mt: {
			"0": { marginTop: 0 },
			"1": { marginTop: "$padding" },
			"2": { marginTop: "calc($padding * 2)" },
			"3": { marginTop: "calc($padding * 3)" },
			"4": { marginTop: "calc($padding * 4)" },
		},
		// -------------------------------------------------
		// Padding
		// -------------------------------------------------
		p: {
			"0": { padding: 0 },
			"1": { padding: "$padding" },
			"2": { padding: "calc($padding * 2)" },
			"3": { padding: "calc($padding * 3)" },
			"4": { padding: "calc($padding * 4)" },
		},
		px: {
			"0": { paddingLeft: 0, paddingRight: 0 },
			"1": { paddingLeft: "$padding", paddingRight: "$padding" },
			"2": { paddingLeft: "calc($padding * 2)", paddingRight: "calc($padding * 2)" },
			"3": { paddingLeft: "calc($padding * 3)", paddingRight: "calc($padding * 3)" },
			"4": { paddingLeft: "calc($padding * 4)", paddingRight: "calc($padding * 4)" },
		},
		py: {
			"0": { paddingTop: 0, paddingBottom: 0 },
			"1": { paddingTop: "$padding", paddingBottom: "$padding" },
			"2": { paddingTop: "calc($padding * 2)", paddingBottom: "calc($padding * 2)" },
			"3": { paddingTop: "calc($padding * 3)", paddingBottom: "calc($padding * 3)" },
			"4": { paddingTop: "calc($padding * 4)", paddingBottom: "calc($padding * 4)" },
		},
		pb: {
			"0": { paddingBottom: 0 },
			"1": { paddingBottom: "$padding" },
			"2": { paddingBottom: "calc($padding * 2)" },
			"3": { paddingBottom: "calc($padding * 3)" },
			"4": { paddingBottom: "calc($padding * 4)" },
		},
		pl: {
			"0": { paddingLeft: 0 },
			"1": { paddingLeft: "$padding" },
			"2": { paddingLeft: "calc($padding * 2)" },
			"3": { paddingLeft: "calc($padding * 3)" },
			"4": { paddingLeft: "calc($padding * 4)" },
		},
		pr: {
			"0": { paddingRight: 0 },
			"1": { paddingRight: "$padding" },
			"2": { paddingRight: "calc($padding * 2)" },
			"3": { paddingRight: "calc($padding * 3)" },
			"4": { paddingRight: "calc($padding * 4)" },
		},
		pt: {
			"0": { paddingTop: 0 },
			"1": { paddingTop: "$padding" },
			"2": { paddingTop: "calc($padding * 2)" },
			"3": { paddingTop: "calc($padding * 3)" },
			"4": { paddingTop: "calc($padding * 4)" },
		},
		direction: {
			column: { flexDirection: "column" },
			row: { flexDirection: "row" },
			rowReverse: { flexDirection: "row-reverse" },
		},
		horizontal: {
			left: {
				justifyContent: "left",
			},
			right: {
				justifyContent: "right",
			},
			center: {
				justifyContent: "center",
			},
			around: {
				justifyContent: "space-around",
			},
			between: {
				justifyContent: "space-between",
			},
			evenly: {
				justifyContent: "space-evenly",
			},
		},
		vertical: {
			top: {
				alignItems: "flex-start",
			},
			bottom: {
				alignItems: "end",
			},
			center: {
				alignItems: "center",
			},
			fill: {
				alignItems: "stretch",
			},
		},
		container: {
			true: {
				"@initial": { width: "$containerXS", maxWidth: "100%", margin: "0 auto" },
				"@xs": { width: "$containerXS", maxWidth: "100%", margin: "0 auto" },
				"@sm": { width: "$containerSM", maxWidth: "100%", margin: "0 auto" },
				"@md": { width: "$containerMD", maxWidth: "100%", margin: "0 auto" },
				"@lg": { width: "$containerLG", maxWidth: "100%", margin: "0 auto" },
				"@xl": { width: "$containerXL", maxWidth: "100%", margin: "0 auto" },
				"@xxl": { width: "$containerXXL", maxWidth: "100%", margin: "0 auto" },
			},
		},
		fullscreen: {
			true: {
				position: "fixed",

				top: 0,
				left: 0,

				width: "100%",
				height: "100%",
			},
		},
	},

	// -------------------------------------------------
	// Default variants
	// -------------------------------------------------

	defaultVariants: {
		direction: "column",
	},
})

export default Box