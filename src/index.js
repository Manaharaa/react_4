//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const name = "Angela Yu";
const currentDate = new Date();

console.log(currentDate);

const currentYear = currentDate.getFullYear();
console.log(currentYear);

ReactDOM.render(
  <div>
    <p>Created by {name} </p>
    <p>
      Copyright {new Date().getFullYear()} or Copyright {currentYear}
    </p>
  </div>,
  document.getElementById("root")
);
