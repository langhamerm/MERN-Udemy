import React, { Component } from "react";
import { connect } from "react-redux";
// import { code } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
// import ControlledCarousel from "./ControlledCarousel";
// import Iframe from "./Iframe";
// import Decks from "./Decks";
// import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import Jumbotron from "./Jumbotron";
import ProgressBar from "react-bootstrap/ProgressBar";

// function slidedone() {
//   window.location.href = "/slides";
// }
// function addProgress(a) {
//   a = a++;
// return
//   console.log(a);
// }
// function addNow() {

// }


let now = 0;
class Activities extends Component {
  render() {
    console.log(this.props);
    function UpNow() {
      let now = 0;
      if (now < 14) {
        now++;
        return now;
        console.log(now);
        // return now;
      } else {
        console.log("DONE");
        return now;
      }
    }
    // }

    return (
      <Container>
        <Row>
          <ProgressBar
            animated
            striped
            variant="info"
            now={now}
            label={`${now}%`}
          />
        </Row>
        <Accordion>
          <Row>
            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="0"
                  >
                    Git
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/git">Activities</a>
                        </h4>

                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>

                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="1"
                  >
                    HTML
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <ListGroup>
                    <ListGroup.Item>
                        <h4>
                          <a href="/html">Activities</a>
                        </h4>

                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>

                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="2"
                  >
                    CSS
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <ListGroup>
                    <ListGroup.Item>
                        <h4>
                          <a href="/css">Activities</a>
                        </h4>

                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>

                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="7"
                  >
                    Bootstrap
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="3"
                  >
                    Javascript
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="4"
                  >
                    JQuery
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="5"
                  >
                    AJAX/API
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="6"
                  >
                    Firebase
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="9"
                  >
                    Captone Project 1
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="9">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="10"
                  >
                    Node.js
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="10">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="11"
                  >
                    SQL
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="11">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="12"
                  >
                    Servers
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="12">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="13"
                  >
                    Express.js
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="13">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="14"
                  >
                    Full Stack 101
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="14">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="15"
                  >
                    Fuller Stack
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="15">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="16"
                  >
                    
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="16">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="17"
                  >
                    Week 17
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="17">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="18"
                  >
                    Week 18
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="18">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="19"
                  >
                    Week 19
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="19">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="20"
                  >
                    Week 20
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="20">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="21"
                  >
                    Week 21
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="21">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="22"
                  >
                    Week 22
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="22">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="23"
                  >
                    Week 23
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="23">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header className="cyan accent-3">
                  <Accordion.Toggle
                    className="cyan accent-3"
                    as={Button}
                    variant="link"
                    eventKey="24"
                  >
                    Week 24
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="24">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">Activities</a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                            Homework
                          </a>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/lessons/01-week">
                            Lessons
                          </a>
                        </h4>
                      </ListGroup.Item>
                    </ListGroup>
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Activities);
// export default Activities;
