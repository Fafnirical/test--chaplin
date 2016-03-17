/// <reference path="../typings/browser" />
/// <reference path="./chaplin" />

'use strict';

require.config({
  baseUrl: 'js',
  paths: {
    backbone: 'vendor/backbone',
    chaplin: 'vendor/chaplin',
    handlebars: 'vendor/handlebars',
    jquery: 'vendor/dist/jquery',
    text: 'vendor/text',
    underscore: 'vendor/underscore',
  },
});

require(['app']);
