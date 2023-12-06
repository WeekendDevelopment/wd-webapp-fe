import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorComponent } from './error/ErrorComponent'
import { Home } from './home/Home'
import { Login } from './login/Login'
import { Profile } from './profile/Profile'
import PrivateRoute from './security/PrivateRoute'
import { Signup } from './signup/Signup'
import React from 'react';

function App() {
  return (
    <BrowserRouter basename={"/wd-webapp-fe/"}>
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
  )
}

export default App
