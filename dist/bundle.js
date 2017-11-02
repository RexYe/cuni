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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var qlextent = qlextent || {};
//属性和方法分离
qlextent.extendClass = function (classDef, functions) {
    for (var fn in functions)
        classDef.prototype[fn] = functions[fn];

    classDef.thisClass = classDef.prototype;
};
//继承
qlextent.inherit = function (subClass, superClass) {
    var F = function () { };
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    //Decouple the subclass and superclass, useful when calling overridden function in superclass.
    subClass.superClass = superClass.prototype;
};

/* unused harmony default export */ var _unused_webpack_default_export = (qlextent);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__extent_qlextent_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_observer_js__ = __webpack_require__(2);


// console.log(qlextent);
console.log(__WEBPACK_IMPORTED_MODULE_1__core_observer_js__["a" /* default */]);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__extent_qlextent_js__ = __webpack_require__(0);

// console.log(qlextent);
function definePro (obj,key,val) {
	observer(val);
	Object.defineProperty(obj,key, {
		enumerable: true,
		configurable: true,
		get: function () {
			return val;
		},
		set: function (newVal) {
			val = newVal;
			console.log('key被监听');
		}
	});
}

function observer (obj) {
	if(!obj || typeof obj !== 'object') {
		return ;
	}
	else{
		Object.keys(obj).forEach(function (key) {
			definePro(obj,key,obj[key]);
		});
	}
}
function Dep () {
	this.subs = [];
}

var library = {
	book1: {
		name: ''
	},
	book2: ' '
}

observer(library);
library.book1.name = 'Vue权威指南';
library.book2 = 'nobook';

/* harmony default export */ __webpack_exports__["a"] = (observer);

/***/ })
/******/ ]);