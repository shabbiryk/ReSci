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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/public.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/Public.js":
/*!******************************!*\
  !*** ./components/Public.js ***!
  \******************************/
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
var _jsxFileName = "C:\\Users\\shabb\\Project\\Resci\\components\\Public.js";
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

const Public = props => {
  const classes = useStyles();
  const data = props.data.mockData;
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Container, {
    gap: 2,
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, data.map(e => {
    return __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      xs: 24,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 35
      }
    }, __jsx(_DataCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: e,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 49
      }
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Public);

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

/***/ "./mockData.json":
/*!***********************!*\
  !*** ./mockData.json ***!
  \***********************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"Name\":\"Multi-echo fMRI replication sample of \\nautobiographical memory, prospection and \\ntheory of mind reasoning tasks\",\"BIDSVersion\":\"1.0.2\",\"License\":\"PDDL\",\"Authors\":[\"Elizabeth DuPre\",\"Wen-Ming Luh\",\"R. Nathan Spreng\"],\"Tags\":[\"Brains\",\"fMRI\"]},{\"Name\":\"ASL_Philips_PCASL_2DEPI\",\"BIDSVersion\":\"1.5.0\",\"DatasetType\":\"raw\",\"License\":\"This dataset is made available under CC0.\",\"Authors\":[\"Sjoerd B. Vos\",\"David L. Thomas\"],\"HowToAcknowledge\":\"If you reference this dataset in your publications, please acknowledge its authors.\",\"EthicsApprovals\":[\"This original study from which this BIDS example dataset was derived was approved by the local ethics committee as protocol optimisation procedures\"],\"Tags\":[\"Neuroimaging\"]},{\"BIDSVersion\":\"1.0.0\",\"License\":\"This dataset is made available under the Public Domain Dedication and License \\nv1.0, whose full text can be found at \\nhttp://www.opendatacommons.org/licenses/pddl/1.0/. \\nWe hope that all users will follow the ODC Attribution/Share-Alike \\nCommunity Norms (http://www.opendatacommons.org/norms/odc-by-sa/); \\nin particular, while not legally required, we hope that all users \\nof the data will acknowledge the OpenfMRI project and NSF Grant \\nOCI-1131441 (R. Poldrack, PI) in any publications.\",\"Name\":\"Classification learning\",\"Authors\":[\"John, V.R.\",\"Mike, M.B.\",\"Jack, S.A.\"],\"ReferencesAndLinks\":[\"John, V.R., Gluck, M.A., Poldrack, R.A. (2006). Long-term test-retest reliability of functional MRI in a classification learning task. Neuroimage, 29(3):1000-6\"],\"Tags\":[\"Neuroimaging\"]}]");

/***/ }),

/***/ "./pages/public.js":
/*!*************************!*\
  !*** ./pages/public.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Public */ "./components/Public.js");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\shabb\\Project\\Resci\\pages\\public.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PublicPage = props => {
  const mockData = __webpack_require__(/*! ./../mockData.json */ "./mockData.json");

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
    toggleDarkMode: props.toggleDarkMode,
    connectUser: props.connectUser,
    provider: props.provider,
    user: props.user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }
  }, __jsx(_components_Public__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: {
      mockData
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PublicPage);

/***/ }),

/***/ "@geist-ui/react":
/*!**********************************!*\
  !*** external "@geist-ui/react" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@geist-ui/react");

/***/ }),

/***/ "@uauth/js":
/*!****************************!*\
  !*** external "@uauth/js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@uauth/js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXRhQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QdWJsaWMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VRG9tYWluLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFrZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wdWJsaWMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGdlaXN0LXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHVhdXRoL2pzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWZlYXRoZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1qc3NcIiJdLCJuYW1lcyI6WyJEYXRhQ2FyZCIsInByb3BzIiwiZGF0YSIsIk5hbWUiLCJBdXRob3JzIiwibWFwIiwiZSIsIm1hcmdpbkJvdHRvbSIsIlRhZ3MiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidWkiLCJyb290IiwicGFkZGluZyIsImJvcmRlclRvcCIsInBhbGV0dGUiLCJhY2NlbnRzXzIiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleGRpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJsb2dvIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luIiwibGF5b3V0IiwicGFnZVdpZHRoV2l0aE1hcmdpbiIsIkZvb3RlciIsImNsYXNzZXMiLCJMYXlvdXQiLCJjb25uZWN0VXNlciIsInByb3ZpZGVyIiwiY2hpbGRyZW4iLCJoZWFkZXIiLCJ3aWR0aCIsIm1heFdpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZCIsImZvbnRTaXplIiwiaGVpZ2h0IiwiekluZGV4IiwidW5zdG9wcGFibGUiLCJqdXN0aWZ5Q29udGVudCIsImhlYWRlckNvbnRlbnQiLCJwYWdlTWFyZ2luIiwiaGVhZGVyVGl0bGUiLCJmb250V2VpZ2h0IiwicGFkZGluZ0xlZnQiLCJuYXYiLCJwb3NpdGlvbiIsInRvcCIsImJvcmRlckJvdHRvbSIsIm5hdkZpeGVkIiwidHlwZSIsImJveFNoYWRvdyIsIm5hdkNvbnRlbnQiLCJmbGV4V3JhcCIsIm92ZXJmbG93WSIsIm92ZXJmbG93WCIsIm92ZXJmbG93Iiwic2lkZWJhciIsInRoZW1lSWNvbiIsIm1hcmdpblJpZ2h0IiwicG9wb3ZlciIsInBvcG92ZXJDb250ZW50IiwiTWVudSIsInRoZW1lIiwidXNlVGhlbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmaXhlZCIsInNldEZpeGVkIiwidXNlU3RhdGUiLCJ0YWIiLCJzZXRUYWIiLCJwYXRobmFtZSIsInVzZUVmZmVjdCIsInNjcm9sbEhhbmRsZXIiLCJzaG91bGRGaXhlZCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGFuZ2VUYWIiLCJ2YWwiLCJwdXNoIiwibWFyZ2luVG9wIiwiYXZhdGFyIiwiYWRkcmVzcyIsImNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiZ2FwIiwiYm94U2l6aW5nIiwiUHVibGljIiwibW9ja0RhdGEiLCJ1YXV0aCIsIlVBdXRoIiwiY2xpZW50SUQiLCJyZWRpcmVjdFVyaSIsIlVEb21haW4iLCJVYXV0aCIsInNldFVhdXRoIiwiQ29ubmVjdCIsImF1dGhvcml6YXRpb24iLCJsb2dpbldpdGhQb3B1cCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImF1dGhlbnRpY2F0ZSIsImVycm9yIiwiY29uc29sZSIsImxvZ091dCIsImxvZ291dCIsImxvZyIsInVuZGVmaW5lZCIsInN0eWxlcyIsImNyZWF0ZVVzZVN0eWxlcyIsIlB1YmxpY1BhZ2UiLCJyZXF1aXJlIiwibWluaWZ5IiwidG9nZ2xlRGFya01vZGUiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUNyQixTQUNJLE1BQUMsb0RBQUQ7QUFBTSxTQUFLLEVBQUMsTUFBWjtBQUFtQixhQUFTLE1BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLG9EQUFELENBQU0sT0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvREFBRDtBQUFNLEtBQUMsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFwQixDQURKLENBREEsRUFJQSxNQUFDLHVEQUFEO0FBQVMsS0FBQyxFQUFFLENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpBLEVBS0EsTUFBQyxvREFBRCxDQUFNLE9BQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRixLQUFLLENBQUNDLElBQU4sQ0FBV0UsT0FBWCxDQUFtQkMsR0FBbkIsQ0FBd0JDLENBQUMsSUFBSSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0EsQ0FBUCxDQUE3QixDQURMLENBTEEsRUFRQSxNQUFDLHVEQUFEO0FBQVMsS0FBQyxFQUFFLENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJBLEVBU0EsTUFBQyxvREFBRCxDQUFNLE9BQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBSyxTQUFLLEVBQUU7QUFBRUMsa0JBQVksRUFBRTtBQUFoQixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1EQUFEO0FBQUssUUFBSSxFQUFFLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQk4sS0FBSyxDQUFDQyxJQUFOLENBQVdNLElBQVgsQ0FBZ0JILEdBQWhCLENBQXFCQyxDQUFDLElBQUksTUFBQyxzREFBRDtBQUFRLFVBQU0sRUFBQyxLQUFmO0FBQXFCLFFBQUksRUFBQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDQSxDQUFsQyxDQUExQixDQUFqQixDQURKLEVBRUksTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxzREFBRDtBQUNJLFFBQUksRUFBQyxPQURUO0FBRUksUUFBSSxNQUZSO0FBR0ksUUFBSSxFQUFFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhWO0FBSUksUUFBSSxFQUFDLFdBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxDQUZKLENBREosQ0FUQSxDQURKO0FBNEJIOztBQUFBO0FBRWNOLHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBRUEsTUFBTVMsU0FBUyxHQUFHQywyREFBVSxDQUFFQyxFQUFELEtBQVM7QUFDcENDLE1BQUksRUFBRTtBQUNKQyxXQUFPLEVBQUUsVUFETDtBQUVKQyxhQUFTLEVBQUcsYUFBWUgsRUFBRSxDQUFDSSxPQUFILENBQVdDLFNBQVUsRUFGekM7QUFHSkMsYUFBUyxFQUFFLFFBSFA7QUFJSkMsV0FBTyxFQUFFLE1BSkw7QUFLSkMsaUJBQWEsRUFBRSxLQUxYO0FBTUpDLGNBQVUsRUFBRTtBQU5SLEdBRDhCO0FBU3BDQyxNQUFJLEVBQUU7QUFDSkMsZ0JBQVksRUFBRSxnQkFEVjtBQUVKQyxVQUFNLEVBQUU7QUFGSixHQVQ4QjtBQWFwQyxHQUFFLGlDQUFnQ1osRUFBRSxDQUFDYSxNQUFILENBQVVDLG1CQUFvQixHQUFoRSxHQUFxRTtBQUNuRWIsUUFBSSxFQUFFO0FBQ0pLLGVBQVMsRUFBRTtBQURQO0FBRDZEO0FBYmpDLENBQVQsQ0FBRCxDQUE1Qjs7QUFvQkEsTUFBTVMsTUFBTSxHQUFHLE1BQU07QUFDbkIsUUFBTUMsT0FBTyxHQUFHbEIsU0FBUyxFQUF6QjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVrQixPQUFPLENBQUNmLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQUdELENBTEQ7O0FBT2VjLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBOztBQUVBLE1BQU1FLE1BQU0sR0FBSTNCLEtBQUQsSUFBVztBQUN4QixTQUNFLG1FQUNDLE1BQUMsNkNBQUQ7QUFBTSxlQUFXLEVBQUVBLEtBQUssQ0FBQzRCLFdBQXpCO0FBQXNDLFlBQVEsRUFBRTVCLEtBQUssQ0FBQzZCLFFBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEI3QixLQUFLLENBQUM4QixRQUFsQyxDQURBLENBRkYsRUFLRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGO0FBU0QsQ0FWRDs7QUFZZUgscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU1uQixTQUFTLEdBQUdDLDJEQUFVLENBQUVDLEVBQUQsS0FBUztBQUNwQ3FCLFFBQU0sRUFBRTtBQUNOQyxTQUFLLEVBQUV0QixFQUFFLENBQUNhLE1BQUgsQ0FBVUMsbUJBRFg7QUFFTlMsWUFBUSxFQUFFLE1BRko7QUFHTlgsVUFBTSxFQUFFLFFBSEY7QUFJTlksbUJBQWUsRUFBRXhCLEVBQUUsQ0FBQ0ksT0FBSCxDQUFXcUIsVUFKdEI7QUFLTkMsWUFBUSxFQUFFLEVBTEo7QUFNTkMsVUFBTSxFQUFFLEVBTkY7QUFPTkMsVUFBTSxFQUFFO0FBUEYsR0FENEI7QUFVcENDLGFBQVcsRUFBQztBQUNWdEIsV0FBTyxFQUFFLE1BREM7QUFFVkUsY0FBVSxFQUFFLG1CQUZGO0FBR1ZxQixrQkFBYyxFQUFFLDBCQUhOO0FBSVZOLG1CQUFlLEVBQUV4QixFQUFFLENBQUNJLE9BQUgsQ0FBV3FCO0FBSmxCLEdBVndCO0FBZ0JwQ00sZUFBYSxFQUFFO0FBQ2JKLFVBQU0sRUFBRSxNQURLO0FBRWJwQixXQUFPLEVBQUUsTUFGSTtBQUdiRSxjQUFVLEVBQUUsUUFIQztBQUlicUIsa0JBQWMsRUFBRSxlQUpIO0FBS2I1QixXQUFPLEVBQUcsS0FBSUYsRUFBRSxDQUFDYSxNQUFILENBQVVtQixVQUFXO0FBTHRCLEdBaEJxQjtBQXVCcENDLGFBQVcsRUFBRTtBQUNYQyxjQUFVLEVBQUUsR0FERDtBQUVYM0IsV0FBTyxFQUFFLE1BRkU7QUFHWEUsY0FBVSxFQUFFLFFBSEQ7QUFJWDBCLGVBQVcsRUFBRTtBQUpGLEdBdkJ1QjtBQTZCcENDLEtBQUcsRUFBRTtBQUNIQyxZQUFRLEVBQUUsUUFEUDtBQUVIQyxPQUFHLEVBQUUsQ0FGRjtBQUdIZCxtQkFBZSxFQUFFeEIsRUFBRSxDQUFDSSxPQUFILENBQVdxQixVQUh6QjtBQUlIYyxnQkFBWSxFQUFHLGFBQVl2QyxFQUFFLENBQUNJLE9BQUgsQ0FBV0MsU0FBVSxFQUo3QztBQUtIdUIsVUFBTSxFQUFFO0FBTEwsR0E3QitCO0FBb0NwQ1ksVUFBUSxFQUFFO0FBQ1JELGdCQUFZLEVBQUV2QyxFQUFFLENBQUN5QyxJQUFILEtBQVksT0FBWixJQUF1QixNQUQ3QjtBQUVSQyxhQUFTLEVBQUUxQyxFQUFFLENBQUN5QyxJQUFILEtBQVksT0FBWixJQUF1QjtBQUYxQixHQXBDMEI7QUF3Q3BDRSxZQUFVLEVBQUU7QUFDVnJCLFNBQUssRUFBRXRCLEVBQUUsQ0FBQ2EsTUFBSCxDQUFVQyxtQkFEUDtBQUVWUyxZQUFRLEVBQUUsTUFGQTtBQUdWSSxVQUFNLEVBQUUsTUFIRTtBQUlWZixVQUFNLEVBQUUsUUFKRTtBQUtWLHNCQUFrQjtBQUNoQlYsYUFBTyxFQUFHLEtBQUlGLEVBQUUsQ0FBQ2EsTUFBSCxDQUFVbUIsVUFBVyxFQURuQjtBQUVoQk8sa0JBQVksRUFBRSxpQkFGRTtBQUdoQkssY0FBUSxFQUFFLG1CQUhNO0FBSWhCQyxlQUFTLEVBQUUsUUFKSztBQUtoQkMsZUFBUyxFQUFFLE1BTEs7QUFNaEJDLGNBQVEsRUFBRSxzQkFOTTtBQU9oQiw0QkFBc0IsTUFQTjtBQVFoQiw4QkFBd0I7QUFDdEJ4QyxlQUFPLEVBQUU7QUFEYTtBQVJSLEtBTFI7QUFpQlYsa0JBQWM7QUFDWkEsYUFBTyxFQUFFO0FBREcsS0FqQko7QUFvQlYsY0FBVTtBQUNSTCxhQUFPLEVBQUUsaUJBREQ7QUFFUlUsWUFBTSxFQUFFLGNBRkE7QUFHUmMsY0FBUSxFQUFFO0FBSEY7QUFwQkEsR0F4Q3dCO0FBa0VwQ3NCLFNBQU8sRUFBRTtBQUNQekMsV0FBTyxFQUFFLE1BREY7QUFFUEUsY0FBVSxFQUFFO0FBRkwsR0FsRTJCO0FBc0VwQ3dDLFdBQVMsRUFBRTtBQUNUM0IsU0FBSyxFQUFFLGlCQURFO0FBRVRLLFVBQU0sRUFBRSxpQkFGQztBQUdUcEIsV0FBTyxFQUFFLGlCQUhBO0FBSVR1QixrQkFBYyxFQUFFLG1CQUpQO0FBS1RyQixjQUFVLEVBQUUsbUJBTEg7QUFNVHlDLGVBQVcsRUFBRSxDQU5KO0FBT1RoRCxXQUFPLEVBQUU7QUFQQSxHQXRFeUI7QUErRXBDaUQsU0FBTyxFQUFFO0FBQ1BELGVBQVcsRUFBRSxDQUROO0FBRVBmLGVBQVcsRUFBQyxpQkFGTDtBQUdQYixTQUFLLEVBQUU7QUFIQTtBQS9FMkIsQ0FBVCxDQUFELENBQTVCOztBQXNGQSxNQUFNOEIsY0FBYyxHQUFHLE1BQ3JCLG1FQUNFLE1BQUMsdURBQUQsQ0FBUyxJQUFUO0FBQWMsT0FBSyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQURGLEVBSUUsTUFBQyx1REFBRCxDQUFTLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsb0RBQUQ7QUFBTSxNQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLENBSkYsRUFPRSxNQUFDLHVEQUFELENBQVMsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxvREFBRDtBQUFNLE1BQUksTUFBVjtBQUFXLE1BQUksRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FQRixFQVVFLE1BQUMsdURBQUQsQ0FBUyxJQUFUO0FBQWMsTUFBSSxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBVkYsRUFXRSxNQUFDLHVEQUFELENBQVMsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxvREFBRDtBQUFNLE1BQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FYRixDQURGOztBQWtCQSxNQUFNQyxJQUFJLEdBQUcsQ0FBQztBQUFFbkMsYUFBRjtBQUFlQztBQUFmLENBQUQsS0FBK0I7QUFDMUMsUUFBTUgsT0FBTyxHQUFHbEIsU0FBUyxFQUF6QjtBQUNBLFFBQU13RCxLQUFLLEdBQUdDLGdFQUFRLEVBQXRCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxLQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCRixzREFBUSxDQUFDSixNQUFNLENBQUNPLFFBQVIsQ0FBOUI7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsYUFBYSxHQUFHLE1BQU07QUFDMUIsWUFBTUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQXpCLEdBQXFDLEVBQXpEO0FBQ0EsVUFBSVgsS0FBSyxLQUFLUSxXQUFkLEVBQTJCUCxRQUFRLENBQUNPLFdBQUQsQ0FBUjtBQUM1QixLQUhEOztBQUlBQyxZQUFRLENBQUNHLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DTCxhQUFwQztBQUNBLFdBQU8sTUFBTUUsUUFBUSxDQUFDSSxtQkFBVCxDQUE2QixRQUE3QixFQUF1Q04sYUFBdkMsQ0FBYjtBQUNELEdBUFEsRUFPTixDQUFDUCxLQUFELENBUE0sQ0FBVDs7QUFTQSxRQUFNYyxTQUFTLEdBQUlDLEdBQUQsSUFBUztBQUV6QmpCLFVBQU0sQ0FBQ2tCLElBQVAsQ0FBWUQsR0FBWjtBQUNBWCxVQUFNLENBQUNXLEdBQUQsQ0FBTjtBQUNELEdBSkQ7O0FBTUEsU0FDRSxtRUFDRTtBQUFLLGFBQVMsRUFBRXpELE9BQU8sQ0FBQ0ssTUFBeEI7QUFBZ0MsU0FBSyxFQUFFO0FBQUVzRCxlQUFTLEVBQUU7QUFBYixLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUUzRCxPQUFPLENBQUNlLGFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFNBQUssRUFBRTtBQUFFeEIsYUFBTyxFQUFFO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFRLE9BQUcsRUFBQyxhQUFaO0FBQTBCLGFBQVMsRUFBRVMsT0FBTyxDQUFDNEQsTUFBN0M7QUFBcUQsT0FBRyxFQUFDLHdCQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBRTVELE9BQU8sQ0FBQ2lCLFdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBc0MsTUFBQyxvREFBRDtBQUFNLE1BQUUsTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUF0QyxDQUZGLENBREosRUFNSTtBQUFLLGFBQVMsRUFBRWpCLE9BQU8sQ0FBQ2dDLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQ0UsUUFBSSxNQUROO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxXQUFPLEVBQUU5QixXQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLQ0MsUUFBUSxHQUFHQSxRQUFRLENBQUMwRCxPQUFaLEdBQXNCLFNBTC9CLENBREYsRUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQU8sTUFBQyxnREFBRDtBQUFTLGFBQVMsRUFBRTdELE9BQU8sQ0FBQ2EsV0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQLE1BUkEsRUFVRSxNQUFDLHVEQUFEO0FBQVMsV0FBTyxFQUFFdUIsY0FBbEI7QUFBa0MsYUFBUyxFQUFDLFdBQTVDO0FBQXdELG1CQUFlLEVBQUVwQyxPQUFPLENBQUNtQyxPQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsc0RBQUQ7QUFBUSxPQUFHLEVBQUMsZ0JBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBREEsQ0FWRixDQU5KLENBREYsQ0FERixFQTJCRTtBQUFLLGFBQVMsRUFBRW5DLE9BQU8sQ0FBQ29CLEdBQVIsR0FBYyxHQUFkLElBQXFCc0IsS0FBSyxHQUFHMUMsT0FBTyxDQUFDd0IsUUFBWCxHQUFzQixFQUFoRCxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUV4QixPQUFPLENBQUMyQixVQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFNLGdCQUFZLEVBQUVrQixHQUFwQjtBQUF5QixZQUFRLEVBQUlZLEdBQUQsSUFBUztBQUFDRCxlQUFTLENBQUNDLEdBQUQsQ0FBVDtBQUFlLEtBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFELENBQU0sSUFBTjtBQUFXLFNBQUssRUFBQyxRQUFqQjtBQUEwQixTQUFLLEVBQUMsR0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxvREFBRCxDQUFNLElBQU47QUFBVyxTQUFLLEVBQUMsUUFBakI7QUFBMEIsU0FBSyxFQUFDLFNBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBREYsQ0EzQkYsQ0FERjtBQXNDRCxDQTVERDs7QUE4RGVwQixtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3S0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNdkQsU0FBUyxHQUFHQywyREFBVSxDQUFFQyxFQUFELEtBQVM7QUFDcENDLE1BQUksRUFBRTtBQUNKc0MsZ0JBQVksRUFBRyxhQUFZdkMsRUFBRSxDQUFDSSxPQUFILENBQVdDLFNBQVU7QUFENUMsR0FEOEI7QUFJcEN5RSxTQUFPLEVBQUU7QUFDUHZFLFdBQU8sRUFBRSxNQURGO0FBRVB3RSxpQkFBYSxFQUFFLEtBRlI7QUFHUHpELFNBQUssRUFBRXRCLEVBQUUsQ0FBQ2EsTUFBSCxDQUFVQyxtQkFIVjtBQUlQUyxZQUFRLEVBQUUsTUFKSDtBQUtQckIsV0FBTyxFQUFHLFFBQU9GLEVBQUUsQ0FBQ2EsTUFBSCxDQUFVbUUsR0FBSSxTQUFRaEYsRUFBRSxDQUFDYSxNQUFILENBQVVtQixVQUFXLFNBQVFoQyxFQUFFLENBQUNhLE1BQUgsQ0FBVW1FLEdBQUksT0FMM0U7QUFNUEMsYUFBUyxFQUFFLFlBTko7QUFPUHJFLFVBQU0sRUFBRTtBQVBEO0FBSjJCLENBQVQsQ0FBRCxDQUE1Qjs7QUFjQSxNQUFNc0UsTUFBTSxHQUFJNUYsS0FBRCxJQUFXO0FBQ3hCLFFBQU0wQixPQUFPLEdBQUdsQixTQUFTLEVBQXpCO0FBQ0EsUUFBTVAsSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQU4sQ0FBVzRGLFFBQXhCO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRW5FLE9BQU8sQ0FBQ2YsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFZSxPQUFPLENBQUM4RCxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRCxDQUFNLFNBQU47QUFBZ0IsT0FBRyxFQUFFLENBQXJCO0FBQXdCLFdBQU8sRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0N2RixJQUFJLENBQUNHLEdBQUwsQ0FBVUMsQ0FBRCxJQUFPO0FBQUMsV0FBUSxNQUFDLG9EQUFEO0FBQU0sUUFBRSxFQUFFLEVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFjLE1BQUMsaURBQUQ7QUFBVSxVQUFJLEVBQUVBLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBZCxDQUFSO0FBQW1ELEdBQXBFLENBREQsQ0FERixDQURGLENBREY7QUFTRCxDQVpEOztBQWNldUYscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtDQUVBOztBQUdBLE1BQU1FLEtBQUssR0FBRyxJQUFJQyxnREFBSixDQUFVO0FBQ3BCQyxVQUFRLEVBQUUsc0NBRFU7QUFFcEJDLGFBQVcsRUFBRTtBQUZPLENBQVYsQ0FBZDs7QUFLQSxTQUFTQyxPQUFULEdBQW1CO0FBQ2YsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9COUIsc0RBQVEsRUFBbEM7O0FBRUEsaUJBQWUrQixPQUFmLEdBQXlCO0FBQ3JCLFFBQUk7QUFDQSxZQUFNQyxhQUFhLEdBQUcsTUFBTVIsS0FBSyxDQUFDUyxjQUFOLEVBQTVCO0FBQ0FILGNBQVEsQ0FBQ0ksSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlSixhQUFmLENBQVgsRUFBMEMsU0FBMUMsQ0FBRCxDQUFSLENBRkEsQ0FJQTs7QUFDQSxZQUFNSyxZQUFZLEVBQWxCO0FBQ0gsS0FORCxDQU1FLE9BQU9DLEtBQVAsRUFBYztBQUNaQyxhQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUNIO0FBQ0o7O0FBRUQsaUJBQWVFLE1BQWYsR0FBd0I7QUFDcEJoQixTQUFLLENBQUNpQixNQUFOO0FBQ0FELFVBQU07QUFDVDs7QUFFRCxXQUFTRSxHQUFULEdBQWU7QUFDWCxRQUFJYixLQUFLLEtBQUssSUFBVixJQUFrQkEsS0FBSyxLQUFLYyxTQUFoQyxFQUEyQztBQUN2Q1osYUFBTztBQUNWLEtBRkQsTUFFTztBQUNIUyxZQUFNO0FBQ1Q7QUFDSjs7QUFFRCxTQUNJLG1FQUNJO0FBQVEsYUFBUyxFQUFDLFNBQWxCO0FBQTRCLFdBQU8sRUFBRUUsR0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEyQ2IsS0FBSyxJQUFJLElBQVQsR0FBZ0JBLEtBQUssQ0FBQyxLQUFELENBQXJCLEdBQStCLGlCQUExRSxDQURKLENBREo7QUFLSDs7QUFFY0Qsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLE1BQU0xRixTQUFTLEdBQUkwRyxNQUFELElBQVk7QUFDNUIsUUFBTWxELEtBQUssR0FBR0MsZ0VBQVEsRUFBdEI7O0FBQ0EsTUFBSSxPQUFPaUQsTUFBUCxLQUFrQixVQUF0QixFQUFrQztBQUNoQ0EsVUFBTSxHQUFHQSxNQUFNLENBQUNsRCxLQUFELENBQWY7QUFDRDs7QUFDRCxTQUFPbUQsaUVBQWUsQ0FBQ0QsTUFBRCxDQUFmLEVBQVA7QUFDRCxDQU5EOztBQVFBLE1BQU16RyxVQUFVLEdBQUl5RyxNQUFELElBQVk7QUFDN0IsU0FBTyxNQUFNMUcsU0FBUyxDQUFDMEcsTUFBRCxDQUF0QjtBQUNELENBRkQ7O0FBR2V6Ryx5RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTJHLFVBQVUsR0FBSXBILEtBQUQsSUFBVztBQUMxQixRQUFNNkYsUUFBUSxHQUFHd0IsbUJBQU8sQ0FBQywyQ0FBRCxDQUF4Qjs7QUFDQSxTQUNJLE1BQUMscURBQUQ7QUFBYSxNQUFFLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLE1BQUMsMERBQUQ7QUFBUSxrQkFBYyxFQUFFdEgsS0FBSyxDQUFDdUgsY0FBOUI7QUFBOEMsZUFBVyxFQUFFdkgsS0FBSyxDQUFDNEIsV0FBakU7QUFBOEUsWUFBUSxFQUFFNUIsS0FBSyxDQUFDNkIsUUFBOUY7QUFBd0csUUFBSSxFQUFFN0IsS0FBSyxDQUFDd0gsSUFBcEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLLE1BQUMsMERBQUQ7QUFBUSxRQUFJLEVBQUU7QUFBQzNCO0FBQUQsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREwsQ0FESCxDQURKO0FBT0gsQ0FURDs7QUFXZXVCLHlFQUFmLEU7Ozs7Ozs7Ozs7O0FDZkEsNEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoicGFnZXMvcHVibGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wdWJsaWMuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDYXJkLCBUZXh0LCBEaXZpZGVyLCBCdXR0b24sIFJvdywgQ29sIH0gZnJvbSAnQGdlaXN0LXVpL3JlYWN0JztcbmltcG9ydCAqIGFzIEljb25zIGZyb20gJ3JlYWN0LWZlYXRoZXInO1xuXG5mdW5jdGlvbiBEYXRhQ2FyZChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkIHdpZHRoPVwiMTAwJVwiIGhvdmVyYWJsZT5cbiAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgIDxUZXh0IGI+e3Byb3BzLmRhdGEuTmFtZX08L1RleHQ+XG4gICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICA8RGl2aWRlciB5PXswfSAvPlxuICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgICAge3Byb3BzLmRhdGEuQXV0aG9ycy5tYXAoKGUgPT4gPFRleHQ+e2V9PC9UZXh0PikpfSBcbiAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgIDxEaXZpZGVyIHk9ezB9IC8+XG4gICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICA8Um93IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzE1cHgnIH19PlxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTc1fT57cHJvcHMuZGF0YS5UYWdzLm1hcCgoZSA9PiA8QnV0dG9uIG1hcmdpbj1cIjVweFwiIHNpemU9XCJtaW5pXCI+e2V9PC9CdXR0b24+KSl9PC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xuICAgICAgICAgICAgICAgICAgICBhdXRvXG4gICAgICAgICAgICAgICAgICAgIGljb249ezxJY29ucy5Eb3dubG9hZCAvPn1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIERvd25sb2FkXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG5cbiAgICAgICAgPC9DYXJkPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFDYXJkOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWFrZVN0eWxlcyBmcm9tICcuL21ha2VTdHlsZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh1aSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6ICc4cHggNDJweCcsXG4gICAgYm9yZGVyVG9wOiBgc29saWQgMXB4ICR7dWkucGFsZXR0ZS5hY2NlbnRzXzJ9YCxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4ZGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICB9LFxuICBsb2dvOiB7XG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlICFpbXBvcnRhbnQnLFxuICAgIG1hcmdpbjogJzAgNnB4IDAgMCAhaW1wb3J0YW50J1xuICB9LFxuICBbYEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7dWkubGF5b3V0LnBhZ2VXaWR0aFdpdGhNYXJnaW59KWBdOiB7XG4gICAgcm9vdDoge1xuICAgICAgdGV4dEFsaWduOiAnc3RhcnQgIWltcG9ydGFudCdcbiAgICB9XG4gIH1cbn0pKTtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgIDxNZW51IGNvbm5lY3RVc2VyPXtwcm9wcy5jb25uZWN0VXNlcn0gcHJvdmlkZXI9e3Byb3BzLnByb3ZpZGVyfSAvPlxuICAgICAgPG1haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8LyA+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IFRleHQsIEF2YXRhciwgQnV0dG9uLCBUYWJzLCB1c2VUaGVtZSwgUG9wb3ZlciwgTGluayB9IGZyb20gJ0BnZWlzdC11aS9yZWFjdCc7XG5pbXBvcnQgbWFrZVN0eWxlcyBmcm9tICcuL21ha2VTdHlsZXMnO1xuaW1wb3J0IFVEb21haW4gZnJvbSAnLi9VRG9tYWluJztcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh1aSkgPT4gKHtcbiAgaGVhZGVyOiB7XG4gICAgd2lkdGg6IHVpLmxheW91dC5wYWdlV2lkdGhXaXRoTWFyZ2luLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHVpLnBhbGV0dGUuYmFja2dyb3VuZCxcbiAgICBmb250U2l6ZTogMTYsXG4gICAgaGVpZ2h0OiA2MCxcbiAgICB6SW5kZXg6IDE1LFxuICB9LFxuICB1bnN0b3BwYWJsZTp7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXIgIWltcG9ydGFudCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQnLFxuICAgIGJhY2tncm91bmRDb2xvcjogdWkucGFsZXR0ZS5iYWNrZ3JvdW5kLFxuICB9LFxuICBoZWFkZXJDb250ZW50OiB7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgcGFkZGluZzogYDAgJHt1aS5sYXlvdXQucGFnZU1hcmdpbn1gLFxuICB9LFxuICBoZWFkZXJUaXRsZToge1xuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcGFkZGluZ0xlZnQ6IDEwXG4gIH0sXG4gIG5hdjoge1xuICAgIHBvc2l0aW9uOiAnc3RpY2t5JyxcbiAgICB0b3A6IDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiB1aS5wYWxldHRlLmJhY2tncm91bmQsXG4gICAgYm9yZGVyQm90dG9tOiBgc29saWQgMXB4ICR7dWkucGFsZXR0ZS5hY2NlbnRzXzJ9YCxcbiAgICB6SW5kZXg6IDE1XG4gIH0sXG4gIG5hdkZpeGVkOiB7XG4gICAgYm9yZGVyQm90dG9tOiB1aS50eXBlID09PSAnbGlnaHQnICYmICdub25lJyxcbiAgICBib3hTaGFkb3c6IHVpLnR5cGUgPT09ICdsaWdodCcgJiYgJ3JnYmEoMCwgMCwgMCwgMC4xKSAwIDAgMTVweCAwJyxcbiAgfSxcbiAgbmF2Q29udGVudDoge1xuICAgIHdpZHRoOiB1aS5sYXlvdXQucGFnZVdpZHRoV2l0aE1hcmdpbixcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgJyYgLnRhYnMgaGVhZGVyJzoge1xuICAgICAgcGFkZGluZzogYDAgJHt1aS5sYXlvdXQucGFnZU1hcmdpbn1gLFxuICAgICAgYm9yZGVyQm90dG9tOiAnbm9uZSAhaW1wb3J0YW50JyxcbiAgICAgIGZsZXhXcmFwOiAnbm93cmFwICFpbXBvcnRhbnQnLFxuICAgICAgb3ZlcmZsb3dZOiAnaGlkZGVuJyxcbiAgICAgIG92ZXJmbG93WDogJ2F1dG8nLFxuICAgICAgb3ZlcmZsb3c6ICctbW96LXNjcm9sbGJhcnMtbm9uZScsXG4gICAgICAnLW1zLW92ZXJmbG93LXN0eWxlJzogJ25vbmUnLFxuICAgICAgJyY6Oi13ZWJraXQtc2Nyb2xsYmFyJzoge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH1cbiAgICB9LFxuICAgICcmIC5jb250ZW50Jzoge1xuICAgICAgZGlzcGxheTogJ25vbmUgIWltcG9ydGFudCdcbiAgICB9LFxuICAgICcmIC50YWInOiB7XG4gICAgICBwYWRkaW5nOiAnMTJweCAhaW1wb3J0YW50JyxcbiAgICAgIG1hcmdpbjogJzAgIWltcG9ydGFudCcsXG4gICAgICBmb250U2l6ZTogJzE0cHggIWltcG9ydGFudCdcbiAgICB9XG4gIH0sXG4gIHNpZGViYXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlciAhaW1wb3J0YW50JyxcbiAgfSxcbiAgdGhlbWVJY29uOiB7XG4gICAgd2lkdGg6ICc0MHB4ICFpbXBvcnRhbnQnLFxuICAgIGhlaWdodDogJzQwcHggIWltcG9ydGFudCcsXG4gICAgZGlzcGxheTogJ2ZsZXggIWltcG9ydGFudCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXIgIWltcG9ydGFudCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlciAhaW1wb3J0YW50JyxcbiAgICBtYXJnaW5SaWdodDogNSxcbiAgICBwYWRkaW5nOiAnMCAhaW1wb3J0YW50JyxcbiAgfSxcbiAgcG9wb3Zlcjoge1xuICAgIG1hcmdpblJpZ2h0OiA1LFxuICAgIHBhZGRpbmdMZWZ0OicyMHB4ICFpbXBvcnRhbnQnLFxuICAgIHdpZHRoOiAnMTgwcHggIWltcG9ydGFudCdcbiAgfVxufSkpO1xuXG5jb25zdCBwb3BvdmVyQ29udGVudCA9ICgpID0+IChcbiAgPD5cbiAgICA8UG9wb3Zlci5JdGVtIHRpdGxlPlxuICAgICAgPHNwYW4+VXNlciBTZXR0aW5nczwvc3Bhbj5cbiAgICA8L1BvcG92ZXIuSXRlbT5cbiAgICA8UG9wb3Zlci5JdGVtPlxuICAgICAgPExpbmsgcHVyZT5UZWFtczwvTGluaz5cbiAgICA8L1BvcG92ZXIuSXRlbT5cbiAgICA8UG9wb3Zlci5JdGVtPlxuICAgICAgPExpbmsgcHVyZSBocmVmPScvcHJvZmlsZSc+R2l0SHViPC9MaW5rPlxuICAgIDwvUG9wb3Zlci5JdGVtPlxuICAgIDxQb3BvdmVyLkl0ZW0gbGluZSAvPlxuICAgIDxQb3BvdmVyLkl0ZW0+XG4gICAgICA8TGluayBwdXJlPkxvZ291dDwvTGluaz5cbiAgICA8L1BvcG92ZXIuSXRlbT5cbiAgPC8+XG4pO1xuXG5jb25zdCBNZW51ID0gKHsgY29ubmVjdFVzZXIsIHByb3ZpZGVyIH0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbZml4ZWQsIHNldEZpeGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKHJvdXRlci5wYXRobmFtZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2hvdWxkRml4ZWQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gNjA7XG4gICAgICBpZiAoZml4ZWQgIT09IHNob3VsZEZpeGVkKSBzZXRGaXhlZChzaG91bGRGaXhlZCk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcik7XG4gIH0sIFtmaXhlZF0pO1xuXG4gIGNvbnN0IGNoYW5nZVRhYiA9ICh2YWwpID0+IHtcblxuICAgIHJvdXRlci5wdXNoKHZhbCk7XG4gICAgc2V0VGFiKHZhbCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9IHN0eWxlPXt7IG1hcmdpblRvcDogJzEwcHgnIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJDb250ZW50fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICA8QXZhdGFyIGFsdD1cIllvdXIgQXZhdGFyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0gc3JjPVwiL2Fzc2V0cy9PcHNjaWVudGlhLnBuZ1wiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlclRpdGxlfT4gPFRleHQgaDM+UmVTY2kgV2FsbGV0ICAmbmJzcDs8L1RleHQ+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2lkZWJhcn0+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBhdXRvXG4gICAgICAgICAgICAgICAgdHlwZT0nYWJvcnQnXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y29ubmVjdFVzZXJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Byb3ZpZGVyID8gcHJvdmlkZXIuYWRkcmVzcyA6IFwiQ29ubmVjdFwiIH1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8ZGl2ID4gPFVEb21haW4gY2xhc3NOYW1lPXtjbGFzc2VzLnVuc3RvcHBhYmxlfSAvPiA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8UG9wb3ZlciBjb250ZW50PXtwb3BvdmVyQ29udGVudH0gcGxhY2VtZW50PVwiYm90dG9tRW5kXCIgcG9ydGFsQ2xhc3NOYW1lPXtjbGFzc2VzLnBvcG92ZXJ9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8QXZhdGFyIHNyYz1cIi9hc3NldHMvdWQucG5nXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+IFxuXG4gICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXMubmF2ICsgJyAnICsgKGZpeGVkID8gY2xhc3Nlcy5uYXZGaXhlZCA6ICcnKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdkNvbnRlbnR9PlxuICAgICAgICAgIDxUYWJzIGluaXRpYWxWYWx1ZT17dGFifSBvbkNoYW5nZT17ICh2YWwpID0+IHtjaGFuZ2VUYWIodmFsKX19PlxuICAgICAgICAgICAgPFRhYnMuSXRlbSBsYWJlbD1cIlVwbG9hZFwiIHZhbHVlPVwiL1wiIC8+XG4gICAgICAgICAgICA8VGFicy5JdGVtIGxhYmVsPVwiUHVibGljXCIgdmFsdWU9XCIvcHVibGljXCIgLz5cbiAgICAgICAgICA8L1RhYnM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQGdlaXN0LXVpL3JlYWN0JztcbmltcG9ydCBtYWtlU3R5bGVzIGZyb20gJy4vbWFrZVN0eWxlcyc7XG5pbXBvcnQgRGF0YUNhcmQgZnJvbSAnLi9EYXRhQ2FyZCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHVpKSA9PiAoe1xuICByb290OiB7XG4gICAgYm9yZGVyQm90dG9tOiBgc29saWQgMXB4ICR7dWkucGFsZXR0ZS5hY2NlbnRzXzJ9YFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIHdpZHRoOiB1aS5sYXlvdXQucGFnZVdpZHRoV2l0aE1hcmdpbixcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIHBhZGRpbmc6IGBjYWxjKCR7dWkubGF5b3V0LmdhcH0gKiAyKSAke3VpLmxheW91dC5wYWdlTWFyZ2lufSBjYWxjKCR7dWkubGF5b3V0LmdhcH0gKiA0KWAsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgbWFyZ2luOiAnMCBhdXRvJ1xuICB9fSkpXG5cbmNvbnN0IFB1YmxpYyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhLm1vY2tEYXRhO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxHcmlkLkNvbnRhaW5lciBnYXA9ezJ9IGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAge2RhdGEubWFwKChlKSA9PiB7cmV0dXJuICg8R3JpZCB4cz17MjR9PjxEYXRhQ2FyZCBkYXRhPXtlfS8+PC9HcmlkPil9KX1cbiAgICAgICAgPC9HcmlkLkNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHVibGljO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBVQXV0aCBmcm9tIFwiQHVhdXRoL2pzXCJcbi8vaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXG5cblxuY29uc3QgdWF1dGggPSBuZXcgVUF1dGgoe1xuICAgIGNsaWVudElEOiBcImJiZThmMDhhLWRkNzctNGEwMS1iMDJjLTFiMzA4NDQ2NTBiOVwiLFxuICAgIHJlZGlyZWN0VXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxufSlcblxuZnVuY3Rpb24gVURvbWFpbigpIHtcbiAgICBjb25zdCBbVWF1dGgsIHNldFVhdXRoXSA9IHVzZVN0YXRlKClcblxuICAgIGFzeW5jIGZ1bmN0aW9uIENvbm5lY3QoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhdXRob3JpemF0aW9uID0gYXdhaXQgdWF1dGgubG9naW5XaXRoUG9wdXAoKVxuICAgICAgICAgICAgc2V0VWF1dGgoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhdXRob3JpemF0aW9uKSlbXCJpZFRva2VuXCJdKVxuXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgIGF3YWl0IGF1dGhlbnRpY2F0ZSgpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9nT3V0KCkge1xuICAgICAgICB1YXV0aC5sb2dvdXQoKVxuICAgICAgICBsb2dPdXQoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvZygpIHtcbiAgICAgICAgaWYgKFVhdXRoID09PSBudWxsIHx8IFVhdXRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIENvbm5lY3QoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9nT3V0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIlVEb21haW5cIiBvbkNsaWNrPXtsb2d9PntVYXV0aCAhPSBudWxsID8gVWF1dGhbXCJzdWJcIl0gOiBcIkxvZ2luIHdpdGggVU5TRFwifTwvYnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVEb21haW4iLCJpbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMgfSBmcm9tICdyZWFjdC1qc3MnO1xuaW1wb3J0IHsgR2Vpc3RVSVRoZW1lcywgdXNlVGhlbWUgfSBmcm9tICdAZ2Vpc3QtdWkvcmVhY3QnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSAoc3R5bGVzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzdHlsZXMgPSBzdHlsZXModGhlbWUpO1xuICB9XG4gIHJldHVybiBjcmVhdGVVc2VTdHlsZXMoc3R5bGVzKSgpO1xufTtcblxuY29uc3QgbWFrZVN0eWxlcyA9IChzdHlsZXMpID0+IHtcbiAgcmV0dXJuICgpID0+IHVzZVN0eWxlcyhzdHlsZXMpO1xufTtcbmV4cG9ydCBkZWZhdWx0IG1ha2VTdHlsZXM7XG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBQdWJsaWMgZnJvbSAnLi4vY29tcG9uZW50cy9QdWJsaWMnO1xuaW1wb3J0IHsgSnNzUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1qc3MnO1xuXG5jb25zdCBQdWJsaWNQYWdlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgbW9ja0RhdGEgPSByZXF1aXJlKCcuLy4uL21vY2tEYXRhLmpzb24nKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8SnNzUHJvdmlkZXIgaWQ9e3sgbWluaWZ5OiB0cnVlIH19PlxuICAgICAgICAgICA8TGF5b3V0IHRvZ2dsZURhcmtNb2RlPXtwcm9wcy50b2dnbGVEYXJrTW9kZX0gY29ubmVjdFVzZXI9e3Byb3BzLmNvbm5lY3RVc2VyfSBwcm92aWRlcj17cHJvcHMucHJvdmlkZXJ9IHVzZXI9e3Byb3BzLnVzZXJ9PlxuICAgICAgICAgICAgICAgIDxQdWJsaWMgZGF0YT17e21vY2tEYXRhfX0vPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvSnNzUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdWJsaWNQYWdlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBnZWlzdC11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdWF1dGgvanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmVhdGhlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1qc3NcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==