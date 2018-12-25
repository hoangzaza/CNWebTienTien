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
/******/ 	return __webpack_require__(__webpack_require__.s = 568);
/******/ })
/************************************************************************/
/******/ ({

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _point = __webpack_require__(569);

var _point2 = _interopRequireDefault(_point);

var _line = __webpack_require__(570);

var _line2 = _interopRequireDefault(_line);

var _arc = __webpack_require__(571);

var _arc2 = _interopRequireDefault(_arc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Point = _point2.default;
window.Line = _line2.default;
window.Arc = _arc2.default;

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parallel = __webpack_require__(98);

var _parallel2 = _interopRequireDefault(_parallel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
    function Point(x, y) {
        var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;

        this.style = style;

        this.id = id;

        this.initDraw();
    }

    _createClass(Point, [{
        key: 'setPos',
        value: function setPos(x, y) {
            this.x = x;
            this.y = y;

            this.draw();
        }
    }, {
        key: 'setStyle',
        value: function setStyle(style) {
            this.style = Object.assign({}, this.style, style);

            this.draw();
        }
    }, {
        key: 'initDraw',
        value: function initDraw() {
            this.displayLayer = document.createElementNS(_parallel2.default.NAMESPACE, "circle");
            this.draw();
        }
    }, {
        key: 'draw',
        value: function draw() {
            $(this.displayLayer).attr({
                id: this.id,
                cx: this.x,
                cy: this.y
            }).attr(this.style);
        }
    }]);

    return Point;
}();

exports.default = Point;

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parallel = __webpack_require__(98);

var _parallel2 = _interopRequireDefault(_parallel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
    function Point(ponit1, point2) {
        var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

        _classCallCheck(this, Point);

        this.ponit1 = ponit1;
        this.point2 = point2;

        this.style = style;

        this.id = id;

        this.initDraw();
    }

    _createClass(Point, [{
        key: 'setPos',
        value: function setPos(ponit1, point2) {
            this.ponit1 = ponit1;
            this.point2 = point2;

            this.draw();
        }
    }, {
        key: 'setStyle',
        value: function setStyle(style) {
            this.style = Object.assign({}, this.style, style);

            this.draw();
        }
    }, {
        key: 'initDraw',
        value: function initDraw() {
            this.displayLayer = document.createElementNS(_parallel2.default.NAMESPACE, 'line');
            this.draw();
        }
    }, {
        key: 'draw',
        value: function draw() {
            $(this.displayLayer).attr({
                id: this.id,
                x1: this.ponit1.x,
                y1: this.ponit1.y,
                x2: this.point2.x,
                y2: this.point2.y
            }).attr(this.style);
        }
    }]);

    return Point;
}();

exports.default = Point;

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parallel = __webpack_require__(98);

var _parallel2 = _interopRequireDefault(_parallel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Arc = function () {
    function Arc(center, vector1, vector2, r) {
        var style = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
        var id = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
        var closed = arguments[6];

        _classCallCheck(this, Arc);

        this.center = center;
        this.vector1 = vector1;
        this.vector2 = vector2;
        this.r = r;

        this.style = style;
        this.supStyle = style;

        this.id = id;

        this.closed = closed;

        this.initVector1_Y = vector1.y > 0 ? 1 : -1;
        this.initVector2_Y = vector2.y > 0 ? 1 : -1;

        this.initDraw();
    }

    _createClass(Arc, [{
        key: 'setCenter',
        value: function setCenter(center) {
            this.center = center;
            this.draw();
        }
    }, {
        key: 'setVector',
        value: function setVector(vector1, vector2) {
            this.vector1 = vector1;
            this.vector2 = vector2;
            this.draw();
        }
    }, {
        key: 'setStyle',
        value: function setStyle(style) {
            this.style = Object.assign({}, this.style, style);
            this.draw();
        }
    }, {
        key: 'setSupStyle',
        value: function setSupStyle(style) {
            this.supStyle = Object.assign({}, this.supStyle, style);
            this.draw();
        }
    }, {
        key: 'initDraw',
        value: function initDraw() {
            this.displayLayer = document.createElementNS(_parallel2.default.NAMESPACE, "path");
            this.supDisplayLayer = document.createElementNS(_parallel2.default.NAMESPACE, "path"); //supplementary angles
            this.draw();
        }
    }, {
        key: 'draw',
        value: function draw() {
            var a1 = Math.atan2(this.vector1.y, this.vector1.x);
            var a2 = Math.atan2(this.vector2.y, this.vector2.x);

            if (a1 == Math.PI) {
                a1 = a1 * (Math.atan2(this.vector1.y + this.initVector1_Y, this.vector1.x) > 0 ? 1 : -1);
            }

            if (a2 == Math.PI) {
                a2 = a2 * (Math.atan2(this.vector2.y + this.initVector2_Y, this.vector2.x) > 0 ? 1 : -1);
            }

            var x1 = this.center.x + this.r * Math.cos(a1);
            var y1 = this.center.y + this.r * Math.sin(a1);
            var x2 = this.center.x + this.r * Math.cos(a2);
            var y2 = this.center.y + this.r * Math.sin(a2);

            this.arc = (Math.PI * 4 + a2 - a1) % (Math.PI * 2);

            this.arcLabel = (Math.PI * 4 + Math.atan2(this.vector2.y, this.vector2.x) - this.arc / 2) % (Math.PI * 2);
            this.arcSupLabel = this.arcLabel - Math.PI;

            var bLarge = this.arc >= Math.PI ? 1 : 0;
            var bLargeSup = this.arc >= Math.PI ? 0 : 1;

            var closed = this.closed ? ["L", this.center.x, this.center.y, "Z"].join(" ") : "";

            $(this.displayLayer).attr(this.style).attr({
                d: ["M", x1, y1, "A", this.r, this.r, 0, bLarge, 1, x2, y2, closed].join(" ")
            });

            $(this.supDisplayLayer).attr(this.supStyle).attr({
                d: ["M", x1, y1 + 0.1, "A", this.r, this.r, this.arc == 0 ? 1 : 0, bLargeSup, 0, x2, y2].join(" ")
            });
        }
    }, {
        key: 'getArc',
        value: function getArc() {
            return Math.floor(this.arc * 180 / Math.PI);
        }
    }, {
        key: 'getSupArc',
        value: function getSupArc() {
            return 360 - this.getArc();
        }
    }]);

    return Arc;
}();

exports.default = Arc;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var CONST = {
    NAMESPACE: "http://www.w3.org/2000/svg",
    TOUCH_RADIUS: 10,
    PONIT_RADIUS: 3
};

exports.default = CONST;

/***/ })

/******/ });