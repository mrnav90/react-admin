import React, {Component} from 'react';
import {LoginForm} from 'components';

export default class LoginPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <LoginForm/>
    );
  }
}
