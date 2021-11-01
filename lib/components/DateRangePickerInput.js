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
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
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

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("./CloseButton");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("./DateInput");

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("./RightArrow");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("../../constants");

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = require("./CalendarIcon");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("../defaultPhrases");

/***/ }),

/***/ 56:
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

var _airbnbPropTypes = __webpack_require__(1);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultPhrases = __webpack_require__(5);

var _getPhrasePropTypes = __webpack_require__(7);

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

var _DateInput = __webpack_require__(23);

var _DateInput2 = _interopRequireDefault(_DateInput);

var _RightArrow = __webpack_require__(25);

var _RightArrow2 = _interopRequireDefault(_RightArrow);

var _CloseButton = __webpack_require__(13);

var _CloseButton2 = _interopRequireDefault(_CloseButton);

var _CalendarIcon = __webpack_require__(36);

var _CalendarIcon2 = _interopRequireDefault(_CalendarIcon);

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
  startDateId: _propTypes2['default'].string,
  startDatePlaceholderText: _propTypes2['default'].string,
  screenReaderMessage: _propTypes2['default'].string,

  endDateId: _propTypes2['default'].string,
  endDatePlaceholderText: _propTypes2['default'].string,

  onStartDateFocus: _propTypes2['default'].func,
  onEndDateFocus: _propTypes2['default'].func,
  onStartDateChange: _propTypes2['default'].func,
  onEndDateChange: _propTypes2['default'].func,
  onStartDateShiftTab: _propTypes2['default'].func,
  onEndDateTab: _propTypes2['default'].func,
  onClearDates: _propTypes2['default'].func,

  startDate: _propTypes2['default'].string,
  startDateValue: _propTypes2['default'].string,
  endDate: _propTypes2['default'].string,
  endDateValue: _propTypes2['default'].string,

  isStartDateFocused: _propTypes2['default'].bool,
  isEndDateFocused: _propTypes2['default'].bool,
  showClearDates: _propTypes2['default'].bool,
  disabled: _propTypes2['default'].bool,
  required: _propTypes2['default'].bool,
  showCaret: _propTypes2['default'].bool,
  withoutborder: _propTypes2['default'].bool,
  showDefaultInputIcon: _propTypes2['default'].bool,
  //customInputIcon: PropTypes.node,
  //customArrowIcon: PropTypes.node,
  //customCloseIcon: PropTypes.node,

  isFocused: _propTypes2['default'].bool, // describes actual DOM focus

  // i18n
  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.DateRangePickerInputPhrases)),
  monthdataloading: _propTypes2['default'].bool,
  inputpad: _propTypes2['default'].string,
  arrowheight: _propTypes2['default'].string
});

var defaultProps = {
  startDateId: _constants.START_DATE,
  endDateId: _constants.END_DATE,
  startDatePlaceholderText: 'Start Date',
  endDatePlaceholderText: 'End Date',
  screenReaderMessage: '',
  onStartDateFocus: function () {
    function onStartDateFocus() {}

    return onStartDateFocus;
  }(),
  onEndDateFocus: function () {
    function onEndDateFocus() {}

    return onEndDateFocus;
  }(),
  onStartDateChange: function () {
    function onStartDateChange() {}

    return onStartDateChange;
  }(),
  onEndDateChange: function () {
    function onEndDateChange() {}

    return onEndDateChange;
  }(),
  onStartDateShiftTab: function () {
    function onStartDateShiftTab() {}

    return onStartDateShiftTab;
  }(),
  onEndDateTab: function () {
    function onEndDateTab() {}

    return onEndDateTab;
  }(),
  onClearDates: function () {
    function onClearDates() {}

    return onClearDates;
  }(),

  startDate: '',
  startDateValue: '',
  endDate: '',
  endDateValue: '',

  isStartDateFocused: false,
  isEndDateFocused: false,
  showClearDates: false,
  disabled: false,
  required: false,
  showCaret: false,
  withoutborder: false,
  showDefaultInputIcon: false,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,

  isFocused: false,

  // i18n
  phrases: _defaultPhrases.DateRangePickerInputPhrases,
  inputpad: '4',
  arrowheight: '0'
};

var DateRangePickerInput = function (_React$Component) {
  _inherits(DateRangePickerInput, _React$Component);

  function DateRangePickerInput(props) {
    _classCallCheck(this, DateRangePickerInput);

    var _this = _possibleConstructorReturn(this, (DateRangePickerInput.__proto__ || Object.getPrototypeOf(DateRangePickerInput)).call(this, props));

    _this.state = {
      isClearDatesHovered: false
    };

    _this.onClearDatesMouseEnter = _this.onClearDatesMouseEnter.bind(_this);
    _this.onClearDatesMouseLeave = _this.onClearDatesMouseLeave.bind(_this);
    return _this;
  }

  _createClass(DateRangePickerInput, [{
    key: 'onClearDatesMouseEnter',
    value: function () {
      function onClearDatesMouseEnter() {
        this.setState({
          isClearDatesHovered: true
        });
      }

      return onClearDatesMouseEnter;
    }()
  }, {
    key: 'onClearDatesMouseLeave',
    value: function () {
      function onClearDatesMouseLeave() {
        this.setState({
          isClearDatesHovered: false
        });
      }

      return onClearDatesMouseLeave;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var isClearDatesHovered = this.state.isClearDatesHovered;
        var _props = this.props,
            startDate = _props.startDate,
            startDateValue = _props.startDateValue,
            startDateId = _props.startDateId,
            startDatePlaceholderText = _props.startDatePlaceholderText,
            screenReaderMessage = _props.screenReaderMessage,
            isStartDateFocused = _props.isStartDateFocused,
            onStartDateChange = _props.onStartDateChange,
            onStartDateFocus = _props.onStartDateFocus,
            onStartDateShiftTab = _props.onStartDateShiftTab,
            endDate = _props.endDate,
            endDateValue = _props.endDateValue,
            endDateId = _props.endDateId,
            endDatePlaceholderText = _props.endDatePlaceholderText,
            isEndDateFocused = _props.isEndDateFocused,
            onEndDateChange = _props.onEndDateChange,
            onEndDateFocus = _props.onEndDateFocus,
            onEndDateTab = _props.onEndDateTab,
            onClearDates = _props.onClearDates,
            showClearDates = _props.showClearDates,
            disabled = _props.disabled,
            withoutborder = _props.withoutborder,
            required = _props.required,
            showCaret = _props.showCaret,
            showDefaultInputIcon = _props.showDefaultInputIcon,
            customInputIcon = _props.customInputIcon,
            customArrowIcon = _props.customArrowIcon,
            customCloseIcon = _props.customCloseIcon,
            isFocused = _props.isFocused,
            phrases = _props.phrases,
            inputpad = _props.inputpad,
            arrowheight = _props.arrowheight;

        var style1arrow = { 'paddingTop': arrowheight + 'px' };
        var inputIcon = _react2['default'].createElement(_CalendarIcon2['default'], null);
        var arrowIcon = _react2['default'].createElement(_RightArrow2['default'], null);
        var closeIcon = _react2['default'].createElement(_CloseButton2['default'], null);
        return _react2['default'].createElement('div', {
          className: (0, _classnames2['default'])('DateRangePickerInput', {
            'DateRangePickerInput--disabled': disabled,
            'withoutborder': withoutborder
          })
        }, (showDefaultInputIcon || customInputIcon !== null) && _react2['default'].createElement('button', {
          type: 'button',
          'aria-label': phrases.focusStartDate,
          className: 'DateRangePickerInput__calendar-icon',
          onClick: onStartDateFocus
        }, inputIcon), _react2['default'].createElement(_DateInput2['default'], {
          id: startDateId,
          placeholder: startDatePlaceholderText,
          displayValue: startDate,
          inputValue: startDateValue,
          screenReaderMessage: screenReaderMessage,
          focused: isStartDateFocused,
          isFocused: isFocused,
          disabled: disabled,
          required: required,
          showCaret: showCaret,

          onChange: onStartDateChange,
          onFocus: onStartDateFocus,
          onKeyDownShiftTab: onStartDateShiftTab,
          inputpad: inputpad,
          datetype: 'start'
        }), _react2['default'].createElement('div', { className: 'DateRangePickerInput__arrow', style: style1arrow }, _react2['default'].createElement(_RightArrow2['default'], null)), _react2['default'].createElement(_DateInput2['default'], {
          id: endDateId,
          placeholder: endDatePlaceholderText,
          displayValue: endDate,
          inputValue: endDateValue,
          screenReaderMessage: screenReaderMessage,
          focused: isEndDateFocused,
          isFocused: isFocused,
          disabled: disabled,
          required: required,
          showCaret: showCaret,
          onChange: onEndDateChange,
          onFocus: onEndDateFocus,
          onKeyDownTab: onEndDateTab,
          inputpad: inputpad,
          datetype: 'end'
        }), showClearDates && _react2['default'].createElement('button', {
          type: 'button',
          className: (0, _classnames2['default'])('DateRangePickerInput__clear-dates', {
            'DateRangePickerInput__clear-dates--hide': !(startDate || endDate),
            'DateRangePickerInput__clear-dates--hover': isClearDatesHovered
          }),
          onMouseEnter: this.onClearDatesMouseEnter,
          onMouseLeave: this.onClearDatesMouseLeave,
          onClick: onClearDates
        }, _react2['default'].createElement('span', { className: 'screen-reader-only' }, phrases.clearDates), _react2['default'].createElement('div', { className: 'DateRangePickerInput__close-icon' }, _react2['default'].createElement(_CloseButton2['default'], null))));
      }

      return render;
    }()
  }]);

  return DateRangePickerInput;
}(_react2['default'].Component);

exports['default'] = DateRangePickerInput;

DateRangePickerInput.propTypes = propTypes;
DateRangePickerInput.defaultProps = defaultProps;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("../utils/getPhrasePropTypes");

/***/ })

/******/ });