/*
 * grunt-emberjs-handlebars-sanity
 * https://github.com/soundasleep/emberjs-handlebars-sanity
 *
 * Copyright (c) 2014 Jevon Wright
 * Licensed under the GPL-2.0 license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    emberjs_handlebars_sanity: {
      // default options: we don't want to crash right now, we want to test later
      options: {
        ignoreFailure: true
      },

      // now we can list all the tests
      attribute_bindings: {
        src: ['test/fixtures/attribute_bindings.hbs'],
        options: {
          errors: 'tmp/attribute_bindings.txt'
        }
      },

      html_comment_binding: {
        src: ['test/fixtures/html_comment_binding.hbs'],
        options: {
          errors: 'tmp/html_comment_binding.txt'
        }
      },

      normal_comment_binding: {
        src: ['test/fixtures/normal_comment_binding.hbs'],
        options: {
          errors: 'tmp/normal_comment_binding.txt'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'emberjs_handlebars_sanity', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
