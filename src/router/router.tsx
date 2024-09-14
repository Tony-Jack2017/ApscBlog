import {createBrowserRouter} from "react-router-dom";

// common
import ErrorPage from "../pages/common/ErrorPage";

import App from "../App";
import HomePage from "../pages/home/HomePage";
import BlogListPage from "../pages/blog/BlogList";
import ArticlePage from "../pages/blog/Article";
import AuthorPage from "../pages/other/AuthorPage";
import AboutPage from "../pages/other/AboutPage"
import ProjectListPage from "../pages/project/ProjectListPage";
import ProjectItemPage from "../pages/project/ProjectItemPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
            { index: true, element: <HomePage/> },
            { path: "home", element: <HomePage/> },
            {
                path: "blog",
                children: [
                    {  path: "list", element: <BlogListPage/> },
                    {  path: "articles/:articleId", element: <ArticlePage/> }
                ]
            },
            { path: "project",
                children: [
                    {  path: "list", element: <ProjectListPage/>  },
                    {  path: "list/:itemId", element: <ProjectItemPage /> }
                ]
            },
            { path: "about", element: <AboutPage /> },
            { path: "author", element: <AuthorPage /> },
        ]
    }
])

export default router