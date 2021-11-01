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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
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

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("react-moment-proptypes");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("../../constants");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

exports.getModifiersForDay = getModifiersForDay;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsShallowCompare = __webpack_require__(9);

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _reactMomentProptypes = __webpack_require__(10);

var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

var _airbnbPropTypes = __webpack_require__(1);

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = __webpack_require__(3);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  day: _reactMomentProptypes2['default'].momentObj,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  isOutsideDay: _propTypes2['default'].bool,
  modifiers: _propTypes2['default'].object,
  onDayClick: _propTypes2['default'].func,
  onDayMouseEnter: _propTypes2['default'].func,
  onDayMouseLeave: _propTypes2['default'].func,
  renderDay: _propTypes2['default'].func
});

var defaultProps = {
  day: (0, _moment2['default'])(),
  daySize: _constants.DAY_SIZE,
  isOutsideDay: false,
  modifiers: {},
  onDayClick: function () {
    function onDayClick() {}

    return onDayClick;
  }(),
  onDayMouseEnter: function () {
    function onDayMouseEnter() {}

    return onDayMouseEnter;
  }(),
  onDayMouseLeave: function () {
    function onDayMouseLeave() {}

    return onDayMouseLeave;
  }(),

  renderDay: null
};

function getModifiersForDay(modifiers, day) {
  return day ? Object.keys(modifiers).filter(function (key) {
    return modifiers[key](day);
  }) : [];
}

var CalendarDay = function (_React$Component) {
  _inherits(CalendarDay, _React$Component);

  function CalendarDay() {
    _classCallCheck(this, CalendarDay);

    return _possibleConstructorReturn(this, (CalendarDay.__proto__ || Object.getPrototypeOf(CalendarDay)).apply(this, arguments));
  }

  _createClass(CalendarDay, [{
    key: 'shouldComponentUpdate',
    value: function () {
      function shouldComponentUpdate(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare2['default'])(this, nextProps, nextState);
      }

      return shouldComponentUpdate;
    }()
  }, {
    key: 'onDayClick',
    value: function () {
      function onDayClick(day, e) {
        var onDayClick = this.props.onDayClick;

        onDayClick(day, e);
      }

      return onDayClick;
    }()
  }, {
    key: 'onDayMouseEnter',
    value: function () {
      function onDayMouseEnter(day, e) {
        var onDayMouseEnter = this.props.onDayMouseEnter;

        onDayMouseEnter(day, e);
      }

      return onDayMouseEnter;
    }()
  }, {
    key: 'onDayMouseLeave',
    value: function () {
      function onDayMouseLeave(day, e) {
        var onDayMouseLeave = this.props.onDayMouseLeave;

        onDayMouseLeave(day, e);
      }

      return onDayMouseLeave;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _this2 = this;

        var _props = this.props,
            day = _props.day,
            daySize = _props.daySize,
            isOutsideDay = _props.isOutsideDay,
            modifiers = _props.modifiers,
            renderDay = _props.renderDay;

        var className = (0, _classnames2['default'])('CalendarDay', {
          'CalendarDay--outside': !day || isOutsideDay
        }, getModifiersForDay(modifiers, day).map(function (mod) {
          return 'CalendarDay--' + String(mod);
        }));

        var daySizeStyles = {
          width: daySize,
          height: daySize - 1,
          'lineHeight': daySize - 5 + "px"
        };

        return day ? _react2['default'].createElement('td', {
          className: className,
          style: daySizeStyles,
          onMouseEnter: function () {
            function onMouseEnter(e) {
              return _this2.onDayMouseEnter(day, e);
            }

            return onMouseEnter;
          }(),
          onMouseLeave: function () {
            function onMouseLeave(e) {
              return _this2.onDayMouseLeave(day, e);
            }

            return onMouseLeave;
          }(),
          onClick: function () {
            function onClick(e) {
              return _this2.onDayClick(day, e);
            }

            return onClick;
          }()
        }, renderDay ? renderDay(day) : day.format('D')) : _react2['default'].createElement('td', null);
      }

      return render;
    }()
  }]);

  return CalendarDay;
}(_react2['default'].Component);

exports['default'] = CalendarDay;

CalendarDay.propTypes = propTypes;
CalendarDay.defaultProps = defaultProps;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("react-addons-shallow-compare");

/***/ })

/******/ });