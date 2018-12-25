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
/******/ 	return __webpack_require__(__webpack_require__.s = 160);
/******/ })
/************************************************************************/
/******/ ({

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _point = __webpack_require__(38);

var _point2 = _interopRequireDefault(_point);

var _cylinder = __webpack_require__(74);

var _cylinder2 = _interopRequireDefault(_cylinder);

var _cone = __webpack_require__(75);

var _cone2 = _interopRequireDefault(_cone);

var _cube = __webpack_require__(162);

var _cube2 = _interopRequireDefault(_cube);

var _triangular_prism = __webpack_require__(163);

var _triangular_prism2 = _interopRequireDefault(_triangular_prism);

var _triangular_pyramid = __webpack_require__(164);

var _triangular_pyramid2 = _interopRequireDefault(_triangular_pyramid);

var _quadrangular_pyramid = __webpack_require__(165);

var _quadrangular_pyramid2 = _interopRequireDefault(_quadrangular_pyramid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Point = _point2.default;
window.Cylinder = _cylinder2.default;
window.Cone = _cone2.default;
window.Cube = _cube2.default;
window.TriangularPrism = _triangular_prism2.default;
window.TriangularPyramid = _triangular_pyramid2.default;
window.QuadrangularPyramid = _quadrangular_pyramid2.default;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.angle_between_2_lines = angle_between_2_lines;
exports.normalVector = normalVector;
function angle_between_2_lines(u1, u2) {
    var cosAlpha = Math.abs(u1[0] * u2[0] + u1[1] * u2[1] + u1[2] * u2[2]) / (Math.sqrt(u1[0] * u1[0] + u1[1] * u1[1] + u1[2] * u1[2]) * Math.sqrt(u2[0] * u2[0] + u2[1] * u2[1] + u2[2] * u2[2]));

    return Math.acos(cosAlpha);
}

function normalVector(p1, p2, p3) {
    var u1 = [];
    var u2 = [];
    u1[0] = p1.x - p2.x;
    u1[1] = p1.y - p2.y;
    u1[2] = p1.z - p2.z;

    u2[0] = p1.x - p3.x;
    u2[1] = p1.y - p3.y;
    u2[2] = p1.z - p3.z;

    return [u1[1] * u2[2] - u1[2] * u2[1], u1[2] * u2[0] - u1[0] * u2[2], u1[0] * u2[1] - u1[1] * u2[0]];
}

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cylinder = __webpack_require__(74);

var _cylinder2 = _interopRequireDefault(_cylinder);

var _polygon = __webpack_require__(46);

var _polygon2 = _interopRequireDefault(_polygon);

var _point = __webpack_require__(38);

var _point2 = _interopRequireDefault(_point);

var _shape3D = __webpack_require__(32);

var _shape3D2 = _interopRequireDefault(_shape3D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cube = function (_Cylinder) {
    _inherits(Cube, _Cylinder);

    function Cube(height) {
        _classCallCheck(this, Cube);

        var radius = Math.round(height / Math.sqrt(2));

        var _this = _possibleConstructorReturn(this, (Cube.__proto__ || Object.getPrototypeOf(Cube)).call(this, radius, height, _shape3D2.default.CUBE.MAX_LAYER));

        _this.botFace.setFillColor(_shape3D2.default.DEFAULT_COLOR);
        _this.topFace.setFillColor(_shape3D2.default.DEFAULT_COLOR);
        _this.botFace.setStrokeWidth(0.5);
        _this.topFace.setStrokeWidth(0.5);
        for (var i = 0; i < _this.maxLayer; i++) {
            _this.polygons[i].setStrokeWidth(0.5);
        }
        return _this;
    }

    _createClass(Cube, [{
        key: 'initDeploy',
        value: function initDeploy() {

            this.botFace.turnRight();

            var arrLeft = [this.polygons[2], this.botFace];
            this.polygons[2].turnLeft();

            var arrRight = [this.topFace, this.polygons[0], this.botFace];
            this.topFace.turnLeft();
            this.polygons[0].turnRight();

            var botFace = this.polygons[3];
            botFace.turnAround();

            var topFace = this.polygons[1];

            var step = 0;

            for (var i = 0; i < this.maxLayer; i++) {
                this.polygons[i].setOpacity(0.8);
            }
            this.botFace.setOpacity(0.8);
            this.topFace.setOpacity(0.8);
            this.draw();

            setTimeout(this.deploy.bind(this, arrLeft, arrRight, botFace, topFace, step), 100);
        }
    }, {
        key: 'initDraw',
        value: function initDraw() {
            this.transformY(30);
            this.transformX(30);
        }
    }]);

    return Cube;
}(_cylinder2.default);

exports.default = Cube;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cylinder = __webpack_require__(74);

var _cylinder2 = _interopRequireDefault(_cylinder);

var _polygon = __webpack_require__(46);

var _polygon2 = _interopRequireDefault(_polygon);

var _point = __webpack_require__(38);

var _point2 = _interopRequireDefault(_point);

var _shape3D = __webpack_require__(32);

var _shape3D2 = _interopRequireDefault(_shape3D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TriangularPrism = function (_Cylinder) {
    _inherits(TriangularPrism, _Cylinder);

    function TriangularPrism(width, height) {
        _classCallCheck(this, TriangularPrism);

        var radius = width / (2 * Math.cos(30 / 180 * Math.PI));

        var _this = _possibleConstructorReturn(this, (TriangularPrism.__proto__ || Object.getPrototypeOf(TriangularPrism)).call(this, radius, height, _shape3D2.default.TRIANGULAR_PRISM.MAX_LAYER));

        _this.botFace.setStrokeWidth(0.5);
        _this.topFace.setStrokeWidth(0.5);
        for (var i = 0; i < _this.maxLayer; i++) {
            _this.polygons[i].setStrokeWidth(0.5);
        }
        return _this;
    }

    _createClass(TriangularPrism, [{
        key: 'initDraw',
        value: function initDraw() {
            this.transformY(40);
            this.transformX(20);
        }
    }]);

    return TriangularPrism;
}(_cylinder2.default);

exports.default = TriangularPrism;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cone = __webpack_require__(75);

var _cone2 = _interopRequireDefault(_cone);

var _polygon = __webpack_require__(46);

var _polygon2 = _interopRequireDefault(_polygon);

var _point = __webpack_require__(38);

var _point2 = _interopRequireDefault(_point);

var _shape3D = __webpack_require__(32);

var _shape3D2 = _interopRequireDefault(_shape3D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TriangularPyramid = function (_Cone) {
    _inherits(TriangularPyramid, _Cone);

    function TriangularPyramid(width, height) {
        _classCallCheck(this, TriangularPyramid);

        var radius = width / (2 * Math.cos(30 / 180 * Math.PI));

        var _this = _possibleConstructorReturn(this, (TriangularPyramid.__proto__ || Object.getPrototypeOf(TriangularPyramid)).call(this, radius, height, _shape3D2.default.TRIANGULAR_PYRAMID.MAX_LAYER));

        _this.rootIdx = 0;
        _this.openIdx = 1;
        _this.botFace.setStrokeWidth(0.5);
        for (var i = 0; i < _this.maxLayer; i++) {
            _this.polygons[i].setStrokeWidth(0.5);
        }
        return _this;
    }

    _createClass(TriangularPyramid, [{
        key: 'initDraw',
        value: function initDraw() {
            this.transformY(-20);
            this.transformX(20);
        }
    }]);

    return TriangularPyramid;
}(_cone2.default);

exports.default = TriangularPyramid;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cone = __webpack_require__(75);

var _cone2 = _interopRequireDefault(_cone);

var _polygon = __webpack_require__(46);

var _polygon2 = _interopRequireDefault(_polygon);

var _point = __webpack_require__(38);

var _point2 = _interopRequireDefault(_point);

var _shape3D = __webpack_require__(32);

var _shape3D2 = _interopRequireDefault(_shape3D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuadrangularPyramid = function (_Cone) {
    _inherits(QuadrangularPyramid, _Cone);

    function QuadrangularPyramid(width, height) {
        _classCallCheck(this, QuadrangularPyramid);

        var radius = Math.round(width / Math.sqrt(2));

        var _this = _possibleConstructorReturn(this, (QuadrangularPyramid.__proto__ || Object.getPrototypeOf(QuadrangularPyramid)).call(this, radius, height, _shape3D2.default.QUADRANGULAR_PYRAMID.MAX_LAYER));

        for (var i = 0; i < _this.polygons.length; i++) {
            _this.polygons[i].setOpacity(0.4 + i * 0.1);
        }
        _this.rootIdx = 1;
        _this.openIdx = 2;
        _this.botFace.setStrokeWidth(0.5);
        for (var i = 0; i < _this.maxLayer; i++) {
            _this.polygons[i].setStrokeWidth(0.5);
        }
        return _this;
    }

    _createClass(QuadrangularPyramid, [{
        key: 'initDraw',
        value: function initDraw() {
            this.transformY(20);
            this.transformX(20);
        }
    }]);

    return QuadrangularPyramid;
}(_cone2.default);

exports.default = QuadrangularPyramid;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var CONST = {
	SVG_VIEW: {
		WIDTH: 800,
		HEIGHT: 600
	},
	INIT_X_ANGLE: 20,
	INIT_Y_ANGLE: 20,
	INIT_Z_ANGLE: 20,
	CYLINDER: {
		MAX_LAYER: 50,
		SPEED: 40,
		MAX_STEP: 100
	},
	CONE: {
		HEIGHT: 400,
		RADIUS: 150,
		MAX_LAYER: 50
	},
	CUBE: {
		MAX_LAYER: 4
	},
	TRIANGULAR_PRISM: {
		MAX_LAYER: 3
	},
	TRIANGULAR_PYRAMID: {
		MAX_LAYER: 3
	},
	QUADRANGULAR_PYRAMID: {
		MAX_LAYER: 4
	},
	DEFAULT_COLOR: '#99c8ff',
	BOT_FACE_COLOR: '#7db0ba',
	STROKE_WIDTH: 0.1,
	NAMESPACE: "http://www.w3.org/2000/svg"
};

exports.default = CONST;

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
    function Point(x, y, z) {
        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;
        this.z = z;
    }

    _createClass(Point, [{
        key: "setPos",
        value: function setPos(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
    }, {
        key: "transformX",
        value: function transformX(angle) {
            var alpha = angle / 180 * Math.PI;
            this.transformX_alpha(Math.sin(alpha), Math.cos(alpha));
        }
    }, {
        key: "transformX_alpha",
        value: function transformX_alpha(sin, cos) {
            this.multipleMatrix([[1, 0, 0, 0], [0, cos, sin, 0], [0, -sin, cos, 0], [0, 0, 0, 1]]);
        }
    }, {
        key: "transformY",
        value: function transformY(angle) {
            var alpha = angle / 180 * Math.PI;
            this.transformY_alpha(Math.sin(alpha), Math.cos(alpha));
        }
    }, {
        key: "transformY_alpha",
        value: function transformY_alpha(sin, cos) {
            this.multipleMatrix([[cos, 0, -sin, 0], [0, 1, 0, 0], [sin, 0, cos, 0], [0, 0, 0, 1]]);
        }
    }, {
        key: "transformZ",
        value: function transformZ(angle) {
            var alpha = angle / 180 * Math.PI;
            this.transformZ_alpha(Math.sin(alpha), Math.cos(alpha));
        }
    }, {
        key: "transformZ_alpha",
        value: function transformZ_alpha(sin, cos) {
            this.multipleMatrix([[cos, sin, 0, 0], [-sin, cos, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]);
        }
    }, {
        key: "multipleMatrix",
        value: function multipleMatrix(m1) {
            var a = [0, 0, 0, 0];
            var m2 = [this.x, this.y, this.z, 1];
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
                    a[i] += m1[i][j] * m2[j];
                }
            }

            this.x = a[0];
            this.y = a[1];
            this.z = a[2];
        }
    }, {
        key: "transformRandom",
        value: function transformRandom(angle, p1, p2) {
            var alpha = angle / 180 * Math.PI;
            this.transformRandom_alpha(Math.sin(alpha), Math.cos(alpha), p1, p2);
        }
    }, {
        key: "transformRandom_alpha",
        value: function transformRandom_alpha(sin, cos, p1, p2) {

            var a = p2.x - p1.x;
            var b = p2.y - p1.y;
            var c = p2.z - p1.z;

            if (a == 0 && b == 0) {
                this.x -= p1.x;
                this.y -= p1.y;
                this.transformZ_alpha(-sin, cos);
                this.x += p1.x;
                this.y += p1.y;
                return;
            }

            if (a == 0 && c == 0) {
                this.x -= p1.x;
                this.z -= p1.z;
                this.transformY_alpha(-sin, cos);
                this.x += p1.x;
                this.z += p1.z;
                return;
            }

            if (c == 0 && b == 0) {
                this.y -= p1.y;
                this.z -= p1.z;
                this.transformX_alpha(-sin, cos);
                this.y += p1.y;
                this.z += p1.z;
                return;
            }

            //step 1
            this.x -= p1.x;
            this.y -= p1.y;
            this.z -= p1.z;

            //step 2
            var sinAlpha = a / Math.sqrt(a * a + c * c);
            var cosAlpha = c / Math.sqrt(a * a + c * c);
            this.transformY_alpha(sinAlpha, cosAlpha);

            //step 3
            sinAlpha = b / Math.sqrt(a * a + b * b + c * c);
            cosAlpha = Math.sqrt(a * a + c * c) / Math.sqrt(a * a + b * b + c * c);
            this.multipleMatrix([[1, 0, 0, 0], [0, cosAlpha, -sinAlpha, 0], [0, sinAlpha, cosAlpha, 0], [0, 0, 0, 1]]);

            //step 4
            this.transformZ_alpha(sin, cos);

            //step 5
            sinAlpha = b / Math.sqrt(a * a + b * b + c * c);
            cosAlpha = Math.sqrt(a * a + c * c) / Math.sqrt(a * a + b * b + c * c);
            this.transformX_alpha(sinAlpha, cosAlpha);

            //step 6
            sinAlpha = a / Math.sqrt(a * a + c * c);
            cosAlpha = c / Math.sqrt(a * a + c * c);
            this.multipleMatrix([[cosAlpha, 0, sinAlpha, 0], [0, 1, 0, 0], [-sinAlpha, 0, cosAlpha, 0], [0, 0, 0, 1]]);

            //step 7
            this.x += p1.x;
            this.y += p1.y;
            this.z += p1.z;
        }
    }, {
        key: "scale",
        value: function scale(ratio) {
            this.x *= ratio;
            this.y *= ratio;
            this.z *= ratio;
        }
    }, {
        key: "copy",
        value: function copy() {
            return new Point(this.x, this.y, this.z);
        }
    }]);

    return Point;
}();

exports.default = Point;

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _shape3D = __webpack_require__(32);

var _shape3D2 = _interopRequireDefault(_shape3D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Polygon = function () {
    function Polygon() {
        var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
        var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _shape3D2.default.DEFAULT_COLOR;

        _classCallCheck(this, Polygon);

        this.points = points;
        this.opacity = opacity;
        this.color = color;
        this.strokeWidth = _shape3D2.default.STROKE_WIDTH;
    }

    _createClass(Polygon, [{
        key: "draw",
        value: function draw() {
            var poly = document.createElementNS(_shape3D2.default.NAMESPACE, "polygon");
            var arrP = "";
            for (var i = 0; i < this.points.length; i++) {
                arrP += this.points[i].x + ',' + this.points[i].y + ' ';
            }

            return jQuery(poly).attr({
                'fill': this.color,
                'stroke-width': this.strokeWidth,
                'stroke': '#6e6c6e',
                'opacity': this.opacity,
                'points': arrP
            });
        }
    }, {
        key: "transformX",
        value: function transformX(angle) {
            for (var i = 0; i < this.points.length; i++) {
                this.points[i].transformX(angle);
            }
        }
    }, {
        key: "transformY",
        value: function transformY(angle) {
            for (var i = 0; i < this.points.length; i++) {
                this.points[i].transformY(angle);
            }
        }
    }, {
        key: "transformZ",
        value: function transformZ(angle) {
            for (var i = 0; i < this.points.length; i++) {
                this.points[i].transformZ(angle);
            }
        }
    }, {
        key: "transformRandom",
        value: function transformRandom(angle, p1, p2) {
            for (var i = 0; i < this.points.length; i++) {
                this.points[i].transformRandom(angle, p1, p2);
            }
        }
    }, {
        key: "transformRandom_alpha",
        value: function transformRandom_alpha(sin, cos, p1, p2) {
            for (var i = 0; i < this.points.length; i++) {
                this.points[i].transformRandom_alpha(sin, cos, p1, p2);
            }
        }
    }, {
        key: "scale",
        value: function scale(ratio) {
            for (var i = 0; i < this.points.length; i++) {
                this.points[i].scale(ratio);
            }
        }
    }, {
        key: "setOpacity",
        value: function setOpacity(opacity) {
            this.opacity = opacity;
        }
    }, {
        key: "setFillColor",
        value: function setFillColor(fillColor) {
            this.color = fillColor;
        }
    }, {
        key: "setStrokeWidth",
        value: function setStrokeWidth(w) {
            this.strokeWidth = w;
        }
    }, {
        key: "turnLeft",
        value: function turnLeft() {
            var length = this.points.length;
            var lastPoint = this.points[length - 1];

            this.points = this.points.slice(0, length - 1);
            this.points.unshift(lastPoint);
        }
    }, {
        key: "turnRight",
        value: function turnRight() {
            var length = this.points.length;
            var firstPoint = this.points[0];

            this.points = this.points.slice(1, length);
            this.points.push(firstPoint);
        }
    }, {
        key: "turnAround",
        value: function turnAround() {
            this.turnRight();
            this.turnRight();
        }
    }]);

    return Polygon;
}();

exports.default = Polygon;

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _shape = __webpack_require__(99);

var _shape2 = _interopRequireDefault(_shape);

var _polygon = __webpack_require__(46);

var _polygon2 = _interopRequireDefault(_polygon);

var _point = __webpack_require__(38);

var _point2 = _interopRequireDefault(_point);

var _shape3D = __webpack_require__(32);

var _shape3D2 = _interopRequireDefault(_shape3D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cylinder = function (_Shape) {
    _inherits(Cylinder, _Shape);

    function Cylinder(radius, height) {
        var maxLayer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _shape3D2.default.CYLINDER.MAX_LAYER;

        _classCallCheck(this, Cylinder);

        var _this = _possibleConstructorReturn(this, (Cylinder.__proto__ || Object.getPrototypeOf(Cylinder)).call(this));

        _this.polygons = [];
        _this.botFace;
        _this.topFace;

        _this.initPoint = new _point2.default(radius, -height / 2, 0);
        _this.radius = radius;
        _this.height = height;
        _this.maxLayer = maxLayer;
        _this.topPoint = new _point2.default(0, -height / 2, 0);

        _this.init();
        return _this;
    }

    _createClass(Cylinder, [{
        key: 'init',
        value: function init() {
            var tmpPoint;
            var prevPoint;

            var listBotFace = [];
            var listTopFace = [];

            var prevPoint = this.initPoint.copy();

            for (var i = 1; i <= this.maxLayer; i++) {
                var alpha = i / this.maxLayer * 2 * Math.PI;

                var cosAlpha = Math.cos(alpha);
                var sinAlpha = Math.sin(alpha);

                tmpPoint = new _point2.default(cosAlpha * this.radius, this.initPoint.y, -sinAlpha * this.radius);

                var tmpPointAddHeight = new _point2.default(tmpPoint.x, tmpPoint.y + this.height, tmpPoint.z);
                var prevPointAddHeight = new _point2.default(prevPoint.x, prevPoint.y + this.height, prevPoint.z);

                var opacity = Math.sin(i / this.maxLayer * 2 * Math.PI) > 0 ? 0.5 : 0.5 * Math.abs(Math.cos(i / this.maxLayer * 2 * Math.PI)) + 0.01;
                opacity = opacity < 0.25 ? 0.25 : opacity;

                var poly = new _polygon2.default([prevPoint, tmpPoint, tmpPointAddHeight, prevPointAddHeight], opacity);
                this.polygons.push(poly);

                listBotFace.push(prevPointAddHeight.copy());
                listTopFace.push(prevPoint.copy());

                prevPoint = tmpPoint.copy();
            }

            this.botFace = new _polygon2.default(listBotFace, 0.7, _shape3D2.default.BOT_FACE_COLOR);
            this.topFace = new _polygon2.default(listTopFace, 0.7, _shape3D2.default.BOT_FACE_COLOR);
        }
    }, {
        key: 'initDeploy',
        value: function initDeploy() {
            var length = this.polygons.length;
            var midpoint = Math.round(this.polygons.length / 2);

            var arrRight = this.polygons.slice(0, midpoint);
            var arrLeft = this.polygons.slice(midpoint - 1, length).reverse();

            for (var i = 0; i < this.maxLayer; i++) {
                this.polygons[i].setOpacity(0.8);
            }
            this.draw();

            var step = 0;

            setTimeout(this.deploy.bind(this, arrLeft, arrRight, this.botFace, this.topFace, step), 100);
        }
    }, {
        key: 'deploy',
        value: function deploy(arrLeft, arrRight, botFace, topFace, step) {
            var radiusSide = 360 / (this.polygons.length * _shape3D2.default.CYLINDER.MAX_STEP);

            if (step < _shape3D2.default.CYLINDER.MAX_STEP) {
                for (var i = 1; i < arrLeft.length; i++) {
                    for (var j = 0; j < i; j++) {
                        arrLeft[j].transformRandom(radiusSide, arrLeft[i].points[1], arrLeft[i].points[2]);
                    }
                }

                for (var i = 1; i < arrRight.length; i++) {
                    for (var j = 0; j < i; j++) {
                        arrRight[j].transformRandom(radiusSide, arrRight[i].points[3], arrRight[i].points[0]);
                    }
                }
            }

            var radiusBot = 90 / _shape3D2.default.CYLINDER.MAX_STEP;

            if (step < _shape3D2.default.CYLINDER.MAX_STEP) {
                botFace.transformRandom(radiusBot, arrRight[arrRight.length - 1].points[2], arrRight[arrRight.length - 1].points[3]);
                topFace.transformRandom(radiusBot, arrRight[arrRight.length - 1].points[0], arrRight[arrRight.length - 1].points[1]);
                this.topPoint.transformRandom(radiusBot, arrRight[arrRight.length - 1].points[0], arrRight[arrRight.length - 1].points[1]);
            }

            step++;

            this.draw();

            if (step < _shape3D2.default.CYLINDER.MAX_STEP) {
                setTimeout(this.deploy.bind(this, arrLeft, arrRight, botFace, topFace, step), _shape3D2.default.CYLINDER.SPEED);
            }
        }
    }, {
        key: 'initDraw',
        value: function initDraw() {
            this.transformY(90);
            this.transformX(20);
        }
    }, {
        key: 'draw',
        value: function draw() {
            $(this.gElm).empty();
            if (this.topPoint.z > 0) {
                $(this.gElm).append(this.botFace.draw());
            } else {
                $(this.gElm).append(this.topFace.draw());
            }
            _get(Cylinder.prototype.__proto__ || Object.getPrototypeOf(Cylinder.prototype), 'draw', this).call(this);
            if (this.topPoint.z > 0) {
                $(this.gElm).append(this.topFace.draw());
            } else {
                $(this.gElm).append(this.botFace.draw());
            }
        }
    }]);

    return Cylinder;
}(_shape2.default);

exports.default = Cylinder;

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _shape = __webpack_require__(99);

var _shape2 = _interopRequireDefault(_shape);

var _polygon = __webpack_require__(46);

var _polygon2 = _interopRequireDefault(_polygon);

var _point = __webpack_require__(38);

var _point2 = _interopRequireDefault(_point);

var _shape3D = __webpack_require__(32);

var _shape3D2 = _interopRequireDefault(_shape3D);

var _common = __webpack_require__(161);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cone = function (_Shape) {
    _inherits(Cone, _Shape);

    function Cone(radius, height) {
        var maxLayer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _shape3D2.default.CONE.MAX_LAYER;

        _classCallCheck(this, Cone);

        var _this = _possibleConstructorReturn(this, (Cone.__proto__ || Object.getPrototypeOf(Cone)).call(this));

        _this.polygons = [];

        _this.initPoint = new _point2.default(radius, height / 2, 0);
        _this.topPoint = new _point2.default(0, -height / 2, 0);

        _this.radius = radius;
        _this.maxLayer = maxLayer;
        _this.rootIdx = 15;
        _this.openIdx = 40;

        _this.init();
        return _this;
    }

    _createClass(Cone, [{
        key: 'init',
        value: function init() {
            var tmpPoint;
            var botPoints = [];

            var prevPoint = this.initPoint.copy();

            for (var i = 1; i <= this.maxLayer; i++) {
                var alpha = i / this.maxLayer * 2 * Math.PI;

                var cosAlpha = Math.cos(alpha);
                var sinAlpha = Math.sin(alpha);

                tmpPoint = new _point2.default(cosAlpha * this.radius, this.initPoint.y, -sinAlpha * this.radius);

                var opacity = Math.sin(i / this.maxLayer * 2 * Math.PI) > 0 ? 0.5 : 0.5 * Math.abs(Math.cos(i / this.maxLayer * 2 * Math.PI)) + 0.01;
                var poly = new _polygon2.default([prevPoint, tmpPoint, this.topPoint.copy()], opacity);
                this.polygons.push(poly);

                prevPoint = tmpPoint.copy();
                botPoints.push(prevPoint.copy());
            }
            this.botFace = new _polygon2.default(botPoints, 0.7, _shape3D2.default.BOT_FACE_COLOR);
        }
    }, {
        key: 'initDraw',
        value: function initDraw() {
            this.transformY(15);
            this.transformX(30);
        }
    }, {
        key: 'initDeploy',
        value: function initDeploy() {
            this.maxStep = 100;

            // var t = CONST.CONE.RADIUS * Math.sin(Math.PI/this.maxLayer);
            // this.maxAngle = Math.asin(Math.cos(Math.PI/this.maxLayer) * Math.sqrt(Math.pow(CONST.CONE.HEIGHT,2) + Math.pow(CONST.CONE.RADIUS,2))
            //     / (Math.sqrt(Math.pow(CONST.CONE.HEIGHT,2) + Math.pow(CONST.CONE.RADIUS,2) - t*t)));
            // this.maxAngle = 180 - 2 * this.maxAngle * 180 / Math.PI;
            var u1 = (0, _common.normalVector)(this.polygons[0].points[0], this.polygons[0].points[1], this.polygons[0].points[2]);
            var u2 = (0, _common.normalVector)(this.polygons[1].points[0], this.polygons[1].points[1], this.polygons[1].points[2]);
            this.maxAngle = (0, _common.angle_between_2_lines)(u1, u2) * 180 / Math.PI;
            if (this.maxLayer == 3) {
                this.maxAngle = 180 - this.maxAngle;
            }
            this.stepAngle = this.maxAngle / this.maxStep;

            u1 = (0, _common.normalVector)(this.polygons[0].points[0], this.polygons[0].points[1], this.polygons[0].points[2]);
            u2 = (0, _common.normalVector)(this.botFace.points[0], this.botFace.points[1], this.botFace.points[2]);

            this.stepBeta = (90 - (0, _common.angle_between_2_lines)(u1, u2) * 180 / Math.PI) / this.maxStep;
            this.stepGamma = 90 / this.maxStep;

            for (var i = 0; i < this.maxLayer; i++) {
                this.polygons[i].setOpacity(0.8);
            }

            this.draw();
            setTimeout(this.deploy.bind(this), 100);
        }
    }, {
        key: 'deploy',
        value: function deploy() {

            var leftFlank = [];
            var rightFlank = [];

            for (var i = this.openIdx; i > this.rootIdx; i--) {
                var p1 = this.polygons[i].points[0];
                var p2 = this.polygons[i].points[2];
                this.polygons[i].points[1].transformRandom(-this.stepAngle, p1, p2);
                for (var j = 0; j < leftFlank.length; j++) {
                    leftFlank[j].transformRandom(-this.stepAngle, p1, p2);
                }
                leftFlank.push(this.polygons[i]);
            }

            for (var i = this.openIdx + 1; i < this.maxLayer; i++) {
                var p1 = this.polygons[i].points[1];
                var p2 = this.polygons[i].points[2];
                this.polygons[i].points[0].transformRandom(this.stepAngle, p1, p2);
                for (var j = 0; j < rightFlank.length; j++) {
                    rightFlank[j].transformRandom(this.stepAngle, p1, p2);
                }
                rightFlank.push(this.polygons[i]);
            }

            for (var i = 0; i < this.rootIdx; i++) {
                var p1 = this.polygons[i].points[1];
                var p2 = this.polygons[i].points[2];
                this.polygons[i].points[0].transformRandom(this.stepAngle, p1, p2);
                for (var j = 0; j < rightFlank.length; j++) {
                    rightFlank[j].transformRandom(this.stepAngle, p1, p2);
                }
                rightFlank.push(this.polygons[i]);
            }

            var p1 = this.polygons[this.rootIdx].points[0].copy();
            var p2 = this.polygons[this.rootIdx].points[1].copy();

            for (var i = 0; i < this.maxLayer; i++) {
                this.polygons[i].transformRandom(this.stepBeta, p1, p2);
            }
            this.botFace.transformRandom(-this.stepGamma, p1, p2);

            this.draw();
            this.maxStep--;

            if (this.maxStep > 0) {
                setTimeout(this.deploy.bind(this), 40);
            }
        }
    }, {
        key: 'draw',
        value: function draw() {
            $(this.gElm).empty();
            if (this.polygons[0].points[2].z >= 0) {
                $(this.gElm).append(this.botFace.draw());
            }
            _get(Cone.prototype.__proto__ || Object.getPrototypeOf(Cone.prototype), 'draw', this).call(this);
            if (this.polygons[0].points[2].z < 0) {
                $(this.gElm).append(this.botFace.draw());
            }
        }
    }]);

    return Cone;
}(_shape2.default);

exports.default = Cone;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _shape3D = __webpack_require__(32);

var _shape3D2 = _interopRequireDefault(_shape3D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shape = function () {
    function Shape() {
        _classCallCheck(this, Shape);

        this.gElm = document.createElementNS(_shape3D2.default.NAMESPACE, "g");

        this.polygons = [];
        this.botFace;
        this.topFace;
    }

    _createClass(Shape, [{
        key: "init",
        value: function init() {}
    }, {
        key: "draw",
        value: function draw() {
            for (var i = 0; i < this.polygons.length; i++) {
                if ((this.polygons[i].points[0].z + this.polygons[i].points[2].z) / 2 < 0) $(this.gElm).append(this.polygons[i].draw());
            }
            for (var i = 0; i < this.polygons.length; i++) {
                if ((this.polygons[i].points[0].z + this.polygons[i].points[2].z) / 2 >= 0) $(this.gElm).append(this.polygons[i].draw());
            }
        }
    }, {
        key: "transformX",
        value: function transformX() {
            var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _shape3D2.default.INIT_X_ANGLE;

            for (var i = 0; i < this.polygons.length; i++) {
                this.polygons[i].transformX(angle);
            }

            if (this.botFace) {
                this.botFace.transformX(angle);
            }

            if (this.topFace) {
                this.topFace.transformX(angle);
            }

            if (this.topPoint) {
                this.topPoint.transformX(angle);
            }

            this.draw();
        }
    }, {
        key: "transformY",
        value: function transformY() {
            var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _shape3D2.default.INIT_Y_ANGLE;

            for (var i = 0; i < this.polygons.length; i++) {
                this.polygons[i].transformY(angle);
            }

            if (this.botFace) {
                this.botFace.transformY(angle);
            }

            if (this.topFace) {
                this.topFace.transformY(angle);
            }

            if (this.topPoint) {
                this.topPoint.transformY(angle);
            }

            this.draw();
        }
    }, {
        key: "transformZ",
        value: function transformZ() {
            var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _shape3D2.default.INIT_Z_ANGLE;

            for (var i = 0; i < this.polygons.length; i++) {
                this.polygons[i].transformZ(angle);
            }

            if (this.botFace) {
                this.botFace.transformZ(angle);
            }

            if (this.topFace) {
                this.topFace.transformZ(angle);
            }

            if (this.topPoint) {
                this.topPoint.transformZ(angle);
            }

            this.draw();
        }
    }, {
        key: "scale",
        value: function scale(ratio) {
            for (var i = 0; i < this.polygons.length; i++) {
                this.polygons[i].scale(ratio);
            }

            if (this.botFace) {
                this.botFace.scale(ratio);
            }

            if (this.topFace) {
                this.topFace.scale(ratio);
            }

            if (this.topPoint) {
                this.topPoint.scale(ratio);
            }
        }
    }, {
        key: "elm",
        get: function get() {
            return this.gElm;
        }
    }]);

    return Shape;
}();

exports.default = Shape;

/***/ })

/******/ });