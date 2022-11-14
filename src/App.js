import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";
import Profile from "./Profile";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      statusCode: "",
      authenticated: false,
    };

    this.handleDataLoad = this.handleDataLoad.bind(this);
  }

  handleDataLoad(dataObj, statusCode,authenticated) {
    this.setState({
      data: dataObj,
      statusCode: statusCode,
      authenticated: authenticated,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Signin handleDataLoad={this.handleDataLoad} />}
          ></Route>
          <Route
            exact
            path="/signin"
            element={<Signin handleDataLoad={this.handleDataLoad} />}
          ></Route>
          <Route
            exact
            path="/signup"
            element={<Signup handleDataLoad={this.handleDataLoad} />}
          ></Route>
          {this.state.authenticated && (
            <Route
              exact
              path="/home"
              element={
                <Home
                  data={this.state.data}
                  statusCode={this.state.statusCode}
                />
              }
            ></Route>
          )}
          <Route exact path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
