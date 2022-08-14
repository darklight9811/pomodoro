// Packages
import { createElement, useMemo } from "react"

// Component
import type ListProps from "./types"

export default function List (props: ListProps) {
	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const list = useMemo(() => {
		const data = props.data || []

		const sorted = props.sort ? data.sort(props.sort) : data

		return sorted.map((item, index) => {
			const p = (props.sanitize?.(item, index) || item)
			return createElement(props.component, { ...p, index, key: p[props.id || "id"] || index })
		}) as JSX.Element[]
	}, [props])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	if (props.loading)
		return "loading" as any
	if (list?.length)
		return list

	return null
}
