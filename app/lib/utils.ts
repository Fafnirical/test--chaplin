import * as Chaplin from 'chaplin';

// Application-specific utilities
// ------------------------------

// Delegate to Chaplin’s utils module
let utils = Chaplin.utils.beget(Chaplin.utils);

// Add additional application-specific properties and methods

// _(utils).extend({
//   someProperty: 'foo',
//   someMethod: function() {}
// });

export default utils;
