import { useEffect } from "react";
import Router from "next/router";

import { isAuth } from "../../actions/auth";

import React from "react";

const Admin = ({ children }) => {
  useEffect(() => {
    if (!isAuth()) {
      Router.push("/signin");
    } else if (isAuth().role !== 1) {
      Router.push("/admin");
    }
  }, []);

  return <div>{children}</div>;
};

export default Admin;
