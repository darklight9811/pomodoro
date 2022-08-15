// Packages
import { useEffect, useMemo, useRef, useState } from "preact/hooks"

// Components
import { Box, Button, Heading } from "@app/components"

// Services
import stepService from "@app/store/step"
import taskService from "@app/store/task"

// Helpers
import { display_time } from "@app/helpers/general"

export default function Task () {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// states
	const [timer, settimer] = useState(0)
	const [stopcount, setstop] = useState(false)
	const [audio] = useState(new Audio("fx/timer.wav"))

	// services
	const [config] = taskService.useModel()
	const current = taskService.useCurrent()
	const [steps] = stepService.useModel()

	// refs
	const reftimer = useRef<number>(0)
	const lastupdate = useRef<number>()
	const loop = useRef<number>()

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	function start () {
		setstop(false)
		settimer(0)
		lastupdate.current = Date.now()
		taskService.start()
	}

	function skip () {
		setstop(false)
		settimer(0)
		taskService.next()
	}

	console.log(audio)

	function stop () {
		setstop(true)
		settimer(0)
		taskService.stop()
	}

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	useEffect(() => {
		reftimer.current = timer
	}, [timer])

	useEffect(() => {
		if (current && !stopcount) loop.current = setInterval(() => {
			const now = Date.now()

			if (Math.floor(reftimer.current / 1000) >= (current.duration * 60) - 2) {
				audio.volume
				audio.play()
				skip()
			}
			else {
				settimer(i => i + (now - lastupdate.current!))
				lastupdate.current = now
			}
		}, 100)

		return () => clearInterval(loop.current)
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

			<Box mt="4" mb="2">
				{current && `${display_time((current.duration * 60 - Math.ceil(timer / 1000)))} remaining`}
				<progress value={timer / 1000} max={(current?.duration || 100) * 60} />
			</Box>

			<Box direction="row" horizontal="center" gap="1">
				<Button disabled={!current} onClick={() => taskService.clear()}>Clear</Button>
				<Button onClick={config.running ? stop:start}>{config.running ? "stop" : "start"}</Button>
				<Button disabled={!current} onClick={skip}>Skip</Button>
			</Box>
		</Box>
	)
}