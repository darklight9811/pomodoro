
// -------------------------------------------------
// Props
// -------------------------------------------------

type ListProps<Row extends Record<string, any> = any> = {
	/**
	 * The data to be injected in the component prop
	 */
	data?: Row[];

	/**
	 * The component that will receive the data to be rendered
	 */
	component: (props: Row) => any;

	/**
	 * A component to display when there is no data
	 */
	empty?: (() => any) | boolean | string;

	/**
	 * Sort the list by callback
	 */
	sort?: (a: Row, b: Row) => number;

	/**
	 * Cleans the data that the component will receive
	 */
	sanitize?: (data: Row, index: number) => any;

	/**
	 * Id to use as key for the react tree
	 */
	id?: string;

	/**
	 * Handle loading spinner
	 */
	loading?: boolean;
}

export default ListProps
