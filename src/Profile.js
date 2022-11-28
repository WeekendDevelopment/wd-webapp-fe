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
                <span class="font-weight-bold">Thathagaru</span>
                <span class="text-black-50">thathagaru@gmail.com</span>
                <span> </span>
              </div>
            </div>
            <div class="col-md-5 border-right">
              <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6">
                    <label class="labels">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="first name"
                      value=""
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">Surname</label>
                    <input
                      type="text"
                      className="form-control"
                      value=""
                      placeholder="surname"
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
                    <label class="labels">Address Line 1</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 1"
                      value=""
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Address Line 2</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 2"
                      value=""
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Postcode</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 2"
                      value=""
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">State</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 2"
                      value=""
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Area</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 2"
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
                    <label class="labels">Education</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="education"
                      value=""
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <label class="labels">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="country"
                      value=""
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">State/Region</label>
                    <input
                      type="text"
                      className="form-control"
                      value=""
                      placeholder="state"
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

            <div class="col-md-4">
              <div class="p-3 py-5">
                <div>&nbsp;</div>
                <div class="d-flex justify-content-between align-items-center experience">
                  <span>Edit Flatmate Preferences</span>
                </div>
                <div class="col-md-12">
                  <label class="labels">Gender</label>
                  <select
                    type="text"
                    className="form-control"
                    placeholder="Gender"
                  >
                    <option value="no preference">No Preference</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-binary">Non-binary</option>
                  </select>
                </div>{" "}
                <br />
                <div class="col-md-12">
                  <label class="labels">Additional Details</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="additional details"
                    value=""
                  />
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
