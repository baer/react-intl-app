"use strict";

import React from "react";
import {Greeting} from "greeting";

import Login from "./components/login.jsx"

export default function (props) {
  return (
    <div>
      <Greeting/>
      <br/>
      <Login/>
    </div>
  );
}
