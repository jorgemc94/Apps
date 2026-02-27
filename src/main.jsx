// main.jsx
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ThemeProviderCustom } from "./context/ThemeContext"
import { App } from "./App"
import "./App.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProviderCustom>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProviderCustom>
)