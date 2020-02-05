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
import Iframe from "./Iframe";
import Decks from "./Decks";

function slideSend() {
  window.location.href = "/slides";
}

class Activities extends Component {
  render(props) {
    // console.log(this.props);

    return (
      <Accordion>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Week 1
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/activities/01-week">
                        Exercises
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item style={{textAlign: 'center', padding: '0'}}>
                    <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://github.com/langhamerm/PersevereCodingCamp/tree/master/homework%20assignments/01-week">
                        Homework
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                     <Decks text="View Lesson"/>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Week 2
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks text="View this Lesson"/>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Week 3
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="7">
                  Week 4
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="7">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
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
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Week 5
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Week 6
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  Week 7
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                  Week 8
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
        </Row>
        {/* NEW ROW */}
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="9">
                  Week 9
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="9">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="10">
                  Week 10
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="10">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="11">
                  Week 11
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="11">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="12">
                  Week 12
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="12">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
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
                <Accordion.Toggle as={Button} variant="link" eventKey="13">
                  Week 13
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="13">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="14">
                  Week 14
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="14">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="15">
                  Week 15
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="15">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="16">
                  Week 16
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="16">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
        </Row>
        {/* NEW ROW AGAIN */}
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="17">
                  Week 17
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="17">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="18">
                  Week 18
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="18">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="19">
                  Week 19
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="19">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="20">
                  Week 20
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="20">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
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
                <Accordion.Toggle as={Button} variant="link" eventKey="21">
                  Week 21
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="21">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="22">
                  Week 22
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="22">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="23">
                  Week 23
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="23">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="24">
                  Week 24
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="16">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Exercises</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Iframe src="https://www.youtube.com/embed/M-j159LFwGw" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="https://www.google.com">Homework</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Decks />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
        </Row>
      </Accordion>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Activities);
// export default Activities;
