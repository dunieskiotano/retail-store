import React, { Fragment } from "react";

import {
  FaUser,
  FaLock,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaInstagram
} from "react-icons/fa";
import { Container, Row, Col } from "reactstrap";

export class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="nav">
          <div className="nav-section">
            <ul className="nav-links">
              <li>
                <a href="/home" className="links">
                  Home
                </a>
              </li>
              <li>
                <a href="/women" className="links">
                  Women
                </a>
              </li>
              <li>
                <a href="/men" className="links">
                  Men
                </a>
              </li>
              <li>
                <a href="/accessories" className="links">
                  Accessories
                </a>
              </li>
              <li>
                <a href="/about" className="links">
                  About
                </a>
              </li>
              <li>
                <a href="/contact-us" className="links">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="/login" id="login-link" className="links">
                  <FaUser /> Login
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <Container>
            <div className="center-text">
              <div>
                <span className="signin-heading">Log In</span>
              </div>
              <div className="form-signin">
                <form>
                  <Row>
                    <label for id="user-name">
                      <FaUser />
                    </label>
                    <input
                      id="user-name"
                      type="text"
                      placeholder="Username"
                      required
                    />
                    <br />
                    <br />
                  </Row>
                  <Row>
                    <label for id="password">
                      <FaLock />
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </Row>

                  <input
                    type="checkbox"
                    className="password-show"
                    id="Show password"
                  />
                  <label for id="check">
                    Show password
                  </label>

                  <Row>
                    <input
                      type="submit"
                      className="login-submit-button"
                      value="Submit"
                    />
                  </Row>
                </form>
              </div>
            </div>

            <footer>
              <span>© 2020 Paradise Stores. All Rights Reserved</span>
              <br />
              <span>
                <FaYoutube /> <FaTwitter /> <FaFacebook /> <FaInstagram />
              </span>
            </footer>
          </Container>
        </div>
      </>
    );
  }
}
