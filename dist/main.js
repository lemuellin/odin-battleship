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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before{\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto';\n}\n\n.title{\n    background-color: #0b2545;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 40px;\n    height: 8rem;\n    top:0;\n}\n\n#mainPage{    \n    background-color: #0b2545;\n    height: 100vh;\n    display: none;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 600px;\n}\n\n@media (max-width: 900px){\n    #mainPage{\n        flex-direction: column;\n        justify-content: space-around;\n        align-items: center;\n        height: auto;\n        gap: 5rem;\n        padding: 3rem;\n    }\n}\n\n.container2{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\nh2{\n    color: white;\n}\n\n.gbPlayer, .gbComputer, .gbInit{\n    width: 400px;\n    height: 400px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-content: flex-start;\n    border: 20px solid #326990;\n    border-radius: 5%;\n}\n\n.grid{\n    width: 40px;\n    height: 40px;\n    background-color: green;\n    box-sizing: border-box;\n    border: .1px solid gray;\n}\n\n.grid:hover{\n    opacity: 0.5;\n}\n\n.gridInit{\n    width: 40px;\n    height: 40px;\n    background-color: white;\n    box-sizing: border-box;\n    border: .1px solid gray;\n}\n\n@media (max-width: 500px){\n    .gbPlayer, .gbComputer, .gbInit{\n        width: 320px;\n        height: 320px;\n        border: 16px solid #326990;\n    }\n\n    .grid, .gridInit{\n        width: 32px;\n        height: 32px;\n        border: .1px solid gray;\n    }\n}\n\n#resultPage, #placeShipPage{\n    min-height: 600px;\n    position: absolute;\n    z-index: 0;\n    display: none;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    opacity: 0.8;\n    justify-content: center;\n    align-items: center;\n}\n\n#resultPage{\n    background-color: black;\n}\n\n.result{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 40px;\n}\n\n.text{\n    color: #e8002a;\n    font-size: 2rem;\n}\n\n.winner{\n    color: #FF0000;\n    font-size: 3rem;\n}\n\n.restart{\n    background-color: lightblue;\n    border: none;\n    border-radius: 50px;\n    font-size: 1.5rem;\n    padding: 20px;\n}\n\n.restart:hover{\n    opacity: 0.5;\n}\n\n/* ---------- */\n#placeShipPage{\n    display: flex;\n    opacity: 1;\n    background-color: #0b2545;\n}\n\n.container1{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    background-color: #0b2545;\n}\n\n.container11 > h2{\n    display: flex;\n    align-items: center;\n}\n\n.container11{\n    display: flex;\n    justify-content: space-between;\n}\n\n.rotate{\n    width: 35px;\n    height: 35px;\n    background-color: red;\n    border: none;\n    border-radius: 50%;\n    cursor: pointer;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.rotate:hover{\n    opacity: 0.9;\n    transition: transform .15s; /* animation*/\n    transform: scale(1.2);\n}\n\n.rotate:active{\n    background-color: white;\n    transform: translateY(2px);\n}\n\nsvg{\n    width: 20px;\n    height: 20px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,YAAY;IACZ,KAAK;AACT;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI;QACI,sBAAsB;QACtB,6BAA6B;QAC7B,mBAAmB;QACnB,YAAY;QACZ,SAAS;QACT,aAAa;IACjB;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,eAAe;IACf,2BAA2B;IAC3B,yBAAyB;IACzB,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI;QACI,YAAY;QACZ,aAAa;QACb,0BAA0B;IAC9B;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,uBAAuB;IAC3B;AACJ;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,2BAA2B;IAC3B,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA,eAAe;AACf;IACI,aAAa;IACb,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;IAClB,eAAe;;IAEf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,0BAA0B,EAAE,aAAa;IACzC,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap');\n\n*, *::after, *::before{\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto';\n}\n\n.title{\n    background-color: #0b2545;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 40px;\n    height: 8rem;\n    top:0;\n}\n\n#mainPage{    \n    background-color: #0b2545;\n    height: 100vh;\n    display: none;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 600px;\n}\n\n@media (max-width: 900px){\n    #mainPage{\n        flex-direction: column;\n        justify-content: space-around;\n        align-items: center;\n        height: auto;\n        gap: 5rem;\n        padding: 3rem;\n    }\n}\n\n.container2{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\nh2{\n    color: white;\n}\n\n.gbPlayer, .gbComputer, .gbInit{\n    width: 400px;\n    height: 400px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-content: flex-start;\n    border: 20px solid #326990;\n    border-radius: 5%;\n}\n\n.grid{\n    width: 40px;\n    height: 40px;\n    background-color: green;\n    box-sizing: border-box;\n    border: .1px solid gray;\n}\n\n.grid:hover{\n    opacity: 0.5;\n}\n\n.gridInit{\n    width: 40px;\n    height: 40px;\n    background-color: white;\n    box-sizing: border-box;\n    border: .1px solid gray;\n}\n\n@media (max-width: 500px){\n    .gbPlayer, .gbComputer, .gbInit{\n        width: 320px;\n        height: 320px;\n        border: 16px solid #326990;\n    }\n\n    .grid, .gridInit{\n        width: 32px;\n        height: 32px;\n        border: .1px solid gray;\n    }\n}\n\n#resultPage, #placeShipPage{\n    min-height: 600px;\n    position: absolute;\n    z-index: 0;\n    display: none;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    opacity: 0.8;\n    justify-content: center;\n    align-items: center;\n}\n\n#resultPage{\n    background-color: black;\n}\n\n.result{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 40px;\n}\n\n.text{\n    color: #e8002a;\n    font-size: 2rem;\n}\n\n.winner{\n    color: #FF0000;\n    font-size: 3rem;\n}\n\n.restart{\n    background-color: lightblue;\n    border: none;\n    border-radius: 50px;\n    font-size: 1.5rem;\n    padding: 20px;\n}\n\n.restart:hover{\n    opacity: 0.5;\n}\n\n/* ---------- */\n#placeShipPage{\n    display: flex;\n    opacity: 1;\n    background-color: #0b2545;\n}\n\n.container1{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    background-color: #0b2545;\n}\n\n.container11 > h2{\n    display: flex;\n    align-items: center;\n}\n\n.container11{\n    display: flex;\n    justify-content: space-between;\n}\n\n.rotate{\n    width: 35px;\n    height: 35px;\n    background-color: red;\n    border: none;\n    border-radius: 50%;\n    cursor: pointer;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.rotate:hover{\n    opacity: 0.9;\n    transition: transform .15s; /* animation*/\n    transform: scale(1.2);\n}\n\n.rotate:active{\n    background-color: white;\n    transform: translateY(2px);\n}\n\nsvg{\n    width: 20px;\n    height: 20px;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN6RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ1E7QUFDQTs7QUFFM0I7O0FBRXJCOztBQUVBLGFBQWEsd0RBQU07O0FBRW5CLDZEQUFhO0FBQ2IsNkRBQWEsb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL1JlbmRlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvY2hlY2tXaW4uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9TaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9wbGFjZVNoaXBQYWdlLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9wbGFjZVNoaXBSYW5kLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxufVxcblxcbi50aXRsZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMjU0NTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIHRvcDowO1xcbn1cXG5cXG4jbWFpblBhZ2V7ICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIyNTQ1O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogNjAwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCl7XFxuICAgICNtYWluUGFnZXtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBnYXA6IDVyZW07XFxuICAgICAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICB9XFxufVxcblxcbi5jb250YWluZXIye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmgye1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5nYlBsYXllciwgLmdiQ29tcHV0ZXIsIC5nYkluaXR7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlcjogMjBweCBzb2xpZCAjMzI2OTkwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG59XFxuXFxuLmdyaWR7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IC4xcHggc29saWQgZ3JheTtcXG59XFxuXFxuLmdyaWQ6aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmdyaWRJbml0e1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiAuMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCl7XFxuICAgIC5nYlBsYXllciwgLmdiQ29tcHV0ZXIsIC5nYkluaXR7XFxuICAgICAgICB3aWR0aDogMzIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICAgICAgYm9yZGVyOiAxNnB4IHNvbGlkICMzMjY5OTA7XFxuICAgIH1cXG5cXG4gICAgLmdyaWQsIC5ncmlkSW5pdHtcXG4gICAgICAgIHdpZHRoOiAzMnB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgICAgYm9yZGVyOiAuMXB4IHNvbGlkIGdyYXk7XFxuICAgIH1cXG59XFxuXFxuI3Jlc3VsdFBhZ2UsICNwbGFjZVNoaXBQYWdle1xcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNyZXN1bHRQYWdle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnJlc3VsdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuLnRleHR7XFxuICAgIGNvbG9yOiAjZTgwMDJhO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi53aW5uZXJ7XFxuICAgIGNvbG9yOiAjRkYwMDAwO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5yZXN0YXJ0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5yZXN0YXJ0OmhvdmVye1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0gKi9cXG4jcGxhY2VTaGlwUGFnZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMjU0NTtcXG59XFxuXFxuLmNvbnRhaW5lcjF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMjU0NTtcXG59XFxuXFxuLmNvbnRhaW5lcjExID4gaDJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIxMXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucm90YXRle1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm90YXRlOmhvdmVye1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMTVzOyAvKiBhbmltYXRpb24qL1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5yb3RhdGU6YWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxufVxcblxcbnN2Z3tcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsWUFBWTtJQUNaLEtBQUs7QUFDVDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsNkJBQTZCO1FBQzdCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osU0FBUztRQUNULGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWix1QkFBdUI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLGVBQWU7QUFDZjtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7O0lBRWYsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMEJBQTBCLEVBQUUsYUFBYTtJQUN6QyxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbiosICo6OmFmdGVyLCAqOjpiZWZvcmV7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjI1NDU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgaGVpZ2h0OiA4cmVtO1xcbiAgICB0b3A6MDtcXG59XFxuXFxuI21haW5QYWdleyAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMjU0NTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpe1xcbiAgICAjbWFpblBhZ2V7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgZ2FwOiA1cmVtO1xcbiAgICAgICAgcGFkZGluZzogM3JlbTtcXG4gICAgfVxcbn1cXG5cXG4uY29udGFpbmVyMntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5oMntcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZ2JQbGF5ZXIsIC5nYkNvbXB1dGVyLCAuZ2JJbml0e1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBib3JkZXI6IDIwcHggc29saWQgIzMyNjk5MDtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxufVxcblxcbi5ncmlke1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiAuMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi5ncmlkOmhvdmVye1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5ncmlkSW5pdHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogLjFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpe1xcbiAgICAuZ2JQbGF5ZXIsIC5nYkNvbXB1dGVyLCAuZ2JJbml0e1xcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcXG4gICAgICAgIGJvcmRlcjogMTZweCBzb2xpZCAjMzI2OTkwO1xcbiAgICB9XFxuXFxuICAgIC5ncmlkLCAuZ3JpZEluaXR7XFxuICAgICAgICB3aWR0aDogMzJweDtcXG4gICAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICAgIGJvcmRlcjogLjFweCBzb2xpZCBncmF5O1xcbiAgICB9XFxufVxcblxcbiNyZXN1bHRQYWdlLCAjcGxhY2VTaGlwUGFnZXtcXG4gICAgbWluLWhlaWdodDogNjAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcmVzdWx0UGFnZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5yZXN1bHR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDQwcHg7XFxufVxcblxcbi50ZXh0e1xcbiAgICBjb2xvcjogI2U4MDAyYTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ud2lubmVye1xcbiAgICBjb2xvcjogI0ZGMDAwMDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ucmVzdGFydHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ucmVzdGFydDpob3ZlcntcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tICovXFxuI3BsYWNlU2hpcFBhZ2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjI1NDU7XFxufVxcblxcbi5jb250YWluZXIxe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjI1NDU7XFxufVxcblxcbi5jb250YWluZXIxMSA+IGgye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyMTF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnJvdGF0ZXtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJvdGF0ZTpob3ZlcntcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjE1czsgLyogYW5pbWF0aW9uKi9cXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ucm90YXRlOmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcbn1cXG5cXG5zdmd7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtjaGVja1dpbn0gZnJvbSAnLi9jaGVja1dpbi5qcyc7XG5cbmNvbnN0IGdiUGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdiUGxheWVyJyk7XG5jb25zdCBnYkNvbXB1dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdiQ29tcHV0ZXInKTtcblxuZnVuY3Rpb24gcmVuZGVyUGxheWVyQm9hcmQodG90YWxMZW5ndGgsIGdhbWUpe1xuICAgIGNvbnN0IHNpbmdsZUdyaWQgPSBuZXcgQXJyYXkoMTApLmZpbGwoKS5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwobnVsbCkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxMZW5ndGg7IGkrKyl7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdG90YWxMZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcbiAgICBcbiAgICAgICAgICAgIGlmIChnYW1lLmdiUGxheWVyLmJvYXJkW2ldW2pdID09IG51bGwpe1xuICAgICAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjU1LDI1NSwyNTUpXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdhbWUuZ2JQbGF5ZXIuYm9hcmRbaV1bal0gPT0gJ21pc3MnKXtcbiAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDAsMCwwKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChnYW1lLmdiUGxheWVyLmJvYXJkW2ldW2pdWzJdID09ICdoaXQnKXtcbiAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1NSwwLDApXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMCwxMjgsMClcIjtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGdiUGxheWVyLmFwcGVuZENoaWxkKHNpbmdsZUdyaWRbaV1bal0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJDb21wdXRlckJvYXJkKHRvdGFsTGVuZ3RoLCBnYW1lKXtcbiAgICBjb25zdCBzaW5nbGVHcmlkID0gbmV3IEFycmF5KDEwKS5maWxsKCkubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKG51bGwpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsTGVuZ3RoOyBpKyspe1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRvdGFsTGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS5jbGFzc0xpc3QuYWRkKCdncmlkJyk7XG5cbiAgICAgICAgICAgIGlmIChnYW1lLmdiQ29tcHV0ZXIuYm9hcmRbaV1bal0gPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNTUsMjU1LDI1NSlcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZS5nYkNvbXB1dGVyLmJvYXJkW2ldW2pdID09ICdtaXNzJyl7XG4gICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigwLDAsMClcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZS5nYkNvbXB1dGVyLmJvYXJkW2ldW2pdWzJdID09ICdoaXQnKXtcbiAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1NSwwLDApXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjU1LDI1NSwyNTUpXCI7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBnYkNvbXB1dGVyLmFwcGVuZENoaWxkKHNpbmdsZUdyaWRbaV1bal0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbW92ZUFsbENoaWxkKGdiUGxheWVyKTtcbiAgICAgICAgICAgICAgICByZW1vdmVBbGxDaGlsZChnYkNvbXB1dGVyKTtcbiAgICAgICAgICAgICAgICBnYW1lLmF0dGFjayhpLCBqKTtcbiAgICAgICAgICAgICAgICByZW5kZXJQbGF5ZXJCb2FyZCh0b3RhbExlbmd0aCwgZ2FtZSk7XG4gICAgICAgICAgICAgICAgcmVuZGVyQ29tcHV0ZXJCb2FyZCh0b3RhbExlbmd0aCwgZ2FtZSk7XG4gICAgICAgICAgICAgICAgY2hlY2tXaW4oZ2FtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGQgKHBhcmVudCl7XG4gICAgd2hpbGUocGFyZW50LmZpcnN0Q2hpbGQpe1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZXhwb3J0e3JlbmRlclBsYXllckJvYXJkLCByZW5kZXJDb21wdXRlckJvYXJkLCByZW1vdmVBbGxDaGlsZH07IiwiZnVuY3Rpb24gY2hlY2tXaW4gKGdhbWUpe1xuICAgIGlmIChnYW1lLmdiQ29tcHV0ZXIuYWxsU3VuaygpKXtcbiAgICAgICAgbGV0IHdpbm5lciA9ICdZT1UnO1xuICAgICAgICBkaXNwbGF5UmVzdWx0KHdpbm5lcik7XG4gICAgfSBlbHNlIGlmIChnYW1lLmdiUGxheWVyLmFsbFN1bmsoKSl7XG4gICAgICAgIGxldCB3aW5uZXIgPSAnR2VuZXJhbCBSb2JvdCc7XG4gICAgICAgIGRpc3BsYXlSZXN1bHQod2lubmVyKTtcbiAgICB9XG59XG5cbi8vIERpc3BsYXkgUmVzdWx0IG9uIFJlc3VsdCBQYWdlXG5jb25zdCByZXN1bHRQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdFBhZ2UnKTtcbmNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5QYWdlJyk7ICAgXG5cbmZ1bmN0aW9uIGRpc3BsYXlSZXN1bHQgKHdpbm5lcil7XG4gICAgcmVzdWx0UGFnZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIG1haW5QYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29uc3Qgd2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcicpO1xuICAgIHdpbi50ZXh0Q29udGVudCA9IHdpbm5lcjtcbn1cblxuLy8gcmVzdGFydCBidXR0b25cbmNvbnN0IHJlc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydCcpO1xucmVzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZXN1bHRQYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgLy8gY2xlYXIgYm9hcmRcbiAgICAvLyByZXNldCBnYW1lYm9hcmQsIHBsYXllci4uLiBkYXRhXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG5cbmV4cG9ydCB7Y2hlY2tXaW59OyIsImNvbnN0IFNoaXAgPSByZXF1aXJlKCcuL1NoaXAnKTtcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGxldCBib2FyZCA9IG5ldyBBcnJheSgxMCkuZmlsbCgpLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XG4gICAgbGV0IHNoaXBBcnIgPSBbXTtcblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwTmFtZSwgeCwgeSwgb3JpZW50YXRpb24pID0+IHtcbiAgICAgICAgbGV0IHNoaXBMZW5ndGg7XG5cbiAgICAgICAgc3dpdGNoKHNoaXBOYW1lKXtcbiAgICAgICAgICAgIGNhc2UgJ0NhcnJpZXInOlxuICAgICAgICAgICAgICAgIHNoaXBMZW5ndGggPSA1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQmF0dGxlc2hpcCc6XG4gICAgICAgICAgICAgICAgc2hpcExlbmd0aCA9IDQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdEZXN0cm95ZXInOlxuICAgICAgICAgICAgICAgIHNoaXBMZW5ndGggPSAzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnU3VibWFyaW5lJzpcbiAgICAgICAgICAgICAgICBzaGlwTGVuZ3RoID0gMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1BhdHJvbEJvYXQnOlxuICAgICAgICAgICAgICAgIHNoaXBMZW5ndGggPSAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hpcE5hbWUgPSBTaGlwKHNoaXBMZW5ndGgsIHNoaXBOYW1lKTtcbiAgICAgICAgc2hpcEFyci5wdXNoKHNoaXBOYW1lKTtcblxuICAgICAgICBzd2l0Y2gob3JpZW50YXRpb24pe1xuICAgICAgICAgICAgY2FzZSAnaG9yaXpvbnRhbCc6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBib2FyZFt4XVt5ICsgaV0gPSBbc2hpcE5hbWUsIGldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICd2ZXJ0aWNhbCc6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBib2FyZFt4ICsgaV1beV0gPSBbc2hpcE5hbWUsIGldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGlmIChib2FyZFt4XVt5XSA9PSBudWxsKXtcbiAgICAgICAgICAgIGJvYXJkW3hdW3ldID0gJ21pc3MnO1xuICAgICAgICB9ZWxzZSBpZiAoYm9hcmRbeF1beV0gPT0gJ21pc3MnIHx8IGJvYXJkW3hdW3ldID09ICdoaXQnKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkIGF0dGFjaycpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGJvYXJkW3hdW3ldWzBdLmhpdChib2FyZFt4XVt5XVsxXSk7XG4gICAgICAgICAgICBib2FyZFt4XVt5XVsyXSA9ICdoaXQnO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIG51bGwgLT4gbWlzc1xuICAgIC8vIHNoaXAgLT4gaGl0XG4gICAgLy8gaGl0IC0+IGFnYWluXG4gICAgLy8gbWlzcyAtPiBhZ2FpblxuXG5cbiAgICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcEFyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAoc2hpcEFycltpXS5pc1N1bmsoKSA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG4gICAgcmV0dXJue2JvYXJkLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGFsbFN1bmt9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7IiwiY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZSgnLi9HYW1lYm9hcmQnKTtcblxuY29uc3QgUGxheWVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGdiUGxheWVyID0gR2FtZWJvYXJkKCk7XG4gICAgY29uc3QgZ2JDb21wdXRlciA9IEdhbWVib2FyZCgpO1xuXG4gICAgY29uc3QgYXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICAgICAgaWYgKGdiQ29tcHV0ZXIuYm9hcmRbeF1beV0gPT0gbnVsbCB8fCAoZ2JDb21wdXRlci5ib2FyZFt4XVt5XSAhPSBudWxsICYmIGdiQ29tcHV0ZXIuYm9hcmRbeF1beV1bMl0gIT0gJ2hpdCcgJiYgZ2JDb21wdXRlci5ib2FyZFt4XVt5XSAhPSAnbWlzcycpKXtcbiAgICAgICAgICAgIGdiQ29tcHV0ZXIucmVjZWl2ZUF0dGFjayh4LCB5KTtcblxuICAgICAgICAgICAgd2hpbGUodHJ1ZSl7XG4gICAgICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcblxuICAgICAgICAgICAgICAgIGlmIChnYlBsYXllci5ib2FyZFt4XVt5XSA9PSBudWxsIHx8IChnYlBsYXllci5ib2FyZFt4XVt5XSAhPSBudWxsICYmIGdiUGxheWVyLmJvYXJkW3hdW3ldWzJdICE9ICdoaXQnICYmIGdiUGxheWVyLmJvYXJkW3hdW3ldICE9ICdtaXNzJykpe1xuICAgICAgICAgICAgICAgICAgICBnYlBsYXllci5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJue2diUGxheWVyLCBnYkNvbXB1dGVyLCBhdHRhY2t9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7IiwiY29uc3QgU2hpcCA9IChsZW5ndGgsIHNoaXBOYW1lKSA9PiB7XG4gICAgbGV0IGRlY2sgPSBbXTtcbiAgICBsZXQgZGVja0hpdCA9IFtdO1xuICAgIGxldCBoZWFsdGggPSBsZW5ndGg7XG4gICAgY29uc3QgZ2V0SGVhbHRoID0gKCkgPT4gbGVuZ3RoO1xuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBzaGlwTmFtZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICBkZWNrW2ldID0gaTtcbiAgICB9XG5cbiAgICBjb25zdCBoaXQgPSAoeCkgPT4ge1xuICAgICAgICBpZiAoZGVjay5pbmNsdWRlcyh4KSl7XG4gICAgICAgICAgICBoZWFsdGgtLTtcblxuICAgICAgICAgICAgZGVja0hpdC5wdXNoKHgpO1xuICAgICAgICAgICAgZGVja0hpdCA9IGRlY2tIaXQuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGxldCBpbmRleCA9IGRlY2suaW5kZXhPZih4KTsgXG4gICAgICAgICAgICAvLyBpZiAoaW5kZXggPiAtMSkgeyAgIC8vaW5kZXggZXhpc3RcbiAgICAgICAgICAgICAgICAvLyBkZWNrLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgLy8gZGVja1tpbmRleF0gPSBcImhpdFwiO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICAgIGlzU3VuaygpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgaWYgKGhlYWx0aCA9PSAwKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJue2dldEhlYWx0aCwgZ2V0TmFtZSwgaXNTdW5rLCBoaXQsIGRlY2tIaXR9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwOyIsImltcG9ydCB7cmVtb3ZlQWxsQ2hpbGR9IGZyb20gJy4vUmVuZGVyLmpzJztcbmltcG9ydCB7cmVuZGVyUGxheWVyQm9hcmQsIHJlbmRlckNvbXB1dGVyQm9hcmR9IGZyb20gJy4vUmVuZGVyLmpzJztcblxuY29uc3QgZ2JJbml0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdiSW5pdCcpO1xuY29uc3QgcGxhY2VTaGlwUGFnZUUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2VTaGlwUGFnZScpO1xuY29uc3QgbWFpblBhZ2VFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5QYWdlJyk7XG5jb25zdCBnYlBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYlBsYXllcicpO1xuY29uc3QgZ2JDb21wdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYkNvbXB1dGVyJyk7XG5sZXQgY291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcFBhZ2UgKHRvdGFsTGVuZ3RoLCBnYW1lKXtcbiAgICByZW1vdmVBbGxDaGlsZChnYkluaXQpO1xuICAgIGxldCBzaGlwTmFtZTtcbiAgICBsZXQgc2hpcExlbmd0aDtcbiAgICBcbiAgICBzd2l0Y2goY291bnRlcil7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHNoaXBOYW1lID0gJ0NhcnJpZXInO1xuICAgICAgICAgICAgc2hpcExlbmd0aCA9IDU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgc2hpcE5hbWUgPSAnQmF0dGxlc2hpcCc7XG4gICAgICAgICAgICBzaGlwTGVuZ3RoID0gNDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBzaGlwTmFtZSA9ICdEZXN0cm95ZXInO1xuICAgICAgICAgICAgc2hpcExlbmd0aCA9IDM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgc2hpcE5hbWUgPSAnU3VibWFyaW5lJztcbiAgICAgICAgICAgIHNoaXBMZW5ndGggPSAzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHNoaXBOYW1lID0gJ1BhdHJvbEJvYXQnO1xuICAgICAgICAgICAgc2hpcExlbmd0aCA9IDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgcGxhY2VTaGlwUGFnZUUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIG1haW5QYWdlRS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgcmVtb3ZlQWxsQ2hpbGQoZ2JQbGF5ZXIpO1xuICAgICAgICAgICAgcmVtb3ZlQWxsQ2hpbGQoZ2JDb21wdXRlcik7XG4gICAgICAgICAgICByZW5kZXJQbGF5ZXJCb2FyZCh0b3RhbExlbmd0aCwgZ2FtZSk7XG4gICAgICAgICAgICByZW5kZXJDb21wdXRlckJvYXJkKHRvdGFsTGVuZ3RoLCBnYW1lKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIFxuICAgIC8vIHJvdGF0ZSBidXR0b24gc3dpdGNoIHJvdGF0aW9uIHN0YXRlXG4gICAgbGV0IHJvdGF0ZVN0YXR1cyA9IDA7XG4gICAgY29uc3Qgcm90YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZScpO1xuICAgIHJvdGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcm90YXRlU3RhdHVzID0gKHJvdGF0ZVN0YXR1cyA9PSAwKSA/IDEgOiAwO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc2luZ2xlR3JpZCA9IG5ldyBBcnJheSgxMCkuZmlsbCgpLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbExlbmd0aDsgaSsrKXtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0b3RhbExlbmd0aDsgaisrKXtcbiAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bal0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bal0uY2xhc3NMaXN0LmFkZCgnZ3JpZEluaXQnKTtcblxuICAgICAgICAgICAgaWYgKGdhbWUuZ2JQbGF5ZXIuYm9hcmRbaV1bal0gPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNTUsMjU1LDI1NSlcIjtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMCwxMjgsMClcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc2hpcExlbmd0aDsgaysrKXtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2gocm90YXRlU3RhdHVzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGogKyBzaGlwTGVuZ3RoKSA+IHRvdGFsTGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdGVtcCA9IDA7IHRlbXAgPCB0b3RhbExlbmd0aCAtIGo7IHRlbXArKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2ordGVtcF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjU1LDAsMClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGdhbWUuZ2JQbGF5ZXIuYm9hcmRbaV1baitrXSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqK2tdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1NSwwLDApXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1baitrXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigwLDI1NSwwKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGkgKyBzaGlwTGVuZ3RoKSA+IHRvdGFsTGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdGVtcCA9IDA7IHRlbXAgPCB0b3RhbExlbmd0aCAtIGk7IHRlbXArKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2krdGVtcF1bal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjU1LDAsMClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGdhbWUuZ2JQbGF5ZXIuYm9hcmRbaStrXVtqXSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpK2tdW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1NSwwLDApXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZUdyaWRbaStrXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigwLDI1NSwwKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bal0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2gocm90YXRlU3RhdHVzKXtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBzaGlwTGVuZ3RoOyBrKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB0ZW1wID0gMDsgdGVtcCA8IHRvdGFsTGVuZ3RoIC0gajsgdGVtcCsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLmdiUGxheWVyLmJvYXJkW2ldW2ordGVtcF0gPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqK3RlbXBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1NSwyNTUsMjU1KVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqK3RlbXBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDAsMTI4LDApXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBzaGlwTGVuZ3RoOyBrKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB0ZW1wID0gMDsgdGVtcCA8IHRvdGFsTGVuZ3RoIC0gaTsgdGVtcCsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGdhbWUuZ2JQbGF5ZXIuYm9hcmRbaSt0ZW1wXVtqXSA9PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2krdGVtcF1bal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjU1LDI1NSwyNTUpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2krdGVtcF1bal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMCwxMjgsMClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgb3JpZW50YXRpb24gPSAocm90YXRlU3RhdHVzID09IDApID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgICAgICAgICAgICBsZXQgc3RhdCA9ICdlbXB0eSc7XG4gICAgICAgICAgICAgICAgc3dpdGNoKHJvdGF0ZVN0YXR1cyl7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc2hpcExlbmd0aDsgaysrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2luZ2xlR3JpZFtpXVtqK2tdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAncmdiKDI1NSwgMCwgMCknKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdCA9ICd0YWtlbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXQgPT0gJ2VtcHR5Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5nYlBsYXllci5wbGFjZVNoaXAoc2hpcE5hbWUsIGksIGosIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VTaGlwUGFnZSh0b3RhbExlbmd0aCwgZ2FtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBzaGlwTGVuZ3RoOyBrKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaW5nbGVHcmlkW2kra11bal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID09ICdyZ2IoMjU1LCAwLCAwKScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ID0gJ3Rha2VuJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdCA9PSAnZW1wdHknKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmdiUGxheWVyLnBsYWNlU2hpcChzaGlwTmFtZSwgaSwgaiwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZVNoaXBQYWdlKHRvdGFsTGVuZ3RoLCBnYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ2JJbml0LmFwcGVuZENoaWxkKHNpbmdsZUdyaWRbaV1bal0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnR7cGxhY2VTaGlwUGFnZX07IiwiZnVuY3Rpb24gcGxhY2VTaGlwUmFuZCAodG90YWxMZW5ndGgsIGdhbWUpe1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBsZXQgc2hpcE5hbWU7XG4gICAgbGV0IHNoaXBMZW5ndGg7XG4gICAgXG4gICAgd2hpbGUodHJ1ZSl7XG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICBsZXQgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMik7XG4gICAgICAgIG9yaWVudGF0aW9uID0gKG9yaWVudGF0aW9uID09IDApID8gJ2hvcml6b250YWwnOid2ZXJ0aWNhbCc7XG4gICAgICAgIGNvbnNvbGUubG9nKG9yaWVudGF0aW9uKTtcbiAgICAgICAgY29uc29sZS5sb2coeCx5KTtcblxuICAgICAgICBzd2l0Y2goY291bnRlcil7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgc2hpcE5hbWUgPSAnQ2Fycmllcic7XG4gICAgICAgICAgICAgICAgc2hpcExlbmd0aCA9IDU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgc2hpcE5hbWUgPSAnQmF0dGxlc2hpcCc7XG4gICAgICAgICAgICAgICAgc2hpcExlbmd0aCA9IDQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgc2hpcE5hbWUgPSAnRGVzdHJveWVyJztcbiAgICAgICAgICAgICAgICBzaGlwTGVuZ3RoID0gMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBzaGlwTmFtZSA9ICdTdWJtYXJpbmUnO1xuICAgICAgICAgICAgICAgIHNoaXBMZW5ndGggPSAzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHNoaXBOYW1lID0gJ1BhdHJvbEJvYXQnO1xuICAgICAgICAgICAgICAgIHNoaXBMZW5ndGggPSAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgc3RhdCA9ICdlbXB0eSc7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIHN3aXRjaChvcmllbnRhdGlvbil7XG4gICAgICAgICAgICBjYXNlICdob3Jpem9udGFsJzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHNoaXBMZW5ndGg7IGsrKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoKHkgKyBzaGlwTGVuZ3RoKSA8IHRvdGFsTGVuZ3RoKSAmJiBnYW1lLmdiQ29tcHV0ZXIuYm9hcmRbeF1beStrXSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXQgPSAndGFrZW4nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCgoeSArIHNoaXBMZW5ndGgpIDwgdG90YWxMZW5ndGgpICYmIChzdGF0ID09ICdlbXB0eScpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2hpcE5hbWUsIHgsIHksIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5nYkNvbXB1dGVyLnBsYWNlU2hpcChzaGlwTmFtZSwgeCwgeSwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3ZlcnRpY2FsJzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHNoaXBMZW5ndGg7IGsrKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoKHggKyBzaGlwTGVuZ3RoKSA8IHRvdGFsTGVuZ3RoKSAmJiBnYW1lLmdiQ29tcHV0ZXIuYm9hcmRbeCtrXVt5XSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXQgPSAndGFrZW4nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoKHggKyBzaGlwTGVuZ3RoKSA8IHRvdGFsTGVuZ3RoKSAmJiAoc3RhdCA9PSAnZW1wdHknKSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXBOYW1lLCB4LCB5LCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuZ2JDb21wdXRlci5wbGFjZVNoaXAoc2hpcE5hbWUsIHgsIHksIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChjb3VudGVyID09IDUpe1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydHtwbGFjZVNoaXBSYW5kfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL2ZhY3Rvcmllcy9QbGF5ZXInO1xuaW1wb3J0IHsgcGxhY2VTaGlwUGFnZSB9IGZyb20gJy4vcGxhY2VTaGlwUGFnZSc7XG5pbXBvcnQgeyBwbGFjZVNoaXBSYW5kIH0gZnJvbSAnLi9wbGFjZVNoaXBSYW5kJztcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmxldCB0b3RhbExlbmd0aCA9IDEwO1xuXG5jb25zdCBnYW1lID0gUGxheWVyKCk7XG5cbnBsYWNlU2hpcFBhZ2UodG90YWxMZW5ndGgsIGdhbWUpO1xucGxhY2VTaGlwUmFuZCh0b3RhbExlbmd0aCwgZ2FtZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9