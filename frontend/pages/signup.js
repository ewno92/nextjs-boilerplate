import React from "react";
import SignupComponent from "../components/auth/SignupComponent";
import { Col, Row, Container } from "react-bootstrap";
const Signup = () => {
  return (
    <div>
      <Container>
        <h2 className="text-center py-4">Signup page</h2>
        <Row>
          <Col className="col-md-6 offset-md-3">
            <SignupComponent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
