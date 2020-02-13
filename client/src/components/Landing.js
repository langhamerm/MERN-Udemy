import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import logo from '../images/logo.png'; // Tell Webpack this JS file uses this image;

class Landing extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <h1>Please Login</h1>;
      default:
    return <h1
    style={{ 
      textAlign: 'center'
     }}
    >Welcome, {this.props.auth.firstName}</h1>
         
    }
  }

  render() {
    
    // console.log(this.props);
 
    return (
      <div className="container">
        {this.renderContent()}
        <img 
        src={logo} 
        alt={"persevere"}
        style={{ 
          textAlign: 'center',
          height: "100%",
          width: "100%",
         }}
        />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);