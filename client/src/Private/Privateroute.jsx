import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "../pages/Shared/Loading/Loading";
import { Navigate, useLocation } from "react-router-dom";
const Privateroute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        {user ? (
          children
        ) : (
          <Navigate to="/login" state={{ from: location }} replace />
        )}
      </div>
    );
  }
};

export default Privateroute;
