import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/layout.jsx";
import Home from "../pages/Home/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])

export default router