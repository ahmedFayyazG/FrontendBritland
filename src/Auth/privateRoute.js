import React, { Component } from "react";
import { Navigate, Route } from "react-router";
import { isAuthticated } from ".";

const privateRoute = ({ children, ...rest }) => {
  if (!isAuthticated()) {
    return <Navigate to="/signin" />;
  } else {
    return children;
  }
};

export default privateRoute;
