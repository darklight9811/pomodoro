// Types
import stepService from "@app/store/step";
import { Step } from "@app/types/general";

// Components
import Box from "../common/Box";
import Button from "../common/Button";
import Heading from "../common/Heading";

export default function DetailsStep (props: Step & { index: number; last: boolean }) {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Box direction="row" vertical="center" horizontal="between">
			<Box direction="row" vertical="top" horizontal="center" gap="2">
				<Box>
					<Button disabled={props.index === 0} size="sm" onClick={() => stepService.moveUp(props.id)}>Up</Button>
					<Button disabled={props.last} size="sm" onClick={() => stepService.moveDown(props.id)}>Down</Button>
				</Box>
				<Box>
					<Heading size="4">{props.id}</Heading>
					<Heading size="2">{props.label}</Heading>
				</Box>
			</Box>

			<Box>
				Lasts {props.duration} minutes
			</Box>
			
			<Box>
				<div>
					<Button href={`/list/${props.id}`}>Edit</Button>
					<Button onClick={() => stepService.remove(props.id)}>Delete</Button>
				</div>
			</Box>
		</Box>
	)
}