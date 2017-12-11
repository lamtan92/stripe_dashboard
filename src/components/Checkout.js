import React, { Component } from 'react';
import _ from 'lodash';

export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastestCharge: "None"
        }
        this.createCharge = this.createCharge.bind(this);
    }

    createCharge() {
        this.setState({
            lastestCharge: 'Creating token...'
        }, () => {
            this.props.postPublic('tokens', {
                'card[number]': '4242424242424242',
                'card[exp_month]': '02',
                'card[exp_year]': '2018'
            })
            .then((token) => {
                this.setState({
                    lastestCharge: 'Creating charge...'
                });
                return this.props.postSecret('charges', {
                    'amount': 2000,
                    'currency': 'usd',
                    'description': 'test Charge',
                    'source': token.id
                })
            })
            .then((charge) => {
                this.setState({
                    lastestCharge: charge.id
                })
            });
        });
    }

    render() {
        return (
            <div>
                <h2>Checkout</h2>
                <button onClick={this.createCharge}>Charge</button> 
                <p>Lastest Charge: {this.state.lastestCharge}</p>
            </div>
        )
    }
}
