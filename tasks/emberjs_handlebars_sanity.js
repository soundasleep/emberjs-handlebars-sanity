/*
 * grunt-emberjs-handlebars-sanity
 * https://github.com/soundasleep/emberjs-handlebars-sanity
 *
 * Copyright (c) 2014 Jevon Wright
 * Licensed under the GPL-2.0 license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('emberjs_handlebars_sanity', 'Sanity tests for Handlebars templates within an EmberJS project.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      ignoreFailure: false
    });

    var found = 0;
    var errors = 0;

    var errorFile = options.errors;
    var ignoreFailure = options.ignoreFailure;
    var errorLog = "";

    // Iterate over all specified file groups.
    this.files.forEach(function(file) {

      file.src.forEach(function(f) {
        found++;
        grunt.log.writeln("Testing " + f);
        var content = grunt.file.read(f);
        var match;

        // now we can do all of our tests

        // find <div class="small-icon" {{bind-attr class="modeIconClass"}}></div>
        match = match = content.match(/<.+([a-z]+)="([^"]+)".+{{bind-attr \1=.+}}/im);
        if (match) {
            grunt.log.error("Found template with duplicate attribute and attribute binding '" + match[1] + "' in " + f);
            grunt.log.error("This will mean one of the attributes will be silently ignored");
            grunt.log.error("Try using e.g. {{bind-attr " + match[1] + "=\":static dynamic}}");
            grunt.log.error("   " + match[0]);
            errorLog += "Found template with duplicate attribute and attribute binding '" + match[1] + "'";
            errors++;
        }
      });

    });

    // bail if we found a problem
    if (errors > 0) {
      if (errorFile) {
        grunt.file.write(errorFile, errorLog);
        grunt.log.writeln("Writing error file " + errorFile);
      }
      if (!ignoreFailure) {
        return false;
      }
    }
    if (found <= 0) {
      grunt.log.error("Could not find any Handlebars templates to test.");
      return false;
    }

  });

};
