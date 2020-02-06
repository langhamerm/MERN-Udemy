import React, { Component } from "react";
import { Input } from "../components/Form";
import WEEK1_1 from "../components/WEEK1_1";
import WEEK1_2 from "../components/WEEK1_2";
import "materialize-css/dist/css/materialize.min.css";
// import ReactDOM from "react-dom";
// import Container from "react-bootstrap/Container";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import reduxThunk from "redux-thunk";
// import reducers from '../reducers';
// import App from "../components/App";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const Calculate = (week) => {
  week = document.getElementById("week-input").value;
  console.log(<WEEK1_1 />);
  if (parseInt(week) === 1) {
     
      week = <WEEK1_1 />;
      console.log(week);
    return week;
  
  } else if (parseInt(week) === 2) {
    week = <WEEK1_2 />;
    return week;
  }
  document.querySelector("#root").innerHTML = week;
}
 class Exercises extends Component {

  render() {
    

    // {this.state.week}
    return (
      <div id="selecta">
        <Input id="week-input" type="number" placeholder="" />
      
        <button type="button" onClick={Calculate} value="calculate">
          Pick Your Week
        </button>

        
      </div>
    );
    // switch(week) {
    //   case 1:
    //     week = <WEEK1_1 />;
    //     break;
    //     case 2:
    //       week = <WEEK1_2 />;
    //       break;
    //     default:
    //       console.log(week);
    //   }
  }
  // week = week.value();
}
export default Exercises;
