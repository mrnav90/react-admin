import {
  Application
} from 'components';

import {
  LoginPage,
  ForgotPasswordPage,
  RestorePasswordPage,
  PageNotFound
} from 'pages';

const routes = [
  {
    component: Application,
    routes: [
      {path: '/', exact: true, component: LoginPage},
      {path: '/forgot-password', exact: true, component: ForgotPasswordPage},
      {path: '/forgot-password/reset', exact: true, component: RestorePasswordPage},
      {path: '*', exact: true, component: PageNotFound}
    ]
  }
];

export default routes;
