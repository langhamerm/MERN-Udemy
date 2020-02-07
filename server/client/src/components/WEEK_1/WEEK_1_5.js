import React from "react";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from "../Codepen";
import float from "../../images/float.png";
const WEEK_1_5 = () => {
  return (
    <div>
   
        <Jumbotron>
          <h1 id="ex-title">Instructions:</h1>
          <br></br>
         <p style={{ fontSize: '2em'}}>
            Using `floats.html` and `floats.css` as a starting point, work
            together to create the missing CSS necessary to form the layout
            shown to you on screen.
          </p>
         <p style={{ fontSize: '2em'}}>Hint: You will need to apply each of the following CSS properties at least once:</p>
<ul>
  <li>padding</li>

  <li>margin</li>

  <li>background</li>

  <li>float</li>

 <li>width (read up on width by percents)</li>

  <li>color</li>

  <li>clear</li>

  <li>overflow</li>

  <li>height</li>

  <li>font-size</li>

  <li>line-height</li>
  </ul>
        </Jumbotron>
    
      <img id="demo" src={float}></img>
      <Codepen
        src={
          "https://codepen.io/langhamerm/embed/abObxNb?height=265&theme-id=dark&default-tab=html,result&editable=true"
        }
      />
    </div>
  );
};
export default WEEK_1_5;
