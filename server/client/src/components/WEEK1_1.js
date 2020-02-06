import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "./Grid";
import { List, ListItem } from "./List";
// import { Input, TextArea, FormBtn } from "./Form";
import Jumbotron from "./Jumbotron";

const WEEK1_1 = () => {
    return (
      <Container>
        <Jumbotron>
          <h1>Bash / Terminal Commands</h1>
          <h3>
            These are the basic commands for navigating directories in a
            Terminal or Git Bash window
          </h3>
        </Jumbotron>
        <Row>
          <List>
            <strong>
              <ListItem>Change Directory</ListItem>
            </strong>
            <ListItem>`cd`</ListItem>

            <strong>
              <ListItem>Change to Root Directory</ListItem>
            </strong>
            <ListItem>`cd ~`</ListItem>

            <strong>
              <ListItem>Move to One Directory Up</ListItem>
            </strong>
            <ListItem>`cd ..``</ListItem>

            <strong>
              <ListItem>View Folders and Files in the Directory</ListItem>
            </strong>
            <ListItem>`ls``</ListItem>

            <strong>
              <ListItem>Show the current Directory</ListItem>
            </strong>
            <ListItem>`pwd`</ListItem>

            <strong>
              <ListItem>
                Autocomplete a File Name in the Current Directory
              </ListItem>
            </strong>
            <ListItem>
              Press `tab` key once to autocomplete once you have typed a unique
              portion of a file name.
            </ListItem>

            <strong>
              <ListItem>Make New File</ListItem>
            </strong>
            <ListItem>`touch [name of file to create]`</ListItem>

            <strong>
              <ListItem>Make New Folder</ListItem>
            </strong>
            <ListItem>`mkdir [name of directory to create]`</ListItem>

            <strong>
              <ListItem>Delete file</ListItem>
            </strong>
            <ListItem>`rm [name of file to remove]``</ListItem>

            <strong>
              <ListItem>Delete folder</ListItem>
            </strong>
            <ListItem>`rm -r [name of directory to remove]`</ListItem>

            <strong>
              <ListItem>Copying File</ListItem>
            </strong>
            <ListItem>`cp [filename1] [filename2]`</ListItem>

            <strong>
              <ListItem>Move/Rename File</ListItem>
            </strong>
            <ListItem>`mv [filename1] [filename2]`</ListItem>
          </List>
        </Row>

        <Row>
          <h3>Mac Only</h3>

          <List>
            <strong>
              <ListItem>Open file or folder (Mac only)</ListItem>
            </strong>

            <ListItem> `open [name of file]`</ListItem>

            <strong>
              <ListItem>
                Open all files and folder in current directory (Mac only)
              </ListItem>
            </strong>

            <ListItem> `open .</ListItem>
          </List>
        </Row>

        <Row>
          <h3>PC Only</h3>

          <List>
            <strong>
              <ListItem>Open file or folder (PC only)</ListItem>
            </strong>

            <ListItem>`explorer [name of file]</ListItem>

            <strong>
              <ListItem>
              Open all files and folder in current directory (PC Only)
              </ListItem>
            </strong>

            <ListItem> `explorer .` `open .</ListItem>
          </List>
        </Row>
      </Container>
    );
  }
export default WEEK1_1;