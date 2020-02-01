module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Counter.bs.js":
/*!**********************************!*\
  !*** ./components/Counter.bs.js ***!
  \**********************************/
/*! exports provided: counterReducer, make, $$default, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counterReducer", function() { return counterReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "make", function() { return make; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$default", function() { return $$default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return $$default; });
/* harmony import */ var bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bs-platform/lib/es6/curry.js */ "./node_modules/bs-platform/lib/es6/curry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GlobalCount_bs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalCount.bs.js */ "./components/GlobalCount.bs.js");
// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE




function counterReducer(state, action) {
  return (
    /* record */
    [
    /* count */
    state[
    /* count */
    0] + 1 | 0]
  );
}

function Counter(Props) {
  var match = react__WEBPACK_IMPORTED_MODULE_1__["useReducer"](counterReducer,
  /* record */
  [
  /* count */
  0]);
  var dispatch = match[1];
  var match$1 = _GlobalCount_bs_js__WEBPACK_IMPORTED_MODULE_2__["useGlobalCount"](
  /* () */
  0);
  var globalDispatch = match$1[1];
  var countMsg = "Count: " + String(match[0][
  /* count */
  0]);
  var persistentCountMsg = "Persistent Count " + String(match$1[0]);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", undefined, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", undefined, countMsg), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
    onClick: function (param) {
      return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__["_1"](dispatch,
      /* Add */
      0);
    }
  }, "Add"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", undefined, persistentCountMsg), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
    onClick: function (param) {
      return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__["_1"](globalDispatch,
      /* Increment */
      0);
    }
  }, "Add"));
}

var make = Counter;
var $$default = Counter;

/* react Not a pure module */

/***/ }),

/***/ "./components/GlobalCount.bs.js":
/*!**************************************!*\
  !*** ./components/GlobalCount.bs.js ***!
  \**************************************/
/*! exports provided: current, increment, reducer, useGlobalCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "current", function() { return current; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGlobalCount", function() { return useGlobalCount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

var current =
/* record */
[
/* contents */
0];

function increment(param) {
  current[0] = current[0] + 1 | 0;
  return current;
}

function reducer(_state, action) {
  return increment(
  /* () */
  0)[0];
}

function useGlobalCount(param) {
  return react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](reducer, current[0]);
}


/* react Not a pure module */

/***/ }),

/***/ "./components/Header.bs.js":
/*!*********************************!*\
  !*** ./components/Header.bs.js ***!
  \*********************************/
/*! exports provided: styles, make, $$default, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "make", function() { return make; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$default", function() { return $$default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return $$default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE


var styles = {
  marginRight: "10px"
};

function Header(Props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", undefined, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    children: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      style: styles
    }, "Home")
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    children: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      style: styles
    }, "About")
  }));
}

var make = Header;
var $$default = Header;

/* react Not a pure module */

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/block.js":
/*!***************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/block.js ***!
  \***************************************************/
/*! exports provided: __, record, variant, simpleVariant, localModule, polyVar, spliceApply, spliceObjApply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__", function() { return __; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "record", function() { return record; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variant", function() { return variant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleVariant", function() { return simpleVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localModule", function() { return localModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyVar", function() { return polyVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spliceApply", function() { return spliceApply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spliceObjApply", function() { return spliceObjApply; });
function __(tag, block) {
  block.tag = tag;
  return block;
}

function record(meta, xs) {
  return Object.defineProperty(xs, Symbol.for("BsRecord"), {
    value: meta
  });
}

function variant(meta, tag, xs) {
  xs.tag = tag;
  return Object.defineProperty(xs, Symbol.for("BsVariant"), {
    value: meta
  });
}

function simpleVariant(meta, xs) {
  return Object.defineProperty(xs, Symbol.for("BsVariant"), {
    value: meta
  });
}

function localModule(meta, xs) {
  return Object.defineProperty(xs, Symbol.for("BsLocalModule"), {
    value: meta
  });
}

function polyVar(meta, xs) {
  return Object.defineProperty(xs, Symbol.for("BsPolyVar"), {
    value: meta
  });
}

function spliceApply(fn, args) {
  var i, argLen;
  argLen = args.length;
  var applied = [];

  for (i = 0; i < argLen - 1; ++i) {
    applied.push(args[i]);
  }

  var lastOne = args[argLen - 1];

  for (i = 0; i < lastOne.length; ++i) {
    applied.push(lastOne[i]);
  }

  return fn.apply(null, applied);
}

;

function spliceObjApply(obj, name, args) {
  var i, argLen;
  argLen = args.length;
  var applied = [];

  for (i = 0; i < argLen - 1; ++i) {
    applied.push(args[i]);
  }

  var lastOne = args[argLen - 1];

  for (i = 0; i < lastOne.length; ++i) {
    applied.push(lastOne[i]);
  }

  return obj[name].apply(obj, applied);
}

;

/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_array.js":
/*!********************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_array.js ***!
  \********************************************************/
/*! exports provided: caml_array_dup, caml_array_sub, caml_array_concat, caml_make_vect, caml_make_float_vect, caml_array_blit, caml_array_get, caml_array_set */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_array_dup", function() { return caml_array_dup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_array_sub", function() { return caml_array_sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_array_concat", function() { return caml_array_concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_make_vect", function() { return caml_make_vect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_make_float_vect", function() { return caml_make_float_vect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_array_blit", function() { return caml_array_blit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_array_get", function() { return caml_array_get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_array_set", function() { return caml_array_set; });
/* harmony import */ var _caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml_builtin_exceptions.js */ "./node_modules/bs-platform/lib/es6/caml_builtin_exceptions.js");


function caml_array_sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;

  while (j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  }

  ;
  return result;
}

function len(_acc, _l) {
  while (true) {
    var l = _l;
    var acc = _acc;

    if (l) {
      _l = l[1];
      _acc = l[0].length + acc | 0;
      continue;
    } else {
      return acc;
    }
  }

  ;
}

function fill(arr, _i, _l) {
  while (true) {
    var l = _l;
    var i = _i;

    if (l) {
      var x = l[0];
      var l$1 = x.length;
      var k = i;
      var j = 0;

      while (j < l$1) {
        arr[k] = x[j];
        k = k + 1 | 0;
        j = j + 1 | 0;
      }

      ;
      _l = l[1];
      _i = k;
      continue;
    } else {
      return (
        /* () */
        0
      );
    }
  }

  ;
}

function caml_array_concat(l) {
  var v = len(0, l);
  var result = new Array(v);
  fill(result, 0, l);
  return result;
}

function caml_array_set(xs, index, newval) {
  if (index < 0 || index >= xs.length) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_0__["invalid_argument"], "index out of bounds"];
  } else {
    xs[index] = newval;
    return (
      /* () */
      0
    );
  }
}

function caml_array_get(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_0__["invalid_argument"], "index out of bounds"];
  } else {
    return xs[index];
  }
}

function caml_make_vect(len, init) {
  var b = new Array(len);

  for (var i = 0, i_finish = len - 1 | 0; i <= i_finish; ++i) {
    b[i] = init;
  }

  return b;
}

function caml_make_float_vect(len) {
  var b = new Array(len);

  for (var i = 0, i_finish = len - 1 | 0; i <= i_finish; ++i) {
    b[i] = 0;
  }

  return b;
}

function caml_array_blit(a1, i1, a2, i2, len) {
  if (i2 <= i1) {
    for (var j = 0, j_finish = len - 1 | 0; j <= j_finish; ++j) {
      a2[j + i2 | 0] = a1[j + i1 | 0];
    }

    return (
      /* () */
      0
    );
  } else {
    for (var j$1 = len - 1 | 0; j$1 >= 0; --j$1) {
      a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
    }

    return (
      /* () */
      0
    );
  }
}

function caml_array_dup(prim) {
  return prim.slice(0);
}


/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_builtin_exceptions.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_builtin_exceptions.js ***!
  \*********************************************************************/
/*! exports provided: out_of_memory, sys_error, failure, invalid_argument, end_of_file, division_by_zero, not_found, match_failure, stack_overflow, sys_blocked_io, assert_failure, undefined_recursive_module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "out_of_memory", function() { return out_of_memory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sys_error", function() { return sys_error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalid_argument", function() { return invalid_argument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end_of_file", function() { return end_of_file; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "division_by_zero", function() { return division_by_zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not_found", function() { return not_found; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match_failure", function() { return match_failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stack_overflow", function() { return stack_overflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sys_blocked_io", function() { return sys_blocked_io; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert_failure", function() { return assert_failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undefined_recursive_module", function() { return undefined_recursive_module; });
var out_of_memory =
/* tuple */
["Out_of_memory", 0];
var sys_error =
/* tuple */
["Sys_error", -1];
var failure =
/* tuple */
["Failure", -2];
var invalid_argument =
/* tuple */
["Invalid_argument", -3];
var end_of_file =
/* tuple */
["End_of_file", -4];
var division_by_zero =
/* tuple */
["Division_by_zero", -5];
var not_found =
/* tuple */
["Not_found", -6];
var match_failure =
/* tuple */
["Match_failure", -7];
var stack_overflow =
/* tuple */
["Stack_overflow", -8];
var sys_blocked_io =
/* tuple */
["Sys_blocked_io", -9];
var assert_failure =
/* tuple */
["Assert_failure", -10];
var undefined_recursive_module =
/* tuple */
["Undefined_recursive_module", -11];
out_of_memory.tag = 248;
sys_error.tag = 248;
failure.tag = 248;
invalid_argument.tag = 248;
end_of_file.tag = 248;
division_by_zero.tag = 248;
not_found.tag = 248;
match_failure.tag = 248;
stack_overflow.tag = 248;
sys_blocked_io.tag = 248;
assert_failure.tag = 248;
undefined_recursive_module.tag = 248;

/*  Not a pure module */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_bytes.js":
/*!********************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_bytes.js ***!
  \********************************************************/
/*! exports provided: caml_create_bytes, caml_fill_bytes, get, bytes_to_string, caml_blit_bytes, caml_blit_string, bytes_of_string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_create_bytes", function() { return caml_create_bytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_fill_bytes", function() { return caml_fill_bytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bytes_to_string", function() { return bytes_to_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_blit_bytes", function() { return caml_blit_bytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_blit_string", function() { return caml_blit_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bytes_of_string", function() { return bytes_of_string; });
/* harmony import */ var _caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml_builtin_exceptions.js */ "./node_modules/bs-platform/lib/es6/caml_builtin_exceptions.js");


function get(s, i) {
  if (i < 0 || i >= s.length) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_0__["invalid_argument"], "index out of bounds"];
  } else {
    return s[i];
  }
}

function caml_fill_bytes(s, i, l, c) {
  if (l > 0) {
    for (var k = i, k_finish = (l + i | 0) - 1 | 0; k <= k_finish; ++k) {
      s[k] = c;
    }

    return (
      /* () */
      0
    );
  } else {
    return 0;
  }
}

function caml_create_bytes(len) {
  if (len < 0) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_0__["invalid_argument"], "String.create"];
  } else {
    var result = new Array(len);

    for (var i = 0, i_finish = len - 1 | 0; i <= i_finish; ++i) {
      result[i] =
      /* "\000" */
      0;
    }

    return result;
  }
}

function caml_blit_bytes(s1, i1, s2, i2, len) {
  if (len > 0) {
    if (s1 === s2) {
      var s1$1 = s1;
      var i1$1 = i1;
      var i2$1 = i2;
      var len$1 = len;

      if (i1$1 < i2$1) {
        var range_a = (s1$1.length - i2$1 | 0) - 1 | 0;
        var range_b = len$1 - 1 | 0;
        var range = range_a > range_b ? range_b : range_a;

        for (var j = range; j >= 0; --j) {
          s1$1[i2$1 + j | 0] = s1$1[i1$1 + j | 0];
        }

        return (
          /* () */
          0
        );
      } else if (i1$1 > i2$1) {
        var range_a$1 = (s1$1.length - i1$1 | 0) - 1 | 0;
        var range_b$1 = len$1 - 1 | 0;
        var range$1 = range_a$1 > range_b$1 ? range_b$1 : range_a$1;

        for (var k = 0; k <= range$1; ++k) {
          s1$1[i2$1 + k | 0] = s1$1[i1$1 + k | 0];
        }

        return (
          /* () */
          0
        );
      } else {
        return 0;
      }
    } else {
      var off1 = s1.length - i1 | 0;

      if (len <= off1) {
        for (var i = 0, i_finish = len - 1 | 0; i <= i_finish; ++i) {
          s2[i2 + i | 0] = s1[i1 + i | 0];
        }

        return (
          /* () */
          0
        );
      } else {
        for (var i$1 = 0, i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1) {
          s2[i2 + i$1 | 0] = s1[i1 + i$1 | 0];
        }

        for (var i$2 = off1, i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2) {
          s2[i2 + i$2 | 0] =
          /* "\000" */
          0;
        }

        return (
          /* () */
          0
        );
      }
    }
  } else {
    return 0;
  }
}

function bytes_to_string(a) {
  var bytes = a;
  var i = 0;
  var len = a.length;
  var s = "";
  var s_len = len;

  if (i === 0 && len <= 4096 && len === bytes.length) {
    return String.fromCharCode.apply(null, bytes);
  } else {
    var offset = 0;

    while (s_len > 0) {
      var next = s_len < 1024 ? s_len : 1024;
      var tmp_bytes = new Array(next);
      caml_blit_bytes(bytes, offset, tmp_bytes, 0, next);
      s = s + String.fromCharCode.apply(null, tmp_bytes);
      s_len = s_len - next | 0;
      offset = offset + next | 0;
    }

    ;
    return s;
  }
}

function caml_blit_string(s1, i1, s2, i2, len) {
  if (len > 0) {
    var off1 = s1.length - i1 | 0;

    if (len <= off1) {
      for (var i = 0, i_finish = len - 1 | 0; i <= i_finish; ++i) {
        s2[i2 + i | 0] = s1.charCodeAt(i1 + i | 0);
      }

      return (
        /* () */
        0
      );
    } else {
      for (var i$1 = 0, i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1) {
        s2[i2 + i$1 | 0] = s1.charCodeAt(i1 + i$1 | 0);
      }

      for (var i$2 = off1, i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2) {
        s2[i2 + i$2 | 0] =
        /* "\000" */
        0;
      }

      return (
        /* () */
        0
      );
    }
  } else {
    return 0;
  }
}

function bytes_of_string(s) {
  var len = s.length;
  var res = new Array(len);

  for (var i = 0, i_finish = len - 1 | 0; i <= i_finish; ++i) {
    res[i] = s.charCodeAt(i);
  }

  return res;
}


/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_exceptions.js":
/*!*************************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_exceptions.js ***!
  \*************************************************************/
/*! exports provided: caml_set_oo_id, caml_fresh_oo_id, create, caml_is_extension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_set_oo_id", function() { return caml_set_oo_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_fresh_oo_id", function() { return caml_fresh_oo_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_is_extension", function() { return caml_is_extension; });
var id =
/* record */
[
/* contents */
0];

function caml_set_oo_id(b) {
  b[1] = id[0];
  id[0] += 1;
  return b;
}

function caml_fresh_oo_id(param) {
  id[0] += 1;
  return id[0];
}

function create(str) {
  var v_001 = caml_fresh_oo_id(
  /* () */
  0);
  var v =
  /* tuple */
  [str, v_001];
  v.tag = 248;
  return v;
}

function caml_is_extension(e) {
  if (e === undefined) {
    return false;
  } else if (e.tag === 248) {
    return true;
  } else {
    var slot = e[0];

    if (slot !== undefined) {
      return slot.tag === 248;
    } else {
      return false;
    }
  }
}


/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_format.js":
/*!*********************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_format.js ***!
  \*********************************************************/
/*! exports provided: caml_format_float, caml_format_int, caml_nativeint_format, caml_int32_format, caml_float_of_string, caml_int64_format, caml_int_of_string, caml_int32_of_string, caml_int64_of_string, caml_nativeint_of_string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_format_float", function() { return caml_format_float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_format_int", function() { return caml_format_int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_nativeint_format", function() { return caml_nativeint_format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_int32_format", function() { return caml_int32_format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_float_of_string", function() { return caml_float_of_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_int64_format", function() { return caml_int64_format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_int_of_string", function() { return caml_int_of_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_int32_of_string", function() { return caml_int32_of_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_int64_of_string", function() { return caml_int64_of_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_nativeint_of_string", function() { return caml_nativeint_of_string; });
/* harmony import */ var _caml_int32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml_int32.js */ "./node_modules/bs-platform/lib/es6/caml_int32.js");
/* harmony import */ var _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caml_int64.js */ "./node_modules/bs-platform/lib/es6/caml_int64.js");
/* harmony import */ var _caml_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caml_utils.js */ "./node_modules/bs-platform/lib/es6/caml_utils.js");
/* harmony import */ var _caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caml_builtin_exceptions.js */ "./node_modules/bs-platform/lib/es6/caml_builtin_exceptions.js");





function parse_digit(c) {
  if (c >= 65) {
    if (c >= 97) {
      if (c >= 123) {
        return -1;
      } else {
        return c - 87 | 0;
      }
    } else if (c >= 91) {
      return -1;
    } else {
      return c - 55 | 0;
    }
  } else if (c > 57 || c < 48) {
    return -1;
  } else {
    return c -
    /* "0" */
    48 | 0;
  }
}

function int_of_string_base(param) {
  switch (param) {
    case 0:
      return 8;

    case 1:
      return 16;

    case 2:
      return 10;

    case 3:
      return 2;
  }
}

function parse_sign_and_base(s) {
  var sign = 1;
  var base =
  /* Dec */
  2;
  var i = 0;
  var match = s.charCodeAt(i);

  switch (match) {
    case 43:
      i = i + 1 | 0;
      break;

    case 44:
      break;

    case 45:
      sign = -1;
      i = i + 1 | 0;
      break;

    default:
  }

  if (s[i] === "0") {
    var match$1 = s.charCodeAt(i + 1 | 0);

    if (match$1 >= 89) {
      if (match$1 >= 111) {
        if (match$1 < 121) {
          switch (match$1 - 111 | 0) {
            case 0:
              base =
              /* Oct */
              0;
              i = i + 2 | 0;
              break;

            case 6:
              i = i + 2 | 0;
              break;

            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 7:
            case 8:
              break;

            case 9:
              base =
              /* Hex */
              1;
              i = i + 2 | 0;
              break;
          }
        }
      } else if (match$1 === 98) {
        base =
        /* Bin */
        3;
        i = i + 2 | 0;
      }
    } else if (match$1 !== 66) {
      if (match$1 >= 79) {
        switch (match$1 - 79 | 0) {
          case 0:
            base =
            /* Oct */
            0;
            i = i + 2 | 0;
            break;

          case 6:
            i = i + 2 | 0;
            break;

          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 7:
          case 8:
            break;

          case 9:
            base =
            /* Hex */
            1;
            i = i + 2 | 0;
            break;
        }
      }
    } else {
      base =
      /* Bin */
      3;
      i = i + 2 | 0;
    }
  }

  return (
    /* tuple */
    [i, sign, base]
  );
}

function caml_int_of_string(s) {
  var match = parse_sign_and_base(s);
  var i = match[0];
  var base = int_of_string_base(match[2]);
  var threshold = 4294967295;
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) :
  /* "\000" */
  0;
  var d = parse_digit(c);

  if (d < 0 || d >= base) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_3__["failure"], "int_of_string"];
  }

  var aux = function (_acc, _k) {
    while (true) {
      var k = _k;
      var acc = _acc;

      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);

        if (a ===
        /* "_" */
        95) {
          _k = k + 1 | 0;
          continue;
        } else {
          var v = parse_digit(a);

          if (v < 0 || v >= base) {
            throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_3__["failure"], "int_of_string"];
          } else {
            var acc$1 = base * acc + v;

            if (acc$1 > threshold) {
              throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_3__["failure"], "int_of_string"];
            } else {
              _k = k + 1 | 0;
              _acc = acc$1;
              continue;
            }
          }
        }
      }
    }

    ;
  };

  var res = match[1] * aux(d, i + 1 | 0);
  var or_res = res | 0;

  if (base === 10 && res !== or_res) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_3__["failure"], "int_of_string"];
  }

  return or_res;
}

function caml_int64_of_string(s) {
  var match = parse_sign_and_base(s);
  var hbase = match[2];
  var i = match[0];
  var base = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["of_int32"](int_of_string_base(hbase));
  var sign = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["of_int32"](match[1]);
  var threshold;

  switch (hbase) {
    case 0:
      threshold =
      /* int64 */
      [
      /* hi */
      536870911,
      /* lo */
      4294967295];
      break;

    case 1:
      threshold =
      /* int64 */
      [
      /* hi */
      268435455,
      /* lo */
      4294967295];
      break;

    case 2:
      threshold =
      /* int64 */
      [
      /* hi */
      429496729,
      /* lo */
      2576980377];
      break;

    case 3:
      threshold =
      /* int64 */
      [
      /* hi */
      2147483647,
      /* lo */
      4294967295];
      break;
  }

  var len = s.length;
  var c = i < len ? s.charCodeAt(i) :
  /* "\000" */
  0;
  var d = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["of_int32"](parse_digit(c));

  if (_caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["lt"](d,
  /* int64 */
  [
  /* hi */
  0,
  /* lo */
  0]) || _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["ge"](d, base)) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_3__["failure"], "int64_of_string"];
  }

  var aux = function (_acc, _k) {
    while (true) {
      var k = _k;
      var acc = _acc;

      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);

        if (a ===
        /* "_" */
        95) {
          _k = k + 1 | 0;
          continue;
        } else {
          var v = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["of_int32"](parse_digit(a));

          if (_caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["lt"](v,
          /* int64 */
          [
          /* hi */
          0,
          /* lo */
          0]) || _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["ge"](v, base) || _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["gt"](acc, threshold)) {
            throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_3__["failure"], "int64_of_string"];
          } else {
            var acc$1 = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["add"](_caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["mul"](base, acc), v);
            _k = k + 1 | 0;
            _acc = acc$1;
            continue;
          }
        }
      }
    }

    ;
  };

  var res = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["mul"](sign, aux(d, i + 1 | 0));
  var or_res = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["or_"](res,
  /* int64 */
  [
  /* hi */
  0,
  /* lo */
  0]);

  if (_caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["eq"](base,
  /* int64 */
  [
  /* hi */
  0,
  /* lo */
  10]) && _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["neq"](res, or_res)) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_3__["failure"], "int64_of_string"];
  }

  return or_res;
}

function int_of_base(param) {
  switch (param) {
    case 0:
      return 8;

    case 1:
      return 16;

    case 2:
      return 10;
  }
}

function lowercase(c) {
  if (c >=
  /* "A" */
  65 && c <=
  /* "Z" */
  90 || c >=
  /* "\192" */
  192 && c <=
  /* "\214" */
  214 || c >=
  /* "\216" */
  216 && c <=
  /* "\222" */
  222) {
    return c + 32 | 0;
  } else {
    return c;
  }
}

function parse_format(fmt) {
  var len = fmt.length;

  if (len > 31) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_3__["invalid_argument"], "format_int: format too long"];
  }

  var f =
  /* record */
  [
  /* justify */
  "+",
  /* signstyle */
  "-",
  /* filter */
  " ",
  /* alternate */
  false,
  /* base : Dec */
  2,
  /* signedconv */
  false,
  /* width */
  0,
  /* uppercase */
  false,
  /* sign */
  1,
  /* prec */
  -1,
  /* conv */
  "f"];
  var _i = 0;

  while (true) {
    var i = _i;

    if (i >= len) {
      return f;
    } else {
      var c = fmt.charCodeAt(i);
      var exit = 0;

      if (c >= 69) {
        if (c >= 88) {
          if (c >= 121) {
            exit = 1;
          } else {
            switch (c - 88 | 0) {
              case 0:
                f[
                /* base */
                4] =
                /* Hex */
                1;
                f[
                /* uppercase */
                7] = true;
                _i = i + 1 | 0;
                continue;

              case 13:
              case 14:
              case 15:
                exit = 5;
                break;

              case 12:
              case 17:
                exit = 4;
                break;

              case 23:
                f[
                /* base */
                4] =
                /* Oct */
                0;
                _i = i + 1 | 0;
                continue;

              case 29:
                f[
                /* base */
                4] =
                /* Dec */
                2;
                _i = i + 1 | 0;
                continue;

              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
              case 8:
              case 9:
              case 10:
              case 11:
              case 16:
              case 18:
              case 19:
              case 20:
              case 21:
              case 22:
              case 24:
              case 25:
              case 26:
              case 27:
              case 28:
              case 30:
              case 31:
                exit = 1;
                break;

              case 32:
                f[
                /* base */
                4] =
                /* Hex */
                1;
                _i = i + 1 | 0;
                continue;
            }
          }
        } else if (c >= 72) {
          exit = 1;
        } else {
          f[
          /* signedconv */
          5] = true;
          f[
          /* uppercase */
          7] = true;
          f[
          /* conv */
          10] = String.fromCharCode(lowercase(c));
          _i = i + 1 | 0;
          continue;
        }
      } else {
        switch (c) {
          case 35:
            f[
            /* alternate */
            3] = true;
            _i = i + 1 | 0;
            continue;

          case 32:
          case 43:
            exit = 2;
            break;

          case 45:
            f[
            /* justify */
            0] = "-";
            _i = i + 1 | 0;
            continue;

          case 46:
            f[
            /* prec */
            9] = 0;
            var j = i + 1 | 0;

            while (function (j) {
              return function () {
                var w = fmt.charCodeAt(j) -
                /* "0" */
                48 | 0;
                return w >= 0 && w <= 9;
              };
            }(j)()) {
              f[
              /* prec */
              9] = (_caml_int32_js__WEBPACK_IMPORTED_MODULE_0__["imul"](f[
              /* prec */
              9], 10) + fmt.charCodeAt(j) | 0) -
              /* "0" */
              48 | 0;
              j = j + 1 | 0;
            }

            ;
            _i = j;
            continue;

          case 33:
          case 34:
          case 36:
          case 37:
          case 38:
          case 39:
          case 40:
          case 41:
          case 42:
          case 44:
          case 47:
            exit = 1;
            break;

          case 48:
            f[
            /* filter */
            2] = "0";
            _i = i + 1 | 0;
            continue;

          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            exit = 3;
            break;

          default:
            exit = 1;
        }
      }

      switch (exit) {
        case 1:
          _i = i + 1 | 0;
          continue;

        case 2:
          f[
          /* signstyle */
          1] = String.fromCharCode(c);
          _i = i + 1 | 0;
          continue;

        case 3:
          f[
          /* width */
          6] = 0;
          var j$1 = i;

          while (function (j$1) {
            return function () {
              var w = fmt.charCodeAt(j$1) -
              /* "0" */
              48 | 0;
              return w >= 0 && w <= 9;
            };
          }(j$1)()) {
            f[
            /* width */
            6] = (_caml_int32_js__WEBPACK_IMPORTED_MODULE_0__["imul"](f[
            /* width */
            6], 10) + fmt.charCodeAt(j$1) | 0) -
            /* "0" */
            48 | 0;
            j$1 = j$1 + 1 | 0;
          }

          ;
          _i = j$1;
          continue;

        case 4:
          f[
          /* signedconv */
          5] = true;
          f[
          /* base */
          4] =
          /* Dec */
          2;
          _i = i + 1 | 0;
          continue;

        case 5:
          f[
          /* signedconv */
          5] = true;
          f[
          /* conv */
          10] = String.fromCharCode(c);
          _i = i + 1 | 0;
          continue;
      }
    }
  }

  ;
}

function finish_formatting(config, rawbuffer) {
  var justify = config[
  /* justify */
  0];
  var signstyle = config[
  /* signstyle */
  1];
  var filter = config[
  /* filter */
  2];
  var alternate = config[
  /* alternate */
  3];
  var base = config[
  /* base */
  4];
  var signedconv = config[
  /* signedconv */
  5];
  var width = config[
  /* width */
  6];
  var uppercase = config[
  /* uppercase */
  7];
  var sign = config[
  /* sign */
  8];
  var len = rawbuffer.length;

  if (signedconv && (sign < 0 || signstyle !== "-")) {
    len = len + 1 | 0;
  }

  if (alternate) {
    if (base ===
    /* Oct */
    0) {
      len = len + 1 | 0;
    } else if (base ===
    /* Hex */
    1) {
      len = len + 2 | 0;
    }
  }

  var buffer = "";

  if (justify === "+" && filter === " ") {
    for (var i = len, i_finish = width - 1 | 0; i <= i_finish; ++i) {
      buffer = buffer + filter;
    }
  }

  if (signedconv) {
    if (sign < 0) {
      buffer = buffer + "-";
    } else if (signstyle !== "-") {
      buffer = buffer + signstyle;
    }
  }

  if (alternate && base ===
  /* Oct */
  0) {
    buffer = buffer + "0";
  }

  if (alternate && base ===
  /* Hex */
  1) {
    buffer = buffer + "0x";
  }

  if (justify === "+" && filter === "0") {
    for (var i$1 = len, i_finish$1 = width - 1 | 0; i$1 <= i_finish$1; ++i$1) {
      buffer = buffer + filter;
    }
  }

  buffer = uppercase ? buffer + rawbuffer.toUpperCase() : buffer + rawbuffer;

  if (justify === "-") {
    for (var i$2 = len, i_finish$2 = width - 1 | 0; i$2 <= i_finish$2; ++i$2) {
      buffer = buffer + " ";
    }
  }

  return buffer;
}

function caml_format_int(fmt, i) {
  if (fmt === "%d") {
    return String(i);
  } else {
    var f = parse_format(fmt);
    var f$1 = f;
    var i$1 = i;
    var i$2 = i$1 < 0 ? f$1[
    /* signedconv */
    5] ? (f$1[
    /* sign */
    8] = -1, -i$1) : i$1 >>> 0 : i$1;
    var s = i$2.toString(int_of_base(f$1[
    /* base */
    4]));

    if (f$1[
    /* prec */
    9] >= 0) {
      f$1[
      /* filter */
      2] = " ";
      var n = f$1[
      /* prec */
      9] - s.length | 0;

      if (n > 0) {
        s = _caml_utils_js__WEBPACK_IMPORTED_MODULE_2__["repeat"](n, "0") + s;
      }
    }

    return finish_formatting(f$1, s);
  }
}

function caml_int64_format(fmt, x) {
  var f = parse_format(fmt);
  var x$1 = f[
  /* signedconv */
  5] && _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["lt"](x,
  /* int64 */
  [
  /* hi */
  0,
  /* lo */
  0]) ? (f[
  /* sign */
  8] = -1, _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["neg"](x)) : x;
  var s = "";
  var match = f[
  /* base */
  4];

  switch (match) {
    case 0:
      var wbase =
      /* int64 */
      [
      /* hi */
      0,
      /* lo */
      8];
      var cvtbl = "01234567";

      if (_caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["lt"](x$1,
      /* int64 */
      [
      /* hi */
      0,
      /* lo */
      0])) {
        var y = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["discard_sign"](x$1);
        var match$1 = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["div_mod"](y, wbase);
        var quotient = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["add"](
        /* int64 */
        [
        /* hi */
        268435456,
        /* lo */
        0], match$1[0]);
        var modulus = match$1[1];
        s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;

        while (_caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["neq"](quotient,
        /* int64 */
        [
        /* hi */
        0,
        /* lo */
        0])) {
          var match$2 = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["div_mod"](quotient, wbase);
          quotient = match$2[0];
          modulus = match$2[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
        }

        ;
      } else {
        var match$3 = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["div_mod"](x$1, wbase);
        var quotient$1 = match$3[0];
        var modulus$1 = match$3[1];
        s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;

        while (_caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["neq"](quotient$1,
        /* int64 */
        [
        /* hi */
        0,
        /* lo */
        0])) {
          var match$4 = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["div_mod"](quotient$1, wbase);
          quotient$1 = match$4[0];
          modulus$1 = match$4[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
        }

        ;
      }

      break;

    case 1:
      s = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["to_hex"](x$1) + s;
      break;

    case 2:
      var wbase$1 =
      /* int64 */
      [
      /* hi */
      0,
      /* lo */
      10];
      var cvtbl$1 = "0123456789";

      if (_caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["lt"](x$1,
      /* int64 */
      [
      /* hi */
      0,
      /* lo */
      0])) {
        var y$1 = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["discard_sign"](x$1);
        var match$5 = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["div_mod"](y$1, wbase$1);
        var match$6 = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["div_mod"](_caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["add"](
        /* int64 */
        [
        /* hi */
        0,
        /* lo */
        8], match$5[1]), wbase$1);
        var quotient$2 = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["add"](_caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["add"](
        /* int64 */
        [
        /* hi */
        214748364,
        /* lo */
        3435973836], match$5[0]), match$6[0]);
        var modulus$2 = match$6[1];
        s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;

        while (_caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["neq"](quotient$2,
        /* int64 */
        [
        /* hi */
        0,
        /* lo */
        0])) {
          var match$7 = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["div_mod"](quotient$2, wbase$1);
          quotient$2 = match$7[0];
          modulus$2 = match$7[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
        }

        ;
      } else {
        var match$8 = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["div_mod"](x$1, wbase$1);
        var quotient$3 = match$8[0];
        var modulus$3 = match$8[1];
        s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;

        while (_caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["neq"](quotient$3,
        /* int64 */
        [
        /* hi */
        0,
        /* lo */
        0])) {
          var match$9 = _caml_int64_js__WEBPACK_IMPORTED_MODULE_1__["div_mod"](quotient$3, wbase$1);
          quotient$3 = match$9[0];
          modulus$3 = match$9[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
        }

        ;
      }

      break;
  }

  if (f[
  /* prec */
  9] >= 0) {
    f[
    /* filter */
    2] = " ";
    var n = f[
    /* prec */
    9] - s.length | 0;

    if (n > 0) {
      s = _caml_utils_js__WEBPACK_IMPORTED_MODULE_2__["repeat"](n, "0") + s;
    }
  }

  return finish_formatting(f, s);
}

function caml_format_float(fmt, x) {
  var f = parse_format(fmt);
  var prec = f[
  /* prec */
  9] < 0 ? 6 : f[
  /* prec */
  9];
  var x$1 = x < 0 ? (f[
  /* sign */
  8] = -1, -x) : x;
  var s = "";

  if (isNaN(x$1)) {
    s = "nan";
    f[
    /* filter */
    2] = " ";
  } else if (isFinite(x$1)) {
    var match = f[
    /* conv */
    10];

    switch (match) {
      case "e":
        s = x$1.toExponential(prec);
        var i = s.length;

        if (s[i - 3 | 0] === "e") {
          s = s.slice(0, i - 1 | 0) + ("0" + s.slice(i - 1 | 0));
        }

        break;

      case "f":
        s = x$1.toFixed(prec);
        break;

      case "g":
        var prec$1 = prec !== 0 ? prec : 1;
        s = x$1.toExponential(prec$1 - 1 | 0);
        var j = s.indexOf("e");
        var exp = Number(s.slice(j + 1 | 0)) | 0;

        if (exp < -4 || x$1 >= 1e21 || x$1.toFixed().length > prec$1) {
          var i$1 = j - 1 | 0;

          while (s[i$1] === "0") {
            i$1 = i$1 - 1 | 0;
          }

          ;

          if (s[i$1] === ".") {
            i$1 = i$1 - 1 | 0;
          }

          s = s.slice(0, i$1 + 1 | 0) + s.slice(j);
          var i$2 = s.length;

          if (s[i$2 - 3 | 0] === "e") {
            s = s.slice(0, i$2 - 1 | 0) + ("0" + s.slice(i$2 - 1 | 0));
          }
        } else {
          var p = prec$1;

          if (exp < 0) {
            p = p - (exp + 1 | 0) | 0;
            s = x$1.toFixed(p);
          } else {
            while (function () {
              s = x$1.toFixed(p);
              return s.length > (prec$1 + 1 | 0);
            }()) {
              p = p - 1 | 0;
            }

            ;
          }

          if (p !== 0) {
            var k = s.length - 1 | 0;

            while (s[k] === "0") {
              k = k - 1 | 0;
            }

            ;

            if (s[k] === ".") {
              k = k - 1 | 0;
            }

            s = s.slice(0, k + 1 | 0);
          }
        }

        break;

      default:
    }
  } else {
    s = "inf";
    f[
    /* filter */
    2] = " ";
  }

  return finish_formatting(f, s);
}

function float_of_string(s, exn) {
  var res = +s;
  if (s.length > 0 && res === res) return res;
  s = s.replace(/_/g, "");
  res = +s;

  if (s.length > 0 && res === res || /^[+-]?nan$/i.test(s)) {
    return res;
  }

  ;
  if (/^\+?inf(inity)?$/i.test(s)) return Infinity;
  if (/^-inf(inity)?$/i.test(s)) return -Infinity;
  throw exn;
}

;

function caml_float_of_string(s) {
  return float_of_string(s, [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_3__["failure"], "float_of_string"]);
}

var caml_nativeint_format = caml_format_int;
var caml_int32_format = caml_format_int;
var caml_int32_of_string = caml_int_of_string;
var caml_nativeint_of_string = caml_int_of_string;

/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_int32.js":
/*!********************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_int32.js ***!
  \********************************************************/
/*! exports provided: div, mod_, caml_bswap16, caml_int32_bswap, caml_nativeint_bswap, imul */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mod_", function() { return mod_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_bswap16", function() { return caml_bswap16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_int32_bswap", function() { return caml_int32_bswap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_nativeint_bswap", function() { return caml_nativeint_bswap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imul", function() { return imul; });
/* harmony import */ var _caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml_builtin_exceptions.js */ "./node_modules/bs-platform/lib/es6/caml_builtin_exceptions.js");


function div(x, y) {
  if (y === 0) {
    throw _caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_0__["division_by_zero"];
  } else {
    return x / y | 0;
  }
}

function mod_(x, y) {
  if (y === 0) {
    throw _caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_0__["division_by_zero"];
  } else {
    return x % y;
  }
}

function caml_bswap16(x) {
  return (x & 255) << 8 | (x & 65280) >>> 8;
}

function caml_int32_bswap(x) {
  return (x & 255) << 24 | (x & 65280) << 8 | (x & 16711680) >>> 8 | (x & 4278190080) >>> 24;
}

var imul = Math.imul || function (x, y) {
  y |= 0;
  return ((x >> 16) * y << 16) + (x & 0xffff) * y | 0;
};

var caml_nativeint_bswap = caml_int32_bswap;

/* imul Not a pure module */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_int64.js":
/*!********************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_int64.js ***!
  \********************************************************/
/*! exports provided: min_int, max_int, one, zero, not, of_int32, to_int32, add, neg, sub, lsl_, lsr_, asr_, is_zero, mul, xor, or_, and_, swap, ge, eq, neq, lt, gt, le, equal_null, equal_undefined, equal_nullable, min, max, to_float, of_float, div, mod_, compare, float_of_bits, bits_of_float, get64, div_mod, to_hex, discard_sign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min_int", function() { return min_int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max_int", function() { return max_int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "one", function() { return one; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "of_int32", function() { return of_int32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to_int32", function() { return to_int32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neg", function() { return neg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lsl_", function() { return lsl_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lsr_", function() { return lsr_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asr_", function() { return asr_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_zero", function() { return is_zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xor", function() { return xor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "or_", function() { return or_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "and_", function() { return and_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swap", function() { return swap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ge", function() { return ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neq", function() { return neq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lt", function() { return lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gt", function() { return gt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "le", function() { return le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equal_null", function() { return equal_null; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equal_undefined", function() { return equal_undefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equal_nullable", function() { return equal_nullable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to_float", function() { return to_float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "of_float", function() { return of_float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mod_", function() { return mod_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "float_of_bits", function() { return float_of_bits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bits_of_float", function() { return bits_of_float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get64", function() { return get64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div_mod", function() { return div_mod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to_hex", function() { return to_hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discard_sign", function() { return discard_sign; });
/* harmony import */ var _caml_int32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml_int32.js */ "./node_modules/bs-platform/lib/es6/caml_int32.js");
/* harmony import */ var _caml_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caml_utils.js */ "./node_modules/bs-platform/lib/es6/caml_utils.js");
/* harmony import */ var _caml_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caml_primitive.js */ "./node_modules/bs-platform/lib/es6/caml_primitive.js");
/* harmony import */ var _caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caml_builtin_exceptions.js */ "./node_modules/bs-platform/lib/es6/caml_builtin_exceptions.js");




var min_int =
/* record */
[
/* hi */
-2147483648,
/* lo */
0];
var max_int =
/* record */
[
/* hi */
2147483647,
/* lo */
1];
var one =
/* record */
[
/* hi */
0,
/* lo */
1];
var zero =
/* record */
[
/* hi */
0,
/* lo */
0];
var neg_one =
/* record */
[
/* hi */
-1,
/* lo */
4294967295];

function neg_signed(x) {
  return (x & 2147483648) !== 0;
}

function add(param, param$1) {
  var other_low_ = param$1[
  /* lo */
  1];
  var this_low_ = param[
  /* lo */
  1];
  var lo = this_low_ + other_low_ & 4294967295;
  var overflow = neg_signed(this_low_) && (neg_signed(other_low_) || !neg_signed(lo)) || neg_signed(other_low_) && !neg_signed(lo) ? 1 : 0;
  var hi = param[
  /* hi */
  0] + param$1[
  /* hi */
  0] + overflow & 4294967295;
  return (
    /* record */
    [
    /* hi */
    hi,
    /* lo */
    lo >>> 0]
  );
}

function not(param) {
  var hi = param[
  /* hi */
  0] ^ -1;
  var lo = param[
  /* lo */
  1] ^ -1;
  return (
    /* record */
    [
    /* hi */
    hi,
    /* lo */
    lo >>> 0]
  );
}

function eq(x, y) {
  if (x[
  /* hi */
  0] === y[
  /* hi */
  0]) {
    return x[
    /* lo */
    1] === y[
    /* lo */
    1];
  } else {
    return false;
  }
}

function equal_null(x, y) {
  if (y !== null) {
    return eq(x, y);
  } else {
    return false;
  }
}

function equal_undefined(x, y) {
  if (y !== undefined) {
    return eq(x, y);
  } else {
    return false;
  }
}

function equal_nullable(x, y) {
  if (y == null) {
    return false;
  } else {
    return eq(x, y);
  }
}

function neg(x) {
  if (eq(x, min_int)) {
    return min_int;
  } else {
    return add(not(x), one);
  }
}

function sub(x, y) {
  return add(x, neg(y));
}

function lsl_(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var lo = x[
    /* lo */
    1];

    if (numBits >= 32) {
      return (
        /* record */
        [
        /* hi */
        lo << (numBits - 32 | 0),
        /* lo */
        0]
      );
    } else {
      var hi = lo >>> (32 - numBits | 0) | x[
      /* hi */
      0] << numBits;
      return (
        /* record */
        [
        /* hi */
        hi,
        /* lo */
        lo << numBits >>> 0]
      );
    }
  }
}

function lsr_(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var hi = x[
    /* hi */
    0];
    var offset = numBits - 32 | 0;

    if (offset === 0) {
      return (
        /* record */
        [
        /* hi */
        0,
        /* lo */
        hi >>> 0]
      );
    } else if (offset > 0) {
      var lo = hi >>> offset;
      return (
        /* record */
        [
        /* hi */
        0,
        /* lo */
        lo >>> 0]
      );
    } else {
      var hi$1 = hi >>> numBits;
      var lo$1 = hi << (-offset | 0) | x[
      /* lo */
      1] >>> numBits;
      return (
        /* record */
        [
        /* hi */
        hi$1,
        /* lo */
        lo$1 >>> 0]
      );
    }
  }
}

function asr_(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var hi = x[
    /* hi */
    0];

    if (numBits < 32) {
      var hi$1 = hi >> numBits;
      var lo = hi << (32 - numBits | 0) | x[
      /* lo */
      1] >>> numBits;
      return (
        /* record */
        [
        /* hi */
        hi$1,
        /* lo */
        lo >>> 0]
      );
    } else {
      var lo$1 = hi >> (numBits - 32 | 0);
      return (
        /* record */
        [
        /* hi */
        hi >= 0 ? 0 : -1,
        /* lo */
        lo$1 >>> 0]
      );
    }
  }
}

function is_zero(param) {
  if (param[
  /* hi */
  0] !== 0 || param[
  /* lo */
  1] !== 0) {
    return false;
  } else {
    return true;
  }
}

function mul(_this, _other) {
  while (true) {
    var other = _other;
    var $$this = _this;
    var exit = 0;
    var lo;
    var this_hi = $$this[
    /* hi */
    0];
    var exit$1 = 0;
    var exit$2 = 0;
    var exit$3 = 0;

    if (this_hi !== 0 || $$this[
    /* lo */
    1] !== 0) {
      exit$3 = 4;
    } else {
      return zero;
    }

    if (exit$3 === 4) {
      if (other[
      /* hi */
      0] !== 0 || other[
      /* lo */
      1] !== 0) {
        exit$2 = 3;
      } else {
        return zero;
      }
    }

    if (exit$2 === 3) {
      if (this_hi !== -2147483648 || $$this[
      /* lo */
      1] !== 0) {
        exit$1 = 2;
      } else {
        lo = other[
        /* lo */
        1];
        exit = 1;
      }
    }

    if (exit$1 === 2) {
      var other_hi = other[
      /* hi */
      0];
      var lo$1 = $$this[
      /* lo */
      1];
      var exit$4 = 0;

      if (other_hi !== -2147483648 || other[
      /* lo */
      1] !== 0) {
        exit$4 = 3;
      } else {
        lo = lo$1;
        exit = 1;
      }

      if (exit$4 === 3) {
        var other_lo = other[
        /* lo */
        1];

        if (this_hi < 0) {
          if (other_hi < 0) {
            _other = neg(other);
            _this = neg($$this);
            continue;
          } else {
            return neg(mul(neg($$this), other));
          }
        } else if (other_hi < 0) {
          return neg(mul($$this, neg(other)));
        } else {
          var a48 = this_hi >>> 16;
          var a32 = this_hi & 65535;
          var a16 = lo$1 >>> 16;
          var a00 = lo$1 & 65535;
          var b48 = other_hi >>> 16;
          var b32 = other_hi & 65535;
          var b16 = other_lo >>> 16;
          var b00 = other_lo & 65535;
          var c48 = 0;
          var c32 = 0;
          var c16 = 0;
          var c00 = a00 * b00;
          c16 = (c00 >>> 16) + a16 * b00;
          c32 = c16 >>> 16;
          c16 = (c16 & 65535) + a00 * b16;
          c32 = c32 + (c16 >>> 16) + a32 * b00;
          c48 = c32 >>> 16;
          c32 = (c32 & 65535) + a16 * b16;
          c48 += c32 >>> 16;
          c32 = (c32 & 65535) + a00 * b32;
          c48 += c32 >>> 16;
          c32 = c32 & 65535;
          c48 = c48 + (a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48) & 65535;
          var hi = c32 | c48 << 16;
          var lo$2 = c00 & 65535 | (c16 & 65535) << 16;
          return (
            /* record */
            [
            /* hi */
            hi,
            /* lo */
            lo$2 >>> 0]
          );
        }
      }
    }

    if (exit === 1) {
      if ((lo & 1) === 0) {
        return zero;
      } else {
        return min_int;
      }
    }
  }

  ;
}

function swap(param) {
  var hi = _caml_int32_js__WEBPACK_IMPORTED_MODULE_0__["caml_int32_bswap"](param[
  /* lo */
  1]);
  var lo = _caml_int32_js__WEBPACK_IMPORTED_MODULE_0__["caml_int32_bswap"](param[
  /* hi */
  0]);
  return (
    /* record */
    [
    /* hi */
    hi,
    /* lo */
    lo >>> 0]
  );
}

function xor(param, param$1) {
  return (
    /* record */
    [
    /* hi */
    param[
    /* hi */
    0] ^ param$1[
    /* hi */
    0],
    /* lo */
    (param[
    /* lo */
    1] ^ param$1[
    /* lo */
    1]) >>> 0]
  );
}

function or_(param, param$1) {
  return (
    /* record */
    [
    /* hi */
    param[
    /* hi */
    0] | param$1[
    /* hi */
    0],
    /* lo */
    (param[
    /* lo */
    1] | param$1[
    /* lo */
    1]) >>> 0]
  );
}

function and_(param, param$1) {
  return (
    /* record */
    [
    /* hi */
    param[
    /* hi */
    0] & param$1[
    /* hi */
    0],
    /* lo */
    (param[
    /* lo */
    1] & param$1[
    /* lo */
    1]) >>> 0]
  );
}

function ge(param, param$1) {
  var other_hi = param$1[
  /* hi */
  0];
  var hi = param[
  /* hi */
  0];

  if (hi > other_hi) {
    return true;
  } else if (hi < other_hi) {
    return false;
  } else {
    return param[
    /* lo */
    1] >= param$1[
    /* lo */
    1];
  }
}

function neq(x, y) {
  return !eq(x, y);
}

function lt(x, y) {
  return !ge(x, y);
}

function gt(x, y) {
  if (x[
  /* hi */
  0] > y[
  /* hi */
  0]) {
    return true;
  } else if (x[
  /* hi */
  0] < y[
  /* hi */
  0]) {
    return false;
  } else {
    return x[
    /* lo */
    1] > y[
    /* lo */
    1];
  }
}

function le(x, y) {
  return !gt(x, y);
}

function min(x, y) {
  if (ge(x, y)) {
    return y;
  } else {
    return x;
  }
}

function max(x, y) {
  if (gt(x, y)) {
    return x;
  } else {
    return y;
  }
}

function to_float(param) {
  return param[
  /* hi */
  0] * 0x100000000 + param[
  /* lo */
  1];
}

function of_float(x) {
  if (isNaN(x) || !isFinite(x)) {
    return zero;
  } else if (x <= -9.22337203685477581e+18) {
    return min_int;
  } else if (x + 1 >= 9.22337203685477581e+18) {
    return max_int;
  } else if (x < 0) {
    return neg(of_float(-x));
  } else {
    var hi = x / 4294967296 | 0;
    var lo = x % 4294967296 | 0;
    return (
      /* record */
      [
      /* hi */
      hi,
      /* lo */
      lo >>> 0]
    );
  }
}

function div(_self, _other) {
  while (true) {
    var other = _other;
    var self = _self;
    var self_hi = self[
    /* hi */
    0];
    var exit = 0;
    var exit$1 = 0;

    if (other[
    /* hi */
    0] !== 0 || other[
    /* lo */
    1] !== 0) {
      exit$1 = 2;
    } else {
      throw _caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_3__["division_by_zero"];
    }

    if (exit$1 === 2) {
      if (self_hi !== -2147483648) {
        if (self_hi !== 0 || self[
        /* lo */
        1] !== 0) {
          exit = 1;
        } else {
          return zero;
        }
      } else if (self[
      /* lo */
      1] !== 0) {
        exit = 1;
      } else if (eq(other, one) || eq(other, neg_one)) {
        return self;
      } else if (eq(other, min_int)) {
        return one;
      } else {
        var other_hi = other[
        /* hi */
        0];
        var half_this = asr_(self, 1);
        var approx = lsl_(div(half_this, other), 1);
        var exit$2 = 0;

        if (approx[
        /* hi */
        0] !== 0 || approx[
        /* lo */
        1] !== 0) {
          exit$2 = 3;
        } else if (other_hi < 0) {
          return one;
        } else {
          return neg(one);
        }

        if (exit$2 === 3) {
          var y = mul(other, approx);
          var rem = add(self, neg(y));
          return add(approx, div(rem, other));
        }
      }
    }

    if (exit === 1) {
      var other_hi$1 = other[
      /* hi */
      0];
      var exit$3 = 0;

      if (other_hi$1 !== -2147483648 || other[
      /* lo */
      1] !== 0) {
        exit$3 = 2;
      } else {
        return zero;
      }

      if (exit$3 === 2) {
        if (self_hi < 0) {
          if (other_hi$1 < 0) {
            _other = neg(other);
            _self = neg(self);
            continue;
          } else {
            return neg(div(neg(self), other));
          }
        } else if (other_hi$1 < 0) {
          return neg(div(self, neg(other)));
        } else {
          var res = zero;
          var rem$1 = self;

          while (ge(rem$1, other)) {
            var approx$1 = _caml_primitive_js__WEBPACK_IMPORTED_MODULE_2__["caml_float_max"](1, Math.floor(to_float(rem$1) / to_float(other)));
            var log2 = Math.ceil(Math.log(approx$1) / Math.LN2);
            var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
            var approxRes = of_float(approx$1);
            var approxRem = mul(approxRes, other);

            while (approxRem[
            /* hi */
            0] < 0 || gt(approxRem, rem$1)) {
              approx$1 -= delta;
              approxRes = of_float(approx$1);
              approxRem = mul(approxRes, other);
            }

            ;

            if (is_zero(approxRes)) {
              approxRes = one;
            }

            res = add(res, approxRes);
            rem$1 = add(rem$1, neg(approxRem));
          }

          ;
          return res;
        }
      }
    }
  }

  ;
}

function mod_(self, other) {
  var y = mul(div(self, other), other);
  return add(self, neg(y));
}

function div_mod(self, other) {
  var quotient = div(self, other);
  var y = mul(quotient, other);
  return (
    /* tuple */
    [quotient, add(self, neg(y))]
  );
}

function compare(self, other) {
  var v = _caml_primitive_js__WEBPACK_IMPORTED_MODULE_2__["caml_nativeint_compare"](self[
  /* hi */
  0], other[
  /* hi */
  0]);

  if (v === 0) {
    return _caml_primitive_js__WEBPACK_IMPORTED_MODULE_2__["caml_nativeint_compare"](self[
    /* lo */
    1], other[
    /* lo */
    1]);
  } else {
    return v;
  }
}

function of_int32(lo) {
  return (
    /* record */
    [
    /* hi */
    lo < 0 ? -1 : 0,
    /* lo */
    lo >>> 0]
  );
}

function to_int32(x) {
  return x[
  /* lo */
  1] | 0;
}

function to_hex(x) {
  var x_lo = x[
  /* lo */
  1];
  var x_hi = x[
  /* hi */
  0];

  var aux = function (v) {
    return (v >>> 0).toString(16);
  };

  var exit = 0;

  if (x_hi !== 0 || x_lo !== 0) {
    exit = 1;
  } else {
    return "0";
  }

  if (exit === 1) {
    if (x_lo !== 0) {
      if (x_hi !== 0) {
        var lo = aux(x_lo);
        var pad = 8 - lo.length | 0;

        if (pad <= 0) {
          return aux(x_hi) + lo;
        } else {
          return aux(x_hi) + (_caml_utils_js__WEBPACK_IMPORTED_MODULE_1__["repeat"](pad, "0") + lo);
        }
      } else {
        return aux(x_lo);
      }
    } else {
      return aux(x_hi) + "00000000";
    }
  }
}

function discard_sign(x) {
  return (
    /* record */
    [
    /* hi */
    2147483647 & x[
    /* hi */
    0],
    /* lo */
    x[
    /* lo */
    1]]
  );
}

function float_of_bits(x) {
  return new Float64Array(new Int32Array([x[1], x[0]]).buffer)[0];
}

;

function bits_of_float(x) {
  var buf = new Int32Array(new Float64Array([x]).buffer);
  return (
    /* record */
    [
    /* hi */
    buf[1],
    /* lo */
    buf[0] >>> 0]
  );
}

function get64(s, i) {
  var hi = s.charCodeAt(i + 4 | 0) << 32 | s.charCodeAt(i + 5 | 0) << 40 | s.charCodeAt(i + 6 | 0) << 48 | s.charCodeAt(i + 7 | 0) << 56;
  var lo = s.charCodeAt(i) | s.charCodeAt(i + 1 | 0) << 8 | s.charCodeAt(i + 2 | 0) << 16 | s.charCodeAt(i + 3 | 0) << 24;
  return (
    /* record */
    [
    /* hi */
    hi,
    /* lo */
    lo >>> 0]
  );
}


/* Caml_int32 Not a pure module */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_io.js":
/*!*****************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_io.js ***!
  \*****************************************************/
/*! exports provided: stdin, stdout, stderr, caml_ml_flush, caml_ml_output, caml_ml_output_char, caml_ml_out_channels_list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stdin", function() { return stdin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stdout", function() { return stdout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stderr", function() { return stderr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_ml_flush", function() { return caml_ml_flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_ml_output", function() { return caml_ml_output; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_ml_output_char", function() { return caml_ml_output_char; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_ml_out_channels_list", function() { return caml_ml_out_channels_list; });
/* harmony import */ var _curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry.js */ "./node_modules/bs-platform/lib/es6/curry.js");

var stdout =
/* record */
[
/* buffer */
"",
/* output */
function (param, s) {
  var v = s.length - 1 | 0;

  if (typeof process !== "undefined" && process.stdout && process.stdout.write) {
    return process.stdout.write(s);
  } else if (s[v] === "\n") {
    console.log(s.slice(0, v));
    return (
      /* () */
      0
    );
  } else {
    console.log(s);
    return (
      /* () */
      0
    );
  }
}];
var stderr =
/* record */
[
/* buffer */
"",
/* output */
function (param, s) {
  var v = s.length - 1 | 0;

  if (s[v] === "\n") {
    console.log(s.slice(0, v));
    return (
      /* () */
      0
    );
  } else {
    console.log(s);
    return (
      /* () */
      0
    );
  }
}];

function caml_ml_flush(oc) {
  if (oc[
  /* buffer */
  0] !== "") {
    _curry_js__WEBPACK_IMPORTED_MODULE_0__["_2"](oc[
    /* output */
    1], oc, oc[
    /* buffer */
    0]);

    oc[
    /* buffer */
    0] = "";
    return (
      /* () */
      0
    );
  } else {
    return 0;
  }
}

function caml_ml_output(oc, str, offset, len) {
  var str$1 = offset === 0 && len === str.length ? str : str.slice(offset, len);

  if (typeof process !== "undefined" && process.stdout && process.stdout.write && oc === stdout) {
    return process.stdout.write(str$1);
  } else {
    var id = str$1.lastIndexOf("\n");

    if (id < 0) {
      oc[
      /* buffer */
      0] = oc[
      /* buffer */
      0] + str$1;
      return (
        /* () */
        0
      );
    } else {
      oc[
      /* buffer */
      0] = oc[
      /* buffer */
      0] + str$1.slice(0, id + 1 | 0);
      caml_ml_flush(oc);
      oc[
      /* buffer */
      0] = oc[
      /* buffer */
      0] + str$1.slice(id + 1 | 0);
      return (
        /* () */
        0
      );
    }
  }
}

function caml_ml_output_char(oc, $$char) {
  return caml_ml_output(oc, String.fromCharCode($$char), 0, 1);
}

function caml_ml_out_channels_list(param) {
  return (
    /* :: */
    [stdout,
    /* :: */
    [stderr,
    /* [] */
    0]]
  );
}

var stdin = undefined;

/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_missing_polyfill.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_missing_polyfill.js ***!
  \*******************************************************************/
/*! exports provided: not_implemented */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not_implemented", function() { return not_implemented; });
function not_implemented(s) {
  throw new Error(s + " not implemented by BuckleScript yet\n");
}

;

/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_primitive.js ***!
  \************************************************************/
/*! exports provided: caml_bytes_compare, caml_bytes_equal, caml_int_compare, caml_bool_compare, caml_float_compare, caml_nativeint_compare, caml_string_compare, caml_int32_compare, caml_bool_min, caml_int_min, caml_float_min, caml_string_min, caml_nativeint_min, caml_int32_min, caml_bool_max, caml_int_max, caml_float_max, caml_string_max, caml_nativeint_max, caml_int32_max */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_bytes_compare", function() { return caml_bytes_compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_bytes_equal", function() { return caml_bytes_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_int_compare", function() { return caml_int_compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_bool_compare", function() { return caml_bool_compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_float_compare", function() { return caml_float_compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_nativeint_compare", function() { return caml_nativeint_compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_string_compare", function() { return caml_string_compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_int32_compare", function() { return caml_int32_compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_bool_min", function() { return caml_bool_min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_int_min", function() { return caml_int_min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_float_min", function() { return caml_float_min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_string_min", function() { return caml_string_min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_nativeint_min", function() { return caml_nativeint_min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_int32_min", function() { return caml_int32_min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_bool_max", function() { return caml_bool_max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_int_max", function() { return caml_int_max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_float_max", function() { return caml_float_max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_string_max", function() { return caml_string_max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_nativeint_max", function() { return caml_nativeint_max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_int32_max", function() { return caml_int32_max; });
function caml_int_compare(x, y) {
  if (x < y) {
    return -1;
  } else if (x === y) {
    return 0;
  } else {
    return 1;
  }
}

function caml_bool_compare(x, y) {
  if (x) {
    if (y) {
      return 0;
    } else {
      return 1;
    }
  } else if (y) {
    return -1;
  } else {
    return 0;
  }
}

function caml_float_compare(x, y) {
  if (x === y) {
    return 0;
  } else if (x < y) {
    return -1;
  } else if (x > y || x === x) {
    return 1;
  } else if (y === y) {
    return -1;
  } else {
    return 0;
  }
}

function caml_string_compare(s1, s2) {
  if (s1 === s2) {
    return 0;
  } else if (s1 < s2) {
    return -1;
  } else {
    return 1;
  }
}

function caml_bytes_compare_aux(s1, s2, _off, len, def) {
  while (true) {
    var off = _off;

    if (off < len) {
      var a = s1[off];
      var b = s2[off];

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        _off = off + 1 | 0;
        continue;
      }
    } else {
      return def;
    }
  }

  ;
}

function caml_bytes_compare(s1, s2) {
  var len1 = s1.length;
  var len2 = s2.length;

  if (len1 === len2) {
    return caml_bytes_compare_aux(s1, s2, 0, len1, 0);
  } else if (len1 < len2) {
    return caml_bytes_compare_aux(s1, s2, 0, len1, -1);
  } else {
    return caml_bytes_compare_aux(s1, s2, 0, len2, 1);
  }
}

function caml_bytes_equal(s1, s2) {
  var len1 = s1.length;
  var len2 = s2.length;

  if (len1 === len2) {
    var s1$1 = s1;
    var s2$1 = s2;
    var _off = 0;
    var len = len1;

    while (true) {
      var off = _off;

      if (off === len) {
        return true;
      } else {
        var a = s1$1[off];
        var b = s2$1[off];

        if (a === b) {
          _off = off + 1 | 0;
          continue;
        } else {
          return false;
        }
      }
    }

    ;
  } else {
    return false;
  }
}

function caml_bool_min(x, y) {
  if (x) {
    return y;
  } else {
    return x;
  }
}

function caml_int_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_string_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_nativeint_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_int32_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_bool_max(x, y) {
  if (x) {
    return x;
  } else {
    return y;
  }
}

function caml_int_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_string_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_nativeint_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_int32_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

var caml_nativeint_compare = caml_int_compare;
var caml_int32_compare = caml_int_compare;

/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_string.js":
/*!*********************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_string.js ***!
  \*********************************************************/
/*! exports provided: caml_string_get, caml_string_get16, caml_string_get32, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_string_get", function() { return caml_string_get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_string_get16", function() { return caml_string_get16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_string_get32", function() { return caml_string_get32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony import */ var _caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml_builtin_exceptions.js */ "./node_modules/bs-platform/lib/es6/caml_builtin_exceptions.js");


function caml_string_get(s, i) {
  if (i >= s.length || i < 0) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_0__["invalid_argument"], "index out of bounds"];
  } else {
    return s.charCodeAt(i);
  }
}

function caml_string_get16(s, i) {
  return s.charCodeAt(i) + (s.charCodeAt(i + 1 | 0) << 8) | 0;
}

function caml_string_get32(s, i) {
  return ((s.charCodeAt(i) + (s.charCodeAt(i + 1 | 0) << 8) | 0) + (s.charCodeAt(i + 2 | 0) << 16) | 0) + (s.charCodeAt(i + 3 | 0) << 24) | 0;
}

function get(s, i) {
  if (i < 0 || i >= s.length) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_0__["invalid_argument"], "index out of bounds"];
  } else {
    return s.charCodeAt(i);
  }
}


/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_sys.js":
/*!******************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_sys.js ***!
  \******************************************************/
/*! exports provided: caml_sys_getenv, caml_sys_time, caml_sys_random_seed, caml_sys_system_command, caml_sys_getcwd, caml_sys_get_argv, caml_sys_exit, caml_sys_is_directory, caml_sys_file_exists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_sys_getenv", function() { return caml_sys_getenv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_sys_time", function() { return caml_sys_time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_sys_random_seed", function() { return caml_sys_random_seed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_sys_system_command", function() { return caml_sys_system_command; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_sys_getcwd", function() { return caml_sys_getcwd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_sys_get_argv", function() { return caml_sys_get_argv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_sys_exit", function() { return caml_sys_exit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_sys_is_directory", function() { return caml_sys_is_directory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_sys_file_exists", function() { return caml_sys_file_exists; });
/* harmony import */ var _caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml_builtin_exceptions.js */ "./node_modules/bs-platform/lib/es6/caml_builtin_exceptions.js");


function caml_sys_getenv(s) {
  if (typeof process === "undefined" || process.env === undefined) {
    throw _caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_0__["not_found"];
  } else {
    var match = process.env[s];

    if (match !== undefined) {
      return match;
    } else {
      throw _caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_0__["not_found"];
    }
  }
}

function caml_sys_time(param) {
  if (typeof process === "undefined" || process.uptime === undefined) {
    return -1;
  } else {
    return process.uptime();
  }
}

function caml_sys_random_seed(param) {
  return (
    /* array */
    [((Date.now() | 0) ^ 4294967295) * Math.random() | 0]
  );
}

function caml_sys_system_command(_cmd) {
  return 127;
}

function caml_sys_getcwd(param) {
  if (typeof process === "undefined") {
    return "/";
  } else {
    return process.cwd();
  }
}

function caml_sys_get_argv(param) {
  if (typeof process === "undefined") {
    return (
      /* tuple */
      ["",
      /* array */
      [""]]
    );
  } else {
    var argv = process.argv;

    if (argv == null) {
      return (
        /* tuple */
        ["",
        /* array */
        [""]]
      );
    } else {
      return (
        /* tuple */
        [argv[0], argv]
      );
    }
  }
}

function caml_sys_exit(exit_code) {
  if (typeof process !== "undefined") {
    return process.exit(exit_code);
  } else {
    return 0;
  }
}

function caml_sys_is_directory(_s) {
  throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_0__["failure"], "caml_sys_is_directory not implemented"];
}

function caml_sys_file_exists(_s) {
  throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_0__["failure"], "caml_sys_file_exists not implemented"];
}


/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_utils.js":
/*!********************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_utils.js ***!
  \********************************************************/
/*! exports provided: repeat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
function repeat(count, self) {
  if (self.repeat) {
    return self.repeat(count);
  }

  if (self.length == 0 || count == 0) {
    return '';
  } // Ensuring count is a 31-bit integer allows us to heavily optimize the
  // main part. But anyway, most current (August 2014) browsers can't handle
  // strings 1 << 28 chars or longer, so:


  if (self.length * count >= 1 << 28) {
    throw new RangeError('repeat count must not overflow maximum string size');
  }

  var rpt = '';

  for (;;) {
    if ((count & 1) == 1) {
      rpt += self;
    }

    count >>>= 1;

    if (count == 0) {
      break;
    }

    self += self;
  }

  return rpt;
}

;

/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/camlinternalFormatBasics.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/camlinternalFormatBasics.js ***!
  \**********************************************************************/
/*! exports provided: concat_fmtty, erase_rel, concat_fmt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat_fmtty", function() { return concat_fmtty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erase_rel", function() { return erase_rel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat_fmt", function() { return concat_fmt; });
/* harmony import */ var _block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.js */ "./node_modules/bs-platform/lib/es6/block.js");


function erase_rel(param) {
  if (typeof param === "number") {
    return (
      /* End_of_fmtty */
      0
    );
  } else {
    switch (param.tag | 0) {
      case 0:
        return (
          /* Char_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](0, [erase_rel(param[0])])
        );

      case 1:
        return (
          /* String_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](1, [erase_rel(param[0])])
        );

      case 2:
        return (
          /* Int_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](2, [erase_rel(param[0])])
        );

      case 3:
        return (
          /* Int32_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](3, [erase_rel(param[0])])
        );

      case 4:
        return (
          /* Nativeint_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](4, [erase_rel(param[0])])
        );

      case 5:
        return (
          /* Int64_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](5, [erase_rel(param[0])])
        );

      case 6:
        return (
          /* Float_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](6, [erase_rel(param[0])])
        );

      case 7:
        return (
          /* Bool_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](7, [erase_rel(param[0])])
        );

      case 8:
        return (
          /* Format_arg_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](8, [param[0], erase_rel(param[1])])
        );

      case 9:
        var ty1 = param[0];
        return (
          /* Format_subst_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](9, [ty1, ty1, erase_rel(param[2])])
        );

      case 10:
        return (
          /* Alpha_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](10, [erase_rel(param[0])])
        );

      case 11:
        return (
          /* Theta_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](11, [erase_rel(param[0])])
        );

      case 12:
        return (
          /* Any_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](12, [erase_rel(param[0])])
        );

      case 13:
        return (
          /* Reader_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](13, [erase_rel(param[0])])
        );

      case 14:
        return (
          /* Ignored_reader_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](14, [erase_rel(param[0])])
        );
    }
  }
}

function concat_fmtty(fmtty1, fmtty2) {
  if (typeof fmtty1 === "number") {
    return fmtty2;
  } else {
    switch (fmtty1.tag | 0) {
      case 0:
        return (
          /* Char_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](0, [concat_fmtty(fmtty1[0], fmtty2)])
        );

      case 1:
        return (
          /* String_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](1, [concat_fmtty(fmtty1[0], fmtty2)])
        );

      case 2:
        return (
          /* Int_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](2, [concat_fmtty(fmtty1[0], fmtty2)])
        );

      case 3:
        return (
          /* Int32_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](3, [concat_fmtty(fmtty1[0], fmtty2)])
        );

      case 4:
        return (
          /* Nativeint_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](4, [concat_fmtty(fmtty1[0], fmtty2)])
        );

      case 5:
        return (
          /* Int64_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](5, [concat_fmtty(fmtty1[0], fmtty2)])
        );

      case 6:
        return (
          /* Float_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](6, [concat_fmtty(fmtty1[0], fmtty2)])
        );

      case 7:
        return (
          /* Bool_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](7, [concat_fmtty(fmtty1[0], fmtty2)])
        );

      case 8:
        return (
          /* Format_arg_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](8, [fmtty1[0], concat_fmtty(fmtty1[1], fmtty2)])
        );

      case 9:
        return (
          /* Format_subst_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](9, [fmtty1[0], fmtty1[1], concat_fmtty(fmtty1[2], fmtty2)])
        );

      case 10:
        return (
          /* Alpha_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](10, [concat_fmtty(fmtty1[0], fmtty2)])
        );

      case 11:
        return (
          /* Theta_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](11, [concat_fmtty(fmtty1[0], fmtty2)])
        );

      case 12:
        return (
          /* Any_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](12, [concat_fmtty(fmtty1[0], fmtty2)])
        );

      case 13:
        return (
          /* Reader_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](13, [concat_fmtty(fmtty1[0], fmtty2)])
        );

      case 14:
        return (
          /* Ignored_reader_ty */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](14, [concat_fmtty(fmtty1[0], fmtty2)])
        );
    }
  }
}

function concat_fmt(fmt1, fmt2) {
  if (typeof fmt1 === "number") {
    return fmt2;
  } else {
    switch (fmt1.tag | 0) {
      case 0:
        return (
          /* Char */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](0, [concat_fmt(fmt1[0], fmt2)])
        );

      case 1:
        return (
          /* Caml_char */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](1, [concat_fmt(fmt1[0], fmt2)])
        );

      case 2:
        return (
          /* String */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](2, [fmt1[0], concat_fmt(fmt1[1], fmt2)])
        );

      case 3:
        return (
          /* Caml_string */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](3, [fmt1[0], concat_fmt(fmt1[1], fmt2)])
        );

      case 4:
        return (
          /* Int */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](4, [fmt1[0], fmt1[1], fmt1[2], concat_fmt(fmt1[3], fmt2)])
        );

      case 5:
        return (
          /* Int32 */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](5, [fmt1[0], fmt1[1], fmt1[2], concat_fmt(fmt1[3], fmt2)])
        );

      case 6:
        return (
          /* Nativeint */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](6, [fmt1[0], fmt1[1], fmt1[2], concat_fmt(fmt1[3], fmt2)])
        );

      case 7:
        return (
          /* Int64 */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](7, [fmt1[0], fmt1[1], fmt1[2], concat_fmt(fmt1[3], fmt2)])
        );

      case 8:
        return (
          /* Float */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](8, [fmt1[0], fmt1[1], fmt1[2], concat_fmt(fmt1[3], fmt2)])
        );

      case 9:
        return (
          /* Bool */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](9, [concat_fmt(fmt1[0], fmt2)])
        );

      case 10:
        return (
          /* Flush */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](10, [concat_fmt(fmt1[0], fmt2)])
        );

      case 11:
        return (
          /* String_literal */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](11, [fmt1[0], concat_fmt(fmt1[1], fmt2)])
        );

      case 12:
        return (
          /* Char_literal */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](12, [fmt1[0], concat_fmt(fmt1[1], fmt2)])
        );

      case 13:
        return (
          /* Format_arg */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](13, [fmt1[0], fmt1[1], concat_fmt(fmt1[2], fmt2)])
        );

      case 14:
        return (
          /* Format_subst */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](14, [fmt1[0], fmt1[1], concat_fmt(fmt1[2], fmt2)])
        );

      case 15:
        return (
          /* Alpha */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](15, [concat_fmt(fmt1[0], fmt2)])
        );

      case 16:
        return (
          /* Theta */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](16, [concat_fmt(fmt1[0], fmt2)])
        );

      case 17:
        return (
          /* Formatting_lit */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](17, [fmt1[0], concat_fmt(fmt1[1], fmt2)])
        );

      case 18:
        return (
          /* Formatting_gen */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](18, [fmt1[0], concat_fmt(fmt1[1], fmt2)])
        );

      case 19:
        return (
          /* Reader */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](19, [concat_fmt(fmt1[0], fmt2)])
        );

      case 20:
        return (
          /* Scan_char_set */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](20, [fmt1[0], fmt1[1], concat_fmt(fmt1[2], fmt2)])
        );

      case 21:
        return (
          /* Scan_get_counter */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](21, [fmt1[0], concat_fmt(fmt1[1], fmt2)])
        );

      case 22:
        return (
          /* Scan_next_char */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](22, [concat_fmt(fmt1[0], fmt2)])
        );

      case 23:
        return (
          /* Ignored_param */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](23, [fmt1[0], concat_fmt(fmt1[1], fmt2)])
        );

      case 24:
        return (
          /* Custom */
          _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](24, [fmt1[0], fmt1[1], concat_fmt(fmt1[2], fmt2)])
        );
    }
  }
}


/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/curry.js":
/*!***************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/curry.js ***!
  \***************************************************/
/*! exports provided: app, curry_1, _1, __1, curry_2, _2, __2, curry_3, _3, __3, curry_4, _4, __4, curry_5, _5, __5, curry_6, _6, __6, curry_7, _7, __7, curry_8, _8, __8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curry_1", function() { return curry_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return _1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__1", function() { return __1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curry_2", function() { return curry_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return _2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__2", function() { return __2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curry_3", function() { return curry_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return _3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__3", function() { return __3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curry_4", function() { return curry_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return _4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__4", function() { return __4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curry_5", function() { return curry_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return _5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__5", function() { return __5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curry_6", function() { return curry_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return _6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__6", function() { return __6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curry_7", function() { return curry_7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return _7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__7", function() { return __7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curry_8", function() { return curry_8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return _8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__8", function() { return __8; });
/* harmony import */ var _caml_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml_array.js */ "./node_modules/bs-platform/lib/es6/caml_array.js");


function app(_f, _args) {
  while (true) {
    var args = _args;
    var f = _f;
    var init_arity = f.length;
    var arity = init_arity === 0 ? 1 : init_arity;
    var len = args.length;
    var d = arity - len | 0;

    if (d === 0) {
      return f.apply(null, args);
    } else if (d < 0) {
      _args = _caml_array_js__WEBPACK_IMPORTED_MODULE_0__["caml_array_sub"](args, arity, -d | 0);
      _f = f.apply(null, _caml_array_js__WEBPACK_IMPORTED_MODULE_0__["caml_array_sub"](args, 0, arity));
      continue;
    } else {
      return function (f, args) {
        return function (x) {
          return app(f, args.concat(
          /* array */
          [x]));
        };
      }(f, args);
    }
  }

  ;
}

function curry_1(o, a0, arity) {
  switch (arity) {
    case 1:
      return o(a0);

    case 2:
      return function (param) {
        return o(a0, param);
      };

    case 3:
      return function (param, param$1) {
        return o(a0, param, param$1);
      };

    case 4:
      return function (param, param$1, param$2) {
        return o(a0, param, param$1, param$2);
      };

    case 5:
      return function (param, param$1, param$2, param$3) {
        return o(a0, param, param$1, param$2, param$3);
      };

    case 6:
      return function (param, param$1, param$2, param$3, param$4) {
        return o(a0, param, param$1, param$2, param$3, param$4);
      };

    case 7:
      return function (param, param$1, param$2, param$3, param$4, param$5) {
        return o(a0, param, param$1, param$2, param$3, param$4, param$5);
      };

    default:
      return app(o,
      /* array */
      [a0]);
  }
}

function _1(o, a0) {
  var arity = o.length;

  if (arity === 1) {
    return o(a0);
  } else {
    return curry_1(o, a0, arity);
  }
}

function __1(o) {
  var arity = o.length;

  if (arity === 1) {
    return o;
  } else {
    return function (a0) {
      return _1(o, a0);
    };
  }
}

function curry_2(o, a0, a1, arity) {
  switch (arity) {
    case 1:
      return app(o(a0),
      /* array */
      [a1]);

    case 2:
      return o(a0, a1);

    case 3:
      return function (param) {
        return o(a0, a1, param);
      };

    case 4:
      return function (param, param$1) {
        return o(a0, a1, param, param$1);
      };

    case 5:
      return function (param, param$1, param$2) {
        return o(a0, a1, param, param$1, param$2);
      };

    case 6:
      return function (param, param$1, param$2, param$3) {
        return o(a0, a1, param, param$1, param$2, param$3);
      };

    case 7:
      return function (param, param$1, param$2, param$3, param$4) {
        return o(a0, a1, param, param$1, param$2, param$3, param$4);
      };

    default:
      return app(o,
      /* array */
      [a0, a1]);
  }
}

function _2(o, a0, a1) {
  var arity = o.length;

  if (arity === 2) {
    return o(a0, a1);
  } else {
    return curry_2(o, a0, a1, arity);
  }
}

function __2(o) {
  var arity = o.length;

  if (arity === 2) {
    return o;
  } else {
    return function (a0, a1) {
      return _2(o, a0, a1);
    };
  }
}

function curry_3(o, a0, a1, a2, arity) {
  switch (arity) {
    case 1:
      return app(o(a0),
      /* array */
      [a1, a2]);

    case 2:
      return app(o(a0, a1),
      /* array */
      [a2]);

    case 3:
      return o(a0, a1, a2);

    case 4:
      return function (param) {
        return o(a0, a1, a2, param);
      };

    case 5:
      return function (param, param$1) {
        return o(a0, a1, a2, param, param$1);
      };

    case 6:
      return function (param, param$1, param$2) {
        return o(a0, a1, a2, param, param$1, param$2);
      };

    case 7:
      return function (param, param$1, param$2, param$3) {
        return o(a0, a1, a2, param, param$1, param$2, param$3);
      };

    default:
      return app(o,
      /* array */
      [a0, a1, a2]);
  }
}

function _3(o, a0, a1, a2) {
  var arity = o.length;

  if (arity === 3) {
    return o(a0, a1, a2);
  } else {
    return curry_3(o, a0, a1, a2, arity);
  }
}

function __3(o) {
  var arity = o.length;

  if (arity === 3) {
    return o;
  } else {
    return function (a0, a1, a2) {
      return _3(o, a0, a1, a2);
    };
  }
}

function curry_4(o, a0, a1, a2, a3, arity) {
  switch (arity) {
    case 1:
      return app(o(a0),
      /* array */
      [a1, a2, a3]);

    case 2:
      return app(o(a0, a1),
      /* array */
      [a2, a3]);

    case 3:
      return app(o(a0, a1, a2),
      /* array */
      [a3]);

    case 4:
      return o(a0, a1, a2, a3);

    case 5:
      return function (param) {
        return o(a0, a1, a2, a3, param);
      };

    case 6:
      return function (param, param$1) {
        return o(a0, a1, a2, a3, param, param$1);
      };

    case 7:
      return function (param, param$1, param$2) {
        return o(a0, a1, a2, a3, param, param$1, param$2);
      };

    default:
      return app(o,
      /* array */
      [a0, a1, a2, a3]);
  }
}

function _4(o, a0, a1, a2, a3) {
  var arity = o.length;

  if (arity === 4) {
    return o(a0, a1, a2, a3);
  } else {
    return curry_4(o, a0, a1, a2, a3, arity);
  }
}

function __4(o) {
  var arity = o.length;

  if (arity === 4) {
    return o;
  } else {
    return function (a0, a1, a2, a3) {
      return _4(o, a0, a1, a2, a3);
    };
  }
}

function curry_5(o, a0, a1, a2, a3, a4, arity) {
  switch (arity) {
    case 1:
      return app(o(a0),
      /* array */
      [a1, a2, a3, a4]);

    case 2:
      return app(o(a0, a1),
      /* array */
      [a2, a3, a4]);

    case 3:
      return app(o(a0, a1, a2),
      /* array */
      [a3, a4]);

    case 4:
      return app(o(a0, a1, a2, a3),
      /* array */
      [a4]);

    case 5:
      return o(a0, a1, a2, a3, a4);

    case 6:
      return function (param) {
        return o(a0, a1, a2, a3, a4, param);
      };

    case 7:
      return function (param, param$1) {
        return o(a0, a1, a2, a3, a4, param, param$1);
      };

    default:
      return app(o,
      /* array */
      [a0, a1, a2, a3, a4]);
  }
}

function _5(o, a0, a1, a2, a3, a4) {
  var arity = o.length;

  if (arity === 5) {
    return o(a0, a1, a2, a3, a4);
  } else {
    return curry_5(o, a0, a1, a2, a3, a4, arity);
  }
}

function __5(o) {
  var arity = o.length;

  if (arity === 5) {
    return o;
  } else {
    return function (a0, a1, a2, a3, a4) {
      return _5(o, a0, a1, a2, a3, a4);
    };
  }
}

function curry_6(o, a0, a1, a2, a3, a4, a5, arity) {
  switch (arity) {
    case 1:
      return app(o(a0),
      /* array */
      [a1, a2, a3, a4, a5]);

    case 2:
      return app(o(a0, a1),
      /* array */
      [a2, a3, a4, a5]);

    case 3:
      return app(o(a0, a1, a2),
      /* array */
      [a3, a4, a5]);

    case 4:
      return app(o(a0, a1, a2, a3),
      /* array */
      [a4, a5]);

    case 5:
      return app(o(a0, a1, a2, a3, a4),
      /* array */
      [a5]);

    case 6:
      return o(a0, a1, a2, a3, a4, a5);

    case 7:
      return function (param) {
        return o(a0, a1, a2, a3, a4, a5, param);
      };

    default:
      return app(o,
      /* array */
      [a0, a1, a2, a3, a4, a5]);
  }
}

function _6(o, a0, a1, a2, a3, a4, a5) {
  var arity = o.length;

  if (arity === 6) {
    return o(a0, a1, a2, a3, a4, a5);
  } else {
    return curry_6(o, a0, a1, a2, a3, a4, a5, arity);
  }
}

function __6(o) {
  var arity = o.length;

  if (arity === 6) {
    return o;
  } else {
    return function (a0, a1, a2, a3, a4, a5) {
      return _6(o, a0, a1, a2, a3, a4, a5);
    };
  }
}

function curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity) {
  switch (arity) {
    case 1:
      return app(o(a0),
      /* array */
      [a1, a2, a3, a4, a5, a6]);

    case 2:
      return app(o(a0, a1),
      /* array */
      [a2, a3, a4, a5, a6]);

    case 3:
      return app(o(a0, a1, a2),
      /* array */
      [a3, a4, a5, a6]);

    case 4:
      return app(o(a0, a1, a2, a3),
      /* array */
      [a4, a5, a6]);

    case 5:
      return app(o(a0, a1, a2, a3, a4),
      /* array */
      [a5, a6]);

    case 6:
      return app(o(a0, a1, a2, a3, a4, a5),
      /* array */
      [a6]);

    case 7:
      return o(a0, a1, a2, a3, a4, a5, a6);

    default:
      return app(o,
      /* array */
      [a0, a1, a2, a3, a4, a5, a6]);
  }
}

function _7(o, a0, a1, a2, a3, a4, a5, a6) {
  var arity = o.length;

  if (arity === 7) {
    return o(a0, a1, a2, a3, a4, a5, a6);
  } else {
    return curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity);
  }
}

function __7(o) {
  var arity = o.length;

  if (arity === 7) {
    return o;
  } else {
    return function (a0, a1, a2, a3, a4, a5, a6) {
      return _7(o, a0, a1, a2, a3, a4, a5, a6);
    };
  }
}

function curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity) {
  switch (arity) {
    case 1:
      return app(o(a0),
      /* array */
      [a1, a2, a3, a4, a5, a6, a7]);

    case 2:
      return app(o(a0, a1),
      /* array */
      [a2, a3, a4, a5, a6, a7]);

    case 3:
      return app(o(a0, a1, a2),
      /* array */
      [a3, a4, a5, a6, a7]);

    case 4:
      return app(o(a0, a1, a2, a3),
      /* array */
      [a4, a5, a6, a7]);

    case 5:
      return app(o(a0, a1, a2, a3, a4),
      /* array */
      [a5, a6, a7]);

    case 6:
      return app(o(a0, a1, a2, a3, a4, a5),
      /* array */
      [a6, a7]);

    case 7:
      return app(o(a0, a1, a2, a3, a4, a5, a6),
      /* array */
      [a7]);

    default:
      return app(o,
      /* array */
      [a0, a1, a2, a3, a4, a5, a6, a7]);
  }
}

function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
  var arity = o.length;

  if (arity === 8) {
    return o(a0, a1, a2, a3, a4, a5, a6, a7);
  } else {
    return curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity);
  }
}

function __8(o) {
  var arity = o.length;

  if (arity === 8) {
    return o;
  } else {
    return function (a0, a1, a2, a3, a4, a5, a6, a7) {
      return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);
    };
  }
}


/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/pervasives.js":
/*!********************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/pervasives.js ***!
  \********************************************************/
/*! exports provided: invalid_arg, failwith, Exit, abs, max_int, min_int, lnot, epsilon_float, classify_float, char_of_int, string_of_bool, bool_of_string, string_of_float, $at, stdin, stdout, stderr, print_char, print_string, print_bytes, print_int, print_float, print_newline, prerr_char, prerr_string, prerr_bytes, prerr_int, prerr_float, prerr_newline, read_line, read_int, read_float, open_out, open_out_bin, open_out_gen, flush, flush_all, output_char, output_string, output_bytes, output, output_substring, output_byte, output_binary_int, output_value, seek_out, pos_out, out_channel_length, close_out, close_out_noerr, set_binary_mode_out, open_in, open_in_bin, open_in_gen, input_char, input_line, input, really_input, really_input_string, input_byte, input_binary_int, input_value, seek_in, pos_in, in_channel_length, close_in, close_in_noerr, set_binary_mode_in, LargeFile, string_of_format, $caret$caret, exit, at_exit, valid_float_lexem, unsafe_really_input, do_at_exit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalid_arg", function() { return invalid_arg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failwith", function() { return failwith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exit", function() { return Exit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max_int", function() { return max_int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min_int", function() { return min_int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lnot", function() { return lnot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon_float", function() { return epsilon_float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classify_float", function() { return classify_float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "char_of_int", function() { return char_of_int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string_of_bool", function() { return string_of_bool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bool_of_string", function() { return bool_of_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string_of_float", function() { return string_of_float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$at", function() { return $at; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stdin", function() { return stdin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stdout", function() { return stdout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stderr", function() { return stderr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print_char", function() { return print_char; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print_string", function() { return print_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print_bytes", function() { return print_bytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print_int", function() { return print_int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print_float", function() { return print_float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print_newline", function() { return print_newline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prerr_char", function() { return prerr_char; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prerr_string", function() { return prerr_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prerr_bytes", function() { return prerr_bytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prerr_int", function() { return prerr_int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prerr_float", function() { return prerr_float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prerr_newline", function() { return prerr_newline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "read_line", function() { return read_line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "read_int", function() { return read_int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "read_float", function() { return read_float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "open_out", function() { return open_out; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "open_out_bin", function() { return open_out_bin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "open_out_gen", function() { return open_out_gen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush_all", function() { return flush_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "output_char", function() { return output_char; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "output_string", function() { return output_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "output_bytes", function() { return output_bytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "output", function() { return output; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "output_substring", function() { return output_substring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "output_byte", function() { return output_byte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "output_binary_int", function() { return output_binary_int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "output_value", function() { return output_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seek_out", function() { return seek_out; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pos_out", function() { return pos_out; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "out_channel_length", function() { return out_channel_length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close_out", function() { return close_out; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close_out_noerr", function() { return close_out_noerr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_binary_mode_out", function() { return set_binary_mode_out; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "open_in", function() { return open_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "open_in_bin", function() { return open_in_bin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "open_in_gen", function() { return open_in_gen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input_char", function() { return input_char; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input_line", function() { return input_line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input", function() { return input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "really_input", function() { return really_input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "really_input_string", function() { return really_input_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input_byte", function() { return input_byte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input_binary_int", function() { return input_binary_int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input_value", function() { return input_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seek_in", function() { return seek_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pos_in", function() { return pos_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "in_channel_length", function() { return in_channel_length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close_in", function() { return close_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close_in_noerr", function() { return close_in_noerr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_binary_mode_in", function() { return set_binary_mode_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LargeFile", function() { return LargeFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string_of_format", function() { return string_of_format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$caret$caret", function() { return $caret$caret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exit", function() { return exit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "at_exit", function() { return at_exit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valid_float_lexem", function() { return valid_float_lexem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsafe_really_input", function() { return unsafe_really_input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "do_at_exit", function() { return do_at_exit; });
/* harmony import */ var _curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry.js */ "./node_modules/bs-platform/lib/es6/curry.js");
/* harmony import */ var _caml_io_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caml_io.js */ "./node_modules/bs-platform/lib/es6/caml_io.js");
/* harmony import */ var _caml_sys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caml_sys.js */ "./node_modules/bs-platform/lib/es6/caml_sys.js");
/* harmony import */ var _caml_bytes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caml_bytes.js */ "./node_modules/bs-platform/lib/es6/caml_bytes.js");
/* harmony import */ var _caml_format_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./caml_format.js */ "./node_modules/bs-platform/lib/es6/caml_format.js");
/* harmony import */ var _caml_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./caml_string.js */ "./node_modules/bs-platform/lib/es6/caml_string.js");
/* harmony import */ var _caml_exceptions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./caml_exceptions.js */ "./node_modules/bs-platform/lib/es6/caml_exceptions.js");
/* harmony import */ var _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./caml_missing_polyfill.js */ "./node_modules/bs-platform/lib/es6/caml_missing_polyfill.js");
/* harmony import */ var _caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./caml_builtin_exceptions.js */ "./node_modules/bs-platform/lib/es6/caml_builtin_exceptions.js");
/* harmony import */ var _camlinternalFormatBasics_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./camlinternalFormatBasics.js */ "./node_modules/bs-platform/lib/es6/camlinternalFormatBasics.js");











function failwith(s) {
  throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_8__["failure"], s];
}

function invalid_arg(s) {
  throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_8__["invalid_argument"], s];
}

var Exit = _caml_exceptions_js__WEBPACK_IMPORTED_MODULE_6__["create"]("Pervasives.Exit");

function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x | 0;
  }
}

function lnot(x) {
  return x ^ -1;
}

var min_int = -2147483648;

function classify_float(x) {
  if (isFinite(x)) {
    if (Math.abs(x) >= 2.2250738585072014e-308) {
      return (
        /* FP_normal */
        0
      );
    } else if (x !== 0) {
      return (
        /* FP_subnormal */
        1
      );
    } else {
      return (
        /* FP_zero */
        2
      );
    }
  } else if (isNaN(x)) {
    return (
      /* FP_nan */
      4
    );
  } else {
    return (
      /* FP_infinite */
      3
    );
  }
}

function char_of_int(n) {
  if (n < 0 || n > 255) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_8__["invalid_argument"], "char_of_int"];
  } else {
    return n;
  }
}

function string_of_bool(b) {
  if (b) {
    return "true";
  } else {
    return "false";
  }
}

function bool_of_string(param) {
  switch (param) {
    case "false":
      return false;

    case "true":
      return true;

    default:
      throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_8__["invalid_argument"], "bool_of_string"];
  }
}

function valid_float_lexem(s) {
  var l = s.length;
  var _i = 0;

  while (true) {
    var i = _i;

    if (i >= l) {
      return s + ".";
    } else {
      var match = _caml_string_js__WEBPACK_IMPORTED_MODULE_5__["get"](s, i);

      if (match >= 48) {
        if (match >= 58) {
          return s;
        } else {
          _i = i + 1 | 0;
          continue;
        }
      } else if (match !== 45) {
        return s;
      } else {
        _i = i + 1 | 0;
        continue;
      }
    }
  }

  ;
}

function string_of_float(f) {
  return valid_float_lexem(_caml_format_js__WEBPACK_IMPORTED_MODULE_4__["caml_format_float"]("%.12g", f));
}

function $at(l1, l2) {
  if (l1) {
    return (
      /* :: */
      [l1[0], $at(l1[1], l2)]
    );
  } else {
    return l2;
  }
}

var stdin = _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["stdin"];
var stdout = _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["stdout"];
var stderr = _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["stderr"];

function open_out_gen(mode, perm, name) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_open_descriptor_out");
}

function open_out(name) {
  return open_out_gen(
  /* :: */
  [
  /* Open_wronly */
  1,
  /* :: */
  [
  /* Open_creat */
  3,
  /* :: */
  [
  /* Open_trunc */
  4,
  /* :: */
  [
  /* Open_text */
  7,
  /* [] */
  0]]]], 438, name);
}

function open_out_bin(name) {
  return open_out_gen(
  /* :: */
  [
  /* Open_wronly */
  1,
  /* :: */
  [
  /* Open_creat */
  3,
  /* :: */
  [
  /* Open_trunc */
  4,
  /* :: */
  [
  /* Open_binary */
  6,
  /* [] */
  0]]]], 438, name);
}

function flush_all(param) {
  var _param = _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["caml_ml_out_channels_list"](
  /* () */
  0);

  while (true) {
    var param$1 = _param;

    if (param$1) {
      try {
        _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["caml_ml_flush"](param$1[0]);
      } catch (exn) {}

      _param = param$1[1];
      continue;
    } else {
      return (
        /* () */
        0
      );
    }
  }

  ;
}

function output_bytes(oc, s) {
  return _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["caml_ml_output"](oc, s, 0, s.length);
}

function output_string(oc, s) {
  return _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["caml_ml_output"](oc, s, 0, s.length);
}

function output(oc, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_8__["invalid_argument"], "output"];
  } else {
    return _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["caml_ml_output"](oc, s, ofs, len);
  }
}

function output_substring(oc, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_8__["invalid_argument"], "output_substring"];
  } else {
    return _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["caml_ml_output"](oc, s, ofs, len);
  }
}

function output_value(chan, v) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_output_value");
}

function close_out(oc) {
  _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["caml_ml_flush"](oc);
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_close_channel");
}

function close_out_noerr(oc) {
  try {
    _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["caml_ml_flush"](oc);
  } catch (exn) {}

  try {
    return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_close_channel");
  } catch (exn$1) {
    return (
      /* () */
      0
    );
  }
}

function open_in_gen(mode, perm, name) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_open_descriptor_in");
}

function open_in(name) {
  return open_in_gen(
  /* :: */
  [
  /* Open_rdonly */
  0,
  /* :: */
  [
  /* Open_text */
  7,
  /* [] */
  0]], 0, name);
}

function open_in_bin(name) {
  return open_in_gen(
  /* :: */
  [
  /* Open_rdonly */
  0,
  /* :: */
  [
  /* Open_binary */
  6,
  /* [] */
  0]], 0, name);
}

function input(ic, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_8__["invalid_argument"], "input"];
  } else {
    return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_input");
  }
}

function unsafe_really_input(ic, s, _ofs, _len) {
  while (true) {
    var len = _len;
    var ofs = _ofs;

    if (len <= 0) {
      return (
        /* () */
        0
      );
    } else {
      var r = _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_input");

      if (r === 0) {
        throw _caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_8__["end_of_file"];
      } else {
        _len = len - r | 0;
        _ofs = ofs + r | 0;
        continue;
      }
    }
  }

  ;
}

function really_input(ic, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_8__["invalid_argument"], "really_input"];
  } else {
    return unsafe_really_input(ic, s, ofs, len);
  }
}

function really_input_string(ic, len) {
  var s = _caml_bytes_js__WEBPACK_IMPORTED_MODULE_3__["caml_create_bytes"](len);
  really_input(ic, s, 0, len);
  return _caml_bytes_js__WEBPACK_IMPORTED_MODULE_3__["bytes_to_string"](s);
}

function input_line(chan) {
  var build_result = function (buf, _pos, _param) {
    while (true) {
      var param = _param;
      var pos = _pos;

      if (param) {
        var hd = param[0];
        var len = hd.length;
        _caml_bytes_js__WEBPACK_IMPORTED_MODULE_3__["caml_blit_bytes"](hd, 0, buf, pos - len | 0, len);
        _param = param[1];
        _pos = pos - len | 0;
        continue;
      } else {
        return buf;
      }
    }

    ;
  };

  var scan = function (_accu, _len) {
    while (true) {
      var len = _len;
      var accu = _accu;
      var n = _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_input_scan_line");

      if (n === 0) {
        if (accu) {
          return build_result(_caml_bytes_js__WEBPACK_IMPORTED_MODULE_3__["caml_create_bytes"](len), len, accu);
        } else {
          throw _caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_8__["end_of_file"];
        }
      } else if (n > 0) {
        var res = _caml_bytes_js__WEBPACK_IMPORTED_MODULE_3__["caml_create_bytes"](n - 1 | 0);
        _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_input");
        _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_input_char");

        if (accu) {
          var len$1 = (len + n | 0) - 1 | 0;
          return build_result(_caml_bytes_js__WEBPACK_IMPORTED_MODULE_3__["caml_create_bytes"](len$1), len$1,
          /* :: */
          [res, accu]);
        } else {
          return res;
        }
      } else {
        var beg = _caml_bytes_js__WEBPACK_IMPORTED_MODULE_3__["caml_create_bytes"](-n | 0);
        _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_input");
        _len = len - n | 0;
        _accu =
        /* :: */
        [beg, accu];
        continue;
      }
    }

    ;
  };

  return _caml_bytes_js__WEBPACK_IMPORTED_MODULE_3__["bytes_to_string"](scan(
  /* [] */
  0, 0));
}

function close_in_noerr(ic) {
  try {
    return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_close_channel");
  } catch (exn) {
    return (
      /* () */
      0
    );
  }
}

function print_char(c) {
  return _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["caml_ml_output_char"](stdout, c);
}

function print_string(s) {
  return output_string(stdout, s);
}

function print_bytes(s) {
  return output_bytes(stdout, s);
}

function print_int(i) {
  return output_string(stdout, String(i));
}

function print_float(f) {
  return output_string(stdout, valid_float_lexem(_caml_format_js__WEBPACK_IMPORTED_MODULE_4__["caml_format_float"]("%.12g", f)));
}

function print_newline(param) {
  _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["caml_ml_output_char"](stdout,
  /* "\n" */
  10);
  return _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["caml_ml_flush"](stdout);
}

function prerr_char(c) {
  return _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["caml_ml_output_char"](stderr, c);
}

function prerr_string(s) {
  return output_string(stderr, s);
}

function prerr_bytes(s) {
  return output_bytes(stderr, s);
}

function prerr_int(i) {
  return output_string(stderr, String(i));
}

function prerr_float(f) {
  return output_string(stderr, valid_float_lexem(_caml_format_js__WEBPACK_IMPORTED_MODULE_4__["caml_format_float"]("%.12g", f)));
}

function prerr_newline(param) {
  _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["caml_ml_output_char"](stderr,
  /* "\n" */
  10);
  return _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["caml_ml_flush"](stderr);
}

function read_line(param) {
  _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["caml_ml_flush"](stdout);
  return input_line(stdin);
}

function read_int(param) {
  return _caml_format_js__WEBPACK_IMPORTED_MODULE_4__["caml_int_of_string"]((_caml_io_js__WEBPACK_IMPORTED_MODULE_1__["caml_ml_flush"](stdout), input_line(stdin)));
}

function read_float(param) {
  return _caml_format_js__WEBPACK_IMPORTED_MODULE_4__["caml_float_of_string"]((_caml_io_js__WEBPACK_IMPORTED_MODULE_1__["caml_ml_flush"](stdout), input_line(stdin)));
}

function string_of_format(param) {
  return param[1];
}

function $caret$caret(param, param$1) {
  return (
    /* Format */
    [_camlinternalFormatBasics_js__WEBPACK_IMPORTED_MODULE_9__["concat_fmt"](param[0], param$1[0]), param[1] + ("%," + param$1[1])]
  );
}

var exit_function =
/* record */
[
/* contents */
flush_all];

function at_exit(f) {
  var g = exit_function[0];

  exit_function[0] = function (param) {
    _curry_js__WEBPACK_IMPORTED_MODULE_0__["_1"](f,
    /* () */
    0);

    return _curry_js__WEBPACK_IMPORTED_MODULE_0__["_1"](g,
    /* () */
    0);
  };

  return (
    /* () */
    0
  );
}

function do_at_exit(param) {
  return _curry_js__WEBPACK_IMPORTED_MODULE_0__["_1"](exit_function[0],
  /* () */
  0);
}

function exit(retcode) {
  do_at_exit(
  /* () */
  0);
  return _caml_sys_js__WEBPACK_IMPORTED_MODULE_2__["caml_sys_exit"](retcode);
}

var max_int = 2147483647;
var epsilon_float = 2.220446049250313e-16;
var flush = _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["caml_ml_flush"];
var output_char = _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["caml_ml_output_char"];
var output_byte = _caml_io_js__WEBPACK_IMPORTED_MODULE_1__["caml_ml_output_char"];

function output_binary_int(prim, prim$1) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_output_int");
}

function seek_out(prim, prim$1) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_seek_out");
}

function pos_out(prim) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_pos_out");
}

function out_channel_length(prim) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_channel_size");
}

function set_binary_mode_out(prim, prim$1) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_set_binary_mode");
}

function input_char(prim) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_input_char");
}

function input_byte(prim) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_input_char");
}

function input_binary_int(prim) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_input_int");
}

function input_value(prim) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_input_value");
}

function seek_in(prim, prim$1) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_seek_in");
}

function pos_in(prim) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_pos_in");
}

function in_channel_length(prim) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_channel_size");
}

function close_in(prim) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_close_channel");
}

function set_binary_mode_in(prim, prim$1) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_set_binary_mode");
}

function LargeFile_000(prim, prim$1) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_seek_out_64");
}

function LargeFile_001(prim) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_pos_out_64");
}

function LargeFile_002(prim) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_channel_size_64");
}

function LargeFile_003(prim, prim$1) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_seek_in_64");
}

function LargeFile_004(prim) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_pos_in_64");
}

function LargeFile_005(prim) {
  return _caml_missing_polyfill_js__WEBPACK_IMPORTED_MODULE_7__["not_implemented"]("caml_ml_channel_size_64");
}

var LargeFile = [LargeFile_000, LargeFile_001, LargeFile_002, LargeFile_003, LargeFile_004, LargeFile_005];

/* No side effect */

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.bs.js":
/*!***************************!*\
  !*** ./pages/index.bs.js ***!
  \***************************/
/*! exports provided: make, $$default, default, getInitialProps, inject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "make", function() { return make; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$default", function() { return $$default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return $$default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialProps", function() { return getInitialProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return inject; });
/* harmony import */ var bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bs-platform/lib/es6/curry.js */ "./node_modules/bs-platform/lib/es6/curry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_bs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header.bs.js */ "./components/Header.bs.js");
/* harmony import */ var _components_Counter_bs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Counter.bs.js */ "./components/Counter.bs.js");
/* harmony import */ var bs_platform_lib_es6_pervasives_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bs-platform/lib/es6/pervasives.js */ "./node_modules/bs-platform/lib/es6/pervasives.js");
// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE






function Index(Props) {
  var onServer = Props.onServer;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", undefined, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Header_bs_js__WEBPACK_IMPORTED_MODULE_2__["make"], {}), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", undefined, "HOME PAGE is here!"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", undefined, "onServer: " + bs_platform_lib_es6_pervasives_js__WEBPACK_IMPORTED_MODULE_4__["string_of_bool"](onServer)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Counter_bs_js__WEBPACK_IMPORTED_MODULE_3__["make"], {}));
}

function getInitialProps(context) {
  return new Promise(function (resolve, param) {
    var match = context.req;
    var onServer = !(match == null);
    return resolve({
      onServer: onServer
    });
  });
}

var inject = (cls, fn) => cls.getInitialProps = fn;

bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__["_2"](inject, Index, getInitialProps);

var make = Index;
var $$default = Index;

/* inject Not a pure module */

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/index.bs.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bg/benzguo/memopub/pages/index.bs.js */"./pages/index.bs.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map