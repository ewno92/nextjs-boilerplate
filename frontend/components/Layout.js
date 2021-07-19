import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <p>header</p>
      {children}
      <p>footer</p>
    </div>
  );
};

export default Layout;
