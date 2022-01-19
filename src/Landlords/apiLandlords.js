import React, { Component } from "react";
import { API } from "../Conf";

export const GetLandlords = () => {
  return fetch(`${API}landlord`, {
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

export const PostLandLord = (SavedDataObject) => {
  console.log("GOT OBJECT" + SavedDataObject);
  return fetch(`${API}landlord/create`, {
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

export const DeleteLandlord = (userData) => {
  return fetch(`${API}landlord/${userData}`, {
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

export const EditLandlord = (userData) => {
  return fetch(`${API}landlord/${userData}`, {
    method: "PUT",
    "Content-Type": "application/json",
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
