"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context/EthereumProvider.tsx":
/*!******************************************!*\
  !*** ./src/context/EthereumProvider.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EthereumProvider\": function() { return /* binding */ EthereumProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _EthereumContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EthereumContext */ \"./src/context/EthereumContext.tsx\");\n/* harmony import */ var _truffle_build_contracts_FirstContract_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../truffle/build/contracts/FirstContract.json */ \"../truffle/build/contracts/FirstContract.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction EthereumProvider(param) {\n    let { children  } = param;\n    _s();\n    const [accounts, setAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        loadWeb3();\n        async function loadWeb3() {\n            if (window.ethereum) {\n                const web3 = new (web3__WEBPACK_IMPORTED_MODULE_2___default())((web3__WEBPACK_IMPORTED_MODULE_2___default().givenProvider));\n                setAccounts(await web3.eth.getAccounts());\n                const FirstContract = new web3.eth.Contract(_truffle_build_contracts_FirstContract_json__WEBPACK_IMPORTED_MODULE_4__.abi, \"0x67729c0D89f71A568c005b094FE00aD3255f7372\");\n            } else {\n                window.alert(\"Download some wallet like Metamask.\");\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EthereumContext__WEBPACK_IMPORTED_MODULE_3__.EthereumContext.Provider, {\n        value: {\n            accounts\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\src\\\\context\\\\EthereumProvider.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, this);\n}\n_s(EthereumProvider, \"TL/PgufbBoZH06REvdjQGg1ROXU=\");\n_c = EthereumProvider;\nvar _c;\n$RefreshReg$(_c, \"EthereumProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9FdGhlcmV1bVByb3ZpZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUQ7QUFDL0I7QUFDNEI7QUFDcUI7QUFXbEUsU0FBU0ssaUJBQWlCLEtBQW1CLEVBQUU7UUFBckIsRUFBRUMsU0FBUSxFQUFTLEdBQW5COztJQUU3QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQVcsRUFBRTtJQUNyRCxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBO0lBRXhDRCxnREFBU0EsQ0FBQyxJQUFNO1FBRVpXO1FBRUEsZUFBZUEsV0FBVztZQUN0QixJQUFJQyxPQUFPQyxRQUFRLEVBQUU7Z0JBQ2pCLE1BQU1DLE9BQU8sSUFBSVosNkNBQUlBLENBQUNBLDJEQUFrQjtnQkFDeENNLFlBQVksTUFBTU0sS0FBS0UsR0FBRyxDQUFDQyxXQUFXO2dCQUV0QyxNQUFNQyxnQkFBZ0IsSUFBSUosS0FBS0UsR0FBRyxDQUFDRyxRQUFRLENBQUNmLDRFQUFHQSxFQUFTO1lBRTVELE9BQU87Z0JBQ0hRLE9BQU9RLEtBQUssQ0FBQztZQUNqQixDQUFDO1FBQ0w7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ2pCLHNFQUF3QjtRQUFDbUIsT0FBTztZQUFFZjtRQUFTO2tCQUN2Q0Q7Ozs7OztBQUliLENBQUM7R0E1QmVEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L0V0aGVyZXVtUHJvdmlkZXIudHN4PzA2NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcbmltcG9ydCB7IEV0aGVyZXVtQ29udGV4dCB9IGZyb20gXCIuL0V0aGVyZXVtQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBhYmkgfSBmcm9tICcuLi8uLi8uLi90cnVmZmxlL2J1aWxkL2NvbnRyYWN0cy9GaXJzdENvbnRyYWN0Lmpzb24nXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZVxyXG59XHJcblxyXG5kZWNsYXJlIGxldCB3aW5kb3c6IHtcclxuICAgIGV0aGVyZXVtOiBhbnksXHJcbiAgICBhbGVydDogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXRoZXJldW1Qcm92aWRlcih7IGNoaWxkcmVuIH06IFByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgW2FjY291bnRzLCBzZXRBY2NvdW50c10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG4gICAgY29uc3QgW2NvbnRyYWN0LCBzZXRDb250cmFjdF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGxvYWRXZWIzKCk7XHJcblxyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRXZWIzKCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyKTtcclxuICAgICAgICAgICAgICAgIHNldEFjY291bnRzKGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCkpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgRmlyc3RDb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChhYmkgYXMgYW55LCAnMHg2NzcyOWMwRDg5ZjcxQTU2OGMwMDViMDk0RkUwMGFEMzI1NWY3MzcyJyk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiRG93bmxvYWQgc29tZSB3YWxsZXQgbGlrZSBNZXRhbWFzay5cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEV0aGVyZXVtQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBhY2NvdW50cyB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvRXRoZXJldW1Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG5cclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIldlYjMiLCJFdGhlcmV1bUNvbnRleHQiLCJhYmkiLCJFdGhlcmV1bVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhY2NvdW50cyIsInNldEFjY291bnRzIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsImxvYWRXZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJ3ZWIzIiwiZ2l2ZW5Qcm92aWRlciIsImV0aCIsImdldEFjY291bnRzIiwiRmlyc3RDb250cmFjdCIsIkNvbnRyYWN0IiwiYWxlcnQiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/EthereumProvider.tsx\n"));

/***/ })

});