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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loadPage */ \"./src/modules/loadPage.js\");\n\r\n\r\n(0,_modules_loadPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://slideshow/./src/index.js?");

/***/ }),

/***/ "./src/modules/loadPage.js":
/*!*********************************!*\
  !*** ./src/modules/loadPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainContent */ \"./src/modules/mainContent.js\");\n\r\n\r\nfunction getHeader() {\r\n  const header = document.createElement('header');\r\n  const headerTitle = document.createElement('h1');\r\n\r\n  headerTitle.innerHTML = 'Carousel';\r\n  header.appendChild(headerTitle);\r\n\r\n  return header;\r\n}\r\n\r\nfunction getMain() {\r\n  const main = document.createElement('main');\r\n\r\n  main.append((0,_mainContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n\r\n  return main;\r\n}\r\n\r\nfunction getFooter() {\r\n  const footer = document.createElement('footer');\r\n  const p = document.createElement('p');\r\n  const githubLink = document.createElement('a');\r\n  const githubLogo = document.createElement('i');\r\n\r\n  p.innerHTML = 'Copyright © 2022 crisxchan';\r\n\r\n  githubLink.href = 'https://github.com/crisxchan';\r\n  githubLink.target = '_blank';\r\n\r\n  githubLogo.classList.add('fa-brands', 'fa-github', 'ghlogo');\r\n\r\n  githubLink.append(githubLogo);\r\n\r\n  footer.append(p, githubLink);\r\n\r\n  return footer;\r\n}\r\n\r\nfunction loadPage() {\r\n  const body = document.querySelector('body');\r\n\r\n  body.append(getHeader(), getMain(), getFooter());\r\n}\r\n\n\n//# sourceURL=webpack://slideshow/./src/modules/loadPage.js?");

/***/ }),

/***/ "./src/modules/mainContent.js":
/*!************************************!*\
  !*** ./src/modules/mainContent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMainContent)\n/* harmony export */ });\nfunction loadImage() {\r\n  const imagesWrapper = document.createElement('ul');\r\n  imagesWrapper.classList.add('image-wrapper');\r\n\r\n  for (let i = 0; i < 3; i += 1) {\r\n    const imgFrame = document.createElement('li');\r\n    imgFrame.classList.add('image-frame');\r\n    imgFrame.dataset.id = i + 1;\r\n    if (i === 1) imgFrame.dataset.active = true;\r\n    else imgFrame.dataset.active = false;\r\n\r\n    const img = document.createElement('div');\r\n    img.innerHTML = i + 1;\r\n\r\n    imgFrame.append(img);\r\n\r\n    imagesWrapper.append(imgFrame);\r\n  }\r\n\r\n  return imagesWrapper;\r\n}\r\n\r\nfunction imgSlide(direction) {\r\n  const offset = (direction === 'left') ? -1 : 1;\r\n\r\n  const imgWrapper = document.querySelector('.image-wrapper');\r\n  const activeImage = document.querySelector('[data-active=true]');\r\n  let newImageIndex = [...imgWrapper.children].indexOf(activeImage) + offset;\r\n  let leftSiblingIndex = newImageIndex - 1;\r\n  let rightSiblingIndex = newImageIndex + 1;\r\n\r\n  if (rightSiblingIndex >= [...imgWrapper.children].length) rightSiblingIndex = 0;\r\n  if (rightSiblingIndex < 0) rightSiblingIndex = [...imgWrapper.children].length - 1;\r\n\r\n  if (leftSiblingIndex >= [...imgWrapper.children].length) leftSiblingIndex = 0;\r\n  if (leftSiblingIndex < 0) leftSiblingIndex = [...imgWrapper.children].length - 1;\r\n\r\n  if (newImageIndex >= [...imgWrapper.children].length) {\r\n    newImageIndex = 0;\r\n    leftSiblingIndex = [...imgWrapper.children].length - 1;\r\n    rightSiblingIndex = 1;\r\n  }\r\n  if (newImageIndex < 0) {\r\n    newImageIndex = [...imgWrapper.children].length - 1;\r\n    leftSiblingIndex = 0;\r\n    rightSiblingIndex = 1;\r\n  }\r\n\r\n  // set center\r\n  [...imgWrapper.children][newImageIndex].dataset.active = true;\r\n  [...imgWrapper.children][newImageIndex].style.gridArea = 'center';\r\n\r\n  // set sides\r\n  activeImage.dataset.active = false;\r\n  [...imgWrapper.children][leftSiblingIndex].style.gridArea = 'left';\r\n  [...imgWrapper.children][rightSiblingIndex].style.gridArea = 'right';\r\n}\r\n\r\nfunction loadButton(side) {\r\n  const btn = document.createElement('button');\r\n  btn.classList.add(side);\r\n\r\n  btn.innerHTML = side === 'left' ? '&#8592' : '&#8594';\r\n\r\n  btn.addEventListener('click', imgSlide.bind(this, side));\r\n  return btn;\r\n}\r\n\r\nfunction loadMainContent() {\r\n  const carouselWrapper = document.createElement('div');\r\n\r\n  const leftBtn = loadButton('left');\r\n\r\n  const images = loadImage();\r\n\r\n  const rightBtn = loadButton('right');\r\n\r\n  carouselWrapper.append(leftBtn, images, rightBtn);\r\n\r\n  return carouselWrapper;\r\n}\r\n\r\nfunction getMainContent() {\r\n  const main = document.createElement('main');\r\n\r\n  main.appendChild(loadMainContent());\r\n\r\n  return main;\r\n}\r\n\n\n//# sourceURL=webpack://slideshow/./src/modules/mainContent.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;