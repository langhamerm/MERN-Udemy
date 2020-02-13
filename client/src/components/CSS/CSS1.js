import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';
import css from "../../images/css.png";
import why from "../../images/whycss.png";
// import doctype from "../../images/doctype.png";
const CSS1 = () => {
  return (
    <div>

      <img id="doctype" src={css} alt={"persevere"}/>
      {/* <img id="head" src={why} alt={"persevere"}/> */}
      {/* <img id="head" src={title} alt={"persevere"}/> */}
      <h1>Practice your syntax below</h1>
    <Codepen src={"https://codepen.io/langhamerm/embed/xxGwMYO?height=265&theme-id=dark&default-tab=html,result"}/>
    </div>
  );
};
export default CSS1;
