import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {toastr} from 'react-redux-toastr';
import {isAuthenticated} from 'utils';

export default function(WrappedComponent) {
  class MemberZone extends Component {
    constructor(props, context) {
      super(props, context);
    }

    static propTypes = {
      auth: PropTypes.object,
      history: PropTypes.array
    };

    componentWillReceiveProps(nextProps) {
      if (!nextProps.auth || !nextProps.auth.isAuthenticated) {
        this.props.history.push('/');
      }
    }

    render() {
      if (this.props.auth && this.props.auth.isAuthenticated) {
        return <WrappedComponent ref="wrappedComponent" {...this.props}/>;
      }
      const instance = new WrappedComponent();
      if (typeof instance.onUnauthorized === 'function') {
        instance.onUnauthorized().then(() => {
          this.props.history.push('/');
        });
      } else {
        this.props.history.push('/');
      }
      return null;
    }
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth
    };
  };

  return withRouter(connect(mapStateToProps)(MemberZone));
}
