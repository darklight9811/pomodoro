// Packages
import { init, Models } from "@rematch/core"
import type { RematchDispatch, RematchRootState } from "@rematch/core"

// Models
import step from "./step/model"
import task from "./task/model"

// -------------------------------------------------
// Store setup
// -------------------------------------------------

export const models = {
	step,
	task,
}

export type RootModel = Models<typeof models> & typeof models

export const reduxStore = init<RootModel>({
	models,
})

// -------------------------------------------------
// Export types
// -------------------------------------------------

export type Store = typeof reduxStore
export type ModelNames = keyof typeof models
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>