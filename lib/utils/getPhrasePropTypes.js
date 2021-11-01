'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = getPhrasePropTypes;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getPhrasePropTypes(defaultPhrases) {
  return Object.keys(defaultPhrases).reduce(function (phrases, key) {
    return Object.assign({}, phrases, _defineProperty({}, key, _propTypes2['default'].node));
  }, {});
}