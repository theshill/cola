// dependencies
const gulp = require('gulp');

// variables
let _default;

// tasks
_default = (cb) => {
  console.log('hello gulp');
  cb();
}

// namespace
exports.default = _default;
