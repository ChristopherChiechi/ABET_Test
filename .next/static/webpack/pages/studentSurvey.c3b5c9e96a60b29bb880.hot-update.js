webpackHotUpdate_N_E("pages/studentSurvey",{

/***/ "./components/survey-components/StudentInfoForm.js":
/*!*********************************************************!*\
  !*** ./components/survey-components/StudentInfoForm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _SurveyPageData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SurveyPageData */ \"./components/survey-components/SurveyPageData.js\");\n\n\n\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Documents - Armaan\\u2019s Mac mini/Projects/ABET-Spring21/FontNew/ABET_Course_Assessment_Tool/components/survey-components/StudentInfoForm.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar StudentInfoForm = function StudentInfoForm(_ref) {\n  _s();\n\n  var studentInformation = _ref.studentInformation,\n      setStudentInformation = _ref.setStudentInformation;\n  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_SurveyPageData__WEBPACK_IMPORTED_MODULE_3__[\"PageContext\"]);\n  var majors = context.majors;\n\n  var handleChange = function handleChange(e, type) {\n    var temp = studentInformation;\n    temp[type] = e.target.value;\n    setStudentInformation(temp);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"HStack\"], {\n      w: \"80%\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n        children: \"What is your major?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Select\"], {\n        placeholder: \"major\",\n        value: studentInformation,\n        onChange: function onChange(e) {\n          return handleChange(e, \"major\");\n        },\n        children: majors.map(function (major, idx) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n            value: major,\n            children: major\n          }, idx, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 29\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(StudentInfoForm, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\n\n_c = StudentInfoForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StudentInfoForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"StudentInfoForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdXJ2ZXktY29tcG9uZW50cy9TdHVkZW50SW5mb0Zvcm0uanM/YjYxOCJdLCJuYW1lcyI6WyJTdHVkZW50SW5mb0Zvcm0iLCJzdHVkZW50SW5mb3JtYXRpb24iLCJzZXRTdHVkZW50SW5mb3JtYXRpb24iLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIlBhZ2VDb250ZXh0IiwibWFqb3JzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInR5cGUiLCJ0ZW1wIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJtYWpvciIsImlkeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBZ0JBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBbUQ7QUFBQTs7QUFBQSxNQUFoREMsa0JBQWdELFFBQWhEQSxrQkFBZ0Q7QUFBQSxNQUE1QkMscUJBQTRCLFFBQTVCQSxxQkFBNEI7QUFDdkUsTUFBTUMsT0FBTyxHQUFHQyx3REFBVSxDQUFDQywyREFBRCxDQUExQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0gsT0FBTyxDQUFDRyxNQUF2Qjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQUlDLElBQUosRUFBYTtBQUM5QixRQUFJQyxJQUFJLEdBQUdULGtCQUFYO0FBQ0FTLFFBQUksQ0FBQ0QsSUFBRCxDQUFKLEdBQWFELENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUF0QjtBQUNBVix5QkFBcUIsQ0FBQ1EsSUFBRCxDQUFyQjtBQUNILEdBSkQ7O0FBTUEsc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQyx1REFBRDtBQUFRLE9BQUMsRUFBQyxLQUFWO0FBQUEsOEJBQ0kscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJLHFFQUFDLHVEQUFEO0FBQ0ksbUJBQVcsRUFBQyxPQURoQjtBQUVJLGFBQUssRUFBRVQsa0JBRlg7QUFHSSxnQkFBUSxFQUFFLGtCQUFDTyxDQUFEO0FBQUEsaUJBQ05ELFlBQVksQ0FBQ0MsQ0FBRCxFQUFJLE9BQUosQ0FETjtBQUFBLFNBSGQ7QUFBQSxrQkFPS0YsTUFBTSxDQUFDTyxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQ3hCLDhCQUNJO0FBQVEsaUJBQUssRUFBRUQsS0FBZjtBQUFBLHNCQUNLQTtBQURMLGFBQTJCQyxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKO0FBS0gsU0FOQTtBQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQW1ESCxDQTdERDs7R0FBTWYsZTs7S0FBQUEsZTtBQStEU0EsOEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1cnZleS1jb21wb25lbnRzL1N0dWRlbnRJbmZvRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbSxcbiAgICBTZWxlY3QsXG4gICAgVGV4dCxcbiAgICBWU3RhY2ssXG4gICAgSFN0YWNrLFxuICAgIFJhZGlvR3JvdXAsXG4gICAgUmFkaW8sXG4gICAgQ29udGFpbmVyLFxuICAgIENlbnRlcixcbiAgICBUZXh0YXJlYSxcbiAgICBEaXZpZGVyLFxuICAgIEJ1dHRvbixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuaW1wb3J0IHtQYWdlQ29udGV4dCwgcGFnZURhdGF9IGZyb20gJy4vU3VydmV5UGFnZURhdGEnO1xuXG5jb25zdCBTdHVkZW50SW5mb0Zvcm0gPSAoIHtzdHVkZW50SW5mb3JtYXRpb24sIHNldFN0dWRlbnRJbmZvcm1hdGlvbn0gKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoUGFnZUNvbnRleHQpO1xuICAgIGNvbnN0IG1ham9ycyA9IGNvbnRleHQubWFqb3JzO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIHR5cGUpID0+IHtcbiAgICAgICAgdmFyIHRlbXAgPSBzdHVkZW50SW5mb3JtYXRpb247XG4gICAgICAgIHRlbXBbdHlwZV0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgc2V0U3R1ZGVudEluZm9ybWF0aW9uKHRlbXApO1xuICAgIH0gXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhTdGFjayB3PVwiODAlXCI+XG4gICAgICAgICAgICAgICAgPFRleHQ+V2hhdCBpcyB5b3VyIG1ham9yPzwvVGV4dD5cbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibWFqb3JcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3R1ZGVudEluZm9ybWF0aW9ufVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UoZSwgXCJtYWpvclwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bWFqb3JzLm1hcCgobWFqb3IsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXttYWpvcn0ga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWFqb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDwvSFN0YWNrPlxuXG4gICAgICAgICAgICB7LyogPEhTdGFjayB3PVwiODAlXCI+XG4gICAgICAgICAgICAgICAgPFRleHQ+V2hhdCBpcyB5b3VyIGNsYXNzaWZpY2F0aW9uPzwvVGV4dD5cbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY2xhc3NpZmNhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHVkZW50SW5mb3JtYXRpb25ZZWFyLnllYXJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3R1ZGVudEluZm9ybWF0aW9uWWVhcih7IHllYXI6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3llYXJzLm1hcCgoeWVhciwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2lkeH0+e3llYXJ9IDwvb3B0aW9uPjtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8L0hTdGFjaz5cblxuICAgICAgICAgICAgPEhTdGFjayB3PVwiODAlXCIgbWI9XCIyZW1cIj5cbiAgICAgICAgICAgICAgICA8VGV4dD5XaGF0IGdyYWRlIGRvIHlvdSBleHBlY3Q/PC9UZXh0PlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJncmFkZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHVkZW50SW5mb3JtYXRpb25HcmFkZXMuZ3JhZGVzfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdHVkZW50SW5mb3JtYXRpb25HcmFkZXMoeyBncmFkZXM6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtncmFkZXMubWFwKCh5ZWFyLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aWR4fT57eWVhcn0gPC9vcHRpb24+O1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDwvSFN0YWNrPiAqL31cbiAgICAgICAgPC8+XG4gICAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0dWRlbnRJbmZvRm9ybTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/survey-components/StudentInfoForm.js\n");

/***/ })

})