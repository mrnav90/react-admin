import {
  Application
} from 'components';

import {
  LoginPage
} from 'pages';

const routes = [
  {
    component: Application,
    routes: [
      {path: '/', exact: true, component: LoginPage}
    ]
  }
];

export default routes;
