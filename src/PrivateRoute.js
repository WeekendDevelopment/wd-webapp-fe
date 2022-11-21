import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const PrivateRoute = () => {
  const auth = true; // determine if authorized, from context or however you're doing it
  // NITHIN WE NEED TO CHANGE THIS AUTH EVERYTIME WE LOGIN AND WE ARE DONE
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
