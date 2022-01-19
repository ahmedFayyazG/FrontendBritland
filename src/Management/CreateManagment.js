import React, { Component, Fragment, useEffect, useState } from "react";

import styled from "styled-components";
import Menu from "../Core/menu";
import { Link } from "react-router-dom";
import { API } from "../Conf";
import { isAuthticated } from "../Auth";
import { PostManagement } from "./apiManagment";
const CreateManagment = () => {
  const [values, setValues] = useState({
    builder: "",
    email: "",
    phoneNumber: "",
  });
  const { builder, email, phoneNumber } = values;
  // //...Builder, Email, PhoneNumber

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    // FormData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {}, []);

  const ShowSuccess = () => {
    return (
      <div className="alert alert-info">
        <h2>Product Saved</h2>
      </div>
    );
  };

  const clickSubmit = (event) => {
    event.preventDefault();

    const SendingData = JSON.stringify(values);
    setValues({ ...values, error: "", loading: "true" });
    PostManagement(SendingData).then((res) => {
      if (res.error) {
      } else {
        setValues({
          ...values,
          builder: "",
          email: "",
          phoneNumber: "",
        });

        {
          ShowSuccess();
        }
      }
    });
  };

  const ManagementForm = () => {
    return (
      <Fragment>
        <Menu />
        <h3 style={{ alignItems: "center" }}> Add another Landlord</h3>

        <InputBox>
          <NavLinks to="/mangement"> Back</NavLinks>

          <form className="mb-3" onSubmit={clickSubmit}>
            <div className="form-group">
              <label className="text-muted">Builder</label>
              <input
                onChange={handleChange("builder")}
                type="text"
                className="form-control"
                value={builder}
              />
            </div>
            <div className="form-group">
              <label className="text-muted">Phone Number</label>
              <input
                className="form-control"
                onChange={handleChange("phoneNumber")}
                value={phoneNumber}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="text-muted">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                value={email}
                type="text"
              />
            </div>

            <button className="btn btn-outline-primary"> Save </button>
          </form>
        </InputBox>
      </Fragment>
    );
  };

  return <div>{ManagementForm()}</div>;
};

export default CreateManagment;

const InputBox = styled.div`
  height: 400px;
  widht: 300px;
  margin: 200px;
`;

const NavLinks = styled(Link)`
  display: inline-block;
  outline: 0;
  border: none;
  cursor: pointer;
  padding: 0 24px;
  border-radius: 50px;
  min-width: 100px;
  height: 40px;
  font-size: 18px;
  background-color: #fd0;
  font-weight: 500;
  color: #222;
  min-width: 90px;
  margin-left: 100px;
  margin-bottom: 10px;
  textdecoration: "none";
  onhover: "none";
  focus,
  hover,
  visited,
  link,
  active {
    textdecoration: none;
  }
`;
