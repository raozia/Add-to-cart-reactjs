import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./Auth";

const Guest = ({ children }) => {
  if (isAuthenticated()) {
    return <Navigate to="/" />;
  }
  return children;
};

export default Guest;
