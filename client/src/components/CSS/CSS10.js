import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';
import bord from "../../images/bord.png";
// import internal from "../../images/internal.png";
// import inline from "../../images/cssid.png";
// import order from "../../images/order.png";
// import all from "../../images/allcssselectors.png";
const CSS10 = () => {
  return (
    <div>

      <img id="doctype" src={bord} alt={"persevere"}/>
      {/* <img id="head" src={internal} alt={"persevere"}/>
      <img id="head" src={inline} alt={"persevere"}/>
      <img id="head" src={order} alt={"persevere"}/> */}
      {/* <img id="head" src={all} alt={"persevere"}/> */}
      <br></br>
      <Jumbotron>
      <h1>Practice with borders and coloring below!</h1>
      </Jumbotron>
     
    <Codepen src={"https://codepen.io/langhamerm/embed/xxGwMYO?height=265&theme-id=dark&default-tab=html,result"}/>
    </div>
  );
};
export default CSS10;
