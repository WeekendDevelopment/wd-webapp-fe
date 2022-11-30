import React from "react";
import { Link } from "react-router-dom";
import { SlUser, SlLogout, SlHome } from "react-icons/sl";
import { MdLocalPhone, MdVideocam, MdMenu } from "react-icons/md";
import isJwtExpired from "./JwtUtil";

class Home extends React.Component {
  render() {
    /*
  Remember to add a header X-REQUEST-USER which contains email of current user to authenticate JWT token for future api calls
  currently unauthenticated endpoints are ["/health", "/signin", "/signup", "/encrptionKey"]
  all other endpoints would require 2 headers in future - Authorization (jwt token) and X-REQUEST-USER (current user email)
  */
    if (this.props.statusCode === 200 || !isJwtExpired()) {
      return (
        <div class="home">
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

          <div class="homecontent">
            <div class="container p-0">
              <div class="card">
                <div class="row g-0">
                  <div class="col-12 col-lg-5 col-xl-3 border-right">
                    <div class="px-4 d-none d-md-block">
                      <div class="d-flex align-items-center">
                        <div class="flex-grow-1">
                          <input
                            type="text"
                            class="form-control my-3"
                            placeholder="Search..."
                          />
                        </div>
                      </div>
                    </div>

                    <a href="/home" class="chatboxes">
                      <div class="d-flex align-items-start">
                        <img
                          src="https://i.ibb.co/vvymxPV/warlord.jpg"
                          class="rounded-circle mr-1"
                          alt="Vanessa Tucker"
                          width="40"
                          height="40"
                        />
                        <div
                          class="chatBorderLine flex-grow-1 ml-3"
                          style={{ padding: "5px 0px 20px 12px" }}
                        >
                          Vanessa Tucker
                          <div class="small chat-online">
                            <span class="fas fa-circle"></span>
                            Online
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="/home" class="chatboxes">
                      <div class="d-flex align-items-start">
                        <img
                          src="https://i.ibb.co/bsJf84g/prudhvi.jpg"
                          class="rounded-circle mr-1"
                          alt="William Harris"
                          width="40"
                          height="40"
                        />
                        <div
                          class="chatBorderLine flex-grow-1 ml-3"
                          style={{ padding: "5px 0px 20px 12px" }}
                        >
                          William Harris
                          <div class="small chat-online">
                            <span class="fas fa-circle "></span>
                            Online
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="/home" class="chatboxes">
                      <div class="d-flex align-items-start">
                        <img
                          src="https://i.ibb.co/VV7dwXw/nithin.png"
                          class="rounded-circle mr-1"
                          alt="Sharon Lessman"
                          width="40"
                          height="40"
                        />
                        <div
                          class="chatBorderLine flex-grow-1 ml-3"
                          style={{ padding: "5px 0px 20px 12px" }}
                        >
                          Sharon Lessman
                          <div class="small chat-online">
                            <span class="fas fa-circle "></span>
                            Online
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="/home" class="chatboxes">
                      <div class="d-flex align-items-start">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar4.png"
                          class="rounded-circle mr-1"
                          alt="Christina Mason"
                          width="40"
                          height="40"
                        />
                        <div
                          class="chatBorderLine flex-grow-1 ml-3"
                          style={{ padding: "5px 0px 20px 12px" }}
                        >
                          Christina Mason
                          <div class="small chat-offline">
                            <span class="fas fa-circle chat-offline"></span>
                            Offline
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="/home" class="chatboxes">
                      <div class="d-flex align-items-start">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar5.png"
                          class="rounded-circle mr-1"
                          alt="Fiona Green"
                          width="40"
                          height="40"
                        />
                        <div
                          class="chatBorderLine flex-grow-1 ml-3"
                          style={{ padding: "5px 0px 20px 12px" }}
                        >
                          Fiona Green
                          <div class="small chat-offline">
                            <span class="fas fa-circle chat-offline"></span>
                            Offline
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="/home" class="chatboxes">
                      <div class="d-flex align-items-start">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          class="rounded-circle mr-1"
                          alt="Doris Wilder"
                          width="40"
                          height="40"
                        />
                        <div
                          class="chatBorderLine flex-grow-1 ml-3"
                          style={{ padding: "5px 0px 20px 12px" }}
                        >
                          Doris Wilder
                          <div class="small chat-offline">
                            <span class="fas fa-circle chat-offline"></span>
                            Offline
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="/home" class="chatboxes">
                      <div class="d-flex align-items-start">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar4.png"
                          class="rounded-circle mr-1"
                          alt="Haley Kennedy"
                          width="40"
                          height="40"
                        />
                        <div
                          class="chatBorderLine flex-grow-1 ml-3"
                          style={{ padding: "5px 0px 20px 12px" }}
                        >
                          Haley Kennedy
                          <div class="small chat-offline">
                            <span class="fas fa-circle chat-offline"></span>
                            Offline
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="/home" class="chatboxes">
                      <div class="d-flex align-items-start">
                        <img
                          src="https://i.ibb.co/Zgcy6zS/evil.jpg"
                          class="rounded-circle mr-1"
                          alt="Jennifer Chang"
                          width="40"
                          height="40"
                        />
                        <div
                          class="chatBorderLine flex-grow-1 ml-3"
                          style={{ padding: "5px 0px 20px 12px" }}
                        >
                          Jennifer Chang
                          <div class="small chat-offline">
                            <span class="fas fa-circle chat-offline"></span>
                            Offline
                          </div>
                        </div>
                      </div>
                    </a>

                    <hr class="d-block d-lg-none mt-1 mb-0" />
                  </div>
                  <div class="chatSideLine col-12 col-lg-7 col-xl-9">
                    <div class="py-2 px-4 border-bottom d-none d-lg-block">
                      <div class="d-flex align-items-center py-1">
                        <div class="position-relative">
                          <img
                            src="https://i.ibb.co/VV7dwXw/nithin.png"
                            class="rounded-circle mr-1"
                            alt="Sharon Lessman"
                            width="40"
                            height="40"
                          />
                        </div>
                        <div
                          class="flex-grow-1 pl-3"
                          style={{
                            padding: "5px 0px 0px 12px",
                            color: "black",
                          }}
                        >
                          <strong>Sharon Lessman</strong>
                          <div class="text-muted small">
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

                    <div class="position-relative">
                      <div class="chat-messages p-4">
                        <div class="chat-message-right pb-4">
                          <div>
                            <img
                              src="https://i.ibb.co/Zgcy6zS/evil.jpg"
                              class="rounded-circle mr-1"
                              alt="Chris Wood"
                              width="40"
                              height="40"
                            />
                            <div class="text-muted small text-nowrap mt-2">
                              2:33 am
                            </div>
                          </div>
                          <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                            Lorem ipsum dolor sit amet, vis erat denique in,
                            dicunt prodesset te vix.
                          </div>
                        </div>

                        <div class="chat-message-left pb-4">
                          <div>
                            <img
                              src="https://i.ibb.co/VV7dwXw/nithin.png"
                              class="rounded-circle mr-1"
                              alt="Sharon Lessman"
                              width="40"
                              height="40"
                            />
                            <div class="text-muted small text-nowrap mt-2">
                              2:34 am
                            </div>
                          </div>
                          <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                            Sit meis deleniti eu, pri vidit meliore docendi ut,
                            an eum erat animal commodo.
                          </div>
                        </div>

                        <div class="chat-message-right mb-4">
                          <div>
                            <img
                              src="https://i.ibb.co/Zgcy6zS/evil.jpg"
                              class="rounded-circle mr-1"
                              alt="Chris Wood"
                              width="40"
                              height="40"
                            />
                            <div class="text-muted small text-nowrap mt-2">
                              2:35 am
                            </div>
                          </div>
                          <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                            Cum ea graeci tractatos.
                          </div>
                        </div>

                        <div class="chat-message-left pb-4">
                          <div>
                            <img
                              src="https://i.ibb.co/VV7dwXw/nithin.png"
                              class="rounded-circle mr-1"
                              alt="Sharon Lessman"
                              width="40"
                              height="40"
                            />
                            <div class="text-muted small text-nowrap mt-2">
                              2:36 am
                            </div>
                          </div>
                          <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                            Sed pulvinar, massa vitae interdum pulvinar, risus
                            lectus porttitor magna, vitae commodo lectus mauris
                            et velit. Proin ultricies placerat imperdiet. Morbi
                            varius quam ac venenatis tempus.
                          </div>
                        </div>

                        <div class="chat-message-left pb-4">
                          <div>
                            <img
                              src="https://i.ibb.co/VV7dwXw/nithin.png"
                              class="rounded-circle mr-1"
                              alt="Sharon Lessman"
                              width="40"
                              height="40"
                            />
                            <div class="text-muted small text-nowrap mt-2">
                              2:37 am
                            </div>
                          </div>
                          <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                            Cras pulvinar, sapien id vehicula aliquet, diam
                            velit elementum orci.
                          </div>
                        </div>

                        <div class="chat-message-right mb-4">
                          <div>
                            <img
                              src="https://i.ibb.co/Zgcy6zS/evil.jpg"
                              class="rounded-circle mr-1"
                              alt="Chris Wood"
                              width="40"
                              height="40"
                            />
                            <div class="text-muted small text-nowrap mt-2">
                              2:38 am
                            </div>
                          </div>
                          <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                            Lorem ipsum dolor sit amet, vis erat denique in,
                            dicunt prodesset te vix.
                          </div>
                        </div>

                        <div class="chat-message-left pb-4">
                          <div>
                            <img
                              src="https://i.ibb.co/VV7dwXw/nithin.png"
                              class="rounded-circle mr-1"
                              alt="Sharon Lessman"
                              width="40"
                              height="40"
                            />
                            <div class="text-muted small text-nowrap mt-2">
                              2:39 am
                            </div>
                          </div>
                          <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                            Sit meis deleniti eu, pri vidit meliore docendi ut,
                            an eum erat animal commodo.
                          </div>
                        </div>

                        <div class="chat-message-right mb-4">
                          <div>
                            <img
                              src="https://i.ibb.co/Zgcy6zS/evil.jpg"
                              class="rounded-circle mr-1"
                              alt="Chris Wood"
                              width="40"
                              height="40"
                            />
                            <div class="text-muted small text-nowrap mt-2">
                              2:40 am
                            </div>
                          </div>
                          <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                            Cum ea graeci tractatos.
                          </div>
                        </div>

                        <div class="chat-message-right mb-4">
                          <div>
                            <img
                              src="https://i.ibb.co/Zgcy6zS/evil.jpg"
                              class="rounded-circle mr-1"
                              alt="Chris Wood"
                              width="40"
                              height="40"
                            />
                            <div class="text-muted small text-nowrap mt-2">
                              2:41 am
                            </div>
                          </div>
                          <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                            Morbi finibus, lorem id placerat ullamcorper, nunc
                            enim ultrices massa, id dignissim metus urna eget
                            purus.
                          </div>
                        </div>

                        <div class="chat-message-left pb-4">
                          <div>
                            <img
                              src="https://i.ibb.co/VV7dwXw/nithin.png"
                              class="rounded-circle mr-1"
                              alt="Sharon Lessman"
                              width="40"
                              height="40"
                            />
                            <div class="text-muted small text-nowrap mt-2">
                              2:42 am
                            </div>
                          </div>
                          <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                            Sed pulvinar, massa vitae interdum pulvinar, risus
                            lectus porttitor magna, vitae commodo lectus mauris
                            et velit. Proin ultricies placerat imperdiet. Morbi
                            varius quam ac venenatis tempus.
                          </div>
                        </div>

                        <div class="chat-message-right mb-4">
                          <div>
                            <img
                              src="https://i.ibb.co/Zgcy6zS/evil.jpg"
                              class="rounded-circle mr-1"
                              alt="Chris Wood"
                              width="40"
                              height="40"
                            />
                            <div class="text-muted small text-nowrap mt-2">
                              2:43 am
                            </div>
                          </div>
                          <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                            Lorem ipsum dolor sit amet, vis erat denique in,
                            dicunt prodesset te vix.
                          </div>
                        </div>

                        <div class="chat-message-left pb-4">
                          <div>
                            <img
                              src="https://i.ibb.co/VV7dwXw/nithin.png"
                              class="rounded-circle mr-1"
                              alt="Sharon Lessman"
                              width="40"
                              height="40"
                            />
                            <div class="text-muted small text-nowrap mt-2">
                              2:44 am
                            </div>
                          </div>
                          <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                            Sit meis deleniti eu, pri vidit meliore docendi ut,
                            an eum erat animal commodo.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="flex-grow-0 py-3 px-4 border-top">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Type your message"
                        />
                        <button class="btn btn-primary">Send</button>
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
