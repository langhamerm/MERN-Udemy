import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';
import html5 from "../../images/html5.png";

const HTML5 = () => {
  return (
    <div>
  
      <Jumbotron>
        <h1 id="ex-title">HTML5</h1>
        <br></br>
       <p style={{ fontSize: '2em'}}>
          Study the HTML5 documentation from <a href="https://www.w3schools.com/html/html_attributes.asp">W3 Schools</a>.
        </p>
        <p style={{ fontSize: '2em'}}>
        Try out some of the new elements in the editor.
        </p>

      </Jumbotron>
     
      <img id="html5" src={html5} alt={"persevere"}/>
 


    <Codepen src={"https://codepen.io/langhamerm/embed/MWwWxwO?height=265&theme-id=dark&default-tab=html,result&editable=true"}/>
    </div>
  );
};
export default HTML5;
