import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
import { List, ListItem } from "../List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from "../Codepen";
// import dev from "../../images/dev.png";
const WEEK_2_2 = () => {
  return (
    <div>
      <Jumbotron>
        <h1 id="ex-title">Instructions:</h1>
        <br></br>
        <p>
          Using the `html-template` file provided to you, create an external CSS
          stylesheet to modify the typography of each of the body paragraphs.
        </p>
        <p>
          Be sure to modify the following CSS properties for each paragraph of
          your page:
        </p>
        <List>
          <ListItem>font-family</ListItem>
          <ListItem>font-size</ListItem>
          <ListItem>font-weight</ListItem>
          <ListItem>line-height</ListItem>
        </List>
        <p>Hint: You will need to do three things to accomplish this task. Link to
        a CSS page that you'll make Create classes for each paragraph Add in
        styles for each class</p>
        <List>
          Be sure to at least modify:
          <ListItem> Content (Change words)</ListItem>
          <ListItem>Colors</ListItem>
          <ListItem>Spacing</ListItem>
          <ListItem>Etc.</ListItem>
        </List>
      </Jumbotron>

      {/* <img id="demo" src={dev}></img> */}
      <Codepen
     src={"https://codepen.io/langhamerm/embed/eYNYaEg?height=265&theme-id=dark&default-tab=html,result&editable=true"}
      />
    </div>
  );
};
export default WEEK_2_2;
