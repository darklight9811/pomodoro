// Packages
import { useEffect } from "preact/hooks"
import stepService from "@app/store/step"
import { lazy, Suspense } from "preact/compat"
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Style
import { globalCss, globalStyles } from "../../style"

// Containers
import Navbar from "../Navbar"

// Views
const Add = lazy(() => import("../../views/Add"))
const Task = lazy(() => import("../../views/Task"))
const List = lazy(() => import("../../views/List"))
const Edit = lazy(() => import("../../views/Edit"))

export default function App () {
	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	useEffect(() => {
		stepService.load()
	}, [])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	globalCss()
	globalStyles()

	return (
			<BrowserRouter>
				<Navbar />
				<Suspense fallback="">
					<Routes>
						<Route index element={<Task />} />
						<Route path="/list" element={<List />} />
						<Route path="/list/:id" element={<Edit />} />
						<Route path="/list/add" element={<Add />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
	)
}
