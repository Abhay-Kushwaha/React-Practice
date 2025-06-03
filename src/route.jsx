import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Navbar from '../components/Navbar'
import About from "./Pages/About";
import Toggler from "./Pages/Toggler";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar /> <App /></>,
    },
    {
        path: "/about",
        element: <><Navbar /> <About /></>,
    },
    {
        path: "/toggler",
        element: <><Navbar /> <Toggler /></>,
    }
])