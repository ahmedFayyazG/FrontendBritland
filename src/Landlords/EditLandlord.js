import { Link } from "@material-ui/core";
import React, { Component, Fragment } from "react";
import { useLocation } from "react-router";
import Menu from "../Core/menu";

const EditLandlord = (rowData) => {
  const { state } = useLocation();
  // const Data = JSON.stringify(rowData);
  // console.log("REcived Data is " + state);

  return (
    <Fragment>
      <Menu />
      <div>
        <Link to="/landlord">Back</Link>
        <h2> Data is : {state}</h2>
      </div>
    </Fragment>
  );
};

export default EditLandlord;
