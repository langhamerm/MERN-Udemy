import React, { Component } from "react";
// import { Input } from "../components/Form";
import CSS0 from "../components/CSS/CSS0";
import CSS1 from "../components/CSS/CSS1";
import CSS2 from "../components/CSS/CSS2";
import CSS3 from "../components/CSS/CSS3";
import CSS4 from "../components/CSS/CSS4";
import CSS5 from "../components/CSS/CSS5";
import CSS6 from "../components/CSS/CSS6";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "materialize-css/dist/css/materialize.min.css";
class CSS extends Component {
  render() {
    return (
      <Container>
        
        <Accordion>
 <Card style={{ textAlign: "center" }}>
    <Card.Header>
      <Accordion.Toggle style={{ width: "100%", height: "3em", padding: '0 !important' }} className="cyan accent-3" as={Button} variant="link" eventKey="0">
       <h2>Intro</h2>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
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
                <CSS0 />
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
                <h4>01. CSS Syntax</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <CSS1 />
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
                <h4>02. Selectors</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <CSS2 />
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
                <h4>03. How to add CSS</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <CSS3 />
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
                <h4>04. List of CSS Properties</h4>
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
      <Accordion.Toggle style={{ width: "100%", height: "3em", padding: '0 !important' }} className="cyan accent-3" as={Button} variant="link" eventKey="1">
      <h2>Colors</h2>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
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
                <h4>01. Color Names</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <CSS5 />
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
                <h4>02. RGB</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <CSS6 />
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
                <h4>03. How To Add CSS</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                {/* <CSS3 /> */}
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
                <h4>04. Colors</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                {/* <CSS4 /> */}
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
                <h4>05. Backgrounds</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                {/* <CSS5 /> */}
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
                <h4>06. Borders</h4>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                {/* <CSS5 /> */}
              </Card.Body>
            </Accordion.Collapse>
          </Card>

        </Accordion>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
 <Card style={{ textAlign: "center" }}>
    <Card.Header>
      <Accordion.Toggle style={{ width: "100%", height: "3em", padding: '0 !important' }} className="cyan accent-3" as={Button} variant="link" eventKey="2">
      <h2>CSS 2</h2>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      {/* <img id="attr" src={alt} alt={"persevere"}/> */}
      </Card.Body>
    </Accordion.Collapse>
  </Card>
 <Card style={{ textAlign: "center" }}>
    <Card.Header>
      <Accordion.Toggle style={{ width: "100%", height: "3em", padding: '0 !important' }} className="cyan accent-3" as={Button} variant="link" eventKey="3">
      <h2>CSS 2</h2>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
      {/* <img id="attr" src={title2} alt={"persevere"}/> */}
      </Card.Body>
    </Accordion.Collapse>
  </Card>
 <Card style={{ textAlign: "center" }}>
    <Card.Header>
      <Accordion.Toggle style={{ width: "100%", height: "3em", padding: '0 !important' }} className="cyan accent-3" as={Button} variant="link" eventKey="4">
      <h2>CSS 2</h2>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
      {/* <img id="attr" src={style} alt={"persevere"}/> */}
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>


        
    
       
       

      </Container>
    );

  }

}
export default CSS;