import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from "../Codepen";
import dev from "../../images/dev.png";
const WEEK_2_1 = () => {
  return (
    <div>
      <Jumbotron>
        <h1 id="ex-title">Instructions:</h1>
        <br></br>
        <p style={{ fontSize: '2em'}}>
          For the next 15 minutes, take a website that you commonly use (Amazon,
          Google, Huff Po, etc.) and heavily modify it using the Google
          Developer Tools.
        </p>
        <p style={{ fontSize: '2em'}}>Be sure to at least modify:</p>
        <ul style={{ fontSize: '1.5em'}}>
         
          <li> Content (Change words)</li>
          <li>Colors</li>
          <li>Spacing</li>
          <li>Etc.</li>
        </ul>
      </Jumbotron>

      <img id="demo" src={dev}></img>
      {/* <Codepen
        src={
          "https://codepen.io/langhamerm/embed/MWwWxwO?height=265&theme-id=dark&default-tab=html,result&editable=true"
        }
      /> */}
    </div>
  );
};
export default WEEK_2_1;
