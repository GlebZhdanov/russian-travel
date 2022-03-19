/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/script.js":
/*!*****************************!*\
  !*** ./src/pages/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/pages/index.css\");\nvar englishButton = document.querySelector('.header__lang-link_en');\nvar russiaButton = document.querySelector('.header__lang-link_ru');\nvar englishLanguage = document.querySelectorAll('.language_en');\nvar russiaLanguage = document.querySelectorAll('.language_ru');\n\n\nfunction switchLanguageButton(a, b) {\n  b.classList.remove('header__lang-link_underline');\n  a.classList.add('header__lang-link_underline');\n}\n\n;\n\nfunction checkLanguage(a, selector) {\n  a.forEach(function (i) {\n    return i.classList.add(selector);\n  });\n}\n\nfunction hiddenLanguage(a) {\n  a.forEach(function (i) {\n    return i.classList.remove('language_on');\n  });\n}\n\nenglishButton.addEventListener('click', function () {\n  switchLanguageButton(englishButton, russiaButton);\n  checkLanguage(russiaLanguage, 'language_none');\n  checkLanguage(englishLanguage, 'language_on');\n  hiddenLanguage(russiaLanguage);\n});\nrussiaButton.addEventListener('click', function () {\n  switchLanguageButton(russiaButton, englishButton);\n  hiddenLanguage(englishLanguage);\n  checkLanguage(englishLanguage, 'language_none');\n  checkLanguage(russiaLanguage, 'language_on');\n});\n\n//# sourceURL=webpack://russian-travel/./src/pages/script.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://russian-travel/./src/pages/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/script.js");
/******/ 	
/******/ })()
;