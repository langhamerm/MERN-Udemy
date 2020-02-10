import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from "../Codepen";
import dev from "../../images/dev.png";
const WEEK_3_1 = () => {
  return (
    <div>
      <Jumbotron>
        <h1 id="ex-title">Instructions:</h1>
        <br></br>
        <p style={{ fontSize: "2em" }}>
          Open the file in Chrome, and observe what happens..
        </p>
        <p style={{ fontSize: "2em" }}>
          With a partner, try to explain how the code connects to the events
          that happen on the page.
        </p>
        <p style={{ fontSize: "2em" }}>
          We haven't covered JavaScript before, but a big part of being a
          developer is learning on the fly!
        </p>
      </Jumbotron>

      <img id="demo" src={dev} alt={"persevere"} />
      <Codepen
        src={"https://codepen.io/langhamerm/embed/ZEGYgYM?height=265&theme-id=dark&default-tab=html,result&editable=true"}
        
      />
    </div>
  );
};
export default WEEK_3_1;
