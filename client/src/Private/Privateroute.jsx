import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "../pages/Shared/Loading/Loading";
import { Navigate } from "react-router-dom";
const Privateroute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  } else {
    return <div>{user ? children : <Navigate to="/login" />}</div>;
  }
};

export default Privateroute;
