import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';
import select from "../../images/csselect.png";
import ele from "../../images/cssele.png";
import cssid from "../../images/cssid.png";
import cssclass from "../../images/cssclass.png";
import all from "../../images/allcssselectors.png";
const CSS2 = () => {
  return (
    <div>

      <img id="doctype" src={select} alt={"persevere"}/>
      <img id="head" src={ele} alt={"persevere"}/>
      <img id="head" src={cssid} alt={"persevere"}/>
      <img id="head" src={cssclass} alt={"persevere"}/>
      <img id="head" src={all} alt={"persevere"}/>
      <h1>Practice your syntax below using different selectors</h1>
     
    <Codepen src={"https://codepen.io/langhamerm/embed/xxGwMYO?height=265&theme-id=dark&default-tab=html,result"}/>
    </div>
  );
};
export default CSS2;
