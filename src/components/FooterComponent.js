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
              <Col>
                <img style={{ height: "45%" }} src="/images/logofooter.png" />
              </Col>
              <Col>
                <img style={{ height: "30%" }} src="/images/sasfooter.png" />
              </Col>
              <Col>
                <h4>Links</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/events">Events</Link>
                  </li>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact us</Link>
                  </li>
                  <li>
                    <Link to="about">About</Link>
                  </li>
                </ul>
              </Col>
              <Col>
                <h4>Contact us</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <center>Copyrights, 2019 ACM SASTRA</center>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
