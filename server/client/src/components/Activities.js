import React, { Component } from "react";
import { connect } from "react-redux";
// import { code } from "react-router-dom";
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
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
// function slideSend() {
//   window.location.href = "/slides";
// }

class Activities extends Component {
  render() {
    // console.log(this.props);

    return (
      <Container>
        <Accordion>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="0">
                    Week 1
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="1">
                    Week 2
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="2">
                    Week 3
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="7">
                    Week 4
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="3">
                    Week 5
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="4">
                    Week 6
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="5">
                    Week 7
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="6">
                    Week 8
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="9">
                    Week 9
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="9">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="10">
                    Week 10
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="10">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="11">
                    Week 11
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="11">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="12">
                    Week 12
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="12">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="13">
                    Week 13
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="13">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="14">
                    Week 14
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="14">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="15">
                    Week 15
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="15">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="16">
                    Week 16
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="16">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="17">
                    Week 17
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="17">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="18">
                    Week 18
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="18">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="19">
                    Week 19
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="19">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="20">
                    Week 20
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="20">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="21">
                    Week 21
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="21">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="22">
                    Week 22
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="22">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="23">
                    Week 23
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="23">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
                <Card.Header>
                  <Accordion.Toggle className='cyan accent-3' as={Button} variant="link" eventKey="24">
                    Week 24
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="24">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <h4>
                          <Link to="/videos">Videos</Link>
                        </h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h4>
                          <a href="/week1">
                            Exercises
                          </a>
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
