module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/styles/device.js":
/*!*********************************!*\
  !*** ./assets/styles/device.js ***!
  \*********************************/
/*! exports provided: device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "device", function() { return device; });
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};
const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};

/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Project\\nextjs-mark8-bulk\\components\\Header\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Header = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }
}, "NextJs"), __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}), __jsx("link", {
  href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.1/css/bulma.min.css",
  rel: "stylesheet",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}), __jsx("link", {
  href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css",
  rel: "stylesheet",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/InputUpload/index.js":
/*!*****************************************!*\
  !*** ./components/InputUpload/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_csv_reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-csv-reader */ "react-csv-reader");
/* harmony import */ var react_csv_reader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_csv_reader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_DataProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/DataProvider */ "./hooks/DataProvider.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/InputUpload/styles.js");
var _jsxFileName = "D:\\Project\\nextjs-mark8-bulk\\components\\InputUpload\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const InputUpload = () => {
  const {
    file,
    setFile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_hooks_DataProvider__WEBPACK_IMPORTED_MODULE_2__["Context"]);

  function onClickUpload() {
    let input2 = document.getElementById("inputFile");
    input2.click();
  }

  function onFileLoaded(data, fileInfo) {
    setFile(_objectSpread(_objectSpread({}, file), {}, {
      name: fileInfo.name,
      data: data
    }));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_csv_reader__WEBPACK_IMPORTED_MODULE_1___default.a, {
    inputStyle: {
      display: "none"
    },
    inputId: "inputFile",
    onFileLoaded: (data, fileInfo) => onFileLoaded(data, fileInfo),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["DivInputUpload"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["DivInputUploadTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Bulk Upload form "), __jsx("div", {
    className: "text-help",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "you haven't upload any bulk data yed"))), __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["DivInputUploadFile"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Choose your an input medthod"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["CardUpload"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "icon-upload",
    onClick: () => onClickUpload(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fas fa-upload",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, file.name ? file.name : "via CSV file "), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E08\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C CSV"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (InputUpload);

/***/ }),

/***/ "./components/InputUpload/styles.js":
/*!******************************************!*\
  !*** ./components/InputUpload/styles.js ***!
  \******************************************/
/*! exports provided: DivInputUpload, DivInputUploadTitle, DivInputUploadFile, CardUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivInputUpload", function() { return DivInputUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivInputUploadTitle", function() { return DivInputUploadTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivInputUploadFile", function() { return DivInputUploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardUpload", function() { return CardUpload; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_styles_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/styles/device */ "./assets/styles/device.js");


const DivInputUpload = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__DivInputUpload",
  componentId: "sc-1f22dba-0"
})(["width:50%;margin:0 auto;margin-top:50px;background:#ffffff;border:1px solid #e5e5e5;box-sizing:border-box;border-radius:6px;padding-bottom:20px;@media ", "{width:90%;}"], _assets_styles_device__WEBPACK_IMPORTED_MODULE_1__["device"].laptop);
const DivInputUploadTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__DivInputUploadTitle",
  componentId: "sc-1f22dba-1"
})(["padding:20px 20px 0px 20px;.title{color:#002240;font-size:24px;font-weight:bold;}.text-help{margin-top:-20px;color:#0089ff;}"]);
const DivInputUploadFile = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(DivInputUploadTitle).withConfig({
  displayName: "styles__DivInputUploadFile",
  componentId: "sc-1f22dba-2"
})(["padding:0px 20px 0px 20px;"]);
const CardUpload = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__CardUpload",
  componentId: "sc-1f22dba-3"
})(["display:flex;padding:10px;border:1px solid #e5e5e5;box-sizing:border-box;border-radius:6px;div{margin:10px;}.icon-upload{background:#f3f5f8;border-radius:6px;width:50px;height:50px;align-items:center;justify-content:center;display:flex;i{font-size:24px;}}"]);

/***/ }),

/***/ "./components/Navbar/index.js":
/*!************************************!*\
  !*** ./components/Navbar/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/Navbar/styles.js");
var _jsxFileName = "D:\\Project\\nextjs-mark8-bulk\\components\\Navbar\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Navbar = () => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["DivNavbar"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "logo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}, __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}, __jsx("svg", {
  width: "90",
  height: "32",
  viewBox: "0 0 90 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 11
  }
}, __jsx("path", {
  d: "M70.5285 25.3952C69.9052 25.3952 69.2959 25.5874 68.7777 25.9474C68.2595 26.3075 67.8556 26.8193 67.6171 27.4181C67.3786 28.0169 67.3161 28.6759 67.4377 29.3115C67.5593 29.9472 67.8595 30.5311 68.3002 30.9894C68.7409 31.4478 69.3024 31.7599 69.9137 31.8863C70.525 32.0128 71.1586 31.9479 71.7344 31.6998C72.3102 31.4518 72.8024 31.0318 73.1487 30.4929C73.4949 29.9539 73.6798 29.3204 73.6798 28.6722C73.6784 27.8035 73.346 26.9708 72.7553 26.3565C72.1646 25.7423 71.3638 25.3966 70.5285 25.3952ZM70.5285 30.1096C70.2551 30.1098 69.9877 30.0258 69.7602 29.868C69.5328 29.7102 69.3554 29.4858 69.2506 29.2232C69.1458 28.9606 69.1182 28.6715 69.1714 28.3926C69.2246 28.1137 69.3561 27.8575 69.5494 27.6563C69.7427 27.4552 69.9889 27.3181 70.2571 27.2626C70.5252 27.207 70.8032 27.2354 71.0558 27.3442C71.3085 27.4529 71.5244 27.6371 71.6764 27.8735C71.8283 28.1099 71.9094 28.3879 71.9094 28.6722C71.9096 28.861 71.874 29.0479 71.8047 29.2224C71.7354 29.3968 71.6337 29.5554 71.5055 29.689C71.3772 29.8226 71.2249 29.9286 71.0573 30.001C70.8897 30.0734 70.71 30.1107 70.5285 30.1109V30.1096ZM80.2865 25.3952C79.6632 25.3952 79.054 25.5874 78.5358 25.9474C78.0175 26.3075 77.6136 26.8193 77.3751 27.4181C77.1366 28.0169 77.0742 28.6759 77.1958 29.3115C77.3174 29.9472 77.6175 30.5311 78.0582 30.9894C78.4989 31.4478 79.0604 31.7599 79.6717 31.8863C80.283 32.0128 80.9166 31.9479 81.4925 31.6998C82.0683 31.4518 82.5604 31.0318 82.9067 30.4929C83.253 29.9539 83.4378 29.3204 83.4378 28.6722C83.4364 27.8035 83.104 26.9708 82.5133 26.3565C81.9226 25.7423 81.1219 25.3966 80.2865 25.3952ZM80.2865 30.1096C80.0131 30.1096 79.7459 30.0253 79.5186 29.8673C79.2913 29.7094 79.1142 29.4849 79.0095 29.2223C78.9049 28.9596 78.8775 28.6706 78.9309 28.3918C78.9842 28.113 79.1159 27.8569 79.3092 27.6559C79.5025 27.4548 79.7487 27.3179 80.0169 27.2625C80.285 27.207 80.5629 27.2355 80.8155 27.3443C81.068 27.4531 81.2839 27.6373 81.4358 27.8737C81.5876 28.11 81.6687 28.3879 81.6687 28.6722C81.6689 28.8611 81.6332 29.0481 81.5638 29.2227C81.4945 29.3972 81.3927 29.5558 81.2643 29.6894C81.1359 29.823 80.9835 29.929 80.8157 30.0014C80.648 30.0737 80.4681 30.1109 80.2865 30.1109V30.1096ZM19.8228 12.8071C20.1311 13.5692 20.2895 14.3878 20.2886 15.2146V24.6434H17.1819V15.2146C17.1873 14.8248 17.1163 14.438 16.9732 14.0777C16.8383 13.7316 16.6359 13.4184 16.3788 13.1578C16.1277 12.8945 15.8339 12.6794 15.5108 12.5225C15.1726 12.3736 14.809 12.2968 14.4417 12.2968C14.0744 12.2968 13.7108 12.3736 13.3726 12.5225C13.0412 12.6731 12.7409 12.8888 12.4881 13.1578C12.2397 13.4258 12.0385 13.7372 11.8937 14.0777C11.7491 14.4375 11.678 14.8247 11.685 15.2146V24.6434H8.6177V15.2146C8.62311 14.8248 8.55208 14.438 8.40897 14.0777C8.26408 13.7362 8.06245 13.4239 7.81333 13.1552C7.54452 12.9039 7.24126 12.6956 6.91351 12.5371C6.57528 12.3881 6.21172 12.3114 5.84441 12.3114C5.47711 12.3114 5.11354 12.3881 4.77532 12.5371C4.4439 12.6877 4.14356 12.9034 3.89077 13.1724C3.64235 13.4404 3.44116 13.7517 3.2964 14.0922C3.15182 14.4521 3.08074 14.8392 3.08768 15.2291V24.658H2.81894e-05V15.2146C-0.00243089 14.3876 0.156021 13.5687 0.465848 12.8071C1.05399 11.3327 2.1624 10.1483 3.56368 9.49692C4.33274 9.14451 5.16778 8.97517 6.00782 9.00128C6.84787 9.02738 7.6717 9.24827 8.41915 9.64781C9.06573 9.99862 9.64505 10.4696 10.1284 11.0375C10.6147 10.4731 11.1929 10.0022 11.8364 9.64648C12.5853 9.24265 13.412 9.01939 14.2553 8.99327C15.0985 8.96715 15.9365 9.13884 16.7072 9.4956C17.3987 9.81736 18.026 10.2712 18.5565 10.8337C19.0986 11.399 19.5288 12.0695 19.8228 12.8071ZM47.8929 9.10119H48.2633V12.361H47.8929C47.2173 12.3538 46.5464 12.4786 45.9151 12.729C45.3228 12.962 44.7776 13.3081 44.3076 13.7494C43.8592 14.1745 43.4936 14.6854 43.2309 15.2543C42.976 15.819 42.8455 16.4357 42.8491 17.0596V24.6831H39.6774V17.0596C39.6758 15.9856 39.9009 14.9243 40.3367 13.9506C40.7592 12.9957 41.3602 12.1377 42.1045 11.4266C42.8707 10.7094 43.7521 10.1378 44.7086 9.73781C45.7161 9.29928 46.7995 9.08079 47.8917 9.09589L47.8929 9.10119ZM55.2073 16.5963L62.6032 24.654H58.1639L52.9088 18.9787V24.6632H49.7728V2.92692H52.9075V14.2285L57.5275 9.07869H61.9643L55.2073 16.5963ZM33.9056 10.8509C32.7045 9.92845 31.2509 9.4303 29.7578 9.42942C28.8104 9.42222 27.8727 9.62763 27.0087 10.0316C25.2587 10.8721 23.8887 12.3831 23.1848 14.2491C22.4809 16.1152 22.4975 18.1919 23.2312 20.0455C23.5848 20.9437 24.1036 21.7615 24.7585 22.453C25.4041 23.1354 26.1674 23.6854 27.0087 24.0743C27.8727 24.4783 28.8104 24.6837 29.7578 24.6765C31.2522 24.6842 32.7084 24.1852 33.9056 23.255V24.6593H36.9093V9.01119H33.9056V10.8509ZM29.7896 21.684C28.9036 21.7103 28.0302 21.4612 27.2811 20.9684C26.532 20.4757 25.9413 19.7618 25.5845 18.918C25.2277 18.0742 25.1212 17.1389 25.2784 16.2318C25.4356 15.3246 25.8495 14.4869 26.4672 13.8258C27.0848 13.1646 27.878 12.7101 28.7454 12.5204C29.6128 12.3306 30.5149 12.4143 31.3363 12.7607C32.1577 13.1071 32.8611 13.7004 33.3564 14.4648C33.8517 15.2292 34.1165 16.1299 34.1169 17.0516C34.1325 18.2623 33.6857 19.4299 32.8744 20.2984C32.0632 21.1669 30.9537 21.6652 29.7896 21.684ZM69.5307 15.9994C69.8758 15.6867 70.2737 15.443 70.7041 15.2807C71.1604 15.0984 71.6459 15.0086 72.1347 15.016C72.6233 15.0101 73.1086 15.0999 73.5652 15.2807C73.9926 15.4495 74.3894 15.6926 74.7387 15.9994C75.071 16.294 75.3396 16.6584 75.5265 17.0688C75.7181 17.4816 75.8177 17.934 75.8177 18.3924C75.8177 18.8507 75.7181 19.3031 75.5265 19.7159C75.3358 20.1289 75.068 20.4982 74.7387 20.8025C74.3903 21.115 73.9935 21.3638 73.5652 21.5384C73.1089 21.7207 72.6234 21.8105 72.1347 21.8031C71.6461 21.809 71.1608 21.7192 70.7041 21.5384C70.2728 21.3701 69.875 21.1207 69.5307 20.8025C69.1978 20.5017 68.9294 20.1315 68.7428 19.7159C68.5512 19.3031 68.4517 18.8507 68.4517 18.3924C68.4517 17.934 68.5512 17.4816 68.7428 17.0688C68.9301 16.6583 69.1991 16.2938 69.5319 15.9994H69.5307ZM70.0614 10.1481C69.8914 9.76926 69.8465 9.34263 69.9337 8.93454C70.021 8.52644 70.2354 8.15975 70.5437 7.89148C70.7517 7.70237 70.9916 7.55516 71.2514 7.45736C71.5295 7.35071 71.823 7.29431 72.1194 7.2906C72.4165 7.28609 72.7115 7.34276 72.9874 7.45736C73.2471 7.55519 73.4871 7.70239 73.695 7.89148C73.8951 8.07425 74.059 8.2959 74.1774 8.54398C74.347 8.92323 74.3912 9.35014 74.3033 9.75826C74.2154 10.1664 74.0002 10.5328 73.6912 10.8006C73.4833 10.9897 73.2433 11.1369 72.9836 11.2347C72.7055 11.3414 72.4119 11.3978 72.1156 11.4015C71.8184 11.4075 71.5231 11.3508 71.2476 11.2347C70.9861 11.1408 70.7454 10.9932 70.5399 10.8006C70.3366 10.622 70.1732 10.3993 70.0614 10.1481ZM89.8689 7.70751L85.7045 21.6509C84.5476 24.6765 84.6863 24.6765 82.8752 24.6765H72.1525C73.0588 24.6814 73.9582 24.5113 74.8049 24.1749C75.6019 23.8638 76.3373 23.4036 76.9749 22.8169C77.5903 22.2603 78.0882 21.5771 78.4372 20.8105C78.7902 20.0494 78.9717 19.2148 78.968 18.3699C78.9701 17.2456 78.639 16.148 78.0198 15.2265C77.3928 14.2861 76.5612 13.5129 75.5927 12.9699C76.1188 12.5316 76.5543 11.9874 76.873 11.3697C77.2085 10.7462 77.3839 10.0433 77.3821 9.32884C77.3869 8.68088 77.2493 8.04035 76.98 7.45604C76.71 6.87303 76.333 6.35057 75.8701 5.9181C75.3836 5.47119 74.823 5.12003 74.2156 4.88178C72.8879 4.36894 71.4273 4.36894 70.0996 4.88178C69.4904 5.11612 68.9291 5.46769 68.445 5.9181C67.9757 6.34676 67.5954 6.87054 67.3276 7.45736C67.0565 8.04106 66.9189 8.68201 66.9254 9.33016C66.9269 10.0333 67.1022 10.7242 67.4345 11.3366C67.7585 11.9543 68.1901 12.5041 68.7072 12.958C67.7121 13.4592 66.863 14.2266 66.247 15.1815C65.6396 16.1195 65.32 17.2271 65.3306 18.358C65.3249 19.2031 65.5065 20.0382 65.8614 20.7985C66.217 21.5621 66.7154 22.2442 67.3276 22.805C67.9703 23.3832 68.7045 23.8413 69.4976 24.159C70.3434 24.4983 71.2433 24.6685 72.1499 24.6606H67.3276C67.0736 24.6528 66.8292 24.5586 66.6317 24.3925C66.4342 24.2263 66.2946 23.9974 66.2343 23.7407C66.2343 23.7235 66.2177 23.7235 66.2177 23.7077L66.1821 23.5899C66.1821 23.5727 66.1656 23.5396 66.1656 23.5224V23.4893L61.6703 2.96398H57.9093C57.5663 2.95257 57.2417 2.80012 57.0067 2.54007C56.7716 2.28003 56.6454 1.93364 56.6557 1.57692C56.6499 1.39985 56.6778 1.22334 56.7377 1.05748C56.7976 0.891624 56.8884 0.739682 57.0048 0.610352C57.1213 0.481023 57.2611 0.376845 57.4163 0.303784C57.5715 0.230723 57.7391 0.190212 57.9093 0.18457H62.9417C63.6328 0.18457 64.035 0.752364 64.1954 1.57163L64.8546 4.51384H87.8109C88.1694 4.53298 88.5186 4.63882 88.8308 4.82294C89.143 5.00705 89.4096 5.26437 89.6094 5.57444C89.8092 5.8845 89.9367 6.23876 89.9818 6.60906C90.0268 6.97935 89.9882 7.35547 89.8689 7.70751Z",
  fill: "#FCFCFC",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 13
  }
}))))));

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Navbar/styles.js":
/*!*************************************!*\
  !*** ./components/Navbar/styles.js ***!
  \*************************************/
/*! exports provided: DivNavbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivNavbar", function() { return DivNavbar; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const DivNavbar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__DivNavbar",
  componentId: "sc-33v2mi-0"
})(["width:100%;height:56px;background:#002240;display:flex;align-items:center;.logo{width:50%;margin:0 auto;color:#ffffff;font-size:20px;}"]);

/***/ }),

/***/ "./components/Tables/index.js":
/*!************************************!*\
  !*** ./components/Tables/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/Tables/style.js");
/* harmony import */ var _hooks_DataProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/DataProvider */ "./hooks/DataProvider.js");
var _jsxFileName = "D:\\Project\\nextjs-mark8-bulk\\components\\Tables\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Tables = () => {
  const {
    file,
    setFile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_hooks_DataProvider__WEBPACK_IMPORTED_MODULE_3__["Context"]);
  const data = file.data;

  function subString(string, number) {
    let result;

    if (string.length > number) {
      result = string.substring(0, number - 1) + "...";
    }

    return result;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["DivHeaderTable"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "child-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, data.length - 1), __jsx("div", {
    className: "child-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "listings successfully and Ready to published"), __jsx("div", {
    className: "child-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, __jsx("path", {
    d: "M9.51562 5.01562V9.23438L12.9844 11.3438L12.2812 12.5625L8.01562 9.98438V5.01562H9.51562ZM18 7.125H11.2031L13.9688 4.3125C12.5938 2.9375 10.9375 2.25 9 2.25C7.09375 2.21875 5.45312 2.875 4.07812 4.21875C2.73438 5.59375 2.0625 7.21875 2.0625 9.09375C2.0625 10.9688 2.73438 12.5938 4.07812 13.9688C5.42188 15.3438 7.0625 16.0312 9 16.0312C10.9375 16.0312 12.5938 15.3438 13.9688 13.9688C15.3125 12.625 15.9844 11 15.9844 9.09375H18C18 11.5625 17.125 13.6562 15.375 15.375C13.625 17.125 11.5 18 9 18C6.5 18 4.375 17.125 2.625 15.375C0.875 13.6562 0 11.5781 0 9.14062C0 6.67188 0.875 4.5625 2.625 2.8125C4.375 1.0625 6.48438 0.1875 8.95312 0.1875C11.4219 0.1875 13.5312 1.0625 15.2812 2.8125L18 0V7.125Z",
    fill: "#0089FF",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  })), "\xA0\xA0Update data"), __jsx("div", {
    className: "child-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx("path", {
    d: "M9 6.98438L12.9844 11.0156H9.98438V17.0156H8.01562V11.0156H5.01562L9 6.98438ZM15.9844 0.984375C16.5469 0.984375 17.0156 1.1875 17.3906 1.59375C17.7969 2 18 2.46875 18 3V15C18 15.5312 17.7969 16 17.3906 16.4062C16.9844 16.8125 16.5156 17.0156 15.9844 17.0156H12V15H15.9844V5.01562H2.01562V15H6V17.0156H2.01562C1.45312 17.0156 0.96875 16.8125 0.5625 16.4062C0.1875 16 0 15.5312 0 15V3C0 2.46875 0.1875 2 0.5625 1.59375C0.96875 1.1875 1.45312 0.984375 2.01562 0.984375H15.9844Z",
    fill: "#A6AAB4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "child-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Published")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    responsive: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("thead", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "CONDO NAME"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, "RENT PRICE (Baht)"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, "SELL PRICE (Baht)"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, "BEDROOM"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "BATHROOM"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, "SIZE (sqm.)"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, "FLOOR "), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, "STATUS "), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, "PHOTO "), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, "TITLE "), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, "DESCRIPTION "), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, "BENEFIT "), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, "Amenities "))), __jsx("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, data.map((file, index) => {
    const object = _objectSpread({}, file);

    let id = object["0"];
    let name = subString(object["1"], 20);
    let rate_price = object["2"];
    let sale_price = object["3"];
    let bad_room = object["4"];
    let bath = object["5"];
    let size = object["6"];
    let floor = object["7"];
    let title = subString(object["8"], 20);
    let description = subString(object["9"], 20);
    let photo = object["10"];
    let agen_post = object["11"] ? __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["ButtonPost"], {
      post: "true",
      color: "success",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 19
      }
    }, "Agent post") : "";
    let accept_agent = object["12"] ? __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["ButtonPost"], {
      color: "warning",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 19
      }
    }, "\u0E23\u0E31\u0E1A Co-Agent") : "";
    let air_con = object["13"] ? "Air condition" : null;
    let bath_tub = object["14"] ? "Bath Tub" : null;
    let electric_stove = object["15"] ? "Electric Stove" : null;
    let furniture = object["16"] ? "Furniture" : null;
    let gas_stove = object["17"] ? "Gas Stove" : null;
    let refrigerator = object["18"] ? "Refrigerator" : null;
    let washing_machine = object["19"] ? "Washing Machine" : null;
    let water_heater = object["20"] ? "Water Heater" : null;
    let amenities_menus = [air_con, bath_tub, electric_stove, furniture, gas_stove, refrigerator, washing_machine, water_heater].filter(x => x);

    if (index > 0) {
      return __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["Tr"], {
        key: id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }
      }, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["Th"], {
        scope: "row",
        value: id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 23
        }
      }, " ", __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 25
        }
      }, id ? id : "notfound")), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["Th"], {
        value: name,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 23
        }
      }, __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 25
        }
      }, name ? name : "notfound")), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["Th"], {
        value: rate_price,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 23
        }
      }, __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 25
        }
      }, rate_price ? rate_price : "notfound")), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["Th"], {
        value: sale_price,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 23
        }
      }, __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 25
        }
      }, sale_price ? sale_price : "notfound")), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["Th"], {
        value: bad_room,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 23
        }
      }, __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 25
        }
      }, bad_room ? bad_room : "notfound")), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["Th"], {
        value: bath,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 23
        }
      }, __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 25
        }
      }, bath ? bath : "notfound")), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["Th"], {
        value: size,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 23
        }
      }, __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 25
        }
      }, size ? size : "notfound")), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["Th"], {
        value: floor,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 23
        }
      }, __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 25
        }
      }, floor ? floor : "notfound")), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["Th"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 23
        }
      }, agen_post, accept_agent), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["Th"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "div-img",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: `${photo}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 27
        }
      }), __jsx("img", {
        src: `${photo}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 27
        }
      }), __jsx("img", {
        src: `${photo}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 27
        }
      }), __jsx("img", {
        src: `${photo}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 27
        }
      }), __jsx("button", {
        className: "edit-photo",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 27
        }
      }, "Edit photo"))), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["Th"], {
        value: title,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 23
        }
      }, __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 25
        }
      }, title ? title : "notfound")), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["Th"], {
        value: description,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 23
        }
      }, " ", __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 25
        }
      }, description ? description : "notfound")), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["Th"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 23
        }
      }, "-"), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["Th"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 23
        }
      }, amenities_menus.length > 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledDropdown"], {
        setActiveFromChild: true,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 27
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], {
        tag: "span",
        className: "amenities_menu",
        caret: amenities_menus.length > 0 ? true : false,
        disabled: true,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 29
        }
      }, amenities_menus.length), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], {
        right: true,
        className: "dropdown_menu",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 29
        }
      }, amenities_menus.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
        header: true,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 35
        }
      }, "Amenities"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
        divider: true,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 35
        }
      }), amenities_menus.map((menu, index) => {
        return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
          key: index,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 39
          }
        }, menu);
      })))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, amenities_menus.length)));
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Tables);

/***/ }),

/***/ "./components/Tables/style.js":
/*!************************************!*\
  !*** ./components/Tables/style.js ***!
  \************************************/
/*! exports provided: DivHeaderTable, Tr, Th, ButtonPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivHeaderTable", function() { return DivHeaderTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tr", function() { return Tr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Th", function() { return Th; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonPost", function() { return ButtonPost; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_styles_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/styles/device */ "./assets/styles/device.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);



const DivHeaderTable = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__DivHeaderTable",
  componentId: "sc-4x8gkh-0"
})(["display:flex;flex-wrap:wrap;justify-content:flex-start;padding-top:50px;align-items:center;@media ", "{justify-content:space-around;}.child-1{font-family:Roboto;font-style:normal;font-weight:500;font-size:24px;line-height:28px;text-align:center;background:#f3f5f8;width:83px;height:88px;padding:30px 0;}.child-2{margin:20px;font-family:Roboto;font-style:normal;font-weight:500;font-size:24px;line-height:28px;text-align:left;width:50%;@media ", "{width:35%;}}.child-3{margin:20px;font-family:Roboto;font-style:normal;font-weight:500;line-height:28px;text-align:center;color:#0089ff;width:10%;@media ", "{width:10%;}}.child-4{margin:10px;font-family:Roboto;font-style:normal;font-weight:500;line-height:28px;text-align:center;color:#0089ff;width:10%;@media ", "{width:30%;}}.child-5{margin:30px;font-family:Roboto;font-style:normal;font-weight:500;line-height:28px;text-align:center;color:#0089ff;width:10%;@media ", "{width:30%;}}"], _assets_styles_device__WEBPACK_IMPORTED_MODULE_1__["device"].mobileL, _assets_styles_device__WEBPACK_IMPORTED_MODULE_1__["device"].laptop, _assets_styles_device__WEBPACK_IMPORTED_MODULE_1__["device"].mobileL, _assets_styles_device__WEBPACK_IMPORTED_MODULE_1__["device"].mobileL, _assets_styles_device__WEBPACK_IMPORTED_MODULE_1__["device"].mobileL);
const Tr = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.tr.withConfig({
  displayName: "style__Tr",
  componentId: "sc-4x8gkh-1"
})(["white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"]);
const Th = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.th.withConfig({
  displayName: "style__Th",
  componentId: "sc-4x8gkh-2"
})([".amenities_menu{color:#002240;}.dropdown:hover .dropdown-menu{display:block;}.dropdown:active .dropdown-menu{display:none;}span{color:", ";}.div-img{display:flex;align-items:center;width:150px;transition:0.5s ease-out;.edit-photo{background:none;border:none;display:none;color:#0089ff;font-weight:500;opacity:0;}img{border-radius:6px;width:24px;margin:5px;}&:hover{width:200px;.edit-photo{display:block;opacity:1;}}}"], props => !props.value ? "#EB5757" : "#002240");
const ButtonPost = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"]).withConfig({
  displayName: "style__ButtonPost",
  componentId: "sc-4x8gkh-3"
})(["background:", ";border-radius:24px;color:", ";border:none;font-weight:600;&:hover{background:", ";color:", ";}"], props => props.post ? "rgba(111, 207, 151, 0.24)" : "rgba(243, 208, 83, 0.28)", props => props.post ? "#6fcf97" : "#F2C94C;", props => props.post ? "rgba(111, 207, 151, 0.24)" : "rgba(243, 208, 83, 0.28)", props => props.post ? "#6fcf97" : "#F2C94C;");

/***/ }),

/***/ "./hooks/DataProvider.js":
/*!*******************************!*\
  !*** ./hooks/DataProvider.js ***!
  \*******************************/
/*! exports provided: Context, ContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextProvider", function() { return ContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Project\\nextjs-mark8-bulk\\hooks\\DataProvider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const ContextProvider = ({
  children
}) => {
  let {
    0: file,
    1: setFile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: "",
    data: []
  });
  return __jsx(Context.Provider, {
    value: {
      file,
      setFile
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./layouts/Basic.js":
/*!**************************!*\
  !*** ./layouts/Basic.js ***!
  \**************************/
/*! exports provided: GlobalStyle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Project\\nextjs-mark8-bulk\\layouts\\Basic.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"]`
    // this is the shared style
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Roboto;
  }
`;

const BasicLayout = ({
  children
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(GlobalStyle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (BasicLayout);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Basic */ "./layouts/Basic.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_InputUpload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/InputUpload */ "./components/InputUpload/index.js");
/* harmony import */ var _components_Tables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Tables */ "./components/Tables/index.js");
/* harmony import */ var _hooks_DataProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/DataProvider */ "./hooks/DataProvider.js");
var _jsxFileName = "D:\\Project\\nextjs-mark8-bulk\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Index = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}), __jsx(_layouts_Basic__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
}), __jsx(_hooks_DataProvider__WEBPACK_IMPORTED_MODULE_7__["ContextProvider"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }
}, __jsx(_components_InputUpload__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }
}), __jsx(_components_Tables__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-csv-reader":
/*!***********************************!*\
  !*** external "react-csv-reader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-csv-reader");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9kZXZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbnB1dFVwbG9hZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0lucHV0VXBsb2FkL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJsZXMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvRGF0YVByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2xheW91dHMvQmFzaWMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jc3YtcmVhZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsic2l6ZSIsIm1vYmlsZVMiLCJtb2JpbGVNIiwibW9iaWxlTCIsInRhYmxldCIsImxhcHRvcCIsImxhcHRvcEwiLCJkZXNrdG9wIiwiZGV2aWNlIiwiZGVza3RvcEwiLCJIZWFkZXIiLCJJbnB1dFVwbG9hZCIsImZpbGUiLCJzZXRGaWxlIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJvbkNsaWNrVXBsb2FkIiwiaW5wdXQyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsaWNrIiwib25GaWxlTG9hZGVkIiwiZGF0YSIsImZpbGVJbmZvIiwibmFtZSIsImRpc3BsYXkiLCJEaXZJbnB1dFVwbG9hZCIsInN0eWxlZCIsImRpdiIsIkRpdklucHV0VXBsb2FkVGl0bGUiLCJEaXZJbnB1dFVwbG9hZEZpbGUiLCJDYXJkVXBsb2FkIiwiTmF2YmFyIiwiRGl2TmF2YmFyIiwiVGFibGVzIiwic3ViU3RyaW5nIiwic3RyaW5nIiwibnVtYmVyIiwicmVzdWx0IiwibGVuZ3RoIiwic3Vic3RyaW5nIiwibWFwIiwiaW5kZXgiLCJvYmplY3QiLCJpZCIsInJhdGVfcHJpY2UiLCJzYWxlX3ByaWNlIiwiYmFkX3Jvb20iLCJiYXRoIiwiZmxvb3IiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGhvdG8iLCJhZ2VuX3Bvc3QiLCJhY2NlcHRfYWdlbnQiLCJhaXJfY29uIiwiYmF0aF90dWIiLCJlbGVjdHJpY19zdG92ZSIsImZ1cm5pdHVyZSIsImdhc19zdG92ZSIsInJlZnJpZ2VyYXRvciIsIndhc2hpbmdfbWFjaGluZSIsIndhdGVyX2hlYXRlciIsImFtZW5pdGllc19tZW51cyIsImZpbHRlciIsIngiLCJtZW51IiwiRGl2SGVhZGVyVGFibGUiLCJUciIsInRyIiwiVGgiLCJ0aCIsInByb3BzIiwidmFsdWUiLCJCdXR0b25Qb3N0IiwiQnV0dG9uIiwicG9zdCIsImNyZWF0ZUNvbnRleHQiLCJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkJhc2ljTGF5b3V0IiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixDQUZGLENBRkYsQ0FERjs7QUFhZUEsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNyQkEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiY29uc3Qgc2l6ZSA9IHtcclxuICBtb2JpbGVTOiBcIjMyMHB4XCIsXHJcbiAgbW9iaWxlTTogXCIzNzVweFwiLFxyXG4gIG1vYmlsZUw6IFwiNDI1cHhcIixcclxuICB0YWJsZXQ6IFwiNzY4cHhcIixcclxuICBsYXB0b3A6IFwiMTAyNHB4XCIsXHJcbiAgbGFwdG9wTDogXCIxNDQwcHhcIixcclxuICBkZXNrdG9wOiBcIjI1NjBweFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRldmljZSA9IHtcclxuICBtb2JpbGVTOiBgKG1heC13aWR0aDogJHtzaXplLm1vYmlsZVN9KWAsXHJcbiAgbW9iaWxlTTogYChtYXgtd2lkdGg6ICR7c2l6ZS5tb2JpbGVNfSlgLFxyXG4gIG1vYmlsZUw6IGAobWF4LXdpZHRoOiAke3NpemUubW9iaWxlTH0pYCxcclxuICB0YWJsZXQ6IGAobWF4LXdpZHRoOiAke3NpemUudGFibGV0fSlgLFxyXG4gIGxhcHRvcDogYChtYXgtd2lkdGg6ICR7c2l6ZS5sYXB0b3B9KWAsXHJcbiAgbGFwdG9wTDogYChtYXgtd2lkdGg6ICR7c2l6ZS5sYXB0b3BMfSlgLFxyXG4gIGRlc2t0b3A6IGAobWF4LXdpZHRoOiAke3NpemUuZGVza3RvcH0pYCxcclxuICBkZXNrdG9wTDogYChtYXgtd2lkdGg6ICR7c2l6ZS5kZXNrdG9wfSlgLFxyXG59O1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5OZXh0SnM8L3RpdGxlPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2J1bG1hLzAuMy4xL2Nzcy9idWxtYS5taW4uY3NzXCJcclxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgLz5cclxuICAgICAgPGxpbmtcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTAuMi9jc3MvYWxsLmNzc1wiXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgPC8+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENTVlJlYWRlciBmcm9tIFwicmVhY3QtY3N2LXJlYWRlclwiO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2hvb2tzL0RhdGFQcm92aWRlclwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBEaXZJbnB1dFVwbG9hZCxcclxuICBEaXZJbnB1dFVwbG9hZFRpdGxlLFxyXG4gIERpdklucHV0VXBsb2FkRmlsZSxcclxuICBDYXJkVXBsb2FkLFxyXG59IGZyb20gXCIuL3N0eWxlc1wiO1xyXG5cclxuY29uc3QgSW5wdXRVcGxvYWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBmaWxlLCBzZXRGaWxlIH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xyXG5cclxuICBmdW5jdGlvbiBvbkNsaWNrVXBsb2FkKCkge1xyXG4gICAgbGV0IGlucHV0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRGaWxlXCIpO1xyXG4gICAgaW5wdXQyLmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbkZpbGVMb2FkZWQoZGF0YSwgZmlsZUluZm8pIHtcclxuICAgIHNldEZpbGUoeyAuLi5maWxlLCBuYW1lOiBmaWxlSW5mby5uYW1lLCBkYXRhOiBkYXRhIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDU1ZSZWFkZXJcclxuICAgICAgICBpbnB1dFN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgaW5wdXRJZD17XCJpbnB1dEZpbGVcIn1cclxuICAgICAgICBvbkZpbGVMb2FkZWQ9eyhkYXRhLCBmaWxlSW5mbykgPT4gb25GaWxlTG9hZGVkKGRhdGEsIGZpbGVJbmZvKX1cclxuICAgICAgLz5cclxuICAgICAgPERpdklucHV0VXBsb2FkPlxyXG4gICAgICAgIDxEaXZJbnB1dFVwbG9hZFRpdGxlPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+QnVsayBVcGxvYWQgZm9ybSA8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWhlbHBcIj5cclxuICAgICAgICAgICAgPHNwYW4+eW91IGhhdmVuJ3QgdXBsb2FkIGFueSBidWxrIGRhdGEgeWVkPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9EaXZJbnB1dFVwbG9hZFRpdGxlPlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIDxEaXZJbnB1dFVwbG9hZEZpbGU+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5DaG9vc2UgeW91ciBhbiBpbnB1dCBtZWR0aG9kPC9oMj5cclxuICAgICAgICAgIDxDYXJkVXBsb2FkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tdXBsb2FkXCIgb25DbGljaz17KCkgPT4gb25DbGlja1VwbG9hZCgpfT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXBsb2FkXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGg1PntmaWxlLm5hbWUgPyBmaWxlLm5hbWUgOiBcInZpYSBDU1YgZmlsZSBcIn08L2g1PlxyXG4gICAgICAgICAgICAgIDxoNT7guK3guLHguJvguYDguJTguJXguILguYnguK3guKHguLnguKXguIjguLLguIHguYTguJ/guKXguYwgQ1NWPC9oNT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NhcmRVcGxvYWQ+XHJcbiAgICAgICAgPC9EaXZJbnB1dFVwbG9hZEZpbGU+XHJcbiAgICAgIDwvRGl2SW5wdXRVcGxvYWQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRVcGxvYWQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCIuLi8uLi9hc3NldHMvc3R5bGVzL2RldmljZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERpdklucHV0VXBsb2FkID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuICBAbWVkaWEgJHtkZXZpY2UubGFwdG9wfSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEaXZJbnB1dFVwbG9hZFRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAyMHB4IDIwcHggMHB4IDIwcHg7XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBjb2xvcjogIzAwMjI0MDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLnRleHQtaGVscCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIGNvbG9yOiAjMDA4OWZmO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEaXZJbnB1dFVwbG9hZEZpbGUgPSBzdHlsZWQoRGl2SW5wdXRVcGxvYWRUaXRsZSlgXHJcbiAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZFVwbG9hZCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcblxyXG4gIGRpdiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuaWNvbi11cGxvYWQge1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjVmODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgeyBEaXZOYXZiYXIgfSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPERpdk5hdmJhcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB3aWR0aD1cIjkwXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMzJcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDkwIDMyXCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBkPVwiTTcwLjUyODUgMjUuMzk1MkM2OS45MDUyIDI1LjM5NTIgNjkuMjk1OSAyNS41ODc0IDY4Ljc3NzcgMjUuOTQ3NEM2OC4yNTk1IDI2LjMwNzUgNjcuODU1NiAyNi44MTkzIDY3LjYxNzEgMjcuNDE4MUM2Ny4zNzg2IDI4LjAxNjkgNjcuMzE2MSAyOC42NzU5IDY3LjQzNzcgMjkuMzExNUM2Ny41NTkzIDI5Ljk0NzIgNjcuODU5NSAzMC41MzExIDY4LjMwMDIgMzAuOTg5NEM2OC43NDA5IDMxLjQ0NzggNjkuMzAyNCAzMS43NTk5IDY5LjkxMzcgMzEuODg2M0M3MC41MjUgMzIuMDEyOCA3MS4xNTg2IDMxLjk0NzkgNzEuNzM0NCAzMS42OTk4QzcyLjMxMDIgMzEuNDUxOCA3Mi44MDI0IDMxLjAzMTggNzMuMTQ4NyAzMC40OTI5QzczLjQ5NDkgMjkuOTUzOSA3My42Nzk4IDI5LjMyMDQgNzMuNjc5OCAyOC42NzIyQzczLjY3ODQgMjcuODAzNSA3My4zNDYgMjYuOTcwOCA3Mi43NTUzIDI2LjM1NjVDNzIuMTY0NiAyNS43NDIzIDcxLjM2MzggMjUuMzk2NiA3MC41Mjg1IDI1LjM5NTJaTTcwLjUyODUgMzAuMTA5NkM3MC4yNTUxIDMwLjEwOTggNjkuOTg3NyAzMC4wMjU4IDY5Ljc2MDIgMjkuODY4QzY5LjUzMjggMjkuNzEwMiA2OS4zNTU0IDI5LjQ4NTggNjkuMjUwNiAyOS4yMjMyQzY5LjE0NTggMjguOTYwNiA2OS4xMTgyIDI4LjY3MTUgNjkuMTcxNCAyOC4zOTI2QzY5LjIyNDYgMjguMTEzNyA2OS4zNTYxIDI3Ljg1NzUgNjkuNTQ5NCAyNy42NTYzQzY5Ljc0MjcgMjcuNDU1MiA2OS45ODg5IDI3LjMxODEgNzAuMjU3MSAyNy4yNjI2QzcwLjUyNTIgMjcuMjA3IDcwLjgwMzIgMjcuMjM1NCA3MS4wNTU4IDI3LjM0NDJDNzEuMzA4NSAyNy40NTI5IDcxLjUyNDQgMjcuNjM3MSA3MS42NzY0IDI3Ljg3MzVDNzEuODI4MyAyOC4xMDk5IDcxLjkwOTQgMjguMzg3OSA3MS45MDk0IDI4LjY3MjJDNzEuOTA5NiAyOC44NjEgNzEuODc0IDI5LjA0NzkgNzEuODA0NyAyOS4yMjI0QzcxLjczNTQgMjkuMzk2OCA3MS42MzM3IDI5LjU1NTQgNzEuNTA1NSAyOS42ODlDNzEuMzc3MiAyOS44MjI2IDcxLjIyNDkgMjkuOTI4NiA3MS4wNTczIDMwLjAwMUM3MC44ODk3IDMwLjA3MzQgNzAuNzEgMzAuMTEwNyA3MC41Mjg1IDMwLjExMDlWMzAuMTA5NlpNODAuMjg2NSAyNS4zOTUyQzc5LjY2MzIgMjUuMzk1MiA3OS4wNTQgMjUuNTg3NCA3OC41MzU4IDI1Ljk0NzRDNzguMDE3NSAyNi4zMDc1IDc3LjYxMzYgMjYuODE5MyA3Ny4zNzUxIDI3LjQxODFDNzcuMTM2NiAyOC4wMTY5IDc3LjA3NDIgMjguNjc1OSA3Ny4xOTU4IDI5LjMxMTVDNzcuMzE3NCAyOS45NDcyIDc3LjYxNzUgMzAuNTMxMSA3OC4wNTgyIDMwLjk4OTRDNzguNDk4OSAzMS40NDc4IDc5LjA2MDQgMzEuNzU5OSA3OS42NzE3IDMxLjg4NjNDODAuMjgzIDMyLjAxMjggODAuOTE2NiAzMS45NDc5IDgxLjQ5MjUgMzEuNjk5OEM4Mi4wNjgzIDMxLjQ1MTggODIuNTYwNCAzMS4wMzE4IDgyLjkwNjcgMzAuNDkyOUM4My4yNTMgMjkuOTUzOSA4My40Mzc4IDI5LjMyMDQgODMuNDM3OCAyOC42NzIyQzgzLjQzNjQgMjcuODAzNSA4My4xMDQgMjYuOTcwOCA4Mi41MTMzIDI2LjM1NjVDODEuOTIyNiAyNS43NDIzIDgxLjEyMTkgMjUuMzk2NiA4MC4yODY1IDI1LjM5NTJaTTgwLjI4NjUgMzAuMTA5NkM4MC4wMTMxIDMwLjEwOTYgNzkuNzQ1OSAzMC4wMjUzIDc5LjUxODYgMjkuODY3M0M3OS4yOTEzIDI5LjcwOTQgNzkuMTE0MiAyOS40ODQ5IDc5LjAwOTUgMjkuMjIyM0M3OC45MDQ5IDI4Ljk1OTYgNzguODc3NSAyOC42NzA2IDc4LjkzMDkgMjguMzkxOEM3OC45ODQyIDI4LjExMyA3OS4xMTU5IDI3Ljg1NjkgNzkuMzA5MiAyNy42NTU5Qzc5LjUwMjUgMjcuNDU0OCA3OS43NDg3IDI3LjMxNzkgODAuMDE2OSAyNy4yNjI1QzgwLjI4NSAyNy4yMDcgODAuNTYyOSAyNy4yMzU1IDgwLjgxNTUgMjcuMzQ0M0M4MS4wNjggMjcuNDUzMSA4MS4yODM5IDI3LjYzNzMgODEuNDM1OCAyNy44NzM3QzgxLjU4NzYgMjguMTEgODEuNjY4NyAyOC4zODc5IDgxLjY2ODcgMjguNjcyMkM4MS42Njg5IDI4Ljg2MTEgODEuNjMzMiAyOS4wNDgxIDgxLjU2MzggMjkuMjIyN0M4MS40OTQ1IDI5LjM5NzIgODEuMzkyNyAyOS41NTU4IDgxLjI2NDMgMjkuNjg5NEM4MS4xMzU5IDI5LjgyMyA4MC45ODM1IDI5LjkyOSA4MC44MTU3IDMwLjAwMTRDODAuNjQ4IDMwLjA3MzcgODAuNDY4MSAzMC4xMTA5IDgwLjI4NjUgMzAuMTEwOVYzMC4xMDk2Wk0xOS44MjI4IDEyLjgwNzFDMjAuMTMxMSAxMy41NjkyIDIwLjI4OTUgMTQuMzg3OCAyMC4yODg2IDE1LjIxNDZWMjQuNjQzNEgxNy4xODE5VjE1LjIxNDZDMTcuMTg3MyAxNC44MjQ4IDE3LjExNjMgMTQuNDM4IDE2Ljk3MzIgMTQuMDc3N0MxNi44MzgzIDEzLjczMTYgMTYuNjM1OSAxMy40MTg0IDE2LjM3ODggMTMuMTU3OEMxNi4xMjc3IDEyLjg5NDUgMTUuODMzOSAxMi42Nzk0IDE1LjUxMDggMTIuNTIyNUMxNS4xNzI2IDEyLjM3MzYgMTQuODA5IDEyLjI5NjggMTQuNDQxNyAxMi4yOTY4QzE0LjA3NDQgMTIuMjk2OCAxMy43MTA4IDEyLjM3MzYgMTMuMzcyNiAxMi41MjI1QzEzLjA0MTIgMTIuNjczMSAxMi43NDA5IDEyLjg4ODggMTIuNDg4MSAxMy4xNTc4QzEyLjIzOTcgMTMuNDI1OCAxMi4wMzg1IDEzLjczNzIgMTEuODkzNyAxNC4wNzc3QzExLjc0OTEgMTQuNDM3NSAxMS42NzggMTQuODI0NyAxMS42ODUgMTUuMjE0NlYyNC42NDM0SDguNjE3N1YxNS4yMTQ2QzguNjIzMTEgMTQuODI0OCA4LjU1MjA4IDE0LjQzOCA4LjQwODk3IDE0LjA3NzdDOC4yNjQwOCAxMy43MzYyIDguMDYyNDUgMTMuNDIzOSA3LjgxMzMzIDEzLjE1NTJDNy41NDQ1MiAxMi45MDM5IDcuMjQxMjYgMTIuNjk1NiA2LjkxMzUxIDEyLjUzNzFDNi41NzUyOCAxMi4zODgxIDYuMjExNzIgMTIuMzExNCA1Ljg0NDQxIDEyLjMxMTRDNS40NzcxMSAxMi4zMTE0IDUuMTEzNTQgMTIuMzg4MSA0Ljc3NTMyIDEyLjUzNzFDNC40NDM5IDEyLjY4NzcgNC4xNDM1NiAxMi45MDM0IDMuODkwNzcgMTMuMTcyNEMzLjY0MjM1IDEzLjQ0MDQgMy40NDExNiAxMy43NTE3IDMuMjk2NCAxNC4wOTIyQzMuMTUxODIgMTQuNDUyMSAzLjA4MDc0IDE0LjgzOTIgMy4wODc2OCAxNS4yMjkxVjI0LjY1OEgyLjgxODk0ZS0wNVYxNS4yMTQ2Qy0wLjAwMjQzMDg5IDE0LjM4NzYgMC4xNTYwMjEgMTMuNTY4NyAwLjQ2NTg0OCAxMi44MDcxQzEuMDUzOTkgMTEuMzMyNyAyLjE2MjQgMTAuMTQ4MyAzLjU2MzY4IDkuNDk2OTJDNC4zMzI3NCA5LjE0NDUxIDUuMTY3NzggOC45NzUxNyA2LjAwNzgyIDkuMDAxMjhDNi44NDc4NyA5LjAyNzM4IDcuNjcxNyA5LjI0ODI3IDguNDE5MTUgOS42NDc4MUM5LjA2NTczIDkuOTk4NjIgOS42NDUwNSAxMC40Njk2IDEwLjEyODQgMTEuMDM3NUMxMC42MTQ3IDEwLjQ3MzEgMTEuMTkyOSAxMC4wMDIyIDExLjgzNjQgOS42NDY0OEMxMi41ODUzIDkuMjQyNjUgMTMuNDEyIDkuMDE5MzkgMTQuMjU1MyA4Ljk5MzI3QzE1LjA5ODUgOC45NjcxNSAxNS45MzY1IDkuMTM4ODQgMTYuNzA3MiA5LjQ5NTZDMTcuMzk4NyA5LjgxNzM2IDE4LjAyNiAxMC4yNzEyIDE4LjU1NjUgMTAuODMzN0MxOS4wOTg2IDExLjM5OSAxOS41Mjg4IDEyLjA2OTUgMTkuODIyOCAxMi44MDcxWk00Ny44OTI5IDkuMTAxMTlINDguMjYzM1YxMi4zNjFINDcuODkyOUM0Ny4yMTczIDEyLjM1MzggNDYuNTQ2NCAxMi40Nzg2IDQ1LjkxNTEgMTIuNzI5QzQ1LjMyMjggMTIuOTYyIDQ0Ljc3NzYgMTMuMzA4MSA0NC4zMDc2IDEzLjc0OTRDNDMuODU5MiAxNC4xNzQ1IDQzLjQ5MzYgMTQuNjg1NCA0My4yMzA5IDE1LjI1NDNDNDIuOTc2IDE1LjgxOSA0Mi44NDU1IDE2LjQzNTcgNDIuODQ5MSAxNy4wNTk2VjI0LjY4MzFIMzkuNjc3NFYxNy4wNTk2QzM5LjY3NTggMTUuOTg1NiAzOS45MDA5IDE0LjkyNDMgNDAuMzM2NyAxMy45NTA2QzQwLjc1OTIgMTIuOTk1NyA0MS4zNjAyIDEyLjEzNzcgNDIuMTA0NSAxMS40MjY2QzQyLjg3MDcgMTAuNzA5NCA0My43NTIxIDEwLjEzNzggNDQuNzA4NiA5LjczNzgxQzQ1LjcxNjEgOS4yOTkyOCA0Ni43OTk1IDkuMDgwNzkgNDcuODkxNyA5LjA5NTg5TDQ3Ljg5MjkgOS4xMDExOVpNNTUuMjA3MyAxNi41OTYzTDYyLjYwMzIgMjQuNjU0SDU4LjE2MzlMNTIuOTA4OCAxOC45Nzg3VjI0LjY2MzJINDkuNzcyOFYyLjkyNjkySDUyLjkwNzVWMTQuMjI4NUw1Ny41Mjc1IDkuMDc4NjlINjEuOTY0M0w1NS4yMDczIDE2LjU5NjNaTTMzLjkwNTYgMTAuODUwOUMzMi43MDQ1IDkuOTI4NDUgMzEuMjUwOSA5LjQzMDMgMjkuNzU3OCA5LjQyOTQyQzI4LjgxMDQgOS40MjIyMiAyNy44NzI3IDkuNjI3NjMgMjcuMDA4NyAxMC4wMzE2QzI1LjI1ODcgMTAuODcyMSAyMy44ODg3IDEyLjM4MzEgMjMuMTg0OCAxNC4yNDkxQzIyLjQ4MDkgMTYuMTE1MiAyMi40OTc1IDE4LjE5MTkgMjMuMjMxMiAyMC4wNDU1QzIzLjU4NDggMjAuOTQzNyAyNC4xMDM2IDIxLjc2MTUgMjQuNzU4NSAyMi40NTNDMjUuNDA0MSAyMy4xMzU0IDI2LjE2NzQgMjMuNjg1NCAyNy4wMDg3IDI0LjA3NDNDMjcuODcyNyAyNC40NzgzIDI4LjgxMDQgMjQuNjgzNyAyOS43NTc4IDI0LjY3NjVDMzEuMjUyMiAyNC42ODQyIDMyLjcwODQgMjQuMTg1MiAzMy45MDU2IDIzLjI1NVYyNC42NTkzSDM2LjkwOTNWOS4wMTExOUgzMy45MDU2VjEwLjg1MDlaTTI5Ljc4OTYgMjEuNjg0QzI4LjkwMzYgMjEuNzEwMyAyOC4wMzAyIDIxLjQ2MTIgMjcuMjgxMSAyMC45Njg0QzI2LjUzMiAyMC40NzU3IDI1Ljk0MTMgMTkuNzYxOCAyNS41ODQ1IDE4LjkxOEMyNS4yMjc3IDE4LjA3NDIgMjUuMTIxMiAxNy4xMzg5IDI1LjI3ODQgMTYuMjMxOEMyNS40MzU2IDE1LjMyNDYgMjUuODQ5NSAxNC40ODY5IDI2LjQ2NzIgMTMuODI1OEMyNy4wODQ4IDEzLjE2NDYgMjcuODc4IDEyLjcxMDEgMjguNzQ1NCAxMi41MjA0QzI5LjYxMjggMTIuMzMwNiAzMC41MTQ5IDEyLjQxNDMgMzEuMzM2MyAxMi43NjA3QzMyLjE1NzcgMTMuMTA3MSAzMi44NjExIDEzLjcwMDQgMzMuMzU2NCAxNC40NjQ4QzMzLjg1MTcgMTUuMjI5MiAzNC4xMTY1IDE2LjEyOTkgMzQuMTE2OSAxNy4wNTE2QzM0LjEzMjUgMTguMjYyMyAzMy42ODU3IDE5LjQyOTkgMzIuODc0NCAyMC4yOTg0QzMyLjA2MzIgMjEuMTY2OSAzMC45NTM3IDIxLjY2NTIgMjkuNzg5NiAyMS42ODRaTTY5LjUzMDcgMTUuOTk5NEM2OS44NzU4IDE1LjY4NjcgNzAuMjczNyAxNS40NDMgNzAuNzA0MSAxNS4yODA3QzcxLjE2MDQgMTUuMDk4NCA3MS42NDU5IDE1LjAwODYgNzIuMTM0NyAxNS4wMTZDNzIuNjIzMyAxNS4wMTAxIDczLjEwODYgMTUuMDk5OSA3My41NjUyIDE1LjI4MDdDNzMuOTkyNiAxNS40NDk1IDc0LjM4OTQgMTUuNjkyNiA3NC43Mzg3IDE1Ljk5OTRDNzUuMDcxIDE2LjI5NCA3NS4zMzk2IDE2LjY1ODQgNzUuNTI2NSAxNy4wNjg4Qzc1LjcxODEgMTcuNDgxNiA3NS44MTc3IDE3LjkzNCA3NS44MTc3IDE4LjM5MjRDNzUuODE3NyAxOC44NTA3IDc1LjcxODEgMTkuMzAzMSA3NS41MjY1IDE5LjcxNTlDNzUuMzM1OCAyMC4xMjg5IDc1LjA2OCAyMC40OTgyIDc0LjczODcgMjAuODAyNUM3NC4zOTAzIDIxLjExNSA3My45OTM1IDIxLjM2MzggNzMuNTY1MiAyMS41Mzg0QzczLjEwODkgMjEuNzIwNyA3Mi42MjM0IDIxLjgxMDUgNzIuMTM0NyAyMS44MDMxQzcxLjY0NjEgMjEuODA5IDcxLjE2MDggMjEuNzE5MiA3MC43MDQxIDIxLjUzODRDNzAuMjcyOCAyMS4zNzAxIDY5Ljg3NSAyMS4xMjA3IDY5LjUzMDcgMjAuODAyNUM2OS4xOTc4IDIwLjUwMTcgNjguOTI5NCAyMC4xMzE1IDY4Ljc0MjggMTkuNzE1OUM2OC41NTEyIDE5LjMwMzEgNjguNDUxNyAxOC44NTA3IDY4LjQ1MTcgMTguMzkyNEM2OC40NTE3IDE3LjkzNCA2OC41NTEyIDE3LjQ4MTYgNjguNzQyOCAxNy4wNjg4QzY4LjkzMDEgMTYuNjU4MyA2OS4xOTkxIDE2LjI5MzggNjkuNTMxOSAxNS45OTk0SDY5LjUzMDdaTTcwLjA2MTQgMTAuMTQ4MUM2OS44OTE0IDkuNzY5MjYgNjkuODQ2NSA5LjM0MjYzIDY5LjkzMzcgOC45MzQ1NEM3MC4wMjEgOC41MjY0NCA3MC4yMzU0IDguMTU5NzUgNzAuNTQzNyA3Ljg5MTQ4QzcwLjc1MTcgNy43MDIzNyA3MC45OTE2IDcuNTU1MTYgNzEuMjUxNCA3LjQ1NzM2QzcxLjUyOTUgNy4zNTA3MSA3MS44MjMgNy4yOTQzMSA3Mi4xMTk0IDcuMjkwNkM3Mi40MTY1IDcuMjg2MDkgNzIuNzExNSA3LjM0Mjc2IDcyLjk4NzQgNy40NTczNkM3My4yNDcxIDcuNTU1MTkgNzMuNDg3MSA3LjcwMjM5IDczLjY5NSA3Ljg5MTQ4QzczLjg5NTEgOC4wNzQyNSA3NC4wNTkgOC4yOTU5IDc0LjE3NzQgOC41NDM5OEM3NC4zNDcgOC45MjMyMyA3NC4zOTEyIDkuMzUwMTQgNzQuMzAzMyA5Ljc1ODI2Qzc0LjIxNTQgMTAuMTY2NCA3NC4wMDAyIDEwLjUzMjggNzMuNjkxMiAxMC44MDA2QzczLjQ4MzMgMTAuOTg5NyA3My4yNDMzIDExLjEzNjkgNzIuOTgzNiAxMS4yMzQ3QzcyLjcwNTUgMTEuMzQxNCA3Mi40MTE5IDExLjM5NzggNzIuMTE1NiAxMS40MDE1QzcxLjgxODQgMTEuNDA3NSA3MS41MjMxIDExLjM1MDggNzEuMjQ3NiAxMS4yMzQ3QzcwLjk4NjEgMTEuMTQwOCA3MC43NDU0IDEwLjk5MzIgNzAuNTM5OSAxMC44MDA2QzcwLjMzNjYgMTAuNjIyIDcwLjE3MzIgMTAuMzk5MyA3MC4wNjE0IDEwLjE0ODFaTTg5Ljg2ODkgNy43MDc1MUw4NS43MDQ1IDIxLjY1MDlDODQuNTQ3NiAyNC42NzY1IDg0LjY4NjMgMjQuNjc2NSA4Mi44NzUyIDI0LjY3NjVINzIuMTUyNUM3My4wNTg4IDI0LjY4MTQgNzMuOTU4MiAyNC41MTEzIDc0LjgwNDkgMjQuMTc0OUM3NS42MDE5IDIzLjg2MzggNzYuMzM3MyAyMy40MDM2IDc2Ljk3NDkgMjIuODE2OUM3Ny41OTAzIDIyLjI2MDMgNzguMDg4MiAyMS41NzcxIDc4LjQzNzIgMjAuODEwNUM3OC43OTAyIDIwLjA0OTQgNzguOTcxNyAxOS4yMTQ4IDc4Ljk2OCAxOC4zNjk5Qzc4Ljk3MDEgMTcuMjQ1NiA3OC42MzkgMTYuMTQ4IDc4LjAxOTggMTUuMjI2NUM3Ny4zOTI4IDE0LjI4NjEgNzYuNTYxMiAxMy41MTI5IDc1LjU5MjcgMTIuOTY5OUM3Ni4xMTg4IDEyLjUzMTYgNzYuNTU0MyAxMS45ODc0IDc2Ljg3MyAxMS4zNjk3Qzc3LjIwODUgMTAuNzQ2MiA3Ny4zODM5IDEwLjA0MzMgNzcuMzgyMSA5LjMyODg0Qzc3LjM4NjkgOC42ODA4OCA3Ny4yNDkzIDguMDQwMzUgNzYuOTggNy40NTYwNEM3Ni43MSA2Ljg3MzAzIDc2LjMzMyA2LjM1MDU3IDc1Ljg3MDEgNS45MTgxQzc1LjM4MzYgNS40NzExOSA3NC44MjMgNS4xMjAwMyA3NC4yMTU2IDQuODgxNzhDNzIuODg3OSA0LjM2ODk0IDcxLjQyNzMgNC4zNjg5NCA3MC4wOTk2IDQuODgxNzhDNjkuNDkwNCA1LjExNjEyIDY4LjkyOTEgNS40Njc2OSA2OC40NDUgNS45MTgxQzY3Ljk3NTcgNi4zNDY3NiA2Ny41OTU0IDYuODcwNTQgNjcuMzI3NiA3LjQ1NzM2QzY3LjA1NjUgOC4wNDEwNiA2Ni45MTg5IDguNjgyMDEgNjYuOTI1NCA5LjMzMDE2QzY2LjkyNjkgMTAuMDMzMyA2Ny4xMDIyIDEwLjcyNDIgNjcuNDM0NSAxMS4zMzY2QzY3Ljc1ODUgMTEuOTU0MyA2OC4xOTAxIDEyLjUwNDEgNjguNzA3MiAxMi45NThDNjcuNzEyMSAxMy40NTkyIDY2Ljg2MyAxNC4yMjY2IDY2LjI0NyAxNS4xODE1QzY1LjYzOTYgMTYuMTE5NSA2NS4zMiAxNy4yMjcxIDY1LjMzMDYgMTguMzU4QzY1LjMyNDkgMTkuMjAzMSA2NS41MDY1IDIwLjAzODIgNjUuODYxNCAyMC43OTg1QzY2LjIxNyAyMS41NjIxIDY2LjcxNTQgMjIuMjQ0MiA2Ny4zMjc2IDIyLjgwNUM2Ny45NzAzIDIzLjM4MzIgNjguNzA0NSAyMy44NDEzIDY5LjQ5NzYgMjQuMTU5QzcwLjM0MzQgMjQuNDk4MyA3MS4yNDMzIDI0LjY2ODUgNzIuMTQ5OSAyNC42NjA2SDY3LjMyNzZDNjcuMDczNiAyNC42NTI4IDY2LjgyOTIgMjQuNTU4NiA2Ni42MzE3IDI0LjM5MjVDNjYuNDM0MiAyNC4yMjYzIDY2LjI5NDYgMjMuOTk3NCA2Ni4yMzQzIDIzLjc0MDdDNjYuMjM0MyAyMy43MjM1IDY2LjIxNzcgMjMuNzIzNSA2Ni4yMTc3IDIzLjcwNzdMNjYuMTgyMSAyMy41ODk5QzY2LjE4MjEgMjMuNTcyNyA2Ni4xNjU2IDIzLjUzOTYgNjYuMTY1NiAyMy41MjI0VjIzLjQ4OTNMNjEuNjcwMyAyLjk2Mzk4SDU3LjkwOTNDNTcuNTY2MyAyLjk1MjU3IDU3LjI0MTcgMi44MDAxMiA1Ny4wMDY3IDIuNTQwMDdDNTYuNzcxNiAyLjI4MDAzIDU2LjY0NTQgMS45MzM2NCA1Ni42NTU3IDEuNTc2OTJDNTYuNjQ5OSAxLjM5OTg1IDU2LjY3NzggMS4yMjMzNCA1Ni43Mzc3IDEuMDU3NDhDNTYuNzk3NiAwLjg5MTYyNCA1Ni44ODg0IDAuNzM5NjgyIDU3LjAwNDggMC42MTAzNTJDNTcuMTIxMyAwLjQ4MTAyMyA1Ny4yNjExIDAuMzc2ODQ1IDU3LjQxNjMgMC4zMDM3ODRDNTcuNTcxNSAwLjIzMDcyMyA1Ny43MzkxIDAuMTkwMjEyIDU3LjkwOTMgMC4xODQ1N0g2Mi45NDE3QzYzLjYzMjggMC4xODQ1NyA2NC4wMzUgMC43NTIzNjQgNjQuMTk1NCAxLjU3MTYzTDY0Ljg1NDYgNC41MTM4NEg4Ny44MTA5Qzg4LjE2OTQgNC41MzI5OCA4OC41MTg2IDQuNjM4ODIgODguODMwOCA0LjgyMjk0Qzg5LjE0MyA1LjAwNzA1IDg5LjQwOTYgNS4yNjQzNyA4OS42MDk0IDUuNTc0NDRDODkuODA5MiA1Ljg4NDUgODkuOTM2NyA2LjIzODc2IDg5Ljk4MTggNi42MDkwNkM5MC4wMjY4IDYuOTc5MzUgODkuOTg4MiA3LjM1NTQ3IDg5Ljg2ODkgNy43MDc1MVpcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjRkNGQ0ZDXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9EaXZOYXZiYXI+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRGl2TmF2YmFyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMjI0MDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIFRhYmxlLFxyXG4gIERyb3Bkb3duVG9nZ2xlLFxyXG4gIERyb3Bkb3duTWVudSxcclxuICBEcm9wZG93bkl0ZW0sXHJcbiAgVW5jb250cm9sbGVkRHJvcGRvd24sXHJcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IHsgRGl2SGVhZGVyVGFibGUsIFRyLCBUaCwgQnV0dG9uUG9zdCB9IGZyb20gXCIuL3N0eWxlXCI7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vLi4vaG9va3MvRGF0YVByb3ZpZGVyXCI7XHJcblxyXG5jb25zdCBUYWJsZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBmaWxlLCBzZXRGaWxlIH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xyXG4gIGNvbnN0IGRhdGEgPSBmaWxlLmRhdGE7XHJcblxyXG4gIGZ1bmN0aW9uIHN1YlN0cmluZyhzdHJpbmcsIG51bWJlcikge1xyXG4gICAgbGV0IHJlc3VsdDtcclxuICAgIGlmIChzdHJpbmcubGVuZ3RoID4gbnVtYmVyKSB7XHJcbiAgICAgIHJlc3VsdCA9IHN0cmluZy5zdWJzdHJpbmcoMCwgbnVtYmVyIC0gMSkgKyBcIi4uLlwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7ZGF0YS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPERpdkhlYWRlclRhYmxlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkLTFcIj57ZGF0YS5sZW5ndGggLSAxfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkLTJcIj5cclxuICAgICAgICAgICAgICBsaXN0aW5ncyBzdWNjZXNzZnVsbHkgYW5kIFJlYWR5IHRvIHB1Ymxpc2hlZFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZC0zXCI+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxOFwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxOFwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE4IDE4XCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNOS41MTU2MiA1LjAxNTYyVjkuMjM0MzhMMTIuOTg0NCAxMS4zNDM4TDEyLjI4MTIgMTIuNTYyNUw4LjAxNTYyIDkuOTg0MzhWNS4wMTU2Mkg5LjUxNTYyWk0xOCA3LjEyNUgxMS4yMDMxTDEzLjk2ODggNC4zMTI1QzEyLjU5MzggMi45Mzc1IDEwLjkzNzUgMi4yNSA5IDIuMjVDNy4wOTM3NSAyLjIxODc1IDUuNDUzMTIgMi44NzUgNC4wNzgxMiA0LjIxODc1QzIuNzM0MzggNS41OTM3NSAyLjA2MjUgNy4yMTg3NSAyLjA2MjUgOS4wOTM3NUMyLjA2MjUgMTAuOTY4OCAyLjczNDM4IDEyLjU5MzggNC4wNzgxMiAxMy45Njg4QzUuNDIxODggMTUuMzQzOCA3LjA2MjUgMTYuMDMxMiA5IDE2LjAzMTJDMTAuOTM3NSAxNi4wMzEyIDEyLjU5MzggMTUuMzQzOCAxMy45Njg4IDEzLjk2ODhDMTUuMzEyNSAxMi42MjUgMTUuOTg0NCAxMSAxNS45ODQ0IDkuMDkzNzVIMThDMTggMTEuNTYyNSAxNy4xMjUgMTMuNjU2MiAxNS4zNzUgMTUuMzc1QzEzLjYyNSAxNy4xMjUgMTEuNSAxOCA5IDE4QzYuNSAxOCA0LjM3NSAxNy4xMjUgMi42MjUgMTUuMzc1QzAuODc1IDEzLjY1NjIgMCAxMS41NzgxIDAgOS4xNDA2MkMwIDYuNjcxODggMC44NzUgNC41NjI1IDIuNjI1IDIuODEyNUM0LjM3NSAxLjA2MjUgNi40ODQzOCAwLjE4NzUgOC45NTMxMiAwLjE4NzVDMTEuNDIxOSAwLjE4NzUgMTMuNTMxMiAxLjA2MjUgMTUuMjgxMiAyLjgxMjVMMTggMFY3LjEyNVpcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiIzAwODlGRlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICZuYnNwOyZuYnNwO1VwZGF0ZSBkYXRhXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkLTRcIj5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjE4XCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjE4XCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTggMThcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZD1cIk05IDYuOTg0MzhMMTIuOTg0NCAxMS4wMTU2SDkuOTg0MzhWMTcuMDE1Nkg4LjAxNTYyVjExLjAxNTZINS4wMTU2Mkw5IDYuOTg0MzhaTTE1Ljk4NDQgMC45ODQzNzVDMTYuNTQ2OSAwLjk4NDM3NSAxNy4wMTU2IDEuMTg3NSAxNy4zOTA2IDEuNTkzNzVDMTcuNzk2OSAyIDE4IDIuNDY4NzUgMTggM1YxNUMxOCAxNS41MzEyIDE3Ljc5NjkgMTYgMTcuMzkwNiAxNi40MDYyQzE2Ljk4NDQgMTYuODEyNSAxNi41MTU2IDE3LjAxNTYgMTUuOTg0NCAxNy4wMTU2SDEyVjE1SDE1Ljk4NDRWNS4wMTU2MkgyLjAxNTYyVjE1SDZWMTcuMDE1NkgyLjAxNTYyQzEuNDUzMTIgMTcuMDE1NiAwLjk2ODc1IDE2LjgxMjUgMC41NjI1IDE2LjQwNjJDMC4xODc1IDE2IDAgMTUuNTMxMiAwIDE1VjNDMCAyLjQ2ODc1IDAuMTg3NSAyIDAuNTYyNSAxLjU5Mzc1QzAuOTY4NzUgMS4xODc1IDEuNDUzMTIgMC45ODQzNzUgMi4wMTU2MiAwLjk4NDM3NUgxNS45ODQ0WlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjQTZBQUI0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkLTVcIj5QdWJsaXNoZWQ8L2Rpdj5cclxuICAgICAgICAgIDwvRGl2SGVhZGVyVGFibGU+XHJcbiAgICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZT5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkNPTkRPIE5BTUU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlJFTlQgUFJJQ0UgKEJhaHQpPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5TRUxMIFBSSUNFIChCYWh0KTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+QkVEUk9PTTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+QkFUSFJPT008L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlNJWkUgKHNxbS4pPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5GTE9PUiA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlNUQVRVUyA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlBIT1RPIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+VElUTEUgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5ERVNDUklQVElPTiA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkJFTkVGSVQgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5BbWVuaXRpZXMgPC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAge2RhdGEubWFwKChmaWxlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0geyAuLi5maWxlIH07XHJcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBvYmplY3RbXCIwXCJdO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBzdWJTdHJpbmcob2JqZWN0W1wiMVwiXSwgMjApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhdGVfcHJpY2UgPSBvYmplY3RbXCIyXCJdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNhbGVfcHJpY2UgPSBvYmplY3RbXCIzXCJdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJhZF9yb29tID0gb2JqZWN0W1wiNFwiXTtcclxuICAgICAgICAgICAgICAgIGxldCBiYXRoID0gb2JqZWN0W1wiNVwiXTtcclxuICAgICAgICAgICAgICAgIGxldCBzaXplID0gb2JqZWN0W1wiNlwiXTtcclxuICAgICAgICAgICAgICAgIGxldCBmbG9vciA9IG9iamVjdFtcIjdcIl07XHJcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBzdWJTdHJpbmcob2JqZWN0W1wiOFwiXSwgMjApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gc3ViU3RyaW5nKG9iamVjdFtcIjlcIl0sIDIwKTtcclxuICAgICAgICAgICAgICAgIGxldCBwaG90byA9IG9iamVjdFtcIjEwXCJdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFnZW5fcG9zdCA9IG9iamVjdFtcIjExXCJdID8gKFxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uUG9zdCBwb3N0PVwidHJ1ZVwiIGNvbG9yPVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIEFnZW50IHBvc3RcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b25Qb3N0PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGxldCBhY2NlcHRfYWdlbnQgPSBvYmplY3RbXCIxMlwiXSA/IChcclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblBvc3QgY29sb3I9XCJ3YXJuaW5nXCI+4Lij4Lix4LiaIENvLUFnZW50PC9CdXR0b25Qb3N0PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGxldCBhaXJfY29uID0gb2JqZWN0W1wiMTNcIl0gPyBcIkFpciBjb25kaXRpb25cIiA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmF0aF90dWIgPSBvYmplY3RbXCIxNFwiXSA/IFwiQmF0aCBUdWJcIiA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlY3RyaWNfc3RvdmUgPSBvYmplY3RbXCIxNVwiXSA/IFwiRWxlY3RyaWMgU3RvdmVcIiA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBsZXQgZnVybml0dXJlID0gb2JqZWN0W1wiMTZcIl0gPyBcIkZ1cm5pdHVyZVwiIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGxldCBnYXNfc3RvdmUgPSBvYmplY3RbXCIxN1wiXSA/IFwiR2FzIFN0b3ZlXCIgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlZnJpZ2VyYXRvciA9IG9iamVjdFtcIjE4XCJdID8gXCJSZWZyaWdlcmF0b3JcIiA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2FzaGluZ19tYWNoaW5lID0gb2JqZWN0W1wiMTlcIl0gPyBcIldhc2hpbmcgTWFjaGluZVwiIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGxldCB3YXRlcl9oZWF0ZXIgPSBvYmplY3RbXCIyMFwiXSA/IFwiV2F0ZXIgSGVhdGVyXCIgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhbWVuaXRpZXNfbWVudXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgIGFpcl9jb24sXHJcbiAgICAgICAgICAgICAgICAgIGJhdGhfdHViLFxyXG4gICAgICAgICAgICAgICAgICBlbGVjdHJpY19zdG92ZSxcclxuICAgICAgICAgICAgICAgICAgZnVybml0dXJlLFxyXG4gICAgICAgICAgICAgICAgICBnYXNfc3RvdmUsXHJcbiAgICAgICAgICAgICAgICAgIHJlZnJpZ2VyYXRvcixcclxuICAgICAgICAgICAgICAgICAgd2FzaGluZ19tYWNoaW5lLFxyXG4gICAgICAgICAgICAgICAgICB3YXRlcl9oZWF0ZXIsXHJcbiAgICAgICAgICAgICAgICBdLmZpbHRlcigoeCkgPT4geCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUciBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaCBzY29wZT1cInJvd1wiIHZhbHVlPXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2lkID8gaWQgOiBcIm5vdGZvdW5kXCJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UaD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaCB2YWx1ZT17bmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntuYW1lID8gbmFtZSA6IFwibm90Zm91bmRcIn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRoIHZhbHVlPXtyYXRlX3ByaWNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3JhdGVfcHJpY2UgPyByYXRlX3ByaWNlIDogXCJub3Rmb3VuZFwifTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGggdmFsdWU9e3NhbGVfcHJpY2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2FsZV9wcmljZSA/IHNhbGVfcHJpY2UgOiBcIm5vdGZvdW5kXCJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UaD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaCB2YWx1ZT17YmFkX3Jvb219PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YmFkX3Jvb20gPyBiYWRfcm9vbSA6IFwibm90Zm91bmRcIn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRoIHZhbHVlPXtiYXRofT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2JhdGggPyBiYXRoIDogXCJub3Rmb3VuZFwifTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGggdmFsdWU9e3NpemV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2l6ZSA/IHNpemUgOiBcIm5vdGZvdW5kXCJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UaD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaCB2YWx1ZT17Zmxvb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Zmxvb3IgPyBmbG9vciA6IFwibm90Zm91bmRcIn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YWdlbl9wb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YWNjZXB0X2FnZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UaD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake3Bob3RvfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake3Bob3RvfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake3Bob3RvfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake3Bob3RvfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJlZGl0LXBob3RvXCI+RWRpdCBwaG90bzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGggdmFsdWU9e3RpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RpdGxlID8gdGl0bGUgOiBcIm5vdGZvdW5kXCJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UaD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaCB2YWx1ZT17ZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkZXNjcmlwdGlvbiA/IGRlc2NyaXB0aW9uIDogXCJub3Rmb3VuZFwifTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGg+LTwvVGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthbWVuaXRpZXNfbWVudXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkRHJvcGRvd24gc2V0QWN0aXZlRnJvbUNoaWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZz1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbWVuaXRpZXNfbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0PXthbWVuaXRpZXNfbWVudXMubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FtZW5pdGllc19tZW51cy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudSByaWdodCBjbGFzc05hbWU9XCJkcm9wZG93bl9tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthbWVuaXRpZXNfbWVudXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkFtZW5pdGllczwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YW1lbml0aWVzX21lbnVzLm1hcCgobWVudSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPD57YW1lbml0aWVzX21lbnVzLmxlbmd0aH08Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ucj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVzO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tIFwiLi4vLi4vYXNzZXRzL3N0eWxlcy9kZXZpY2VcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBEaXZIZWFkZXJUYWJsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIEBtZWRpYSAke2RldmljZS5tb2JpbGVMfSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB9XHJcblxyXG4gIC5jaGlsZC0xIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmNWY4O1xyXG4gICAgd2lkdGg6IDgzcHg7XHJcbiAgICBoZWlnaHQ6IDg4cHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgfVxyXG5cclxuICAuY2hpbGQtMiB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBAbWVkaWEgJHtkZXZpY2UubGFwdG9wfSB7XHJcbiAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2hpbGQtMyB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDg5ZmY7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgQG1lZGlhICR7ZGV2aWNlLm1vYmlsZUx9IHtcclxuICAgICAgd2lkdGg6IDEwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jaGlsZC00IHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwODlmZjtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBAbWVkaWEgJHtkZXZpY2UubW9iaWxlTH0ge1xyXG4gICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNoaWxkLTUge1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDA4OWZmO1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIEBtZWRpYSAke2RldmljZS5tb2JpbGVMfSB7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyID0gc3R5bGVkLnRyYFxyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaCA9IHN0eWxlZC50aGBcclxuICAuYW1lbml0aWVzX21lbnUge1xyXG4gICAgY29sb3I6ICMwMDIyNDA7XHJcbiAgfVxyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bjphY3RpdmUgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiAoIXByb3BzLnZhbHVlID8gXCIjRUI1NzU3XCIgOiBcIiMwMDIyNDBcIil9O1xyXG4gIH1cclxuXHJcbiAgLmRpdi1pbWcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2Utb3V0O1xyXG5cclxuICAgIC5lZGl0LXBob3RvIHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICBjb2xvcjogIzAwODlmZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG5cclxuICAgICAgLmVkaXQtcGhvdG8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uUG9zdCA9IHN0eWxlZChCdXR0b24pYFxyXG4gIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PlxyXG4gICAgcHJvcHMucG9zdCA/IFwicmdiYSgxMTEsIDIwNywgMTUxLCAwLjI0KVwiIDogXCJyZ2JhKDI0MywgMjA4LCA4MywgMC4yOClcIn07XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICBjb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy5wb3N0ID8gXCIjNmZjZjk3XCIgOiBcIiNGMkM5NEM7XCIpfTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT5cclxuICAgICAgcHJvcHMucG9zdCA/IFwicmdiYSgxMTEsIDIwNywgMTUxLCAwLjI0KVwiIDogXCJyZ2JhKDI0MywgMjA4LCA4MywgMC4yOClcIn07XHJcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy5wb3N0ID8gXCIjNmZjZjk3XCIgOiBcIiNGMkM5NEM7XCIpfTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgbGV0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKHsgbmFtZTogXCJcIiwgZGF0YTogW10gfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGZpbGUsIHNldEZpbGUgfX0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgICAvLyB0aGlzIGlzIHRoZSBzaGFyZWQgc3R5bGVcclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEJhc2ljTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2ljTGF5b3V0O1xyXG4iLCJpbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuaW1wb3J0IEJhc2ljTGF5b3V0IGZyb20gXCIuLi9sYXlvdXRzL0Jhc2ljXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBJbnB1dFVwbG9hZCBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnB1dFVwbG9hZFwiO1xyXG5pbXBvcnQgVGFibGVzIGZyb20gXCIuLi9jb21wb25lbnRzL1RhYmxlc1wiO1xyXG5pbXBvcnQgeyBDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiLi4vaG9va3MvRGF0YVByb3ZpZGVyXCI7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPEhlYWRlciAvPlxyXG4gICAgPEJhc2ljTGF5b3V0PlxyXG4gICAgICA8TmF2YmFyIC8+XHJcbiAgICAgIDxDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgPElucHV0VXBsb2FkIC8+XHJcbiAgICAgICAgPFRhYmxlcyAvPlxyXG4gICAgICA8L0NvbnRleHRQcm92aWRlcj5cclxuICAgIDwvQmFzaWNMYXlvdXQ+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNzdi1yZWFkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9