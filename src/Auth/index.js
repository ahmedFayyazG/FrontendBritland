import { Navigate } from "react-router";
import { API } from "../Conf";

export const Signin = (user) => {
  return fetch(`${API}signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Authenticate = (data, next) => {
  if (typeof window != "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
  }
  next();
};

export const isAuthticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    const Rolew = JSON.parse(localStorage.getItem("jwt"));

    return Rolew;
  } else {
    return false;
  }
};

export const Signout = (next) => {
  if (typeof window != "undefined") {
    console.log("Authenticate method Hits");
    localStorage.removeItem("jwt");
    next();
    return fetch(`{API}/v1/signout`, {
      method: "GET",
    })
      .then((response) => {
        <Navigate to="/signin" />;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
