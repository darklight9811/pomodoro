type InputProps = {
	name: string;

	type?: string;
	size?: "default" | "minimal";
	value?: any;
	label?: string;
	disabled?: boolean;
	required?: boolean;
	password?: boolean;
	placeholder?: string;
	initialValue?: any;
}

export default InputProps