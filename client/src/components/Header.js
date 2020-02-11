import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Activities from "./Activities";
// import Jumbotron from './Jumbotron';
// import Payments from './Payments';
const renderActivities = () => {
  return <Activities activity="Console Commands" />;
};

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a id="pcc" href="/auth/google">
              Login With Google
            </a>
          </li>
        );
      default:

        return (

          <ul id="nav-mobile" className="right">
            <li>
              <Link
                to={"/activities"}
                onClick={renderActivities}
                style={{ paddingRight: "1em" }}
              >
                Curriculum
              </Link>
            </li>

            <li>
              <a href="/api/logout">Logout</a>
            </li>
            {/* <li><Payments /></li>
            <li>
              Credits: {this.props.auth.credits}
            </li> */}
          </ul>
        );
    }
  }

  render() {
    // console.log(this.props);

    return (
      <nav className="cyan accent-3">
        <div className="nav-wrapper">
          <Link
            to={"/"}
            className="left brand-logo"
            style={{ paddingLeft: "1em" }}
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
