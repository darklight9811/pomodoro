// Packages
import { createModel } from "@rematch/core"

// Types
import { Step } from "@app/types/general"

const stepModel = createModel()({
	// -------------------------------------------------
	// State
	// -------------------------------------------------

	state: [] as Step[],

	// -------------------------------------------------
	// Reducers
	// -------------------------------------------------

	reducers: {
		add (store, add: Step) {
			return [...store, add]
		},
		update (store, add: Step) {
			return store.map(step => step.id === add.id ? add : step)
		},
		set (_, store: Step[]) {
			return store
		},
		remove (store, id: string) {
			return store.filter(step => step.id !== id)
		},
	},
})

export default stepModel
