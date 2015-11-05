"use strict";

import {IntlProvider} from "react-intl";
var ReactDOM = require("react-dom");

var App = require('./src/app.jsx')

const WrappedApp = (props) => {
  return (
    <IntlProvider locale="en">
      <App/>
    </IntlProvider>
  );
}

ReactDOM.render(<WrappedApp/>, document.getElementById('content'))
