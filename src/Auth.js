import React, { useState } from "react"

import Signin from "./signin";
import Signup from "./signup";



class Auth extends React.Component {
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
        return (<Signin />)
}}

export default Auth;