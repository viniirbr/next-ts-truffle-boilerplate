"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_context_EthereumContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/context/EthereumContext */ \"./src/context/EthereumContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const { accounts , contract  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_src_context_EthereumContext__WEBPACK_IMPORTED_MODULE_3__.EthereumContext);\n    const [xValueDisplay, setXValueDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [xValueInput, setXValueInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function getXValueFromContract() {\n        setXValueDisplay(await (contract === null || contract === void 0 ? void 0 : contract.methods.x().call()));\n    }\n    async function setXValueFromContract() {\n        await (contract === null || contract === void 0 ? void 0 : contract.methods.setX(xValueInput).send({\n            from: accounts[0]\n        }));\n        setXValueDisplay(await (contract === null || contract === void 0 ? void 0 : contract.methods.x().call()));\n        setXValueInput(\"0\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: accounts[0]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: getXValueFromContract,\n                        children: \"Interact with contract\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: xValueDisplay\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                onChange: (e)=>setXValueInput(e.target.value),\n                                value: xValueInput\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: setXValueFromContract,\n                                children: \"Set\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"8IxVBcHP01n8NaszSLNXl6Ibfgc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEI7QUFDZ0I7QUFDb0I7QUFFakQsU0FBU0ksT0FBTzs7SUFFN0IsTUFBTSxFQUFFQyxTQUFRLEVBQUVDLFNBQVEsRUFBRSxHQUFHTCxpREFBVUEsQ0FBQ0UseUVBQWVBO0lBQ3pELE1BQU0sQ0FBQ0ksZUFBZUMsaUJBQWlCLEdBQUdOLCtDQUFRQSxDQUFTO0lBQzNELE1BQU0sQ0FBQ08sYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBUztJQUV2RCxlQUFlUyx3QkFBd0I7UUFDckNILGlCQUFpQixNQUFNRixDQUFBQSxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVNLE9BQU8sQ0FBQ0MsQ0FBQyxHQUFHQyxJQUFJLEVBQUU7SUFDckQ7SUFFQSxlQUFlQyx3QkFBd0I7UUFDckMsTUFBTVQsQ0FBQUEscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVTSxPQUFPLENBQUNJLElBQUksQ0FBQ1AsYUFBYVEsSUFBSSxDQUFDO1lBQUVDLE1BQU1iLFFBQVEsQ0FBQyxFQUFFO1FBQUMsRUFBRTtRQUNyRUcsaUJBQWlCLE1BQU1GLENBQUFBLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVU0sT0FBTyxDQUFDQyxDQUFDLEdBQUdDLElBQUksRUFBRTtRQUNuREosZUFBZTtJQUNqQjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ1Ysa0RBQUlBOztrQ0FDSCw4REFBQ21CO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDOztrQ0FDQyw4REFBQ0M7a0NBQUl0QixRQUFRLENBQUMsRUFBRTs7Ozs7O2tDQUNoQiw4REFBQ3VCO3dCQUFPQyxTQUFTbEI7a0NBQXVCOzs7Ozs7a0NBQ3hDLDhEQUFDbUI7a0NBQUl2Qjs7Ozs7O2tDQUNMLDhEQUFDd0I7OzBDQUNDLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBU0MsVUFBVSxDQUFDQyxJQUFNekIsZUFBZXlCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztnQ0FBR0EsT0FBTzVCOzs7Ozs7MENBQzdFLDhEQUFDbUI7Z0NBQU9DLFNBQVNkOzBDQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEQsQ0FBQztHQW5DdUJYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBFdGhlcmV1bUNvbnRleHQgfSBmcm9tICcuLi9zcmMvY29udGV4dC9FdGhlcmV1bUNvbnRleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgeyBhY2NvdW50cywgY29udHJhY3QgfSA9IHVzZUNvbnRleHQoRXRoZXJldW1Db250ZXh0KTtcbiAgY29uc3QgW3hWYWx1ZURpc3BsYXksIHNldFhWYWx1ZURpc3BsYXldID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW3hWYWx1ZUlucHV0LCBzZXRYVmFsdWVJbnB1dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRYVmFsdWVGcm9tQ29udHJhY3QoKSB7XG4gICAgc2V0WFZhbHVlRGlzcGxheShhd2FpdCBjb250cmFjdD8ubWV0aG9kcy54KCkuY2FsbCgpKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc2V0WFZhbHVlRnJvbUNvbnRyYWN0KCkge1xuICAgIGF3YWl0IGNvbnRyYWN0Py5tZXRob2RzLnNldFgoeFZhbHVlSW5wdXQpLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KVxuICAgIHNldFhWYWx1ZURpc3BsYXkoYXdhaXQgY29udHJhY3Q/Lm1ldGhvZHMueCgpLmNhbGwoKSlcbiAgICBzZXRYVmFsdWVJbnB1dCgnMCcpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDE+e2FjY291bnRzWzBdfTwvaDE+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0WFZhbHVlRnJvbUNvbnRyYWN0fT5JbnRlcmFjdCB3aXRoIGNvbnRyYWN0PC9idXR0b24+XG4gICAgICAgIDxoMz57eFZhbHVlRGlzcGxheX08L2gzPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRYVmFsdWVJbnB1dChlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXt4VmFsdWVJbnB1dH0vPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2V0WFZhbHVlRnJvbUNvbnRyYWN0fT5TZXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiRXRoZXJldW1Db250ZXh0IiwiSG9tZSIsImFjY291bnRzIiwiY29udHJhY3QiLCJ4VmFsdWVEaXNwbGF5Iiwic2V0WFZhbHVlRGlzcGxheSIsInhWYWx1ZUlucHV0Iiwic2V0WFZhbHVlSW5wdXQiLCJnZXRYVmFsdWVGcm9tQ29udHJhY3QiLCJtZXRob2RzIiwieCIsImNhbGwiLCJzZXRYVmFsdWVGcm9tQ29udHJhY3QiLCJzZXRYIiwic2VuZCIsImZyb20iLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwiYnV0dG9uIiwib25DbGljayIsImgzIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});