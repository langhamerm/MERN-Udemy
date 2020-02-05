import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Activities from "./Activities";


 const renderActivities = () => {
    return <Activities activity="Console Commands"/>;
    
  }

class Header extends Component {

  

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <ul id="nav-mobile" className="right">
            <li>
              <Link
               to={"/activities"}
               onClick={renderActivities}
               >
                 Activities
                 </Link>
            </li>
            <li>
              <Link to={"/homework"}>Homework</Link>
            </li>
            <li>
              <Link to={"/slides"}>Lessons</Link>
            </li>
            <li>
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </ul>
        );
    }
  }

  render() {
    console.log(this.props);

    return (
      <nav className="cyan accent-3">
        <div className="nav-wrapper">
          <Link
            to={"/"}
            className="left brand-logo"
          >
            Persevere Code Camp
          </Link>

          {this.renderContent()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
