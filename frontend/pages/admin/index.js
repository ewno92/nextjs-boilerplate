import React from "react";
import Admin from "../../components/auth/Admin";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const AdminIndex = () => {
  return (
    <Container>
      <Admin>
        <Row>
          <Col>
            left
            <br />
            <Link href="admin/crud/category-tag">
              <a>Create Category</a>
            </Link>
          </Col>
          <Col>right</Col>
        </Row>
      </Admin>
    </Container>
  );
};

export default AdminIndex;
