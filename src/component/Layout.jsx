import { Outlet } from "react-router-dom"
import { AuthProvider } from "../context/authContext"
import Navbar from './Navbar';
import  Footer  from "./Footer";

const Layout = () => {
  return (
 <AuthProvider>
    
    <Navbar/>
    <div className="h-screen">
    <Outlet/>
    </div>
   
    
 </AuthProvider>
  )
}

export default Layout