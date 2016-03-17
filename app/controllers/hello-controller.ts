import Controller from 'controllers/base/controller';
import HelloModel from 'models/hello-model';
import HelloView from 'views/hello-view';
import SiteView from 'views/site-view';

class HelloController extends Controller {
  beforeAction() {
    console.log('stupid-controller');
    this.reuse('site', SiteView);
  }
  show() {
    this.model = new HelloModel();
    this.view = new HelloView({
      model: this.model,
      region: 'main',
    });
    console.log('hello-controller');
  }
}

export = HelloController;
