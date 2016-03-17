'use strict';

module.exports = () => ({
  options: {
    mainConfigFile: 'public/js/main.js',
    baseUrl: 'public/js',
    out: 'public/all.js',
    name: 'main',
    wrapShim: true,
  },
  default: {
    options: {
      optimize: 'none',
    },
  },
  optimize: {
    options: {
      optimize: 'uglify2',
    },
  },
});
