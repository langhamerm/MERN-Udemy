import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from "../Codepen";
import pseudo from "../../images/pseudo.png";
const WEEK_2_4 = () => {
  return (
    <div>
      <Jumbotron>
        <h1 id="ex-title">Instructions:</h1>
        <br></br>
        <p style={{ fontSize: "2em" }}>
          Create a series of links and modify the pseudo-classes associated with
          their Default, Active, Hover, and Focus States.
        </p>
        <ul>
          Be sure to at least modify:
          <li> Content (Change words)</li>
          <li>Colors</li>
          <li>Spacing</li>
          <li>Etc.</li>
        </ul>
      </Jumbotron>

      <img id="demo" src={pseudo}></img>
      <Codepen
        src={"https://codepen.io/langhamerm/embed/oNXNRyM?height=265&theme-id=dark&default-tab=css,result&editable=true"}
      />
    </div>
  );
};
export default WEEK_2_4;
