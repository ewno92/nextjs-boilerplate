import React from "react";
import Link from "next/link";
import SigninComponent from "../components/auth/SigninComponent";
import { Col, Row, Container } from "react-bootstrap";

const Signin = () => {
  return (
    <Container>
      <h2 className="text-center py-4">Sign In</h2>
      <Row>
        <Col className="col-md-6 offset-md-3">
          <SigninComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
