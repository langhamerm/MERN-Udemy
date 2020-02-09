import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="Persevere Code Camp"
        description="Donate"
      >

          <button className="btn-info">Donate</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);