/// <amd-dependency path="text!views/templates/hello.hbs" />

import * as _ from 'underscore';
import View from 'views/base/view';

export default class HelloView extends View {
  constructor(options: Object) {
    super(_.extend({
      autoRender: true,
    }, options));
  }
  template = require('text!views/templates/hello.hbs');
}
