import * as React from 'react';
import type { PiletApi } from 'app';
import { MenuItem } from 'lib';
import GoHomeMenuItem from './GoHomeMenuItem';

const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.registerPage('/page', Page);
  app.registerMenu(() => <MenuItem piral={app} />) // <- this one fails when useNavigate is imported
  // app.registerMenu(() => <GoHomeMenuItem piral={app} />) // <- this one works
}
