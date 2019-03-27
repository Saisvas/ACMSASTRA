import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="container">
            <div className="row justify-content-center" />
            <Row>
              <Col xs="6" sm="3" md="3">
                <img
                  style={{ height: "45%", marginBottom: -60 }}
                  src="/images/logofooter.png"
                />
              </Col>
              <Col xs="6" sm="3" md="3">
                <img
                  style={{ height: "30%", marginBottom: -40, width: "80%" }}
                  src="/images/sasfooter.png"
                />
              </Col>
              <Col xs="6" sm="3" md="3">
                <h4 style={{ fontFamily: "Trebuchet MS" }}>Links</h4>
                <ul className="list-unstyled">
                  <li style={{ fontFamily: "Trebuchet MS" }}>
                    <Link to="/home">Home</Link>
                  </li>
                  <li style={{ fontFamily: "Trebuchet MS" }}>
                    <Link to="/events">Events</Link>
                  </li>
                  <li style={{ fontFamily: "Trebuchet MS" }}>
                    <Link to="/team">Team</Link>
                  </li>
                  <li style={{ fontFamily: "Trebuchet MS" }}>
                    <Link to="/contact">Contact us</Link>
                  </li>
                  <li style={{ fontFamily: "Trebuchet MS" }}>
                    <Link to="about">About</Link>
                  </li>
                </ul>
              </Col>
              <Col xs="6" sm="3" md="3">
                <h4 style={{ fontFamily: "Trebuchet MS" }}>Connect</h4>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://www.facebook.com/ACM-Student-Chapter-Sastra-791652167873726/"
                      target="_blank"
                    >
                      <i
                        class="fa fa-facebook-square fa-3x"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/acmsastra" target="_blank">
                      <i
                        class="fa fa-twitter-square fa-3x"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li>
                    <Link to="#">
                      <i class="fa fa-git-square fa-3x" aria-hidden="true" />
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <center> {"\u00A9"}Copyrights, 2019 ACM SASTRA</center>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
