import {createBrowserRouter} from "react-router-dom";

import HomePage from "../views/home";
import BlogPage from "../views/blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: "",
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "blog", element: <BlogPage /> },
    ]
  }
])
