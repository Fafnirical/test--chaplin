/// <amd-dependency path="text!views/templates/site.hbs" />

import View from 'views/base/view';

export default class SiteView extends View {
  constructor(options: Object) {
    super(_.extend({
      container: 'body',
      id: 'site-container',
      regions: {
        main: '#main-container',
      },
    }, options));
    console.log('site-view');
  }
  template = require('text!views/templates/site.hbs');
}
