import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';
import external from "../../images/external.png";
import internal from "../../images/internal.png";
import inline from "../../images/cssid.png";
import order from "../../images/order.png";
// import all from "../../images/allcssselectors.png";
const CSS3 = () => {
  return (
    <div>

      <img id="doctype" src={external} alt={"persevere"}/>
      <img id="head" src={internal} alt={"persevere"}/>
      <img id="head" src={inline} alt={"persevere"}/>
      <img id="head" src={order} alt={"persevere"}/>
      {/* <img id="head" src={all} alt={"persevere"}/> */}
      <h1>Practice your syntax below using different selectors</h1>
     
    <Codepen src={"https://codepen.io/langhamerm/embed/xxGwMYO?height=265&theme-id=dark&default-tab=html,result"}/>
    </div>
  );
};
export default CSS3;
