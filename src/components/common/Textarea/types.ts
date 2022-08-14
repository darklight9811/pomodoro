type InputProps = {
	name: string;

	size?: "default" | "minimal";
	value?: string;
	label?: string;
	disabled?: boolean;
	required?: boolean;
	placeholder?: string;
	initialValue?: string;
}

export default InputProps