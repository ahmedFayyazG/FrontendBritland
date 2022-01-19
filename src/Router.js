import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { isAuthticated } from "./Auth";
import privateRoute from "./Auth/privateRoute";
import PrivateRoute from "./Auth/privateRoute";
import Home from "./Core/Home";
import Landlord from "./Core/Landlord";
import CreateLandlord from "./Landlords/CreateLandlord";
import EditLandlord from "./Landlords/EditLandlord";
import CreateManagment from "./Management/CreateManagment";
import Management from "./Management/Management";
import CreateTanet from "./Tenets/AddTanet";
import Tenet from "./Tenets/Tenets";
import Signin from "./user/Signin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
      <Routes>
        <Route path="/signin" exact element={<Signin />} />
      </Routes>
      <Routes>
        <Route
          path="/landlord"
          exact
          element={
            <PrivateRoute>
              <Landlord />
            </PrivateRoute>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/addlandlord"
          exact
          element={
            <PrivateRoute>
              <CreateLandlord />
            </PrivateRoute>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/editlandlord/:id"
          exact
          element={
            <PrivateRoute>
              <EditLandlord />
            </PrivateRoute>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/tenet"
          exact
          element={
            <PrivateRoute>
              <Tenet />
            </PrivateRoute>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/mangement"
          exact
          element={
            <PrivateRoute>
              <Management />
            </PrivateRoute>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/addManagement"
          exact
          element={
            <PrivateRoute>
              <CreateManagment />
            </PrivateRoute>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/CreateTanet"
          exact
          element={
            <PrivateRoute>
              <CreateTanet />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
