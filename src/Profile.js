/* eslint-disable react/style-prop-object */
import React from "react";
import { Link } from "react-router-dom";
import { SlUser, SlLogout, SlHome } from "react-icons/sl";
import CountrySelector from "./CountrySelector";

class Profile extends React.Component {
  render() {
    return (
      <div class="profile">
        <div class="navbar">
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
        <div class="container">
          <div class="row gutters">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div class="card h-100">
                <div class="card-body">
                  <div class="account-settings">
                    <div class="user-profile">
                      <div class="user-avatar">
                        <img
                          src="https://i.ibb.co/VV7dwXw/nithin.png"
                          alt="NITHIN"
                        />
                      </div>
                      <h5 class="user-name">Nithin Papuru</h5>
                      <h6 class="user-email">hentai@nithin.com</h6>
                    </div>
                    <div class="about">
                      <h5>About</h5>
                      <p>I'm Nithin I am Cringe It is me.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div class="card h-100">
                <div class="card-body">
                  <div class="row gutters">
                    <div class="">
                      <h6 class="mb-2 text-primary">Personal Details</h6>
                    </div>
                    <div class="">
                      <div class="form-group">
                        <label for="fullName">Full Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="fullName"
                          placeholder="Enter full name"
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="eMail">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="eMail"
                          placeholder="Enter email ID"
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="status">Status</label>
                        <input
                          type="text"
                          class="form-control"
                          id="status"
                          placeholder="Enter a status"
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="bio">Bio</label>
                        <input
                          type="text"
                          class="form-control"
                          id="bio"
                          placeholder="Enter About you"
                        />
                      </div>
                    </div>
                    <CountrySelector />
                  </div>
                  <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="text-right">
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          class="btn btn-secondary"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          class="btn btn-primary"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
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
