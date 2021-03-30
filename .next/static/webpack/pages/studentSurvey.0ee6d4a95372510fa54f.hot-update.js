webpackHotUpdate_N_E("pages/studentSurvey",{

/***/ "./components/survey-components/SurveyPageData.js":
/*!********************************************************!*\
  !*** ./components/survey-components/SurveyPageData.js ***!
  \********************************************************/
/*! exports provided: pageData, PageContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageData\", function() { return pageData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PageContext\", function() { return PageContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fake_data_questions_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../fake-data/questions.json */ \"./fake-data/questions.json\");\nvar _fake_data_questions_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../fake-data/questions.json */ \"./fake-data/questions.json\", 1);\n/* harmony import */ var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fake-data/course.json */ \"./fake-data/course.json\");\nvar _fake_data_course_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../fake-data/course.json */ \"./fake-data/course.json\", 1);\n\n\n\nvar course = _fake_data_course_json__WEBPACK_IMPORTED_MODULE_2__.courses[0];\ncourse['course-outcomes'] = course['course-outcomes'].map(function (outcome) {\n  return {\n    outcome: outcome,\n    rating: 1\n  };\n});\nvar pageData = {\n  majors: [\"Computer Science\", \"Software Engineering\", \"Computer Engineering\", \"Information Technology\", \"Cyber Secuirity\"],\n  years: [\"Freshman\", \"Sophomore\", \"Junior\", \"Senior\"],\n  grades: [\"A\", \"B\", \"C\", \"D\", \"F\"],\n  course: course,\n  questions: _fake_data_questions_json__WEBPACK_IMPORTED_MODULE_1__.TAquestions.map(function (question) {\n    console.log(question);\n    return {\n      question: question,\n      rating: 1\n    };\n  })\n};\nvar PageContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(pageData);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdXJ2ZXktY29tcG9uZW50cy9TdXJ2ZXlQYWdlRGF0YS5qcz8xOGM4Il0sIm5hbWVzIjpbImNvdXJzZSIsImNvdXJzZURhdGEiLCJjb3Vyc2VzIiwibWFwIiwib3V0Y29tZSIsInJhdGluZyIsInBhZ2VEYXRhIiwibWFqb3JzIiwieWVhcnMiLCJncmFkZXMiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbkRhdGEiLCJUQXF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwiY29uc29sZSIsImxvZyIsIlBhZ2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUEsSUFBSUEsTUFBTSxHQUFHQyxtREFBVSxDQUFDQyxPQUFYLENBQW1CLENBQW5CLENBQWI7QUFDQUYsTUFBTSxDQUFDLGlCQUFELENBQU4sR0FBNEJBLE1BQU0sQ0FBQyxpQkFBRCxDQUFOLENBQTBCRyxHQUExQixDQUE4QixVQUFDQyxPQUFELEVBQWE7QUFDbkUsU0FBTztBQUNIQSxXQUFPLEVBQ1BBLE9BRkc7QUFFTUMsVUFBTSxFQUFFO0FBRmQsR0FBUDtBQUlILENBTDJCLENBQTVCO0FBTU8sSUFBTUMsUUFBUSxHQUFHO0FBQ3BCQyxRQUFNLEVBQUUsQ0FDSixrQkFESSxFQUVKLHNCQUZJLEVBR0osc0JBSEksRUFJSix3QkFKSSxFQUtKLGlCQUxJLENBRFk7QUFRcEJDLE9BQUssRUFBRSxDQUFDLFVBQUQsRUFBYSxXQUFiLEVBQTBCLFFBQTFCLEVBQW9DLFFBQXBDLENBUmE7QUFTcEJDLFFBQU0sRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixDQVRZO0FBVXBCVCxRQUFNLEVBQUVBLE1BVlk7QUFXcEJVLFdBQVMsRUFBRUMsc0RBQVksQ0FBQ0MsV0FBYixDQUF5QlQsR0FBekIsQ0FBNkIsVUFBQ1UsUUFBRCxFQUFjO0FBQ2xEQyxXQUFPLENBQUNDLEdBQVIsQ0FBYUYsUUFBYjtBQUNBLFdBQU87QUFDSEEsY0FBUSxFQUFSQSxRQURHO0FBRUhSLFlBQU0sRUFBRTtBQUZMLEtBQVA7QUFJSCxHQU5VO0FBWFMsQ0FBakI7QUFvQkEsSUFBTVcsV0FBVyxnQkFBR0MsMkRBQWEsQ0FBQ1gsUUFBRCxDQUFqQyIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3VydmV5LWNvbXBvbmVudHMvU3VydmV5UGFnZURhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgcXVlc3Rpb25EYXRhIGZyb20gXCIuLi8uLi9mYWtlLWRhdGEvcXVlc3Rpb25zLmpzb25cIjtcbmltcG9ydCBjb3Vyc2VEYXRhIGZyb20gXCIuLi8uLi9mYWtlLWRhdGEvY291cnNlLmpzb25cIjtcblxudmFyIGNvdXJzZSA9IGNvdXJzZURhdGEuY291cnNlc1swXTtcbmNvdXJzZVsnY291cnNlLW91dGNvbWVzJ10gPSBjb3Vyc2VbJ2NvdXJzZS1vdXRjb21lcyddLm1hcCgob3V0Y29tZSkgPT4ge1xuICAgIHJldHVybiB7IFxuICAgICAgICBvdXRjb21lOiBcbiAgICAgICAgb3V0Y29tZSwgcmF0aW5nOiAxIFxuICAgIH07XG59KTtcbmV4cG9ydCBjb25zdCBwYWdlRGF0YSA9IHtcbiAgICBtYWpvcnM6IFtcbiAgICAgICAgXCJDb21wdXRlciBTY2llbmNlXCIsXG4gICAgICAgIFwiU29mdHdhcmUgRW5naW5lZXJpbmdcIixcbiAgICAgICAgXCJDb21wdXRlciBFbmdpbmVlcmluZ1wiLFxuICAgICAgICBcIkluZm9ybWF0aW9uIFRlY2hub2xvZ3lcIixcbiAgICAgICAgXCJDeWJlciBTZWN1aXJpdHlcIixcbiAgICBdLFxuICAgIHllYXJzOiBbXCJGcmVzaG1hblwiLCBcIlNvcGhvbW9yZVwiLCBcIkp1bmlvclwiLCBcIlNlbmlvclwiXSxcbiAgICBncmFkZXM6IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJGXCJdLFxuICAgIGNvdXJzZTogY291cnNlLFxuICAgIHF1ZXN0aW9uczogcXVlc3Rpb25EYXRhLlRBcXVlc3Rpb25zLm1hcCgocXVlc3Rpb24pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coKHF1ZXN0aW9uKSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBxdWVzdGlvbixcbiAgICAgICAgICAgIHJhdGluZzogMVxuICAgICAgICB9XG4gICAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBQYWdlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQocGFnZURhdGEpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/survey-components/SurveyPageData.js\n");

/***/ })

})