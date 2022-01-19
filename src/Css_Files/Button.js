import React, { Component } from "react";
import styled from "styled-components";
//import "./Button.scss";

const Button = ({ name }) => {
  return <Bottons>{name}</Bottons>;
};

export default Button;

const Bottons = styled.button`
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
`;

{
  /* <div class="buttons">
  <h1>Simple hover effects with <code>box-shadow</code></h1>
  <button class="fill">Fill In</button>
  <button class="pulse">Pulse</button>
  <button class="close">Close</button>
  <button class="raise">Raise</button>
  <button class="up">Fill Up</button>
  <button class="slide">Slide</button>
  <button class="offset">Offset</button>
</div> */
}
