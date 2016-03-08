/*!
 * condense-newlines <https://github.com/jonschlinkert/condense-newlines>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

require('mocha');
var assert = require('assert');
var condense = require('./');

describe('condense', function() {
  it('should condense newlines', function() {
    var actual = condense('\n\na\n\n\nb\nc\r\n\r\nd\n\n\n', {sep: '\n'});
    assert.equal(actual, '\na\nb\nc\nd\n');
  });

  it('should use the specified number of newlines', function() {
    var actual = condense('\n\na\n\n\nb\nc\r\n\r\nd\n\n\n', {sep: '\n\n'});
    assert.equal(actual, '\n\na\n\nb\nc\n\nd\n\n');
  });

  it('should remove lines that are whitespace-only', function() {
    var actual = condense('\n\na\n\n\nb\n           \nc\r\n\r\nd\n\n\n', {sep: '\n\n'});
    assert.equal(actual, '\n\na\n\nb\n\nc\n\nd\n\n');
  });
});