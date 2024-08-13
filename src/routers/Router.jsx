import { createBrowserRouter } from "react-router-dom";
import { Add } from "../pages/Add";
import Home from "../pages/Home";
import { Edit } from "../pages/Edit";
import Login from '../pages/Login';
import Register from '../pages/Register';
import Layout from "../component/Layout";
import Dashboard from "../component/Dashboard.Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "edit/:id",
        element: <Edit />,
      },
      {
        path: "signin",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Register/>,
      },
    ]
  },
  {
    path:"/dashbord/",
    element: <Dashboard/>,
    children:[
      {
        path:"user",
        element:<div>user</div>
      }
    ]
  }
 
]);
export default router;
