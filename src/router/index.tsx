import {createBrowserRouter} from "react-router-dom";
import HomePage from "../views/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: "",
    children: [
      { path: "home", element: <HomePage /> }
    ]
  }
])