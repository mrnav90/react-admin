import React, {Component} from 'react';
import {CopyRight} from 'components';
import PropTypes from 'prop-types';

class RestorePasswordForm extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="guest-page">
        <div className="ui middle center aligned grid">
          <div className="column">
            <h1 className="ui header">
              <div className="content">Restore Password</div>
            </h1>
            <form className="ui large form">
              <div className="ui segment">
                <div className="field">
                  <div className="ui large left icon input">
                    <i className="lock icon"></i>
                    <input type="password" name="password" placeholder="New password"/>
                  </div>
                </div>
                <div className="field">
                  <div className="ui large left icon input">
                    <i className="lock icon"></i>
                    <input type="password" name="confirm_password" placeholder="Confirm password"/>
                  </div>
                </div>
                <button className="ui fluid large btn-submit submit button">Change password</button>
              </div>
            </form>
            <CopyRight/>
          </div>
        </div>
      </div>
    );
  }
}

export default RestorePasswordForm;
