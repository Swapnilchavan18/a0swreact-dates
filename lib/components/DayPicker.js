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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
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

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("./OutsideClickHandler");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("../utils/getCalendarMonthWidth");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("../utils/getTransformStyles");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("../../constants");

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports = require("./CalendarMonthGrid");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

module.exports = require("./DayPickerNavigation");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("../defaultPhrases");

/***/ }),

/***/ 58:
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

exports.calculateDimension = calculateDimension;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsShallowCompare = __webpack_require__(9);

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _airbnbPropTypes = __webpack_require__(1);

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultPhrases = __webpack_require__(5);

var _getPhrasePropTypes = __webpack_require__(7);

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

var _OutsideClickHandler = __webpack_require__(15);

var _OutsideClickHandler2 = _interopRequireDefault(_OutsideClickHandler);

var _CalendarMonthGrid = __webpack_require__(38);

var _CalendarMonthGrid2 = _interopRequireDefault(_CalendarMonthGrid);

var _DayPickerNavigation = __webpack_require__(43);

var _DayPickerNavigation2 = _interopRequireDefault(_DayPickerNavigation);

var _getTransformStyles = __webpack_require__(18);

var _getTransformStyles2 = _interopRequireDefault(_getTransformStyles);

var _getCalendarMonthWidth = __webpack_require__(16);

var _getCalendarMonthWidth2 = _interopRequireDefault(_getCalendarMonthWidth);

var _ScrollableOrientationShape = __webpack_require__(8);

var _ScrollableOrientationShape2 = _interopRequireDefault(_ScrollableOrientationShape);

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

var MONTH_PADDING = 23;
var DAY_PICKER_PADDING = 7;
var PREV_TRANSITION = 'prev';
var NEXT_TRANSITION = 'next';

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  // calendar presentation props
  enableOutsideDays: _propTypes2['default'].bool,
  numberOfMonths: _propTypes2['default'].number,
  orientation: _ScrollableOrientationShape2['default'],
  withPortal: _propTypes2['default'].bool,
  onOutsideClick: _propTypes2['default'].func,
  hidden: _propTypes2['default'].bool,
  initialVisibleMonth: _propTypes2['default'].func,
  renderCalendarInfo: _propTypes2['default'].func,
  daySize: _airbnbPropTypes.nonNegativeInteger,

  // navigation props
  navPrev: _propTypes2['default'].node,
  navNext: _propTypes2['default'].node,
  onPrevMonthClick: _propTypes2['default'].func,
  onNextMonthClick: _propTypes2['default'].func,

  // day props
  modifiers: _propTypes2['default'].object,
  renderDay: _propTypes2['default'].func,
  onDayClick: _propTypes2['default'].func,
  onDayMouseEnter: _propTypes2['default'].func,
  onDayMouseLeave: _propTypes2['default'].func,

  isFocused: _propTypes2['default'].bool,
  onBlur: _propTypes2['default'].func,

  // internationalization
  monthFormat: _propTypes2['default'].string,
  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.DayPickerPhrases))
});

var defaultProps = {
  // calendar presentation props
  enableOutsideDays: false,
  numberOfMonths: 1,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  withPortal: false,
  onOutsideClick: function () {
    function onOutsideClick() {}

    return onOutsideClick;
  }(),

  hidden: false,
  initialVisibleMonth: function () {
    function initialVisibleMonth() {
      return (0, _moment2['default'])();
    }

    return initialVisibleMonth;
  }(),
  renderCalendarInfo: null,
  daySize: _constants.DAY_SIZE,

  // navigation props
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

  // day props
  modifiers: {},
  renderDay: null,
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

  isFocused: false,
  onBlur: function () {
    function onBlur() {}

    return onBlur;
  }(),

  // internationalization
  monthFormat: 'MMMM YYYY',
  phrases: _defaultPhrases.DayPickerPhrases
};

function applyTransformStyles(el, transform) {
  var opacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var transformStyles = (0, _getTransformStyles2['default'])(transform);
  transformStyles.opacity = opacity;

  Object.keys(transformStyles).forEach(function (styleKey) {
    // eslint-disable-next-line no-param-reassign
    el.style[styleKey] = transformStyles[styleKey];
  });
}

function calculateDimension(el, axis) {
  var borderBox = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var withMargin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!el) {
    return 0;
  }

  var axisStart = axis === 'width' ? 'Left' : 'Top';
  var axisEnd = axis === 'width' ? 'Right' : 'Bottom';

  // Only read styles if we need to
  var style = !borderBox || withMargin ? window.getComputedStyle(el) : {};

  // Offset includes border and padding
  var size = axis === 'width' ? el.offsetWidth : el.offsetHeight;

  // Get the inner size
  if (!borderBox) {
    size -= parseFloat(style['padding' + axisStart]) + parseFloat(style['padding' + axisEnd]) + parseFloat(style['border' + axisStart + 'Width']) + parseFloat(style['border' + axisEnd + 'Width']);
  }

  // Apply margin
  if (withMargin) {
    size += parseFloat(style['margin' + axisStart]) + parseFloat(style['margin' + axisEnd]);
  }

  return size;
}

function getMonthHeight(el) {
  var caption = el.querySelector('.js-CalendarMonth__caption');
  var grid = el.querySelector('.js-CalendarMonth__grid');

  // Need to separate out table children for FF
  // Add an additional +1 for the border
  return calculateDimension(caption, 'height', true, true) + calculateDimension(grid, 'height') + 1;
}

var DayPicker = function (_React$Component) {
  _inherits(DayPicker, _React$Component);

  function DayPicker(props) {
    _classCallCheck(this, DayPicker);

    var _this = _possibleConstructorReturn(this, (DayPicker.__proto__ || Object.getPrototypeOf(DayPicker)).call(this, props));

    _this.hasSetInitialVisibleMonth = !props.hidden;
    _this.state = {
      currentMonth: props.hidden ? (0, _moment2['default'])() : props.initialVisibleMonth(),
      monthdataloading: props.monthdataloading,
      monthTransition: null,
      translationValue: 0,
      scrollableMonthMultiple: 1,
      calendarMonthWidth: (0, _getCalendarMonthWidth2['default'])(props.daySize),
      is_flex_shown: props.is_flex_shown
    };
    _this.onPrevMonthClick = _this.onPrevMonthClick.bind(_this);
    _this.onNextMonthClick = _this.onNextMonthClick.bind(_this);
    _this.multiplyScrollableMonths = _this.multiplyScrollableMonths.bind(_this);
    _this.updateStateAfterMonthTransition = _this.updateStateAfterMonthTransition.bind(_this);
    _this.handleresize = _this.handleresize.bind(_this);
    return _this;
  }

  _createClass(DayPicker, [{
    key: 'set_is_flex_shown1',
    value: function () {
      function set_is_flex_shown1(is_flex_shown) {
        this.props.set_is_flex_shown(is_flex_shown);
        if (is_flex_shown == false) {
          this.adjustDayPickerHeight();
          this.initializeDayPickerWidth();
        } else {
          this.props.set_trip_duration_flex("weekend", "initialize");
        }
      }

      return set_is_flex_shown1;
    }()
  }, {
    key: 'handleresize',
    value: function () {
      function handleresize() {
        if (this.isHorizontal()) {
          this.adjustDayPickerHeight();
          this.initializeDayPickerWidth();
        }
      }

      return handleresize;
    }()
  }, {
    key: 'componentWillUnmount',
    value: function () {
      function componentWillUnmount() {
        window.removeEventListener('resize', this.handleresize);
      }

      return componentWillUnmount;
    }()
  }, {
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        if (this.isHorizontal()) {
          this.adjustDayPickerHeight();
          this.initializeDayPickerWidth();
        }

        window.addEventListener('resize', this.handleresize);
        if (this.props.isFocused && this.props.is_flex_shown == false) {
          this.container.focus();
        }
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentWillReceiveProps',
    value: function () {
      function componentWillReceiveProps(nextProps) {
        if (!nextProps.hidden) {
          if (!this.hasSetInitialVisibleMonth) {
            this.hasSetInitialVisibleMonth = true;
            this.setState({
              currentMonth: nextProps.initialVisibleMonth()
            });
          }
          if (nextProps.monthdataloading != this.state.monthdataloading) {
            this.setState({
              monthdataloading: nextProps.monthdataloading
            });
          }
          if (!this.dayPickerWidth && this.isHorizontal()) {
            this.initializeDayPickerWidth();
            this.adjustDayPickerHeight();
          }
        }

        if (nextProps.daySize !== this.props.daySize) {
          this.setState({
            calendarMonthWidth: (0, _getCalendarMonthWidth2['default'])(nextProps.daySize)
          });
        }
      }

      return componentWillReceiveProps;
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
      function componentDidUpdate(prevProps, prevState) {
        if (this.state.currentMonth != null) {
          if (this.state.monthTransition || !this.state.currentMonth.isSame(prevState.currentMonth)) {
            if (this.isHorizontal()) {
              this.adjustDayPickerHeight();
            }
          }
        }

        if (!prevProps.isFocused && this.props.isFocused && this.props.is_flex_shown == false) {
          this.container.focus();
        }
        if (prevProps.is_flex_shown !== this.props.is_flex_shown) {
          this.initializeDayPickerWidth();
          this.adjustDayPickerHeight();
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'onPrevMonthClick',
    value: function () {
      function onPrevMonthClick(e) {
        if (e) e.preventDefault();

        if (this.props.onPrevMonthClick) {
          this.props.onPrevMonthClick(e);
        }

        var translationValue = this.isVertical() ? this.getMonthHeightByIndex(0) : this.dayPickerWidth;

        // The first CalendarMonth is always positioned absolute at top: 0 or left: 0
        // so we need to transform it to the appropriate location before the animation.
        // This behavior is because we would otherwise need a double-render in order to
        // adjust the container position once we had the height the first calendar
        // (ie first draw all the calendar, then in a second render, use the first calendar's
        // height to position the container). Variable calendar heights, amirite? <3 Maja
        this.translateFirstDayPickerForAnimation(translationValue);

        this.setState({
          monthTransition: PREV_TRANSITION,
          translationValue: translationValue
        });
      }

      return onPrevMonthClick;
    }()
  }, {
    key: 'onNextMonthClick',
    value: function () {
      function onNextMonthClick(e) {
        if (e) e.preventDefault();
        if (this.props.onNextMonthClick) {
          this.props.onNextMonthClick(e);
        }

        var translationValue = this.isVertical() ? -this.getMonthHeightByIndex(1) : -this.dayPickerWidth;

        this.setState({
          monthTransition: NEXT_TRANSITION,
          translationValue: translationValue
        });
      }

      return onNextMonthClick;
    }()
  }, {
    key: 'getMonthHeightByIndex',
    value: function () {
      function getMonthHeightByIndex(i) {
        return getMonthHeight(this.transitionContainer.querySelectorAll('.CalendarMonth')[i]);
      }

      return getMonthHeightByIndex;
    }()
  }, {
    key: 'multiplyScrollableMonths',
    value: function () {
      function multiplyScrollableMonths(e) {
        if (e) e.preventDefault();

        this.setState({
          scrollableMonthMultiple: this.state.scrollableMonthMultiple + 1
        });
      }

      return multiplyScrollableMonths;
    }()
  }, {
    key: 'isHorizontal',
    value: function () {
      function isHorizontal() {
        return this.props.orientation === _constants.HORIZONTAL_ORIENTATION;
      }

      return isHorizontal;
    }()
  }, {
    key: 'isVertical',
    value: function () {
      function isVertical() {
        return this.props.orientation === _constants.VERTICAL_ORIENTATION || this.props.orientation === _constants.VERTICAL_SCROLLABLE;
      }

      return isVertical;
    }()
  }, {
    key: 'initializeDayPickerWidth',
    value: function () {
      function initializeDayPickerWidth() {
        if (this.calendarMonthGrid != null) {
          this.dayPickerWidth = calculateDimension(
          // eslint-disable-next-line react/no-find-dom-node
          _reactDom2['default'].findDOMNode(this.calendarMonthGrid).querySelector('.CalendarMonth'), 'width', true);
        }
      }

      return initializeDayPickerWidth;
    }()
  }, {
    key: 'updateStateAfterMonthTransition',
    value: function () {
      function updateStateAfterMonthTransition() {
        var _state = this.state,
            currentMonth = _state.currentMonth,
            monthTransition = _state.monthTransition;

        var newMonth = currentMonth;
        if (monthTransition === PREV_TRANSITION) {
          newMonth = currentMonth.clone().subtract(1, 'month');
        } else if (monthTransition === NEXT_TRANSITION) {
          newMonth = currentMonth.clone().add(1, 'month');
        }

        // clear the previous transforms
        applyTransformStyles(
        // eslint-disable-next-line react/no-find-dom-node
        _reactDom2['default'].findDOMNode(this.calendarMonthGrid).querySelector('.CalendarMonth'), 'none');

        this.setState({
          currentMonth: newMonth,
          monthTransition: null,
          translationValue: 0
        });
      }

      return updateStateAfterMonthTransition;
    }()
  }, {
    key: 'adjustDayPickerHeight',
    value: function () {
      function adjustDayPickerHeight() {
        var heights = [];
        if (this.transitionContainer != null) {
          Array.prototype.forEach.call(this.transitionContainer.querySelectorAll('.CalendarMonth'), function (el) {
            if (el.getAttribute('data-visible') === 'true') {
              heights.push(getMonthHeight(el));
            }
          });

          var newMonthHeight = Math.max.apply(Math, heights) + MONTH_PADDING;

          if (newMonthHeight !== calculateDimension(this.transitionContainer, 'height')) {
            this.monthHeight = newMonthHeight;
            this.transitionContainer.style.height = String(newMonthHeight) + 'px';
          }
        }
      }

      return adjustDayPickerHeight;
    }()
  }, {
    key: 'translateFirstDayPickerForAnimation',
    value: function () {
      function translateFirstDayPickerForAnimation(translationValue) {
        var transformType = this.isVertical() ? 'translateY' : 'translateX';
        var transformValue = transformType + '(-' + String(translationValue) + 'px)';

        applyTransformStyles(this.transitionContainer.querySelector('.CalendarMonth'), transformValue, 1);
      }

      return translateFirstDayPickerForAnimation;
    }()
  }, {
    key: 'renderNavigation',
    value: function () {
      function renderNavigation() {
        var _props = this.props,
            navPrev = _props.navPrev,
            navNext = _props.navNext,
            orientation = _props.orientation,
            loadmore_btn = _props.loadmore_btn,
            loadmore_months = _props.loadmore_months,
            startDate = _props.startDate,
            endDate = _props.endDate,
            show_flexible_dates = _props.show_flexible_dates,
            set_trip_duration_flex = _props.set_trip_duration_flex,
            trip_duration_flex = _props.trip_duration_flex;

        var onNextMonthClick = void 0;
        if (orientation === _constants.VERTICAL_SCROLLABLE) {
          onNextMonthClick = this.multiplyScrollableMonths;
        } else {
          onNextMonthClick = this.onNextMonthClick;
        }
        return _react2['default'].createElement(_DayPickerNavigation2['default'], {
          onPrevMonthClick: this.onPrevMonthClick,
          onNextMonthClick: onNextMonthClick,
          navPrev: navPrev,
          navNext: navNext,
          orientation: orientation,
          loadmore_btn: loadmore_btn,
          loadmore_months: loadmore_months,
          startDate: startDate,
          endDate: endDate,
          show_flexible_dates: show_flexible_dates,
          monthdataloading: this.state.monthdataloading,
          trip_duration_flex: trip_duration_flex,
          set_trip_duration_flex: set_trip_duration_flex
        });
      }

      return renderNavigation;
    }()
  }, {
    key: 'renderWeekHeader',
    value: function () {
      function renderWeekHeader(index) {
        var _props2 = this.props,
            daySize = _props2.daySize,
            orientation = _props2.orientation;
        var calendarMonthWidth = this.state.calendarMonthWidth;

        var verticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;

        var horizontalStyle = {
          left: index * calendarMonthWidth
        };

        var verticalStyle = {
          marginLeft: -calendarMonthWidth / 2
        };

        var style = {}; // no styles applied to the vertical-scrollable orientation
        if (this.isHorizontal()) {
          style = horizontalStyle;
        } else if (this.isVertical() && !verticalScrollable) {
          style = verticalStyle;
        }

        var header = [];
        for (var i = 0; i < 7; i += 1) {
          header.push(_react2['default'].createElement('li', { key: i, style: { width: daySize } }, _react2['default'].createElement('small', null, (0, _moment2['default'])().weekday(i).format('dd'))));
        }

        return _react2['default'].createElement('div', {
          className: 'DayPicker__week-header',
          key: 'week-' + String(index),
          style: style
        }, _react2['default'].createElement('ul', null, header));
      }

      return renderWeekHeader;
    }()
  }, {
    key: 'search_item',
    value: function () {
      function search_item(selected_months, aitem) {
        if (selected_months != null && selected_months.length > 0) {
          for (var i = 0; i < selected_months.length; i++) {
            var selected_item = selected_months[i];
            if (aitem == selected_item) {
              return true;
            }
          }
        }
        return false;
      }

      return search_item;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _this2 = this;

        var _state2 = this.state,
            currentMonth = _state2.currentMonth,
            monthTransition = _state2.monthTransition,
            translationValue = _state2.translationValue,
            scrollableMonthMultiple = _state2.scrollableMonthMultiple;
        var _props3 = this.props,
            enableOutsideDays = _props3.enableOutsideDays,
            numberOfMonths = _props3.numberOfMonths,
            orientation = _props3.orientation,
            modifiers = _props3.modifiers,
            withPortal = _props3.withPortal,
            onDayClick = _props3.onDayClick,
            onDayMouseEnter = _props3.onDayMouseEnter,
            onDayMouseLeave = _props3.onDayMouseLeave,
            renderDay = _props3.renderDay,
            renderCalendarInfo = _props3.renderCalendarInfo,
            onOutsideClick = _props3.onOutsideClick,
            monthFormat = _props3.monthFormat,
            daySize = _props3.daySize,
            loadmore_btn = _props3.loadmore_btn,
            loadmore_months = _props3.loadmore_months,
            show_flexible_dates = _props3.show_flexible_dates,
            trip_duration_flex = _props3.trip_duration_flex,
            set_trip_duration_flex = _props3.set_trip_duration_flex,
            all_months = _props3.all_months,
            selected_months = _props3.selected_months,
            set_selected_months = _props3.set_selected_months,
            show_search_btn = _props3.show_search_btn,
            sel_mon1 = _props3.sel_mon1,
            sel_mon2 = _props3.sel_mon2,
            sel_mon3 = _props3.sel_mon3,
            sel_mon4 = _props3.sel_mon4,
            sel_mon5 = _props3.sel_mon5,
            sel_mon6 = _props3.sel_mon6,
            show_inline_headers = _props3.show_inline_headers,
            is_flex_shown = _props3.is_flex_shown;
        var calendarMonthWidth = this.state.calendarMonthWidth;

        var numOfWeekHeaders = this.isVertical() ? 1 : numberOfMonths;
        var weekHeaders = [];
        for (var i = 0; i < numOfWeekHeaders; i += 1) {
          weekHeaders.push(this.renderWeekHeader(i));
        }

        var firstVisibleMonthIndex = 0;
        if (monthTransition === PREV_TRANSITION) {
          firstVisibleMonthIndex -= 1;
        } else if (monthTransition === NEXT_TRANSITION) {
          firstVisibleMonthIndex += 1;
        }

        var verticalScrollable = this.props.orientation === _constants.VERTICAL_SCROLLABLE;

        var dayPickerClassNames = (0, _classnames2['default'])('DayPicker', {
          'DayPicker--horizontal': this.isHorizontal(),
          'DayPicker--vertical': this.isVertical(),
          'DayPicker--vertical-scrollable': verticalScrollable,
          'DayPicker--portal': withPortal
        });

        var transitionContainerClasses = (0, _classnames2['default'])('transition-container', {
          'transition-container--horizontal': this.isHorizontal(),
          'transition-container--vertical': this.isVertical()
        });

        var horizontalWidth = calendarMonthWidth * numberOfMonths + 2 * DAY_PICKER_PADDING;

        // this is a kind of made-up value that generally looks good. we'll
        // probably want to let the user set this explicitly.
        var verticalHeight = 1.75 * calendarMonthWidth;

        var dayPickerStyle = {
          width: this.isHorizontal() && horizontalWidth,

          // These values are to center the datepicker (approximately) on the page
          marginLeft: this.isHorizontal() && withPortal && -horizontalWidth / 2,
          marginTop: this.isHorizontal() && withPortal && -calendarMonthWidth / 2
        };

        var transitionContainerStyle = {
          width: this.isHorizontal() && horizontalWidth,
          height: this.state.monthdataloading == true && 0

        }; //height: this.isVertical() && !verticalScrollable && !withPortal && verticalHeight,

        var isCalendarMonthGridAnimating = monthTransition !== null;
        var transformType = this.isVertical() ? 'translateY' : 'translateX';
        var transformValue = transformType + '(' + String(translationValue) + 'px)';
        var text_flex = "I'm flexible";
        //transitionContainerClasses: style={transitionContainerStyle}
        //console.log("trip_duration_flex"+trip_duration_flex);
        return _react2['default'].createElement('div', { className: dayPickerClassNames, style: dayPickerStyle, 'data-test3': '1' }, this.state.monthdataloading == true && _react2['default'].createElement('div', { className: 'stillloading datepickerloader active' }), show_flexible_dates == true && _react2['default'].createElement('div', { 'class': 'select-flexdates' }, _react2['default'].createElement('div', { 'class': 'select-flexdates-inside' }, _react2['default'].createElement('button', { className: is_flex_shown == true ? "btn btn-default btn-flex1 notselected" : "btn btn-default btn-flex1 selected", onClick: this.set_is_flex_shown1.bind(this, false) }, 'Calendar'), _react2['default'].createElement('button', { className: is_flex_shown == true ? "btn btn-default btn-flex1 selected" : "btn btn-default btn-flex1 notselected", onClick: this.set_is_flex_shown1.bind(this, true) }, text_flex))), is_flex_shown == true ? _react2['default'].createElement(_OutsideClickHandler2['default'], { onOutsideClick: onOutsideClick }, _react2['default'].createElement('div', { 'class': 'col-md-12 select-flexdates-outer' }, _react2['default'].createElement('div', { style: { 'color': '#717171', 'fontSize': '18px' }, className: 'col-md-12 form-group text-center' }, 'How long would you like to stay?'), _react2['default'].createElement('div', { className: 'col-md-12 form-group text-center' }, _react2['default'].createElement('button', { onClick: set_trip_duration_flex.bind(this, "weekend"), className: trip_duration_flex == "weekend" ? "btn btn-default btn-flex2 selected" : "btn btn-default btn-flex2", style: { 'marginRight': '10px', "marginBottom": "15px" } }, 'Weekend'), _react2['default'].createElement('button', { onClick: set_trip_duration_flex.bind(this, "week"), className: trip_duration_flex == "week" ? "btn btn-default btn-flex2 selected" : "btn btn-default btn-flex2", style: { 'marginRight': '10px', "marginBottom": "15px" } }, 'Week'), _react2['default'].createElement('button', { onClick: set_trip_duration_flex.bind(this, "month"), className: trip_duration_flex == "month" ? "btn btn-default btn-flex2 selected" : "btn btn-default btn-flex2", style: { "marginBottom": "15px" } }, 'Month')), _react2['default'].createElement('div', { style: { 'color': '#717171', 'fontSize': '18px' }, className: 'col-md-12 form-group text-center' }, 'When do you want to go?'), all_months != null && all_months.length > 0 && _react2['default'].createElement('div', { className: 'col-md-12 text-center btn-flexd' }, all_months.map(function (aitem, aindex) {
          var is_active = false;
          if (aindex == 0 && sel_mon1 == true) {
            is_active = true;
          }
          if (aindex == 1 && sel_mon2 == true) {
            is_active = true;
          }
          if (aindex == 2 && sel_mon3 == true) {
            is_active = true;
          }
          if (aindex == 3 && sel_mon4 == true) {
            is_active = true;
          }
          if (aindex == 4 && sel_mon5 == true) {
            is_active = true;
          }
          if (aindex == 5 && sel_mon6 == true) {
            is_active = true;
          }
          return _react2['default'].createElement('button', { key: aindex, onClick: set_selected_months.bind(this, aitem, aindex), style: { "height": "90px", "padding": "15px 0", "fontSize": "14px", "marginBottom": "15px", "position": "relative" }, className: aindex == 0 && sel_mon1 == true || aindex == 1 && sel_mon2 == true || aindex == 2 && sel_mon3 == true || aindex == 3 && sel_mon4 == true || aindex == 4 && sel_mon5 == true || aindex == 5 && sel_mon6 == true ? "btn btn-default btn-flex2 btn-flex2-1 selected" : "btn btn-default btn-flex2 btn-flex2-1" }, _react2['default'].createElement('span', { style: { "display": "block", "fontSize": "24px" } }, _react2['default'].createElement('i', { 'class': 'fal fa-calendar-alt' })), _react2['default'].createElement('span', null, aitem));
        }, this)), show_search_btn == true && _react2['default'].createElement('div', { className: 'col-md-12 form-group text-center flex-searchbtn' }, _react2['default'].createElement('div', { className: 'col-md-4 col-md-offset-4' }, _react2['default'].createElement('button', { onClick: this.props.search_results.bind(this), type: 'button', className: 'btn btn-search' }, 'Search'))))) : _react2['default'].createElement(_OutsideClickHandler2['default'], { onOutsideClick: onOutsideClick }, _react2['default'].createElement('div', {
          className: this.state.monthdataloading == true ? "DayPicker__week-headers isloading" : "DayPicker__week-headers",
          'aria-hidden': 'true',
          role: 'presentation'
        }, weekHeaders), _react2['default'].createElement('div', {
          className: "DayPicker__focus-region",
          ref: function () {
            function ref(_ref3) {
              _this2.container = _ref3;
            }

            return ref;
          }(),
          role: 'region',
          tabIndex: -1
        }, !verticalScrollable && this.renderNavigation(), _react2['default'].createElement('div', {
          className: transitionContainerClasses,
          ref: function () {
            function ref(_ref2) {
              _this2.transitionContainer = _ref2;
            }

            return ref;
          }(),
          'data-test2': '2'
        }, _react2['default'].createElement(_CalendarMonthGrid2['default'], {
          ref: function () {
            function ref(_ref) {
              _this2.calendarMonthGrid = _ref;
            }

            return ref;
          }(),
          transformValue: transformValue,
          enableOutsideDays: enableOutsideDays,
          firstVisibleMonthIndex: firstVisibleMonthIndex,
          initialMonth: currentMonth,
          isAnimating: isCalendarMonthGridAnimating,
          modifiers: modifiers,
          orientation: orientation,
          numberOfMonths: numberOfMonths * scrollableMonthMultiple,
          onDayClick: onDayClick,
          onDayMouseEnter: onDayMouseEnter,
          onDayMouseLeave: onDayMouseLeave,
          renderDay: renderDay,
          onMonthTransitionEnd: this.updateStateAfterMonthTransition,
          monthFormat: monthFormat,
          daySize: daySize,
          monthdataloading: this.state.monthdataloading,
          loadmore_btn: loadmore_btn,
          loadmore_months: loadmore_months,
          show_inline_headers: show_inline_headers
        }), verticalScrollable && this.renderNavigation()), renderCalendarInfo && renderCalendarInfo())));
      }

      return render;
    }()
  }]);

  return DayPicker;
}(_react2['default'].Component);

exports['default'] = DayPicker;

DayPicker.propTypes = propTypes;
DayPicker.defaultProps = defaultProps;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("../utils/getPhrasePropTypes");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("../shapes/ScrollableOrientationShape");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("react-addons-shallow-compare");

/***/ })

/******/ });