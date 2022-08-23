module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/signerconnect.js":
/*!******************************!*\
  !*** ./lib/signerconnect.js ***!
  \******************************/
/*! exports provided: getProvider, generateSignature, getMetamaskIdentity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProvider", function() { return getProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSignature", function() { return generateSignature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetamaskIdentity", function() { return getMetamaskIdentity; });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ "ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _textile_hub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @textile/hub */ "@textile/hub");
/* harmony import */ var _textile_hub__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_textile_hub__WEBPACK_IMPORTED_MODULE_2__);




const generateMessageForEntropy = (ethereum_address, application_name) => {
  return 'The Ethereum address used by this application is: \n' + '\n' + ethereum_address;
};

const getSigner = async () => {
  if (!window.ethereum) {
    throw new Error('Ethereum is not connected. Please download Metamask from https://metamask.io/download.html');
  }

  console.debug('Initializing web3 provider...');
  const provider = new ethers__WEBPACK_IMPORTED_MODULE_0__["providers"].Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return signer;
};

const getProvider = async () => {
  if (!window.ethereum) {
    throw new Error('Ethereum is not connected. Please download Metamask from https://metamask.io/download.html');
  }

  console.debug('Initializing web3 provider...');
  window.ethereum.enable();
  const provider = new ethers__WEBPACK_IMPORTED_MODULE_0__["providers"].Web3Provider(window.ethereum);
  return provider;
};

const getAddressAndSigner = async () => {
  const signer = await getSigner(); // @ts-ignore

  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts'
  });

  if (accounts.length === 0) {
    throw new Error('No account is provided. Please provide an account to this application.');
  }

  const address = accounts[0];
  return {
    address,
    signer
  };
};

const generateSignature = async () => {
  const metamask = await getAddressAndSigner(); // avoid sending the raw secret by hashing it first

  const secret = Object(bcryptjs__WEBPACK_IMPORTED_MODULE_1__["hashSync"])("Password", 10);
  const message = generateMessageForEntropy(metamask.address, 'cermaic demo');
  const signedText = await metamask.signer.signMessage(message);
  const hash = ethers__WEBPACK_IMPORTED_MODULE_0__["utils"].keccak256(signedText);
  const seed = hash // @ts-ignore
  .replace('0x', '') // @ts-ignore
  .match(/.{2}/g).map(hexNoPrefix => ethers__WEBPACK_IMPORTED_MODULE_0__["BigNumber"].from('0x' + hexNoPrefix).toNumber());
  return {
    seed,
    metamask
  };
};
const getMetamaskIdentity = async () => {
  const metamask = await getAddressAndSigner(); // avoid sending the raw secret by hashing it first

  const secret = Object(bcryptjs__WEBPACK_IMPORTED_MODULE_1__["hashSync"])("Password", 10);
  const message = generateMessageForEntropy(metamask.address, 'cermaic demo');
  const signedText = await metamask.signer.signMessage(message);
  const hash = ethers__WEBPACK_IMPORTED_MODULE_0__["utils"].keccak256(signedText);
  const array = hash // @ts-ignore
  .replace('0x', '') // @ts-ignore
  .match(/.{2}/g).map(hexNoPrefix => ethers__WEBPACK_IMPORTED_MODULE_0__["BigNumber"].from('0x' + hexNoPrefix).toNumber());

  if (array.length !== 32) {
    throw new Error('Hash of signature is not the correct size! Something went wrong!');
  }

  const identity = _textile_hub__WEBPACK_IMPORTED_MODULE_2__["PrivateKey"].fromRawEd25519Seed(Uint8Array.from(array));
  console.log(identity.toString()); // Your app can now use this identity for generating a user Mailbox, Threads, Buckets, etc

  return identity;
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @geist-ui/react */ "@geist-ui/react");
/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_signerconnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/signerconnect */ "./lib/signerconnect.js");
var _jsxFileName = "C:\\Users\\shabb\\Project\\Resci\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function MyApp({
  Component,
  pageProps
}) {
  const {
    0: provider,
    1: setProvider
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const connectUser = async () => {
    const {
      seed,
      metamask
    } = await Object(_lib_signerconnect__WEBPACK_IMPORTED_MODULE_2__["generateSignature"])();
    setProvider(metamask);
  };

  pageProps['connectUser'] = connectUser;
  return __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["GeistProvider"], {
    theme: {
      type: 'light'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["CssBaseline"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx(Component, _extends({}, pageProps, {
    provider: provider,
    connectUser: connectUser,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@geist-ui/react":
/*!**********************************!*\
  !*** external "@geist-ui/react" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@geist-ui/react");

/***/ }),

/***/ "@textile/hub":
/*!*******************************!*\
  !*** external "@textile/hub" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@textile/hub");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL3NpZ25lcmNvbm5lY3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZ2Vpc3QtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdGV4dGlsZS9odWJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV0aGVyc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiZ2VuZXJhdGVNZXNzYWdlRm9yRW50cm9weSIsImV0aGVyZXVtX2FkZHJlc3MiLCJhcHBsaWNhdGlvbl9uYW1lIiwiZ2V0U2lnbmVyIiwid2luZG93IiwiZXRoZXJldW0iLCJFcnJvciIsImNvbnNvbGUiLCJkZWJ1ZyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0UHJvdmlkZXIiLCJlbmFibGUiLCJnZXRBZGRyZXNzQW5kU2lnbmVyIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwibGVuZ3RoIiwiYWRkcmVzcyIsImdlbmVyYXRlU2lnbmF0dXJlIiwibWV0YW1hc2siLCJzZWNyZXQiLCJoYXNoU3luYyIsIm1lc3NhZ2UiLCJzaWduZWRUZXh0Iiwic2lnbk1lc3NhZ2UiLCJoYXNoIiwidXRpbHMiLCJrZWNjYWsyNTYiLCJzZWVkIiwicmVwbGFjZSIsIm1hdGNoIiwibWFwIiwiaGV4Tm9QcmVmaXgiLCJCaWdOdW1iZXIiLCJmcm9tIiwidG9OdW1iZXIiLCJnZXRNZXRhbWFza0lkZW50aXR5IiwiYXJyYXkiLCJpZGVudGl0eSIsIlByaXZhdGVLZXkiLCJmcm9tUmF3RWQyNTUxOVNlZWQiLCJVaW50OEFycmF5IiwibG9nIiwidG9TdHJpbmciLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9w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MkMsV0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZGLENBREY7QUFNRDs7QUFDY0wsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkEsNEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IEJpZ051bWJlciwgcHJvdmlkZXJzLCB1dGlscyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCB7IGhhc2hTeW5jIH0gZnJvbSAnYmNyeXB0anMnXG5pbXBvcnQgeyBQcml2YXRlS2V5IH0gZnJvbSAnQHRleHRpbGUvaHViJ1xuXG5jb25zdCBnZW5lcmF0ZU1lc3NhZ2VGb3JFbnRyb3B5ID0gKGV0aGVyZXVtX2FkZHJlc3MsIGFwcGxpY2F0aW9uX25hbWUpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgJ1RoZSBFdGhlcmV1bSBhZGRyZXNzIHVzZWQgYnkgdGhpcyBhcHBsaWNhdGlvbiBpczogXFxuJyArXG4gICAgICAnXFxuJyArXG4gICAgICBldGhlcmV1bV9hZGRyZXNzXG4gICAgKTtcbn1cblxuY29uc3QgZ2V0U2lnbmVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghd2luZG93LmV0aGVyZXVtKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdFdGhlcmV1bSBpcyBub3QgY29ubmVjdGVkLiBQbGVhc2UgZG93bmxvYWQgTWV0YW1hc2sgZnJvbSBodHRwczovL21ldGFtYXNrLmlvL2Rvd25sb2FkLmh0bWwnXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc29sZS5kZWJ1ZygnSW5pdGlhbGl6aW5nIHdlYjMgcHJvdmlkZXIuLi4nKTtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgcmV0dXJuIHNpZ25lclxufVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvdmlkZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCF3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0V0aGVyZXVtIGlzIG5vdCBjb25uZWN0ZWQuIFBsZWFzZSBkb3dubG9hZCBNZXRhbWFzayBmcm9tIGh0dHBzOi8vbWV0YW1hc2suaW8vZG93bmxvYWQuaHRtbCdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmRlYnVnKCdJbml0aWFsaXppbmcgd2ViMyBwcm92aWRlci4uLicpO1xuICAgIHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKVxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IHByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICByZXR1cm4gcHJvdmlkZXJcbn1cblxuY29uc3QgZ2V0QWRkcmVzc0FuZFNpZ25lciA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IGdldFNpZ25lcigpXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYWNjb3VudCBpcyBwcm92aWRlZC4gUGxlYXNlIHByb3ZpZGUgYW4gYWNjb3VudCB0byB0aGlzIGFwcGxpY2F0aW9uLicpO1xuICAgIH1cbiAgICBjb25zdCBhZGRyZXNzID0gYWNjb3VudHNbMF07XG4gICAgcmV0dXJuIHthZGRyZXNzLCBzaWduZXJ9XG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVNpZ25hdHVyZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBtZXRhbWFzayA9IGF3YWl0IGdldEFkZHJlc3NBbmRTaWduZXIoKVxuICAgIC8vIGF2b2lkIHNlbmRpbmcgdGhlIHJhdyBzZWNyZXQgYnkgaGFzaGluZyBpdCBmaXJzdFxuICAgIGNvbnN0IHNlY3JldCA9IGhhc2hTeW5jKFwiUGFzc3dvcmRcIiwgMTApXG4gICAgY29uc3QgbWVzc2FnZSA9IGdlbmVyYXRlTWVzc2FnZUZvckVudHJvcHkobWV0YW1hc2suYWRkcmVzcywgJ2Nlcm1haWMgZGVtbycpXG4gICAgY29uc3Qgc2lnbmVkVGV4dCA9IGF3YWl0IG1ldGFtYXNrLnNpZ25lci5zaWduTWVzc2FnZShtZXNzYWdlKTtcbiAgICBjb25zdCBoYXNoID0gdXRpbHMua2VjY2FrMjU2KHNpZ25lZFRleHQpO1xuICAgIGNvbnN0IHNlZWQgPSBoYXNoXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgLnJlcGxhY2UoJzB4JywgJycpXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgLm1hdGNoKC8uezJ9L2cpXG4gICAgICAgIC5tYXAoKGhleE5vUHJlZml4KSA9PiBCaWdOdW1iZXIuZnJvbSgnMHgnICsgaGV4Tm9QcmVmaXgpLnRvTnVtYmVyKCkpXG4gICAgcmV0dXJuIHtzZWVkLCBtZXRhbWFza31cbn1cblxuZXhwb3J0IGNvbnN0IGdldE1ldGFtYXNrSWRlbnRpdHkgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbWV0YW1hc2sgPSBhd2FpdCBnZXRBZGRyZXNzQW5kU2lnbmVyKClcbiAgICAvLyBhdm9pZCBzZW5kaW5nIHRoZSByYXcgc2VjcmV0IGJ5IGhhc2hpbmcgaXQgZmlyc3RcbiAgICBjb25zdCBzZWNyZXQgPSBoYXNoU3luYyhcIlBhc3N3b3JkXCIsIDEwKVxuICAgIGNvbnN0IG1lc3NhZ2UgPSBnZW5lcmF0ZU1lc3NhZ2VGb3JFbnRyb3B5KG1ldGFtYXNrLmFkZHJlc3MsICdjZXJtYWljIGRlbW8nKVxuICAgIGNvbnN0IHNpZ25lZFRleHQgPSBhd2FpdCBtZXRhbWFzay5zaWduZXIuc2lnbk1lc3NhZ2UobWVzc2FnZSk7XG4gICAgY29uc3QgaGFzaCA9IHV0aWxzLmtlY2NhazI1NihzaWduZWRUZXh0KTtcbiAgICBjb25zdCBhcnJheSA9IGhhc2hcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAucmVwbGFjZSgnMHgnLCAnJylcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAubWF0Y2goLy57Mn0vZylcbiAgICAgICAgLm1hcCgoaGV4Tm9QcmVmaXgpID0+IEJpZ051bWJlci5mcm9tKCcweCcgKyBoZXhOb1ByZWZpeCkudG9OdW1iZXIoKSlcblxuICAgIGlmIChhcnJheS5sZW5ndGggIT09IDMyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSGFzaCBvZiBzaWduYXR1cmUgaXMgbm90IHRoZSBjb3JyZWN0IHNpemUhIFNvbWV0aGluZyB3ZW50IHdyb25nIScpO1xuICAgIH1cbiAgICBjb25zdCBpZGVudGl0eSA9IFByaXZhdGVLZXkuZnJvbVJhd0VkMjU1MTlTZWVkKFVpbnQ4QXJyYXkuZnJvbShhcnJheSkpXG4gICAgY29uc29sZS5sb2coaWRlbnRpdHkudG9TdHJpbmcoKSlcblxuICAgIC8vIFlvdXIgYXBwIGNhbiBub3cgdXNlIHRoaXMgaWRlbnRpdHkgZm9yIGdlbmVyYXRpbmcgYSB1c2VyIE1haWxib3gsIFRocmVhZHMsIEJ1Y2tldHMsIGV0Y1xuICAgIHJldHVybiBpZGVudGl0eVxuICB9XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHZWlzdFByb3ZpZGVyLCBDc3NCYXNlbGluZSB9IGZyb20gJ0BnZWlzdC11aS9yZWFjdCdcbmltcG9ydCB7Z2VuZXJhdGVTaWduYXR1cmV9IGZyb20gXCIuLi9saWIvc2lnbmVyY29ubmVjdFwiXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXG4gIGNvbnN0IFtwcm92aWRlciwgc2V0UHJvdmlkZXJdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgY29ubmVjdFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qge3NlZWQsIG1ldGFtYXNrfSA9IGF3YWl0IGdlbmVyYXRlU2lnbmF0dXJlKCk7XG4gICAgc2V0UHJvdmlkZXIobWV0YW1hc2spXG4gIH1cbiAgXG4gIHBhZ2VQcm9wc1snY29ubmVjdFVzZXInXSA9IGNvbm5lY3RVc2VyXG4gIFxuICByZXR1cm4gKFxuICAgIDxHZWlzdFByb3ZpZGVyIHRoZW1lPXt7IHR5cGU6ICdsaWdodCcgfX0+XG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gcHJvdmlkZXI9e3Byb3ZpZGVyfSBjb25uZWN0VXNlcj17Y29ubmVjdFVzZXJ9Lz5cbiAgICA8L0dlaXN0UHJvdmlkZXI+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ2Vpc3QtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRleHRpbGUvaHViXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdGpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV0aGVyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9