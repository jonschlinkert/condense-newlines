/*!
 * condense-newlines <https://github.com/jonschlinkert/condense-newlines>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var compact = require('arrayify-compact');

module.exports = function condense(str, sep) {
  return compact(str.split(/[\r?\n]+/g)).join(sep || '\n');
};