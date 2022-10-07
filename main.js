/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before{\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto';\n}\n\n.title{\n    background-color: #0b2545;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 40px;\n    height: 8rem;\n    /* position: fixed; */\n    top:0;\n}\n\n#mainPage{    \n    background-color: #0b2545;\n    height: 100vh;\n    display: none;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 600px;\n}\n\n@media (max-width: 900px){\n    #mainPage{\n        flex-direction: column;\n        justify-content: space-around;\n        align-items: center;\n        height: auto;\n        gap: 5rem;\n        padding: 3rem;\n    }\n}\n\n.container2{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\nh2{\n    color: white;\n}\n\n.gbPlayer, .gbComputer, .gbInit{\n    width: 400px;\n    height: 400px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-content: flex-start;\n    border: 20px solid #326990;\n    border-radius: 5%;\n}\n\n.grid{\n    width: 40px;\n    height: 40px;\n    background-color: green;\n    box-sizing: border-box;\n    border: .1px solid gray;\n}\n\n.grid:hover{\n    opacity: 0.5;\n}\n\n#resultPage, #placeShipPage{\n    min-height: 600px;\n    position: absolute;\n    z-index: 0;\n    display: none;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    opacity: 0.8;\n    justify-content: center;\n    align-items: center;\n}\n\n#resultPage{\n    background-color: black;\n}\n\n.result{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 40px;\n}\n\n.text{\n    color: #e8002a;\n    font-size: 2rem;\n}\n\n.winner{\n    color: #FF0000;\n    font-size: 3rem;\n}\n\n.restart{\n    background-color: lightblue;\n    border: none;\n    border-radius: 50px;\n    font-size: 1.5rem;\n    padding: 20px;\n}\n\n.restart:hover{\n    opacity: 0.5;\n}\n\n/* ---------- */\n#placeShipPage{\n    display: flex;\n    opacity: 1;\n    background-color: #0b2545;\n}\n\n.container1{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    background-color: #0b2545;\n}\n\n.container11 > h2{\n    display: flex;\n    align-items: center;\n}\n\n.container11{\n    /* background-color: gray; */\n    display: flex;\n    justify-content: space-between;\n}\n\n.rotate{\n    width: 35px;\n    height: 35px;\n    background-color: red;\n    border: none;\n    border-radius: 50%;\n    cursor: pointer; /* Mouse pointer on hover */\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.rotate:hover{\n    opacity: 0.9;\n    transition: transform .15s; /* animation*/\n    transform: scale(1.2);\n}\n\n.rotate:active{\n    background-color: white;\n    transform: translateY(2px);\n}\n\nsvg{\n    width: 20px;\n    height: 20px;\n}\n\n.gridInit{\n    width: 40px;\n    height: 40px;\n    background-color: white;\n    box-sizing: border-box;\n    border: .1px solid gray;\n}\n\n/* .gridInit:hover{\n    opacity: 0.5;\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,YAAY;IACZ,qBAAqB;IACrB,KAAK;AACT;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI;QACI,sBAAsB;QACtB,6BAA6B;QAC7B,mBAAmB;QACnB,YAAY;QACZ,SAAS;QACT,aAAa;IACjB;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,eAAe;IACf,2BAA2B;IAC3B,yBAAyB;IACzB,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,2BAA2B;IAC3B,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA,eAAe;AACf;IACI,aAAa;IACb,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;IAClB,eAAe,EAAE,2BAA2B;;IAE5C,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,0BAA0B,EAAE,aAAa;IACzC,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;;GAEG","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap');\n\n*, *::after, *::before{\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto';\n}\n\n.title{\n    background-color: #0b2545;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 40px;\n    height: 8rem;\n    /* position: fixed; */\n    top:0;\n}\n\n#mainPage{    \n    background-color: #0b2545;\n    height: 100vh;\n    display: none;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 600px;\n}\n\n@media (max-width: 900px){\n    #mainPage{\n        flex-direction: column;\n        justify-content: space-around;\n        align-items: center;\n        height: auto;\n        gap: 5rem;\n        padding: 3rem;\n    }\n}\n\n.container2{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\nh2{\n    color: white;\n}\n\n.gbPlayer, .gbComputer, .gbInit{\n    width: 400px;\n    height: 400px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-content: flex-start;\n    border: 20px solid #326990;\n    border-radius: 5%;\n}\n\n.grid{\n    width: 40px;\n    height: 40px;\n    background-color: green;\n    box-sizing: border-box;\n    border: .1px solid gray;\n}\n\n.grid:hover{\n    opacity: 0.5;\n}\n\n#resultPage, #placeShipPage{\n    min-height: 600px;\n    position: absolute;\n    z-index: 0;\n    display: none;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    opacity: 0.8;\n    justify-content: center;\n    align-items: center;\n}\n\n#resultPage{\n    background-color: black;\n}\n\n.result{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 40px;\n}\n\n.text{\n    color: #e8002a;\n    font-size: 2rem;\n}\n\n.winner{\n    color: #FF0000;\n    font-size: 3rem;\n}\n\n.restart{\n    background-color: lightblue;\n    border: none;\n    border-radius: 50px;\n    font-size: 1.5rem;\n    padding: 20px;\n}\n\n.restart:hover{\n    opacity: 0.5;\n}\n\n/* ---------- */\n#placeShipPage{\n    display: flex;\n    opacity: 1;\n    background-color: #0b2545;\n}\n\n.container1{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    background-color: #0b2545;\n}\n\n.container11 > h2{\n    display: flex;\n    align-items: center;\n}\n\n.container11{\n    /* background-color: gray; */\n    display: flex;\n    justify-content: space-between;\n}\n\n.rotate{\n    width: 35px;\n    height: 35px;\n    background-color: red;\n    border: none;\n    border-radius: 50%;\n    cursor: pointer; /* Mouse pointer on hover */\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.rotate:hover{\n    opacity: 0.9;\n    transition: transform .15s; /* animation*/\n    transform: scale(1.2);\n}\n\n.rotate:active{\n    background-color: white;\n    transform: translateY(2px);\n}\n\nsvg{\n    width: 20px;\n    height: 20px;\n}\n\n.gridInit{\n    width: 40px;\n    height: 40px;\n    background-color: white;\n    box-sizing: border-box;\n    border: .1px solid gray;\n}\n\n/* .gridInit:hover{\n    opacity: 0.5;\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/Render.js":
/*!***********************!*\
  !*** ./src/Render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPlayerBoard": () => (/* binding */ renderPlayerBoard),
/* harmony export */   "renderComputerBoard": () => (/* binding */ renderComputerBoard),
/* harmony export */   "removeAllChild": () => (/* binding */ removeAllChild)
/* harmony export */ });
/* harmony import */ var _checkWin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkWin.js */ "./src/checkWin.js");


const gbPlayer = document.querySelector('.gbPlayer');
const gbComputer = document.querySelector('.gbComputer');

function renderPlayerBoard(totalLength, game){
    const singleGrid = new Array(10).fill().map(() => Array(10).fill(null));
    for (let i = 0; i < totalLength; i++){
        for (let j = 0; j < totalLength; j++){
            singleGrid[i][j] = document.createElement('div');
            singleGrid[i][j].classList.add('grid');
    
            if (game.gbPlayer.board[i][j] == null){
                singleGrid[i][j].style.backgroundColor = "rgb(255,255,255)";
            } else if (game.gbPlayer.board[i][j] == 'miss'){
                singleGrid[i][j].style.backgroundColor = "rgb(0,0,0)";
            } else if (game.gbPlayer.board[i][j][2] == 'hit'){
                singleGrid[i][j].style.backgroundColor = "rgb(255,0,0)";
            } else {
                singleGrid[i][j].style.backgroundColor = "rgb(0,128,0)";
            }
    
            gbPlayer.appendChild(singleGrid[i][j]);
        }
    }
}

function renderComputerBoard(totalLength, game){
    const singleGrid = new Array(10).fill().map(() => Array(10).fill(null));
    for (let i = 0; i < totalLength; i++){
        for (let j = 0; j < totalLength; j++){
            singleGrid[i][j] = document.createElement('div');
            singleGrid[i][j].classList.add('grid');

            if (game.gbComputer.board[i][j] == null){
                singleGrid[i][j].style.backgroundColor = "rgb(255,255,255)";
            } else if (game.gbComputer.board[i][j] == 'miss'){
                singleGrid[i][j].style.backgroundColor = "rgb(0,0,0)";
            } else if (game.gbComputer.board[i][j][2] == 'hit'){
                singleGrid[i][j].style.backgroundColor = "rgb(255,0,0)";
            } else {
                singleGrid[i][j].style.backgroundColor = "rgb(255,255,255)";
            }
    
            gbComputer.appendChild(singleGrid[i][j]);
            
            singleGrid[i][j].addEventListener('click', () => {
                removeAllChild(gbPlayer);
                removeAllChild(gbComputer);
                game.attack(i, j);
                renderPlayerBoard(totalLength, game);
                renderComputerBoard(totalLength, game);
                (0,_checkWin_js__WEBPACK_IMPORTED_MODULE_0__.checkWin)(game);
            });
        }
    }
}

function removeAllChild (parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}



/***/ }),

/***/ "./src/checkWin.js":
/*!*************************!*\
  !*** ./src/checkWin.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkWin": () => (/* binding */ checkWin)
/* harmony export */ });
function checkWin (game){
    if (game.gbComputer.allSunk()){
        let winner = 'YOU';
        displayResult(winner);
    } else if (game.gbPlayer.allSunk()){
        let winner = 'General Robot';
        displayResult(winner);
    }
}

// Display Result on Result Page
const resultPage = document.getElementById('resultPage');
const mainPage = document.getElementById('mainPage');   

function displayResult (winner){
    resultPage.style.display = 'flex';
    mainPage.style.display = 'none';
    const win = document.querySelector('.winner');
    win.textContent = winner;
}

// restart button
const restart = document.querySelector('.restart');
restart.addEventListener('click', () => {
    resultPage.style.display = 'none';
    // clear board
    // reset gameboard, player... data
    window.location.reload();
});



/***/ }),

/***/ "./src/factories/Gameboard.js":
/*!************************************!*\
  !*** ./src/factories/Gameboard.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(/*! ./Ship */ "./src/factories/Ship.js");

const Gameboard = () => {
    let board = new Array(10).fill().map(() => Array(10).fill(null));
    let shipArr = [];

    const placeShip = (shipName, x, y, orientation) => {
        let shipLength;

        switch(shipName){
            case 'Carrier':
                shipLength = 5;
                break;
            case 'Battleship':
                shipLength = 4;
                break;
            case 'Destroyer':
                shipLength = 3;
                break;
            case 'Submarine':
                shipLength = 3;
                break;
            case 'PatrolBoat':
                shipLength = 2;
                break;
        }

        shipName = Ship(shipLength, shipName);
        shipArr.push(shipName);

        switch(orientation){
            case 'horizontal':
                for (let i = 0; i < shipLength; i++){
                    board[x][y + i] = [shipName, i];
                }
            break;

            case 'vertical':
                for (let i = 0; i < shipLength; i++){
                    board[x + i][y] = [shipName, i];
                }
            break;
        }
    }

    const receiveAttack = (x, y) => {
        if (board[x][y] == null){
            board[x][y] = 'miss';
        }else if (board[x][y] == 'miss' || board[x][y] == 'hit'){
            console.log('invalid attack');
        }else{
            board[x][y][0].hit(board[x][y][1]);
            board[x][y][2] = 'hit';
        }
    }
    // null -> miss
    // ship -> hit
    // hit -> again
    // miss -> again


    const allSunk = () => {
        for(let i = 0; i < shipArr.length; i++){
            if (shipArr[i].isSunk() == false){
                return false;
            }
        }
        return true;
    }


    return{board, placeShip, receiveAttack, allSunk};
};

module.exports = Gameboard;

/***/ }),

/***/ "./src/factories/Player.js":
/*!*********************************!*\
  !*** ./src/factories/Player.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Gameboard = __webpack_require__(/*! ./Gameboard */ "./src/factories/Gameboard.js");

const Player = () => {
    const gbPlayer = Gameboard();
    const gbComputer = Gameboard();

    const attack = (x, y) => {
        if (gbComputer.board[x][y] == null || (gbComputer.board[x][y] != null && gbComputer.board[x][y][2] != 'hit' && gbComputer.board[x][y] != 'miss')){
            gbComputer.receiveAttack(x, y);

            while(true){
                let x = Math.floor(Math.random()*10);
                let y = Math.floor(Math.random()*10);

                if (gbPlayer.board[x][y] == null || (gbPlayer.board[x][y] != null && gbPlayer.board[x][y][2] != 'hit' && gbPlayer.board[x][y] != 'miss')){
                    gbPlayer.receiveAttack(x, y);
                    break;
                }
            }
        }
    }
    
    return{gbPlayer, gbComputer, attack};
};

module.exports = Player;

/***/ }),

/***/ "./src/factories/Ship.js":
/*!*******************************!*\
  !*** ./src/factories/Ship.js ***!
  \*******************************/
/***/ ((module) => {

const Ship = (length, shipName) => {
    let deck = [];
    let deckHit = [];
    let health = length;
    const getHealth = () => length;
    const getName = () => shipName;

    for (let i = 0; i < length; i++){
        deck[i] = i;
    }

    const hit = (x) => {
        if (deck.includes(x)){
            health--;

            deckHit.push(x);
            deckHit = deckHit.sort(function(a, b) {
                return a - b;
            });

            // let index = deck.indexOf(x); 
            // if (index > -1) {   //index exist
                // deck.splice(index, 1);
                // deck[index] = "hit";
            // }
        }
        isSunk();
    }

    const isSunk = () => {
        if (health == 0){
            return true;  
        }else{
            return false;
        }
    }

    return{getHealth, getName, isSunk, hit, deckHit};
};

module.exports = Ship;

/***/ }),

/***/ "./src/placeShipPage.js":
/*!******************************!*\
  !*** ./src/placeShipPage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeShipPage": () => (/* binding */ placeShipPage)
/* harmony export */ });
/* harmony import */ var _Render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render.js */ "./src/Render.js");



const gbInit = document.querySelector('.gbInit');
const placeShipPageE = document.getElementById('placeShipPage');
const mainPageE = document.getElementById('mainPage');
const gbPlayer = document.querySelector('.gbPlayer');
const gbComputer = document.querySelector('.gbComputer');
let counter = 0;

function placeShipPage (totalLength, game){
    (0,_Render_js__WEBPACK_IMPORTED_MODULE_0__.removeAllChild)(gbInit);
    let shipName;
    let shipLength;
    
    switch(counter){
        case 0:
            shipName = 'Carrier';
            shipLength = 5;
            break;
        case 1:
            shipName = 'Battleship';
            shipLength = 4;
            break;
        case 2:
            shipName = 'Destroyer';
            shipLength = 3;
            break;
        case 3:
            shipName = 'Submarine';
            shipLength = 3;
            break;
        case 4:
            shipName = 'PatrolBoat';
            shipLength = 2;
            break;
        case 5:
            placeShipPageE.style.display = 'none';
            mainPageE.style.display = 'flex';
            (0,_Render_js__WEBPACK_IMPORTED_MODULE_0__.removeAllChild)(gbPlayer);
            (0,_Render_js__WEBPACK_IMPORTED_MODULE_0__.removeAllChild)(gbComputer);
            (0,_Render_js__WEBPACK_IMPORTED_MODULE_0__.renderPlayerBoard)(totalLength, game);
            (0,_Render_js__WEBPACK_IMPORTED_MODULE_0__.renderComputerBoard)(totalLength, game);

            break;
    }
    
    // rotate button switch rotation state
    let rotateStatus = 0;
    const rotate = document.querySelector('.rotate');
    rotate.addEventListener('click', () => {
        rotateStatus = (rotateStatus == 0) ? 1 : 0;
    });

    const singleGrid = new Array(10).fill().map(() => Array(10).fill(null));
    for (let i = 0; i < totalLength; i++){
        for (let j = 0; j < totalLength; j++){
            singleGrid[i][j] = document.createElement('div');
            singleGrid[i][j].classList.add('gridInit');

            if (game.gbPlayer.board[i][j] == null){
                singleGrid[i][j].style.backgroundColor = "rgb(255,255,255)";
            }else{
                singleGrid[i][j].style.backgroundColor = "rgb(0,128,0)";
            }

            singleGrid[i][j].addEventListener('mouseenter', () => {
                for (let k = 0; k < shipLength; k++){

                    switch(rotateStatus){
                        case 0:
                            if ((j + shipLength) > totalLength){
                                for (let temp = 0; temp < totalLength - j; temp++){
                                    singleGrid[i][j+temp].style.backgroundColor = "rgb(255,0,0)";
                                }
                            }else if(game.gbPlayer.board[i][j+k] != null){
                                singleGrid[i][j+k].style.backgroundColor = "rgb(255,0,0)";
                            }else{
                                singleGrid[i][j+k].style.backgroundColor = "rgb(0,255,0)";
                            }
                            break;
                        case 1:
                            if ((i + shipLength) > totalLength){
                                for (let temp = 0; temp < totalLength - i; temp++){
                                    singleGrid[i+temp][j].style.backgroundColor = "rgb(255,0,0)";
                                }
                            }else if(game.gbPlayer.board[i+k][j] != null){
                                singleGrid[i+k][j].style.backgroundColor = "rgb(255,0,0)";
                            }else{
                                singleGrid[i+k][j].style.backgroundColor = "rgb(0,255,0)";
                            }
                            break;

                    }
                }
            });

            singleGrid[i][j].addEventListener('mouseleave', () => {
                switch(rotateStatus){
                    case 0:
                        for (let k = 0; k < shipLength; k++){
                                for (let temp = 0; temp < totalLength - j; temp++){
                                    if (game.gbPlayer.board[i][j+temp] == null){
                                        singleGrid[i][j+temp].style.backgroundColor = "rgb(255,255,255)";
                                    }else{
                                        singleGrid[i][j+temp].style.backgroundColor = "rgb(0,128,0)";
                                    }
                                }
                        }
                    break;

                    case 1:
                        for (let k = 0; k < shipLength; k++){
                            
                                for (let temp = 0; temp < totalLength - i; temp++){
                                    if(game.gbPlayer.board[i+temp][j] == null){
                                        singleGrid[i+temp][j].style.backgroundColor = "rgb(255,255,255)";
                                    }else{
                                        singleGrid[i+temp][j].style.backgroundColor = "rgb(0,128,0)";
                                    }
                                }
                                
                        }
                    break;
                }
            });


            singleGrid[i][j].addEventListener('click', () => {
                let orientation = (rotateStatus == 0) ? 'horizontal' : 'vertical';
                let stat = 'empty';
                switch(rotateStatus){
                    case 0:
                        for (let k = 0; k < shipLength; k++){
                            if (singleGrid[i][j+k].style.backgroundColor == 'rgb(255, 0, 0)'){
                                stat = 'taken';
                            }
                        }
                        if (stat == 'empty'){
                            game.gbPlayer.placeShip(shipName, i, j, orientation);
                            counter++;
                            placeShipPage(totalLength, game);
                        }
                        break;
                    case 1:
                        for (let k = 0; k < shipLength; k++){
                            if (singleGrid[i+k][j].style.backgroundColor == 'rgb(255, 0, 0)'){
                                stat = 'taken';
                            }
                        }
                        if (stat == 'empty'){
                            game.gbPlayer.placeShip(shipName, i, j, orientation);
                            counter++;
                            placeShipPage(totalLength, game);
                        }
                        break;
                }
                
            });
            gbInit.appendChild(singleGrid[i][j]);
        }
    }
}



/***/ }),

/***/ "./src/placeShipRand.js":
/*!******************************!*\
  !*** ./src/placeShipRand.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeShipRand": () => (/* binding */ placeShipRand)
/* harmony export */ });
function placeShipRand (totalLength, game){
    let counter = 0;
    let shipName;
    let shipLength;
    
    while(true){
        let x = Math.floor(Math.random()*10);
        let y = Math.floor(Math.random()*10);
        let orientation = Math.floor(Math.random()*2);
        orientation = (orientation == 0) ? 'horizontal':'vertical';
        console.log(orientation);
        console.log(x,y);

        switch(counter){
            case 0:
                shipName = 'Carrier';
                shipLength = 5;
                break;
            case 1:
                shipName = 'Battleship';
                shipLength = 4;
                break;
            case 2:
                shipName = 'Destroyer';
                shipLength = 3;
                break;
            case 3:
                shipName = 'Submarine';
                shipLength = 3;
                break;
            case 4:
                shipName = 'PatrolBoat';
                shipLength = 2;
                break;
        }


        let stat = 'empty';
                
        switch(orientation){
            case 'horizontal':
                for (let k = 0; k < shipLength; k++){
                    if (((y + shipLength) < totalLength) && game.gbComputer.board[x][y+k] != null){
                        stat = 'taken';
                    }
                }
                        
                if (((y + shipLength) < totalLength) && (stat == 'empty')){
                    console.log(shipName, x, y, orientation);
                    game.gbComputer.placeShip(shipName, x, y, orientation);
                    counter++;
                    break;
                }
                break;
            case 'vertical':
                for (let k = 0; k < shipLength; k++){
                    if (((x + shipLength) < totalLength) && game.gbComputer.board[x+k][y] != null){
                        stat = 'taken';
                    }
                }
                if (((x + shipLength) < totalLength) && (stat == 'empty')){
                    console.log(shipName, x, y, orientation);
                    game.gbComputer.placeShip(shipName, x, y, orientation);
                    counter++;
                    break;
                }
                break;
        }
        
        if (counter == 5){
            break;
        }
    }
}



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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factories_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/Player */ "./src/factories/Player.js");
/* harmony import */ var _factories_Player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_factories_Player__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _placeShipPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeShipPage */ "./src/placeShipPage.js");
/* harmony import */ var _placeShipRand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeShipRand */ "./src/placeShipRand.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






let totalLength = 10;

const game = _factories_Player__WEBPACK_IMPORTED_MODULE_0___default()();

(0,_placeShipPage__WEBPACK_IMPORTED_MODULE_1__.placeShipPage)(totalLength, game);
(0,_placeShipRand__WEBPACK_IMPORTED_MODULE_2__.placeShipRand)(totalLength, game);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsZ0NBQWdDLGdCQUFnQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDekVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ053QztBQUNRO0FBQ0E7O0FBRTNCOztBQUVyQjs7QUFFQSxhQUFhLHdEQUFNOztBQUVuQiw2REFBYTtBQUNiLDZEQUFhLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9SZW5kZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2NoZWNrV2luLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvUGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcGxhY2VTaGlwUGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcGxhY2VTaGlwUmFuZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmFmdGVyLCAqOjpiZWZvcmV7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjI1NDU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgaGVpZ2h0OiA4cmVtO1xcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXFxuICAgIHRvcDowO1xcbn1cXG5cXG4jbWFpblBhZ2V7ICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIyNTQ1O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogNjAwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCl7XFxuICAgICNtYWluUGFnZXtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBnYXA6IDVyZW07XFxuICAgICAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICB9XFxufVxcblxcbi5jb250YWluZXIye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmgye1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5nYlBsYXllciwgLmdiQ29tcHV0ZXIsIC5nYkluaXR7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlcjogMjBweCBzb2xpZCAjMzI2OTkwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG59XFxuXFxuLmdyaWR7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IC4xcHggc29saWQgZ3JheTtcXG59XFxuXFxuLmdyaWQ6aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuI3Jlc3VsdFBhZ2UsICNwbGFjZVNoaXBQYWdle1xcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNyZXN1bHRQYWdle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnJlc3VsdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuLnRleHR7XFxuICAgIGNvbG9yOiAjZTgwMDJhO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi53aW5uZXJ7XFxuICAgIGNvbG9yOiAjRkYwMDAwO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5yZXN0YXJ0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5yZXN0YXJ0OmhvdmVye1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0gKi9cXG4jcGxhY2VTaGlwUGFnZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMjU0NTtcXG59XFxuXFxuLmNvbnRhaW5lcjF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMjU0NTtcXG59XFxuXFxuLmNvbnRhaW5lcjExID4gaDJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIxMXtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucm90YXRle1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIE1vdXNlIHBvaW50ZXIgb24gaG92ZXIgKi9cXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3RhdGU6aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xNXM7IC8qIGFuaW1hdGlvbiovXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnJvdGF0ZTphY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXG59XFxuXFxuc3Zne1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uZ3JpZEluaXR7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IC4xcHggc29saWQgZ3JheTtcXG59XFxuXFxuLyogLmdyaWRJbml0OmhvdmVye1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsS0FBSztBQUNUOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixTQUFTO1FBQ1QsYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUEsZUFBZTtBQUNmO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWUsRUFBRSwyQkFBMkI7O0lBRTVDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQixFQUFFLGFBQWE7SUFDekMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTs7R0FFR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxufVxcblxcbi50aXRsZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMjU0NTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cXG4gICAgdG9wOjA7XFxufVxcblxcbiNtYWluUGFnZXsgICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjI1NDU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KXtcXG4gICAgI21haW5QYWdle1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIGdhcDogNXJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIH1cXG59XFxuXFxuLmNvbnRhaW5lcjJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuaDJ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmdiUGxheWVyLCAuZ2JDb21wdXRlciwgLmdiSW5pdHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYm9yZGVyOiAyMHB4IHNvbGlkICMzMjY5OTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbn1cXG5cXG4uZ3JpZHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogLjFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4uZ3JpZDpob3ZlcntcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4jcmVzdWx0UGFnZSwgI3BsYWNlU2hpcFBhZ2V7XFxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Jlc3VsdFBhZ2V7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucmVzdWx0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4udGV4dHtcXG4gICAgY29sb3I6ICNlODAwMmE7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLndpbm5lcntcXG4gICAgY29sb3I6ICNGRjAwMDA7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnJlc3RhcnR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnJlc3RhcnQ6aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLSAqL1xcbiNwbGFjZVNoaXBQYWdle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIyNTQ1O1xcbn1cXG5cXG4uY29udGFpbmVyMXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIyNTQ1O1xcbn1cXG5cXG4uY29udGFpbmVyMTEgPiBoMntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lcjExe1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5yb3RhdGV7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogTW91c2UgcG9pbnRlciBvbiBob3ZlciAqL1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJvdGF0ZTpob3ZlcntcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjE1czsgLyogYW5pbWF0aW9uKi9cXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ucm90YXRlOmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcbn1cXG5cXG5zdmd7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5ncmlkSW5pdHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogLjFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4vKiAuZ3JpZEluaXQ6aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2NoZWNrV2lufSBmcm9tICcuL2NoZWNrV2luLmpzJztcblxuY29uc3QgZ2JQbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2JQbGF5ZXInKTtcbmNvbnN0IGdiQ29tcHV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2JDb21wdXRlcicpO1xuXG5mdW5jdGlvbiByZW5kZXJQbGF5ZXJCb2FyZCh0b3RhbExlbmd0aCwgZ2FtZSl7XG4gICAgY29uc3Qgc2luZ2xlR3JpZCA9IG5ldyBBcnJheSgxMCkuZmlsbCgpLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbExlbmd0aDsgaSsrKXtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0b3RhbExlbmd0aDsgaisrKXtcbiAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bal0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bal0uY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xuICAgIFxuICAgICAgICAgICAgaWYgKGdhbWUuZ2JQbGF5ZXIuYm9hcmRbaV1bal0gPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNTUsMjU1LDI1NSlcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZS5nYlBsYXllci5ib2FyZFtpXVtqXSA9PSAnbWlzcycpe1xuICAgICAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMCwwLDApXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdhbWUuZ2JQbGF5ZXIuYm9hcmRbaV1bal1bMl0gPT0gJ2hpdCcpe1xuICAgICAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjU1LDAsMClcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigwLDEyOCwwKVwiO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgZ2JQbGF5ZXIuYXBwZW5kQ2hpbGQoc2luZ2xlR3JpZFtpXVtqXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNvbXB1dGVyQm9hcmQodG90YWxMZW5ndGgsIGdhbWUpe1xuICAgIGNvbnN0IHNpbmdsZUdyaWQgPSBuZXcgQXJyYXkoMTApLmZpbGwoKS5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwobnVsbCkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxMZW5ndGg7IGkrKyl7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdG90YWxMZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcblxuICAgICAgICAgICAgaWYgKGdhbWUuZ2JDb21wdXRlci5ib2FyZFtpXVtqXSA9PSBudWxsKXtcbiAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1NSwyNTUsMjU1KVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChnYW1lLmdiQ29tcHV0ZXIuYm9hcmRbaV1bal0gPT0gJ21pc3MnKXtcbiAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDAsMCwwKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChnYW1lLmdiQ29tcHV0ZXIuYm9hcmRbaV1bal1bMl0gPT0gJ2hpdCcpe1xuICAgICAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjU1LDAsMClcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNTUsMjU1LDI1NSlcIjtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGdiQ29tcHV0ZXIuYXBwZW5kQ2hpbGQoc2luZ2xlR3JpZFtpXVtqXSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxsQ2hpbGQoZ2JQbGF5ZXIpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUFsbENoaWxkKGdiQ29tcHV0ZXIpO1xuICAgICAgICAgICAgICAgIGdhbWUuYXR0YWNrKGksIGopO1xuICAgICAgICAgICAgICAgIHJlbmRlclBsYXllckJvYXJkKHRvdGFsTGVuZ3RoLCBnYW1lKTtcbiAgICAgICAgICAgICAgICByZW5kZXJDb21wdXRlckJvYXJkKHRvdGFsTGVuZ3RoLCBnYW1lKTtcbiAgICAgICAgICAgICAgICBjaGVja1dpbihnYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZCAocGFyZW50KXtcbiAgICB3aGlsZShwYXJlbnQuZmlyc3RDaGlsZCl7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnR7cmVuZGVyUGxheWVyQm9hcmQsIHJlbmRlckNvbXB1dGVyQm9hcmQsIHJlbW92ZUFsbENoaWxkfTsiLCJmdW5jdGlvbiBjaGVja1dpbiAoZ2FtZSl7XG4gICAgaWYgKGdhbWUuZ2JDb21wdXRlci5hbGxTdW5rKCkpe1xuICAgICAgICBsZXQgd2lubmVyID0gJ1lPVSc7XG4gICAgICAgIGRpc3BsYXlSZXN1bHQod2lubmVyKTtcbiAgICB9IGVsc2UgaWYgKGdhbWUuZ2JQbGF5ZXIuYWxsU3VuaygpKXtcbiAgICAgICAgbGV0IHdpbm5lciA9ICdHZW5lcmFsIFJvYm90JztcbiAgICAgICAgZGlzcGxheVJlc3VsdCh3aW5uZXIpO1xuICAgIH1cbn1cblxuLy8gRGlzcGxheSBSZXN1bHQgb24gUmVzdWx0IFBhZ2VcbmNvbnN0IHJlc3VsdFBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0UGFnZScpO1xuY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblBhZ2UnKTsgICBcblxuZnVuY3Rpb24gZGlzcGxheVJlc3VsdCAod2lubmVyKXtcbiAgICByZXN1bHRQYWdlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgbWFpblBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjb25zdCB3aW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyJyk7XG4gICAgd2luLnRleHRDb250ZW50ID0gd2lubmVyO1xufVxuXG4vLyByZXN0YXJ0IGJ1dHRvblxuY29uc3QgcmVzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXJ0Jyk7XG5yZXN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlc3VsdFBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvLyBjbGVhciBib2FyZFxuICAgIC8vIHJlc2V0IGdhbWVib2FyZCwgcGxheWVyLi4uIGRhdGFcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59KTtcblxuZXhwb3J0IHtjaGVja1dpbn07IiwiY29uc3QgU2hpcCA9IHJlcXVpcmUoJy4vU2hpcCcpO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgbGV0IGJvYXJkID0gbmV3IEFycmF5KDEwKS5maWxsKCkubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKG51bGwpKTtcbiAgICBsZXQgc2hpcEFyciA9IFtdO1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXBOYW1lLCB4LCB5LCBvcmllbnRhdGlvbikgPT4ge1xuICAgICAgICBsZXQgc2hpcExlbmd0aDtcblxuICAgICAgICBzd2l0Y2goc2hpcE5hbWUpe1xuICAgICAgICAgICAgY2FzZSAnQ2Fycmllcic6XG4gICAgICAgICAgICAgICAgc2hpcExlbmd0aCA9IDU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdCYXR0bGVzaGlwJzpcbiAgICAgICAgICAgICAgICBzaGlwTGVuZ3RoID0gNDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Rlc3Ryb3llcic6XG4gICAgICAgICAgICAgICAgc2hpcExlbmd0aCA9IDM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTdWJtYXJpbmUnOlxuICAgICAgICAgICAgICAgIHNoaXBMZW5ndGggPSAzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUGF0cm9sQm9hdCc6XG4gICAgICAgICAgICAgICAgc2hpcExlbmd0aCA9IDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBzaGlwTmFtZSA9IFNoaXAoc2hpcExlbmd0aCwgc2hpcE5hbWUpO1xuICAgICAgICBzaGlwQXJyLnB1c2goc2hpcE5hbWUpO1xuXG4gICAgICAgIHN3aXRjaChvcmllbnRhdGlvbil7XG4gICAgICAgICAgICBjYXNlICdob3Jpem9udGFsJzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3hdW3kgKyBpXSA9IFtzaGlwTmFtZSwgaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3ZlcnRpY2FsJzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3ggKyBpXVt5XSA9IFtzaGlwTmFtZSwgaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICAgICAgaWYgKGJvYXJkW3hdW3ldID09IG51bGwpe1xuICAgICAgICAgICAgYm9hcmRbeF1beV0gPSAnbWlzcyc7XG4gICAgICAgIH1lbHNlIGlmIChib2FyZFt4XVt5XSA9PSAnbWlzcycgfHwgYm9hcmRbeF1beV0gPT0gJ2hpdCcpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQgYXR0YWNrJyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYm9hcmRbeF1beV1bMF0uaGl0KGJvYXJkW3hdW3ldWzFdKTtcbiAgICAgICAgICAgIGJvYXJkW3hdW3ldWzJdID0gJ2hpdCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gbnVsbCAtPiBtaXNzXG4gICAgLy8gc2hpcCAtPiBoaXRcbiAgICAvLyBoaXQgLT4gYWdhaW5cbiAgICAvLyBtaXNzIC0+IGFnYWluXG5cblxuICAgIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwQXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmIChzaGlwQXJyW2ldLmlzU3VuaygpID09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cbiAgICByZXR1cm57Ym9hcmQsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU3Vua307XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZDsiLCJjb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKCcuL0dhbWVib2FyZCcpO1xuXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2JQbGF5ZXIgPSBHYW1lYm9hcmQoKTtcbiAgICBjb25zdCBnYkNvbXB1dGVyID0gR2FtZWJvYXJkKCk7XG5cbiAgICBjb25zdCBhdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgICAgICBpZiAoZ2JDb21wdXRlci5ib2FyZFt4XVt5XSA9PSBudWxsIHx8IChnYkNvbXB1dGVyLmJvYXJkW3hdW3ldICE9IG51bGwgJiYgZ2JDb21wdXRlci5ib2FyZFt4XVt5XVsyXSAhPSAnaGl0JyAmJiBnYkNvbXB1dGVyLmJvYXJkW3hdW3ldICE9ICdtaXNzJykpe1xuICAgICAgICAgICAgZ2JDb21wdXRlci5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuXG4gICAgICAgICAgICB3aGlsZSh0cnVlKXtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGdiUGxheWVyLmJvYXJkW3hdW3ldID09IG51bGwgfHwgKGdiUGxheWVyLmJvYXJkW3hdW3ldICE9IG51bGwgJiYgZ2JQbGF5ZXIuYm9hcmRbeF1beV1bMl0gIT0gJ2hpdCcgJiYgZ2JQbGF5ZXIuYm9hcmRbeF1beV0gIT0gJ21pc3MnKSl7XG4gICAgICAgICAgICAgICAgICAgIGdiUGxheWVyLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm57Z2JQbGF5ZXIsIGdiQ29tcHV0ZXIsIGF0dGFja307XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjsiLCJjb25zdCBTaGlwID0gKGxlbmd0aCwgc2hpcE5hbWUpID0+IHtcbiAgICBsZXQgZGVjayA9IFtdO1xuICAgIGxldCBkZWNrSGl0ID0gW107XG4gICAgbGV0IGhlYWx0aCA9IGxlbmd0aDtcbiAgICBjb25zdCBnZXRIZWFsdGggPSAoKSA9PiBsZW5ndGg7XG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHNoaXBOYW1lO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgIGRlY2tbaV0gPSBpO1xuICAgIH1cblxuICAgIGNvbnN0IGhpdCA9ICh4KSA9PiB7XG4gICAgICAgIGlmIChkZWNrLmluY2x1ZGVzKHgpKXtcbiAgICAgICAgICAgIGhlYWx0aC0tO1xuXG4gICAgICAgICAgICBkZWNrSGl0LnB1c2goeCk7XG4gICAgICAgICAgICBkZWNrSGl0ID0gZGVja0hpdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gbGV0IGluZGV4ID0gZGVjay5pbmRleE9mKHgpOyBcbiAgICAgICAgICAgIC8vIGlmIChpbmRleCA+IC0xKSB7ICAgLy9pbmRleCBleGlzdFxuICAgICAgICAgICAgICAgIC8vIGRlY2suc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAvLyBkZWNrW2luZGV4XSA9IFwiaGl0XCI7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgICAgaXNTdW5rKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICBpZiAoaGVhbHRoID09IDApe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7ICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm57Z2V0SGVhbHRoLCBnZXROYW1lLCBpc1N1bmssIGhpdCwgZGVja0hpdH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7IiwiaW1wb3J0IHtyZW1vdmVBbGxDaGlsZH0gZnJvbSAnLi9SZW5kZXIuanMnO1xuaW1wb3J0IHtyZW5kZXJQbGF5ZXJCb2FyZCwgcmVuZGVyQ29tcHV0ZXJCb2FyZH0gZnJvbSAnLi9SZW5kZXIuanMnO1xuXG5jb25zdCBnYkluaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2JJbml0Jyk7XG5jb25zdCBwbGFjZVNoaXBQYWdlRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZVNoaXBQYWdlJyk7XG5jb25zdCBtYWluUGFnZUUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblBhZ2UnKTtcbmNvbnN0IGdiUGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdiUGxheWVyJyk7XG5jb25zdCBnYkNvbXB1dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdiQ29tcHV0ZXInKTtcbmxldCBjb3VudGVyID0gMDtcblxuZnVuY3Rpb24gcGxhY2VTaGlwUGFnZSAodG90YWxMZW5ndGgsIGdhbWUpe1xuICAgIHJlbW92ZUFsbENoaWxkKGdiSW5pdCk7XG4gICAgbGV0IHNoaXBOYW1lO1xuICAgIGxldCBzaGlwTGVuZ3RoO1xuICAgIFxuICAgIHN3aXRjaChjb3VudGVyKXtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgc2hpcE5hbWUgPSAnQ2Fycmllcic7XG4gICAgICAgICAgICBzaGlwTGVuZ3RoID0gNTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBzaGlwTmFtZSA9ICdCYXR0bGVzaGlwJztcbiAgICAgICAgICAgIHNoaXBMZW5ndGggPSA0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHNoaXBOYW1lID0gJ0Rlc3Ryb3llcic7XG4gICAgICAgICAgICBzaGlwTGVuZ3RoID0gMztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBzaGlwTmFtZSA9ICdTdWJtYXJpbmUnO1xuICAgICAgICAgICAgc2hpcExlbmd0aCA9IDM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgc2hpcE5hbWUgPSAnUGF0cm9sQm9hdCc7XG4gICAgICAgICAgICBzaGlwTGVuZ3RoID0gMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBwbGFjZVNoaXBQYWdlRS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbWFpblBhZ2VFLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICByZW1vdmVBbGxDaGlsZChnYlBsYXllcik7XG4gICAgICAgICAgICByZW1vdmVBbGxDaGlsZChnYkNvbXB1dGVyKTtcbiAgICAgICAgICAgIHJlbmRlclBsYXllckJvYXJkKHRvdGFsTGVuZ3RoLCBnYW1lKTtcbiAgICAgICAgICAgIHJlbmRlckNvbXB1dGVyQm9hcmQodG90YWxMZW5ndGgsIGdhbWUpO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgXG4gICAgLy8gcm90YXRlIGJ1dHRvbiBzd2l0Y2ggcm90YXRpb24gc3RhdGVcbiAgICBsZXQgcm90YXRlU3RhdHVzID0gMDtcbiAgICBjb25zdCByb3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlJyk7XG4gICAgcm90YXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByb3RhdGVTdGF0dXMgPSAocm90YXRlU3RhdHVzID09IDApID8gMSA6IDA7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzaW5nbGVHcmlkID0gbmV3IEFycmF5KDEwKS5maWxsKCkubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKG51bGwpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsTGVuZ3RoOyBpKyspe1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRvdGFsTGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS5jbGFzc0xpc3QuYWRkKCdncmlkSW5pdCcpO1xuXG4gICAgICAgICAgICBpZiAoZ2FtZS5nYlBsYXllci5ib2FyZFtpXVtqXSA9PSBudWxsKXtcbiAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1NSwyNTUsMjU1KVwiO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigwLDEyOCwwKVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBzaGlwTGVuZ3RoOyBrKyspe1xuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChyb3RhdGVTdGF0dXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoaiArIHNoaXBMZW5ndGgpID4gdG90YWxMZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB0ZW1wID0gMDsgdGVtcCA8IHRvdGFsTGVuZ3RoIC0gajsgdGVtcCsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bait0ZW1wXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNTUsMCwwKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoZ2FtZS5nYlBsYXllci5ib2FyZFtpXVtqK2tdICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2ora10uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjU1LDAsMClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqK2tdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDAsMjU1LDApXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoaSArIHNoaXBMZW5ndGgpID4gdG90YWxMZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB0ZW1wID0gMDsgdGVtcCA8IHRvdGFsTGVuZ3RoIC0gaTsgdGVtcCsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZUdyaWRbaSt0ZW1wXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNTUsMCwwKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoZ2FtZS5nYlBsYXllci5ib2FyZFtpK2tdW2pdICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2kra11bal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjU1LDAsMClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpK2tdW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDAsMjU1LDApXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaChyb3RhdGVTdGF0dXMpe1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHNoaXBMZW5ndGg7IGsrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHRlbXAgPSAwOyB0ZW1wIDwgdG90YWxMZW5ndGggLSBqOyB0ZW1wKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuZ2JQbGF5ZXIuYm9hcmRbaV1bait0ZW1wXSA9PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2ordGVtcF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjU1LDI1NSwyNTUpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2ordGVtcF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMCwxMjgsMClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHNoaXBMZW5ndGg7IGsrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHRlbXAgPSAwOyB0ZW1wIDwgdG90YWxMZW5ndGggLSBpOyB0ZW1wKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZ2FtZS5nYlBsYXllci5ib2FyZFtpK3RlbXBdW2pdID09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZUdyaWRbaSt0ZW1wXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNTUsMjU1LDI1NSlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZUdyaWRbaSt0ZW1wXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigwLDEyOCwwKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbiA9IChyb3RhdGVTdGF0dXMgPT0gMCkgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICAgICAgICAgICAgICAgIGxldCBzdGF0ID0gJ2VtcHR5JztcbiAgICAgICAgICAgICAgICBzd2l0Y2gocm90YXRlU3RhdHVzKXtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBzaGlwTGVuZ3RoOyBrKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaW5nbGVHcmlkW2ldW2ora10uc3R5bGUuYmFja2dyb3VuZENvbG9yID09ICdyZ2IoMjU1LCAwLCAwKScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ID0gJ3Rha2VuJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdCA9PSAnZW1wdHknKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmdiUGxheWVyLnBsYWNlU2hpcChzaGlwTmFtZSwgaSwgaiwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZVNoaXBQYWdlKHRvdGFsTGVuZ3RoLCBnYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHNoaXBMZW5ndGg7IGsrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpbmdsZUdyaWRbaStrXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ3JnYigyNTUsIDAsIDApJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXQgPSAndGFrZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ID09ICdlbXB0eScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuZ2JQbGF5ZXIucGxhY2VTaGlwKHNoaXBOYW1lLCBpLCBqLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlU2hpcFBhZ2UodG90YWxMZW5ndGgsIGdhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnYkluaXQuYXBwZW5kQ2hpbGQoc2luZ2xlR3JpZFtpXVtqXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydHtwbGFjZVNoaXBQYWdlfTsiLCJmdW5jdGlvbiBwbGFjZVNoaXBSYW5kICh0b3RhbExlbmd0aCwgZ2FtZSl7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBzaGlwTmFtZTtcbiAgICBsZXQgc2hpcExlbmd0aDtcbiAgICBcbiAgICB3aGlsZSh0cnVlKXtcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIGxldCBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKTtcbiAgICAgICAgb3JpZW50YXRpb24gPSAob3JpZW50YXRpb24gPT0gMCkgPyAnaG9yaXpvbnRhbCc6J3ZlcnRpY2FsJztcbiAgICAgICAgY29uc29sZS5sb2cob3JpZW50YXRpb24pO1xuICAgICAgICBjb25zb2xlLmxvZyh4LHkpO1xuXG4gICAgICAgIHN3aXRjaChjb3VudGVyKXtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBzaGlwTmFtZSA9ICdDYXJyaWVyJztcbiAgICAgICAgICAgICAgICBzaGlwTGVuZ3RoID0gNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBzaGlwTmFtZSA9ICdCYXR0bGVzaGlwJztcbiAgICAgICAgICAgICAgICBzaGlwTGVuZ3RoID0gNDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBzaGlwTmFtZSA9ICdEZXN0cm95ZXInO1xuICAgICAgICAgICAgICAgIHNoaXBMZW5ndGggPSAzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHNoaXBOYW1lID0gJ1N1Ym1hcmluZSc7XG4gICAgICAgICAgICAgICAgc2hpcExlbmd0aCA9IDM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgc2hpcE5hbWUgPSAnUGF0cm9sQm9hdCc7XG4gICAgICAgICAgICAgICAgc2hpcExlbmd0aCA9IDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBzdGF0ID0gJ2VtcHR5JztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgc3dpdGNoKG9yaWVudGF0aW9uKXtcbiAgICAgICAgICAgIGNhc2UgJ2hvcml6b250YWwnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc2hpcExlbmd0aDsgaysrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCgoeSArIHNoaXBMZW5ndGgpIDwgdG90YWxMZW5ndGgpICYmIGdhbWUuZ2JDb21wdXRlci5ib2FyZFt4XVt5K2tdICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdCA9ICd0YWtlbic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoKCh5ICsgc2hpcExlbmd0aCkgPCB0b3RhbExlbmd0aCkgJiYgKHN0YXQgPT0gJ2VtcHR5Jykpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzaGlwTmFtZSwgeCwgeSwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBnYW1lLmdiQ29tcHV0ZXIucGxhY2VTaGlwKHNoaXBOYW1lLCB4LCB5LCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndmVydGljYWwnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc2hpcExlbmd0aDsgaysrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCgoeCArIHNoaXBMZW5ndGgpIDwgdG90YWxMZW5ndGgpICYmIGdhbWUuZ2JDb21wdXRlci5ib2FyZFt4K2tdW3ldICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdCA9ICd0YWtlbic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCgoeCArIHNoaXBMZW5ndGgpIDwgdG90YWxMZW5ndGgpICYmIChzdGF0ID09ICdlbXB0eScpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2hpcE5hbWUsIHgsIHksIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5nYkNvbXB1dGVyLnBsYWNlU2hpcChzaGlwTmFtZSwgeCwgeSwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGNvdW50ZXIgPT0gNSl7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0e3BsYWNlU2hpcFJhbmR9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vZmFjdG9yaWVzL1BsYXllcic7XG5pbXBvcnQgeyBwbGFjZVNoaXBQYWdlIH0gZnJvbSAnLi9wbGFjZVNoaXBQYWdlJztcbmltcG9ydCB7IHBsYWNlU2hpcFJhbmQgfSBmcm9tICcuL3BsYWNlU2hpcFJhbmQnO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubGV0IHRvdGFsTGVuZ3RoID0gMTA7XG5cbmNvbnN0IGdhbWUgPSBQbGF5ZXIoKTtcblxucGxhY2VTaGlwUGFnZSh0b3RhbExlbmd0aCwgZ2FtZSk7XG5wbGFjZVNoaXBSYW5kKHRvdGFsTGVuZ3RoLCBnYW1lKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=