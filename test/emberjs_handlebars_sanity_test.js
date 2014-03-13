'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.emberjs_handlebars_sanity = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  attributeBindings: function(test) {
    var actual = grunt.file.read('tmp/attribute_bindings.txt');
    var expected = grunt.file.read('test/expected/attribute_bindings.txt');
    test.equal(actual, expected, 'Can find duplicate attribute bindings.');

    test.done();
  },
};
