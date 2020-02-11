import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { List, ListItem } from "./List";
// import { TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';
import attr from "../../images/attr.png";
import attrs from "../../images/attrs.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import href from '../../images/href.png';
import src from '../../images/src.png';
import alt from '../../images/alt.png';
import style from '../../images/style.png';
import title2 from '../../images/title2.png';

const HTML4 = () => {
  return (
    <div>
  
      <Jumbotron>
        <h1 id="ex-title">Attributes</h1>
        <br></br>
       <p style={{ fontSize: '2em'}}>
          Study the HTML Attributes documentation from <a href="https://www.w3schools.com/html/html_attributes.asp">W3 Schools</a>.
        </p>

       <p style={{ fontSize: '2em'}}>Play around with the various HTML attributes in the editor below.</p>
      </Jumbotron>
     
      <img id="attr" src={attr} alt={"persevere"}/>
      <img id="head" src={attrs} alt={"persevere"}/>

      <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle className="cyan accent-3" as={Button} variant="link" eventKey="0">
        href
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <img id="attr" src={href} alt={"persevere"}/>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle className="cyan accent-3" as={Button} variant="link" eventKey="1">
        src
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <img id="attr" src={src} alt={"persevere"}/>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle className="cyan accent-3" as={Button} variant="link" eventKey="2">
        alt
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      <img id="attr" src={alt} alt={"persevere"}/>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle className="cyan accent-3" as={Button} variant="link" eventKey="3">
        title
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
      <img id="attr" src={title2} alt={"persevere"}/>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle className="cyan accent-3" as={Button} variant="link" eventKey="4">
        style
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
      <img id="attr" src={style} alt={"persevere"}/>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    <Codepen src={"https://codepen.io/langhamerm/embed/MWwWxwO?height=265&theme-id=dark&default-tab=html,result&editable=true"}/>
    </div>
  );
};
export default HTML4;
