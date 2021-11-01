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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 48:
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

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
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

var CloseButton = function (_React$Component) {
    _inherits(CloseButton, _React$Component);

    function CloseButton() {
        _classCallCheck(this, CloseButton);

        return _possibleConstructorReturn(this, (CloseButton.__proto__ || Object.getPrototypeOf(CloseButton)).apply(this, arguments));
    }

    _createClass(CloseButton, [{
        key: "render",
        value: function () {
            function render() {
                return _react2["default"].createElement("svg", { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xlinkHref: "http://www.w3.org/1999/xlink", x: "0px", y: "0px",
                    viewBox: "0 0 1393.1 1500", style: "enable-background:new 0 0 1393.1 1500;" }, _react2["default"].createElement("path", { d: "M107.2,1392.9h241.1v-241.1H107.2V1392.9z M401.9,1392.9h267.9v-241.1H401.9V1392.9z M107.2,1098.2h241.1V830.4H107.2 V1098.2z M401.9,1098.2h267.9V830.4H401.9V1098.2z M107.2,776.8h241.1V535.7H107.2V776.8z M723.4,1392.9h267.9v-241.1H723.4V1392.9z M401.9,776.8h267.9V535.7H401.9V776.8z M1044.8,1392.9H1286v-241.1h-241.1V1392.9z M723.4,1098.2h267.9V830.4H723.4V1098.2z M428.7,375V133.9c0-7.3-2.7-13.5-8-18.8c-5.3-5.3-11.6-8-18.8-8h-53.6c-7.3,0-13.5,2.7-18.8,8c-5.3,5.3-8,11.6-8,18.8V375 c0,7.3,2.7,13.5,8,18.8c5.3,5.3,11.6,8,18.8,8h53.6c7.3,0,13.5-2.7,18.8-8C426,388.5,428.7,382.3,428.7,375z M1044.8,1098.2H1286 V830.4h-241.1V1098.2z M723.4,776.8h267.9V535.7H723.4V776.8z M1044.8,776.8H1286V535.7h-241.1V776.8z M1071.6,375V133.9 c0-7.3-2.7-13.5-8-18.8c-5.3-5.3-11.6-8-18.8-8h-53.6c-7.3,0-13.5,2.7-18.8,8c-5.3,5.3-8,11.6-8,18.8V375c0,7.3,2.7,13.5,8,18.8 c5.3,5.3,11.6,8,18.8,8h53.6c7.3,0,13.5-2.7,18.8-8C1069,388.5,1071.6,382.3,1071.6,375z M1393.1,321.4v1071.4 c0,29-10.6,54.1-31.8,75.3c-21.2,21.2-46.3,31.8-75.3,31.8H107.2c-29,0-54.1-10.6-75.3-31.8C10.6,1447,0,1421.9,0,1392.9V321.4 c0-29,10.6-54.1,31.8-75.3s46.3-31.8,75.3-31.8h107.2v-80.4c0-36.8,13.1-68.4,39.3-94.6S311.4,0,348.3,0h53.6 c36.8,0,68.4,13.1,94.6,39.3c26.2,26.2,39.3,57.8,39.3,94.6v80.4h321.5v-80.4c0-36.8,13.1-68.4,39.3-94.6 C922.9,13.1,954.4,0,991.3,0h53.6c36.8,0,68.4,13.1,94.6,39.3s39.3,57.8,39.3,94.6v80.4H1286c29,0,54.1,10.6,75.3,31.8 C1382.5,267.3,1393.1,292.4,1393.1,321.4z" }));
            }

            return render;
        }()
    }]);

    return CloseButton;
}(_react2["default"].Component);

exports["default"] = CloseButton;

/***/ })

/******/ });