import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from "../Codepen";
import dev from "../../images/dev.png";
import { Link } from "react-router-dom";
const WEEK_2_3 = () => {
  return (
    <div>
      <Jumbotron>
        <h1 id="ex-title">Instructions:</h1>
        <br></br>
        <p style={{ fontSize: '2em'}}>
          Create (or re-use) an HTML Document of your choosing and then
          incorporate 2-3 Custom <Link to={'https://fonts.google.com/'}>Google Fonts</Link> into the page.
        </p>
        
      </Jumbotron>
    
      {/* <img id="demo" src={dev}></img> */}
      <Codepen
        src={
          "https://codepen.io/langhamerm/embed/BaNaewg?height=265&theme-id=dark&default-tab=html,result&editable=true"
        }
      />
    </div>
  );
};
export default WEEK_2_3;
