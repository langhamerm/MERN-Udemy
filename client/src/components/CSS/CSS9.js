import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';
import bgc from "../../images/bgc.png";
import bgi from "../../images/bgi.png";
import bgp from "../../images/bgp.png";
import bg from "../../images/bg.png";
// import all from "../../images/allcssselectors.png";
const CSS9 = () => {
  return (
    <div>

      <img id="doctype" src={bg} alt={"persevere"}/>
      <img id="head" src={bgc} alt={"persevere"}/>
      <img id="head" src={bgi} alt={"persevere"}/>
      <img id="head" src={bgp} alt={"persevere"}/>
      {/* <img id="head" src={all} alt={"persevere"}/> */}
      <br></br>
      <Jumbotron>
      <h1>Practice changing backgrounds below!</h1>
      </Jumbotron>
     
    <Codepen src={"https://codepen.io/langhamerm/embed/xxGwMYO?height=265&theme-id=dark&default-tab=html,result"}/>
    </div>
  );
};
export default CSS9;
