// Packages
import { useEffect, useRef, useState } from "react"

// Component
import * as style from "./style"
import type InputProps from "./types"

export default function Textarea (props: InputProps) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// state
	const [value, setvalue] = useState(props.value || props.initialValue || "")

	// refs
	const ref = useRef<any>()

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	useEffect(() => {
		if (props.value !== undefined && props.value !== value) setvalue(props.value)
	}, [props.value, value])

	useEffect(() => {
		ref.current.value = value
	}, [value])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div className={style.wrapper({...props })}>
			{props.label && <label className={style.label()} htmlFor={props.name}>{props.label} {props.required ? "*":""}</label>}

			<textarea
				ref={ref}
				value={value}
				onChange={e => setvalue(e.target.value)}
				required={props.required}
				name={props.name}
				id={props.name}
				placeholder={props.placeholder}
				disabled={props.disabled}
				defaultValue={props.initialValue}
			/>
		</div>
	)
}