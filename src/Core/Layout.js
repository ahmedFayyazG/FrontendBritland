import React, { Component, Fragment } from "react";
import Menu from "./menu";

const Layout = ({ title = "Title", description = "Description", children }) => (
  <Fragment>
    <Menu />
    <div className="mb-5">
      <div className="jumbotron">
        <h2>{title}</h2>
        <p className="lead">{description}</p>
      </div>
      {children}
    </div>
  </Fragment>
);

export default Layout;
