webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @geist-ui/react */ "./node_modules/@geist-ui/react/esm/index.js");
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./makeStyles */ "./components/makeStyles.js");
/* harmony import */ var _UDomain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UDomain */ "./components/UDomain.js");
var _jsxFileName = "C:\\Users\\shabb\\Project\\Resci\\components\\Menu.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(_makeStyles__WEBPACK_IMPORTED_MODULE_3__["default"])(function (ui) {
  return {
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
      padding: "0 ".concat(ui.layout.pageMargin)
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
      borderBottom: "solid 1px ".concat(ui.palette.accents_2),
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
        padding: "0 ".concat(ui.layout.pageMargin),
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
  };
});

var popoverContent = function popoverContent() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"].Item, {
    title: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, "User Settings")), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    pure: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, "Teams")), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    pure: true,
    href: "/profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, "GitHub")), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"].Item, {
    line: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    pure: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, "Logout")));
};

var Menu = function Menu(_ref) {
  _s();

  var connectUser = _ref.connectUser,
      provider = _ref.provider;
  var classes = useStyles();
  var theme = Object(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      fixed = _useState[0],
      setFixed = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(router.pathname),
      tab = _useState2[0],
      setTab = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var scrollHandler = function scrollHandler() {
      var shouldFixed = document.documentElement.scrollTop > 60;
      if (fixed !== shouldFixed) setFixed(shouldFixed);
    };

    document.addEventListener('scroll', scrollHandler);
    return function () {
      return document.removeEventListener('scroll', scrollHandler);
    };
  }, [fixed]);

  var changeTab = function changeTab(val) {
    router.push(val);
    setTab(val);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: classes.header,
    style: {
      marginTop: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.headerContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      display: 'flex'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    alt: "Your Avatar",
    className: classes.avatar,
    src: "/assets/Opscientia.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: classes.headerTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }, " ", __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    h3: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 53
    }
  }, "ReSci Wallet  \xA0"))), __jsx("div", {
    className: classes.sidebar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    auto: true,
    type: "abort",
    onClick: connectUser,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, provider ? provider.address : "Connect"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, " ", __jsx(_UDomain__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.unstoppable,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 20
    }
  }), " "), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
    content: popoverContent,
    placement: "bottomEnd",
    portalClassName: classes.popover,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    src: "/assets/ud.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  })))))), __jsx("nav", {
    className: classes.nav + ' ' + (fixed ? classes.navFixed : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.navContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    initialValue: tab,
    onChange: function onChange(val) {
      changeTab(val);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Tabs"].Item, {
    label: "Upload",
    value: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["Tabs"].Item, {
    label: "Public",
    value: "/public",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  })))));
};

_s(Menu, "ch6WbEMrCV2gPrJq3N/TlwvEJSY=", false, function () {
  return [useStyles, _geist_ui_react__WEBPACK_IMPORTED_MODULE_2__["useTheme"], next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Menu;
/* harmony default export */ __webpack_exports__["default"] = (Menu);

var _c;

$RefreshReg$(_c, "Menu");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ1aSIsImhlYWRlciIsIndpZHRoIiwibGF5b3V0IiwicGFnZVdpZHRoV2l0aE1hcmdpbiIsIm1heFdpZHRoIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJmb250U2l6ZSIsImhlaWdodCIsInpJbmRleCIsInVuc3RvcHBhYmxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlYWRlckNvbnRlbnQiLCJwYWRkaW5nIiwicGFnZU1hcmdpbiIsImhlYWRlclRpdGxlIiwiZm9udFdlaWdodCIsInBhZGRpbmdMZWZ0IiwibmF2IiwicG9zaXRpb24iLCJ0b3AiLCJib3JkZXJCb3R0b20iLCJhY2NlbnRzXzIiLCJuYXZGaXhlZCIsInR5cGUiLCJib3hTaGFkb3ciLCJuYXZDb250ZW50IiwiZmxleFdyYXAiLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJvdmVyZmxvdyIsInNpZGViYXIiLCJ0aGVtZUljb24iLCJtYXJnaW5SaWdodCIsInBvcG92ZXIiLCJwb3BvdmVyQ29udGVudCIsIk1lbnUiLCJjb25uZWN0VXNlciIsInByb3ZpZGVyIiwiY2xhc3NlcyIsInRoZW1lIiwidXNlVGhlbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImZpeGVkIiwic2V0Rml4ZWQiLCJwYXRobmFtZSIsInRhYiIsInNldFRhYiIsInVzZUVmZmVjdCIsInNjcm9sbEhhbmRsZXIiLCJzaG91bGRGaXhlZCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGFuZ2VUYWIiLCJ2YWwiLCJwdXNoIiwibWFyZ2luVG9wIiwiYXZhdGFyIiwiYWRkcmVzcyJdLCJtYXBw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L3dlYnBhY2svcGFnZXMvaW5kZXguNGVlMWM3ODAxOGMwMTE5MGNlY2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgVGV4dCwgQXZhdGFyLCBCdXR0b24sIFRhYnMsIHVzZVRoZW1lLCBQb3BvdmVyLCBMaW5rIH0gZnJvbSAnQGdlaXN0LXVpL3JlYWN0JztcbmltcG9ydCBtYWtlU3R5bGVzIGZyb20gJy4vbWFrZVN0eWxlcyc7XG5pbXBvcnQgVURvbWFpbiBmcm9tICcuL1VEb21haW4nO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHVpKSA9PiAoe1xuICBoZWFkZXI6IHtcbiAgICB3aWR0aDogdWkubGF5b3V0LnBhZ2VXaWR0aFdpdGhNYXJnaW4sXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgIGJhY2tncm91bmRDb2xvcjogdWkucGFsZXR0ZS5iYWNrZ3JvdW5kLFxuICAgIGZvbnRTaXplOiAxNixcbiAgICBoZWlnaHQ6IDYwLFxuICAgIHpJbmRleDogMTUsXG4gIH0sXG4gIHVuc3RvcHBhYmxlOntcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlciAhaW1wb3J0YW50JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4gIWltcG9ydGFudCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB1aS5wYWxldHRlLmJhY2tncm91bmQsXG4gIH0sXG4gIGhlYWRlckNvbnRlbnQ6IHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBwYWRkaW5nOiBgMCAke3VpLmxheW91dC5wYWdlTWFyZ2lufWAsXG4gIH0sXG4gIGhlYWRlclRpdGxlOiB7XG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nTGVmdDogMTBcbiAgfSxcbiAgbmF2OiB7XG4gICAgcG9zaXRpb246ICdzdGlja3knLFxuICAgIHRvcDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHVpLnBhbGV0dGUuYmFja2dyb3VuZCxcbiAgICBib3JkZXJCb3R0b206IGBzb2xpZCAxcHggJHt1aS5wYWxldHRlLmFjY2VudHNfMn1gLFxuICAgIHpJbmRleDogMTVcbiAgfSxcbiAgbmF2Rml4ZWQ6IHtcbiAgICBib3JkZXJCb3R0b206IHVpLnR5cGUgPT09ICdsaWdodCcgJiYgJ25vbmUnLFxuICAgIGJveFNoYWRvdzogdWkudHlwZSA9PT0gJ2xpZ2h0JyAmJiAncmdiYSgwLCAwLCAwLCAwLjEpIDAgMCAxNXB4IDAnLFxuICB9LFxuICBuYXZDb250ZW50OiB7XG4gICAgd2lkdGg6IHVpLmxheW91dC5wYWdlV2lkdGhXaXRoTWFyZ2luLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAnJiAudGFicyBoZWFkZXInOiB7XG4gICAgICBwYWRkaW5nOiBgMCAke3VpLmxheW91dC5wYWdlTWFyZ2lufWAsXG4gICAgICBib3JkZXJCb3R0b206ICdub25lICFpbXBvcnRhbnQnLFxuICAgICAgZmxleFdyYXA6ICdub3dyYXAgIWltcG9ydGFudCcsXG4gICAgICBvdmVyZmxvd1k6ICdoaWRkZW4nLFxuICAgICAgb3ZlcmZsb3dYOiAnYXV0bycsXG4gICAgICBvdmVyZmxvdzogJy1tb3otc2Nyb2xsYmFycy1ub25lJyxcbiAgICAgICctbXMtb3ZlcmZsb3ctc3R5bGUnOiAnbm9uZScsXG4gICAgICAnJjo6LXdlYmtpdC1zY3JvbGxiYXInOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfVxuICAgIH0sXG4gICAgJyYgLmNvbnRlbnQnOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSAhaW1wb3J0YW50J1xuICAgIH0sXG4gICAgJyYgLnRhYic6IHtcbiAgICAgIHBhZGRpbmc6ICcxMnB4ICFpbXBvcnRhbnQnLFxuICAgICAgbWFyZ2luOiAnMCAhaW1wb3J0YW50JyxcbiAgICAgIGZvbnRTaXplOiAnMTRweCAhaW1wb3J0YW50J1xuICAgIH1cbiAgfSxcbiAgc2lkZWJhcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyICFpbXBvcnRhbnQnLFxuICB9LFxuICB0aGVtZUljb246IHtcbiAgICB3aWR0aDogJzQwcHggIWltcG9ydGFudCcsXG4gICAgaGVpZ2h0OiAnNDBweCAhaW1wb3J0YW50JyxcbiAgICBkaXNwbGF5OiAnZmxleCAhaW1wb3J0YW50JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlciAhaW1wb3J0YW50JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyICFpbXBvcnRhbnQnLFxuICAgIG1hcmdpblJpZ2h0OiA1LFxuICAgIHBhZGRpbmc6ICcwICFpbXBvcnRhbnQnLFxuICB9LFxuICBwb3BvdmVyOiB7XG4gICAgbWFyZ2luUmlnaHQ6IDUsXG4gICAgcGFkZGluZ0xlZnQ6JzIwcHggIWltcG9ydGFudCcsXG4gICAgd2lkdGg6ICcxODBweCAhaW1wb3J0YW50J1xuICB9XG59KSk7XG5cbmNvbnN0IHBvcG92ZXJDb250ZW50ID0gKCkgPT4gKFxuICA8PlxuICAgIDxQb3BvdmVyLkl0ZW0gdGl0bGU+XG4gICAgICA8c3Bhbj5Vc2VyIFNldHRpbmdzPC9zcGFuPlxuICAgIDwvUG9wb3Zlci5JdGVtPlxuICAgIDxQb3BvdmVyLkl0ZW0+XG4gICAgICA8TGluayBwdXJlPlRlYW1zPC9MaW5rPlxuICAgIDwvUG9wb3Zlci5JdGVtPlxuICAgIDxQb3BvdmVyLkl0ZW0+XG4gICAgICA8TGluayBwdXJlIGhyZWY9Jy9wcm9maWxlJz5HaXRIdWI8L0xpbms+XG4gICAgPC9Qb3BvdmVyLkl0ZW0+XG4gICAgPFBvcG92ZXIuSXRlbSBsaW5lIC8+XG4gICAgPFBvcG92ZXIuSXRlbT5cbiAgICAgIDxMaW5rIHB1cmU+TG9nb3V0PC9MaW5rPlxuICAgIDwvUG9wb3Zlci5JdGVtPlxuICA8Lz5cbik7XG5cbmNvbnN0IE1lbnUgPSAoeyBjb25uZWN0VXNlciwgcHJvdmlkZXIgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtmaXhlZCwgc2V0Rml4ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUocm91dGVyLnBhdGhuYW1lKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzaG91bGRGaXhlZCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiA2MDtcbiAgICAgIGlmIChmaXhlZCAhPT0gc2hvdWxkRml4ZWQpIHNldEZpeGVkKHNob3VsZEZpeGVkKTtcbiAgICB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcbiAgfSwgW2ZpeGVkXSk7XG5cbiAgY29uc3QgY2hhbmdlVGFiID0gKHZhbCkgPT4ge1xuXG4gICAgcm91dGVyLnB1c2godmFsKTtcbiAgICBzZXRUYWIodmFsKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0gc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlckNvbnRlbnR9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgIDxBdmF0YXIgYWx0PVwiWW91ciBBdmF0YXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfSBzcmM9XCIvYXNzZXRzL09wc2NpZW50aWEucG5nXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyVGl0bGV9PiA8VGV4dCBoMz5SZVNjaSBXYWxsZXQgICZuYnNwOzwvVGV4dD48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zaWRlYmFyfT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGF1dG9cbiAgICAgICAgICAgICAgICB0eXBlPSdhYm9ydCdcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb25uZWN0VXNlcn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cHJvdmlkZXIgPyBwcm92aWRlci5hZGRyZXNzIDogXCJDb25uZWN0XCIgfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgPiA8VURvbWFpbiBjbGFzc05hbWU9e2NsYXNzZXMudW5zdG9wcGFibGV9IC8+IDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxQb3BvdmVyIGNvbnRlbnQ9e3BvcG92ZXJDb250ZW50fSBwbGFjZW1lbnQ9XCJib3R0b21FbmRcIiBwb3J0YWxDbGFzc05hbWU9e2NsYXNzZXMucG9wb3Zlcn0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxBdmF0YXIgc3JjPVwiL2Fzc2V0cy91ZC5wbmdcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj4gXG5cbiAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXYgKyAnICcgKyAoZml4ZWQgPyBjbGFzc2VzLm5hdkZpeGVkIDogJycpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmF2Q29udGVudH0+XG4gICAgICAgICAgPFRhYnMgaW5pdGlhbFZhbHVlPXt0YWJ9IG9uQ2hhbmdlPXsgKHZhbCkgPT4ge2NoYW5nZVRhYih2YWwpfX0+XG4gICAgICAgICAgICA8VGFicy5JdGVtIGxhYmVsPVwiVXBsb2FkXCIgdmFsdWU9XCIvXCIgLz5cbiAgICAgICAgICAgIDxUYWJzLkl0ZW0gbGFiZWw9XCJQdWJsaWNcIiB2YWx1ZT1cIi9wdWJsaWNcIiAvPlxuICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7Il0sInNvdXJjZVJvb3QiOiIifQ==