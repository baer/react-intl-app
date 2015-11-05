"use strict";

import React from "react";
import {FormattedMessage} from "react-intl"
import {intlShape, injectIntl} from 'react-intl';

const Login = function (props) {
  const {formatMessage} = props.intl;

  return (
    <form>
      <div>
        <label>
          <FormattedMessage
            id="email-address"
            description="Email Address label for the login form"
            defaultMessage="Email address"
            />
        </label>
        <input type="email" placeholder={formatMessage({
          id: "email-address-placeholder",
          description: "Email Address placeholder for the login form",
          defaultMessage: "Email"
          })}/>
      </div>
      <div>
        <label>
          <FormattedMessage
            id="email-address"
            description="Password label for the login form"
            defaultMessage="Password"
            />
        </label>
        <input type="password" placeholder={formatMessage({
          id: "password-placeholder",
          description: "Password placeholder for the login form",
          defaultMessage: "Password"
          })}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

Login.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Login);
