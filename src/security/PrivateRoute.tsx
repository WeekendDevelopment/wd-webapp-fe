import { Navigate, Outlet } from "react-router-dom";
import isJwtExpired from "./JwtUtil";
import React from "react";

// eslint-disable-next-line no-unused-vars
const PrivateRoute = () => {
  const auth = !isJwtExpired();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
