import React, { Component } from "react";
// import { Input } from "../components/Form";
import WEEK_1_1 from "../components/WEEK_1/WEEK_1_1";
import WEEK_1_2 from "../components/WEEK_1/WEEK_1_2";
import WEEK_1_3 from "../components/WEEK_1/WEEK_1_3";
import WEEK_1_4 from "../components/WEEK_1/WEEK_1_4";
import WEEK_1_5 from "../components/WEEK_1/WEEK_1_5";
import WEEK_1_6 from "../components/WEEK_1/WEEK_1_6";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "materialize-css/dist/css/materialize.min.css";
class Week1 extends Component {
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
                <h4>01. Console Commands</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <WEEK_1_1 />
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
                <h4>02. My First HTML</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <WEEK_1_2 />
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
                <h4>03. HTML_Git</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <WEEK_1_3 />
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
                <h4>04. HTML_CSS_Layout</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <WEEK_1_4 />
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
                <WEEK_1_5 />
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
                <WEEK_1_6 />
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
    //     week = <WEEK_1_1 />;
    //     break;
    //     case 2:
    //       week = <WEEK_1_2 />;
    //       break;
    //     default:
    //       console.log(week);
    //   }
  }
  // week = week.value();
}
export default Week1;