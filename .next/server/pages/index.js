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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Content.js":
/*!*******************************!*\
  !*** ./components/Content.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeStyles */ "./components/makeStyles.js");
/* harmony import */ var _MyDropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyDropzone */ "./components/MyDropzone.js");
var _jsxFileName = "C:\\Users\\shabb\\Project\\Resci\\components\\Content.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_makeStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(ui => ({
  root: {
    backgroundColor: ui.palette.accents_1
  },
  content: {
    width: ui.layout.pageWidthWithMargin,
    maxWidth: '100%',
    boxSizing: 'border-box',
    margin: '0 auto',
    padding: `calc(${ui.layout.gap} * 2) ${ui.layout.pageMargin} calc(${ui.layout.gap} * 4)`,
    transform: 'translateY(-35px)'
  },
  invite: {
    display: 'flex'
  },
  inviteHeading: {
    marginBottom: 18,
    fontSize: '14px !important'
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    minWidth: 1,
    maxWidth: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  projects: {
    width: '100%'
  },
  activity: {
    flex: 1
  },
  [`@media screen and (min-width: ${ui.layout.pageWidthWithMargin})`]: {
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    projects: {
      width: 540,
      maxWidth: '100%',
      marginRight: 80
    },
    activityTitle: {
      marginTop: '20 !important',
      fontSize: '14px !important',
      textAlign: 'start !important'
    },
    viewAll: {
      marginBottom: '0 !important',
      textAlign: 'start !important'
    },
    invite: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  },
  viewAll: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: ui.layout.gap,
    textAlign: 'center'
  },
  activityTitle: {
    fontWeight: 700,
    marginTop: ui.layout.gap,
    fontSize: 24,
    textAlign: 'center'
  }
}));

const Content = () => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(_MyDropzone__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./components/Dashboard.js":
/*!*********************************!*\
  !*** ./components/Dashboard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content */ "./components/Content.js");
var _jsxFileName = "C:\\Users\\shabb\\Project\\Resci\\components\\Dashboard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Dashboard = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Content__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./components/DataCard.js":
/*!********************************!*\
  !*** ./components/DataCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @geist-ui/react */ "@geist-ui/react");
/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\shabb\\Project\\Resci\\components\\DataCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function DataCard(props) {
  return __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    width: "100%",
    hoverable: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    b: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, props.data.Name)), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    y: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, props.data.Authors.map(e => __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 43
    }
  }, e))), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    y: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginBottom: '15px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 175,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, props.data.Tags.map(e => __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    margin: "5px",
    size: "mini",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 60
    }
  }, e))), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    auto: true,
    icon: __jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__["Download"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 27
      }
    }),
    type: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "Download")))));
}

;
/* harmony default export */ __webpack_exports__["default"] = (DataCard);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeStyles */ "./components/makeStyles.js");
var _jsxFileName = "C:\\Users\\shabb\\Project\\Resci\\components\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const useStyles = Object(_makeStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(ui => ({
  root: {
    padding: '8px 42px',
    borderTop: `solid 1px ${ui.palette.accents_2}`,
    textAlign: 'center',
    display: 'flex',
    flexdirection: 'row',
    alignItems: 'center'
  },
  logo: {
    borderRadius: '50% !important',
    margin: '0 6px 0 0 !important'
  },
  [`@media screen and (min-width: ${ui.layout.pageWidthWithMargin})`]: {
    root: {
      textAlign: 'start !important'
    }
  }
}));

const Footer = () => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @geist-ui/react */ "@geist-ui/react");
/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Popup */ "./components/Popup.js");
var _jsxFileName = "C:\\Users\\shabb\\Project\\Resci\\components\\Form.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Form(props) {
  return __jsx("div", {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gap: .8,
    style: {
      marginTop: '15px',
      marginBottom: '15px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Enter here",
    onChange: props.titleHandler,
    value: props.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "Title:")), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Enter here",
    onChange: props.authorsHandler,
    value: props.authors,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "Authors:")), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Enter here",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "Tags:"))), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    align: "center",
    onClick: props.submitHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Submit"), __jsx(_Popup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    submitSuccess: props.submitSuccess,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ "./components/Menu.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _jsxFileName = "C:\\Users\\shabb\\Project\\Resci\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    connectUser: props.connectUser,
    provider: props.provider,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 6
    }
  }), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, props.children)), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @geist-ui/react */ "@geist-ui/react");
/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./makeStyles */ "./components/makeStyles.js");
/* harmony import */ var _UDomain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UDomain */ "./components/UDomain.js");
var _jsxFileName = "C:\\Users\\shabb\\Project\\Resci\\components\\Menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_makeStyles__WEBPACK_IMPORTED_MODULE_3__["default"])(ui => ({
  header: {
    width: ui.layout.pageWidthWithMargin,
    maxWidth: '100%',
    margin: '0 auto',
    backgroundColor: ui.palette.background,
    fontSize: 16,
    height: 60,
    zIndex: 15
  },
  unstoppable: {
    display: 'flex',
    alignItems: 'center !important',
    justifyContent: 'space-between !important',
    backgroundColor: ui.palette.background
  },
  headerContent: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `0 ${ui.layout.pageMargin}`
  },
  headerTitle: {
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10
  },
  nav: {
    position: 'sticky',
    top: 0,
    backgroundColor: ui.palette.background,
    borderBottom: `solid 1px ${ui.palette.accents_2}`,
    zIndex: 15
  },
  navFixed: {
    borderBottom: ui.type === 'light' && 'none',
    boxShadow: ui.type === 'light' && 'rgba(0, 0, 0, 0.1) 0 0 15px 0'
  },
  navContent: {
    width: ui.layout.pageWidthWithMargin,
    maxWidth: '100%',
    height: '100%',
    margin: '0 auto',
    '& .tabs header': {
      padding: `0 ${ui.layout.pageMargin}`,
      borderBottom: 'none !important',
      flexWrap: 'nowrap !important',
      overflowY: 'hidden',
      overflowX: 'auto',
      overflow: '-moz-scrollbars-none',
      '-ms-overflow-style': 'none',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    '& .content': {
      display: 'none !important'
    },
    '& .tab': {
      padding: '12px !important',
      margin: '0 !important',
      fontSize: '14px !important'
    }
  },
  sidebar: {
    display: 'flex',
    alignItems: 'center !important'
  },
  themeIcon: {
    width: '40px !important',
    height: '40px !important',
    display: 'flex !important',
    justifyContent: 'center !important',
    alignItems: 'center !important',
    marginRight: 5,
    padding: '0 !important'
  },
  popover: {
    marginRight: 5,
    paddingLeft: '20px !important',
    width: '180px !important'
  }
}));

const popoverContent = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"].Item, {
  title: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 5
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 7
  }
}, "User Settings")), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"].Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }
}, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  pure: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 7
  }
}, "Teams")), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"].Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 5
  }
}, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  pure: true,
  href: "/profile",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 7
  }
}, "GitHub")), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"].Item, {
  line: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }
}), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"].Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 5
  }
}, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  pure: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 7
  }
}, "Logout")));

const Menu = ({
  connectUser,
  provider
}) => {
  const classes = useStyles();
  const theme = Object(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: fixed,
    1: setFixed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: tab,
    1: setTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(router.pathname);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const scrollHandler = () => {
      const shouldFixed = document.documentElement.scrollTop > 60;
      if (fixed !== shouldFixed) setFixed(shouldFixed);
    };

    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, [fixed]);

  const changeTab = val => {
    router.push(val);
    setTab(val);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: classes.header,
    style: {
      marginTop: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.headerContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      display: 'flex'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    alt: "Your Avatar",
    className: classes.avatar,
    src: "/assets/Opscientia.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: classes.headerTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }, " ", __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    h3: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 53
    }
  }, "ReSci Wallet  \xA0"))), __jsx("div", {
    className: classes.sidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    auto: true,
    type: "abort",
    onClick: connectUser,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, provider ? provider.address : "Connect"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, " ", __jsx(_UDomain__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.unstoppable,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 20
    }
  }), " "), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
    content: popoverContent,
    placement: "bottomEnd",
    portalClassName: classes.popover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    src: "/assets/ud.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  })))))), __jsx("nav", {
    className: classes.nav + ' ' + (fixed ? classes.navFixed : ''),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.navContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    initialValue: tab,
    onChange: val => {
      changeTab(val);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Tabs"].Item, {
    label: "Upload",
    value: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Tabs"].Item, {
    label: "Public",
    value: "/public",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/MyDropzone.js":
/*!**********************************!*\
  !*** ./components/MyDropzone.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dropzone */ "react-dropzone");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _textile_hub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @textile/hub */ "@textile/hub");
/* harmony import */ var _textile_hub__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_textile_hub__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_signerconnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/signerconnect */ "./lib/signerconnect.js");
/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @geist-ui/react */ "@geist-ui/react");
/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_geist_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _geist_ui_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @geist-ui/react-icons */ "@geist-ui/react-icons");
/* harmony import */ var _geist_ui_react_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_geist_ui_react_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Form */ "./components/Form.js");
/* harmony import */ var _Private__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Private */ "./components/Private.js");
var _jsxFileName = "C:\\Users\\shabb\\Project\\Resci\\components\\MyDropzone.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class MyDropzone extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "ipfsGateway", 'https://hub.textile.io');

    _defineProperty(this, "keyInfo", {
      key: 'bxch3ikjx6yg2m4ewyeussjeuoy'
    });

    _defineProperty(this, "keyInfoOptions", {
      debug: true
    });

    _defineProperty(this, "state", {
      isLoading: true,
      submitSuccess: false,
      files: [],
      index: {
        author: '',
        date: 0,
        paths: [],
        loadingMessage: "loading"
      },
      input_file: null,
      title: null,
      authors: null
    });

    _defineProperty(this, "getIdentity", async () => {
      try {
        return Object(_lib_signerconnect__WEBPACK_IMPORTED_MODULE_3__["getMetamaskIdentity"])();
      } catch (e) {
        console.log("Couldn't connect to metamask");
      }
    });

    _defineProperty(this, "getBucketKey", async () => {
      if (!this.state.identity) {
        throw new Error('Identity not set');
      }

      const buckets = await _textile_hub__WEBPACK_IMPORTED_MODULE_2__["Buckets"].withKeyInfo(this.keyInfo, this.keyInfoOptions); // Authorize the user and your insecure keys with getToken

      await buckets.getToken(this.state.identity);
      const buck = await buckets.getOrCreate('io.textile.dropzone');

      if (!buck.root) {
        throw new Error('Failed to open bucket');
      }

      return {
        buckets: buckets,
        bucketKey: buck.root.key
      };
    });

    _defineProperty(this, "getBucketLinks", async () => {
      if (!this.state.buckets || !this.state.bucketKey) {
        console.error('No bucket client or root key');
        return;
      }

      const links = await this.state.buckets.links(this.state.bucketKey);
      this.setState(_objectSpread({}, links));
    });

    _defineProperty(this, "storeIndex", async index => {
      if (!this.state.buckets || !this.state.bucketKey) {
        console.error('No bucket client or root key');
        return;
      }

      const buf = Buffer.from(JSON.stringify(index, null, 2));
      const path = `index.json`;
      await this.state.buckets.pushPath(this.state.bucketKey, path, buf);
    });

    _defineProperty(this, "initIndex", async () => {
      if (!this.state.identity) {
        console.error('Identity not set');
        return;
      } // this will be converted to JSON, this is author metadata


      const index = {
        author: this.state.identity.public.toString(),
        date: new Date().getTime(),
        paths: []
      };
      await this.storeIndex(index);
      return index;
    });

    _defineProperty(this, "filelistFromIndex", async index => {
      this.setState({
        loadingMessage: "fetching filelist"
      });

      if (!this.state.buckets || !this.state.bucketKey) {
        console.error('No bucket client or root key');
        return;
      } // get file paths from index.paths array


      for (let path of index.paths) {
        console.log(path);
        const metadata = await this.state.buckets.pullPath(this.state.bucketKey, path);
        console.log(await this.state.buckets.links(this.state.bucketKey));
        const {
          value
        } = await metadata.next();
        let str = "";

        for (var i = 0; i < value.length; i++) {
          str += String.fromCharCode(parseInt(value[i]));
        }

        const json = JSON.parse(str);
        const file = json.original;
        this.setState({
          files: [...this.state.files, {
            src: `${this.ipfsGateway}/ipfs/${file.cid}`,
            key: file.name,
            authors: file.authors,
            title: file.title
          }]
        });
      }
    });

    _defineProperty(this, "getJSONFromBucket", async path => {
      const data = this.state.buckets.pullPath(this.state.bucketKey, path);
      const {
        value
      } = await data.next();
      let str = "";

      for (var i = 0; i < value.length; i++) {
        str += String.fromCharCode(parseInt(value[i]));
      }

      const json_data = JSON.parse(str);
      return json_data;
    });

    _defineProperty(this, "getFileIndex", async () => {
      if (!this.state.buckets || !this.state.bucketKey) {
        console.error('No bucket client or root key');
        return;
      }

      try {
        const index = await this.getJSONFromBucket('index.json');
        return index;
      } catch (error) {
        console.log(error);
        console.log("\n\ninitializing INDEX\n\n");
        const index = await this.initIndex(); // await this.initPublicGallery()

        return index;
      }
    });

    _defineProperty(this, "insertFile", async (file, path) => {
      if (!this.state.buckets || !this.state.bucketKey) {
        throw new Error('No bucket client or root key');
      }

      const buckets = this.state.buckets;
      return await buckets.pushPath(this.state.bucketKey, path, file.stream());
    });

    _defineProperty(this, "processAndStore", async (file, path, name) => {
      const location = `${path}${name}`;
      const raw = await this.insertFile(file, location);
      const metadata = {
        cid: raw.path.cid.toString(),
        name: name,
        path: location
      };
      return metadata;
    });

    _defineProperty(this, "handleNewFile", async file => {
      this.setState({
        loadingMessage: "handling file"
      });
      console.log("handleNewFile()");

      if (!this.state.buckets || !this.state.bucketKey) {
        console.error('No bucket client or root key');
        return;
      }

      const fileSchema = {};
      const now = new Date().getTime();
      fileSchema['date'] = now;
      fileSchema['name'] = `${file.name}`;
      fileSchema['title'] = this.state.title;
      fileSchema['authors'] = this.state.authors;
      const filename = `${now}_${file.name}`;
      this.setState({
        loadingMessage: "pushing file to bucket"
      });
      fileSchema['original'] = await this.processAndStore(file, 'originals/', filename);
      const metadata = Buffer.from(JSON.stringify(fileSchema, null, 2));
      const metaname = `${now}_${file.name}.json`;
      const path = `metadata/${metaname}`;
      this.setState({
        loadingMessage: "pushing metadata"
      });
      await this.state.buckets.pushPath(this.state.bucketKey, path, metadata);
      const fileOnBucket = fileSchema['original'];
      this.setState({
        index: _objectSpread(_objectSpread({}, this.state.index), {}, {
          paths: [...this.state.index.paths, path]
        }),
        files: [...this.state.files, {
          src: `${this.ipfsGateway}/ipfs/${fileOnBucket.cid}`,
          key: fileOnBucket.name,
          authors: this.state.authors,
          title: this.state.title
        }]
      });
      this.setState({
        loadingMessage: null
      });
    });

    _defineProperty(this, "onDrop", async acceptedFiles => {
      for (const file of acceptedFiles) {
        //setting a simple format date_filename
        this.setState({
          input_file: file
        });
      }
    });

    _defineProperty(this, "submitHandler", async () => {
      if (this.state.input_file == null) {
        console.error("\n\nNo file\n\n");
      } else {
        await this.handleNewFile(this.state.input_file);
        await this.storeIndex(this.state.index);
        this.setState({
          input_file: null,
          title: null,
          authors: null
        });
        this.storeIndex(this.state.index);
        this.setState({
          submitSuccess: true
        });
      }
    });

    _defineProperty(this, "titleHandler", e => {
      this.setState({
        title: e.target.value
      });
    });

    _defineProperty(this, "authorsHandler", e => {
      this.setState({
        authors: e.target.value
      });
    });
  }

  async componentDidMount() {
    this.setState({
      loadingMessage: "waiting for metamask"
    });
    const identity = await this.getIdentity();
    this.setState({
      identity: identity
    });
    this.setState({
      loadingMessage: "fetching data"
    });
    const {
      bucketKey,
      buckets
    } = await this.getBucketKey();
    this.setState({
      buckets: buckets,
      bucketKey: bucketKey
    });
    this.setState({
      loadingMessage: "fetching data"
    });
    await this.getBucketLinks();
    this.setState({
      loadingMessage: "fetching data"
    });
    const index = await this.getFileIndex();

    if (index) {
      await this.filelistFromIndex(index);
      this.setState({
        index: index,
        isLoading: false
      });
    } else {
      console.log("No index");
    }

    this.setState({
      loadingMessage: null
    });
  }
  /**
   * Textile Bucket api init
   */


  formatBucketData() {
    var res = [];

    for (var f in this.state.files) {
      res.push({
        "Name": f.title,
        "Authors": [f.authors],
        "Tags": ["Brains", "fMRI"],
        "BIDSVersion": "1.0.2"
      });
    }

    const myData = {
      mockData: res
    };
    return myData;
  }

  render() {
    const bucketData = this.formatBucketData();
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_dropzone__WEBPACK_IMPORTED_MODULE_1___default.a, {
      onDrop: this.onDrop,
      maxSize: 20000000,
      multiple: true,
      disabled: !(this.state.loadingMessage === null),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 13
      }
    }, ({
      getRootProps,
      getInputProps
    }) => __jsx("div", _extends({
      className: "dropzone"
    }, getRootProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 17
      }
    }), __jsx("input", _extends({}, getInputProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 19
      }
    })), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      hoverable: true,
      width: "100%",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 23
      }
    }, this.state.loadingMessage === null && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      gap: 0.8,
      justify: "center",
      style: {
        marginBottom: '15px',
        marginTop: '15px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 25
      }
    }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      span: 1.5,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 27
      }
    }, __jsx(_geist_ui_react_icons__WEBPACK_IMPORTED_MODULE_5__["Upload"], {
      size: 40,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 31
      }
    }))), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      gap: 0.8,
      align: "center",
      style: {
        marginBottom: '15px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 25
      }
    }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      span: 30,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 27
      }
    }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      type: "primary",
      align: "center",
      medium: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 31
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 75
      }
    }, "Drag and Drop")), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      type: "primary",
      align: "center",
      medium: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 31
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 75
      }
    }, "or")), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      type: "primary",
      align: "center",
      medium: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 31
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 75
      }
    }, "Click to Select Files"))))), !(this.state.loadingMessage === null) && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      gap: 0.8,
      justify: "center",
      style: {
        marginBottom: '15px',
        marginTop: '15px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 25
      }
    }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      span: 1.5,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 27
      }
    }, __jsx(_geist_ui_react_icons__WEBPACK_IMPORTED_MODULE_5__["Meh"], {
      size: 40,
      color: "grey",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 31
      }
    }))), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      gap: 0.8,
      align: "center",
      style: {
        marginBottom: '15px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 25
      }
    }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      span: 30,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 27
      }
    }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      type: "primary",
      align: "center",
      medium: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 31
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 75
      }
    }, "Please Wait")))), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      gap: 0.8,
      align: "center",
      style: {
        marginBottom: '15px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 25
      }
    }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      span: 30,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 27
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 33
      }
    }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      style: {
        padding: '10px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 37
      }
    }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_4__["Loading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 41
      }
    }, this.state.loadingMessage))))))))), __jsx(_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
      loading: this.state.loadingMessage,
      title: this.state.title,
      titleHandler: this.titleHandler,
      authors: this.state.authors,
      authorsHandler: this.authorsHandler,
      submitHandler: this.submitHandler,
      submitSuccess: this.state.submitSuccess,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 13
      }
    }), __jsx(_Private__WEBPACK_IMPORTED_MODULE_7__["default"], {
      myData: bucketData,
      accessData: bucketData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 13
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyDropzone);

/***/ }),

/***/ "./components/Popup.js":
/*!*****************************!*\
  !*** ./components/Popup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @geist-ui/react */ "@geist-ui/react");
/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shabb\\Project\\Resci\\components\\Popup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Popup = props => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    width: "32rem",
    open: props.submitSuccess,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/assets/poap.png",
    width: 90,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "POAP Alert"), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "Thank you for contributing to open science this month!"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "Instructions are in the rules tab in Discord to claim your POAP"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "The secret codeword is ", __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 39
    }
  }, "Unstoppable")), __jsx("a", {
    href: "https://discord.com/channels/927254650971889765/927254651424899153",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/assets/discord.png",
    width: 30,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }))), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Action, {
    passive: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "Close")));
};

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./components/Private.js":
/*!*******************************!*\
  !*** ./components/Private.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @geist-ui/react */ "@geist-ui/react");
/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeStyles */ "./components/makeStyles.js");
/* harmony import */ var _DataCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataCard */ "./components/DataCard.js");
var _jsxFileName = "C:\\Users\\shabb\\Project\\Resci\\components\\Private.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_makeStyles__WEBPACK_IMPORTED_MODULE_2__["default"])(ui => ({
  root: {
    borderBottom: `solid 1px ${ui.palette.accents_2}`
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    width: ui.layout.pageWidthWithMargin,
    maxWidth: '100%',
    padding: `calc(${ui.layout.gap} * 2) ${ui.layout.pageMargin} calc(${ui.layout.gap} * 4)`,
    boxSizing: 'border-box',
    margin: '0 auto'
  }
}));

const Private = props => {
  const classes = useStyles();
  const myData = props.myData.mockData;
  const accessData = props.accessData.mockData;
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Container, {
    gap: 2,
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    h3: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "My Datasets:"), myData.map(e => {
    return __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      xs: 22,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 37
      }
    }, __jsx(_DataCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: e,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 51
      }
    }));
  })), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Container, {
    gap: 2,
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    h3: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Private Access Datasets:"), accessData.map(e => {
    return __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      xs: 22,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 41
      }
    }, __jsx(_DataCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: e,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 55
      }
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Private);

/***/ }),

/***/ "./components/UDomain.js":
/*!*******************************!*\
  !*** ./components/UDomain.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uauth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uauth/js */ "@uauth/js");
/* harmony import */ var _uauth_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_uauth_js__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shabb\\Project\\Resci\\components\\UDomain.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //import { Button } from "react-bootstrap"

const uauth = new _uauth_js__WEBPACK_IMPORTED_MODULE_1___default.a({
  clientID: "bbe8f08a-dd77-4a01-b02c-1b30844650b9",
  redirectUri: "http://localhost:3000"
});

function UDomain() {
  const {
    0: Uauth,
    1: setUauth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  async function Connect() {
    try {
      const authorization = await uauth.loginWithPopup();
      setUauth(JSON.parse(JSON.stringify(authorization))["idToken"]); // eslint-disable-next-line no-undef

      await authenticate();
    } catch (error) {
      console.error(error);
    }
  }

  async function logOut() {
    uauth.logout();
    logOut();
  }

  function log() {
    if (Uauth === null || Uauth === undefined) {
      Connect();
    } else {
      logOut();
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("button", {
    className: "UDomain",
    onClick: log,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, Uauth != null ? Uauth["sub"] : "Login with UNSD"));
}

/* harmony default export */ __webpack_exports__["default"] = (UDomain);

/***/ }),

/***/ "./components/makeStyles.js":
/*!**********************************!*\
  !*** ./components/makeStyles.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @geist-ui/react */ "@geist-ui/react");
/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__);



const useStyles = styles => {
  const theme = Object(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();

  if (typeof styles === 'function') {
    styles = styles(theme);
  }

  return Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])(styles)();
};

const makeStyles = styles => {
  return () => useStyles(styles);
};

/* harmony default export */ __webpack_exports__["default"] = (makeStyles);

/***/ }),

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Dashboard */ "./components/Dashboard.js");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\shabb\\Project\\Resci\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Home = props => {
  return __jsx(react_jss__WEBPACK_IMPORTED_MODULE_3__["JssProvider"], {
    id: {
      minify: true
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    connectUser: props.connectUser,
    provider: props.provider,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx(_components_Dashboard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "@geist-ui/react":
/*!**********************************!*\
  !*** external "@geist-ui/react" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@geist-ui/react");

/***/ }),

/***/ "@geist-ui/react-icons":
/*!****************************************!*\
  !*** external "@geist-ui/react-icons" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@geist-ui/react-icons");

/***/ }),

/***/ "@textile/hub":
/*!*******************************!*\
  !*** external "@textile/hub" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@textile/hub");

/***/ }),

/***/ "@uauth/js":
/*!****************************!*\
  !*** external "@uauth/js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@uauth/js");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dropzone":
/*!*********************************!*\
  !*** external "react-dropzone" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ "react-feather":
/*!********************************!*\
  !*** external "react-feather" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),

/***/ "react-jss":
/*!****************************!*\
  !*** external "react-jss" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-jss");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250ZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0YUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015RHJvcHpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaXZhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VRG9tYWluLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFrZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvc2lnbmVyY29ubmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZ2Vpc3QtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZ2Vpc3QtdWkvcmVhY3QtaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdGV4dGlsZS9odWJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdWF1dGgvanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV0aGVyc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kcm9wem9uZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWZlYXRoZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1qc3NcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidWkiLCJyb290IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImFjY2VudHNfMSIsImNvbnRlbnQiLCJ3aWR0aCIsImxheW91dCIsInBhZ2VXaWR0aFdpdGhNYXJnaW4iLCJtYXhXaWR0aCIsImJveFNpemluZyIsIm1hcmdpbiIsInBhZGRpbmciLCJnYXAiLCJwYWdlTWFyZ2luIiwidHJhbnNmb3JtIiwiaW52aXRlIiwiZGlzcGxheSIsImludml0ZUhlYWRpbmciLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsInJvdyIsImZsZXhEaXJlY3Rpb24iLCJwb3NpdGlvbiIsIm1pbldpZHRoIiwiZmxleCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInByb2plY3RzIiwiYWN0aXZpdHkiLCJmbGV4V3JhcCIsIm1hcmdpblJpZ2h0IiwiYWN0aXZpdHlUaXRsZSIsIm1hcmdpblRvcCIsInRleHRBbGlnbiIsInZpZXdBbGwiLCJmb250V2VpZ2h0IiwiQ29udGVudCIsImNsYXNzZXMiLCJEYXNoYm9hcmQiLCJEYXRhQ2FyZCIsInByb3BzIiwiZGF0YSIsIk5hbWUiLCJBdXRob3JzIiwibWFwIiwiZSIsIlRhZ3MiLCJib3JkZXJUb3AiLCJhY2NlbnRzXzIiLCJmbGV4ZGlyZWN0aW9uIiwibG9nbyIsImJvcmRlclJhZGl1cyIsIkZvb3RlciIsIkZvcm0iLCJ0aXRsZUhhbmRsZXIiLCJ0aXRsZSIsImF1dGhvcnNIYW5kbGVyIiwiYXV0aG9ycyIsInN1Ym1pdEhhbmRsZXIiLCJzdWJtaXRTdWNjZXNzIiwiTGF5b3V0IiwiY29ubmVjdFVzZXIiLCJwcm92aWRlciIsImNoaWxkcmVuIiwiaGVhZGVyIiwiYmFja2dyb3VuZCIsImhlaWdodCIsInpJbmRleCIsInVuc3RvcHBhYmxlIiwiaGVhZGVyQ29udGVudCIsImhlYWRlclRpdGxlIiwicGFkZGluZ0xlZnQiLCJuYXYiLCJ0b3AiLCJib3JkZXJCb3R0b20iLCJuYXZGaXhlZCIsInR5cGUiLCJib3hTaGFkb3ciLCJuYXZDb250ZW50Iiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwib3ZlcmZsb3ciLCJzaWRlYmFyIiwidGhlbWVJY29uIiwicG9wb3ZlciIsInBvcG92ZXJDb250ZW50IiwiTWVudSIsInRoZW1lIiwidXNlVGhlbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmaXhlZCIsInNldEZpeGVkIiwidXNlU3RhdGUiLCJ0YWIiLCJzZXRUYWIiLCJwYXRobmFtZSIsInVzZUVmZmVjdCIsInNjcm9sbEhhbmRsZXIiLCJzaG91bGRGaXhlZCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGFuZ2VUYWIiLCJ2YWwiLCJwdXNoIiwiYXZhdGFyIiwiYWRkcmVzcyIsIk15RHJvcHpvbmUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImtleSIsImRlYnVnIiwiaXNMb2FkaW5nIiwiZmlsZXMiLCJpbmRleCIsImF1dGhvciIsImRhdGUiLCJwYXRocyIsImxvYWRpbmdNZXNzYWdlIiwiaW5wdXRfZmlsZSIsImdldE1ldGFtYXNrSWRlbnRpdHkiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJpZGVudGl0eSIsIkVycm9yIiwiYnVja2V0cyIsIkJ1Y2tldHMiLCJ3aXRoS2V5SW5mbyIsImtleUluZm8iLCJrZXlJbmZvT3B0aW9ucyIsImdldFRva2VuIiwiYnVjayIsImdldE9yQ3JlYXRlIiwiYnVja2V0S2V5IiwiZXJyb3IiLCJsaW5rcyIsInNldFN0YXRlIiwiYnVmIiwiQnVmZmVyIiwiZnJvbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXRoIiwicHVzaFBhdGgiLCJwdWJsaWMiLCJ0b1N0cmluZyIsIkRhdGUiLCJnZXRUaW1lIiwic3RvcmVJbmRleCIsIm1ldGFkYXRhIiwicHVsbFBhdGgiLCJ2YWx1ZSIsIm5leHQiLCJzdHIiLCJpIiwibGVuZ3RoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFyc2VJbnQiLCJqc29uIiwicGFyc2UiLCJmaWxlIiwib3JpZ2luYWwiLCJzcmMiLCJpcGZzR2F0ZXdheSIsImNpZCIsIm5hbWUiLCJqc29uX2RhdGEiLCJnZXRKU09ORnJvbUJ1Y2tldCIsImluaXRJbmRleCIsInN0cmVhbSIsImxvY2F0aW9uIiwicmF3IiwiaW5zZXJ0RmlsZSIsImZpbGVTY2hlbWEiLCJub3ciLCJmaWxlbmFtZSIsInByb2Nlc3NBbmRTdG9yZSIsIm1ldGFuYW1lIiwiZmlsZU9uQnVja2V0IiwiYWNjZXB0ZWRGaWxlcyIsImhhbmRsZU5ld0ZpbGUiLCJ0YXJnZXQiLCJjb21wb25lbnREaWRNb3VudCIsImdldElkZW50aXR5IiwiZ2V0QnVja2V0S2V5IiwiZ2V0QnVja2V0TGlua3MiLCJnZXRGaWxlSW5kZXgiLCJmaWxlbGlzdEZyb21JbmRleCIsImZvcm1hdEJ1Y2tldERhdGEiLCJyZXMiLCJmIiwibXlEYXRhIiwibW9ja0RhdGEiLCJyZW5kZXIiLCJidWNrZXREYXRhIiwib25Ecm9wIiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsIlBvcHVwIiwiUHJpdmF0ZSIsImFjY2Vzc0RhdGEiLCJ1YXV0aCIsIlVBdXRoIiwiY2xpZW50SUQiLCJyZWRpcmVjdFVyaSIsIlVEb21haW4iLCJVYXV0aCIsInNldFVhdXRoIiwiQ29ubmVjdCIsImF1dGhvcml6YXRpb24iLCJsb2dpbldpdGhQb3B1cCIsImF1dGhlbnRpY2F0ZSIsImxvZ091dCIsImxvZ291dCIsInVuZGVmaW5lZCIsInN0eWxlcyIsImNyZWF0ZVVzZVN0eWxlcyIsImdlbmVyYXRlTWVzc2FnZUZvckVudHJvcHkiLCJldGhlcmV1bV9hZGRyZXNzIiwiYXBwbGljYXRpb25fbmFtZSIsImdldFNpZ25lciIsIndpbmRvdyIsImV0aGVyZXVtIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0UHJvdmlkZXIiLCJlbmFibGUiLCJnZXRBZGRyZXNzQW5kU2lnbmVyIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiZ2VuZXJhdGVTaWduYXR1cmUiLCJtZXRhbWFzayIsInNlY3JldCIsImhhc2hTeW5jIiwibWVzc2FnZSIsInNpZ25lZFRleHQiLCJzaWduTWVzc2FnZSIsImhhc2giLCJ1dGlscyIsImtlY2NhazI1NiIsInNlZWQiLCJyZXBsYWNlIiwibWF0Y2giLCJoZXhOb1ByZWZpeCIsIkJpZ051bWJlciIsInRvTnVtYmVyIiwiYXJyYXkiLCJQcml2YXRlS2V5IiwiZnJvbVJhd0VkMjU1MTlTZWVkIiwiVWludDhBcnJheSIsIkhvbWUiLCJtaW5pZnkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFD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LE1BQU1rSSxJQUFJLEdBQUl6TixLQUFELElBQVc7QUFFcEIsU0FDSSxNQUFDLHFEQUFEO0FBQWEsTUFBRSxFQUFFO0FBQUUwTixZQUFNLEVBQUU7QUFBVixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFRLGVBQVcsRUFBRTFOLEtBQUssQ0FBQ3FCLFdBQTNCO0FBQXdDLFlBQVEsRUFBRXJCLEtBQUssQ0FBQ3NCLFFBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREo7QUFPSCxDQVREOztBQVdlbU0sbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNmQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSAnLi9tYWtlU3R5bGVzJztcbmltcG9ydCBNeURyb3B6b25lIGZyb20gJy4vTXlEcm9wem9uZSdcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodWkpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHVpLnBhbGV0dGUuYWNjZW50c18xLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgd2lkdGg6IHVpLmxheW91dC5wYWdlV2lkdGhXaXRoTWFyZ2luLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICBwYWRkaW5nOiBgY2FsYygke3VpLmxheW91dC5nYXB9ICogMikgJHt1aS5sYXlvdXQucGFnZU1hcmdpbn0gY2FsYygke3VpLmxheW91dC5nYXB9ICogNClgLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTM1cHgpJ1xuICB9LFxuICBpbnZpdGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gIH0sXG4gIGludml0ZUhlYWRpbmc6IHtcbiAgICBtYXJnaW5Cb3R0b206IDE4LFxuICAgIGZvbnRTaXplOiAnMTRweCAhaW1wb3J0YW50JyxcbiAgfSxcbiAgcm93OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG1pbldpZHRoOiAxLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgZmxleDogMSxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgIGFsaWduSXRlbXM6ICdzdHJldGNoJ1xuICB9LFxuICBwcm9qZWN0czoge1xuICAgIHdpZHRoOiAnMTAwJSdcbiAgfSxcbiAgYWN0aXZpdHk6IHtcbiAgICBmbGV4OiAxXG4gIH0sXG4gIFtgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHt1aS5sYXlvdXQucGFnZVdpZHRoV2l0aE1hcmdpbn0pYF06IHtcbiAgICByb3c6IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgZmxleFdyYXA6ICd3cmFwJ1xuICAgIH0sXG4gICAgcHJvamVjdHM6IHtcbiAgICAgIHdpZHRoOiA1NDAsXG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgbWFyZ2luUmlnaHQ6IDgwXG4gICAgfSxcbiAgICBhY3Rpdml0eVRpdGxlOiB7XG4gICAgICBtYXJnaW5Ub3A6ICcyMCAhaW1wb3J0YW50JyxcbiAgICAgIGZvbnRTaXplOiAnMTRweCAhaW1wb3J0YW50JyxcbiAgICAgIHRleHRBbGlnbjogJ3N0YXJ0ICFpbXBvcnRhbnQnXG4gICAgfSxcbiAgICB2aWV3QWxsOiB7XG4gICAgICBtYXJnaW5Cb3R0b206ICcwICFpbXBvcnRhbnQnLFxuICAgICAgdGV4dEFsaWduOiAnc3RhcnQgIWltcG9ydGFudCdcbiAgICB9LFxuICAgIGludml0ZToge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICB9LFxuICB9LFxuICB2aWV3QWxsOiB7XG4gICAgZm9udFNpemU6IDE0LFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBtYXJnaW5Cb3R0b206IHVpLmxheW91dC5nYXAsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICB9LFxuICBhY3Rpdml0eVRpdGxlOiB7XG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIG1hcmdpblRvcDogdWkubGF5b3V0LmdhcCxcbiAgICBmb250U2l6ZTogMjQsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICB9XG59KSk7XG5cbmNvbnN0IENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICA8TXlEcm9wem9uZSAvPlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50JztcblxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29udGVudCAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FyZCwgVGV4dCwgRGl2aWRlciwgQnV0dG9uLCBSb3csIENvbCB9IGZyb20gJ0BnZWlzdC11aS9yZWFjdCc7XG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tICdyZWFjdC1mZWF0aGVyJztcblxuZnVuY3Rpb24gRGF0YUNhcmQocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZCB3aWR0aD1cIjEwMCVcIiBob3ZlcmFibGU+XG4gICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICA8VGV4dCBiPntwcm9wcy5kYXRhLk5hbWV9PC9UZXh0PlxuICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgPERpdmlkZXIgeT17MH0gLz5cbiAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgIHtwcm9wcy5kYXRhLkF1dGhvcnMubWFwKChlID0+IDxUZXh0PntlfTwvVGV4dD4pKX0gXG4gICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICA8RGl2aWRlciB5PXswfSAvPlxuICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgICAgPFJvdyBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxNXB4JyB9fT5cbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezE3NX0+e3Byb3BzLmRhdGEuVGFncy5tYXAoKGUgPT4gPEJ1dHRvbiBtYXJnaW49XCI1cHhcIiBzaXplPVwibWluaVwiPntlfTwvQnV0dG9uPikpfTwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICAgICAgYXV0b1xuICAgICAgICAgICAgICAgICAgICBpY29uPXs8SWNvbnMuRG93bmxvYWQgLz59XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3NlY29uZGFyeSdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBEb3dubG9hZFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ2FyZC5Db250ZW50PlxuXG4gICAgICAgIDwvQ2FyZD5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhQ2FyZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSAnLi9tYWtlU3R5bGVzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodWkpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiAnOHB4IDQycHgnLFxuICAgIGJvcmRlclRvcDogYHNvbGlkIDFweCAke3VpLnBhbGV0dGUuYWNjZW50c18yfWAsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleGRpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgfSxcbiAgbG9nbzoge1xuICAgIGJvcmRlclJhZGl1czogJzUwJSAhaW1wb3J0YW50JyxcbiAgICBtYXJnaW46ICcwIDZweCAwIDAgIWltcG9ydGFudCdcbiAgfSxcbiAgW2BAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3VpLmxheW91dC5wYWdlV2lkdGhXaXRoTWFyZ2lufSlgXToge1xuICAgIHJvb3Q6IHtcbiAgICAgIHRleHRBbGlnbjogJ3N0YXJ0ICFpbXBvcnRhbnQnXG4gICAgfVxuICB9XG59KSk7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXQsIEJ1dHRvbiwgUm93LCBDb2wgfSBmcm9tICdAZ2Vpc3QtdWkvcmVhY3QnO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCJcblxuZnVuY3Rpb24gRm9ybShwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxSb3cgZ2FwPXsuOH0gc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTVweCcsIG1hcmdpbkJvdHRvbTogJzE1cHgnIH19PlxuICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciBoZXJlXCIgb25DaGFuZ2U9e3Byb3BzLnRpdGxlSGFuZGxlcn0gdmFsdWU9e3Byb3BzLnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6XG4gICAgICAgICAgICAgICAgPC9JbnB1dD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciBoZXJlXCIgb25DaGFuZ2U9e3Byb3BzLmF1dGhvcnNIYW5kbGVyfSB2YWx1ZT17cHJvcHMuYXV0aG9yc30+XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcnM6XG4gICAgICAgICAgICAgICAgPC9JbnB1dD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciBoZXJlXCIgPlxuICAgICAgICAgICAgICAgICAgICBUYWdzOlxuICAgICAgICAgICAgICAgIDwvSW5wdXQ+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPEJ1dHRvbiBhbGlnbj1cImNlbnRlclwiIG9uQ2xpY2s9e3Byb3BzLnN1Ym1pdEhhbmRsZXJ9PlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICAgICAgPFBvcHVwIHN1Ym1pdFN1Y2Nlc3M9e3Byb3BzLnN1Ym1pdFN1Y2Nlc3N9Lz5cbiAgICAgICAgPC8gZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgPE1lbnUgY29ubmVjdFVzZXI9e3Byb3BzLmNvbm5lY3RVc2VyfSBwcm92aWRlcj17cHJvcHMucHJvdmlkZXJ9IC8+XG4gICAgICA8bWFpbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvID5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgVGV4dCwgQXZhdGFyLCBCdXR0b24sIFRhYnMsIHVzZVRoZW1lLCBQb3BvdmVyLCBMaW5rIH0gZnJvbSAnQGdlaXN0LXVpL3JlYWN0JztcbmltcG9ydCBtYWtlU3R5bGVzIGZyb20gJy4vbWFrZVN0eWxlcyc7XG5pbXBvcnQgVURvbWFpbiBmcm9tICcuL1VEb21haW4nO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHVpKSA9PiAoe1xuICBoZWFkZXI6IHtcbiAgICB3aWR0aDogdWkubGF5b3V0LnBhZ2VXaWR0aFdpdGhNYXJnaW4sXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgIGJhY2tncm91bmRDb2xvcjogdWkucGFsZXR0ZS5iYWNrZ3JvdW5kLFxuICAgIGZvbnRTaXplOiAxNixcbiAgICBoZWlnaHQ6IDYwLFxuICAgIHpJbmRleDogMTUsXG4gIH0sXG4gIHVuc3RvcHBhYmxlOntcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlciAhaW1wb3J0YW50JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4gIWltcG9ydGFudCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB1aS5wYWxldHRlLmJhY2tncm91bmQsXG4gIH0sXG4gIGhlYWRlckNvbnRlbnQ6IHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBwYWRkaW5nOiBgMCAke3VpLmxheW91dC5wYWdlTWFyZ2lufWAsXG4gIH0sXG4gIGhlYWRlclRpdGxlOiB7XG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nTGVmdDogMTBcbiAgfSxcbiAgbmF2OiB7XG4gICAgcG9zaXRpb246ICdzdGlja3knLFxuICAgIHRvcDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHVpLnBhbGV0dGUuYmFja2dyb3VuZCxcbiAgICBib3JkZXJCb3R0b206IGBzb2xpZCAxcHggJHt1aS5wYWxldHRlLmFjY2VudHNfMn1gLFxuICAgIHpJbmRleDogMTVcbiAgfSxcbiAgbmF2Rml4ZWQ6IHtcbiAgICBib3JkZXJCb3R0b206IHVpLnR5cGUgPT09ICdsaWdodCcgJiYgJ25vbmUnLFxuICAgIGJveFNoYWRvdzogdWkudHlwZSA9PT0gJ2xpZ2h0JyAmJiAncmdiYSgwLCAwLCAwLCAwLjEpIDAgMCAxNXB4IDAnLFxuICB9LFxuICBuYXZDb250ZW50OiB7XG4gICAgd2lkdGg6IHVpLmxheW91dC5wYWdlV2lkdGhXaXRoTWFyZ2luLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAnJiAudGFicyBoZWFkZXInOiB7XG4gICAgICBwYWRkaW5nOiBgMCAke3VpLmxheW91dC5wYWdlTWFyZ2lufWAsXG4gICAgICBib3JkZXJCb3R0b206ICdub25lICFpbXBvcnRhbnQnLFxuICAgICAgZmxleFdyYXA6ICdub3dyYXAgIWltcG9ydGFudCcsXG4gICAgICBvdmVyZmxvd1k6ICdoaWRkZW4nLFxuICAgICAgb3ZlcmZsb3dYOiAnYXV0bycsXG4gICAgICBvdmVyZmxvdzogJy1tb3otc2Nyb2xsYmFycy1ub25lJyxcbiAgICAgICctbXMtb3ZlcmZsb3ctc3R5bGUnOiAnbm9uZScsXG4gICAgICAnJjo6LXdlYmtpdC1zY3JvbGxiYXInOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfVxuICAgIH0sXG4gICAgJyYgLmNvbnRlbnQnOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSAhaW1wb3J0YW50J1xuICAgIH0sXG4gICAgJyYgLnRhYic6IHtcbiAgICAgIHBhZGRpbmc6ICcxMnB4ICFpbXBvcnRhbnQnLFxuICAgICAgbWFyZ2luOiAnMCAhaW1wb3J0YW50JyxcbiAgICAgIGZvbnRTaXplOiAnMTRweCAhaW1wb3J0YW50J1xuICAgIH1cbiAgfSxcbiAgc2lkZWJhcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyICFpbXBvcnRhbnQnLFxuICB9LFxuICB0aGVtZUljb246IHtcbiAgICB3aWR0aDogJzQwcHggIWltcG9ydGFudCcsXG4gICAgaGVpZ2h0OiAnNDBweCAhaW1wb3J0YW50JyxcbiAgICBkaXNwbGF5OiAnZmxleCAhaW1wb3J0YW50JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlciAhaW1wb3J0YW50JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyICFpbXBvcnRhbnQnLFxuICAgIG1hcmdpblJpZ2h0OiA1LFxuICAgIHBhZGRpbmc6ICcwICFpbXBvcnRhbnQnLFxuICB9LFxuICBwb3BvdmVyOiB7XG4gICAgbWFyZ2luUmlnaHQ6IDUsXG4gICAgcGFkZGluZ0xlZnQ6JzIwcHggIWltcG9ydGFudCcsXG4gICAgd2lkdGg6ICcxODBweCAhaW1wb3J0YW50J1xuICB9XG59KSk7XG5cbmNvbnN0IHBvcG92ZXJDb250ZW50ID0gKCkgPT4gKFxuICA8PlxuICAgIDxQb3BvdmVyLkl0ZW0gdGl0bGU+XG4gICAgICA8c3Bhbj5Vc2VyIFNldHRpbmdzPC9zcGFuPlxuICAgIDwvUG9wb3Zlci5JdGVtPlxuICAgIDxQb3BvdmVyLkl0ZW0+XG4gICAgICA8TGluayBwdXJlPlRlYW1zPC9MaW5rPlxuICAgIDwvUG9wb3Zlci5JdGVtPlxuICAgIDxQb3BvdmVyLkl0ZW0+XG4gICAgICA8TGluayBwdXJlIGhyZWY9Jy9wcm9maWxlJz5HaXRIdWI8L0xpbms+XG4gICAgPC9Qb3BvdmVyLkl0ZW0+XG4gICAgPFBvcG92ZXIuSXRlbSBsaW5lIC8+XG4gICAgPFBvcG92ZXIuSXRlbT5cbiAgICAgIDxMaW5rIHB1cmU+TG9nb3V0PC9MaW5rPlxuICAgIDwvUG9wb3Zlci5JdGVtPlxuICA8Lz5cbik7XG5cbmNvbnN0IE1lbnUgPSAoeyBjb25uZWN0VXNlciwgcHJvdmlkZXIgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtmaXhlZCwgc2V0Rml4ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUocm91dGVyLnBhdGhuYW1lKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzaG91bGRGaXhlZCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiA2MDtcbiAgICAgIGlmIChmaXhlZCAhPT0gc2hvdWxkRml4ZWQpIHNldEZpeGVkKHNob3VsZEZpeGVkKTtcbiAgICB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcbiAgfSwgW2ZpeGVkXSk7XG5cbiAgY29uc3QgY2hhbmdlVGFiID0gKHZhbCkgPT4ge1xuXG4gICAgcm91dGVyLnB1c2godmFsKTtcbiAgICBzZXRUYWIodmFsKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0gc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlckNvbnRlbnR9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgIDxBdmF0YXIgYWx0PVwiWW91ciBBdmF0YXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfSBzcmM9XCIvYXNzZXRzL09wc2NpZW50aWEucG5nXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyVGl0bGV9PiA8VGV4dCBoMz5SZVNjaSBXYWxsZXQgICZuYnNwOzwvVGV4dD48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zaWRlYmFyfT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGF1dG9cbiAgICAgICAgICAgICAgICB0eXBlPSdhYm9ydCdcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb25uZWN0VXNlcn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cHJvdmlkZXIgPyBwcm92aWRlci5hZGRyZXNzIDogXCJDb25uZWN0XCIgfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgPiA8VURvbWFpbiBjbGFzc05hbWU9e2NsYXNzZXMudW5zdG9wcGFibGV9IC8+IDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxQb3BvdmVyIGNvbnRlbnQ9e3BvcG92ZXJDb250ZW50fSBwbGFjZW1lbnQ9XCJib3R0b21FbmRcIiBwb3J0YWxDbGFzc05hbWU9e2NsYXNzZXMucG9wb3Zlcn0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxBdmF0YXIgc3JjPVwiL2Fzc2V0cy91ZC5wbmdcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj4gXG5cbiAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXYgKyAnICcgKyAoZml4ZWQgPyBjbGFzc2VzLm5hdkZpeGVkIDogJycpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmF2Q29udGVudH0+XG4gICAgICAgICAgPFRhYnMgaW5pdGlhbFZhbHVlPXt0YWJ9IG9uQ2hhbmdlPXsgKHZhbCkgPT4ge2NoYW5nZVRhYih2YWwpfX0+XG4gICAgICAgICAgICA8VGFicy5JdGVtIGxhYmVsPVwiVXBsb2FkXCIgdmFsdWU9XCIvXCIgLz5cbiAgICAgICAgICAgIDxUYWJzLkl0ZW0gbGFiZWw9XCJQdWJsaWNcIiB2YWx1ZT1cIi9wdWJsaWNcIiAvPlxuICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERyb3B6b25lIGZyb20gJ3JlYWN0LWRyb3B6b25lJ1xuaW1wb3J0IHsgQnVja2V0cyB9IGZyb20gJ0B0ZXh0aWxlL2h1YidcbmltcG9ydCB7Z2V0TWV0YW1hc2tJZGVudGl0eX0gZnJvbSAnLi4vbGliL3NpZ25lcmNvbm5lY3QnXG5pbXBvcnQgeyBDYXJkLFRleHQsIFJvdywgQ29sLCBMb2FkaW5nIH0gZnJvbSAnQGdlaXN0LXVpL3JlYWN0JztcbmltcG9ydCB7VXBsb2FkLCBNZWh9IGZyb20gJ0BnZWlzdC11aS9yZWFjdC1pY29ucydcbmltcG9ydCBGb3JtIGZyb20gJy4vRm9ybSc7XG5pbXBvcnQgUHJpdmF0ZSBmcm9tIFwiLi9Qcml2YXRlXCJcblxuY2xhc3MgTXlEcm9wem9uZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBpcGZzR2F0ZXdheSA9ICdodHRwczovL2h1Yi50ZXh0aWxlLmlvJ1xuICAgIGtleUluZm8gPSB7XG4gICAgICBrZXk6ICdieGNoM2lrang2eWcybTRld3lldXNzamV1b3knXG4gICAgfVxuICAgIGtleUluZm9PcHRpb25zID0ge1xuICAgICAgZGVidWc6IHRydWVcbiAgICB9XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgc3VibWl0U3VjY2VzczogZmFsc2UsXG4gICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgaW5kZXg6IHtcbiAgICAgICAgICBhdXRob3I6ICcnLFxuICAgICAgICAgIGRhdGU6IDAsXG4gICAgICAgICAgcGF0aHM6IFtdLFxuICAgICAgICAgIGxvYWRpbmdNZXNzYWdlOiBcImxvYWRpbmdcIixcbiAgICAgIH0sXG4gICAgICBpbnB1dF9maWxlOiBudWxsLFxuICAgICAgdGl0bGU6IG51bGwsXG4gICAgICBhdXRob3JzOiBudWxsLFxuICAgIH1cblxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZ01lc3NhZ2U6IFwid2FpdGluZyBmb3IgbWV0YW1hc2tcIn0pXG4gICAgICBjb25zdCBpZGVudGl0eSA9IGF3YWl0IHRoaXMuZ2V0SWRlbnRpdHkoKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlkZW50aXR5OiBpZGVudGl0eVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZ01lc3NhZ2U6IFwiZmV0Y2hpbmcgZGF0YVwifSlcbiAgICAgIGNvbnN0IHtidWNrZXRLZXksIGJ1Y2tldHN9ID0gYXdhaXQgdGhpcy5nZXRCdWNrZXRLZXkoKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGJ1Y2tldHM6IGJ1Y2tldHMsXG4gICAgICAgIGJ1Y2tldEtleTogYnVja2V0S2V5XG4gICAgICB9KVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nTWVzc2FnZTogXCJmZXRjaGluZyBkYXRhXCJ9KVxuICAgICAgYXdhaXQgdGhpcy5nZXRCdWNrZXRMaW5rcygpXG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmdNZXNzYWdlOiBcImZldGNoaW5nIGRhdGFcIn0pXG4gICAgICBjb25zdCBpbmRleCA9IGF3YWl0IHRoaXMuZ2V0RmlsZUluZGV4KClcbiAgICAgIGlmIChpbmRleCkge1xuICAgICAgICBhd2FpdCB0aGlzLmZpbGVsaXN0RnJvbUluZGV4KGluZGV4KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJObyBpbmRleFwiKVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nTWVzc2FnZTogbnVsbH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGV4dGlsZSBCdWNrZXQgYXBpIGluaXRcbiAgICAgKi9cbiAgICBnZXRJZGVudGl0eSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBnZXRNZXRhbWFza0lkZW50aXR5KClcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ291bGRuJ3QgY29ubmVjdCB0byBtZXRhbWFza1wiKVxuICAgICAgfVxuICAgIH1cblxuICAgIGdldEJ1Y2tldEtleSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5pZGVudGl0eSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lkZW50aXR5IG5vdCBzZXQnKVxuICAgICAgfVxuICAgICAgY29uc3QgYnVja2V0cyA9IGF3YWl0IEJ1Y2tldHMud2l0aEtleUluZm8odGhpcy5rZXlJbmZvLCB0aGlzLmtleUluZm9PcHRpb25zKVxuICAgICAgLy8gQXV0aG9yaXplIHRoZSB1c2VyIGFuZCB5b3VyIGluc2VjdXJlIGtleXMgd2l0aCBnZXRUb2tlblxuICAgICAgYXdhaXQgYnVja2V0cy5nZXRUb2tlbih0aGlzLnN0YXRlLmlkZW50aXR5KVxuXG4gICAgICBjb25zdCBidWNrID0gYXdhaXQgYnVja2V0cy5nZXRPckNyZWF0ZSgnaW8udGV4dGlsZS5kcm9wem9uZScpXG4gICAgICBpZiAoIWJ1Y2sucm9vdCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBvcGVuIGJ1Y2tldCcpXG4gICAgICB9XG4gICAgICByZXR1cm4ge2J1Y2tldHM6IGJ1Y2tldHMsIGJ1Y2tldEtleTogYnVjay5yb290LmtleX07XG4gICAgfVxuXG4gICAgZ2V0QnVja2V0TGlua3MgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuYnVja2V0cyB8fCAhdGhpcy5zdGF0ZS5idWNrZXRLZXkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTm8gYnVja2V0IGNsaWVudCBvciByb290IGtleScpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgbGlua3MgPSBhd2FpdCB0aGlzLnN0YXRlLmJ1Y2tldHMubGlua3ModGhpcy5zdGF0ZS5idWNrZXRLZXkpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgLi4ubGlua3NcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcmluZyBhbmQgcmV0cmlldmFsIGZyb20gYnVja2V0XG4gICAgICogc3RvcmUgbWV0YWRhdGEganNvbiBpbnRvIGJ1Y2tldFxuICAgICAqL1xuICAgIHN0b3JlSW5kZXggPSBhc3luYyAoaW5kZXgpID0+IHtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5idWNrZXRzIHx8ICF0aGlzLnN0YXRlLmJ1Y2tldEtleSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdObyBidWNrZXQgY2xpZW50IG9yIHJvb3Qga2V5JylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCBidWYgPSBCdWZmZXIuZnJvbShKU09OLnN0cmluZ2lmeShpbmRleCwgbnVsbCwgMikpXG4gICAgICBjb25zdCBwYXRoID0gYGluZGV4Lmpzb25gXG4gICAgICBhd2FpdCB0aGlzLnN0YXRlLmJ1Y2tldHMucHVzaFBhdGgodGhpcy5zdGF0ZS5idWNrZXRLZXksIHBhdGgsIGJ1ZilcbiAgICB9XG5cbiAgICBpbml0SW5kZXggPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuaWRlbnRpdHkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignSWRlbnRpdHkgbm90IHNldCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLy8gdGhpcyB3aWxsIGJlIGNvbnZlcnRlZCB0byBKU09OLCB0aGlzIGlzIGF1dGhvciBtZXRhZGF0YVxuICAgICAgY29uc3QgaW5kZXggPSB7XG4gICAgICAgIGF1dGhvcjogdGhpcy5zdGF0ZS5pZGVudGl0eS5wdWJsaWMudG9TdHJpbmcoKSxcbiAgICAgICAgZGF0ZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKSxcbiAgICAgICAgcGF0aHM6IFtdXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc3RvcmVJbmRleChpbmRleClcbiAgICAgIHJldHVybiBpbmRleFxuICAgIH1cblxuICAgIGZpbGVsaXN0RnJvbUluZGV4ID0gYXN5bmMgKGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmdNZXNzYWdlOiBcImZldGNoaW5nIGZpbGVsaXN0XCJ9KVxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuYnVja2V0cyB8fCAhdGhpcy5zdGF0ZS5idWNrZXRLZXkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGJ1Y2tldCBjbGllbnQgb3Igcm9vdCBrZXknKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZXQgZmlsZSBwYXRocyBmcm9tIGluZGV4LnBhdGhzIGFycmF5XG4gICAgICAgIGZvciAobGV0IHBhdGggb2YgaW5kZXgucGF0aHMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhdGgpXG4gICAgICAgICAgICBjb25zdCBtZXRhZGF0YSA9IGF3YWl0IHRoaXMuc3RhdGUuYnVja2V0cy5wdWxsUGF0aCh0aGlzLnN0YXRlLmJ1Y2tldEtleSwgcGF0aClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGF3YWl0IHRoaXMuc3RhdGUuYnVja2V0cy5saW5rcyh0aGlzLnN0YXRlLmJ1Y2tldEtleSkpXG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBhd2FpdCBtZXRhZGF0YS5uZXh0KCk7XG4gICAgICAgICAgICBsZXQgc3RyID0gXCJcIjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludCh2YWx1ZVtpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2Uoc3RyKVxuICAgICAgICAgICAgY29uc3QgZmlsZSA9IGpzb24ub3JpZ2luYWxcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBmaWxlczogW1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuZmlsZXMsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3JjOmAke3RoaXMuaXBmc0dhdGV3YXl9L2lwZnMvJHtmaWxlLmNpZH1gLFxuICAgICAgICAgICAgICAgICAga2V5OiBmaWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICBhdXRob3JzOiBmaWxlLmF1dGhvcnMsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogZmlsZS50aXRsZSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRKU09ORnJvbUJ1Y2tldCA9IGFzeW5jIChwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0YXRlLmJ1Y2tldHMucHVsbFBhdGgodGhpcy5zdGF0ZS5idWNrZXRLZXksIHBhdGgpXG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGF3YWl0IGRhdGEubmV4dCgpO1xuICAgICAgICBsZXQgc3RyID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KHZhbHVlW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QganNvbl9kYXRhID0gSlNPTi5wYXJzZShzdHIpXG4gICAgICAgIHJldHVybiBqc29uX2RhdGFcbiAgICB9XG5cbiAgICBnZXRGaWxlSW5kZXggPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuYnVja2V0cyB8fCAhdGhpcy5zdGF0ZS5idWNrZXRLZXkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTm8gYnVja2V0IGNsaWVudCBvciByb290IGtleScpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhd2FpdCB0aGlzLmdldEpTT05Gcm9tQnVja2V0KCdpbmRleC5qc29uJylcbiAgICAgICAgcmV0dXJuIGluZGV4XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgY29uc29sZS5sb2coXCJcXG5cXG5pbml0aWFsaXppbmcgSU5ERVhcXG5cXG5cIilcbiAgICAgICAgY29uc3QgaW5kZXggPSBhd2FpdCB0aGlzLmluaXRJbmRleCgpXG4gICAgICAgIC8vIGF3YWl0IHRoaXMuaW5pdFB1YmxpY0dhbGxlcnkoKVxuICAgICAgICByZXR1cm4gaW5kZXhcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaWxlIGhhbmRsaW5nLCBvbiBkcm9wIGFuZCBzZXR0aW5nIG1ldGFkYXRhLCB1cGxvYWRpbmcgdG8gYnVja2V0IGV0Yy5cbiAgICAgKi9cbiAgICBpbnNlcnRGaWxlID0gYXN5bmMgKGZpbGUsIHBhdGgpID0+IHtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5idWNrZXRzIHx8ICF0aGlzLnN0YXRlLmJ1Y2tldEtleSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGJ1Y2tldCBjbGllbnQgb3Igcm9vdCBrZXknKVxuICAgICAgfVxuICAgICAgY29uc3QgYnVja2V0cyA9IHRoaXMuc3RhdGUuYnVja2V0c1xuICAgICAgcmV0dXJuIGF3YWl0IGJ1Y2tldHMucHVzaFBhdGgodGhpcy5zdGF0ZS5idWNrZXRLZXksIHBhdGgsIGZpbGUuc3RyZWFtKCkpXG4gICAgfVxuXG4gICAgcHJvY2Vzc0FuZFN0b3JlID0gYXN5bmMgKGZpbGUsIHBhdGgsIG5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGxvY2F0aW9uID0gYCR7cGF0aH0ke25hbWV9YFxuICAgICAgY29uc3QgcmF3ID0gYXdhaXQgdGhpcy5pbnNlcnRGaWxlKGZpbGUsIGxvY2F0aW9uKVxuICAgICAgY29uc3QgbWV0YWRhdGEgPSB7XG4gICAgICAgIGNpZDogcmF3LnBhdGguY2lkLnRvU3RyaW5nKCksXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHBhdGg6IGxvY2F0aW9uLFxuICAgICAgfVxuICAgICAgcmV0dXJuIG1ldGFkYXRhXG4gICAgfVxuXG4gICAgaGFuZGxlTmV3RmlsZSA9IGFzeW5jIChmaWxlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmdNZXNzYWdlOiBcImhhbmRsaW5nIGZpbGVcIn0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlTmV3RmlsZSgpXCIpXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5idWNrZXRzIHx8ICF0aGlzLnN0YXRlLmJ1Y2tldEtleSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gYnVja2V0IGNsaWVudCBvciByb290IGtleScpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWxlU2NoZW1hID0ge31cbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKClcblxuICAgICAgICBmaWxlU2NoZW1hWydkYXRlJ10gPSBub3dcbiAgICAgICAgZmlsZVNjaGVtYVsnbmFtZSddID0gYCR7ZmlsZS5uYW1lfWBcbiAgICAgICAgZmlsZVNjaGVtYVsndGl0bGUnXSA9IHRoaXMuc3RhdGUudGl0bGVcbiAgICAgICAgZmlsZVNjaGVtYVsnYXV0aG9ycyddID0gdGhpcy5zdGF0ZS5hdXRob3JzXG4gICAgICAgIFxuICAgICAgICBjb25zdCBmaWxlbmFtZSA9IGAke25vd31fJHtmaWxlLm5hbWV9YFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nTWVzc2FnZTogXCJwdXNoaW5nIGZpbGUgdG8gYnVja2V0XCJ9KVxuICAgICAgICBmaWxlU2NoZW1hWydvcmlnaW5hbCddID0gYXdhaXQgdGhpcy5wcm9jZXNzQW5kU3RvcmUoZmlsZSwgJ29yaWdpbmFscy8nLCBmaWxlbmFtZSlcblxuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IEJ1ZmZlci5mcm9tKEpTT04uc3RyaW5naWZ5KGZpbGVTY2hlbWEsIG51bGwsIDIpKVxuICAgICAgICBjb25zdCBtZXRhbmFtZSA9IGAke25vd31fJHtmaWxlLm5hbWV9Lmpzb25gXG4gICAgICAgIGNvbnN0IHBhdGggPSBgbWV0YWRhdGEvJHttZXRhbmFtZX1gXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmdNZXNzYWdlOiBcInB1c2hpbmcgbWV0YWRhdGFcIn0pXG4gICAgICAgIGF3YWl0IHRoaXMuc3RhdGUuYnVja2V0cy5wdXNoUGF0aCh0aGlzLnN0YXRlLmJ1Y2tldEtleSwgcGF0aCwgbWV0YWRhdGEpXG4gICAgICAgIGNvbnN0IGZpbGVPbkJ1Y2tldCA9IGZpbGVTY2hlbWFbJ29yaWdpbmFsJ11cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGluZGV4OiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5pbmRleCxcbiAgICAgICAgICAgICAgICBwYXRoczogWy4uLnRoaXMuc3RhdGUuaW5kZXgucGF0aHMsIHBhdGhdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsZXM6IFtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmZpbGVzLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBgJHt0aGlzLmlwZnNHYXRld2F5fS9pcGZzLyR7ZmlsZU9uQnVja2V0LmNpZH1gLFxuICAgICAgICAgICAgICAgICAgICBrZXk6IGZpbGVPbkJ1Y2tldC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBhdXRob3JzOiB0aGlzLnN0YXRlLmF1dGhvcnMsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnN0YXRlLnRpdGxlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nTWVzc2FnZTogbnVsbH0pXG4gICAgfVxuXG4gICAgb25Ecm9wID0gYXN5bmMgKGFjY2VwdGVkRmlsZXMpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGFjY2VwdGVkRmlsZXMpIHtcbiAgICAgICAgICAvL3NldHRpbmcgYSBzaW1wbGUgZm9ybWF0IGRhdGVfZmlsZW5hbWVcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnB1dF9maWxlOiBmaWxlfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaW5wdXRfZmlsZSA9PSBudWxsKSB7Y29uc29sZS5lcnJvcihcIlxcblxcbk5vIGZpbGVcXG5cXG5cIil9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZU5ld0ZpbGUodGhpcy5zdGF0ZS5pbnB1dF9maWxlKVxuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnN0b3JlSW5kZXgodGhpcy5zdGF0ZS5pbmRleClcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaW5wdXRfZmlsZTogbnVsbCxcbiAgICAgICAgICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgICAgICAgICBhdXRob3JzOiBudWxsLFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5zdG9yZUluZGV4KHRoaXMuc3RhdGUuaW5kZXgpXG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBzdWJtaXRTdWNjZXNzOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aXRsZUhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt0aXRsZTogZS50YXJnZXQudmFsdWV9KVxuICAgIH1cblxuICAgIGF1dGhvcnNIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXV0aG9yczogZS50YXJnZXQudmFsdWV9KVxuICAgIH1cblxuICAgIGZvcm1hdEJ1Y2tldERhdGEoKSB7XG4gICAgICAgIHZhciByZXMgPSBbXVxuICAgICAgICBmb3IgKHZhciBmIGluIHRoaXMuc3RhdGUuZmlsZXMpIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBcIk5hbWVcIjogZi50aXRsZSxcbiAgICAgICAgICAgICAgICBcIkF1dGhvcnNcIjogW2YuYXV0aG9ycyxdLFxuICAgICAgICAgICAgICAgIFwiVGFnc1wiOiBbXCJCcmFpbnNcIiwgXCJmTVJJXCJdLFxuICAgICAgICAgICAgICAgIFwiQklEU1ZlcnNpb25cIjogXCIxLjAuMlwiLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG15RGF0YSA9IHtcbiAgICAgICAgICAgIG1vY2tEYXRhOiByZXMsXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbXlEYXRhXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICBjb25zdCBidWNrZXREYXRhID0gdGhpcy5mb3JtYXRCdWNrZXREYXRhKClcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxEcm9wem9uZVxuICAgICAgICAgICAgICBvbkRyb3A9e3RoaXMub25Ecm9wfVxuICAgICAgICAgICAgICBtYXhTaXplPXsyMDAwMDAwMH1cbiAgICAgICAgICAgICAgbXVsdGlwbGU9e3RydWV9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXshKHRoaXMuc3RhdGUubG9hZGluZ01lc3NhZ2UgPT09IG51bGwpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsoe2dldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wc30pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lXCIgey4uLmdldFJvb3RQcm9wcygpfT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGhvdmVyYWJsZSB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5sb2FkaW5nTWVzc2FnZSA9PT0gbnVsbCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGdhcD17MC44fSBqdXN0aWZ5PVwiY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTVweCcsIG1hcmdpblRvcDogJzE1cHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MS41fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVcGxvYWQgc2l6ZT17NDB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgZ2FwPXswLjh9IGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTVweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MzB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgdHlwZT1cInByaW1hcnlcIiBhbGlnbj1cImNlbnRlclwiICBtZWRpdW0+PGI+RHJhZyBhbmQgRHJvcDwvYj48L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCB0eXBlPVwicHJpbWFyeVwiIGFsaWduPVwiY2VudGVyXCIgIG1lZGl1bT48Yj5vcjwvYj48L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCB0eXBlPVwicHJpbWFyeVwiIGFsaWduPVwiY2VudGVyXCIgIG1lZGl1bT48Yj5DbGljayB0byBTZWxlY3QgRmlsZXM8L2I+PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgeyEodGhpcy5zdGF0ZS5sb2FkaW5nTWVzc2FnZSA9PT0gbnVsbCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGdhcD17MC44fSBqdXN0aWZ5PVwiY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTVweCcsIG1hcmdpblRvcDogJzE1cHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MS41fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZWggc2l6ZT17NDB9IGNvbG9yPVwiZ3JleVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgZ2FwPXswLjh9IGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTVweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MzB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgdHlwZT1cInByaW1hcnlcIiBhbGlnbj1cImNlbnRlclwiICBtZWRpdW0+PGI+UGxlYXNlIFdhaXQ8L2I+PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBnYXA9ezAuOH0gYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxNXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXszMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nPnt0aGlzLnN0YXRlLmxvYWRpbmdNZXNzYWdlfTwvTG9hZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPn1cbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0Ryb3B6b25lPlxuICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmdNZXNzYWdlfVxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnN0YXRlLnRpdGxlfVxuICAgICAgICAgICAgICAgIHRpdGxlSGFuZGxlcj17dGhpcy50aXRsZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgYXV0aG9ycz17dGhpcy5zdGF0ZS5hdXRob3JzfVxuICAgICAgICAgICAgICAgIGF1dGhvcnNIYW5kbGVyPXt0aGlzLmF1dGhvcnNIYW5kbGVyfVxuICAgICAgICAgICAgICAgIHN1Ym1pdEhhbmRsZXI9e3RoaXMuc3VibWl0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICBzdWJtaXRTdWNjZXNzPXt0aGlzLnN0YXRlLnN1Ym1pdFN1Y2Nlc3N9Lz5cblxuICAgICAgICAgICAgPFByaXZhdGUgbXlEYXRhPXtidWNrZXREYXRhfSBhY2Nlc3NEYXRhPXtidWNrZXREYXRhfSAvPiAgICAgICAgICAgIFxuICAgICAgICAgIDwvPlxuICAgICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15RHJvcHpvbmU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbCwgSW1hZ2V9IGZyb20gJ0BnZWlzdC11aS9yZWFjdCc7XG5cbmNvbnN0IFBvcHVwID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxNb2RhbCB3aWR0aD1cIjMycmVtXCIgb3Blbj17cHJvcHMuc3VibWl0U3VjY2Vzc30+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9hc3NldHMvcG9hcC5wbmdcIiB3aWR0aD17OTB9Lz5cbiAgICAgICAgICA8TW9kYWwuVGl0bGU+UE9BUCBBbGVydDwvTW9kYWwuVGl0bGU+XG4gICAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XG4gICAgICAgICAgICA8cD5UaGFuayB5b3UgZm9yIGNvbnRyaWJ1dGluZyB0byBvcGVuIHNjaWVuY2UgdGhpcyBtb250aCE8L3A+XG4gICAgICAgICAgICA8cD5JbnN0cnVjdGlvbnMgYXJlIGluIHRoZSBydWxlcyB0YWIgaW4gRGlzY29yZCB0byBjbGFpbSB5b3VyIFBPQVA8L3A+XG4gICAgICAgICAgICA8cD5UaGUgc2VjcmV0IGNvZGV3b3JkIGlzIDxiPlVuc3RvcHBhYmxlPC9iPjwvcD5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Rpc2NvcmQuY29tL2NoYW5uZWxzLzkyNzI1NDY1MDk3MTg4OTc2NS85MjcyNTQ2NTE0MjQ4OTkxNTNcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Fzc2V0cy9kaXNjb3JkLnBuZ1wiIHdpZHRoPXszMH0vPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cbiAgICAgICAgICA8TW9kYWwuQWN0aW9uIHBhc3NpdmU+Q2xvc2U8L01vZGFsLkFjdGlvbj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgIClcbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBQb3B1cDtcbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyaWQsIFRleHQgfSBmcm9tICdAZ2Vpc3QtdWkvcmVhY3QnO1xuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSAnLi9tYWtlU3R5bGVzJztcbmltcG9ydCBEYXRhQ2FyZCBmcm9tICcuL0RhdGFDYXJkJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodWkpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBib3JkZXJCb3R0b206IGBzb2xpZCAxcHggJHt1aS5wYWxldHRlLmFjY2VudHNfMn1gXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgd2lkdGg6IHVpLmxheW91dC5wYWdlV2lkdGhXaXRoTWFyZ2luLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgcGFkZGluZzogYGNhbGMoJHt1aS5sYXlvdXQuZ2FwfSAqIDIpICR7dWkubGF5b3V0LnBhZ2VNYXJnaW59IGNhbGMoJHt1aS5sYXlvdXQuZ2FwfSAqIDQpYCxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBtYXJnaW46ICcwIGF1dG8nXG4gIH19KSlcblxuY29uc3QgUHJpdmF0ZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IG15RGF0YSA9IHByb3BzLm15RGF0YS5tb2NrRGF0YTtcbiAgY29uc3QgYWNjZXNzRGF0YSA9IHByb3BzLmFjY2Vzc0RhdGEubW9ja0RhdGE7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgPEdyaWQuQ29udGFpbmVyIGdhcD17Mn0ganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICA8VGV4dCBoMz5NeSBEYXRhc2V0czo8L1RleHQ+XG4gICAgICAgIHtteURhdGEubWFwKChlKSA9PiB7cmV0dXJuICg8R3JpZCB4cz17MjJ9PjxEYXRhQ2FyZCBkYXRhPXtlfS8+PC9HcmlkPil9KX1cbiAgICAgICAgPC9HcmlkLkNvbnRhaW5lcj5cbiAgICAgICAgPEdyaWQuQ29udGFpbmVyIGdhcD17Mn0ganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICA8VGV4dCBoMz5Qcml2YXRlIEFjY2VzcyBEYXRhc2V0czo8L1RleHQ+XG4gICAgICAgIHthY2Nlc3NEYXRhLm1hcCgoZSkgPT4ge3JldHVybiAoPEdyaWQgeHM9ezIyfT48RGF0YUNhcmQgZGF0YT17ZX0vPjwvR3JpZD4pfSl9XG4gICAgICAgIDwvR3JpZC5Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaXZhdGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFVBdXRoIGZyb20gXCJAdWF1dGgvanNcIlxuLy9pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcblxuXG5jb25zdCB1YXV0aCA9IG5ldyBVQXV0aCh7XG4gICAgY2xpZW50SUQ6IFwiYmJlOGYwOGEtZGQ3Ny00YTAxLWIwMmMtMWIzMDg0NDY1MGI5XCIsXG4gICAgcmVkaXJlY3RVcmk6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsXG59KVxuXG5mdW5jdGlvbiBVRG9tYWluKCkge1xuICAgIGNvbnN0IFtVYXV0aCwgc2V0VWF1dGhdID0gdXNlU3RhdGUoKVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gQ29ubmVjdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGF1dGhvcml6YXRpb24gPSBhd2FpdCB1YXV0aC5sb2dpbldpdGhQb3B1cCgpXG4gICAgICAgICAgICBzZXRVYXV0aChKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGF1dGhvcml6YXRpb24pKVtcImlkVG9rZW5cIl0pXG5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgYXdhaXQgYXV0aGVudGljYXRlKClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBsb2dPdXQoKSB7XG4gICAgICAgIHVhdXRoLmxvZ291dCgpXG4gICAgICAgIGxvZ091dCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9nKCkge1xuICAgICAgICBpZiAoVWF1dGggPT09IG51bGwgfHwgVWF1dGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgQ29ubmVjdCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2dPdXQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiVURvbWFpblwiIG9uQ2xpY2s9e2xvZ30+e1VhdXRoICE9IG51bGwgPyBVYXV0aFtcInN1YlwiXSA6IFwiTG9naW4gd2l0aCBVTlNEXCJ9PC9idXR0b24+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVURvbWFpbiIsImltcG9ydCB7IGNyZWF0ZVVzZVN0eWxlcyB9IGZyb20gJ3JlYWN0LWpzcyc7XG5pbXBvcnQgeyBHZWlzdFVJVGhlbWVzLCB1c2VUaGVtZSB9IGZyb20gJ0BnZWlzdC11aS9yZWFjdCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IChzdHlsZXMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHN0eWxlcyA9IHN0eWxlcyh0aGVtZSk7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVVzZVN0eWxlcyhzdHlsZXMpKCk7XG59O1xuXG5jb25zdCBtYWtlU3R5bGVzID0gKHN0eWxlcykgPT4ge1xuICByZXR1cm4gKCkgPT4gdXNlU3R5bGVzKHN0eWxlcyk7XG59O1xuZXhwb3J0IGRlZmF1bHQgbWFrZVN0eWxlcztcbiIsImltcG9ydCB7IEJpZ051bWJlciwgcHJvdmlkZXJzLCB1dGlscyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCB7IGhhc2hTeW5jIH0gZnJvbSAnYmNyeXB0anMnXG5pbXBvcnQgeyBQcml2YXRlS2V5IH0gZnJvbSAnQHRleHRpbGUvaHViJ1xuXG5jb25zdCBnZW5lcmF0ZU1lc3NhZ2VGb3JFbnRyb3B5ID0gKGV0aGVyZXVtX2FkZHJlc3MsIGFwcGxpY2F0aW9uX25hbWUpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgJ1RoZSBFdGhlcmV1bSBhZGRyZXNzIHVzZWQgYnkgdGhpcyBhcHBsaWNhdGlvbiBpczogXFxuJyArXG4gICAgICAnXFxuJyArXG4gICAgICBldGhlcmV1bV9hZGRyZXNzXG4gICAgKTtcbn1cblxuY29uc3QgZ2V0U2lnbmVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghd2luZG93LmV0aGVyZXVtKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdFdGhlcmV1bSBpcyBub3QgY29ubmVjdGVkLiBQbGVhc2UgZG93bmxvYWQgTWV0YW1hc2sgZnJvbSBodHRwczovL21ldGFtYXNrLmlvL2Rvd25sb2FkLmh0bWwnXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc29sZS5kZWJ1ZygnSW5pdGlhbGl6aW5nIHdlYjMgcHJvdmlkZXIuLi4nKTtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgcmV0dXJuIHNpZ25lclxufVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvdmlkZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCF3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0V0aGVyZXVtIGlzIG5vdCBjb25uZWN0ZWQuIFBsZWFzZSBkb3dubG9hZCBNZXRhbWFzayBmcm9tIGh0dHBzOi8vbWV0YW1hc2suaW8vZG93bmxvYWQuaHRtbCdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmRlYnVnKCdJbml0aWFsaXppbmcgd2ViMyBwcm92aWRlci4uLicpO1xuICAgIHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKVxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IHByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICByZXR1cm4gcHJvdmlkZXJcbn1cblxuY29uc3QgZ2V0QWRkcmVzc0FuZFNpZ25lciA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IGdldFNpZ25lcigpXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYWNjb3VudCBpcyBwcm92aWRlZC4gUGxlYXNlIHByb3ZpZGUgYW4gYWNjb3VudCB0byB0aGlzIGFwcGxpY2F0aW9uLicpO1xuICAgIH1cbiAgICBjb25zdCBhZGRyZXNzID0gYWNjb3VudHNbMF07XG4gICAgcmV0dXJuIHthZGRyZXNzLCBzaWduZXJ9XG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVNpZ25hdHVyZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBtZXRhbWFzayA9IGF3YWl0IGdldEFkZHJlc3NBbmRTaWduZXIoKVxuICAgIC8vIGF2b2lkIHNlbmRpbmcgdGhlIHJhdyBzZWNyZXQgYnkgaGFzaGluZyBpdCBmaXJzdFxuICAgIGNvbnN0IHNlY3JldCA9IGhhc2hTeW5jKFwiUGFzc3dvcmRcIiwgMTApXG4gICAgY29uc3QgbWVzc2FnZSA9IGdlbmVyYXRlTWVzc2FnZUZvckVudHJvcHkobWV0YW1hc2suYWRkcmVzcywgJ2Nlcm1haWMgZGVtbycpXG4gICAgY29uc3Qgc2lnbmVkVGV4dCA9IGF3YWl0IG1ldGFtYXNrLnNpZ25lci5zaWduTWVzc2FnZShtZXNzYWdlKTtcbiAgICBjb25zdCBoYXNoID0gdXRpbHMua2VjY2FrMjU2KHNpZ25lZFRleHQpO1xuICAgIGNvbnN0IHNlZWQgPSBoYXNoXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgLnJlcGxhY2UoJzB4JywgJycpXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgLm1hdGNoKC8uezJ9L2cpXG4gICAgICAgIC5tYXAoKGhleE5vUHJlZml4KSA9PiBCaWdOdW1iZXIuZnJvbSgnMHgnICsgaGV4Tm9QcmVmaXgpLnRvTnVtYmVyKCkpXG4gICAgcmV0dXJuIHtzZWVkLCBtZXRhbWFza31cbn1cblxuZXhwb3J0IGNvbnN0IGdldE1ldGFtYXNrSWRlbnRpdHkgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbWV0YW1hc2sgPSBhd2FpdCBnZXRBZGRyZXNzQW5kU2lnbmVyKClcbiAgICAvLyBhdm9pZCBzZW5kaW5nIHRoZSByYXcgc2VjcmV0IGJ5IGhhc2hpbmcgaXQgZmlyc3RcbiAgICBjb25zdCBzZWNyZXQgPSBoYXNoU3luYyhcIlBhc3N3b3JkXCIsIDEwKVxuICAgIGNvbnN0IG1lc3NhZ2UgPSBnZW5lcmF0ZU1lc3NhZ2VGb3JFbnRyb3B5KG1ldGFtYXNrLmFkZHJlc3MsICdjZXJtYWljIGRlbW8nKVxuICAgIGNvbnN0IHNpZ25lZFRleHQgPSBhd2FpdCBtZXRhbWFzay5zaWduZXIuc2lnbk1lc3NhZ2UobWVzc2FnZSk7XG4gICAgY29uc3QgaGFzaCA9IHV0aWxzLmtlY2NhazI1NihzaWduZWRUZXh0KTtcbiAgICBjb25zdCBhcnJheSA9IGhhc2hcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAucmVwbGFjZSgnMHgnLCAnJylcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAubWF0Y2goLy57Mn0vZylcbiAgICAgICAgLm1hcCgoaGV4Tm9QcmVmaXgpID0+IEJpZ051bWJlci5mcm9tKCcweCcgKyBoZXhOb1ByZWZpeCkudG9OdW1iZXIoKSlcblxuICAgIGlmIChhcnJheS5sZW5ndGggIT09IDMyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSGFzaCBvZiBzaWduYXR1cmUgaXMgbm90IHRoZSBjb3JyZWN0IHNpemUhIFNvbWV0aGluZyB3ZW50IHdyb25nIScpO1xuICAgIH1cbiAgICBjb25zdCBpZGVudGl0eSA9IFByaXZhdGVLZXkuZnJvbVJhd0VkMjU1MTlTZWVkKFVpbnQ4QXJyYXkuZnJvbShhcnJheSkpXG4gICAgY29uc29sZS5sb2coaWRlbnRpdHkudG9TdHJpbmcoKSlcblxuICAgIC8vIFlvdXIgYXBwIGNhbiBub3cgdXNlIHRoaXMgaWRlbnRpdHkgZm9yIGdlbmVyYXRpbmcgYSB1c2VyIE1haWxib3gsIFRocmVhZHMsIEJ1Y2tldHMsIGV0Y1xuICAgIHJldHVybiBpZGVudGl0eVxuICB9XG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi4vY29tcG9uZW50cy9EYXNoYm9hcmQnXG5pbXBvcnQgeyBKc3NQcm92aWRlciB9IGZyb20gJ3JlYWN0LWpzcyc7XG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxKc3NQcm92aWRlciBpZD17eyBtaW5pZnk6IHRydWUgfX0+XG4gICAgICAgICAgPExheW91dCBjb25uZWN0VXNlcj17cHJvcHMuY29ubmVjdFVzZXJ9IHByb3ZpZGVyPXtwcm9wcy5wcm92aWRlcn0+XG4gICAgICAgICAgICA8RGFzaGJvYXJkLz5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9Kc3NQcm92aWRlcj5cbiAgICApXG59XG4gIFxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ2Vpc3QtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGdlaXN0LXVpL3JlYWN0LWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0ZXh0aWxlL2h1YlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdWF1dGgvanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXRoZXJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRyb3B6b25lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWZlYXRoZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtanNzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=