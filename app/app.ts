'use strict';

import * as Chaplin from 'chaplin';
import routes from 'routes';

// The application object
// Choose a meaningful name for your application
class Application extends Chaplin.Application {
}

// TODO: remove `window.app = `
window.app = new Application({
  title: 'Chaplin Example Application',
  routes: routes,
  controllerSuffix: '-controller',
  pushState: false,
});
