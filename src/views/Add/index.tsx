// Packages
import { useNavigate } from "react-router"

// Components
import { Box, Heading, Button, Input, Textarea } from "@app/components"

// Services
import stepService from "@app/store/step"

export default function Add () {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const navigate = useNavigate()

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	function onSubmit (e: any) {
		e.preventDefault()
		const data = new FormData(e.target)

		const response = stepService.add(Object.fromEntries(data.entries()) as any)

		if (response) navigate("/list")
	}

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Box container>
			<form onSubmit={onSubmit}>
				<Box mt="3">
					<Heading css={{ gap: "$margin" }} size="2"><Button href="/list">Back</Button> Add new step</Heading>

					<Input name="label" label="Title" />
					<Input name="duration" label="Duration (minutes)" type="number" />
					<Textarea name="description" label="Description" />

					<Button submit>Add</Button>
				</Box>
			</form>
		</Box>
	)
}