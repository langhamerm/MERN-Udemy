import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Exercises from '../pages/Exercises';
import Header from "./Header";
import Landing from "./Landing";
import Activities from "./Activities";
import ControlledCarousel from "./ControlledCarousel";

// const Dashboard = () => <h2>Dashboard</h2>;
// const SurveyNew = () => <h2>SurveyNew</h2>;
// import Container from "react-bootstrap/Container";
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/activities" component={Activities} />
        <Route exact path="/slides" component={ControlledCarousel} />
        <Route path="/exercises" component={Exercises} />
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
