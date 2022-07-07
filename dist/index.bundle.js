"use strict";
(self["webpackChunkto_do_list_pj"] = self["webpackChunkto_do_list_pj"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=MuseoModerno:wght@900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=MuseoModerno:wght@900&family=Rubik+Moonrocks&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: content-box;\r\n}\r\n\r\n:root {\r\n  --background: linear-gradient(-45deg, #e99dcb 0%, #8099e9 100%);\r\n}\r\n\r\nbody {\r\n  background: var(--background);\r\n  background-image: url(https://uploads-ssl.webflow.com/5ec207a448d573153616868a/60e32be008c579f222f1788a_Mesh%2050.jpg);\r\n  background-size: cover;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.box::before {\r\n  content: \"\";\r\n  z-index: -1;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background: #2c0570;\r\n  transform: translate3d(26px, 26px, 0) scale(1);\r\n  filter: blur(7px);\r\n  opacity: 1;\r\n  transition: opacity 0.3s;\r\n  border-radius: inherit;\r\n}\r\n\r\n/*\r\n* Prevents issues when the parent creates a\r\n* stacking context. (For example, using the transform\r\n* property )\r\n*/\r\n.box::after {\r\n  content: \"\";\r\n  z-index: -1;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background: inherit;\r\n  border-radius: inherit;\r\n}\r\n\r\n\r\n/* container */\r\n\r\n.todo-container {\r\n  position: relative;\r\n  background: #fff;\r\n  width: 70%;\r\n  height: 80%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  border-radius: 8px;\r\n}\r\n\r\n.todo-container > * {\r\n  width: 100%;\r\n  padding: 15px;\r\n  border-bottom: 1px solid #aaa;\r\n}\r\n\r\n/* title container */\r\n.title-todo {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.todo-title {\r\n  font-family: 'Rubik Moonrocks', cursive;\r\n  letter-spacing: 0.1em;\r\n  font-size: 1.8em;\r\n  font-weight: 900;\r\n  text-transform: uppercase;\r\n  color: rgba(156, 72, 234, 1);\r\n  background: linear-gradient(45deg, rgba(156, 72, 234, 1) 0%, rgba(143, 31, 229, 1) 37%, rgba(66, 131, 138, 1) 79%, rgba(66, 131, 138, 1) 100%) left;\r\n  background-clip: border-box;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.reset-icon {\r\n  height: 24px;\r\n}\r\n\r\n/* form container */\r\n\r\n.form-todo {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.form-todo .input-form {\r\n  width: 70%;\r\n  border: none;\r\n  outline: none;\r\n  padding: 3px;\r\n}\r\n\r\n/* list container */\r\n\r\n.list-container {\r\n  border: none;\r\n  list-style: none;\r\n  padding: 0;\r\n  max-height: 350px;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.list-container > * {\r\n  border-bottom: 1px solid #aaa;\r\n  padding: 10px 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.task-container.completed {\r\n  background: rgba(110, 214, 75, 0.3);\r\n}\r\n\r\n.task-container.incorrect {\r\n  background: rgba(214, 75, 96, 0.3);\r\n}\r\n\r\n.task-container.edit {\r\n  background: rgba(191, 214, 75, 0.5);\r\n}\r\n\r\n.task-container .input {\r\n  width: 75%;\r\n  border: none;\r\n  outline: none;\r\n  background: transparent;\r\n  border-radius: 8px;\r\n}\r\n\r\n.task-container.completed > .input {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.task-container .input.active {\r\n  width: 75%;\r\n}\r\n\r\n/* clear all container */\r\n.btn-container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.clear-btn {\r\n  font-weight: 600;\r\n  text-transform: capitalize;\r\n  font-size: 1.3em;\r\n  border: none;\r\n  background: linear-gradient(45deg, rgba(156, 72, 234, 1) 0%, rgba(143, 31, 229, 1) 37%, rgba(66, 131, 138, 1) 79%, rgba(66, 131, 138, 1) 100%) left;\r\n  background-clip: border-box;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.clear-btn:focus,\r\n.clear-btn:active {\r\n  animation: btn-animation 0.3s;\r\n}\r\n\r\n@keyframes btn-animation {\r\n  50% {\r\n    transform: scale(0.9);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .todo-container {\r\n    width: 45%;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,SAAS;EACT,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,+DAA+D;AACjE;;AAEA;EACE,6BAA6B;EAC7B,sHAAsH;EACtH,sBAAsB;EACtB,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,mBAAmB;EACnB,8CAA8C;EAC9C,iBAAiB;EACjB,UAAU;EACV,wBAAwB;EACxB,sBAAsB;AACxB;;AAEA;;;;CAIC;AACD;EACE,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,mBAAmB;EACnB,sBAAsB;AACxB;;;AAGA,cAAc;;AAEd;EACE,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;EACV,WAAW;EACX,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;AAEA,oBAAoB;AACpB;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,uCAAuC;EACvC,qBAAqB;EACrB,gBAAgB;EAChB,gBAAgB;EAChB,yBAAyB;EACzB,4BAA4B;EAC5B,mJAAmJ;EACnJ,2BAA2B;EAC3B,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA;EACE,YAAY;AACd;;AAEA,mBAAmB;;AAEnB;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,YAAY;AACd;;AAEA,mBAAmB;;AAEnB;EACE,YAAY;EACZ,gBAAgB;EAChB,UAAU;EACV,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,UAAU;AACZ;;AAEA,wBAAwB;AACxB;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,0BAA0B;EAC1B,gBAAgB;EAChB,YAAY;EACZ,mJAAmJ;EACnJ,2BAA2B;EAC3B,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA;;EAEE,6BAA6B;AAC/B;;AAEA;EACE;IACE,qBAAqB;EACvB;;EAEA;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=MuseoModerno:wght@900&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=MuseoModerno:wght@900&family=Rubik+Moonrocks&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: content-box;\r\n}\r\n\r\n:root {\r\n  --background: linear-gradient(-45deg, #e99dcb 0%, #8099e9 100%);\r\n}\r\n\r\nbody {\r\n  background: var(--background);\r\n  background-image: url(https://uploads-ssl.webflow.com/5ec207a448d573153616868a/60e32be008c579f222f1788a_Mesh%2050.jpg);\r\n  background-size: cover;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.box::before {\r\n  content: \"\";\r\n  z-index: -1;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background: #2c0570;\r\n  transform: translate3d(26px, 26px, 0) scale(1);\r\n  filter: blur(7px);\r\n  opacity: 1;\r\n  transition: opacity 0.3s;\r\n  border-radius: inherit;\r\n}\r\n\r\n/*\r\n* Prevents issues when the parent creates a\r\n* stacking context. (For example, using the transform\r\n* property )\r\n*/\r\n.box::after {\r\n  content: \"\";\r\n  z-index: -1;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background: inherit;\r\n  border-radius: inherit;\r\n}\r\n\r\n\r\n/* container */\r\n\r\n.todo-container {\r\n  position: relative;\r\n  background: #fff;\r\n  width: 70%;\r\n  height: 80%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  border-radius: 8px;\r\n}\r\n\r\n.todo-container > * {\r\n  width: 100%;\r\n  padding: 15px;\r\n  border-bottom: 1px solid #aaa;\r\n}\r\n\r\n/* title container */\r\n.title-todo {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.todo-title {\r\n  font-family: 'Rubik Moonrocks', cursive;\r\n  letter-spacing: 0.1em;\r\n  font-size: 1.8em;\r\n  font-weight: 900;\r\n  text-transform: uppercase;\r\n  color: rgba(156, 72, 234, 1);\r\n  background: linear-gradient(45deg, rgba(156, 72, 234, 1) 0%, rgba(143, 31, 229, 1) 37%, rgba(66, 131, 138, 1) 79%, rgba(66, 131, 138, 1) 100%) left;\r\n  background-clip: border-box;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.reset-icon {\r\n  height: 24px;\r\n}\r\n\r\n/* form container */\r\n\r\n.form-todo {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.form-todo .input-form {\r\n  width: 70%;\r\n  border: none;\r\n  outline: none;\r\n  padding: 3px;\r\n}\r\n\r\n/* list container */\r\n\r\n.list-container {\r\n  border: none;\r\n  list-style: none;\r\n  padding: 0;\r\n  max-height: 350px;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.list-container > * {\r\n  border-bottom: 1px solid #aaa;\r\n  padding: 10px 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.task-container.completed {\r\n  background: rgba(110, 214, 75, 0.3);\r\n}\r\n\r\n.task-container.incorrect {\r\n  background: rgba(214, 75, 96, 0.3);\r\n}\r\n\r\n.task-container.edit {\r\n  background: rgba(191, 214, 75, 0.5);\r\n}\r\n\r\n.task-container .input {\r\n  width: 75%;\r\n  border: none;\r\n  outline: none;\r\n  background: transparent;\r\n  border-radius: 8px;\r\n}\r\n\r\n.task-container.completed > .input {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.task-container .input.active {\r\n  width: 75%;\r\n}\r\n\r\n/* clear all container */\r\n.btn-container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.clear-btn {\r\n  font-weight: 600;\r\n  text-transform: capitalize;\r\n  font-size: 1.3em;\r\n  border: none;\r\n  background: linear-gradient(45deg, rgba(156, 72, 234, 1) 0%, rgba(143, 31, 229, 1) 37%, rgba(66, 131, 138, 1) 79%, rgba(66, 131, 138, 1) 100%) left;\r\n  background-clip: border-box;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.clear-btn:focus,\r\n.clear-btn:active {\r\n  animation: btn-animation 0.3s;\r\n}\r\n\r\n@keyframes btn-animation {\r\n  50% {\r\n    transform: scale(0.9);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .todo-container {\r\n    width: 45%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_addFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addFunction.js */ "./src/modules/addFunction.js");
/* harmony import */ var _modules_list_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/list-data.js */ "./src/modules/list-data.js");
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/storage.js */ "./src/modules/storage.js");
/* harmony import */ var _modules_createLi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/createLi.js */ "./src/modules/createLi.js");
/* harmony import */ var _modules_removeFunction_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/removeFunction.js */ "./src/modules/removeFunction.js");
// -------------------------imports -----------------------------------//








// --------------------------variables--------------------------------//
const input = document.querySelector('.input-form');
const clearInput = document.querySelector('.undo-btn');
const clearbtn = document.querySelector('.clear-btn');
const reset = document.querySelector('.reset-icon');

// event listeners

input.addEventListener('keypress', (e) => {
  if (input.value.trim() === '') {
    return null;
  } if (e.key === 'Enter') {
    e.preventDefault();
    (0,_modules_addFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e);
    input.value = '';
  }
  return null;
});

clearInput.addEventListener('click', () => {
  input.value = '';
});

clearbtn.addEventListener('click', () => {
  const completedItems = _modules_list_data_js__WEBPACK_IMPORTED_MODULE_2__["default"].filter((item) => item.completed === true);
  completedItems.forEach((element) => {
    (0,_modules_removeFunction_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element);
  });
});

reset.addEventListener('click', () => {
  _modules_list_data_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach((element) => {
    element.completed = true;
  });
  const completedItems = _modules_list_data_js__WEBPACK_IMPORTED_MODULE_2__["default"].filter((item) => item.completed === true);
  completedItems.forEach((element) => {
    (0,_modules_removeFunction_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element);
  });
});

window.addEventListener('load', () => {
  _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__["default"].getStorage(_modules_list_data_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
  _modules_list_data_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach((child) => {
    (0,_modules_createLi_js__WEBPACK_IMPORTED_MODULE_4__["default"])(child);
  });
});


/***/ }),

/***/ "./src/modules/addFunction.js":
/*!************************************!*\
  !*** ./src/modules/addFunction.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createLi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createLi.js */ "./src/modules/createLi.js");
/* harmony import */ var _list_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-data.js */ "./src/modules/list-data.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");
// --------------------------imports--------------------------------//





// --------------------------functions--------------------------------//

const addList = (event) => {
  const data = {
    description: event.target.value,
    completed: false,
    index: _list_data_js__WEBPACK_IMPORTED_MODULE_1__["default"].length + 1,
  };
  (0,_createLi_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
  _list_data_js__WEBPACK_IMPORTED_MODULE_1__["default"].push(data);
  _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].setStorage(_list_data_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addList);

/***/ }),

/***/ "./src/modules/cbFunction.js":
/*!***********************************!*\
  !*** ./src/modules/cbFunction.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// --------------------------functions--------------------------------//

const checkfunction = (li, index) => {
  li.classList.toggle('completed');
  li.classList.remove('incorrect');
  if (index.completed === false) {
    index.completed = true;
  } else {
    index.completed = false;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkfunction);

/***/ }),

/***/ "./src/modules/createLi.js":
/*!*********************************!*\
  !*** ./src/modules/createLi.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cbFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cbFunction.js */ "./src/modules/cbFunction.js");
/* harmony import */ var _editFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editFunction.js */ "./src/modules/editFunction.js");
/* harmony import */ var _removeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeFunction.js */ "./src/modules/removeFunction.js");
// --------------------------imports--------------------------------//





// --------------------------functions--------------------------------//

const createLi = (index) => {
  // select ul
  const ul = document.querySelector('.list-container');
  // create li
  const li = document.createElement('li');
  li.classList.add('task-container');
  // create input
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  // create span
  const input = document.createElement('input');
  input.classList.add('input');
  input.setAttribute('readonly', true);
  input.value = `${index.description}`;
  // create icon
  const thrashIcon = document.createElement('img');
  thrashIcon.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAL9JREFUSEvtlc0NwjAMhV8mYQRgE07OGjABrBOfOgpsUCYxqtRKoU3tkDTi0tyi/Hzv2UqeQ+PhGt8PFRBCuDjn7gBOK0J6Ebl577s1oSqAmXsAB8Plk4jOpQAZDhJRUggzq+vDWcvBtoBJUW3jY8dfDpoDJuU5tY1davuLm7cpYK7QmsfwLAfWhdUl2gGLd/VrSfYemF9TdYksQgkgJ2jm3BcRLZIv+ZLHqHwAOFrqx/W3iFxT0fnf0M9Ur277APlk1BlhQ27RAAAAAElFTkSuQmCC');
  thrashIcon.setAttribute('alt', 'thrash icon');
  thrashIcon.className = 'thrash-icon';

  // append childs
  li.appendChild(checkBox);
  li.appendChild(input);
  li.appendChild(thrashIcon);
  ul.appendChild(li);

  // functions

  thrashIcon.addEventListener('click', () => {
    (0,_removeFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(index);
  });

  input.addEventListener('click', () => {
    (0,_editFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(input, index);
  });

  checkBox.addEventListener('click', () => {
    (0,_cbFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(li, index);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLi);

/***/ }),

/***/ "./src/modules/editFunction.js":
/*!*************************************!*\
  !*** ./src/modules/editFunction.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _list_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-data.js */ "./src/modules/list-data.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");
// --------------------------imports--------------------------------//




// --------------------------functions--------------------------------//

const edit = (input, index) => {
  input.classList.toggle('active');
  input.parentElement.classList.add('edit');
  input.removeAttribute('readonly');
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      input.value = e.target.value;
      input.setAttribute('readonly', true);
      input.classList.toggle('active');
      _list_data_js__WEBPACK_IMPORTED_MODULE_0__["default"][index.index - 1].description = input.value;
      _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].setStorage(_list_data_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      input.parentElement.classList.remove('edit');
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edit);

/***/ }),

/***/ "./src/modules/list-data.js":
/*!**********************************!*\
  !*** ./src/modules/list-data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// --------------------------functions--------------------------------//

const listData = [];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listData);

/***/ }),

/***/ "./src/modules/removeFunction.js":
/*!***************************************!*\
  !*** ./src/modules/removeFunction.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _list_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-data.js */ "./src/modules/list-data.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");
// --------------------------imports--------------------------------//




// --------------------------functions--------------------------------//
const removeLi = (index) => {
  const thrashIcon = document.querySelectorAll('.thrash-icon');
  const thrashLi = Array.from(thrashIcon);
  if (index.completed === true) {
    thrashLi[index.index - 1].parentElement.remove();

    _list_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].splice(index.index - 1, 1);
    for (let i = 0; i < _list_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].length; i += 1) {
      _list_data_js__WEBPACK_IMPORTED_MODULE_0__["default"][i].index = i + 1;
    }
    _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].setStorage(_list_data_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  } else {
    thrashLi[index.index - 1].parentElement.classList.add('incorrect');
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeLi);


/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// --------------------------functions--------------------------------//

const setStorage = (data) => {
  localStorage.setItem('task', JSON.stringify(data));
};

const getStorage = (data) => {
  data.push(...JSON.parse(localStorage.getItem('task')));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setStorage,
  getStorage,
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YTtBQUNqQixHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEdkI7O0FBRXNDO0FBQ0g7O0FBRW5DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0scURBQVE7QUFDZCxNQUFNLDhEQUFrQixDQUFDLHFEQUFRO0FBQ2pDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUN2Qm5COztBQUVBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKdkI7O0FBRXNDO0FBQ0g7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDREQUFlO0FBQ25CLG9CQUFvQixJQUFJLDREQUFlLEVBQUU7QUFDekMsTUFBTSxxREFBUTtBQUNkO0FBQ0EsSUFBSSw4REFBa0IsQ0FBQyxxREFBUTtBQUMvQixJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ4Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LXBqLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXBqLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXBqLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wai8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0LXBqLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcGovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcGovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wai8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXBqLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wai8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcGovLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wai8uL3NyYy9tb2R1bGVzL2FkZEZ1bmN0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcGovLi9zcmMvbW9kdWxlcy9jYkZ1bmN0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcGovLi9zcmMvbW9kdWxlcy9jcmVhdGVMaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXBqLy4vc3JjL21vZHVsZXMvZWRpdEZ1bmN0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcGovLi9zcmMvbW9kdWxlcy9saXN0LWRhdGEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wai8uL3NyYy9tb2R1bGVzL3JlbW92ZUZ1bmN0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcGovLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TXVzZW9Nb2Rlcm5vOndnaHRAOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU11c2VvTW9kZXJubzp3Z2h0QDkwMCZmYW1pbHk9UnViaWsrTW9vbnJvY2tzJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNlOTlkY2IgMCUsICM4MDk5ZTkgMTAwJSk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly91cGxvYWRzLXNzbC53ZWJmbG93LmNvbS81ZWMyMDdhNDQ4ZDU3MzE1MzYxNjg2OGEvNjBlMzJiZTAwOGM1NzlmMjIyZjE3ODhhX01lc2glMjA1MC5qcGcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJveDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMmMwNTcwO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNnB4LCAyNnB4LCAwKSBzY2FsZSgxKTtcXHJcXG4gIGZpbHRlcjogYmx1cig3cHgpO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuKiBQcmV2ZW50cyBpc3N1ZXMgd2hlbiB0aGUgcGFyZW50IGNyZWF0ZXMgYVxcclxcbiogc3RhY2tpbmcgY29udGV4dC4gKEZvciBleGFtcGxlLCB1c2luZyB0aGUgdHJhbnNmb3JtXFxyXFxuKiBwcm9wZXJ0eSApXFxyXFxuKi9cXHJcXG4uYm94OjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIGNvbnRhaW5lciAqL1xcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIgPiAqIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWFhO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0aXRsZSBjb250YWluZXIgKi9cXHJcXG4udGl0bGUtdG9kbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tdGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSdWJpayBNb29ucm9ja3MnLCBjdXJzaXZlO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcclxcbiAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgY29sb3I6IHJnYmEoMTU2LCA3MiwgMjM0LCAxKTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgxNTYsIDcyLCAyMzQsIDEpIDAlLCByZ2JhKDE0MywgMzEsIDIyOSwgMSkgMzclLCByZ2JhKDY2LCAxMzEsIDEzOCwgMSkgNzklLCByZ2JhKDY2LCAxMzEsIDEzOCwgMSkgMTAwJSkgbGVmdDtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXQtaWNvbiB7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi8qIGZvcm0gY29udGFpbmVyICovXFxyXFxuXFxyXFxuLmZvcm0tdG9kbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS10b2RvIC5pbnB1dC1mb3JtIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcGFkZGluZzogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBsaXN0IGNvbnRhaW5lciAqL1xcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyID4gKiB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbnRhaW5lci5jb21wbGV0ZWQge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgxMTAsIDIxNCwgNzUsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbnRhaW5lci5pbmNvcnJlY3Qge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyMTQsIDc1LCA5NiwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY29udGFpbmVyLmVkaXQge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgxOTEsIDIxNCwgNzUsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbnRhaW5lciAuaW5wdXQge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY29udGFpbmVyLmNvbXBsZXRlZCA+IC5pbnB1dCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY29udGFpbmVyIC5pbnB1dC5hY3RpdmUge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG59XFxyXFxuXFxyXFxuLyogY2xlYXIgYWxsIGNvbnRhaW5lciAqL1xcclxcbi5idG4tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWJ0biB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBmb250LXNpemU6IDEuM2VtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDE1NiwgNzIsIDIzNCwgMSkgMCUsIHJnYmEoMTQzLCAzMSwgMjI5LCAxKSAzNyUsIHJnYmEoNjYsIDEzMSwgMTM4LCAxKSA3OSUsIHJnYmEoNjYsIDEzMSwgMTM4LCAxKSAxMDAlKSBsZWZ0O1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xcclxcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1idG46Zm9jdXMsXFxyXFxuLmNsZWFyLWJ0bjphY3RpdmUge1xcclxcbiAgYW5pbWF0aW9uOiBidG4tYW5pbWF0aW9uIDAuM3M7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYnRuLWFuaW1hdGlvbiB7XFxyXFxuICA1MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC50b2RvLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA0NSU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLCtEQUErRDtBQUNqRTs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixzSEFBc0g7RUFDdEgsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsOENBQThDO0VBQzlDLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7OztDQUlDO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7O0FBR0EsY0FBYzs7QUFFZDtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLG1KQUFtSjtFQUNuSiwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUpBQW1KO0VBQ25KLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0Isb0NBQW9DO0FBQ3RDOztBQUVBOztFQUVFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU11c2VvTW9kZXJubzp3Z2h0QDkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NdXNlb01vZGVybm86d2dodEA5MDAmZmFtaWx5PVJ1YmlrK01vb25yb2NrcyZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZTk5ZGNiIDAlLCAjODA5OWU5IDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vdXBsb2Fkcy1zc2wud2ViZmxvdy5jb20vNWVjMjA3YTQ0OGQ1NzMxNTM2MTY4NjhhLzYwZTMyYmUwMDhjNTc5ZjIyMmYxNzg4YV9NZXNoJTIwNTAuanBnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib3g6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZDogIzJjMDU3MDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjZweCwgMjZweCwgMCkgc2NhbGUoMSk7XFxyXFxuICBmaWx0ZXI6IGJsdXIoN3B4KTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XFxyXFxuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiogUHJldmVudHMgaXNzdWVzIHdoZW4gdGhlIHBhcmVudCBjcmVhdGVzIGFcXHJcXG4qIHN0YWNraW5nIGNvbnRleHQuIChGb3IgZXhhbXBsZSwgdXNpbmcgdGhlIHRyYW5zZm9ybVxcclxcbiogcHJvcGVydHkgKVxcclxcbiovXFxyXFxuLmJveDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBjb250YWluZXIgKi9cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyID4gKiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGl0bGUgY29udGFpbmVyICovXFxyXFxuLnRpdGxlLXRvZG8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsgTW9vbnJvY2tzJywgY3Vyc2l2ZTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGNvbG9yOiByZ2JhKDE1NiwgNzIsIDIzNCwgMSk7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMTU2LCA3MiwgMjM0LCAxKSAwJSwgcmdiYSgxNDMsIDMxLCAyMjksIDEpIDM3JSwgcmdiYSg2NiwgMTMxLCAxMzgsIDEpIDc5JSwgcmdiYSg2NiwgMTMxLCAxMzgsIDEpIDEwMCUpIGxlZnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxyXFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0LWljb24ge1xcclxcbiAgaGVpZ2h0OiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb3JtIGNvbnRhaW5lciAqL1xcclxcblxcclxcbi5mb3JtLXRvZG8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tdG9kbyAuaW5wdXQtZm9ybSB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogbGlzdCBjb250YWluZXIgKi9cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXgtaGVpZ2h0OiAzNTBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciA+ICoge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWE7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb250YWluZXIuY29tcGxldGVkIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTEwLCAyMTQsIDc1LCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb250YWluZXIuaW5jb3JyZWN0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjE0LCA3NSwgOTYsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbnRhaW5lci5lZGl0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTkxLCAyMTQsIDc1LCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb250YWluZXIgLmlucHV0IHtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbnRhaW5lci5jb21wbGV0ZWQgPiAuaW5wdXQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbnRhaW5lciAuaW5wdXQuYWN0aXZlIHtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxufVxcclxcblxcclxcbi8qIGNsZWFyIGFsbCBjb250YWluZXIgKi9cXHJcXG4uYnRuLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1idG4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgxNTYsIDcyLCAyMzQsIDEpIDAlLCByZ2JhKDE0MywgMzEsIDIyOSwgMSkgMzclLCByZ2JhKDY2LCAxMzEsIDEzOCwgMSkgNzklLCByZ2JhKDY2LCAxMzEsIDEzOCwgMSkgMTAwJSkgbGVmdDtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItYnRuOmZvY3VzLFxcclxcbi5jbGVhci1idG46YWN0aXZlIHtcXHJcXG4gIGFuaW1hdGlvbjogYnRuLWFuaW1hdGlvbiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJ0bi1hbmltYXRpb24ge1xcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAudG9kby1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNDUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1pbXBvcnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgYWRkTGlzdCBmcm9tICcuL21vZHVsZXMvYWRkRnVuY3Rpb24uanMnO1xuaW1wb3J0IGxpc3REYXRhIGZyb20gJy4vbW9kdWxlcy9saXN0LWRhdGEuanMnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9tb2R1bGVzL3N0b3JhZ2UuanMnO1xuaW1wb3J0IGNyZWF0ZUxpIGZyb20gJy4vbW9kdWxlcy9jcmVhdGVMaS5qcyc7XG5pbXBvcnQgcmVtb3ZlTGkgZnJvbSAnLi9tb2R1bGVzL3JlbW92ZUZ1bmN0aW9uLmpzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS12YXJpYWJsZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1mb3JtJyk7XG5jb25zdCBjbGVhcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuZG8tYnRuJyk7XG5jb25zdCBjbGVhcmJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1idG4nKTtcbmNvbnN0IHJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LWljb24nKTtcblxuLy8gZXZlbnQgbGlzdGVuZXJzXG5cbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkTGlzdChlKTtcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICB9XG4gIHJldHVybiBudWxsO1xufSk7XG5cbmNsZWFySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlucHV0LnZhbHVlID0gJyc7XG59KTtcblxuY2xlYXJidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGNvbXBsZXRlZEl0ZW1zID0gbGlzdERhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNvbXBsZXRlZCA9PT0gdHJ1ZSk7XG4gIGNvbXBsZXRlZEl0ZW1zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICByZW1vdmVMaShlbGVtZW50KTtcbiAgfSk7XG59KTtcblxucmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGxpc3REYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmNvbXBsZXRlZCA9IHRydWU7XG4gIH0pO1xuICBjb25zdCBjb21wbGV0ZWRJdGVtcyA9IGxpc3REYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb21wbGV0ZWQgPT09IHRydWUpO1xuICBjb21wbGV0ZWRJdGVtcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgcmVtb3ZlTGkoZWxlbWVudCk7XG4gIH0pO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBzdG9yYWdlLmdldFN0b3JhZ2UobGlzdERhdGEpO1xuICBsaXN0RGF0YS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIGNyZWF0ZUxpKGNoaWxkKTtcbiAgfSk7XG59KTtcbiIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0taW1wb3J0cy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuaW1wb3J0IGNyZWF0ZUxpIGZyb20gJy4vY3JlYXRlTGkuanMnO1xuaW1wb3J0IGxpc3REYXRhIGZyb20gJy4vbGlzdC1kYXRhLmpzJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tZnVuY3Rpb25zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5jb25zdCBhZGRMaXN0ID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgZGVzY3JpcHRpb246IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGluZGV4OiBsaXN0RGF0YS5sZW5ndGggKyAxLFxuICB9O1xuICBjcmVhdGVMaShkYXRhKTtcbiAgbGlzdERhdGEucHVzaChkYXRhKTtcbiAgc3RvcmFnZS5zZXRTdG9yYWdlKGxpc3REYXRhKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZExpc3Q7IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1mdW5jdGlvbnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbmNvbnN0IGNoZWNrZnVuY3Rpb24gPSAobGksIGluZGV4KSA9PiB7XG4gIGxpLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xuICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdpbmNvcnJlY3QnKTtcbiAgaWYgKGluZGV4LmNvbXBsZXRlZCA9PT0gZmFsc2UpIHtcbiAgICBpbmRleC5jb21wbGV0ZWQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGluZGV4LmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGVja2Z1bmN0aW9uOyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0taW1wb3J0cy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuaW1wb3J0IGNoZWNrZnVuY3Rpb24gZnJvbSAnLi9jYkZ1bmN0aW9uLmpzJztcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdEZ1bmN0aW9uLmpzJztcbmltcG9ydCByZW1vdmVMaSBmcm9tICcuL3JlbW92ZUZ1bmN0aW9uLmpzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1mdW5jdGlvbnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbmNvbnN0IGNyZWF0ZUxpID0gKGluZGV4KSA9PiB7XG4gIC8vIHNlbGVjdCB1bFxuICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWNvbnRhaW5lcicpO1xuICAvLyBjcmVhdGUgbGlcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuICAvLyBjcmVhdGUgaW5wdXRcbiAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgLy8gY3JlYXRlIHNwYW5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgdHJ1ZSk7XG4gIGlucHV0LnZhbHVlID0gYCR7aW5kZXguZGVzY3JpcHRpb259YDtcbiAgLy8gY3JlYXRlIGljb25cbiAgY29uc3QgdGhyYXNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICB0aHJhc2hJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmdBQUFBWUNBWUFBQURnZHozNEFBQUFBWE5TUjBJQXJzNGM2UUFBQUw5SlJFRlVTRXZ0bGMwTndqQU1oVjhtWVFSZ0UwN09HakFCckJPZk9ncHNVQ1l4cXRSS29VM3RrRFRpMHR5aS9IenYyVXFlUStQaEd0OFBGUkJDdURqbjdnQk9LMEo2RWJsNTc3czFvU3FBbVhzQUI4UGxrNGpPcFFBWkRoSlJVZ2d6cSt2RFdjdkJ0b0JKVVczalk4ZGZEcG9ESnVVNXRZMWRhdnVMbTdjcFlLN1Ftc2Z3TEFmV2hkVWwyZ0dMZC9WclNmWWVtRjlUZFlrc1Fna2dKMmptM0JjUkxaSXYrWkxIcUh3QU9GcnF4L1czaUZ4VDBmbmYwTTlVcjI3N0FQbGsxQmxoUTI3UkFBQUFBRWxGVGtTdVFtQ0MnKTtcbiAgdGhyYXNoSWNvbi5zZXRBdHRyaWJ1dGUoJ2FsdCcsICd0aHJhc2ggaWNvbicpO1xuICB0aHJhc2hJY29uLmNsYXNzTmFtZSA9ICd0aHJhc2gtaWNvbic7XG5cbiAgLy8gYXBwZW5kIGNoaWxkc1xuICBsaS5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gIGxpLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgbGkuYXBwZW5kQ2hpbGQodGhyYXNoSWNvbik7XG4gIHVsLmFwcGVuZENoaWxkKGxpKTtcblxuICAvLyBmdW5jdGlvbnNcblxuICB0aHJhc2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbW92ZUxpKGluZGV4KTtcbiAgfSk7XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZWRpdChpbnB1dCwgaW5kZXgpO1xuICB9KTtcblxuICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjaGVja2Z1bmN0aW9uKGxpLCBpbmRleCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTGk7IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1pbXBvcnRzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5pbXBvcnQgbGlzdERhdGEgZnJvbSAnLi9saXN0LWRhdGEuanMnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1mdW5jdGlvbnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbmNvbnN0IGVkaXQgPSAoaW5wdXQsIGluZGV4KSA9PiB7XG4gIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICBpbnB1dC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBpbnB1dC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsIHRydWUpO1xuICAgICAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICBsaXN0RGF0YVtpbmRleC5pbmRleCAtIDFdLmRlc2NyaXB0aW9uID0gaW5wdXQudmFsdWU7XG4gICAgICBzdG9yYWdlLnNldFN0b3JhZ2UobGlzdERhdGEpO1xuICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0Jyk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVkaXQ7IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1mdW5jdGlvbnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbmNvbnN0IGxpc3REYXRhID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3REYXRhOyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0taW1wb3J0cy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuaW1wb3J0IGxpc3REYXRhIGZyb20gJy4vbGlzdC1kYXRhLmpzJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tZnVuY3Rpb25zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuY29uc3QgcmVtb3ZlTGkgPSAoaW5kZXgpID0+IHtcbiAgY29uc3QgdGhyYXNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aHJhc2gtaWNvbicpO1xuICBjb25zdCB0aHJhc2hMaSA9IEFycmF5LmZyb20odGhyYXNoSWNvbik7XG4gIGlmIChpbmRleC5jb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICB0aHJhc2hMaVtpbmRleC5pbmRleCAtIDFdLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICBsaXN0RGF0YS5zcGxpY2UoaW5kZXguaW5kZXggLSAxLCAxKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3REYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBsaXN0RGF0YVtpXS5pbmRleCA9IGkgKyAxO1xuICAgIH1cbiAgICBzdG9yYWdlLnNldFN0b3JhZ2UobGlzdERhdGEpO1xuICB9IGVsc2Uge1xuICAgIHRocmFzaExpW2luZGV4LmluZGV4IC0gMV0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbmNvcnJlY3QnKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlTGk7XG4iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWZ1bmN0aW9ucy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuY29uc3Qgc2V0U3RvcmFnZSA9IChkYXRhKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xufTtcblxuY29uc3QgZ2V0U3RvcmFnZSA9IChkYXRhKSA9PiB7XG4gIGRhdGEucHVzaCguLi5KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrJykpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0U3RvcmFnZSxcbiAgZ2V0U3RvcmFnZSxcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9