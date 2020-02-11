import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
// import Week1 from '../pages/Week1';
// import Week2 from '../pages/Week2';
// import Week3 from '../pages/Week3';
import HTML from '../pages/HTML';
import Git from '../pages/Git';
import Header from "./Header";
import Landing from "./Landing";
import Activities from "./Activities";
import ControlledCarousel from "./ControlledCarousel";
import Videos from './Videos';

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
        <Route exact path="/git" component={Git} />
        <Route exact path="/html" component={HTML} />
        {/* <Route exact path="/week2" component={Week2} />
        <Route exact path="/week3" component={Week3} /> */}
        <Route exact path="/videos" component={Videos} />
      </BrowserRouter>
      
    );
    
  }
}

export default connect(null, actions)(App);