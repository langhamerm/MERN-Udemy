import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";

function Decks(props) {
    return (
<CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button className="primary">{props.text}</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{" "}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button className="primary">{props.text}</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button className="primary">{props.text}</Button>
    </Card.Footer>
  </Card>
</CardDeck>
    )
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Decks);
