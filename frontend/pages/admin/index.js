import React from "react";
import Admin from "../../components/auth/Admin";
import { Container } from "react-bootstrap";

const AdminIndex = () => {
  return (
    <Container>
      <Admin>
        <h2>Admin Dashboard</h2>
      </Admin>
    </Container>
  );
};

export default AdminIndex;
