import React from "react";
import { Navbar, Container, Nav, NavDropdown, NavLink } from "react-bootstrap";
import { APP_NAME } from "../config";
import Router from "next/router";
import Link from "next/link";

// import Link from "next/link";

import { signout, isAuth } from "../actions/auth";
// import router, { Router } from "next/dist/client/router";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">{APP_NAME}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link">Link</Nav.Link>
              <NavLink href="#link">Link</NavLink>

              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              {/* {JSON.stringify(isAuth().name)} */}
              {/* {!isAuth() && <NavLink href="/signup">Sign up</NavLink>} */}

              {/* //Dashboard */}
              {isAuth() && isAuth().role == 0 && (
                <Link href="/user">
                  <a className="nav-link">Dashboard</a>
                </Link>
              )}
              {isAuth() && isAuth().role == 1 && (
                <Link href="/admin">
                  <a className="nav-link">Dashboard</a>
                </Link>
              )}

              {isAuth() ? (
                <NavLink onClick={() => signout(() => Router.push(`/`))}>
                  Sign Out
                </NavLink>
              ) : (
                <NavLink href="/signin">Sign In</NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
