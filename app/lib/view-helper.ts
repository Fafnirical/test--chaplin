import * as Handlebars from 'handlebars';
import utils from 'lib/utils';

Handlebars.registerHelper('url', function(routeName: String) {
  var params = [].slice.call(arguments, 1);
  var options = params.pop();
  return utils.reverse(routeName, params);
});
