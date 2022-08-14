// Packages
import { useSelector } from "react-redux"
import { RematchRootState } from "@rematch/core"

// Helpers
import Service from "@app/helpers/service"

// Store
import { RootModel } from ".."

@Service.store("task")
class TaskService extends Service<"task"> {
	// -------------------------------------------------
	// Main methods
	// -------------------------------------------------

	public start () {
		const [state] = this.store()
		const [,dispatch] = this.model()

		dispatch.start(state.step[0]?.id)
	}

	public next () {
		const [state] = this.store()
		const [,dispatch] = this.model()
		const next = state.step.find((_, i, arr) => i > 0 && arr[i - 1].id === state.task.current!) || state.step[0]

		dispatch.start(next.id)
	}

	public clear () {
		const [,dispatch] = this.model()

		dispatch.clear()
	}

	public resume () {
		const [,dispatch] = this.model()

		dispatch.setRunning(true)
	}

	public stop () {
		const [,dispatch] = this.model()

		dispatch.setRunning(false)
	}

	// -------------------------------------------------
	// hooks
	// -------------------------------------------------

	public useCurrent () {
		const [state] = this.model()
		return useSelector((store: RematchRootState<RootModel>) => store.step.find(i => i.id === state.current))
	}
}

const taskService = new TaskService()
export default taskService