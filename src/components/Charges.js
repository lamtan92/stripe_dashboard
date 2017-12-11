import React, { Component } from 'react';

export default class Charges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            charges: []
        }
    }

    componentDidMount() {
        fetch("https://api.stripe.com/v1/charges", {
            method: 'GET',
            headers: {
                'Accept': "application/json",
                'Authorization': `Bearer ${"sk_test_f2rHhiqozTs6dT1pFwnOvzrk"}`,
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
          })
        .then((data) => data.json())
        .then((json) => {
            this.setState ({
                loading : false,
                charges : json.data
            })
        })
    }

    render() {
        let charges;

        if (!this.state.loading) {
            charges = this.state.charges.map((charge) => {
                return (<h3>ID CHARGE: {charge.id} --- Amount: {charge.amount}</h3>)
            });
        }
        return (
            <div>
                <h2>Charges</h2>
                {charges}
            </div>
        )
    }
}
