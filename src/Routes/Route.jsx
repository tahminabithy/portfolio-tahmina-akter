import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/projects",
                element: <Projects />
            }
        ]
    }
])
