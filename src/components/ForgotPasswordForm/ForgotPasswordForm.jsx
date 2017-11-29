import React, {Component} from 'react';
import {CopyRight} from 'components';
import PropTypes from 'prop-types';

class ForgotPasswordForm extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="guest-page">
        <div className="ui middle center aligned grid">
          <div className="column">
            <h1 className="ui header">
              <div className="content">Forgot Password</div>
            </h1>
            <form className="ui large form">
              <div className="ui segment">
                <div className="field">
                  <div className="ui large left icon input">
                    <i className="at icon"></i>
                    <input type="text" name="email" placeholder="E-mail address"/>
                  </div>
                </div>
                <button className="ui fluid large btn-submit submit button">Send</button>
              </div>
            </form>
            <CopyRight/>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPasswordForm;
