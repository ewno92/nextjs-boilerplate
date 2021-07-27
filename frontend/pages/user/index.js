import React from "react";
import Private from "../../components/auth/Private";

const UserIndex = () => {
  return (
    <div>
      <Private>
        <h2>User Dashboard</h2>
      </Private>
    </div>
  );
};

export default UserIndex;
