webpackHotUpdate_N_E("pages/studentSurvey",{

/***/ "./components/survey-components/SurveyPageData.js":
/*!********************************************************!*\
  !*** ./components/survey-components/SurveyPageData.js ***!
  \********************************************************/
/*! exports provided: pageData, PageContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageData\", function() { return pageData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PageContext\", function() { return PageContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fake_data_questions_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../fake-data/questions.json */ \"./fake-data/questions.json\");\nvar _fake_data_questions_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../fake-data/questions.json */ \"./fake-data/questions.json\", 1);\n/* harmony import */ var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fake-data/course.json */ \"./fake-data/course.json\");\nvar _fake_data_course_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../fake-data/course.json */ \"./fake-data/course.json\", 1);\n\n\n\nvar course = _fake_data_course_json__WEBPACK_IMPORTED_MODULE_2__.courses[0]; // course['course-outcomes'] = course['course-outcomes'].map((outcome) => {\n//     return {\n//         outcome: outcome,\n//         rating: 0\n//     }\n// });\n\nvar pageData = {\n  majors: [\"Computer Science\", \"Software Engineering\", \"Computer Engineering\", \"Information Technology\", \"Cyber Secuirity\"],\n  years: [\"Freshman\", \"Sophomore\", \"Junior\", \"Senior\"],\n  grades: [\"A\", \"B\", \"C\", \"D\", \"F\"],\n  course: course,\n  questions: _fake_data_questions_json__WEBPACK_IMPORTED_MODULE_1__.TAquestions.map(function (question) {\n    return {\n      question: question,\n      rating: 0\n    };\n  })\n};\nvar PageContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(pageData);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdXJ2ZXktY29tcG9uZW50cy9TdXJ2ZXlQYWdlRGF0YS5qcz8xOGM4Il0sIm5hbWVzIjpbImNvdXJzZSIsImNvdXJzZURhdGEiLCJjb3Vyc2VzIiwicGFnZURhdGEiLCJtYWpvcnMiLCJ5ZWFycyIsImdyYWRlcyIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uRGF0YSIsIlRBcXVlc3Rpb25zIiwibWFwIiwicXVlc3Rpb24iLCJyYXRpbmciLCJQYWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBLElBQUlBLE1BQU0sR0FBR0MsbURBQVUsQ0FBQ0MsT0FBWCxDQUFtQixDQUFuQixDQUFiLEMsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMsUUFBUSxHQUFHO0FBQ3BCQyxRQUFNLEVBQUUsQ0FDSixrQkFESSxFQUVKLHNCQUZJLEVBR0osc0JBSEksRUFJSix3QkFKSSxFQUtKLGlCQUxJLENBRFk7QUFRcEJDLE9BQUssRUFBRSxDQUFDLFVBQUQsRUFBYSxXQUFiLEVBQTBCLFFBQTFCLEVBQW9DLFFBQXBDLENBUmE7QUFTcEJDLFFBQU0sRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixDQVRZO0FBVXBCTixRQUFNLEVBQUVBLE1BVlk7QUFXcEJPLFdBQVMsRUFBRUMsc0RBQVksQ0FBQ0MsV0FBYixDQUF5QkMsR0FBekIsQ0FBNkIsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xELFdBQU87QUFDSEEsY0FBUSxFQUFFQSxRQURQO0FBRUhDLFlBQU0sRUFBRTtBQUZMLEtBQVA7QUFJSCxHQUxVO0FBWFMsQ0FBakI7QUFtQkEsSUFBTUMsV0FBVyxnQkFBR0MsMkRBQWEsQ0FBQ1gsUUFBRCxDQUFqQyIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3VydmV5LWNvbXBvbmVudHMvU3VydmV5UGFnZURhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgcXVlc3Rpb25EYXRhIGZyb20gXCIuLi8uLi9mYWtlLWRhdGEvcXVlc3Rpb25zLmpzb25cIjtcbmltcG9ydCBjb3Vyc2VEYXRhIGZyb20gXCIuLi8uLi9mYWtlLWRhdGEvY291cnNlLmpzb25cIjtcblxudmFyIGNvdXJzZSA9IGNvdXJzZURhdGEuY291cnNlc1swXTtcbi8vIGNvdXJzZVsnY291cnNlLW91dGNvbWVzJ10gPSBjb3Vyc2VbJ2NvdXJzZS1vdXRjb21lcyddLm1hcCgob3V0Y29tZSkgPT4ge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIG91dGNvbWU6IG91dGNvbWUsXG4vLyAgICAgICAgIHJhdGluZzogMFxuLy8gICAgIH1cbi8vIH0pO1xuZXhwb3J0IGNvbnN0IHBhZ2VEYXRhID0ge1xuICAgIG1ham9yczogW1xuICAgICAgICBcIkNvbXB1dGVyIFNjaWVuY2VcIixcbiAgICAgICAgXCJTb2Z0d2FyZSBFbmdpbmVlcmluZ1wiLFxuICAgICAgICBcIkNvbXB1dGVyIEVuZ2luZWVyaW5nXCIsXG4gICAgICAgIFwiSW5mb3JtYXRpb24gVGVjaG5vbG9neVwiLFxuICAgICAgICBcIkN5YmVyIFNlY3Vpcml0eVwiLFxuICAgIF0sXG4gICAgeWVhcnM6IFtcIkZyZXNobWFuXCIsIFwiU29waG9tb3JlXCIsIFwiSnVuaW9yXCIsIFwiU2VuaW9yXCJdLFxuICAgIGdyYWRlczogW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkZcIl0sXG4gICAgY291cnNlOiBjb3Vyc2UsXG4gICAgcXVlc3Rpb25zOiBxdWVzdGlvbkRhdGEuVEFxdWVzdGlvbnMubWFwKChxdWVzdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcXVlc3Rpb246IHF1ZXN0aW9uLFxuICAgICAgICAgICAgcmF0aW5nOiAwXG4gICAgICAgIH1cbiAgICB9KVxufTtcblxuZXhwb3J0IGNvbnN0IFBhZ2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dChwYWdlRGF0YSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/survey-components/SurveyPageData.js\n");

/***/ })

})