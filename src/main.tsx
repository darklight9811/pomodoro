// Packages
import { render } from "preact"
import { Provider } from "react-redux"

// Containers
import App from "./containers/App"

// Store
import { reduxStore } from "./store"

// -------------------------------------------------
// Render
// -------------------------------------------------

render(<Provider store={reduxStore}><App /></Provider>, document.getElementById("app")!)
