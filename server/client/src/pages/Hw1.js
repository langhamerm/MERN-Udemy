import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "materialize-css/dist/css/materialize.min.css";
import about from "../images/about.png";
import contact from "../images/contact.png";
import gallery from "../images/gallery.png";
import Codepen from "../components/Codepen";

class Hw1 extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }} >
     <Container>
           <Row>
            <Col>
              <img style={{ width: "100%", height: "100%" }} src={about}></img>
            </Col>
            <Col>
              <img
                style={{ width: "100%", height: "100%" }}
                src={contact}
              ></img>
            </Col>
            <Col>
              <img
                style={{ width: "100%", height: "100%" }}
                src={gallery}
              ></img>
            </Col>
          </Row> 
        </Container>
        <Codepen
          src={
            "https://codepen.io/langhamerm/embed/JjdjqVB?height=265&theme-id=dark&default-tab=html,result&editable=true"
          }
        />
      </div>
    );
  }
}
export default Hw1;
