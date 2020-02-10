import React, { Component } from "react";
// import { Input } from "../components/Form";
import WEEK_3_1 from "../components/WEEK_3/WEEK_3_1";
import WEEK_3_2 from "../components/WEEK_3/WEEK_3_2";
import WEEK_3_3 from "../components/WEEK_3/WEEK_3_3";
import WEEK_3_4 from "../components/WEEK_3/WEEK_3_4";
import WEEK_3_5 from "../components/WEEK_3/WEEK_3_5";
import WEEK_3_6 from "../components/WEEK_3/WEEK_3_6";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "materialize-css/dist/css/materialize.min.css";
class Week3 extends Component {
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
                <h4>01. Code Dissection</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <WEEK_3_1 />
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
                <h4>02. Basic Variables Demo</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <WEEK_3_2 />
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
                <h4>03. Pizza Variables</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <WEEK_3_3 />
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
                <h4>04. Console Log Demo</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <WEEK_3_4 />
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
                <h4>05. Pizza Console</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <WEEK_3_5 />
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
                <h4>06. Prompt Demo</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <WEEK_3_6 />
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
                <h4>07. Prompt Sushi</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <WEEK_3_1 />
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
                <h4>08. Conditional Demo</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <WEEK_3_2 />
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
                <h4>09. Conditional Activity</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <WEEK_3_3 />
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
                <h4>10. Conditional Activity 2</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <WEEK_3_4 />
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
                <h4>11. Arrays Demo</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <WEEK_3_5 />
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
                <h4>12. Arrays Activity</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <WEEK_3_6 />
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
                <h4>13. Bands</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <WEEK_3_1 />
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
                <h4>14. JS Dissect</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <WEEK_3_2 />
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
                <h4>15. Cool People Array</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <WEEK_3_3 />
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
                <h4>16. Array Setting</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <WEEK_3_4 />
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
                <h4>17. My First Loop</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <WEEK_3_5 />
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
                <h4>18. Zoo Loop</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <WEEK_3_6 />
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
                <h4>19. Another Loop</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <WEEK_3_1 />
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
                <h4>20. Hard Loop</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <WEEK_3_2 />
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
                <h4>21. Events</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <WEEK_3_3 />
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
                <h4>22. Pseudo Code</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <WEEK_3_4 />
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
                <h4>23. RPS-Coded</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <WEEK_3_5 />
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
                <h4>24. Recap</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <WEEK_3_6 />
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
                <h4>25. Loop TV</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <WEEK_3_6 />
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
                <h4>26. Superhero Logging</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <WEEK_3_1 />
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
                <h4>27. My First Functions</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <WEEK_3_2 />
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
                <h4>28. Good Array</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <WEEK_3_3 />
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
                <h4>29. Joan of Arc Arrays</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <WEEK_3_4 />
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
                <h4>30. Gandalf the Grey Objects</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <WEEK_3_5 />
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
                <h4>31. My First Object</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <WEEK_3_6 />
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
                <h4>32. Car Game</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <WEEK_3_1 />
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
                <h4>33. Scope</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <WEEK_3_2 />
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
                <h4>34. Question Game</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <WEEK_3_3 />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    );

  }
 
}
export default Week3;