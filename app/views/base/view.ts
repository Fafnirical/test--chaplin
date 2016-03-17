/// <amd-dependency path="lib/view-helper" />

import * as Chaplin from 'chaplin';
import * as Handlebars from 'handlebars';

export default class View extends Chaplin.View {
  getTemplateFunction() {
    // Template compilation
    // --------------------

    // This demo uses Handlebars templates to render views.
    // The template is loaded with Require.JS and stored as string on
    // the view prototype. On rendering, it is compiled on the
    // client-side. The compiled template function replaces the string
    // on the view prototype.
    //
    // In the end you might want to precompile the templates to JavaScript
    // functions on the server-side and just load the JavaScript code.
    // Several precompilers create a global JST hash which stores the
    // template functions. You can get the function by the template name:
    //
    // templateFunc = JST[@templateName];
    let template = this.template;
    let templateFunction: Function;

    if (typeof template === 'string') {
      // Compile the template string to a function and save it
      // on the prototype. This is a workaround since an instance
      // shouldn't change its prototype normally.

      templateFunction = Handlebars.compile(template);
      this.template = templateFunction;
    } else if (typeof template === 'function') {
      templateFunction = template;
    }

    return templateFunction;
  }
}
