// Packages
import { useSelector } from "react-redux"
import { RematchRootState } from "@rematch/core"

// Helpers
import Service from "@app/helpers/service"
import { array_move, hash } from "@app/helpers/general"

// Types
import { Step } from "@app/types/general"

// Store
import { reduxStore, RootModel } from ".."

@Service.store("step")
class StepService extends Service<"step"> {
	// -------------------------------------------------
	// Main methods
	// -------------------------------------------------

	public load () {
		const [,dispatch] = this.model()
		const cached = localStorage.getItem("steps")

		dispatch.set(cached ? JSON.parse(cached) : [])

		reduxStore.subscribe(() => localStorage.setItem("steps", JSON.stringify(reduxStore.getState().step)))
	}

	public add (step: Omit<Step, "id">) {
		const [,dispatch] = this.model()

		dispatch.add({ id: hash(), ...step })

		return true
	}

	public update (id: string, step: Omit<Step, "id">) {
		const [,dispatch] = this.model()

		dispatch.update({id, ...step})

		return true
	}

	public moveUp (id: string) {
		const [state, dispatch] = this.model()
		const index = state.findIndex(step => step.id === id)

		dispatch.set(array_move(state, index, index - 1))
	}

	public moveDown (id: string) {
		const [state, dispatch] = this.model()
		const index = state.findIndex(step => step.id === id)

		dispatch.set(array_move(state, index, index + 1))
	}

	public remove (payload: string | Step) {
		const id = typeof payload === "string" ? payload : payload.id
		const [, dispatch] = this.model()

		dispatch.remove(id)
	}

	// -------------------------------------------------
	// hooks
	// -------------------------------------------------

	public useStep (id: string) {
		const state = useSelector((store: RematchRootState<RootModel>) => store.step.find(i => i.id === id))

		return state
	}
}

const stepService = new StepService()
export default stepService