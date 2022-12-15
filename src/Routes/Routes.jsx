import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <h2>Error...</h2>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Register />
            },
            {
                path: '/faq',
                element: <FAQ />
            }
        ]
    }
])