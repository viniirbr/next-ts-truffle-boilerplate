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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_context_EthereumContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/context/EthereumContext */ \"./src/context/EthereumContext.tsx\");\n/* harmony import */ var _src_components_Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Markdown */ \"./src/components/Markdown.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const { accounts , contract  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_src_context_EthereumContext__WEBPACK_IMPORTED_MODULE_3__.EthereumContext);\n    const [xValueDisplay, setXValueDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [xValueInput, setXValueInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"0\");\n    async function getXValueFromContract() {\n        setXValueDisplay(await (contract === null || contract === void 0 ? void 0 : contract.methods.x().call()));\n    }\n    async function setXValueFromContract() {\n        await (contract === null || contract === void 0 ? void 0 : contract.methods.setX(xValueInput).send({\n            from: accounts[0]\n        }));\n        setXValueDisplay(await (contract === null || contract === void 0 ? void 0 : contract.methods.x().call()));\n        setXValueInput(\"0\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"DApp Boilerplate\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"O smart contract\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Contrato para teste chamado \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        children: \"FirstContract\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 42\n                                    }, this),\n                                    \". Possui apenas uma vari\\xe1vel \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        children: \"public\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 22\n                                    }, this),\n                                    \" chamada \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"x\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 44\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this),\n                            \". Por ser \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                children: \"public\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 66\n                            }, this),\n                            \", podemos recuperar o seu valor com o m\\xe9todo sem necessitar criar um \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                children: \"getter\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 70\n                            }, this),\n                            \".\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Markdown__WEBPACK_IMPORTED_MODULE_4__.Markdown, {\n                                    children: \"\\n# First Contract\\n~~~solidity\\n~~~  \\n\",\n                                    code: \"\\n// SPDX-License-Identifier: GPL-3.0      \\npragma solidity ^0.8.17;\\n              \\ncontract FirstContract {\\n    uint256 public x;\\n              \\n    constructor() {\\n          x = 0;\\n    }\\n              \\n    function setX(uint256 value) public {\\n        x = value;\\n    }\\n}\\n\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Realizando o teste do contrato\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Antes de realizar o \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        children: \"deploy\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 34\n                                    }, this),\n                                    \" do contrato, \\xe9 fundamental realizar os testes. Nesse exemplo, verificamos ser o construtor atribui o valor 0 a x e se a fun\\xe7\\xe3o para atribuir um novo valor est\\xe1 funcionando corretamente\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Markdown__WEBPACK_IMPORTED_MODULE_4__.Markdown, {\n                                children: \"\\n  # index.spec.js\\n\\n  ~~~js\\n  ~~~\\n\",\n                                code: '\\nconst FirstContract = artifacts.require(\"FirstContract\"); //obt\\xe9m o contrato compilado\\n\\ncontract(\"FirstContract\", async (accounts) => { //similar ao describe com exce\\xe7\\xe3o de que \\n//fornece contas para manipular o contrato\\n    \\n    it(\"should get x value equals 0\", async () => {\\n        const firstContract = await FirstContract.deployed();\\n        const x = await firstContract.x.call();\\n        assert.equal(x, 0, \"x value is different from 0\");\\n    });\\n    \\n    it(\"should set x to some value\", async () => {\\n        const firstContract = await FirstContract.deployed();\\n        const value = 10;\\n        await firstContract.setX(value);\\n        const x = await firstContract.x.call();\\n        assert.equal(x, value, \"x value is different from the value\");     \\n    })\\n})\\n'\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Obtendo a conta selecionada no MetaMask\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Conta selecionada: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: accounts\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Markdown__WEBPACK_IMPORTED_MODULE_4__.Markdown, {\n                                    children: \"\\n  # Como obter a conta selecionada com *web3.js*\\n  ~~~js\\n  ~~~\\n\",\n                                    code: \"\\nif (window.ethereum) {\\n  const web3 = new Web3(Web3.givenProvider);\\n  await web3.eth.getAccounts()\\n}\\n\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Interagindo com o contrato\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: getXValueFromContract,\n                        children: \"Interact with contract\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: xValueDisplay\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                onChange: (e)=>setXValueInput(e.target.value),\n                                value: xValueInput\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: setXValueFromContract,\n                                children: \"Set\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vinic\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\luby\\\\next-ts-truffle-boilerplate\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"NZz7RAo0rhUU3nwZmKVBoxkPf6A=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTRCO0FBQ2dCO0FBQ29CO0FBQ1Y7QUFFdkMsU0FBU0ssT0FBTzs7SUFFN0IsTUFBTSxFQUFFQyxTQUFRLEVBQUVDLFNBQVEsRUFBRSxHQUFHTixpREFBVUEsQ0FBQ0UseUVBQWVBO0lBQ3pELE1BQU0sQ0FBQ0ssZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFTO0lBQzNELE1BQU0sQ0FBQ1EsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBUztJQUd2RCxlQUFlVSx3QkFBd0I7UUFDckNILGlCQUFpQixNQUFNRixDQUFBQSxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVNLE9BQU8sQ0FBQ0MsQ0FBQyxHQUFHQyxJQUFJLEVBQUU7SUFDckQ7SUFFQSxlQUFlQyx3QkFBd0I7UUFDckMsTUFBTVQsQ0FBQUEscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVTSxPQUFPLENBQUNJLElBQUksQ0FBQ1AsYUFBYVEsSUFBSSxDQUFDO1lBQUVDLE1BQU1iLFFBQVEsQ0FBQyxFQUFFO1FBQUMsRUFBRTtRQUNyRUcsaUJBQWlCLE1BQU1GLENBQUFBLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVU0sT0FBTyxDQUFDQyxDQUFDLEdBQUdDLElBQUksRUFBRTtRQUNuREosZUFBZTtJQUNqQjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ1gsa0RBQUlBOztrQ0FDSCw4REFBQ29CO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDOztrQ0FDQyw4REFBQ0M7OzBDQUNDLDhEQUFDQzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQzs7b0NBQUU7a0RBQTRCLDhEQUFDQztrREFBRTs7Ozs7O29DQUFpQjtrREFDeEMsOERBQUNBO2tEQUFFOzs7Ozs7b0NBQVU7a0RBQVMsOERBQUNDO2tEQUFFOzs7Ozs7Ozs7Ozs7NEJBQVM7MENBQVUsOERBQUNEOzBDQUFFOzs7Ozs7NEJBQVU7MENBQ1QsOERBQUNBOzBDQUFFOzs7Ozs7NEJBQVU7MENBQ3hFLDhEQUFDRTswQ0FDQyw0RUFBQzdCLDhEQUFRQTtvQ0FBQzhCLFVBQVc7b0NBS25CQyxNQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FrQmIsOERBQUNQOzs7OztrQ0FHRCw4REFBQ0E7OzBDQUNDLDhEQUFDQzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQzs7b0NBQUU7a0RBQW9CLDhEQUFDQztrREFBRTs7Ozs7O29DQUFVOzs7Ozs7OzBDQUdwQyw4REFBQzNCLDhEQUFRQTtnQ0FBQzhCLFVBQVc7Z0NBSzVCQyxNQUFPOzs7Ozs7Ozs7Ozs7a0NBc0JGLDhEQUFDUDs7MENBQ0MsOERBQUNDOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNDOztvQ0FBRTtrREFBbUIsOERBQUNFO2tEQUFHMUI7Ozs7Ozs7Ozs7OzswQ0FDMUIsOERBQUMyQjswQ0FDQyw0RUFBQzdCLDhEQUFRQTtvQ0FBQzhCLFVBQVc7b0NBSTlCQyxNQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FRRiw4REFBQ1A7a0NBQ0MsNEVBQUNDO3NDQUFHOzs7Ozs7Ozs7OztrQ0FFTiw4REFBQ087d0JBQU9DLFNBQVN6QjtrQ0FBdUI7Ozs7OztrQ0FDeEMsOERBQUMwQjtrQ0FBSTlCOzs7Ozs7a0NBQ0wsOERBQUN5Qjs7MENBQ0MsOERBQUNNO2dDQUFNQyxNQUFLO2dDQUFTQyxVQUFVLENBQUNDLElBQU0vQixlQUFlK0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO2dDQUFHQSxPQUFPbEM7Ozs7OzswQ0FDN0UsOERBQUMwQjtnQ0FBT0MsU0FBU3JCOzBDQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEQsQ0FBQztHQXRIdUJYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBFdGhlcmV1bUNvbnRleHQgfSBmcm9tICcuLi9zcmMvY29udGV4dC9FdGhlcmV1bUNvbnRleHQnXG5pbXBvcnQgeyBNYXJrZG93biB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL01hcmtkb3duJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCB7IGFjY291bnRzLCBjb250cmFjdCB9ID0gdXNlQ29udGV4dChFdGhlcmV1bUNvbnRleHQpO1xuICBjb25zdCBbeFZhbHVlRGlzcGxheSwgc2V0WFZhbHVlRGlzcGxheV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbeFZhbHVlSW5wdXQsIHNldFhWYWx1ZUlucHV0XSA9IHVzZVN0YXRlPHN0cmluZz4oJzAnKTtcblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFhWYWx1ZUZyb21Db250cmFjdCgpIHtcbiAgICBzZXRYVmFsdWVEaXNwbGF5KGF3YWl0IGNvbnRyYWN0Py5tZXRob2RzLngoKS5jYWxsKCkpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzZXRYVmFsdWVGcm9tQ29udHJhY3QoKSB7XG4gICAgYXdhaXQgY29udHJhY3Q/Lm1ldGhvZHMuc2V0WCh4VmFsdWVJbnB1dCkuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pXG4gICAgc2V0WFZhbHVlRGlzcGxheShhd2FpdCBjb250cmFjdD8ubWV0aG9kcy54KCkuY2FsbCgpKVxuICAgIHNldFhWYWx1ZUlucHV0KCcwJyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkRBcHAgQm9pbGVycGxhdGU8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8aDE+TyBzbWFydCBjb250cmFjdDwvaDE+XG4gICAgICAgICAgPHA+Q29udHJhdG8gcGFyYSB0ZXN0ZSBjaGFtYWRvIDxpPkZpcnN0Q29udHJhY3Q8L2k+LiBQb3NzdWkgYXBlbmFzIHVtYVxuICAgICAgICAgICAgdmFyacOhdmVsIDxpPnB1YmxpYzwvaT4gY2hhbWFkYSA8Yj54PC9iPjwvcD4uIFBvciBzZXIgPGk+cHVibGljPC9pPiwgcG9kZW1vc1xuICAgICAgICAgIHJlY3VwZXJhciBvIHNldSB2YWxvciBjb20gbyBtw6l0b2RvIHNlbSBuZWNlc3NpdGFyIGNyaWFyIHVtIDxpPmdldHRlcjwvaT4uXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNYXJrZG93biBjaGlsZHJlbj17YFxuIyBGaXJzdCBDb250cmFjdFxufn5+c29saWRpdHlcbn5+fiAgXG5gfVxuICAgICAgICAgICAgICBjb2RlPXtgXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogR1BMLTMuMCAgICAgIFxucHJhZ21hIHNvbGlkaXR5IF4wLjguMTc7XG4gICAgICAgICAgICAgIFxuY29udHJhY3QgRmlyc3RDb250cmFjdCB7XG4gICAgdWludDI1NiBwdWJsaWMgeDtcbiAgICAgICAgICAgICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgeCA9IDA7XG4gICAgfVxuICAgICAgICAgICAgICBcbiAgICBmdW5jdGlvbiBzZXRYKHVpbnQyNTYgdmFsdWUpIHB1YmxpYyB7XG4gICAgICAgIHggPSB2YWx1ZTtcbiAgICB9XG59XG5gfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIFxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxoMT5SZWFsaXphbmRvIG8gdGVzdGUgZG8gY29udHJhdG88L2gxPlxuICAgICAgICAgIDxwPkFudGVzIGRlIHJlYWxpemFyIG8gPGk+ZGVwbG95PC9pPiBkbyBjb250cmF0bywgw6kgZnVuZGFtZW50YWwgcmVhbGl6YXIgb3MgdGVzdGVzLiBOZXNzZSBleGVtcGxvLFxuICAgICAgICAgICAgdmVyaWZpY2Ftb3Mgc2VyIG8gY29uc3RydXRvciBhdHJpYnVpIG8gdmFsb3IgMCBhIHggZSBzZSBhIGZ1bsOnw6NvIHBhcmEgYXRyaWJ1aXIgdW0gbm92byB2YWxvciBlc3TDoVxuICAgICAgICAgICAgZnVuY2lvbmFuZG8gY29ycmV0YW1lbnRlPC9wPlxuICAgICAgICAgIDxNYXJrZG93biBjaGlsZHJlbj17YFxuICAjIGluZGV4LnNwZWMuanNcblxuICB+fn5qc1xuICB+fn5cbmB9IGNvZGU9e2BcbmNvbnN0IEZpcnN0Q29udHJhY3QgPSBhcnRpZmFjdHMucmVxdWlyZShcIkZpcnN0Q29udHJhY3RcIik7IC8vb2J0w6ltIG8gY29udHJhdG8gY29tcGlsYWRvXG5cbmNvbnRyYWN0KFwiRmlyc3RDb250cmFjdFwiLCBhc3luYyAoYWNjb3VudHMpID0+IHsgLy9zaW1pbGFyIGFvIGRlc2NyaWJlIGNvbSBleGNlw6fDo28gZGUgcXVlIFxuLy9mb3JuZWNlIGNvbnRhcyBwYXJhIG1hbmlwdWxhciBvIGNvbnRyYXRvXG4gICAgXG4gICAgaXQoXCJzaG91bGQgZ2V0IHggdmFsdWUgZXF1YWxzIDBcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBmaXJzdENvbnRyYWN0ID0gYXdhaXQgRmlyc3RDb250cmFjdC5kZXBsb3llZCgpO1xuICAgICAgICBjb25zdCB4ID0gYXdhaXQgZmlyc3RDb250cmFjdC54LmNhbGwoKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKHgsIDAsIFwieCB2YWx1ZSBpcyBkaWZmZXJlbnQgZnJvbSAwXCIpO1xuICAgIH0pO1xuICAgIFxuICAgIGl0KFwic2hvdWxkIHNldCB4IHRvIHNvbWUgdmFsdWVcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBmaXJzdENvbnRyYWN0ID0gYXdhaXQgRmlyc3RDb250cmFjdC5kZXBsb3llZCgpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IDEwO1xuICAgICAgICBhd2FpdCBmaXJzdENvbnRyYWN0LnNldFgodmFsdWUpO1xuICAgICAgICBjb25zdCB4ID0gYXdhaXQgZmlyc3RDb250cmFjdC54LmNhbGwoKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKHgsIHZhbHVlLCBcInggdmFsdWUgaXMgZGlmZmVyZW50IGZyb20gdGhlIHZhbHVlXCIpOyAgICAgXG4gICAgfSlcbn0pXG5gfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxoMT5PYnRlbmRvIGEgY29udGEgc2VsZWNpb25hZGEgbm8gTWV0YU1hc2s8L2gxPlxuICAgICAgICAgIDxwPkNvbnRhIHNlbGVjaW9uYWRhOiA8Yj57YWNjb3VudHN9PC9iPjwvcD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE1hcmtkb3duIGNoaWxkcmVuPXtgXG4gICMgQ29tbyBvYnRlciBhIGNvbnRhIHNlbGVjaW9uYWRhIGNvbSAqd2ViMy5qcypcbiAgfn5+anNcbiAgfn5+XG5gfSBjb2RlPXtgXG5pZiAod2luZG93LmV0aGVyZXVtKSB7XG4gIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIpO1xuICBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpXG59XG5gfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxoMT5JbnRlcmFnaW5kbyBjb20gbyBjb250cmF0bzwvaDE+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRYVmFsdWVGcm9tQ29udHJhY3R9PkludGVyYWN0IHdpdGggY29udHJhY3Q8L2J1dHRvbj5cbiAgICAgICAgPGgzPnt4VmFsdWVEaXNwbGF5fTwvaDM+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17KGUpID0+IHNldFhWYWx1ZUlucHV0KGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e3hWYWx1ZUlucHV0fSAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2V0WFZhbHVlRnJvbUNvbnRyYWN0fT5TZXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiRXRoZXJldW1Db250ZXh0IiwiTWFya2Rvd24iLCJIb21lIiwiYWNjb3VudHMiLCJjb250cmFjdCIsInhWYWx1ZURpc3BsYXkiLCJzZXRYVmFsdWVEaXNwbGF5IiwieFZhbHVlSW5wdXQiLCJzZXRYVmFsdWVJbnB1dCIsImdldFhWYWx1ZUZyb21Db250cmFjdCIsIm1ldGhvZHMiLCJ4IiwiY2FsbCIsInNldFhWYWx1ZUZyb21Db250cmFjdCIsInNldFgiLCJzZW5kIiwiZnJvbSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwic2VjdGlvbiIsImgxIiwicCIsImkiLCJiIiwiZGl2IiwiY2hpbGRyZW4iLCJjb2RlIiwiYnV0dG9uIiwib25DbGljayIsImgzIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});