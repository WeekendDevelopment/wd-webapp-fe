import React from "react";
import { Link, useLocation } from "react-router-dom";

export function ErrorComponent() {
  const location = useLocation();
  return (
    <div>
      <p>{location.state}</p>
      <Link to="/">
        <button type="submit">Go Back to Login</button>
      </Link>
    </div>
  );
}
