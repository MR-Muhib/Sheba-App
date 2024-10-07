import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateOutlate = () => {
  const location = useLocation();
  const { user } = useAuth();
  return user.email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateOutlate;
