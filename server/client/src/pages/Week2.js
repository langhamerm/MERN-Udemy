import React, { Component } from "react";
// import { Input } from "../components/Form";
import WEEK_2_1 from "../components/WEEK_2/WEEK_2_1";
import WEEK_2_2 from "../components/WEEK_2/WEEK_2_2";
import WEEK_2_3 from "../components/WEEK_2/WEEK_2_3";
import WEEK_2_4 from "../components/WEEK_2/WEEK_2_4";
import WEEK_2_5 from "../components/WEEK_2/WEEK_2_5";
import WEEK_2_6 from "../components/WEEK_2/WEEK_2_6";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "materialize-css/dist/css/materialize.min.css";
class Week2 extends Component {
  render() {
    return (
      <Container>
        <Accordion>
          <Card style={{ textAlign: "center" }}>
            <Card.Header className='cyan accent-3'>
              <Accordion.Toggle
                className="cyan accent-3"
                as={Button}
                variant="link"
                eventKey="0"
                style={{ width: "100%", height: "3em", padding: '0 !important' }}
              >
                <h4>01. Hack Websites/Dev Tools</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <WEEK_2_1 />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ textAlign: "center" }}>
             <Card.Header className='cyan accent-3'>
              <Accordion.Toggle
                className="cyan accent-3"
                as={Button}
                variant="link"
                eventKey="1"
                style={{ width: "100%", height: "3em", padding: '0 !important' }}
              >
                <h4>02. CSS Typography</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <WEEK_2_2 />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ textAlign: "center" }}>
             <Card.Header className='cyan accent-3'>
              <Accordion.Toggle
                className="cyan accent-3"
                as={Button}
                variant="link"
                eventKey="2"
                style={{ width: "100%", height: "3em", padding: '0 !important' }}
              >
                <h4>03. Google Fonts</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <WEEK_2_3 />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ textAlign: "center" }}>
             <Card.Header className='cyan accent-3'>
              <Accordion.Toggle
                className="cyan accent-3"
                as={Button}
                variant="link"
                eventKey="3"
                style={{ width: "100%", height: "3em", padding: '0 !important' }}
              >
                <h4>04. Pseudo Classes</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <WEEK_2_4 />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ textAlign: "center" }}>
             <Card.Header className='cyan accent-3'>
              <Accordion.Toggle
                className="cyan accent-3"
                as={Button}
                variant="link"
                eventKey="4"
                style={{ width: "100%", height: "3em", padding: '0 !important' }}
              >
                <h4>05. Bootstrap Demo</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <WEEK_2_5 />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ textAlign: "center" }}>
             <Card.Header className='cyan accent-3'>
              <Accordion.Toggle
                className="cyan accent-3"
                as={Button}
                variant="link"
                eventKey="5"
                style={{ width: "100%", height: "3em", padding: '0 !important' }}
              >
                <h4>06. Bootstrap Grid</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <WEEK_2_6 />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    );

  }
 
}
export default Week2;