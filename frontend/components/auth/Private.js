import { useEffect } from "react";
import Router from "next/router";

import { isAuth } from "../../actions/auth";

import React from "react";

const Private = ({ children }) => {
  useEffect(() => {
    if (!isAuth()) {
      Router.push("/signin");
    }
  }, []);

  return <div>{children}</div>;
};

export default Private;
