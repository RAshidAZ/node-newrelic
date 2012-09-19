'use strict';

var path   = require('path')
  , logger = require(path.join(__dirname, '..', '..', '..', 'lib', 'logger'))
  ;

/**
 * This is a c9/architect configuration file.
 */
module.exports = [
  {packagePath : path.join(__dirname, '..', '..', 'integration', 'benchmarkr', 'services', 'mysqld'),
   dbpath      : path.join(__dirname, '..', '..', 'integration', 'test-mysql'),
   logger      : logger}
];
