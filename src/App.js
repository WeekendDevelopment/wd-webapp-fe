import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import Signup from "./Signup.js"
import Home from "./Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
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
      <Router>
        <Routes>
          <Route exact path="/" element={<Login handleDataLoad={this.handleDataLoad.bind(this)} />}></Route>
          <Route exact path="/login" element={<Login handleDataLoad={this.handleDataLoad.bind(this)} />}></Route>
          <Route exact path="/signup" element={<Signup handleDataLoad={this.handleDataLoad.bind(this)} />}></Route>
          <Route exact path="/home" element={<Home data={this.state.data} />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
