import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CopyRight} from 'components';
import {Link} from 'react-router-dom';

class LoginForm extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="guest-page">
        <div className="ui middle center aligned grid">
          <div className="column">
            <h1 className="ui header">
              <div className="content">Sign In</div>
            </h1>
            <form className="ui large form">
              <div className="ui segment">
                <div className="field">
                  <div className="ui large left icon input">
                    <i className="at icon"></i>
                    <input type="text" name="email" placeholder="E-mail address"/>
                  </div>
                </div>
                <div className="field">
                  <div className="ui large left icon input">
                    <i className="lock icon"></i>
                    <input type="password" name="password" placeholder="Password"/>
                  </div>
                </div>
                <button className="ui fluid large btn-submit submit button">Sign In</button>
                <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
              </div>
            </form>
            <CopyRight/>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
