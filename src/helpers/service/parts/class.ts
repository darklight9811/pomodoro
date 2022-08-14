/* eslint-disable react-hooks/rules-of-hooks */

// Packages
import { ModelNames, reduxStore, RootModel } from "@app/store"
import { useDispatch, useSelector } from "react-redux"

// Interfaces
import { RematchRootState, RematchDispatch } from "@rematch/core"

// Decorators
import { ServiceHook, ServiceInitializerDecorator, ServiceLoading } from "./decorator"

type StoreGeneric<ModelName extends ModelNames> = {
	store: [
		RematchRootState<RootModel>,
		RematchDispatch<RootModel>,
	];

	model: [
		RematchRootState<RootModel>[ModelName],
		RematchDispatch<RootModel>[ModelName],
	];
};

export default abstract class Service<ModelName extends ModelNames> {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	public static hook: typeof ServiceHook
	public static loadable: typeof ServiceLoading
	public static store: typeof ServiceInitializerDecorator

	// -------------------------------------------------
	// Main methods
	// -------------------------------------------------

	public store () {
		// response
		return [
			reduxStore.getState(),
			reduxStore.dispatch,
		] as any as StoreGeneric<ModelName>["store"]
	}

	public model () {
		// gather
		const model = (this.constructor as any).$model

		// response
		return [
			reduxStore.getState()[model],
			reduxStore.dispatch[model],
		] as StoreGeneric<ModelName>["model"]
	}

	// -------------------------------------------------
	// Hooks
	// -------------------------------------------------

	public useModel () {
		const model = (this.constructor as any).$model

		const state 	= useSelector((store: RematchRootState<RootModel>) => store[model as string])
		const dispatch	= useDispatch()

		return [state, dispatch[model as string]] as StoreGeneric<ModelName>["model"]
	}
}