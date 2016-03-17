'use strict';

module.exports = (grunt) => {
  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    configPath: require('path').join(process.cwd(), 'grunt-configs'),
  });

  grunt.registerTask('build', ['bower', 'ts:default', 'copy']);
  grunt.registerTask('optimize', ['bower', 'build', 'requirejs:optimize']);

  grunt.registerTask('devel', ['build', 'connect:default', 'watch']);
};
