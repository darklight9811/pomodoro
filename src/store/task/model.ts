// Packages
import { createModel } from "@rematch/core"

const taskModel = createModel()({
	// -------------------------------------------------
	// State
	// -------------------------------------------------

	state: {
		current: undefined as string | undefined,
		running: false,
	},

	// -------------------------------------------------
	// Reducers
	// -------------------------------------------------

	reducers: {
		start(store, id: string) {
			return {
				...store,
				current: id,
				running: true,
			}
		},
		clear(store) {
			return {
				...store,
				current: undefined,
				running: false,
			}
		},
		setRunning (store, toggle?: boolean) {
			return {
				...store,
				running: typeof toggle === "boolean" ? toggle: !store.running,
			}
		}
	},
})

export default taskModel
