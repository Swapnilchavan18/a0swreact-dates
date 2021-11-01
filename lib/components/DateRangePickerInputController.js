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
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
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

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("../utils/isInclusivelyAfterDay");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("../utils/toISODateString");

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("../utils/toLocalizedDateString");

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("../utils/toMomentObject");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("../../constants");

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = require("../utils/isInclusivelyBeforeDay");

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports = require("./DateRangePickerInput");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("../defaultPhrases");

/***/ }),

/***/ 57:
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

var _reactMomentProptypes = __webpack_require__(10);

var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

var _airbnbPropTypes = __webpack_require__(1);

var _defaultPhrases = __webpack_require__(5);

var _getPhrasePropTypes = __webpack_require__(7);

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

var _DateRangePickerInput = __webpack_require__(41);

var _DateRangePickerInput2 = _interopRequireDefault(_DateRangePickerInput);

var _toMomentObject = __webpack_require__(22);

var _toMomentObject2 = _interopRequireDefault(_toMomentObject);

var _toLocalizedDateString = __webpack_require__(21);

var _toLocalizedDateString2 = _interopRequireDefault(_toLocalizedDateString);

var _toISODateString = __webpack_require__(20);

var _toISODateString2 = _interopRequireDefault(_toISODateString);

var _isInclusivelyAfterDay = __webpack_require__(11);

var _isInclusivelyAfterDay2 = _interopRequireDefault(_isInclusivelyAfterDay);

var _isInclusivelyBeforeDay = __webpack_require__(32);

var _isInclusivelyBeforeDay2 = _interopRequireDefault(_isInclusivelyBeforeDay);

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
  startDate: _reactMomentProptypes2['default'].momentObj,
  startDateId: _propTypes2['default'].string,
  startDatePlaceholderText: _propTypes2['default'].string,
  isStartDateFocused: _propTypes2['default'].bool,

  endDate: _reactMomentProptypes2['default'].momentObj,
  endDateId: _propTypes2['default'].string,
  endDatePlaceholderText: _propTypes2['default'].string,
  isEndDateFocused: _propTypes2['default'].bool,

  screenReaderMessage: _propTypes2['default'].string,
  showClearDates: _propTypes2['default'].bool,
  showCaret: _propTypes2['default'].bool,
  showDefaultInputIcon: _propTypes2['default'].bool,
  disabled: _propTypes2['default'].bool,
  required: _propTypes2['default'].bool,

  keepOpenOnDateSelect: _propTypes2['default'].bool,
  reopenPickerOnClearDates: _propTypes2['default'].bool,
  withFullScreenPortal: _propTypes2['default'].bool,
  isOutsideRange: _propTypes2['default'].func,
  displayFormat: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].func]),

  onFocusChange: _propTypes2['default'].func,
  onDatesChange: _propTypes2['default'].func,

  customInputIcon: _propTypes2['default'].node,
  customArrowIcon: _propTypes2['default'].node,
  customCloseIcon: _propTypes2['default'].node,

  isFocused: _propTypes2['default'].bool,

  // i18n
  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.DateRangePickerInputPhrases)),
  monthdataloading: _propTypes2['default'].bool,
  withoutborder: _propTypes2['default'].bool,
  inputpad: _propTypes2['default'].string,
  arrowheight: _propTypes2['default'].string
});

var defaultProps = {
  startDate: null,
  startDateId: _constants.START_DATE,
  startDatePlaceholderText: 'Start Date',
  isStartDateFocused: false,

  endDate: null,
  endDateId: _constants.END_DATE,
  endDatePlaceholderText: 'End Date',
  isEndDateFocused: false,

  screenReaderMessage: '',
  showClearDates: false,
  showCaret: false,
  showDefaultInputIcon: false,
  disabled: false,
  required: false,

  withoutborder: false,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  withFullScreenPortal: false,
  isOutsideRange: function () {
    function isOutsideRange(day) {
      return !(0, _isInclusivelyAfterDay2['default'])(day, (0, _moment2['default'])());
    }

    return isOutsideRange;
  }(),
  displayFormat: function () {
    function displayFormat() {
      return _moment2['default'].localeData().longDateFormat('L');
    }

    return displayFormat;
  }(),

  onFocusChange: function () {
    function onFocusChange() {}

    return onFocusChange;
  }(),
  onDatesChange: function () {
    function onDatesChange() {}

    return onDatesChange;
  }(),

  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,

  isFocused: false,
  monthdataloading: false,

  // i18n
  phrases: _defaultPhrases.DateRangePickerInputPhrases
};

var DateRangePickerInputController = function (_React$Component) {
  _inherits(DateRangePickerInputController, _React$Component);

  function DateRangePickerInputController(props) {
    _classCallCheck(this, DateRangePickerInputController);

    var _this = _possibleConstructorReturn(this, (DateRangePickerInputController.__proto__ || Object.getPrototypeOf(DateRangePickerInputController)).call(this, props));

    _this.onClearFocus = _this.onClearFocus.bind(_this);
    _this.onStartDateChange = _this.onStartDateChange.bind(_this);
    _this.onStartDateFocus = _this.onStartDateFocus.bind(_this);
    _this.onEndDateChange = _this.onEndDateChange.bind(_this);
    _this.onEndDateFocus = _this.onEndDateFocus.bind(_this);
    _this.clearDates = _this.clearDates.bind(_this);
    return _this;
  }

  _createClass(DateRangePickerInputController, [{
    key: 'onClearFocus',
    value: function () {
      function onClearFocus() {
        this.props.onFocusChange(null);
      }

      return onClearFocus;
    }()
  }, {
    key: 'onEndDateChange',
    value: function () {
      function onEndDateChange(endDateString) {
        var _props = this.props,
            startDate = _props.startDate,
            isOutsideRange = _props.isOutsideRange,
            keepOpenOnDateSelect = _props.keepOpenOnDateSelect,
            onDatesChange = _props.onDatesChange,
            onFocusChange = _props.onFocusChange;

        var endDate = (0, _toMomentObject2['default'])(endDateString, this.getDisplayFormat());

        var isEndDateValid = endDate && !isOutsideRange(endDate) && !(0, _isInclusivelyBeforeDay2['default'])(endDate, startDate);
        if (isEndDateValid) {
          onDatesChange({ startDate: startDate, endDate: endDate });
          if (!keepOpenOnDateSelect) onFocusChange(null);
        } else {
          onDatesChange({
            startDate: startDate,
            endDate: null
          });
        }
      }

      return onEndDateChange;
    }()
  }, {
    key: 'onEndDateFocus',
    value: function () {
      function onEndDateFocus() {
        var _props2 = this.props,
            startDate = _props2.startDate,
            onFocusChange = _props2.onFocusChange,
            withFullScreenPortal = _props2.withFullScreenPortal,
            disabled = _props2.disabled;

        if (!startDate && withFullScreenPortal && !disabled) {
          // When the datepicker is full screen, we never want to focus the end date first
          // because there's no indication that that is the case once the datepicker is open and it
          // might confuse the user
          onFocusChange(_constants.START_DATE);
        } else if (!disabled) {
          onFocusChange(_constants.END_DATE);
        }
      }

      return onEndDateFocus;
    }()
  }, {
    key: 'onStartDateChange',
    value: function () {
      function onStartDateChange(startDateString) {
        var startDate = (0, _toMomentObject2['default'])(startDateString, this.getDisplayFormat());

        var endDate = this.props.endDate;
        var _props3 = this.props,
            isOutsideRange = _props3.isOutsideRange,
            onDatesChange = _props3.onDatesChange,
            onFocusChange = _props3.onFocusChange;

        var isStartDateValid = startDate && !isOutsideRange(startDate);
        if (isStartDateValid) {
          if ((0, _isInclusivelyBeforeDay2['default'])(endDate, startDate)) {
            endDate = null;
          }

          onDatesChange({ startDate: startDate, endDate: endDate });
          onFocusChange(_constants.END_DATE);
        } else {
          onDatesChange({
            startDate: null,
            endDate: endDate
          });
        }
      }

      return onStartDateChange;
    }()
  }, {
    key: 'onStartDateFocus',
    value: function () {
      function onStartDateFocus() {
        if (!this.props.disabled) {
          this.props.onFocusChange(_constants.START_DATE);
        }
      }

      return onStartDateFocus;
    }()
  }, {
    key: 'getDisplayFormat',
    value: function () {
      function getDisplayFormat() {
        var displayFormat = this.props.displayFormat;

        return typeof displayFormat === 'string' ? displayFormat : displayFormat();
      }

      return getDisplayFormat;
    }()
  }, {
    key: 'getDateString',
    value: function () {
      function getDateString(date) {
        var displayFormat = this.getDisplayFormat();
        if (date && displayFormat) {
          return date && date.format(displayFormat);
        }
        return (0, _toLocalizedDateString2['default'])(date);
      }

      return getDateString;
    }()
  }, {
    key: 'clearDates',
    value: function () {
      function clearDates() {
        var _props4 = this.props,
            onDatesChange = _props4.onDatesChange,
            reopenPickerOnClearDates = _props4.reopenPickerOnClearDates,
            onFocusChange = _props4.onFocusChange;

        onDatesChange({ startDate: null, endDate: null });
        if (reopenPickerOnClearDates) {
          onFocusChange(_constants.START_DATE);
        }
      }

      return clearDates;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props5 = this.props,
            startDate = _props5.startDate,
            startDateId = _props5.startDateId,
            startDatePlaceholderText = _props5.startDatePlaceholderText,
            isStartDateFocused = _props5.isStartDateFocused,
            endDate = _props5.endDate,
            endDateId = _props5.endDateId,
            endDatePlaceholderText = _props5.endDatePlaceholderText,
            isEndDateFocused = _props5.isEndDateFocused,
            screenReaderMessage = _props5.screenReaderMessage,
            showClearDates = _props5.showClearDates,
            showCaret = _props5.showCaret,
            showDefaultInputIcon = _props5.showDefaultInputIcon,
            customInputIcon = _props5.customInputIcon,
            customArrowIcon = _props5.customArrowIcon,
            customCloseIcon = _props5.customCloseIcon,
            disabled = _props5.disabled,
            required = _props5.required,
            isFocused = _props5.isFocused,
            phrases = _props5.phrases,
            monthdataloading = _props5.monthdataloading,
            inputpad = _props5.inputpad,
            arrowheight = _props5.arrowheight,
            withoutborder = _props5.withoutborder;

        var startDateString = this.getDateString(startDate);
        var startDateValue = (0, _toISODateString2['default'])(startDate);
        var endDateString = this.getDateString(endDate);
        var endDateValue = (0, _toISODateString2['default'])(endDate);

        return _react2['default'].createElement(_DateRangePickerInput2['default'], {
          startDate: startDateString,
          startDateValue: startDateValue,
          startDateId: startDateId,
          startDatePlaceholderText: startDatePlaceholderText,
          isStartDateFocused: isStartDateFocused,
          endDate: endDateString,
          endDateValue: endDateValue,
          endDateId: endDateId,
          endDatePlaceholderText: endDatePlaceholderText,
          isEndDateFocused: isEndDateFocused,
          isFocused: isFocused,
          disabled: disabled,
          required: required,
          showCaret: showCaret,
          showDefaultInputIcon: showDefaultInputIcon,
          customInputIcon: customInputIcon,
          customArrowIcon: customArrowIcon,
          customCloseIcon: customCloseIcon,
          phrases: phrases,
          onStartDateChange: this.onStartDateChange,
          onStartDateFocus: this.onStartDateFocus,
          onStartDateShiftTab: this.onClearFocus,
          onEndDateChange: this.onEndDateChange,
          onEndDateFocus: this.onEndDateFocus,
          onEndDateTab: this.onClearFocus,
          showClearDates: showClearDates,
          onClearDates: this.clearDates,
          screenReaderMessage: screenReaderMessage,
          monthdataloading: monthdataloading,
          inputpad: inputpad,
          arrowheight: arrowheight,
          withoutborder: withoutborder
        });
      }

      return render;
    }()
  }]);

  return DateRangePickerInputController;
}(_react2['default'].Component);

exports['default'] = DateRangePickerInputController;

DateRangePickerInputController.propTypes = propTypes;
DateRangePickerInputController.defaultProps = defaultProps;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("../utils/getPhrasePropTypes");

/***/ })

/******/ });