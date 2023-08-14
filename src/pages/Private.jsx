import { Navigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { EduContext } from "../context/context";
import { useContext, useRef } from "react";

const PrivateRoute = ({ children }) => {
  const { getUserData } = useContext(EduContext);
  let token = localStorage.getItem("edu-token");
  let role = localStorage.getItem("edu-role");
  let status = localStorage.getItem("edu-status");

  const { data } = useQuery("user", getUserData, {
    // Enable caching by setting cacheTime
    cacheTime: 60000, // 1 minute (in milliseconds)
  });

  const paystatus = data?.data?.hasPaid;

  console.log(paystatus);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (role === "admin") {
    return <Navigate to="/admin" replace />;
  }

  if (paystatus === false) {
    return <Navigate to="/payment" replace />;
  }

  return children;
};

export default PrivateRoute;
