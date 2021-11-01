module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("airbnb-prop-types");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("./RightArrow");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("../../constants");

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = require("./ChevronDown");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = require("./ChevronUp");

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = require("./LeftArrow");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("../defaultPhrases");

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = DayPickerNavigation;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = __webpack_require__(1);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultPhrases = __webpack_require__(5);

var _getPhrasePropTypes = __webpack_require__(7);

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

var _LeftArrow = __webpack_require__(45);

var _LeftArrow2 = _interopRequireDefault(_LeftArrow);

var _RightArrow = __webpack_require__(25);

var _RightArrow2 = _interopRequireDefault(_RightArrow);

var _ChevronUp = __webpack_require__(40);

var _ChevronUp2 = _interopRequireDefault(_ChevronUp);

var _ChevronDown = __webpack_require__(39);

var _ChevronDown2 = _interopRequireDefault(_ChevronDown);

var _ScrollableOrientationShape = __webpack_require__(8);

var _ScrollableOrientationShape2 = _interopRequireDefault(_ScrollableOrientationShape);

var _constants = __webpack_require__(3);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  navPrev: _propTypes2['default'].node,
  navNext: _propTypes2['default'].node,
  orientation: _ScrollableOrientationShape2['default'],

  onPrevMonthClick: _propTypes2['default'].func,
  onNextMonthClick: _propTypes2['default'].func,

  // internationalization
  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.DayPickerNavigationPhrases))
});

var defaultProps = {
  navPrev: null,
  navNext: null,
  orientation: _constants.HORIZONTAL_ORIENTATION,

  onPrevMonthClick: function () {
    function onPrevMonthClick() {}

    return onPrevMonthClick;
  }(),
  onNextMonthClick: function () {
    function onNextMonthClick() {}

    return onNextMonthClick;
  }(),

  // internationalization
  phrases: _defaultPhrases.DayPickerNavigationPhrases,
  monthdataloading: false
};

function DayPickerNavigation(props) {
  var navPrev = props.navPrev,
      navNext = props.navNext,
      onPrevMonthClick = props.onPrevMonthClick,
      onNextMonthClick = props.onNextMonthClick,
      orientation = props.orientation,
      phrases = props.phrases,
      monthdataloading = props.monthdataloading,
      loadmore_btn = props.loadmore_btn,
      startDate = props.startDate,
      endDate = props.endDate,
      show_flexible_dates = props.show_flexible_dates,
      trip_duration_flex = props.trip_duration_flex,
      set_trip_duration_flex = props.set_trip_duration_flex;

  var isVertical = orientation !== _constants.HORIZONTAL_ORIENTATION;
  var isVerticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;

  var navPrevIcon = navPrev;
  var navNextIcon = navNext;
  var isDefaultNavPrev = false;
  var isDefaultNavNext = false;
  if (!navPrevIcon) {
    isDefaultNavPrev = true;
    navPrevIcon = isVertical ? _react2['default'].createElement(_ChevronUp2['default'], null) : _react2['default'].createElement(_LeftArrow2['default'], null);
  }
  if (!navNextIcon) {
    isDefaultNavNext = true;
    navNextIcon = isVertical ? _react2['default'].createElement(_ChevronDown2['default'], null) : _react2['default'].createElement(_RightArrow2['default'], null);
  }
  //console.log('loadmore_btn'+loadmore_btn);
  var navClassNames = (0, _classnames2['default'])('DayPickerNavigation', {
    'DayPickerNavigation--horizontal': !isVertical,
    'DayPickerNavigation--vertical': isVertical,
    'DayPickerNavigation--vertical-scrollable': isVerticalScrollable
  });
  var prevClassNames = (0, _classnames2['default'])('DayPickerNavigation__prev', {
    'DayPickerNavigation__prev--default': isDefaultNavPrev
  });
  var nextClassNames = (0, _classnames2['default'])('DayPickerNavigation__next', {
    'DayPickerNavigation__next--default': isDefaultNavNext
  });
  if (monthdataloading == true) {
    return _react2['default'].createElement('div', null);
  } else {
    return _react2['default'].createElement('div', { className: navClassNames }, loadmore_btn != true && !isVerticalScrollable && _react2['default'].createElement('span', {
      'aria-label': phrases.jumpToPrevMonth,
      className: prevClassNames,
      onClick: onPrevMonthClick
    }, navPrevIcon), loadmore_btn != true && _react2['default'].createElement('span', {
      'aria-label': phrases.jumpToNextMonth,
      className: nextClassNames,
      onClick: onNextMonthClick
    }, navNextIcon), loadmore_btn == true && show_flexible_dates == true && startDate != null && endDate != null ? _react2['default'].createElement('div', { style: { "marginTop": "8px" }, className: 'col-md-12 text-center' }, _react2['default'].createElement('button', { onClick: set_trip_duration_flex.bind(this, 1), className: trip_duration_flex == 1 ? "btn btn-default btn-n5 active" : "btn btn-default btn-n5", style: { 'marginRight': '10px' } }, '\xB1 1 day'), _react2['default'].createElement('button', { onClick: set_trip_duration_flex.bind(this, 3), className: trip_duration_flex == 3 ? "btn btn-default btn-n5 active" : "btn btn-default btn-n5", style: { 'marginRight': '10px' } }, '\xB1 3 days'), _react2['default'].createElement('button', { onClick: set_trip_duration_flex.bind(this, 7), className: trip_duration_flex == 7 ? "btn btn-default btn-n5 active" : "btn btn-default btn-n5" }, '\xB1 7 days')) : _react2['default'].createElement('span', null, loadmore_btn == true && _react2['default'].createElement('span', {
      'aria-label': phrases.jumpToNextMonth,
      className: nextClassNames,
      onClick: onNextMonthClick
    }, 'Load more dates')));
  }
}

DayPickerNavigation.propTypes = propTypes;
DayPickerNavigation.defaultProps = defaultProps;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("../utils/getPhrasePropTypes");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("../shapes/ScrollableOrientationShape");

/***/ })

/******/ });