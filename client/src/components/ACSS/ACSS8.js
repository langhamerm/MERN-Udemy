import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';
import txt from "../../images/txt.png";
import syntax from "../../images/synsdw.png";
import shadow from "../../images/shadow.png";
import sdw from "../../images/sdw.png";
// import { Jumbotron } from "react-bootstrap";
// import all from "../../images/allcssselectors.png";
const CSS8 = () => {
  return (
    <div>

      <img id="head" src={txt} alt={"persevere"}/>
      <img id="head" src={syntax} alt={"persevere"}/>
      <img id="head" src={shadow} alt={"persevere"}/>
      <img id="head" src={sdw} alt={"persevere"}/>
      <br></br>
      <Jumbotron>
      <h1>Practice changing text colors and shadowing below!</h1>
      </Jumbotron>
    <Codepen src={"https://codepen.io/langhamerm/embed/xxGwMYO?height=265&theme-id=dark&default-tab=html,result"}/>
    </div>
  );
};
export default CSS8;
