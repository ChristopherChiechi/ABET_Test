webpackHotUpdate_N_E("pages/studentSurvey",{

/***/ "./components/survey-components/TAsurvey.js":
/*!**************************************************!*\
  !*** ./components/survey-components/TAsurvey.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Documents - Armaan\\u2019s Mac mini/Projects/ABET-Spring21/FontNew/ABET_Course_Assessment_Tool/components/survey-components/TAsurvey.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar TAsurvey = function TAsurvey(_ref) {\n  _s();\n\n  var TAquestions = _ref.TAquestions,\n      handleChange = _ref.handleChange;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(TAquestions.map(function (question) {\n    return question.rating;\n  })),\n      viewState = _useState[0],\n      setViewState = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log('tas updated');\n  }, [TAquestions]);\n  var renderRadios = Array.from(Array(5), function (x, index) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Radio\"], {\n      value: index + 1,\n      children: index + 1\n    }, index, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 16\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      fontWeight: \"bold\",\n      children: \"TA evaluation. Have each rated 1-5, with 5 being very satisfied and 1 being very unsatisfied\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n      m: \"2em\",\n      padding: \"2em\",\n      bg: \"#edf2f7\",\n      w: \"80%\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"List\"], {\n        padding: \"1em\",\n        w: \"90%\",\n        bg: \"white\",\n        borderRadius: \"8px\",\n        children: TAquestions.map(function (question, idx) {\n          console.log(question);\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], {\n            mb: \"1em\",\n            children: [idx > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 47\n            }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"VStack\"], {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                mt: \"1em\",\n                children: question.question\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"RadioGroup\"], {\n                value: question.rating,\n                onChange: function onChange(e) {\n                  return handleChange(e, idx, \"TA\");\n                },\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"HStack\"], {\n                  spacing: 10,\n                  children: renderRadios\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 54,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 37\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 33\n            }, _this)]\n          }, idx, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 29\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(TAsurvey, \"yjkeU60qG79vc+srk9lnihBmORg=\");\n\n_c = TAsurvey;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TAsurvey);\n\nvar _c;\n\n$RefreshReg$(_c, \"TAsurvey\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdXJ2ZXktY29tcG9uZW50cy9UQXN1cnZleS5qcz85OTg5Il0sIm5hbWVzIjpbIlRBc3VydmV5IiwiVEFxdWVzdGlvbnMiLCJoYW5kbGVDaGFuZ2UiLCJ1c2VTdGF0ZSIsIm1hcCIsInF1ZXN0aW9uIiwicmF0aW5nIiwidmlld1N0YXRlIiwic2V0Vmlld1N0YXRlIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInJlbmRlclJhZGlvcyIsIkFycmF5IiwiZnJvbSIsIngiLCJpbmRleCIsImlkeCIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQWFBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQW1DO0FBQUE7O0FBQUEsTUFBaENDLFdBQWdDLFFBQWhDQSxXQUFnQztBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQUEsa0JBQ2RDLHNEQUFRLENBQUNGLFdBQVcsQ0FBQ0csR0FBWixDQUFnQixVQUFDQyxRQUFELEVBQWM7QUFDckUsV0FBT0EsUUFBUSxDQUFDQyxNQUFoQjtBQUNILEdBRjBDLENBQUQsQ0FETTtBQUFBLE1BQ3pDQyxTQUR5QztBQUFBLE1BQzlCQyxZQUQ4Qjs7QUFLaERDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0gsR0FGUSxFQUVOLENBQUNWLFdBQUQsQ0FGTSxDQUFUO0FBSUEsTUFBTVcsWUFBWSxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV0QsS0FBSyxDQUFDLENBQUQsQ0FBaEIsRUFBcUIsVUFBQ0UsQ0FBRCxFQUFJQyxLQUFKLEVBQWM7QUFDcEQsd0JBQU8scUVBQUMsc0RBQUQ7QUFBbUIsV0FBSyxFQUFFQSxLQUFLLEdBQUcsQ0FBbEM7QUFBQSxnQkFBc0NBLEtBQUssR0FBRztBQUE5QyxPQUFZQSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNILEdBRm9CLENBQXJCO0FBSUEsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxxREFBRDtBQUFNLGdCQUFVLEVBQUMsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUtJLHFFQUFDLHVEQUFEO0FBQ0ksT0FBQyxFQUFDLEtBRE47QUFFSSxhQUFPLEVBQUMsS0FGWjtBQUdJLFFBQUUsRUFBQyxTQUhQO0FBSUksT0FBQyxFQUFDLEtBSk47QUFBQSw2QkFNSSxxRUFBQyxxREFBRDtBQUFNLGVBQU8sRUFBQyxLQUFkO0FBQW9CLFNBQUMsRUFBQyxLQUF0QjtBQUE0QixVQUFFLEVBQUMsT0FBL0I7QUFBdUMsb0JBQVksRUFBQyxLQUFwRDtBQUFBLGtCQUNLZixXQUFXLENBQUNHLEdBQVosQ0FBZ0IsVUFBQ0MsUUFBRCxFQUFXWSxHQUFYLEVBQW1CO0FBQ2hDUCxpQkFBTyxDQUFDQyxHQUFSLENBQVlOLFFBQVo7QUFDQSw4QkFDSSxxRUFBQyx5REFBRDtBQUFVLGNBQUUsRUFBQyxLQUFiO0FBQUEsdUJBQ09ZLEdBQUcsR0FBRyxDQUFQLGdCQUFZLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVosR0FBMEIsSUFEaEMsZUFFSSxxRUFBQyx1REFBRDtBQUFBLHNDQUNJLHFFQUFDLHFEQUFEO0FBQU0sa0JBQUUsRUFBQyxLQUFUO0FBQUEsMEJBQWdCWixRQUFRLENBQUNBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSSxxRUFBQywyREFBRDtBQUNJLHFCQUFLLEVBQUVBLFFBQVEsQ0FBQ0MsTUFEcEI7QUFFSSx3QkFBUSxFQUFFLGtCQUFDWSxDQUFEO0FBQUEseUJBQ05oQixZQUFZLENBQUNnQixDQUFELEVBQUlELEdBQUosRUFBUyxJQUFULENBRE47QUFBQSxpQkFGZDtBQUFBLHVDQU1JLHFFQUFDLHVEQUFEO0FBQVEseUJBQU8sRUFBRSxFQUFqQjtBQUFBLDRCQUNLTDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBLGFBQXdCSyxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKO0FBa0JILFNBcEJBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSjtBQUFBLGtCQURKO0FBd0NILENBckREOztHQUFNakIsUTs7S0FBQUEsUTtBQXVEU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1cnZleS1jb21wb25lbnRzL1RBc3VydmV5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbSxcbiAgICBUZXh0LFxuICAgIFZTdGFjayxcbiAgICBIU3RhY2ssXG4gICAgUmFkaW9Hcm91cCxcbiAgICBSYWRpbyxcbiAgICBDZW50ZXIsXG4gICAgRGl2aWRlcixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuXG5jb25zdCBUQXN1cnZleSA9ICh7IFRBcXVlc3Rpb25zLCBoYW5kbGVDaGFuZ2UgfSkgPT4ge1xuICAgIGNvbnN0IFt2aWV3U3RhdGUsIHNldFZpZXdTdGF0ZV0gPSB1c2VTdGF0ZShUQXF1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBxdWVzdGlvbi5yYXRpbmc7XG4gICAgfSkpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RhcyB1cGRhdGVkJyk7XG4gICAgfSwgW1RBcXVlc3Rpb25zXSk7XG5cbiAgICBjb25zdCByZW5kZXJSYWRpb3MgPSBBcnJheS5mcm9tKEFycmF5KDUpLCAoeCwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxSYWRpbyBrZXk9e2luZGV4fSB2YWx1ZT17aW5kZXggKyAxfT57aW5kZXggKyAxfTwvUmFkaW8+XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICBUQSBldmFsdWF0aW9uLiBIYXZlIGVhY2ggcmF0ZWQgMS01LCB3aXRoIDUgYmVpbmcgdmVyeSBzYXRpc2ZpZWQgYW5kIDFcbiAgICAgICAgICAgICAgICBiZWluZyB2ZXJ5IHVuc2F0aXNmaWVkXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8Q2VudGVyXG4gICAgICAgICAgICAgICAgbT1cIjJlbVwiXG4gICAgICAgICAgICAgICAgcGFkZGluZz1cIjJlbVwiXG4gICAgICAgICAgICAgICAgYmc9XCIjZWRmMmY3XCJcbiAgICAgICAgICAgICAgICB3PVwiODAlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TGlzdCBwYWRkaW5nPVwiMWVtXCIgdz1cIjkwJVwiIGJnPVwid2hpdGVcIiBib3JkZXJSYWRpdXM9XCI4cHhcIj5cbiAgICAgICAgICAgICAgICAgICAge1RBcXVlc3Rpb25zLm1hcCgocXVlc3Rpb24sIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocXVlc3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gbWI9XCIxZW1cIiBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgKGlkeCA+IDApID8gPERpdmlkZXIgLz4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VlN0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgbXQ9XCIxZW1cIj57cXVlc3Rpb24ucXVlc3Rpb259PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cXVlc3Rpb24ucmF0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKGUsIGlkeCwgXCJUQVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SFN0YWNrIHNwYWNpbmc9ezEwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlclJhZGlvc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgIDwvQ2VudGVyPlxuXG4gICAgICAgIDwvPlxuICAgICk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVEFzdXJ2ZXk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/survey-components/TAsurvey.js\n");

/***/ })

})