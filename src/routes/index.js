import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: null
  },
  {
    path: "/login",
    element: <Login />,
    loader: null
  }
]);


export default router;