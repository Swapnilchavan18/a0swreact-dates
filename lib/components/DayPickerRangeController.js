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
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
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

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("../utils/isTouchDevice");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("../utils/isSameDay");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("./DayPicker");

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = require("../shapes/FocusedInputShape");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("../../constants");

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = require("../utils/isNextDay");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("../defaultPhrases");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ 60:
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

var _reactMomentProptypes = __webpack_require__(10);

var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

var _airbnbPropTypes = __webpack_require__(1);

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

var _defaultPhrases = __webpack_require__(5);

var _getPhrasePropTypes = __webpack_require__(7);

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

var _isTouchDevice = __webpack_require__(12);

var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

var _isInclusivelyAfterDay = __webpack_require__(11);

var _isInclusivelyAfterDay2 = _interopRequireDefault(_isInclusivelyAfterDay);

var _isNextDay = __webpack_require__(33);

var _isNextDay2 = _interopRequireDefault(_isNextDay);

var _isSameDay = __webpack_require__(19);

var _isSameDay2 = _interopRequireDefault(_isSameDay);

var _FocusedInputShape = __webpack_require__(29);

var _FocusedInputShape2 = _interopRequireDefault(_FocusedInputShape);

var _ScrollableOrientationShape = __webpack_require__(8);

var _ScrollableOrientationShape2 = _interopRequireDefault(_ScrollableOrientationShape);

var _constants = __webpack_require__(3);

var _DayPicker = __webpack_require__(24);

var _DayPicker2 = _interopRequireDefault(_DayPicker);

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
  endDate: _reactMomentProptypes2['default'].momentObj,
  onDatesChange: _propTypes2['default'].func,

  focusedInput: _FocusedInputShape2['default'],
  onFocusChange: _propTypes2['default'].func,

  keepOpenOnDateSelect: _propTypes2['default'].bool,
  minimumNights: _propTypes2['default'].number,
  isOutsideRange: _propTypes2['default'].func,
  isDayBlocked: _propTypes2['default'].func,
  isDayHighlighted: _propTypes2['default'].func,

  // DayPicker props
  enableOutsideDays: _propTypes2['default'].bool,
  numberOfMonths: _propTypes2['default'].number,
  orientation: _ScrollableOrientationShape2['default'],
  withPortal: _propTypes2['default'].bool,
  initialVisibleMonth: _propTypes2['default'].func,
  daySize: _airbnbPropTypes.nonNegativeInteger,

  navPrev: _propTypes2['default'].node,
  navNext: _propTypes2['default'].node,

  set_trip_duration_flex: _propTypes2['default'].func,
  onPrevMonthClick: _propTypes2['default'].func,
  onNextMonthClick: _propTypes2['default'].func,
  onOutsideClick: _propTypes2['default'].func,
  renderDay: _propTypes2['default'].func,
  renderCalendarInfo: _propTypes2['default'].func,

  onBlur: _propTypes2['default'].func,
  isFocused: _propTypes2['default'].bool,

  // i18n
  monthFormat: _propTypes2['default'].string,
  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.DayPickerPhrases))
});

var defaultProps = {
  startDate: undefined, // TODO: use null
  endDate: undefined, // TODO: use null
  onDatesChange: function () {
    function onDatesChange() {}

    return onDatesChange;
  }(),

  focusedInput: null,
  onFocusChange: function () {
    function onFocusChange() {}

    return onFocusChange;
  }(),

  keepOpenOnDateSelect: false,
  minimumNights: 1,
  isOutsideRange: function () {
    function isOutsideRange() {}

    return isOutsideRange;
  }(),
  isDayBlocked: function () {
    function isDayBlocked() {}

    return isDayBlocked;
  }(),
  isDayHighlighted: function () {
    function isDayHighlighted() {}

    return isDayHighlighted;
  }(),

  // DayPicker props
  enableOutsideDays: false,
  numberOfMonths: 1,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  withPortal: false,

  initialVisibleMonth: function () {
    function initialVisibleMonth() {
      return (0, _moment2['default'])();
    }

    return initialVisibleMonth;
  }(),
  daySize: _constants.DAY_SIZE,

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
  onOutsideClick: function () {
    function onOutsideClick() {}

    return onOutsideClick;
  }(),

  renderDay: null,
  renderCalendarInfo: null,

  onBlur: function () {
    function onBlur() {}

    return onBlur;
  }(),

  isFocused: false,

  // i18n
  monthFormat: 'MMMM YYYY',
  phrases: _defaultPhrases.DayPickerPhrases
};

var DayPickerRangeController = function (_React$Component) {
  _inherits(DayPickerRangeController, _React$Component);

  function DayPickerRangeController(props) {
    _classCallCheck(this, DayPickerRangeController);

    var _this = _possibleConstructorReturn(this, (DayPickerRangeController.__proto__ || Object.getPrototypeOf(DayPickerRangeController)).call(this, props));

    _this.state = {
      hoverDate: null
    };

    _this.isTouchDevice = (0, _isTouchDevice2['default'])();
    _this.today = (0, _moment2['default'])();

    _this.onDayClick = _this.onDayClick.bind(_this);
    _this.onDayMouseEnter = _this.onDayMouseEnter.bind(_this);
    _this.onDayMouseLeave = _this.onDayMouseLeave.bind(_this);
    return _this;
  }

  _createClass(DayPickerRangeController, [{
    key: 'componentWillUpdate',
    value: function () {
      function componentWillUpdate() {
        this.today = (0, _moment2['default'])();
      }

      return componentWillUpdate;
    }()
  }, {
    key: 'onDayClick',
    value: function () {
      function onDayClick(day, e) {
        var _props = this.props,
            keepOpenOnDateSelect = _props.keepOpenOnDateSelect,
            minimumNights = _props.minimumNights,
            onBlur = _props.onBlur;

        if (e) e.preventDefault();
        if (this.isBlocked(day)) return;

        var focusedInput = this.props.focusedInput;
        var _props2 = this.props,
            startDate = _props2.startDate,
            endDate = _props2.endDate;

        if (focusedInput === _constants.START_DATE) {
          this.props.onFocusChange(_constants.END_DATE);

          startDate = day;

          if ((0, _isInclusivelyAfterDay2['default'])(day, endDate)) {
            endDate = null;
          }
        } else if (focusedInput === _constants.END_DATE) {
          var firstAllowedEndDate = startDate && startDate.clone().add(minimumNights, 'days');

          if (!startDate) {
            endDate = day;
            this.props.onFocusChange(_constants.START_DATE);
          } else if ((0, _isInclusivelyAfterDay2['default'])(day, firstAllowedEndDate)) {
            endDate = day;
            if (!keepOpenOnDateSelect) this.props.onFocusChange(null);
          } else {
            startDate = day;
            endDate = null;
          }
        }

        this.props.onDatesChange({ startDate: startDate, endDate: endDate });
        onBlur();
      }

      return onDayClick;
    }()
  }, {
    key: 'onDayMouseEnter',
    value: function () {
      function onDayMouseEnter(day) {
        if (this.isTouchDevice) return;

        this.setState({
          hoverDate: day
        });
      }

      return onDayMouseEnter;
    }()
  }, {
    key: 'onDayMouseLeave',
    value: function () {
      function onDayMouseLeave() {
        if (this.isTouchDevice) return;

        this.setState({
          hoverDate: null
        });
      }

      return onDayMouseLeave;
    }()
  }, {
    key: 'doesNotMeetMinimumNights',
    value: function () {
      function doesNotMeetMinimumNights(day) {
        var _props3 = this.props,
            startDate = _props3.startDate,
            isOutsideRange = _props3.isOutsideRange,
            focusedInput = _props3.focusedInput,
            minimumNights = _props3.minimumNights;

        if (focusedInput !== _constants.END_DATE) return false;

        if (startDate) {
          var dayDiff = day.diff(startDate.clone().startOf('day').hour(12), 'days');
          return dayDiff < minimumNights && dayDiff >= 0;
        }
        return isOutsideRange((0, _moment2['default'])(day).subtract(minimumNights, 'days'));
      }

      return doesNotMeetMinimumNights;
    }()
  }, {
    key: 'isDayAfterHoveredStartDate',
    value: function () {
      function isDayAfterHoveredStartDate(day) {
        var _props4 = this.props,
            startDate = _props4.startDate,
            endDate = _props4.endDate,
            minimumNights = _props4.minimumNights;
        var hoverDate = this.state.hoverDate;

        return !!startDate && !endDate && !this.isBlocked(day) && (0, _isNextDay2['default'])(hoverDate, day) && minimumNights > 0 && (0, _isSameDay2['default'])(hoverDate, startDate);
      }

      return isDayAfterHoveredStartDate;
    }()
  }, {
    key: 'isEndDate',
    value: function () {
      function isEndDate(day) {
        return (0, _isSameDay2['default'])(day, this.props.endDate);
      }

      return isEndDate;
    }()
  }, {
    key: 'isHovered',
    value: function () {
      function isHovered(day) {
        return (0, _isSameDay2['default'])(day, this.state.hoverDate);
      }

      return isHovered;
    }()
  }, {
    key: 'isInHoveredSpan',
    value: function () {
      function isInHoveredSpan(day) {
        var _props5 = this.props,
            startDate = _props5.startDate,
            endDate = _props5.endDate;
        var hoverDate = this.state.hoverDate;

        var isForwardRange = !!startDate && !endDate && (day.isBetween(startDate, hoverDate) || (0, _isSameDay2['default'])(hoverDate, day));
        var isBackwardRange = !!endDate && !startDate && (day.isBetween(hoverDate, endDate) || (0, _isSameDay2['default'])(hoverDate, day));

        var isValidDayHovered = hoverDate && !this.isBlocked(hoverDate);

        return (isForwardRange || isBackwardRange) && isValidDayHovered;
      }

      return isInHoveredSpan;
    }()
  }, {
    key: 'isInSelectedSpan',
    value: function () {
      function isInSelectedSpan(day) {
        var _props6 = this.props,
            startDate = _props6.startDate,
            endDate = _props6.endDate;

        return day.isBetween(startDate, endDate);
      }

      return isInSelectedSpan;
    }()
  }, {
    key: 'isLastInRange',
    value: function () {
      function isLastInRange(day) {
        return this.isInSelectedSpan(day) && (0, _isNextDay2['default'])(day, this.props.endDate);
      }

      return isLastInRange;
    }()
  }, {
    key: 'isStartDate',
    value: function () {
      function isStartDate(day) {
        return (0, _isSameDay2['default'])(day, this.props.startDate);
      }

      return isStartDate;
    }()
  }, {
    key: 'isBlocked',
    value: function () {
      function isBlocked(day) {
        var _props7 = this.props,
            isDayBlocked = _props7.isDayBlocked,
            isOutsideRange = _props7.isOutsideRange;

        return isDayBlocked(day) || isOutsideRange(day) || this.doesNotMeetMinimumNights(day);
      }

      return isBlocked;
    }()
  }, {
    key: 'isToday',
    value: function () {
      function isToday(day) {
        return (0, _isSameDay2['default'])(day, this.today);
      }

      return isToday;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _this2 = this;

        var _props8 = this.props,
            isDayBlocked = _props8.isDayBlocked,
            isDayHighlighted = _props8.isDayHighlighted,
            isOutsideRange = _props8.isOutsideRange,
            numberOfMonths = _props8.numberOfMonths,
            orientation = _props8.orientation,
            monthFormat = _props8.monthFormat,
            navPrev = _props8.navPrev,
            navNext = _props8.navNext,
            onOutsideClick = _props8.onOutsideClick,
            onPrevMonthClick = _props8.onPrevMonthClick,
            onNextMonthClick = _props8.onNextMonthClick,
            withPortal = _props8.withPortal,
            enableOutsideDays = _props8.enableOutsideDays,
            initialVisibleMonth = _props8.initialVisibleMonth,
            daySize = _props8.daySize,
            focusedInput = _props8.focusedInput,
            renderDay = _props8.renderDay,
            set_trip_duration_flex = _props8.set_trip_duration_flex,
            set_is_flex_shown = _props8.set_is_flex_shown,
            is_flex_shown = _props8.is_flex_shown,
            renderCalendarInfo = _props8.renderCalendarInfo,
            startDate = _props8.startDate,
            endDate = _props8.endDate,
            onBlur = _props8.onBlur,
            isFocused = _props8.isFocused,
            phrases = _props8.phrases,
            monthdataloading = _props8.monthdataloading,
            loadmore_btn = _props8.loadmore_btn,
            loadmore_months = _props8.loadmore_months,
            show_flexible_dates = _props8.show_flexible_dates,
            trip_duration_flex = _props8.trip_duration_flex,
            all_months = _props8.all_months,
            selected_months = _props8.selected_months,
            set_selected_months = _props8.set_selected_months,
            search_results = _props8.search_results,
            show_search_btn = _props8.show_search_btn,
            sel_mon1 = _props8.sel_mon1,
            sel_mon2 = _props8.sel_mon2,
            sel_mon3 = _props8.sel_mon3,
            sel_mon4 = _props8.sel_mon4,
            sel_mon5 = _props8.sel_mon5,
            sel_mon6 = _props8.sel_mon6,
            show_inline_headers = _props8.show_inline_headers;

        var modifiers = Object.assign({
          today: function () {
            function today(day) {
              return _this2.isToday(day);
            }

            return today;
          }(),
          blocked: function () {
            function blocked(day) {
              return _this2.isBlocked(day);
            }

            return blocked;
          }(),
          'blocked-calendar': function () {
            function blockedCalendar(day) {
              return isDayBlocked(day);
            }

            return blockedCalendar;
          }(),
          'blocked-out-of-range': function () {
            function blockedOutOfRange(day) {
              return isOutsideRange(day);
            }

            return blockedOutOfRange;
          }(),
          'highlighted-calendar': function () {
            function highlightedCalendar(day) {
              return isDayHighlighted(day);
            }

            return highlightedCalendar;
          }(),
          valid: function () {
            function valid(day) {
              return !_this2.isBlocked(day);
            }

            return valid;
          }()

        }, startDate && {
          'selected-start': function () {
            function selectedStart(day) {
              return _this2.isStartDate(day);
            }

            return selectedStart;
          }()
        }, endDate && {
          'selected-end': function () {
            function selectedEnd(day) {
              return _this2.isEndDate(day);
            }

            return selectedEnd;
          }(),
          'blocked-minimum-nights': function () {
            function blockedMinimumNights(day) {
              return _this2.doesNotMeetMinimumNights(day);
            }

            return blockedMinimumNights;
          }()
        }, startDate && endDate && {
          'selected-span': function () {
            function selectedSpan(day) {
              return _this2.isInSelectedSpan(day);
            }

            return selectedSpan;
          }(),
          'last-in-range': function () {
            function lastInRange(day) {
              return _this2.isLastInRange(day);
            }

            return lastInRange;
          }()
        }, !this.isTouchDevice && {
          // before anything has been set or after both are set
          hovered: function () {
            function hovered(day) {
              return _this2.isHovered(day);
            }

            return hovered;
          }(),

          // while start date has been set, but end date has not been
          'hovered-span': function () {
            function hoveredSpan(day) {
              return _this2.isInHoveredSpan(day);
            }

            return hoveredSpan;
          }(),
          'after-hovered-start': function () {
            function afterHoveredStart(day) {
              return _this2.isDayAfterHoveredStartDate(day);
            }

            return afterHoveredStart;
          }()
        });

        return _react2['default'].createElement(_DayPicker2['default'], {
          ref: function () {
            function ref(_ref) {
              _this2.dayPicker = _ref;
            }

            return ref;
          }(),
          orientation: orientation,
          enableOutsideDays: enableOutsideDays,
          modifiers: modifiers,
          numberOfMonths: numberOfMonths,
          onDayClick: this.onDayClick,
          onDayMouseEnter: this.onDayMouseEnter,
          onDayMouseLeave: this.onDayMouseLeave,
          onPrevMonthClick: onPrevMonthClick,
          onNextMonthClick: onNextMonthClick,
          monthFormat: monthFormat,
          withPortal: withPortal,
          hidden: !focusedInput,
          initialVisibleMonth: initialVisibleMonth,
          daySize: daySize,
          onOutsideClick: onOutsideClick,
          navPrev: navPrev,
          navNext: navNext,
          renderDay: renderDay,
          renderCalendarInfo: renderCalendarInfo,
          isFocused: isFocused,
          onBlur: onBlur,
          phrases: phrases,
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
          show_inline_headers: show_inline_headers,
          startDate: startDate,
          endDate: endDate
        });
      }

      return render;
    }()
  }]);

  return DayPickerRangeController;
}(_react2['default'].Component);

exports['default'] = DayPickerRangeController;

DayPickerRangeController.propTypes = propTypes;
DayPickerRangeController.defaultProps = defaultProps;

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