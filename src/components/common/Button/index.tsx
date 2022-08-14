// Packages
import { useCallback } from "react"

// Component
import type Props from "./types"
import * as style from "./style"
import { useNavigate } from "react-router"

export default function Button (props: Props) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	const link = useNavigate()

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const onClick = useCallback(() => {
		props.onClick?.()

		if (props.href) link(props.href)
	}, [props])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<button
			onClick={onClick}
			disabled={props.disabled}
			className={style.button(props)}
			type={props.submit ? "submit":"button"}
		>
			{props.children}
		</button>
	)
}