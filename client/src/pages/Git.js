import React, { Component } from "react";
import { Input } from "../components/Form";
import Git1 from "../components/Git/Git1";
import Git2 from "../components/Git/Git2";
import Git3 from "../components/Git/Git3";
import Git4 from "../components/Git/Git4";
import Git5 from "../components/Git/Git5";
// import Git6 from "../components/Git/Git6";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "materialize-css/dist/css/materialize.min.css";
class Git extends Component {
  render() {
    return (
      <Container>
        <Accordion>
          <Card style={{ textAlign: "center" }}>
            <Card.Header className="cyan accent-3">
              <Accordion.Toggle
                className="cyan accent-3"
                as={Button}
                variant="link"
                eventKey="0"
                style={{
                  width: "100%",
                  height: "3em",
                  padding: "0 !important"
                }}
              >
                <h4>01. Getting Started</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Git1 />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ textAlign: "center" }}>
            <Card.Header className="cyan accent-3">
              <Accordion.Toggle
                className="cyan accent-3"
                as={Button}
                variant="link"
                eventKey="1"
                style={{
                  width: "100%",
                  height: "3em",
                  padding: "0 !important"
                }}
              >
                <h4>02. Console Commands</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Git2 />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ textAlign: "center" }}>
            <Card.Header className="cyan accent-3">
              <Accordion.Toggle
                className="cyan accent-3"
                as={Button}
                variant="link"
                eventKey="2"
                style={{
                  width: "100%",
                  height: "3em",
                  padding: "0 !important"
                }}
              >
                <h4>03. Intro to Console/Bash</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Git3 />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ textAlign: "center" }}>
            <Card.Header className="cyan accent-3">
              <Accordion.Toggle
                className="cyan accent-3"
                as={Button}
                variant="link"
                eventKey="3"
                style={{
                  width: "100%",
                  height: "3em",
                  padding: "0 !important"
                }}
              >
                <h4>04. Git Commands</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <Git4 />
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
                <h4>05. Your First Repository</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <Git5 />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          {/* <Card style={{ textAlign: "center" }}>
             <Card.Header className='cyan accent-3'>
              <Accordion.Toggle
                className="cyan accent-3"
                as={Button}
                variant="link"
                eventKey="5"
                style={{ width: "100%", height: "3em", padding: '0 !important' }}
              >
                <h4>05. Don't Be a Floater</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <Git5 />
              </Card.Body>
            </Accordion.Collapse>
          </Card> */}
          {/* <Card style={{ textAlign: "center" }}>
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
                <Git6 />
              </Card.Body>
            </Accordion.Collapse>
          </Card> */}
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
    //     week = <Git1 />;
    //     break;
    //     case 2:
    //       week = <Git2 />;
    //       break;
    //     default:
    //       console.log(week);
    //   }
  }
  // week = week.value();
}
export default Git;
