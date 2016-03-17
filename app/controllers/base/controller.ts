import * as Chaplin from 'chaplin';
import SiteView from 'views/site-view';

export default class Controller extends Chaplin.Controller {
  beforeAction() {
    console.log('controller');
    this.reuse('site', SiteView);
  }
}
