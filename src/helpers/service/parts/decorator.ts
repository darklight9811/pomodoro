// Store
import type { ModelNames } from "@app/store"

// Types
import type { ServiceInterface } from "../types"

export function ServiceInitializerDecorator (model?: ModelNames): ClassDecorator {
	return function (target) {
		const classModel = target as unknown as ServiceInterface
		classModel.$model = model
	}
}

export function ServiceLoading (lock = false): MethodDecorator {
	return function (ctx: any, _, descriptor) {
		const fn = descriptor.value

		if (typeof fn === "function") {
			descriptor.value = async function(...args: any[]) {
				const [state, dispatch] = ctx.model()

				if (state.loading && lock) return

				dispatch.setLoading(true)

				const result = await fn.bind(ctx)(...args)

				dispatch.setLoading(false)

				return result
			} as any
		}

		return descriptor
	}
}

export function ServiceHook (cb: () => void): MethodDecorator {
	return function (ctx: any, _, descriptor) {
		const fn = descriptor.value

		if (typeof fn === "function") {
			descriptor.value = async function(...args: any[]) {
				const result = await fn.bind(ctx)(...args)

				cb()

				return result
			} as any
		}

		return descriptor
	}
}