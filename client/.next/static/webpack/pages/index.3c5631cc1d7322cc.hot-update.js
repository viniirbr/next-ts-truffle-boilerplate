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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_context_EthereumContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/context/EthereumContext */ \"./src/context/EthereumContext.tsx\");\n/* harmony import */ var _src_components_Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Markdown */ \"./src/components/Markdown.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const { accounts , contract  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_src_context_EthereumContext__WEBPACK_IMPORTED_MODULE_3__.EthereumContext);\n    const [xValueDisplay, setXValueDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [xValueInput, setXValueInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"0\");\n    async function getXValueFromContract() {\n        setXValueDisplay(await (contract === null || contract === void 0 ? void 0 : contract.methods.x().call()));\n    }\n    async function setXValueFromContract() {\n        await (contract === null || contract === void 0 ? void 0 : contract.methods.setX(xValueInput).send({\n            from: accounts[0]\n        }));\n        setXValueDisplay(await (contract === null || contract === void 0 ? void 0 : contract.methods.x().call()));\n        setXValueInput(\"0\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"DApp Boilerplate\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"O smart contract\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Contrato para teste chamado \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        children: \"FirstContract\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 42\n                                    }, this),\n                                    \". Possui apenas uma vari\\xe1vel \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        children: \"public\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 22\n                                    }, this),\n                                    \" chamada \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"x\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 44\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this),\n                            \". Por ser \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                children: \"public\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 66\n                            }, this),\n                            \", podemos recuperar o seu valor com o m\\xe9todo sem necessitar criar um \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                children: \"getter\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 70\n                            }, this),\n                            \".\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Markdown__WEBPACK_IMPORTED_MODULE_4__.Markdown, {\n                                    children: \"\\n# First Contract\\n~~~solidity\\n~~~  \\n\",\n                                    code: \"\\n// SPDX-License-Identifier: GPL-3.0      \\npragma solidity ^0.8.17;\\n              \\ncontract FirstContract {\\n    uint256 public x;\\n              \\n    constructor() {\\n          x = 0;\\n    }\\n              \\n    function setX(uint256 value) public {\\n        x = value;\\n    }\\n}\\n\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Realizando o teste do contrato\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Antes de realizar o \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        children: \"deploy\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 34\n                                    }, this),\n                                    \" do contrato, \\xe9 fundamental realizar os testes. Nesse exemplo, verificamos ser o construtor atribui o valor 0 a x e se a fun\\xe7\\xe3o para atribuir um novo valor est\\xe1 funcionando corretamente\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Markdown__WEBPACK_IMPORTED_MODULE_4__.Markdown, {\n                                children: \"\\n  # index.spec.js\\n\\n  ~~~js\\n  ~~~\\n\",\n                                code: '\\nconst FirstContract = artifacts.require(\"FirstContract\"); //obt\\xe9m o contrato compilado\\n\\ncontract(\"FirstContract\", async (accounts) => { \\n    \\n    it(\"should get x value equals 0\", async () => {\\n        const firstContract = await FirstContract.deployed();\\n        const x = await firstContract.x.call();\\n        assert.equal(x, 0, \"x value is different from 0\");\\n    });\\n    \\n    it(\"should set x to some value\", async () => {\\n        const firstContract = await FirstContract.deployed();\\n        const value = 10;\\n        await firstContract.setX(value);\\n        const x = await firstContract.x.call();\\n        assert.equal(x, value, \"x value is different from the value\");     \\n    })\\n})\\n'\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Obtendo a conta selecionada no MetaMask\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Conta selecionada: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: accounts\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Markdown__WEBPACK_IMPORTED_MODULE_4__.Markdown, {\n                                    children: \"\\n  # Como obter a conta selecionada com *web3.js*\\n  ~~~js\\n  ~~~\\n\",\n                                    code: \"\\nif (window.ethereum) {\\n  const web3 = new Web3(Web3.givenProvider);\\n  await web3.eth.getAccounts()\\n}\\n\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Interagindo com o contrato\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: getXValueFromContract,\n                        children: \"Interact with contract\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: xValueDisplay\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                onChange: (e)=>setXValueInput(e.target.value),\n                                value: xValueInput\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: setXValueFromContract,\n                                children: \"Set\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"NZz7RAo0rhUU3nwZmKVBoxkPf6A=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRXRoZXJldW1Db250ZXh0IH0gZnJvbSAnLi4vc3JjL2NvbnRleHQvRXRoZXJldW1Db250ZXh0J1xuaW1wb3J0IHsgTWFya2Rvd24gfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9NYXJrZG93bic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgeyBhY2NvdW50cywgY29udHJhY3QgfSA9IHVzZUNvbnRleHQoRXRoZXJldW1Db250ZXh0KTtcbiAgY29uc3QgW3hWYWx1ZURpc3BsYXksIHNldFhWYWx1ZURpc3BsYXldID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW3hWYWx1ZUlucHV0LCBzZXRYVmFsdWVJbnB1dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcwJyk7XG5cblxuICBhc3luYyBmdW5jdGlvbiBnZXRYVmFsdWVGcm9tQ29udHJhY3QoKSB7XG4gICAgc2V0WFZhbHVlRGlzcGxheShhd2FpdCBjb250cmFjdD8ubWV0aG9kcy54KCkuY2FsbCgpKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc2V0WFZhbHVlRnJvbUNvbnRyYWN0KCkge1xuICAgIGF3YWl0IGNvbnRyYWN0Py5tZXRob2RzLnNldFgoeFZhbHVlSW5wdXQpLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KVxuICAgIHNldFhWYWx1ZURpc3BsYXkoYXdhaXQgY29udHJhY3Q/Lm1ldGhvZHMueCgpLmNhbGwoKSlcbiAgICBzZXRYVmFsdWVJbnB1dCgnMCcpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5EQXBwIEJvaWxlcnBsYXRlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGgxPk8gc21hcnQgY29udHJhY3Q8L2gxPlxuICAgICAgICAgIDxwPkNvbnRyYXRvIHBhcmEgdGVzdGUgY2hhbWFkbyA8aT5GaXJzdENvbnRyYWN0PC9pPi4gUG9zc3VpIGFwZW5hcyB1bWFcbiAgICAgICAgICAgIHZhcmnDoXZlbCA8aT5wdWJsaWM8L2k+IGNoYW1hZGEgPGI+eDwvYj48L3A+LiBQb3Igc2VyIDxpPnB1YmxpYzwvaT4sIHBvZGVtb3NcbiAgICAgICAgICByZWN1cGVyYXIgbyBzZXUgdmFsb3IgY29tIG8gbcOpdG9kbyBzZW0gbmVjZXNzaXRhciBjcmlhciB1bSA8aT5nZXR0ZXI8L2k+LlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TWFya2Rvd24gY2hpbGRyZW49e2BcbiMgRmlyc3QgQ29udHJhY3Rcbn5+fnNvbGlkaXR5XG5+fn4gIFxuYH1cbiAgICAgICAgICAgICAgY29kZT17YFxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEdQTC0zLjAgICAgICBcbnByYWdtYSBzb2xpZGl0eSBeMC44LjE3O1xuICAgICAgICAgICAgICBcbmNvbnRyYWN0IEZpcnN0Q29udHJhY3Qge1xuICAgIHVpbnQyNTYgcHVibGljIHg7XG4gICAgICAgICAgICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgIHggPSAwO1xuICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgZnVuY3Rpb24gc2V0WCh1aW50MjU2IHZhbHVlKSBwdWJsaWMge1xuICAgICAgICB4ID0gdmFsdWU7XG4gICAgfVxufVxuYH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8aDE+UmVhbGl6YW5kbyBvIHRlc3RlIGRvIGNvbnRyYXRvPC9oMT5cbiAgICAgICAgICA8cD5BbnRlcyBkZSByZWFsaXphciBvIDxpPmRlcGxveTwvaT4gZG8gY29udHJhdG8sIMOpIGZ1bmRhbWVudGFsIHJlYWxpemFyIG9zIHRlc3Rlcy4gTmVzc2UgZXhlbXBsbyxcbiAgICAgICAgICAgIHZlcmlmaWNhbW9zIHNlciBvIGNvbnN0cnV0b3IgYXRyaWJ1aSBvIHZhbG9yIDAgYSB4IGUgc2UgYSBmdW7Dp8OjbyBwYXJhIGF0cmlidWlyIHVtIG5vdm8gdmFsb3IgZXN0w6FcbiAgICAgICAgICAgIGZ1bmNpb25hbmRvIGNvcnJldGFtZW50ZTwvcD5cbiAgICAgICAgICA8TWFya2Rvd24gY2hpbGRyZW49e2BcbiAgIyBpbmRleC5zcGVjLmpzXG5cbiAgfn5+anNcbiAgfn5+XG5gfSBjb2RlPXtgXG5jb25zdCBGaXJzdENvbnRyYWN0ID0gYXJ0aWZhY3RzLnJlcXVpcmUoXCJGaXJzdENvbnRyYWN0XCIpOyAvL29idMOpbSBvIGNvbnRyYXRvIGNvbXBpbGFkb1xuXG5jb250cmFjdChcIkZpcnN0Q29udHJhY3RcIiwgYXN5bmMgKGFjY291bnRzKSA9PiB7IFxuICAgIFxuICAgIGl0KFwic2hvdWxkIGdldCB4IHZhbHVlIGVxdWFscyAwXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZmlyc3RDb250cmFjdCA9IGF3YWl0IEZpcnN0Q29udHJhY3QuZGVwbG95ZWQoKTtcbiAgICAgICAgY29uc3QgeCA9IGF3YWl0IGZpcnN0Q29udHJhY3QueC5jYWxsKCk7XG4gICAgICAgIGFzc2VydC5lcXVhbCh4LCAwLCBcInggdmFsdWUgaXMgZGlmZmVyZW50IGZyb20gMFwiKTtcbiAgICB9KTtcbiAgICBcbiAgICBpdChcInNob3VsZCBzZXQgeCB0byBzb21lIHZhbHVlXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZmlyc3RDb250cmFjdCA9IGF3YWl0IEZpcnN0Q29udHJhY3QuZGVwbG95ZWQoKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAxMDtcbiAgICAgICAgYXdhaXQgZmlyc3RDb250cmFjdC5zZXRYKHZhbHVlKTtcbiAgICAgICAgY29uc3QgeCA9IGF3YWl0IGZpcnN0Q29udHJhY3QueC5jYWxsKCk7XG4gICAgICAgIGFzc2VydC5lcXVhbCh4LCB2YWx1ZSwgXCJ4IHZhbHVlIGlzIGRpZmZlcmVudCBmcm9tIHRoZSB2YWx1ZVwiKTsgICAgIFxuICAgIH0pXG59KVxuYH0gLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8aDE+T2J0ZW5kbyBhIGNvbnRhIHNlbGVjaW9uYWRhIG5vIE1ldGFNYXNrPC9oMT5cbiAgICAgICAgICA8cD5Db250YSBzZWxlY2lvbmFkYTogPGI+e2FjY291bnRzfTwvYj48L3A+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNYXJrZG93biBjaGlsZHJlbj17YFxuICAjIENvbW8gb2J0ZXIgYSBjb250YSBzZWxlY2lvbmFkYSBjb20gKndlYjMuanMqXG4gIH5+fmpzXG4gIH5+flxuYH0gY29kZT17YFxuaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyKTtcbiAgYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKVxufVxuYH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8aDE+SW50ZXJhZ2luZG8gY29tIG8gY29udHJhdG88L2gxPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0WFZhbHVlRnJvbUNvbnRyYWN0fT5JbnRlcmFjdCB3aXRoIGNvbnRyYWN0PC9idXR0b24+XG4gICAgICAgIDxoMz57eFZhbHVlRGlzcGxheX08L2gzPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRYVmFsdWVJbnB1dChlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXt4VmFsdWVJbnB1dH0gLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NldFhWYWx1ZUZyb21Db250cmFjdH0+U2V0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkV0aGVyZXVtQ29udGV4dCIsIk1hcmtkb3duIiwiSG9tZSIsImFjY291bnRzIiwiY29udHJhY3QiLCJ4VmFsdWVEaXNwbGF5Iiwic2V0WFZhbHVlRGlzcGxheSIsInhWYWx1ZUlucHV0Iiwic2V0WFZhbHVlSW5wdXQiLCJnZXRYVmFsdWVGcm9tQ29udHJhY3QiLCJtZXRob2RzIiwieCIsImNhbGwiLCJzZXRYVmFsdWVGcm9tQ29udHJhY3QiLCJzZXRYIiwic2VuZCIsImZyb20iLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsInNlY3Rpb24iLCJoMSIsInAiLCJpIiwiYiIsImRpdiIsImNoaWxkcmVuIiwiY29kZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMyIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});