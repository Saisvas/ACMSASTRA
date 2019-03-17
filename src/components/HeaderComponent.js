import React, { Component } from "react";
// import headerLogo from "./acmlogo.png";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Jumbotron
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <Navbar dark expand="md">
            <NavbarBrand classID="mr-auto" href="/">
              <img
                src="/images/acmlogo.png"
                height="50"
                width="165"
                alt="ACM"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/events/">
                    Events
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/team/">
                    Team
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contact/">
                    Contact us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/about/">
                    About us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
