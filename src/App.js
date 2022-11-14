import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"
import Signin from "./Signin"
import Signup from "./Signup"
import Home from "./Home"
import Profile from "./Profile"
class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        data: "",
      };
  
      this.handleDataLoad = this.handleDataLoad.bind(this);
    }
  
    handleDataLoad(dataObj) {
      this.setState({
        dataLoaded: true,
        data: dataObj,
      });
      console.log(this.state);
    }
  
    render() {
  return (
    <BrowserRouter>
      <Routes>
            <Route
            exact
            path="/signin"
            element={<Signin />}
          ></Route>
          <Route
            exact
            path="/signup"
            element={<Signup />}
          ></Route>
          <Route
            exact
            path="/home"
            element={<Home />}
          ></Route>
          <Route
            exact
            path="/profile"
            element={<Profile />}
          ></Route>          
        </Routes>
    </BrowserRouter>
  )
}
}

export default App