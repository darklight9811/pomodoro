// Packages
import { useNavigate, useParams } from "react-router"

// Components
import { Box, Heading, Button, Input, Textarea } from "@app/components"

// Services
import stepService from "@app/store/step"

export default function Edit () {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const params = useParams()
	const navigate = useNavigate()

	// services
	const step = stepService.useStep(params.id!)

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	function onSubmit (e: any) {
		e.preventDefault()
		const data = new FormData(e.target)

		const response = stepService.update(params.id!, Object.fromEntries(data.entries()) as any)

		if (response) navigate("/list")
	}

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	if (!step) {
		return (
			<Box>
				<Heading>Step {params.id} couldn't be found</Heading>
			</Box>
		)
	}

	return (
		<Box container>
			<form onSubmit={onSubmit}>
				<Box mt="3">
					<Heading css={{ gap: "$margin" }} size="2"><Button href="/list">Back</Button> Update step '{params.id}'</Heading>

					<Input name="label" label="Title" initialValue={step.label} />
					<Input name="duration" label="Duration (minutes)" type="number" initialValue={step.duration} />
					<Textarea name="description" label="Description" initialValue={step.description} />

					<Button submit>Update</Button>
				</Box>
			</form>
		</Box>
	)
}