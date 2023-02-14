import React from "react";
import { useNavigate } from "react-router-dom";
import { MdLocalPhone, MdVideocam, MdMenu } from "react-icons/md";
import isJwtExpired from "../security/JwtUtil";
import { ErrorHandler } from "../error/ErrorHandler";
import "./Home.css";
import { NavBar } from "../navbar/NavBar";

export function Home() {
  /*
  Remember to add a header X-REQUEST-USER which contains email of current user to authenticate JWT token for future api calls
  currently unauthenticated endpoints are ["/health", "/signin", "/signup", "/encrptionKey"]
  all other endpoints would require 2 headers in future - Authorization (jwt token) and X-REQUEST-USER (current user email)
  */
  const navigate = useNavigate();
  if (isJwtExpired()) {
    navigate("/error", {
      state: ErrorHandler.getErrorMessage(null),
    });
  }
  return (
    <div className="home">
      <NavBar />
      <div className="homecontent">
        <div className="container p-0">
          <div className="card">
            <div className="row g-0">
              <div className="col-12 col-lg-5 col-xl-3 border-right">
                <div className="px-4 d-none d-md-block">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <input
                        type="text"
                        className="form-control my-3"
                        placeholder="Search..."
                      />
                    </div>
                  </div>
                </div>

                <a href="/home" className="chatboxes">
                  <div className="d-flex align-items-start">
                    <img
                      src="https://i.ibb.co/vvymxPV/warlord.jpg"
                      className="rounded-circle mr-1"
                      alt="Vanessa Tucker"
                      width="40"
                      height="40"
                    />
                    <div
                      className="chatBorderLine flex-grow-1 ml-3"
                      style={{ padding: "5px 0px 20px 12px" }}
                    >
                      Vanessa Tucker
                      <div className="small chat-online">
                        <span className="fas fa-circle"></span>
                        Online
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/home" className="chatboxes">
                  <div className="d-flex align-items-start">
                    <img
                      src="https://i.ibb.co/bsJf84g/prudhvi.jpg"
                      className="rounded-circle mr-1"
                      alt="William Harris"
                      width="40"
                      height="40"
                    />
                    <div
                      className="chatBorderLine flex-grow-1 ml-3"
                      style={{ padding: "5px 0px 20px 12px" }}
                    >
                      William Harris
                      <div className="small chat-online">
                        <span className="fas fa-circle "></span>
                        Online
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/home" className="chatboxes">
                  <div className="d-flex align-items-start">
                    <img
                      src="https://i.ibb.co/VV7dwXw/nithin.png"
                      className="rounded-circle mr-1"
                      alt="Sharon Lessman"
                      width="40"
                      height="40"
                    />
                    <div
                      className="chatBorderLine flex-grow-1 ml-3"
                      style={{ padding: "5px 0px 20px 12px" }}
                    >
                      Sharon Lessman
                      <div className="small chat-online">
                        <span className="fas fa-circle "></span>
                        Online
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/home" className="chatboxes">
                  <div className="d-flex align-items-start">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar4.png"
                      className="rounded-circle mr-1"
                      alt="Christina Mason"
                      width="40"
                      height="40"
                    />
                    <div
                      className="chatBorderLine flex-grow-1 ml-3"
                      style={{ padding: "5px 0px 20px 12px" }}
                    >
                      Christina Mason
                      <div className="small chat-offline">
                        <span className="fas fa-circle chat-offline"></span>
                        Offline
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/home" className="chatboxes">
                  <div className="d-flex align-items-start">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar5.png"
                      className="rounded-circle mr-1"
                      alt="Fiona Green"
                      width="40"
                      height="40"
                    />
                    <div
                      className="chatBorderLine flex-grow-1 ml-3"
                      style={{ padding: "5px 0px 20px 12px" }}
                    >
                      Fiona Green
                      <div className="small chat-offline">
                        <span className="fas fa-circle chat-offline"></span>
                        Offline
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/home" className="chatboxes">
                  <div className="d-flex align-items-start">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      className="rounded-circle mr-1"
                      alt="Doris Wilder"
                      width="40"
                      height="40"
                    />
                    <div
                      className="chatBorderLine flex-grow-1 ml-3"
                      style={{ padding: "5px 0px 20px 12px" }}
                    >
                      Doris Wilder
                      <div className="small chat-offline">
                        <span className="fas fa-circle chat-offline"></span>
                        Offline
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/home" className="chatboxes">
                  <div className="d-flex align-items-start">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar4.png"
                      className="rounded-circle mr-1"
                      alt="Haley Kennedy"
                      width="40"
                      height="40"
                    />
                    <div
                      className="chatBorderLine flex-grow-1 ml-3"
                      style={{ padding: "5px 0px 20px 12px" }}
                    >
                      Haley Kennedy
                      <div className="small chat-offline">
                        <span className="fas fa-circle chat-offline"></span>
                        Offline
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/home" className="chatboxes">
                  <div className="d-flex align-items-start">
                    <img
                      src="https://i.ibb.co/Zgcy6zS/evil.jpg"
                      className="rounded-circle mr-1"
                      alt="Jennifer Chang"
                      width="40"
                      height="40"
                    />
                    <div
                      className="chatBorderLine flex-grow-1 ml-3"
                      style={{ padding: "5px 0px 20px 12px" }}
                    >
                      Jennifer Chang
                      <div className="small chat-offline">
                        <span className="fas fa-circle chat-offline"></span>
                        Offline
                      </div>
                    </div>
                  </div>
                </a>

                <hr className="d-block d-lg-none mt-1 mb-0" />
              </div>
              <div className="chatSideLine col-12 col-lg-7 col-xl-9">
                <div className="py-2 px-4 border-bottom d-none d-lg-block">
                  <div className="d-flex align-items-center py-1">
                    <div className="position-relative">
                      <img
                        src="https://i.ibb.co/VV7dwXw/nithin.png"
                        className="rounded-circle mr-1"
                        alt="Sharon Lessman"
                        width="40"
                        height="40"
                      />
                    </div>
                    <div
                      className="flex-grow-1 pl-3"
                      style={{
                        padding: "5px 0px 0px 12px",
                        color: "black",
                      }}
                    >
                      <strong>Sharon Lessman</strong>
                      <div className="text-muted small">
                        <em>Typing...</em>
                      </div>
                    </div>
                    <div>
                      <MdLocalPhone
                        size={28}
                        style={{
                          color: "blue",
                          margin: "0px 20px 0px 0px",
                        }}
                      />
                      &nbsp;
                      <MdVideocam
                        size={28}
                        style={{
                          color: "lime",
                          margin: "0px 20px 0px 0px",
                        }}
                      />
                      &nbsp;
                      <MdMenu size={28} style={{ color: "black" }} />
                    </div>
                  </div>
                </div>

                <div className="position-relative">
                  <div className="chat-messages p-4">
                    <div className="chat-message-right pb-4">
                      <div>
                        <img
                          src="https://i.ibb.co/Zgcy6zS/evil.jpg"
                          className="rounded-circle mr-1"
                          alt="Chris Wood"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:33 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                        Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                        prodesset te vix.
                      </div>
                    </div>

                    <div className="chat-message-left pb-4">
                      <div>
                        <img
                          src="https://i.ibb.co/VV7dwXw/nithin.png"
                          className="rounded-circle mr-1"
                          alt="Sharon Lessman"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:34 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                        Sit meis deleniti eu, pri vidit meliore docendi ut, an
                        eum erat animal commodo.
                      </div>
                    </div>

                    <div className="chat-message-right mb-4">
                      <div>
                        <img
                          src="https://i.ibb.co/Zgcy6zS/evil.jpg"
                          className="rounded-circle mr-1"
                          alt="Chris Wood"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:35 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                        Cum ea graeci tractatos.
                      </div>
                    </div>

                    <div className="chat-message-left pb-4">
                      <div>
                        <img
                          src="https://i.ibb.co/VV7dwXw/nithin.png"
                          className="rounded-circle mr-1"
                          alt="Sharon Lessman"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:36 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                        Sed pulvinar, massa vitae interdum pulvinar, risus
                        lectus porttitor magna, vitae commodo lectus mauris et
                        velit. Proin ultricies placerat imperdiet. Morbi varius
                        quam ac venenatis tempus.
                      </div>
                    </div>

                    <div className="chat-message-left pb-4">
                      <div>
                        <img
                          src="https://i.ibb.co/VV7dwXw/nithin.png"
                          className="rounded-circle mr-1"
                          alt="Sharon Lessman"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:37 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                        Cras pulvinar, sapien id vehicula aliquet, diam velit
                        elementum orci.
                      </div>
                    </div>

                    <div className="chat-message-right mb-4">
                      <div>
                        <img
                          src="https://i.ibb.co/Zgcy6zS/evil.jpg"
                          className="rounded-circle mr-1"
                          alt="Chris Wood"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:38 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                        Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                        prodesset te vix.
                      </div>
                    </div>

                    <div className="chat-message-left pb-4">
                      <div>
                        <img
                          src="https://i.ibb.co/VV7dwXw/nithin.png"
                          className="rounded-circle mr-1"
                          alt="Sharon Lessman"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:39 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                        Sit meis deleniti eu, pri vidit meliore docendi ut, an
                        eum erat animal commodo.
                      </div>
                    </div>

                    <div className="chat-message-right mb-4">
                      <div>
                        <img
                          src="https://i.ibb.co/Zgcy6zS/evil.jpg"
                          className="rounded-circle mr-1"
                          alt="Chris Wood"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:40 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                        Cum ea graeci tractatos.
                      </div>
                    </div>

                    <div className="chat-message-right mb-4">
                      <div>
                        <img
                          src="https://i.ibb.co/Zgcy6zS/evil.jpg"
                          className="rounded-circle mr-1"
                          alt="Chris Wood"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:41 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                        Morbi finibus, lorem id placerat ullamcorper, nunc enim
                        ultrices massa, id dignissim metus urna eget purus.
                      </div>
                    </div>

                    <div className="chat-message-left pb-4">
                      <div>
                        <img
                          src="https://i.ibb.co/VV7dwXw/nithin.png"
                          className="rounded-circle mr-1"
                          alt="Sharon Lessman"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:42 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                        Sed pulvinar, massa vitae interdum pulvinar, risus
                        lectus porttitor magna, vitae commodo lectus mauris et
                        velit. Proin ultricies placerat imperdiet. Morbi varius
                        quam ac venenatis tempus.
                      </div>
                    </div>

                    <div className="chat-message-right mb-4">
                      <div>
                        <img
                          src="https://i.ibb.co/Zgcy6zS/evil.jpg"
                          className="rounded-circle mr-1"
                          alt="Chris Wood"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:43 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                        Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                        prodesset te vix.
                      </div>
                    </div>

                    <div className="chat-message-left pb-4">
                      <div>
                        <img
                          src="https://i.ibb.co/VV7dwXw/nithin.png"
                          className="rounded-circle mr-1"
                          alt="Sharon Lessman"
                          width="40"
                          height="40"
                        />
                        <div className="text-muted small text-nowrap mt-2">
                          2:44 am
                        </div>
                      </div>
                      <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                        Sit meis deleniti eu, pri vidit meliore docendi ut, an
                        eum erat animal commodo.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-grow-0 py-3 px-4 border-top">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type your message"
                    />
                    <button className="btn btn-primary">Send</button>
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
