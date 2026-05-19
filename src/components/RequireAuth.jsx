import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./Auth";
const RequireAuth = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default RequireAuth;
