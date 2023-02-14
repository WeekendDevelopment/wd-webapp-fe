import React from "react";
import CountrySelector from "./CountrySelector";
import { NavBar } from "../navbar/NavBar";
import "./Profile.css";

export function Profile() {
  return (
    <div className="profile">
      <NavBar />
      <div className="container">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      <img
                        src="https://i.ibb.co/VV7dwXw/nithin.png"
                        alt="NITHIN"
                      />
                    </div>
                    <h5 className="user-name">Nithin Papuru</h5>
                    <h6 className="user-email">nithin@nithin.com</h6>
                  </div>
                  <div className="about">
                    <h5>About</h5>
                    <p>I'm Nithin I am Cringe It is me.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="">
                    <h6 className="mb-2 text-primary">Personal Details</h6>
                  </div>
                  <div className="">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Enter full name"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="eMail">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="eMail"
                        placeholder="Enter email ID"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="status">Status</label>
                      <input
                        type="text"
                        className="form-control"
                        id="status"
                        placeholder="Enter a status"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="bio">Bio</label>
                      <input
                        type="text"
                        className="form-control"
                        id="bio"
                        placeholder="Enter About you"
                      />
                    </div>
                  </div>
                  <CountrySelector />
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right">
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-secondary"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-primary"
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
