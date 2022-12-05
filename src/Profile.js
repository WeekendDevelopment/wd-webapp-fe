/* eslint-disable react/style-prop-object */
import React from "react";
import { Link } from "react-router-dom";
import { SlUser, SlLogout, SlHome } from "react-icons/sl";

class Profile extends React.Component {
  render() {
    return (
      <div class="profile">
        <div class="navbar">
          <p>{this.props.data}</p>
          <Link to="/home">
            <SlHome size={28} />
          </Link>
          <Link to="/profile">
            <SlUser size={28} />
          </Link>
          <Link to="/">
            <SlLogout size={28} />
          </Link>
        </div>
        <div class="profilecontent container rounded bg-white mt-2 mb-5">
          <div class="row">
            <div class="col-md-3 border-right">
              <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  class="rounded-circle mt-5"
                  alt="PrpfilePic"
                  width="150px"
                  src="https://i.ibb.co/VV7dwXw/nithin.png"
                />
              </div>
            </div>
            <div class="col-md-5 border-right">
              <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6">
                    <label class="labels">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="first name"
                      value=""
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value=""
                      placeholder="last name"
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter phone number"
                      value=""
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Select your country"
                      value=""
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Email ID</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter email id"
                      value=""
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Status</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter your status"
                      value=""
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">About you</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter about you bio"
                      value=""
                    />
                  </div>
                </div>
                <div class="mt-5 text-center">
                  <button class="btn btn-primary profile-button" type="button">
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
