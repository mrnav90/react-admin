import {
  Application
} from 'components';

import {
  LoginPage,
  ForgotPasswordPage,
  RestorePasswordPage,
  Dashboard,
  PageNotFound
} from 'pages';

const routes = [
  {
    component: Application,
    routes: [
      {path: '/', exact: true, component: LoginPage},
      {path: '/forgot-password', exact: true, component: ForgotPasswordPage},
      {path: '/forgot-password/reset', exact: true, component: RestorePasswordPage},
      {path: '/dashboard', exact: true, component: Dashboard},
      {path: '*', exact: true, component: PageNotFound}
    ]
  }
];

export default routes;
