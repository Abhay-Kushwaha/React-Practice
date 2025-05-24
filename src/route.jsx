import { createBrowserRouter} from "react-router-dom";
import App from "./App";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
    },
    {
        path:"/about",
        element: <About />,
    },
    {
        path:"/contact",
        element: <Contact />,
    }
])