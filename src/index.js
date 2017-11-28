import React from 'react';
import ReactDOM from 'react-dom';
import routes from 'routes';
import {AppRoot} from 'components';
import {store} from 'reducers';
import 'styles/main.scss';

ReactDOM.render((
  <AppRoot store={store} routes={routes}/>
), document.getElementById('app'));
