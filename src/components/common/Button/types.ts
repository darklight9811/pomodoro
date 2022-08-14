type ButtonProps = {
	children: any;

	href?: string;
	disabled?: boolean;
	onClick?: () => void;
	submit?: boolean;
	fill?: boolean;
	type?: "link";
	size?: "lg" | "sm";
	active?: boolean;
	overlay?: boolean;
}

export default ButtonProps