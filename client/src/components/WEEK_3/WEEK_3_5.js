import React from "react";
import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from "../Codepen";
// import dev from "../../images/dev.png";
const WEEK_3_5 = () => {
  return (
    <div>
      <Jumbotron>
        <h1 id="ex-title">Instructions:</h1>
        <br></br>
        <p style={{ fontSize: "2em" }}>
          1. Navigate to the Twitter <Link to={'https://fonts.google.com/'}>Bootstrap website</Link>
        </p>
        <p style={{ fontSize: "2em" }}>
          2. Copy the link to the Bootstrap CSS file into one of your old HTML
          files.
        </p>
        <p style={{ fontSize: "2em" }}>
          3. Look through the Bootstrap CSS or Components list and incorporate
          at least three Bootstrap elements onto your page.
        </p>
      </Jumbotron>

      {/* <img id="demo" src={dev}></img> */}
      <Codepen
        src={
          "https://codepen.io/langhamerm/embed/zYGYQLP?height=265&theme-id=dark&default-tab=html,result&editable=true"
        }
      />
    </div>
  );
};
export default WEEK_3_5;
