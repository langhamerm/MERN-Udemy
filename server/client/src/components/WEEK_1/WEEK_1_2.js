import React from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import { List, ListItem } from "../List";
// import { TextArea, FormBtn } from "../Form";
import Jumbotron from "../Jumbotron";
import Codepen from '../Codepen';
const WEEK_1_2 = () => {
  return (
    <div>
      <Jumbotron>
        <h1 id="ex-title">Instructions:</h1>
        <br></br>
        <p style={{ fontSize: '2em'}}>
          In a new HTML file, create the basic structure of an HTML document and
          include the following in it:
        </p>
      </Jumbotron>
    {/* <Row> */}
        <List>
          <ListItem>DOCTYPE declaration</ListItem>
          <ListItem>Head tag with a title tag</ListItem>
          <ListItem>H1 tag with a title of your choice</ListItem>
          <ListItem>Embed an image</ListItem>
          <h5>Create the following three links on your page:</h5>
          <ListItem>
            One link that is `target="_blank"` so that it opens a new tab when
            clicked on.
          </ListItem>
          <ListItem>Make the second link bold.</ListItem>
          <ListItem>
            Make the third link a placeholder so it goes nowhere.
          </ListItem>
          <ListItem></ListItem>
        </List>
      {/* </Row> */}
      {/* <Row> */}
        <h1 id="ex-title">BONUS</h1>
        <List>
          <ListItem>
            Create an ordered list of steps to make a sandwich.
          </ListItem>
          <ListItem>
            Create an unordered list of 5 bands/musicians you like.
          </ListItem>
          <ListItem>
            Create a table with 2 columns (animal class and animal name) and 4
            rows of animals.
          </ListItem>
          <ListItem>
            Use an alternate way of separating links without line breaks.
          </ListItem>
          <ListItem>
            Embed a Youtube video of your favorite band/musician.
          </ListItem>
        </List>
      {/* </Row> */}

      {/* <Row> */}
      <Codepen src={"https://codepen.io/langhamerm/embed/MWwWxwO?height=265&theme-id=dark&default-tab=html,result&editable=true"}/>
      {/* </Row> */}
    </div>
     );
};
export default WEEK_1_2;
