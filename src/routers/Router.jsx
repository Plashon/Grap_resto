import { createBrowserRouter } from "react-router-dom";
import { Add } from "../pages/Add";
import Home from "../pages/Home";
import { Edit } from "../pages/Edit";
import Login from '../pages/Login';
import Register from '../pages/Register';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register/>,
  },
]);
export default router;
