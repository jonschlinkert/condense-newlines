/*!
 * condense-newlines <https://github.com/jonschlinkert/condense-newlines>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var condense = require('../');

describe('condense', function () {
  it('should condense newlines', function () {
    var actual = condense('\n\na\n\n\nb\nc\r\n\r\nd\n\n\n');
    assert.equal(actual, 'a\nb\nc\nd');
  });

  it('should use the specified number of newlines', function () {
    var actual = condense('\n\na\n\n\nb\nc\r\n\r\nd\n\n\n', '\n\n');
    assert.equal(actual, 'a\n\nb\n\nc\n\nd');
  });
});