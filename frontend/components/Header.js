import React from "react";
import { Navbar, Container, Nav, NavDropdown, NavLink } from "react-bootstrap";
import { APP_NAME } from "../config";
import Router from "next/router";
import NProgress from "nprogress"; //progress bar

// import Link from "next/link";

import { signout, isAuth } from "../actions/auth";
// import router, { Router } from "next/dist/client/router";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeStartComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

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
              {!isAuth() && <NavLink href="/signup">Sign up</NavLink>}

              {/* //Dashboard */}
              {isAuth() && isAuth().role == 0 && (
                <NavLink href="/user">Dashboard</NavLink>
              )}
              {isAuth() && isAuth().role == 1 && (
                <NavLink href="/admin">Dashboard</NavLink>
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
