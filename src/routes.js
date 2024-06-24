import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";

const routes = [
    {path: "/", element: <Home/>},
    {path: "*", element: <NotFound/>},
];

export default routes;