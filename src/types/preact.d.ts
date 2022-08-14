namespace preact {
	interface Component {
		// This is a workaround for https://github.com/preactjs/preact/issues/1206
		refs: Record<string, any>;
	}
}

declare module "preact" {
	export = preact;
}

declare module "preact/compat" {
	const Suspense = any
	const lazy = any
}