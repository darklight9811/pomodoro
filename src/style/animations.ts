import { keyframes } from "./theme"

export const popUp = keyframes({
	from: {
		transform: "scale(0)",
		opacity: 0,
	},
	to: {
		transform: "scale(1)",
		opacity: 1,
	},
})

export const fadeIn = keyframes({
	from: {
		opacity: 0,
	},
	to: {
		opacity: 1,
	},
})

export const topIn = keyframes({
	from: {
		opacity: 0,
		transform: "translate(0, -20px)",
	},
})

export const topOut = keyframes({
	to: {
		transform: "translate(0, -20px)",
		opacity: 0,
	},
})

export const fadeOut = keyframes({
	to: {
		opacity: 0,
	},
})

export const rotate = keyframes({
	to: {
		rotate: "360deg",
	},
})
