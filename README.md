# grunt-emberjs-handlebars-sanity

> Sanity tests for Handlebars templates within an EmberJS project.

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-emberjs-handlebars-sanity --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-emberjs-handlebars-sanity');
```

## The "emberjs_handlebars_sanity" task

### Overview
In your project's Gruntfile, add a section named `emberjs_handlebars_sanity` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  emberjs_handlebars_sanity: {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Usage Examples

```js
grunt.initConfig({
  emberjs_handlebars_sanity: {
    test: {}
      src: [
        '<%= yeoman.app %>/templates/{,*/}*.hbs'
      ]
    },
  },
});
```

and then later:

```
    grunt.registerTask('test', [
        'handlebarsSanity:test',
        'clean:server',
        // ...
    ]);

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
