"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//guidance one\n// this is one page static!!!\n//because page not change.\nconst Home = ()=>{\n    const { 0: count , 1: setcount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // here i am flag data\n    const { data  } = swr__WEBPACK_IMPORTED_MODULE_2___default()('https://jsonplaceholder.typicode.com/users');\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setInterval(()=>{\n            setcount((old)=>old + 1\n            );\n        }, 10000);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Hi there!! \",\n                    count,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Allnext\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: [\n                    \" \",\n                    JSON.stringify(data),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Allnext\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMyQztBQUNuQjtBQUN4QixFQUFjO0FBQ2QsRUFBNkI7QUFDN0IsRUFBMEI7QUFHMUIsS0FBSyxDQUFDRyxJQUFJLE9BQVUsQ0FBQztJQUNqQixLQUFLLE1BQUVDLEtBQUssTUFBQ0MsUUFBUSxNQUFJSiwrQ0FBUSxDQUFDLENBQUM7SUFDbkMsRUFBc0I7SUFDdEIsS0FBSyxDQUFDLENBQUNLLENBQUFBLElBQUksR0FBQyxHQUFHSiwwQ0FBTSxDQUFDLENBQTRDO0lBRWxFRixnREFBUyxLQUFNLENBQUM7UUFDWk8sV0FBVyxLQUFPLENBQUM7WUFDZkYsUUFBUSxFQUFDRyxHQUFHLEdBQUlBLEdBQUcsR0FBRSxDQUFDOztRQUMxQixDQUFDLEVBQUUsS0FBSztJQUNaLENBQUM7SUFFQSxNQUFNLDZFQUFDOzt3RkFFSEMsQ0FBRTs7b0JBQUMsQ0FBVztvQkFBQ0wsS0FBSztvQkFBQyxDQUFDOzs7Ozs7O3dGQUN0Qk0sQ0FBRzs7b0JBQUMsQ0FBQztvQkFBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNOLElBQUk7b0JBQUUsQ0FBQzs7Ozs7Ozs7O0FBR3JDLENBQUM7QUFFRCxpRUFBZUgsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2FsbG5leHQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCJcclxuLy9ndWlkYW5jZSBvbmVcclxuLy8gdGhpcyBpcyBvbmUgcGFnZSBzdGF0aWMhISFcclxuLy9iZWNhdXNlIHBhZ2Ugbm90IGNoYW5nZS5cclxuXHJcblxyXG5jb25zdCBIb21lID0gICgpID0+IHtcclxuICAgIGNvbnN0IFtjb3VudCxzZXRjb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgLy8gaGVyZSBpIGFtIGZsYWcgZGF0YVxyXG4gICAgY29uc3Qge2RhdGF9ID0gdXNlU1dSKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldGNvdW50KG9sZCA9PiBvbGQgKzEpXHJcbiAgICAgICAgfSwgMTAwMDApO1xyXG4gICAgfSlcclxuXHJcbiAgICAgcmV0dXJuKCBcclxuICAgICAgICA8PiBcclxuICAgICAgICA8aDE+SGkgdGhlcmUhISB7Y291bnR9IDwvaDE+IFxyXG4gICAgICAgIDxwcmU+IHtKU09OLnN0cmluZ2lmeShkYXRhKX0gPC9wcmU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU1dSIiwiSG9tZSIsImNvdW50Iiwic2V0Y291bnQiLCJkYXRhIiwic2V0SW50ZXJ2YWwiLCJvbGQiLCJoMSIsInByZSIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("swr");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();