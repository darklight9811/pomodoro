// Components
import { Box, Button, DetailsStep, List } from "@app/components"

// Services
import stepService from "@app/store/step"

export default function ListSteps () {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// services
	const [steps] = stepService.useModel()

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Box container pt="2">
			<Button href="/list/add">Add +</Button>

			<Box gap="1" my="2">
				<List
					data={steps}
					sanitize={(step, index) => ({ ...step, last: steps.length === index + 1 })}
					component={DetailsStep}
				/>
			</Box>
		</Box>
	)
}