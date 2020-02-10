import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';
import forms from "../../images/forms.png";
const HTML3 = () => {
  return (
    <div>
  
      <Jumbotron>
        <h1 id="ex-title">Forms Demo</h1>
        <br></br>
       <p style={{ fontSize: '2em'}}>
          Study the form documentation from <a href="https://www.w3schools.com/html/html_forms.asp">W3 Schools</a>.
        </p>
       <p style={{ fontSize: '2em'}}>Create a basic HTML Form element in the editor below.</p>
      </Jumbotron>
     
      <img id="demo" src={forms} alt={"persevere"}/>
    <Codepen src={"https://codepen.io/langhamerm/embed/MWwWxwO?height=265&theme-id=dark&default-tab=html,result&editable=true"}/>
    </div>
  );
};
export default HTML3;
