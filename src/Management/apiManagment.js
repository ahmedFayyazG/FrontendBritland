import { API } from "../Conf";
import React, { Component } from "react";

export const GetManagements = () => {
  return fetch(`${API}management/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return console.error(err);
    });
};

export const PostManagement = (SavedDataObject) => {
  console.log("GOT OBJECT" + SavedDataObject);
  return fetch(`${API}management/create/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: SavedDataObject,
  })
    .then((response) => {
      if (response) {
        return response.json();
      } else {
        return console.log("No Response Found");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const DeleteManagement = (userData) => {
  return fetch(`${API}management/${userData}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response) {
        return response.json();
      } else {
        return console.log("No Response Found");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
