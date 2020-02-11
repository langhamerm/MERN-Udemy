import React from "react";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import { List, ListItem } from "../List";
// import { Input, TextArea, FormBtn } from "./Form";
import Jumbotron from "../Jumbotron";

class Git3 extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 id="ex-title">Instructions: </h1>
          <p style={{ fontSize: "2em" }}>
          From the Terminal/Console, using only the command line
          </p>
        </Jumbotron>

      <Container>
        <ol>
          <li>Create a new folder with the name of `self-destructing-folder`</li>
          <li>Create a new txt file with the name `secret-message.txt`</li>
          <li>Copy `secret-message.txt` to the inside of `self-destructing-folder`.</li>
          <li>Delete the original `secret-message.txt` file.</li>
          <li>Delete the `self-destructing-folder`.</li>
        </ol>
        </Container>
      </div>
    );
  }
}
export default Git3;
