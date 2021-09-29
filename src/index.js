import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Header from "./header"

const App = () => (
  <>
    <Header />
    <div>First webpack app</div>
  </>
)

ReactDOM.render(<App />, document.getElementById("app"))
