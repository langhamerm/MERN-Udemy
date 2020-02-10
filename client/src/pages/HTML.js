import React, { Component } from "react";
// import { Input } from "../components/Form";
import HTML0 from "../components/HTML/HTML0";
import HTML1 from "../components/HTML/HTML1";
import HTML2 from "../components/HTML/HTML2";
import HTML3 from "../components/HTML/HTML3";
import HTML4 from "../components/HTML/HTML4";
// import HTML5 from "../components/HTML/HTML5";
// import HTML6 from "../components/HTML/HTML6";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "materialize-css/dist/css/materialize.min.css";
class HTML extends Component {
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
                eventKey="-1"
                style={{ width: "100%", height: "3em", padding: '0 !important' }}
              >
                <h4>00. Getting Started</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="-1">
              <Card.Body>
                <HTML0 />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ textAlign: "center" }}>
            <Card.Header className='cyan accent-3'>
              <Accordion.Toggle
                className="cyan accent-3"
                as={Button}
                variant="link"
                eventKey="0"
                style={{ width: "100%", height: "3em", padding: '0 !important' }}
              >
                <h4>01. My First HTML</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <HTML1 />
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
                <h4>02. HTML Bio</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <HTML2 />
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
                <h4>03. Forms</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <HTML3 />
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
                <h4>04. Attributes</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <HTML4 />
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
                <h4>05. Don't Be a Floater</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                {/* <HTML5 /> */}
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
                <h4>06. Positioning</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                {/* <HTML6 /> */}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    );
    // <div id="selecta">
    //   <Input id="week-input" type="number" placeholder="" />

    //   <button type="button" onClick={Calculate} value="calculate">
    //     Pick Your Week
    //   </button>

    // </div>

    // switch(week) {
    //   case 1:
    //     week = <HTML1 />;
    //     break;
    //     case 2:
    //       week = <HTML2 />;
    //       break;
    //     default:
    //       console.log(week);
    //   }
  }
  // week = week.value();
}
export default HTML;