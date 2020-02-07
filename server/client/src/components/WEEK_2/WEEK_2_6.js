import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from "../Codepen";
import grid from "../../images/grid.png";
const WEEK_2_6 = () => {
  return (
    <div>
      <Jumbotron>
        <h1 id="ex-title">Instructions:</h1>
        <br></br>
        <p style={{ fontSize: '2em'}}>
        Using Twitter bootstrap, create a layout that looks like:
        </p>
  
      </Jumbotron>

      <img id="demo" src={grid}></img>
      <Codepen
        src={
          "https://codepen.io/langhamerm/embed/MWwWxwO?height=265&theme-id=dark&default-tab=html,result&editable=true"
        }
      />
    </div>
  );
};
export default WEEK_2_6;
