import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from "../Codepen";
import box from "../../images/box.png";
import boxex from "../../images/boxex.png";
// import inline from "../../images/cssid.png";
// import order from "../../images/order.png";
// import all from "../../images/allcssselectors.png";
const Box1 = () => {
  return (
    <div>
      <img id="doctype" src={box} alt={"persevere"} />
    <img id="head" src={boxex} alt={"persevere"}/> 
   
      <br></br>
      <Jumbotron>
        <h1>Practice the Box Model!</h1>
      </Jumbotron>

      <Codepen
        src={
            "https://codepen.io/langhamerm/embed/dyoYxxG?height=265&theme-id=dark&default-tab=html,result&editable=true"
        }
      />
    </div>
  );
};
export default Box1;
