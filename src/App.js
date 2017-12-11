import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';

import Tab from "./components/Tab.js";
import TabList from "./components/TabList.js";
import Checkout from "./components/Checkout.js";
import Charges from "./components/Charges.js"
import {withStripe} from "./components/StripeApi.js";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selected: "a"
    }
  }

  render() {
    const WrappedCheckout = withStripe(
      Checkout, 
      "pk_test_Can2evmKRMlLJSSD0rAJKYbv",
      "sk_test_f2rHhiqozTs6dT1pFwnOvzrk"
    )
    const WrappedCharges = withStripe(
      Charges,
      "pk_test_Can2evmKRMlLJSSD0rAJKYbv",
      "sk_test_f2rHhiqozTs6dT1pFwnOvzrk"
    )
    return (
      <TabList>
        <Tab name="Checkout">
          <WrappedCheckout />
        </Tab>
        <Tab name="Charges">
          <WrappedCharges />
        </Tab>
      </TabList>
    );
  }
}

export default App;
