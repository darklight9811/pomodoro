export type Step = {
	/**
	 * for indexing and lookup
	 */
	id: string;

	/**
	 * title
	 */
	label: string;

	/**
	 * in minutes
	 */
	duration: number;

	/**
	 * more description about the activity
	 */
	description: string;
}