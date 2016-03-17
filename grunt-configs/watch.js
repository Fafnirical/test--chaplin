'use strict';

module.exports = () => ({
  typescript: {
    files: ['app/**/*.ts'],
    tasks: ['ts:default'],
  },
  templates: {
    files: ['app/views/templates/**/*'],
    tasks: ['copy:templates'],
  },
});
