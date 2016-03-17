'use strict';

module.exports = () => ({
  templates: {
    expand: true,
    cwd: 'app',
    src: 'views/templates/**/*',
    dest: 'public/js',
  },
});
