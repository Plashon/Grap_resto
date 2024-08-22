import { createBrowserRouter } from "react-router-dom";
import { Add } from "../pages/Add";
//import Home from "../pages/Home";
import { Edit } from "../pages/Edit";
import Login from '../pages/Login';
import Register from '../pages/Register';
import Layout from "../component/Layout";
// import Dashboard from "../component/Dashboard.Layout";
import ModOrAdminPage from "../pages/ModOrAdminPage";
import NotAllowed from "../pages/NotAllowed";
import UserPage from "../pages/UserPage";
import { lazy } from "react";
const Home =  lazy(() => import("../pages/Home"));
// const Add  =  lazy(() => import("../pages/Add"));
// const Edit =  lazy(() => import("../pages/Edit"));
// const Login =  lazy(() => import('../pages/Login'));
// const Register =  lazy(() => import('../pages/Register'));






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
        element: 
        <ModOrAdminPage>
        <Edit />
       </ModOrAdminPage>,
      },
      {
        path: "signin",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Register/>,
      },{
        path: "notallowed",
        element: <NotAllowed/>,
      },
      {
        path:"userprofile",
        element:<UserPage/>
      },
    ]
  },
 
]);
export default router;
