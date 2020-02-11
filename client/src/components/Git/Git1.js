import React from "react";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import { List, ListItem } from "../List";
// import { Input, TextArea, FormBtn } from "./Form";
// import Jumbotron from "../Jumbotron";

class Git1 extends React.Component {
  render() {
      return (
          <Container>
              <List>
        <ListItem><a href={'https://git-scm.com/book/en/v2/Getting-Started-Installing-Git'}>Download Git</a></ListItem>
        <ListItem><a href={'https://github.com/join'}>Sign In/Register for Github</a></ListItem>
        </List>
        </Container>
    );
  }
}
export default Git1;
