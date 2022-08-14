// Packages
import { useEffect, useMemo, useState } from "preact/hooks"

// Components
import { Box, Button, Heading } from "@app/components"

// Services
import stepService from "@app/store/step"
import taskService from "@app/store/task"
import { display_time } from "@app/helpers/general"

export default function Task () {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// states
	const [timer, settimer] = useState(0)
	const [stopcount, setstop] = useState(false)

	// services
	const [config] = taskService.useModel()
	const current = taskService.useCurrent()
	const [steps] = stepService.useModel()

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	function start () {
		setstop(false)
		settimer(0)
		taskService.start()
	}

	function stop () {
		setstop(true)
		settimer(0)
		taskService.stop()
	}

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	useEffect(() => {
		if (current && !stopcount) settimer(i => i)
	}, [current, stopcount])

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const next = useMemo(() => {
		if (!current) return undefined

		return steps.find((_, i, arr) => i > 0 && arr[i - 1].id === current.id) || steps[0]
	}, [current, steps])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Box container pt="2">
			<Heading>Tasks</Heading>

			<Box gap="1" direction="row">
				<Box col="6">
					<Heading size="4" m="0">Current</Heading>

					{
						!current && <p>No current task running</p>
					}

					{
						current &&

						<ul>
							<li>task: {current.label}</li>
							<li>duration: {current.duration}m</li>
							<li>description: {current.description}</li>
						</ul>
					}
				</Box>

				<Box col="6">
					<Heading size="4">Next</Heading>

					{
						!current && <p>Start a task to see what's next</p>
					}

					{
						next && `${next.label} (${next.duration}m)`
					}
				</Box>
			</Box>

			<Box my="4">
				{current && `${display_time((current.duration - Math.ceil(timer / 60)) * 60)} remaining`}
				<progress value={Math.ceil(timer / 60)} max={current?.duration || 100} />
			</Box>

			<Box direction="row" horizontal="center" gap="1" mt="4">
				<Button disabled={!current} onClick={() => taskService.clear()}>Clear</Button>
				<Button onClick={config.running ? stop:start}>{config.running ? "stop" : "start"}</Button>
				<Button disabled={!current} onClick={() => taskService.next()}>Skip</Button>
			</Box>
		</Box>
	)
}