import { Outlet } from "react-router-dom"
import { AuthProvider } from "../context/authContext"
import Navbar from './Navbar';
import  Footer  from "./Footer";
const Dashboard = () => {
  return (
    <AuthProvider>
    
    <Navbar/>
    <div className="h-screen">
    <Outlet/>
    </div>
    <Footer/>
    
 </AuthProvider>
  )
}

export default Dashboard
