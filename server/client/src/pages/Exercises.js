import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

import WEEK1_1 from "../components/WEEK1_1";
import WEEK1_2 from "../components/WEEK1_2";

let week = document.getElementById("week-input");

function weekVal() {
  week = week.value();
}

class renderWeek extends Component {
  render() {
    return (
      <form>
        <label for="week-input">Pick Your Week</label>
        <Input
          id="week-input"
          type="number"
          name="quantity"
          min="1"
          max="24"
          value="0"
        />

        <FormBtn type="submit" value="Submit" onClick={weekVal} />
      </form>
    );
  }
}
renderWeek();
console.log(renderWeek());
console.log(weekVal());
// week = renderWeek;

const Exercises = () => {
  switch (week) {
    case 1:
      return <WEEK1_1 />
      break;
    case 2:
      return <WEEK1_2 />
      break;
    // case 3:
    //   return;
    //   break;
    // case 4:
    //   return;
    //   break;
    // case 5:
    //   return;
    //   break;
    // case 6:
    //   return;
    //   return;
    //   break;
    // case 13:
    //   return;
    //   break;
    // case 14:
    //   return;
    //   break;
    // case 15:
    //   return;
    //   break;
    // case 16:
    //   return;
    //   break;
    // case 17:
    //   return;
    //   break;
    // case 18:
    //   return;
    //   break;
    // case 19:
    //   return;
    //   break;
    // case 20:
    //   return;
    //   break;
    // case 21:
    //   return;
    //   break;
    // case 22:
    //   return;
    //   break;
    // case 23:
    //   return;
    //   break;
    // case 24:
    //   return;  //   break;
    // case 7:
    //   return;
    //   break;
    // case 8:
    //   return;
    //   break;
    // case 9:
    //   return;
    //   break;
    // case 10:
    //   return;
    //   break;
    // case 11:
    //   return;
    //   break;
    // case 12:

    //   break;
  }
};

export default Exercises;
