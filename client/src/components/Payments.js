import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import * as actions from '../actions';

class Payments extends React.Component {
    render() {
        return (
            <StripeCheckout
                name="Emaily"
                description="$5 for 5 email credits"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
            <Button size="small">Add Credits</Button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);
