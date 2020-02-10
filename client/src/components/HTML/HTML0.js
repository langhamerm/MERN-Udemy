import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';
import head from "../../images/head.png";
import title from "../../images/title.png";
import doctype from "../../images/doctype.png";
const HTML0 = () => {
  return (
    <div>
  
      <Jumbotron>
        <h1 id="ex-title">Basic Page Structure</h1>
        <br></br>
       <p style={{ fontSize: '2em'}}>
          Study the HTML Basic documentation from <a href="https://www.w3schools.com/html/html_basic.asp">W3 Schools</a>.
        </p>
        <p style={{ fontSize: '2em'}}>
          Study the HTML Head documentation from <a href="https://www.w3schools.com/html/html_head.asp">W3 Schools</a>.
        </p>
       <p style={{ fontSize: '2em'}}>Create the basic HTML Page Layout element in the editor below.</p>
      </Jumbotron>
     
      <img id="doctype" src={doctype} alt={"persevere"}/>
      <img id="head" src={head} alt={"persevere"}/>
      <img id="head" src={title} alt={"persevere"}/>
    <Codepen src={"https://codepen.io/langhamerm/embed/MWwWxwO?height=265&theme-id=dark&default-tab=html,result&editable=true"}/>
    </div>
  );
};
export default HTML0;
