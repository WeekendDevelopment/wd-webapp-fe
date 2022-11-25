import React from "react";
import { Link } from "react-router-dom";
import { SlUser } from "react-icons/sl";

class Home extends React.Component {
  render() {
    if (this.props.statusCode === 200) {
      return (
        <div class="home">
          <div class="navbar">
            <a href="#home">Home</a>
            <p>{this.props.data}</p>
            <Link to="/profile">
              <SlUser size={28} />
            </Link> 
          </div>

          <div class="main">
            <p>Some text some text some text some text..</p>
          </div>
        </div>
      );
    }
    return (
      <div>
        <p>{this.props.data}</p>
        <Link to="/">
          <button type="submit">Go Back to Login</button>
        </Link>
      </div>
    );
  }
}

export default Home;
