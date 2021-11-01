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
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
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

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("../utils/isTouchDevice");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 54:
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

var _isTouchDevice = __webpack_require__(12);

var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

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
  id: _propTypes2['default'].string.isRequired,
  placeholder: _propTypes2['default'].string, // also used as label
  displayValue: _propTypes2['default'].string,
  inputValue: _propTypes2['default'].string,
  screenReaderMessage: _propTypes2['default'].string,
  focused: _propTypes2['default'].bool,
  disabled: _propTypes2['default'].bool,
  required: _propTypes2['default'].bool,
  showCaret: _propTypes2['default'].bool,

  onChange: _propTypes2['default'].func,
  onFocus: _propTypes2['default'].func,
  onKeyDownShiftTab: _propTypes2['default'].func,
  onKeyDownTab: _propTypes2['default'].func,

  isFocused: _propTypes2['default'].bool, // describes actual DOM focus
  inputpad: _propTypes2['default'].string,
  daytype: _propTypes2['default'].string
});

var defaultProps = {
  placeholder: 'Select Date',
  displayValue: '',
  inputValue: '',
  screenReaderMessage: '',
  focused: false,
  disabled: false,
  required: false,
  showCaret: false,

  onChange: function () {
    function onChange() {}

    return onChange;
  }(),
  onFocus: function () {
    function onFocus() {}

    return onFocus;
  }(),
  onKeyDownShiftTab: function () {
    function onKeyDownShiftTab() {}

    return onKeyDownShiftTab;
  }(),
  onKeyDownTab: function () {
    function onKeyDownTab() {}

    return onKeyDownTab;
  }(),

  isFocused: false,
  inputpad: '4'
};

var DateInput = function (_React$Component) {
  _inherits(DateInput, _React$Component);

  function DateInput(props) {
    _classCallCheck(this, DateInput);

    var _this = _possibleConstructorReturn(this, (DateInput.__proto__ || Object.getPrototypeOf(DateInput)).call(this, props));

    _this.state = {
      dateString: '',
      isTouchDevice: false
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    return _this;
  }

  _createClass(DateInput, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        this.setState({ isTouchDevice: (0, _isTouchDevice2['default'])() });
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentWillReceiveProps',
    value: function () {
      function componentWillReceiveProps(nextProps) {
        if (!this.props.displayValue && nextProps.displayValue) {
          this.setState({
            dateString: ''
          });
        }
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate(prevProps) {
        var _props = this.props,
            focused = _props.focused,
            isFocused = _props.isFocused;

        if (prevProps.focused === focused && prevProps.isFocused === isFocused) return;

        if (focused && isFocused) {
          this.inputRef.focus();
          this.inputRef.select();
        } else {
          this.inputRef.blur();
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'onChange',
    value: function () {
      function onChange(e) {
        var dateString = e.target.value;

        this.setState({ dateString: dateString });
        this.props.onChange(dateString);
      }

      return onChange;
    }()
  }, {
    key: 'onKeyDown',
    value: function () {
      function onKeyDown(e) {
        var _props2 = this.props,
            onKeyDownShiftTab = _props2.onKeyDownShiftTab,
            onKeyDownTab = _props2.onKeyDownTab;

        if (e.key === 'Tab') {
          if (e.shiftKey) {
            onKeyDownShiftTab(e);
          } else {
            onKeyDownTab(e);
          }
        }
      }

      return onKeyDown;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _this2 = this;

        var _state = this.state,
            dateString = _state.dateString,
            isTouch = _state.isTouchDevice;
        var _props3 = this.props,
            id = _props3.id,
            placeholder = _props3.placeholder,
            displayValue = _props3.displayValue,
            inputValue = _props3.inputValue,
            screenReaderMessage = _props3.screenReaderMessage,
            focused = _props3.focused,
            showCaret = _props3.showCaret,
            onFocus = _props3.onFocus,
            disabled = _props3.disabled,
            required = _props3.required,
            datetype = _props3.datetype,
            inputpad = _props3.inputpad;

        var displayText = displayValue || inputValue || dateString || placeholder || '';
        var value = inputValue || displayValue || dateString || '';
        var screenReaderMessageId = 'DateInput__screen-reader-message-' + String(id);
        var inputstyle = { 'padding': inputpad + 'px 4px' };
        return _react2['default'].createElement('div', {
          className: (0, _classnames2['default'])('DateInput', {
            'DateInput--with-caret': showCaret && focused,
            'DateInput--disabled': disabled,
            'start': datetype == 'start',
            'end': datetype == 'end'
          }), style: inputstyle
        }, _react2['default'].createElement('input', {
          'aria-label': placeholder,
          className: 'DateInput__input needsclick',
          type: 'text',
          id: id,
          name: id,
          ref: function () {
            function ref(_ref) {
              _this2.inputRef = _ref;
            }

            return ref;
          }(),
          value: value,
          onChange: this.onChange,
          onKeyDown: this.onKeyDown,
          onFocus: onFocus,
          placeholder: placeholder,
          autoComplete: 'off',
          disabled: disabled,
          readOnly: isTouch,
          required: required,
          'aria-describedby': screenReaderMessage && screenReaderMessageId
        }), screenReaderMessage && _react2['default'].createElement('p', { id: screenReaderMessageId, className: 'screen-reader-only' }, screenReaderMessage), _react2['default'].createElement('div', {
          className: (0, _classnames2['default'])('DateInput__display-text', {
            'DateInput__display-text--has-input': !!value,
            'DateInput__display-text--focused': focused,
            'DateInput__display-text--disabled': disabled
          })
        }, displayText));
      }

      return render;
    }()
  }]);

  return DateInput;
}(_react2['default'].Component);

exports['default'] = DateInput;

DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;

/***/ })

/******/ });