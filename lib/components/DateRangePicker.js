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
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("airbnb-prop-types");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("../../constants");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("../defaultPhrases");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-addons-shallow-compare");

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("../utils/isInclusivelyAfterDay");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("../utils/isTouchDevice");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("./CloseButton");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("consolidated-events");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("./OutsideClickHandler");

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

module.exports = require("../utils/getResponsiveContainerStyles");

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-portal");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("../shapes/DateRangePickerShape");

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports) {

module.exports = require("./DateRangePickerInputController");

/***/ }),
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

module.exports = require("./DayPickerRangeController");

/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
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

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsShallowCompare = __webpack_require__(9);

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPortal = __webpack_require__(27);

var _reactPortal2 = _interopRequireDefault(_reactPortal);

var _airbnbPropTypes = __webpack_require__(1);

var _consolidatedEvents = __webpack_require__(14);

var _defaultPhrases = __webpack_require__(5);

var _OutsideClickHandler = __webpack_require__(15);

var _OutsideClickHandler2 = _interopRequireDefault(_OutsideClickHandler);

var _getResponsiveContainerStyles = __webpack_require__(17);

var _getResponsiveContainerStyles2 = _interopRequireDefault(_getResponsiveContainerStyles);

var _isTouchDevice = __webpack_require__(12);

var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

var _isInclusivelyAfterDay = __webpack_require__(11);

var _isInclusivelyAfterDay2 = _interopRequireDefault(_isInclusivelyAfterDay);

var _DateRangePickerInputController = __webpack_require__(42);

var _DateRangePickerInputController2 = _interopRequireDefault(_DateRangePickerInputController);

var _DayPickerRangeController = __webpack_require__(44);

var _DayPickerRangeController2 = _interopRequireDefault(_DayPickerRangeController);

var _CloseButton = __webpack_require__(13);

var _CloseButton2 = _interopRequireDefault(_CloseButton);

var _DateRangePickerShape = __webpack_require__(28);

var _DateRangePickerShape2 = _interopRequireDefault(_DateRangePickerShape);

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

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)(_DateRangePickerShape2['default']);

var defaultProps = {
  // required props for a functional interactive DateRangePicker
  startDate: null,
  endDate: null,
  focusedInput: null,

  // input related props
  startDateId: _constants.START_DATE,
  startDatePlaceholderText: 'Start Date',
  endDateId: _constants.END_DATE,
  endDatePlaceholderText: 'End Date',
  disabled: false,
  required: false,
  screenReaderInputMessage: '',
  showClearDates: false,
  showDefaultInputIcon: false,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,

  // calendar presentation and interaction related props
  orientation: _constants.HORIZONTAL_ORIENTATION,
  anchorDirection: _constants.ANCHOR_LEFT,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 1,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  renderCalendarInfo: null,
  daySize: _constants.DAY_SIZE,

  // navigation related props
  navPrev: null,
  navNext: null,

  onPrevMonthClick: function () {
    function onPrevMonthClick() {}

    return onPrevMonthClick;
  }(),
  onNextMonthClick: function () {
    function onNextMonthClick() {}

    return onNextMonthClick;
  }(),

  // day presentation and interaction related props
  renderDay: null,
  minimumNights: 1,
  enableOutsideDays: false,
  isDayBlocked: function () {
    function isDayBlocked() {
      return false;
    }

    return isDayBlocked;
  }(),
  isOutsideRange: function () {
    function isOutsideRange(day) {
      return !(0, _isInclusivelyAfterDay2['default'])(day, (0, _moment2['default'])());
    }

    return isOutsideRange;
  }(),
  isDayHighlighted: function () {
    function isDayHighlighted() {
      return false;
    }

    return isDayHighlighted;
  }(),

  // internationalization
  displayFormat: function () {
    function displayFormat() {
      return _moment2['default'].localeData().longDateFormat('L');
    }

    return displayFormat;
  }(),
  monthFormat: 'MMMM YYYY',
  phrases: _defaultPhrases.DateRangePickerPhrases,
  monthdataloading: false,
  withoutborder: false,
  inputpad: '4',
  arrowheight: '0'
};

var DateRangePicker = function (_React$Component) {
  _inherits(DateRangePicker, _React$Component);

  function DateRangePicker(props) {
    _classCallCheck(this, DateRangePicker);

    var _this = _possibleConstructorReturn(this, (DateRangePicker.__proto__ || Object.getPrototypeOf(DateRangePicker)).call(this, props));

    _this.state = {
      dayPickerContainerStyles: {},
      isDateRangePickerInputFocused: false,
      isDayPickerFocused: false
    };

    _this.isTouchDevice = false;

    _this.onOutsideClick = _this.onOutsideClick.bind(_this);
    _this.onDateRangePickerInputFocus = _this.onDateRangePickerInputFocus.bind(_this);
    _this.onDayPickerFocus = _this.onDayPickerFocus.bind(_this);
    _this.onDayPickerBlur = _this.onDayPickerBlur.bind(_this);

    _this.responsivizePickerPosition = _this.responsivizePickerPosition.bind(_this);
    return _this;
  }

  _createClass(DateRangePicker, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        this.resizeHandle = (0, _consolidatedEvents.addEventListener)(window, 'resize', this.responsivizePickerPosition, { passive: true });
        this.responsivizePickerPosition();

        if (this.props.focusedInput) {
          this.setState({
            isDateRangePickerInputFocused: true
          });
        }

        this.isTouchDevice = (0, _isTouchDevice2['default'])();
      }

      return componentDidMount;
    }()
  }, {
    key: 'shouldComponentUpdate',
    value: function () {
      function shouldComponentUpdate(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare2['default'])(this, nextProps, nextState);
      }

      return shouldComponentUpdate;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate(prevProps) {
        if (!prevProps.focusedInput && this.props.focusedInput && this.isOpened()) {
          // The date picker just changed from being closed to being open.
          this.responsivizePickerPosition();
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'componentWillUnmount',
    value: function () {
      function componentWillUnmount() {
        (0, _consolidatedEvents.removeEventListener)(this.resizeHandle);
      }

      return componentWillUnmount;
    }()
  }, {
    key: 'onOutsideClick',
    value: function () {
      function onOutsideClick() {
        var onFocusChange = this.props.onFocusChange;

        if (!this.isOpened()) return;

        this.setState({
          isDateRangePickerInputFocused: false,
          isDayPickerFocused: false
        });

        onFocusChange(null);
      }

      return onOutsideClick;
    }()
  }, {
    key: 'onDateRangePickerInputFocus',
    value: function () {
      function onDateRangePickerInputFocus(focusedInput) {
        var _props = this.props,
            onFocusChange = _props.onFocusChange,
            withPortal = _props.withPortal,
            withFullScreenPortal = _props.withFullScreenPortal;

        if (focusedInput) {
          var moveFocusToDayPicker = withPortal || withFullScreenPortal || this.isTouchDevice;
          if (moveFocusToDayPicker) {
            this.onDayPickerFocus();
          } else {
            this.onDayPickerBlur();
          }
        }

        onFocusChange(focusedInput);
      }

      return onDateRangePickerInputFocus;
    }()
  }, {
    key: 'onDayPickerFocus',
    value: function () {
      function onDayPickerFocus() {
        this.setState({
          isDateRangePickerInputFocused: false,
          isDayPickerFocused: true
        });
      }

      return onDayPickerFocus;
    }()
  }, {
    key: 'onDayPickerBlur',
    value: function () {
      function onDayPickerBlur() {
        this.setState({
          isDateRangePickerInputFocused: true,
          isDayPickerFocused: false
        });
      }

      return onDayPickerBlur;
    }()
  }, {
    key: 'getDayPickerContainerClasses',
    value: function () {
      function getDayPickerContainerClasses() {
        var _props2 = this.props,
            orientation = _props2.orientation,
            withPortal = _props2.withPortal,
            withFullScreenPortal = _props2.withFullScreenPortal,
            anchorDirection = _props2.anchorDirection;

        var dayPickerClassName = (0, _classnames2['default'])('DateRangePicker__picker', {
          'DateRangePicker__picker--direction-left': anchorDirection === _constants.ANCHOR_LEFT,
          'DateRangePicker__picker--direction-right': anchorDirection === _constants.ANCHOR_RIGHT,
          'DateRangePicker__picker--horizontal': orientation === _constants.HORIZONTAL_ORIENTATION,
          'DateRangePicker__picker--vertical': orientation === _constants.VERTICAL_ORIENTATION,
          'DateRangePicker__picker--portal': withPortal || withFullScreenPortal,
          'DateRangePicker__picker--full-screen-portal': withFullScreenPortal
        });

        return dayPickerClassName;
      }

      return getDayPickerContainerClasses;
    }()
  }, {
    key: 'getDayPickerDOMNode',
    value: function () {
      function getDayPickerDOMNode() {
        return _reactDom2['default'].findDOMNode(this.dayPicker); // eslint-disable-line react/no-find-dom-node
      }

      return getDayPickerDOMNode;
    }()
  }, {
    key: 'isOpened',
    value: function () {
      function isOpened() {
        var focusedInput = this.props.focusedInput;

        return focusedInput === _constants.START_DATE || focusedInput === _constants.END_DATE;
      }

      return isOpened;
    }()
  }, {
    key: 'responsivizePickerPosition',
    value: function () {
      function responsivizePickerPosition() {
        if (!this.isOpened()) {
          return;
        }

        var _props3 = this.props,
            anchorDirection = _props3.anchorDirection,
            horizontalMargin = _props3.horizontalMargin,
            withPortal = _props3.withPortal,
            withFullScreenPortal = _props3.withFullScreenPortal;
        var dayPickerContainerStyles = this.state.dayPickerContainerStyles;

        var isAnchoredLeft = anchorDirection === _constants.ANCHOR_LEFT;
        if (!withPortal && !withFullScreenPortal) {
          var containerRect = this.dayPickerContainer.getBoundingClientRect();
          var currentOffset = dayPickerContainerStyles[anchorDirection] || 0;
          var containerEdge = isAnchoredLeft ? containerRect[_constants.ANCHOR_RIGHT] : containerRect[_constants.ANCHOR_LEFT];

          this.setState({
            dayPickerContainerStyles: (0, _getResponsiveContainerStyles2['default'])(anchorDirection, currentOffset, containerEdge, horizontalMargin)
          });
        }
      }

      return responsivizePickerPosition;
    }()
  }, {
    key: 'maybeRenderDayPickerWithPortal',
    value: function () {
      function maybeRenderDayPickerWithPortal() {
        var _props4 = this.props,
            withPortal = _props4.withPortal,
            withFullScreenPortal = _props4.withFullScreenPortal;

        if (!this.isOpened()) {
          return null;
        }

        if (withPortal || withFullScreenPortal) {
          return _react2['default'].createElement(_reactPortal2['default'], { isOpened: true }, this.renderDayPicker());
        }

        return this.renderDayPicker();
      }

      return maybeRenderDayPickerWithPortal;
    }()
  }, {
    key: 'renderDayPicker',
    value: function () {
      function renderDayPicker() {
        var _this2 = this;

        var _props5 = this.props,
            isDayBlocked = _props5.isDayBlocked,
            isDayHighlighted = _props5.isDayHighlighted,
            isOutsideRange = _props5.isOutsideRange,
            numberOfMonths = _props5.numberOfMonths,
            orientation = _props5.orientation,
            monthFormat = _props5.monthFormat,
            navPrev = _props5.navPrev,
            navNext = _props5.navNext,
            onPrevMonthClick = _props5.onPrevMonthClick,
            onNextMonthClick = _props5.onNextMonthClick,
            onDatesChange = _props5.onDatesChange,
            onFocusChange = _props5.onFocusChange,
            withPortal = _props5.withPortal,
            withFullScreenPortal = _props5.withFullScreenPortal,
            daySize = _props5.daySize,
            enableOutsideDays = _props5.enableOutsideDays,
            focusedInput = _props5.focusedInput,
            startDate = _props5.startDate,
            endDate = _props5.endDate,
            minimumNights = _props5.minimumNights,
            keepOpenOnDateSelect = _props5.keepOpenOnDateSelect,
            renderDay = _props5.renderDay,
            renderCalendarInfo = _props5.renderCalendarInfo,
            initialVisibleMonth = _props5.initialVisibleMonth,
            customCloseIcon = _props5.customCloseIcon,
            monthdataloading = _props5.monthdataloading,
            loadmore_btn = _props5.loadmore_btn,
            loadmore_months = _props5.loadmore_months,
            show_flexible_dates = _props5.show_flexible_dates,
            trip_duration_flex = _props5.trip_duration_flex,
            set_trip_duration_flex = _props5.set_trip_duration_flex,
            set_is_flex_shown = _props5.set_is_flex_shown,
            is_flex_shown = _props5.is_flex_shown,
            all_months = _props5.all_months,
            selected_months = _props5.selected_months,
            set_selected_months = _props5.set_selected_months,
            search_results = _props5.search_results,
            show_search_btn = _props5.show_search_btn,
            sel_mon1 = _props5.sel_mon1,
            sel_mon2 = _props5.sel_mon2,
            sel_mon3 = _props5.sel_mon3,
            sel_mon4 = _props5.sel_mon4,
            sel_mon5 = _props5.sel_mon5,
            sel_mon6 = _props5.sel_mon6,
            show_inline_headers = _props5.show_inline_headers;
        var _state = this.state,
            dayPickerContainerStyles = _state.dayPickerContainerStyles,
            isDayPickerFocused = _state.isDayPickerFocused;

        var onOutsideClick = !withFullScreenPortal && withPortal ? this.onOutsideClick : undefined;
        var initialVisibleMonthThunk = initialVisibleMonth || function () {
          return startDate || endDate || (0, _moment2['default'])();
        };

        var closeIcon = customCloseIcon || _react2['default'].createElement(_CloseButton2['default'], null);
        return _react2['default'].createElement('div', {
          ref: function () {
            function ref(_ref2) {
              _this2.dayPickerContainer = _ref2;
            }

            return ref;
          }(),
          className: this.getDayPickerContainerClasses(),
          style: dayPickerContainerStyles
        }, _react2['default'].createElement(_DayPickerRangeController2['default'], {
          ref: function () {
            function ref(_ref) {
              _this2.dayPicker = _ref;
            }

            return ref;
          }(),
          orientation: orientation,
          enableOutsideDays: enableOutsideDays,
          numberOfMonths: numberOfMonths,
          onPrevMonthClick: onPrevMonthClick,
          onNextMonthClick: onNextMonthClick,
          onDatesChange: onDatesChange,
          onFocusChange: onFocusChange,
          focusedInput: focusedInput,
          startDate: startDate,
          endDate: endDate,
          monthFormat: monthFormat,
          withPortal: withPortal || withFullScreenPortal,
          daySize: daySize,
          initialVisibleMonth: initialVisibleMonthThunk,
          onOutsideClick: onOutsideClick,
          navPrev: navPrev,
          navNext: navNext,
          minimumNights: minimumNights,
          isOutsideRange: isOutsideRange,
          isDayHighlighted: isDayHighlighted,
          isDayBlocked: isDayBlocked,
          keepOpenOnDateSelect: keepOpenOnDateSelect,
          renderDay: renderDay,
          renderCalendarInfo: renderCalendarInfo,
          isFocused: isDayPickerFocused,
          onBlur: this.onDayPickerBlur,
          monthdataloading: monthdataloading,
          loadmore_btn: loadmore_btn,
          loadmore_months: loadmore_months,
          show_flexible_dates: show_flexible_dates,
          trip_duration_flex: trip_duration_flex,
          set_trip_duration_flex: set_trip_duration_flex,
          set_is_flex_shown: set_is_flex_shown,
          is_flex_shown: is_flex_shown,
          all_months: all_months,
          selected_months: selected_months,
          set_selected_months: set_selected_months,
          search_results: search_results,
          show_search_btn: show_search_btn,
          sel_mon1: sel_mon1,
          sel_mon2: sel_mon2,
          sel_mon3: sel_mon3,
          sel_mon4: sel_mon4,
          sel_mon5: sel_mon5,
          sel_mon6: sel_mon6,
          show_inline_headers: show_inline_headers
        }), withFullScreenPortal && _react2['default'].createElement('button', {
          className: 'DateRangePicker__close',
          type: 'button',
          onClick: this.onOutsideClick
        }, _react2['default'].createElement('span', { className: 'screen-reader-only' }, this.props.phrases.closeDatePicker), _react2['default'].createElement('div', { className: 'DateRangePicker__close' }, closeIcon)));
      }

      return renderDayPicker;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props6 = this.props,
            startDate = _props6.startDate,
            startDateId = _props6.startDateId,
            startDatePlaceholderText = _props6.startDatePlaceholderText,
            endDate = _props6.endDate,
            endDateId = _props6.endDateId,
            endDatePlaceholderText = _props6.endDatePlaceholderText,
            focusedInput = _props6.focusedInput,
            screenReaderInputMessage = _props6.screenReaderInputMessage,
            showClearDates = _props6.showClearDates,
            showDefaultInputIcon = _props6.showDefaultInputIcon,
            customInputIcon = _props6.customInputIcon,
            customArrowIcon = _props6.customArrowIcon,
            customCloseIcon = _props6.customCloseIcon,
            disabled = _props6.disabled,
            required = _props6.required,
            phrases = _props6.phrases,
            isOutsideRange = _props6.isOutsideRange,
            withPortal = _props6.withPortal,
            withFullScreenPortal = _props6.withFullScreenPortal,
            displayFormat = _props6.displayFormat,
            reopenPickerOnClearDates = _props6.reopenPickerOnClearDates,
            keepOpenOnDateSelect = _props6.keepOpenOnDateSelect,
            onDatesChange = _props6.onDatesChange,
            monthdataloading = _props6.monthdataloading,
            inputpad = _props6.inputpad,
            arrowheight = _props6.arrowheight,
            withoutborder = _props6.withoutborder,
            loadmore_btn = _props6.loadmore_btn,
            loadmore_months = _props6.loadmore_months;
        var isDateRangePickerInputFocused = this.state.isDateRangePickerInputFocused;

        var onOutsideClick = !withPortal && !withFullScreenPortal ? this.onOutsideClick : undefined;
        //console.log('loadmore_btn' + loadmore_btn + ' ' + loadmore_months);
        return _react2['default'].createElement('div', { className: 'DateRangePicker' }, _react2['default'].createElement(_OutsideClickHandler2['default'], { onOutsideClick: onOutsideClick }, _react2['default'].createElement(_DateRangePickerInputController2['default'], {
          startDate: startDate,
          startDateId: startDateId,
          startDatePlaceholderText: startDatePlaceholderText,
          isStartDateFocused: focusedInput === _constants.START_DATE,
          endDate: endDate,
          endDateId: endDateId,
          endDatePlaceholderText: endDatePlaceholderText,
          isEndDateFocused: focusedInput === _constants.END_DATE,
          displayFormat: displayFormat,
          showClearDates: showClearDates,
          showCaret: !withPortal && !withFullScreenPortal,
          showDefaultInputIcon: showDefaultInputIcon,
          customInputIcon: customInputIcon,
          customArrowIcon: customArrowIcon,
          customCloseIcon: customCloseIcon,
          disabled: disabled,
          required: required,
          reopenPickerOnClearDates: reopenPickerOnClearDates,
          keepOpenOnDateSelect: keepOpenOnDateSelect,
          isOutsideRange: isOutsideRange,
          withFullScreenPortal: withFullScreenPortal,
          onDatesChange: onDatesChange,
          onFocusChange: this.onDateRangePickerInputFocus,
          phrases: phrases,
          screenReaderMessage: screenReaderInputMessage,
          isFocused: isDateRangePickerInputFocused,
          inputpad: inputpad,
          arrowheight: arrowheight,
          withoutborder: withoutborder,
          loadmore_btn: loadmore_btn,
          loadmore_months: loadmore_months
        }), this.maybeRenderDayPickerWithPortal()));
      }

      return render;
    }()
  }]);

  return DateRangePicker;
}(_react2['default'].Component);

exports['default'] = DateRangePicker;

DateRangePicker.propTypes = propTypes;
DateRangePicker.defaultProps = defaultProps;

/***/ })
/******/ ]);