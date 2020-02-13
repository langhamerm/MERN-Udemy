import React, { Component } from "react";
// import { Input } from "../components/Form";
import CSS0 from "../components/CSS/CSS0";
import CSS1 from "../components/CSS/CSS1";
import CSS2 from "../components/CSS/CSS2";
import CSS3 from "../components/CSS/CSS3";
import CSS4 from "../components/CSS/CSS4";
import CSS5 from "../components/CSS/CSS5";
import CSS6 from "../components/CSS/CSS6";
import CSS7 from "../components/CSS/CSS7";
import CSS8 from "../components/CSS/CSS8";
import CSS9 from "../components/CSS/CSS9";
import CSS10 from "../components/CSS/CSS10";
import Box1 from "../components/Box/Box1";
import Box2 from "../components/Box/Box2";
import Box3 from "../components/Box/Box3";
import Box4 from "../components/Box/Box4";
import Box5 from "../components/Box/Box5";
import Box6 from "../components/Box/Box6";
import Text1 from "../components/Text/Text1";
import Text2 from "../components/Text/Text2";
import Text3 from "../components/Text/Text3";
import Text4 from "../components/Text/Text4";
import Text5 from "../components/Text/Text5";
import Text6 from "../components/Text/Text6";
import D1 from "../components/D/D1";
import D2 from "../components/D/D2";
import D3 from "../components/D/D3";
import D4 from "../components/D/D4";
import D5 from "../components/D/D5";
import D6 from "../components/D/D6";
import D7 from "../components/D/D7";
import P1 from "../components/P/P1";
import P2 from "../components/P/P2";
import P3 from "../components/P/P3";
import P4 from "../components/P/P4";
import Q1 from "../components/Q/Q1";
import Q2 from "../components/Q/Q2";
import Q3 from "../components/Q/Q3";
import Q4 from "../components/Q/Q4";
import Q5 from "../components/Q/Q5";
import Q6 from "../components/Q/Q6";
import Q7 from "../components/Q/Q7";
import Q8 from "../components/Q/Q8";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "materialize-css/dist/css/materialize.min.css";
class CSS extends Component {
  render() {
    return (
      <Container>
       
        <Accordion>
        <Row>
          <Col>
          <Card style={{ textAlign: "center" }}>
            <Card.Header>
              <Accordion.Toggle
                style={{
                  width: "100%",
                  height: "3em",
                  padding: "0 !important"
                }}
                className="cyan accent-3"
                as={Button}
                variant="link"
                eventKey="0"
              >
                <h2>Intro</h2>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Accordion>
                  <Card style={{ textAlign: "center" }}>
                    <Card.Header className="cyan accent-3">
                      <Accordion.Toggle
                        className="cyan accent-3"
                        as={Button}
                        variant="link"
                        eventKey="-1"
                        style={{
                          width: "100%",
                          height: "3em",
                          padding: "0 !important"
                        }}
                      >
                        <h2>00. Getting Started</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="-1">
                      <Card.Body>
                        <CSS0 />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
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
                        <h2>01. CSS Syntax</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <CSS1 />
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
                        <h2>02. Selectors</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <CSS2 />
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
                        <h2>03. How to add CSS</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <CSS3 />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card style={{ textAlign: "center" }}>
                    <Card.Header className="cyan accent-3">
                      <Accordion.Toggle
                        className="cyan accent-3"
                        as={Button}
                        variant="link"
                        eventKey="5"
                        style={{
                          width: "100%",
                          height: "3em",
                          padding: "0 !important"
                        }}
                      >
                        <h2>04. List of CSS Properties</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body>
                        <CSS4 />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
     
          
          <Card style={{ textAlign: "center" }}>
            <Card.Header>
              <Accordion.Toggle
                style={{
                  width: "100%",
                  height: "3em",
                  padding: "0 !important"
                }}
                className="cyan accent-3"
                as={Button}
                variant="link"
                eventKey="1"
              >
                <h2>Colors</h2>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
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
                        <h2>01. Color Names</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <CSS5 />
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
                        <h2>02. RGB</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <CSS6 />
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
                        <h2>03. HSL</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <CSS7 />
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
                        <h2>04. Text Colors</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        <CSS8 />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card style={{ textAlign: "center" }}>
                    <Card.Header className="cyan accent-3">
                      <Accordion.Toggle
                        className="cyan accent-3"
                        as={Button}
                        variant="link"
                        eventKey="4"
                        style={{
                          width: "100%",
                          height: "3em",
                          padding: "0 !important"
                        }}
                      >
                        <h2>05. Backgrounds</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        <CSS9 />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card style={{ textAlign: "center" }}>
                    <Card.Header className="cyan accent-3">
                      <Accordion.Toggle
                        className="cyan accent-3"
                        as={Button}
                        variant="link"
                        eventKey="5"
                        style={{
                          width: "100%",
                          height: "3em",
                          padding: "0 !important"
                        }}
                      >
                        <h2>06. Border Color</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body>
                        <CSS10 />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          </Col>
<Col>
          <Card style={{ textAlign: "center" }}>
            <Card.Header>
              <Accordion.Toggle
                style={{
                  width: "100%",
                  height: "3em",
                  padding: "0 !important"
                }}
                className="cyan accent-3"
                as={Button}
                variant="link"
                eventKey="2"
              >
                <h2>The Box Model</h2>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
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
                        <h2>01. Box 101</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Box1 />
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
                        <h2>02. Border</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <Box2 />
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
                        <h2>03. Margins</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <Box3 />
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
                        <h2>04. Padding</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        <Box4 />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card style={{ textAlign: "center" }}>
                    <Card.Header className="cyan accent-3">
                      <Accordion.Toggle
                        className="cyan accent-3"
                        as={Button}
                        variant="link"
                        eventKey="4"
                        style={{
                          width: "100%",
                          height: "3em",
                          padding: "0 !important"
                        }}
                      >
                        <h2>05. Height and Width</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        <Box5 />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card style={{ textAlign: "center" }}>
                    <Card.Header className="cyan accent-3">
                      <Accordion.Toggle
                        className="cyan accent-3"
                        as={Button}
                        variant="link"
                        eventKey="5"
                        style={{
                          width: "100%",
                          height: "3em",
                          padding: "0 !important"
                        }}
                      >
                        <h2>06. Outline</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body>
                        <Box6 />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ textAlign: "center" }}>
            <Card.Header>
              <Accordion.Toggle
                style={{
                  width: "100%",
                  height: "3em",
                  padding: "0 !important"
                }}
                className="cyan accent-3"
                as={Button}
                variant="link"
                eventKey="3"
              >
                <h2>Fonts and Texts</h2>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
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
                        <h2>01. Text</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Text1 />
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
                        <h2>02. Fonts</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <Text2 />
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
                        <h2>03. Icons</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <Text3 />
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
                        <h2>04. Links</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        <Text4 />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card style={{ textAlign: "center" }}>
                    <Card.Header className="cyan accent-3">
                      <Accordion.Toggle
                        className="cyan accent-3"
                        as={Button}
                        variant="link"
                        eventKey="4"
                        style={{
                          width: "100%",
                          height: "3em",
                          padding: "0 !important"
                        }}
                      >
                        <h2>05. Lists</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        <Text5 />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card style={{ textAlign: "center" }}>
                    <Card.Header className="cyan accent-3">
                      <Accordion.Toggle
                        className="cyan accent-3"
                        as={Button}
                        variant="link"
                        eventKey="5"
                        style={{
                          width: "100%",
                          height: "3em",
                          padding: "0 !important"
                        }}
                      >
                        <h2>06. Tables</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body>
                        <Text6 />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          </Col>
          </Row>
          
          
          <Row>
            <Col>
          <Card style={{ textAlign: "center" }}>
            <Card.Header>
              <Accordion.Toggle
                style={{
                  width: "100%",
                  height: "3em",
                  padding: "0 !important"
                }}
                className="cyan accent-3"
                as={Button}
                variant="link"
                eventKey="4"
              >
                <h2>Display</h2>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
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
                        <h2>01. Display</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <D1 />
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
                        <h2>02. Max-Width</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <D2 />
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
                        <h2>03. Position</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <D3 />
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
                        <h2>04. Overflow</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        <D4 />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card style={{ textAlign: "center" }}>
                    <Card.Header className="cyan accent-3">
                      <Accordion.Toggle
                        className="cyan accent-3"
                        as={Button}
                        variant="link"
                        eventKey="4"
                        style={{
                          width: "100%",
                          height: "3em",
                          padding: "0 !important"
                        }}
                      >
                        <h2>05. Float</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        <D5 />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card style={{ textAlign: "center" }}>
                    <Card.Header className="cyan accent-3">
                      <Accordion.Toggle
                        className="cyan accent-3"
                        as={Button}
                        variant="link"
                        eventKey="5"
                        style={{
                          width: "100%",
                          height: "3em",
                          padding: "0 !important"
                        }}
                      >
                        <h2>06. Inline-block</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body>
                        <D6 />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card style={{ textAlign: "center" }}>
                    <Card.Header className="cyan accent-3">
                      <Accordion.Toggle
                        className="cyan accent-3"
                        as={Button}
                        variant="link"
                        eventKey="6"
                        style={{
                          width: "100%",
                          height: "3em",
                          padding: "0 !important"
                        }}
                      >
                        <h2>07. Align</h2>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                      <Card.Body>
                        <D7 />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Card.Body>
            </Accordion.Collapse>
            </Card>
       
        <Card style={{ textAlign: "center" }}>
          <Card.Header>
            <Accordion.Toggle
              style={{ width: "100%", height: "3em", padding: "0 !important" }}
              className="cyan accent-3"
              as={Button}
              variant="link"
              eventKey="5"
            >
              <h2>Pseudo Fu</h2>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
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
                      <h2>01. Combinators</h2>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <P1 />
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
                      <h2>02. Pseudo Classes</h2>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <P2 />
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
                      <h2>03. Pseudo Elements</h2>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <P3 />
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
                      <h2>04. Opacity</h2>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <P4 />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Col>
        <Col>
        <Card style={{ textAlign: "center" }}>
          <Card.Header>
            <Accordion.Toggle
              style={{ width: "100%", height: "3em", padding: "0 !important" }}
              className="cyan accent-3"
              as={Button}
              variant="link"
              eventKey="6"
            >
              <h2>Intro to Components</h2>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
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
                      <h2>01. Nav Bar</h2>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Q1 />
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
                      <h2>02.Dropdowns</h2>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <Q2 />
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
                      <h2>03. Image Gallery</h2>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <Q3 />
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
                      <h2>04. Image Sprites</h2>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <Q4 />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card style={{ textAlign: "center" }}>
                  <Card.Header className="cyan accent-3">
                    <Accordion.Toggle
                      className="cyan accent-3"
                      as={Button}
                      variant="link"
                      eventKey="4"
                      style={{
                        width: "100%",
                        height: "3em",
                        padding: "0 !important"
                      }}
                    >
                      <h2>05. Attr Selectors</h2>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <Q5 />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style={{ textAlign: "center" }}>
                  <Card.Header className="cyan accent-3">
                    <Accordion.Toggle
                      className="cyan accent-3"
                      as={Button}
                      variant="link"
                      eventKey="5"
                      style={{
                        width: "100%",
                        height: "3em",
                        padding: "0 !important"
                      }}
                    >
                      <h2>06. Forms</h2>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      <Q6 />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style={{ textAlign: "center" }}>
                  <Card.Header className="cyan accent-3">
                    <Accordion.Toggle
                      className="cyan accent-3"
                      as={Button}
                      variant="link"
                      eventKey="6"
                      style={{
                        width: "100%",
                        height: "3em",
                        padding: "0 !important"
                      }}
                    >
                      <h2>07. Counters</h2>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="6">
                    <Card.Body>
                      <Q7 />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style={{ textAlign: "center" }}>
                  <Card.Header className="cyan accent-3">
                    <Accordion.Toggle
                      className="cyan accent-3"
                      as={Button}
                      variant="link"
                      eventKey="7"
                      style={{
                        width: "100%",
                        height: "3em",
                        padding: "0 !important"
                      }}
                    >
                      <h2>08. Website Layout</h2>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="7">
                    <Card.Body>
                      <Q8 />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Col>
        </Row>
        </Accordion>
      </Container>
    );
  }
}
export default CSS;
