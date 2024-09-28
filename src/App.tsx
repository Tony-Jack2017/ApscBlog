import './App.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./router";

import "./styles/components/index.scss"

function App() {
  return (
    <div id="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
