import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./login/Login";
import { Signup } from "./signup/Signup";
import { Home } from "./home/Home";
import { Profile } from "./profile/Profile";
import PrivateRoute from "./security/PrivateRoute";
import { ErrorComponent } from "./error/ErrorComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/error" element={<ErrorComponent />}></Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
