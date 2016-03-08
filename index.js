/*!
 * condense-newlines <https://github.com/jonschlinkert/condense-newlines>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var isWhitespace = require('is-whitespace');

module.exports = function(str, options) {
  options = options || {};
  var sep = options.sep || '\n\n';
  var min = options.min;
  var re;

  if (typeof min === 'number' && min !== 2) {
    re = new RegExp('(\\r\\n|\\n){' + min + ',}');
  }
  re = options.regex || /(\r\n|\n){2,}/g;

  // if a line is 100% whitespace, remove the whitespace (but not the line, yet)
  if (options.keepWhitespace !== true) {
    str = str.split('\n').map(function(line) {
      if (/^\s+$/.test(line)) {
        return line.trim();
      }
      return line;
    }).join('\n');
  }
  return str.replace(re, sep);
};
