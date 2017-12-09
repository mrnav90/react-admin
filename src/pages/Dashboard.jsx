import React, {Component} from 'react';
import {MasterLayout} from 'components';
import {DashboardContainer} from 'containers';

export default class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MasterLayout>
        <DashboardContainer/>
      </MasterLayout>
    );
  }
}
