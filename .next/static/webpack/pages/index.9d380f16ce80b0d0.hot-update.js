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

/***/ "./components/csv_download/csv_download.jsx":
/*!**************************************************!*\
  !*** ./components/csv_download/csv_download.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_liamtiernan_Dev_parcel_parse_parcel_parse_ui_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_liamtiernan_Dev_parcel_parse_parcel_parse_ui_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liamtiernan_Dev_parcel_parse_parcel_parse_ui_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Accordion */ \"./node_modules/react-bootstrap/esm/Accordion.js\");\n/* harmony import */ var react_bootstrap_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Stack */ \"./node_modules/react-bootstrap/esm/Stack.js\");\n/* harmony import */ var _csv_download_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./csv_download.module.scss */ \"./components/csv_download/csv_download.module.scss\");\n/* harmony import */ var _csv_download_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_csv_download_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _filters_filter_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filters/filter_group */ \"./components/filters/filter_group.jsx\");\n/* harmony import */ var _subset_select_subset_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subset_select/subset_select */ \"./components/subset_select/subset_select.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar defaultFilter = {\n    operator: null,\n    field: '',\n    logic: 'is',\n    value: ''\n};\nvar defaultEndpoint = 'http://localhost:5000';\nfunction _fetchCsv() {\n    _fetchCsv = _asyncToGenerator(_Users_liamtiernan_Dev_parcel_parse_parcel_parse_ui_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res, data;\n        return _Users_liamtiernan_Dev_parcel_parse_parcel_parse_ui_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(defaultEndpoint);\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    data = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        props: {\n                            data: data\n                        }\n                    });\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _fetchCsv.apply(this, arguments);\n}\nfunction fetchCsv() {\n    return _fetchCsv.apply(this, arguments);\n}\nfunction CsvDownload() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        defaultFilter\n    ]), filters = ref[0], setFilters = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), subset = ref1[0], setSubset = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), currentTarget = ref2[0], setCurrentTarget = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (currentTarget) {\n            var target = currentTarget.target, currentCursor = currentTarget.currentCursor;\n            if (target.id && target.id.includes('value-input-')) {\n                var ele = document.getElementById(target.id);\n                ele.focus();\n                ele.setSelectionRange(currentCursor, currentCursor);\n            }\n        }\n    });\n    var updateSubset = function(value) {\n        setSubset(value);\n        console.log(subset);\n    };\n    var handleSubmit = _asyncToGenerator(_Users_liamtiernan_Dev_parcel_parse_parcel_parse_ui_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var payload;\n        return _Users_liamtiernan_Dev_parcel_parse_parcel_parse_ui_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    payload = {\n                        subset: subset,\n                        filters: filters\n                    };\n                    _ctx.t0 = console;\n                    _ctx.next = 4;\n                    return fetchCsv();\n                case 4:\n                    _ctx.t1 = _ctx.sent;\n                    _ctx.t0.log.call(_ctx.t0, _ctx.t1);\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var addFilter = function() {\n        var newFilter = {\n            operator: null,\n            field: '',\n            logic: 'is',\n            value: ''\n        };\n        setFilters(filters.concat(newFilter));\n    };\n    var updateFilter = function(target, field, i) {\n        var newFilters = filters;\n        newFilters[i][field] = target.value;\n        setFilters(newFilters);\n        var currentCursor = target.selectionStart;\n        setCurrentTarget({\n            target: target,\n            currentCursor: currentCursor\n        });\n    };\n    var deleteFilter = function(i) {\n        var newFilters = filters;\n        newFilters.splice(i, 1);\n        setFilters(newFilters);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: (_csv_download_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n        __source: {\n            fileName: \"/Users/liamtiernan/Dev/parcel_parse/parcel-parse-ui/components/csv_download/csv_download.jsx\",\n            lineNumber: 86,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bootstrap_Stack__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            gap: 2,\n            className: \"col-md-5 mx-auto\",\n            __source: {\n                fileName: \"/Users/liamtiernan/Dev/parcel_parse/parcel-parse-ui/components/csv_download/csv_download.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                    className: (_csv_download_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header),\n                    __source: {\n                        fileName: \"/Users/liamtiernan/Dev/parcel_parse/parcel-parse-ui/components/csv_download/csv_download.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                            className: \"mx-auto\",\n                            __source: {\n                                fileName: \"/Users/liamtiernan/Dev/parcel_parse/parcel-parse-ui/components/csv_download/csv_download.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Download Spreadsheet\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                            className: \"mx-auto\",\n                            __source: {\n                                fileName: \"/Users/liamtiernan/Dev/parcel_parse/parcel-parse-ui/components/csv_download/csv_download.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Download a spreadsheet of property data\"\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bootstrap_Stack__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    gap: 3,\n                    className: \"mx-auto\",\n                    __source: {\n                        fileName: \"/Users/liamtiernan/Dev/parcel_parse/parcel-parse-ui/components/csv_download/csv_download.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_subset_select_subset_select__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            updateSubset: updateSubset,\n                            handleSubmit: handleSubmit,\n                            __source: {\n                                fileName: \"/Users/liamtiernan/Dev/parcel_parse/parcel-parse-ui/components/csv_download/csv_download.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: (_csv_download_module_scss__WEBPACK_IMPORTED_MODULE_5___default().accordion),\n                            __source: {\n                                fileName: \"/Users/liamtiernan/Dev/parcel_parse/parcel-parse-ui/components/csv_download/csv_download.jsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Item, {\n                                eventKey: \"0\",\n                                __source: {\n                                    fileName: \"/Users/liamtiernan/Dev/parcel_parse/parcel-parse-ui/components/csv_download/csv_download.jsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Header, {\n                                        __source: {\n                                            fileName: \"/Users/liamtiernan/Dev/parcel_parse/parcel-parse-ui/components/csv_download/csv_download.jsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 15\n                                        },\n                                        __self: this,\n                                        children: \"Filters\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Body, {\n                                        __source: {\n                                            fileName: \"/Users/liamtiernan/Dev/parcel_parse/parcel-parse-ui/components/csv_download/csv_download.jsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 15\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filters_filter_group__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            addFilter: addFilter,\n                                            updateFilter: updateFilter,\n                                            deleteFilter: deleteFilter,\n                                            filters: filters,\n                                            filterCount: filters.length,\n                                            __source: {\n                                                fileName: \"/Users/liamtiernan/Dev/parcel_parse/parcel-parse-ui/components/csv_download/csv_download.jsx\",\n                                                lineNumber: 101,\n                                                columnNumber: 17\n                                            },\n                                            __self: this\n                                        })\n                                    })\n                                ]\n                            })\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n}\n_s(CsvDownload, \"ChkLuwKid1k/YrcIecAz01CNqQY=\");\n_c = CsvDownload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CsvDownload);\nvar _c;\n$RefreshReg$(_c, \"CsvDownload\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nzdl9kb3dubG9hZC9jc3ZfZG93bmxvYWQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFFTTtBQUNSO0FBQ007QUFFRTtBQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpELEdBQUssQ0FBQ08sYUFBYSxHQUFHLENBQUM7SUFDckJDLFFBQVEsRUFBRSxJQUFJO0lBQ2RDLEtBQUssRUFBRSxDQUFFO0lBQ1RDLEtBQUssRUFBRSxDQUFJO0lBQ1hDLEtBQUssRUFBRSxDQUFFO0FBQ1gsQ0FBQztBQUVELEdBQUssQ0FBQ0MsZUFBZSxHQUFHLENBQXVCO1NBRWhDQyxTQUFRO0lBQVJBLFNBQVEsaUtBQXZCLFFBQVEsV0FBa0IsQ0FBQztZQUNuQkMsR0FBRyxFQUNIQyxJQUFJOzs7OzsyQkFEUUMsS0FBSyxDQUFDSixlQUFlOztvQkFBakNFLEdBQUc7OzJCQUNVQSxHQUFHLENBQUNHLElBQUk7O29CQUFyQkYsSUFBSTtpREFDSCxDQUFDO3dCQUNORyxLQUFLLEVBQUUsQ0FBQzs0QkFDTkgsSUFBSSxFQUFKQSxJQUFJO3dCQUNOLENBQUM7b0JBQ0gsQ0FBQzs7Ozs7O0lBQ0gsQ0FBQztXQVJjRixTQUFROztTQUFSQSxRQUFRO1dBQVJBLFNBQVE7O1NBVWRNLFdBQVcsR0FBRyxDQUFDOztJQUN0QixHQUFLLENBQXlCbEIsR0FBeUIsR0FBekJBLCtDQUFRLENBQUMsQ0FBQ007UUFBQUEsYUFBYTtJQUFBLENBQUMsR0FBL0NhLE9BQU8sR0FBZ0JuQixHQUF5QixLQUF2Q29CLFVBQVUsR0FBSXBCLEdBQXlCO0lBQ3ZELEdBQUssQ0FBdUJBLElBQVUsR0FBVkEsK0NBQVEsSUFBN0JxQixNQUFNLEdBQWVyQixJQUFVLEtBQXZCc0IsU0FBUyxHQUFJdEIsSUFBVTtJQUN0QyxHQUFLLENBQXFDQSxJQUFVLEdBQVZBLCtDQUFRLElBQTNDdUIsYUFBYSxHQUFzQnZCLElBQVUsS0FBOUJ3QixnQkFBZ0IsR0FB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QyxvRUFBWTs0QkFDWDZCLFlBQVksRUFBRUEsWUFBWTs0QkFDMUJHLFlBQVksRUFBRUEsWUFBWTs7Ozs7Ozs7NkZBRTNCcEMsaUVBQVM7NEJBQUNnRCxTQUFTLEVBQUU5Qyw0RUFBZ0I7Ozs7Ozs7NEdBQ25DRixzRUFBYztnQ0FBQ3dELFFBQVEsRUFBQyxDQUFHOzs7Ozs7Ozt5R0FDekJ4RCx3RUFBZ0I7Ozs7Ozs7a0RBQUMsQ0FBTzs7eUdBQ3hCQSxzRUFBYzs7Ozs7Ozt1SEFDWkcsNkRBQVc7NENBQ1ZtQyxTQUFTLEVBQUVBLFNBQVM7NENBQ3BCRyxZQUFZLEVBQUVBLFlBQVk7NENBQzFCSSxZQUFZLEVBQUVBLFlBQVk7NENBQzFCM0IsT0FBTyxFQUFFQSxPQUFPOzRDQUNoQnlDLFdBQVcsRUFBRXpDLE9BQU8sQ0FBQzBDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzdDLENBQUM7R0F0RlEzQyxXQUFXO0tBQVhBLFdBQVc7QUF3RnBCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jc3ZfZG93bmxvYWQvY3N2X2Rvd25sb2FkLmpzeD9jMjBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBBY2NvcmRpb24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0FjY29yZGlvbic7XG5pbXBvcnQgU3RhY2sgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1N0YWNrJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jc3ZfZG93bmxvYWQubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgRmlsdGVyR3JvdXAgZnJvbSAnLi4vZmlsdGVycy9maWx0ZXJfZ3JvdXAnO1xuaW1wb3J0IFN1YnNldFNlbGVjdCBmcm9tICcuLi9zdWJzZXRfc2VsZWN0L3N1YnNldF9zZWxlY3QnO1xuXG5jb25zdCBkZWZhdWx0RmlsdGVyID0ge1xuICBvcGVyYXRvcjogbnVsbCxcbiAgZmllbGQ6ICcnLFxuICBsb2dpYzogJ2lzJyxcbiAgdmFsdWU6ICcnXG59XG5cbmNvbnN0IGRlZmF1bHRFbmRwb2ludCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQ3N2KCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChkZWZhdWx0RW5kcG9pbnQpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDc3ZEb3dubG9hZCgpIHtcbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUoW2RlZmF1bHRGaWx0ZXJdKTtcbiAgY29uc3QgW3N1YnNldCwgc2V0U3Vic2V0XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjdXJyZW50VGFyZ2V0LCBzZXRDdXJyZW50VGFyZ2V0XSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY3VycmVudFRhcmdldCkge1xuICAgICAgY29uc3QgeyB0YXJnZXQsIGN1cnJlbnRDdXJzb3IgfSA9IGN1cnJlbnRUYXJnZXQ7XG4gICAgICBpZiAodGFyZ2V0LmlkICYmIHRhcmdldC5pZC5pbmNsdWRlcygndmFsdWUtaW5wdXQtJykpIHtcbiAgICAgICAgbGV0IGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldC5pZClcbiAgICAgICAgZWxlLmZvY3VzKCk7XG4gICAgICAgIGVsZS5zZXRTZWxlY3Rpb25SYW5nZShjdXJyZW50Q3Vyc29yLGN1cnJlbnRDdXJzb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICBjb25zdCB1cGRhdGVTdWJzZXQgPSB2YWx1ZSA9PiB7XG4gICAgc2V0U3Vic2V0KHZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhzdWJzZXQpXG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIHN1YnNldCxcbiAgICAgIGZpbHRlcnNcbiAgICB9XG4gICAgY29uc29sZS5sb2coYXdhaXQgZmV0Y2hDc3YoKSk7XG4gIH1cblxuICBjb25zdCBhZGRGaWx0ZXIgPSAoKSA9PiAge1xuICAgIGNvbnN0IG5ld0ZpbHRlciA9IHtcbiAgICAgIG9wZXJhdG9yOiBudWxsLFxuICAgICAgZmllbGQ6ICcnLFxuICAgICAgbG9naWM6ICdpcycsXG4gICAgICB2YWx1ZTogJydcbiAgICB9XG5cbiAgICBzZXRGaWx0ZXJzKGZpbHRlcnMuY29uY2F0KG5ld0ZpbHRlcikpO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlRmlsdGVyID0gKHRhcmdldCwgZmllbGQsIGkpID0+IHtcbiAgICBjb25zdCBuZXdGaWx0ZXJzID0gZmlsdGVycztcblxuICAgIG5ld0ZpbHRlcnNbaV1bZmllbGRdID0gdGFyZ2V0LnZhbHVlO1xuICAgIHNldEZpbHRlcnMobmV3RmlsdGVycyk7XG5cbiAgICBjb25zdCBjdXJyZW50Q3Vyc29yID0gdGFyZ2V0LnNlbGVjdGlvblN0YXJ0O1xuICAgIHNldEN1cnJlbnRUYXJnZXQoeyB0YXJnZXQsIGN1cnJlbnRDdXJzb3IgfSk7XG4gIH1cblxuICBjb25zdCBkZWxldGVGaWx0ZXIgPSAoaSkgPT4ge1xuICAgIGNvbnN0IG5ld0ZpbHRlcnMgPSBmaWx0ZXJzO1xuICAgIG5ld0ZpbHRlcnMuc3BsaWNlKGksIDEpO1xuICAgIHNldEZpbHRlcnMobmV3RmlsdGVycyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxTdGFjayBnYXA9ezJ9IGNsYXNzTmFtZT1cImNvbC1tZC01IG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J214LWF1dG8nPkRvd25sb2FkIFNwcmVhZHNoZWV0PC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J214LWF1dG8nPkRvd25sb2FkIGEgc3ByZWFkc2hlZXQgb2YgcHJvcGVydHkgZGF0YTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTdGFjayBnYXA9ezN9IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cbiAgICAgICAgICA8U3Vic2V0U2VsZWN0IFxuICAgICAgICAgICAgdXBkYXRlU3Vic2V0PXt1cGRhdGVTdWJzZXR9XG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxBY2NvcmRpb24gY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3JkaW9ufT5cbiAgICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT0nMCc+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPkZpbHRlcnM8L0FjY29yZGlvbi5IZWFkZXI+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cbiAgICAgICAgICAgICAgICA8RmlsdGVyR3JvdXBcbiAgICAgICAgICAgICAgICAgIGFkZEZpbHRlcj17YWRkRmlsdGVyfVxuICAgICAgICAgICAgICAgICAgdXBkYXRlRmlsdGVyPXt1cGRhdGVGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICBkZWxldGVGaWx0ZXI9e2RlbGV0ZUZpbHRlcn1cbiAgICAgICAgICAgICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XG4gICAgICAgICAgICAgICAgICBmaWx0ZXJDb3VudD17ZmlsdGVycy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XG4gICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENzdkRvd25sb2FkO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWNjb3JkaW9uIiwiU3RhY2siLCJzdHlsZXMiLCJGaWx0ZXJHcm91cCIsIlN1YnNldFNlbGVjdCIsImRlZmF1bHRGaWx0ZXIiLCJvcGVyYXRvciIsImZpZWxkIiwibG9naWMiLCJ2YWx1ZSIsImRlZmF1bHRFbmRwb2ludCIsImZldGNoQ3N2IiwicmVzIiwiZGF0YSIsImZldGNoIiwianNvbiIsInByb3BzIiwiQ3N2RG93bmxvYWQiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsInN1YnNldCIsInNldFN1YnNldCIsImN1cnJlbnRUYXJnZXQiLCJzZXRDdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY3VycmVudEN1cnNvciIsImlkIiwiaW5jbHVkZXMiLCJlbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZm9jdXMiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInVwZGF0ZVN1YnNldCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJwYXlsb2FkIiwiYWRkRmlsdGVyIiwibmV3RmlsdGVyIiwiY29uY2F0IiwidXBkYXRlRmlsdGVyIiwiaSIsIm5ld0ZpbHRlcnMiLCJzZWxlY3Rpb25TdGFydCIsImRlbGV0ZUZpbHRlciIsInNwbGljZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImdhcCIsImhlYWRlciIsImgxIiwicCIsImFjY29yZGlvbiIsIkl0ZW0iLCJldmVudEtleSIsIkhlYWRlciIsIkJvZHkiLCJmaWx0ZXJDb3VudCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/csv_download/csv_download.jsx\n");

/***/ })

});