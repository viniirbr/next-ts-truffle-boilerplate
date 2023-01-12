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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_context_EthereumContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/context/EthereumContext */ \"./src/context/EthereumContext.tsx\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/index.js\");\n/* harmony import */ var _src_components_Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Markdown */ \"./src/components/Markdown.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst firstContractTitle = \"\\n# First Contract\\n~~~solidity\\n~~~  \\n\";\nconst contractCode = \"\\n// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity ^0.8.17;\\n\\ncontract FirstContract {\\n    uint256 public x;\\n\\n    constructor() {\\n        x = 0;\\n    }\\n\\n    function setX(uint256 value) public {\\n        x = value;\\n    }\\n}\\n\";\nconst selectedAccountTitle = \"\\n  # Como obter a conta selecionada com *web3.js*\\n  ~~~js\\n  ~~~\\n\";\nconst gettingSelectedAccount = \"\\nconst web3 = new Web3(Web3.givenProvider);\\nawait web3.eth.getAccounts()\\n\";\nfunction Home() {\n    _s();\n    const { accounts , contract  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_src_context_EthereumContext__WEBPACK_IMPORTED_MODULE_3__.EthereumContext);\n    const [xValueDisplay, setXValueDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [xValueInput, setXValueInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"0\");\n    async function getXValueFromContract() {\n        setXValueDisplay(await (contract === null || contract === void 0 ? void 0 : contract.methods.x().call()));\n    }\n    async function setXValueFromContract() {\n        await (contract === null || contract === void 0 ? void 0 : contract.methods.setX(xValueInput).send({\n            from: accounts[0]\n        }));\n        setXValueDisplay(await (contract === null || contract === void 0 ? void 0 : contract.methods.x().call()));\n        setXValueInput(\"0\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"DApp Boilerplate\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"O smart contract\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Contrato para teste chamado \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        children: \"FirstContract\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 42\n                                    }, this),\n                                    \". Possui apenas uma vari\\xe1vel \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        children: \"public\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 22\n                                    }, this),\n                                    \" chamada \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"x\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 44\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            \". Por ser \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                children: \"public\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 66\n                            }, this),\n                            \", podemos recuperar o seu valor com o m\\xe9todo sem necessitar criar um \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                children: \"getter\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 70\n                            }, this),\n                            \".\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Markdown__WEBPACK_IMPORTED_MODULE_4__.Markdown, {\n                                    children: \"\\n# First Contract\\n~~~solidity\\n~~~  \\n\",\n                                    code: \"\\nconst web3 = new Web3(Web3.givenProvider);\\nawait web3.eth.getAccounts()\\n\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Obtendo a conta selecionada no MetaMask\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Conta selecionada: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: accounts\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    className: \"markdown\",\n                                    components: {\n                                        code () {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_6__.Prism, {\n                                                language: \"javascript\",\n                                                children: gettingSelectedAccount\n                                            }, void 0, false, void 0, void 0);\n                                        }\n                                    },\n                                    children: selectedAccountTitle\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: getXValueFromContract,\n                        children: \"Interact with contract\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: xValueDisplay\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                onChange: (e)=>setXValueInput(e.target.value),\n                                value: xValueInput\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: setXValueFromContract,\n                                children: \"Set\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"NZz7RAo0rhUU3nwZmKVBoxkPf6A=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRXRoZXJldW1Db250ZXh0IH0gZnJvbSAnLi4vc3JjL2NvbnRleHQvRXRoZXJldW1Db250ZXh0J1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nXG5pbXBvcnQgeyBQcmlzbSBhcyBTeW50YXhIaWdobGlnaHRlciB9IGZyb20gJ3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcic7XG5pbXBvcnQgeyBNYXJrZG93biB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL01hcmtkb3duJztcblxuY29uc3QgZmlyc3RDb250cmFjdFRpdGxlID0gYFxuIyBGaXJzdCBDb250cmFjdFxufn5+c29saWRpdHlcbn5+fiAgXG5gXG5cbmNvbnN0IGNvbnRyYWN0Q29kZSA9IGBcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBHUEwtMy4wXG5cbnByYWdtYSBzb2xpZGl0eSBeMC44LjE3O1xuXG5jb250cmFjdCBGaXJzdENvbnRyYWN0IHtcbiAgICB1aW50MjU2IHB1YmxpYyB4O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHggPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFgodWludDI1NiB2YWx1ZSkgcHVibGljIHtcbiAgICAgICAgeCA9IHZhbHVlO1xuICAgIH1cbn1cbmBcblxuY29uc3Qgc2VsZWN0ZWRBY2NvdW50VGl0bGUgPSBgXG4gICMgQ29tbyBvYnRlciBhIGNvbnRhIHNlbGVjaW9uYWRhIGNvbSAqd2ViMy5qcypcbiAgfn5+anNcbiAgfn5+XG5gXG5cbmNvbnN0IGdldHRpbmdTZWxlY3RlZEFjY291bnQgPSBgXG5jb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyKTtcbmF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKClcbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCB7IGFjY291bnRzLCBjb250cmFjdCB9ID0gdXNlQ29udGV4dChFdGhlcmV1bUNvbnRleHQpO1xuICBjb25zdCBbeFZhbHVlRGlzcGxheSwgc2V0WFZhbHVlRGlzcGxheV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbeFZhbHVlSW5wdXQsIHNldFhWYWx1ZUlucHV0XSA9IHVzZVN0YXRlPHN0cmluZz4oJzAnKTtcblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFhWYWx1ZUZyb21Db250cmFjdCgpIHtcbiAgICBzZXRYVmFsdWVEaXNwbGF5KGF3YWl0IGNvbnRyYWN0Py5tZXRob2RzLngoKS5jYWxsKCkpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzZXRYVmFsdWVGcm9tQ29udHJhY3QoKSB7XG4gICAgYXdhaXQgY29udHJhY3Q/Lm1ldGhvZHMuc2V0WCh4VmFsdWVJbnB1dCkuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pXG4gICAgc2V0WFZhbHVlRGlzcGxheShhd2FpdCBjb250cmFjdD8ubWV0aG9kcy54KCkuY2FsbCgpKVxuICAgIHNldFhWYWx1ZUlucHV0KCcwJyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkRBcHAgQm9pbGVycGxhdGU8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8aDE+TyBzbWFydCBjb250cmFjdDwvaDE+XG4gICAgICAgICAgPHA+Q29udHJhdG8gcGFyYSB0ZXN0ZSBjaGFtYWRvIDxpPkZpcnN0Q29udHJhY3Q8L2k+LiBQb3NzdWkgYXBlbmFzIHVtYVxuICAgICAgICAgICAgdmFyacOhdmVsIDxpPnB1YmxpYzwvaT4gY2hhbWFkYSA8Yj54PC9iPjwvcD4uIFBvciBzZXIgPGk+cHVibGljPC9pPiwgcG9kZW1vc1xuICAgICAgICAgIHJlY3VwZXJhciBvIHNldSB2YWxvciBjb20gbyBtw6l0b2RvIHNlbSBuZWNlc3NpdGFyIGNyaWFyIHVtIDxpPmdldHRlcjwvaT4uXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNYXJrZG93biBjaGlsZHJlbj17YFxuIyBGaXJzdCBDb250cmFjdFxufn5+c29saWRpdHlcbn5+fiAgXG5gfVxuICAgICAgICAgICAgICBjb2RlPXtgXG5jb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyKTtcbmF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKClcbmB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGgxPk9idGVuZG8gYSBjb250YSBzZWxlY2lvbmFkYSBubyBNZXRhTWFzazwvaDE+XG4gICAgICAgICAgPHA+Q29udGEgc2VsZWNpb25hZGE6IDxiPnthY2NvdW50c308L2I+PC9wPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8UmVhY3RNYXJrZG93biBjbGFzc05hbWU9J21hcmtkb3duJyBjb21wb25lbnRzPXt7XG4gICAgICAgICAgICAgIGNvZGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT0namF2YXNjcmlwdCc+XG4gICAgICAgICAgICAgICAgICAgIHtnZXR0aW5nU2VsZWN0ZWRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgPC9TeW50YXhIaWdobGlnaHRlcj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19ID5cbiAgICAgICAgICAgICAge3NlbGVjdGVkQWNjb3VudFRpdGxlfVxuICAgICAgICAgICAgPC9SZWFjdE1hcmtkb3duPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0WFZhbHVlRnJvbUNvbnRyYWN0fT5JbnRlcmFjdCB3aXRoIGNvbnRyYWN0PC9idXR0b24+XG4gICAgICAgIDxoMz57eFZhbHVlRGlzcGxheX08L2gzPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRYVmFsdWVJbnB1dChlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXt4VmFsdWVJbnB1dH0gLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NldFhWYWx1ZUZyb21Db250cmFjdH0+U2V0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkV0aGVyZXVtQ29udGV4dCIsIlJlYWN0TWFya2Rvd24iLCJQcmlzbSIsIlN5bnRheEhpZ2hsaWdodGVyIiwiTWFya2Rvd24iLCJmaXJzdENvbnRyYWN0VGl0bGUiLCJjb250cmFjdENvZGUiLCJzZWxlY3RlZEFjY291bnRUaXRsZSIsImdldHRpbmdTZWxlY3RlZEFjY291bnQiLCJIb21lIiwiYWNjb3VudHMiLCJjb250cmFjdCIsInhWYWx1ZURpc3BsYXkiLCJzZXRYVmFsdWVEaXNwbGF5IiwieFZhbHVlSW5wdXQiLCJzZXRYVmFsdWVJbnB1dCIsImdldFhWYWx1ZUZyb21Db250cmFjdCIsIm1ldGhvZHMiLCJ4IiwiY2FsbCIsInNldFhWYWx1ZUZyb21Db250cmFjdCIsInNldFgiLCJzZW5kIiwiZnJvbSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwic2VjdGlvbiIsImgxIiwicCIsImkiLCJiIiwiZGl2IiwiY2hpbGRyZW4iLCJjb2RlIiwiY2xhc3NOYW1lIiwiY29tcG9uZW50cyIsImxhbmd1YWdlIiwiYnV0dG9uIiwib25DbGljayIsImgzIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});