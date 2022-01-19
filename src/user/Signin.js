import React, { Component, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import Layout from "../Core/Layout";
import { Signin, Authenticate } from "./../Auth/index";
import Box from "@mui/material/Box";
import styled from "styled-components";
import img from "./../Images/wellcome_screen.jpg";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReference: false,
  });

  const { email, password, error, loading } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, loading: true });

    Signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
        console.log("Error is " + data.error);
      } else {
        Authenticate(data, () => {
          setValues({ ...values, redirectToReference: true });
        });
      }
    });
  };

  const redirectUser = () => {
    if (values.redirectToReference) {
      return <Navigate to="/" />;
    }
  };

  const showError = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  const SigninForm = () => (
    <BGI>
      <BOX>
        <Form>
          <div className="form-group">
            <label className="text-muted">Email</label>
            <input
              onChange={handleChange("email")}
              type="email"
              className="form-control"
              value={email}
            />
          </div>

          <div className="form-group">
            <label className="text-muted">Password</label>
            <input
              onChange={handleChange("password")}
              type="password"
              className="form-control"
              value={password}
            />
          </div>
          <button onClick={clickSubmit} className="btn btn-primary">
            Submit
          </button>
        </Form>
      </BOX>
    </BGI>
  );

  return (
    <div>
      {SigninForm()} {redirectUser()} {showError()}
    </div>
  );
};

export default SignIn;

const BOX = styled.div`
  width: 400px;
  height: 300px;
  border: 2px;
  position: relative;
  left: 900px;
  top: 180px;
`;

const BGI = styled.div`
  background-image: url(${img});
  width: 2000px;
  height: 700px;
`;
