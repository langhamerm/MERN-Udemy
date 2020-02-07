import React from "react";
// import { Link } from "react-router-dom";
import { Row, Container } from "./Grid";
import { List, ListItem } from "./List";
import { TextArea, FormBtn } from "./Form";
import Jumbotron from "./Jumbotron";
import Codepen from './Codepen';
import demo from "./demo.png";
const WEEK1_3 = () => {
  return (
    <Container>
      <Jumbotron>
        <h1 id="ex-title">Instructions:</h1>
        <br></br>
        <p>
          Create a basic HTML page with your own information that looks similar
          to the design shown on screen.
        </p>
        <p>Make it look like this picture!</p>
      </Jumbotron>
      <img id="demo" src={demo}></img>
    <Codepen src="https://codepen.io/langhamerm/embed/preview/MWwWxwO?height=265&theme-id=default&default-tab=result"/>
    </Container>
  );
};
export default WEEK1_3;
