import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import isJwtExpired from "./JwtUtil";

// eslint-disable-next-line no-unused-vars
const PrivateRoute = () => {
  var auth = !isJwtExpired();
  return auth ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
