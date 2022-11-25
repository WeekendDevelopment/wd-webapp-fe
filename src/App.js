import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute";
function App() {
  const [statusCode, setStatusCode] = useState("");
  const [data, setData] = useState("");

  function handleDataLoad(dataObj, statusCode) {
    setData(dataObj);
    setStatusCode(statusCode);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<Signin handleDataLoad={handleDataLoad} />}
        ></Route>
        <Route
          exact
          path="/signin"
          element={<Signin handleDataLoad={handleDataLoad} />}
        ></Route>
        <Route
          exact
          path="/signup"
          element={<Signup handleDataLoad={handleDataLoad} />}
        ></Route>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route
            exact
            path="/home"
            element={<Home data={data} statusCode={statusCode} />}
          />
        </Route>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
