import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';
import demo2 from "../../images/demo2.png";
const WEEK_1_4 = () => {
  return (
    <div>
      
      <Jumbotron>
        <h1 id="ex-title">Instructions:</h1>
        <br></br>
        <p style={{ fontSize: '2em'}}>
        Create a basic HTML page with your own information that looks similar to the design shown on screen.
        </p>
      </Jumbotron>
     
      <img id="demo" src={demo2}></img>
    <Codepen src={"https://codepen.io/langhamerm/embed/ExjxMZd?height=265&theme-id=default&default-tab=html,result&editable=true"}/>
    </div>
  );
};
export default WEEK_1_4;
