import React, { Component } from "react";
import { NavbarToggler, NavbarBrand,Navbar,Collapse,Nav,NavItem,NavLink } from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <>
      <header></header>
      <Navbar light expand="sm">
        <div className="container">
          <NavbarToggler onClick={this.toggleNav} />
          <NavbarBrand href="./">
            <img src="./assets/images/logo.jpg" alt="logo" height="40"></img>
          </NavbarBrand>
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                   Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                   About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                   Categories
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                   Contact Us
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <img src="./assets/images/banner.jpg" width="100%"></img>
      </>
    );
  }
}

export default Header;
