// Packages
import { Link } from "react-router-dom"

// Components
import Box from "../../components/common/Box"

export default function Navbar () {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Box container direction="row" gap="2" my="2" pt="2">
			<Link to="/">Tasks</Link>
			<Link to="/list">List</Link>
		</Box>
	)
}