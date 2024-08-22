import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const ModOrAdminPage = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/signin" />;
  }
  if (
    user.roles.includes("ROLES_ADMIN") ||
    user.roles.includes("ROLES_MODERATOR")
  ){
    return children;
  }
    
  return <Navigate to="/notallowed" />;
};
export default ModOrAdminPage;
