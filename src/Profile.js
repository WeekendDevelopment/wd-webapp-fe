import React from "react";
import axios from "axios";
import Constants from "./Constants";
import Encryption from "./Encryption";

class Profile extends React.Component {
    render() {
        if (this.state.dataLoaded) {
            this.props.handleDataLoad(this.state.data);
        }
        return(
            
            <div className="Profile-container">
                <form className="profile">
                <input
                    data-ref="profileUsername.container"
                    id="profileUsername.container"
                    className="textBox"
                    type="text"
                    value="TesterStatic"
                    onChange={this.handleChange}
                    readOnly
                />
                <input
                    data-ref="profilePassword.container"
                    id="profilePassword.container"
                    className="textBox"
                    type="password"
                    value="12345Static"
                    onChange={this.handleChange}
                    readOnly
                />
                <input
                    data-ref="profileEmail.container"
                    id="profileEmail.container"
                    className="textBox"
                    type="email"
                    placeholder="Enter your Email"
                    onChange={this.handleChange}
                />                
                <button
                    data-ref="profileButton"
                    id="profileButton"
                    className="button"
                    type="submit"
                    value="Edit"
                    onClick={this.handleSubmit}
                    onSubmit={this.handleSubmit}
                >
                    Login
                </button>
                </form>
            </div>
            
            
        );
    }
}

export default Profile;