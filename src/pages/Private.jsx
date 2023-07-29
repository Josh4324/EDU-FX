import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let token = localStorage.getItem("edu-token");
  let role = localStorage.getItem("edu-role");
  let status = localStorage.getItem("edu-status");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (role === "admin") {
    return <Navigate to="/admin" replace />;
  }

  if (status === "false") {
    return <Navigate to="/payment" replace />;
  }

  return children;
};

export default PrivateRoute;
