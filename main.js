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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before{\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto';\n}\n\n.title{\n    background-color: #0b2545;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 40px;\n    height: 8rem;\n    top:0;\n}\n\n#mainPage{    \n    background-color: #0b2545;\n    height: 100vh;\n    display: none;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 600px;\n}\n\n@media (max-width: 900px){\n    #mainPage{\n        flex-direction: column;\n        justify-content: space-around;\n        align-items: center;\n        height: auto;\n        gap: 5rem;\n        padding: 3rem;\n    }\n}\n\n.container2{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\nh2{\n    color: white;\n}\n\n.gbPlayer, .gbComputer, .gbInit{\n    width: 400px;\n    height: 400px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-content: flex-start;\n    border: 20px solid #326990;\n    border-radius: 5%;\n}\n\n.grid{\n    width: 40px;\n    height: 40px;\n    background-color: green;\n    box-sizing: border-box;\n    border: .1px solid gray;\n    font-size: xx-large;\n    text-align: center;\n}\n\n.grid:hover{\n    opacity: 0.5;\n}\n\n.gridInit{\n    width: 40px;\n    height: 40px;\n    background-color: white;\n    box-sizing: border-box;\n    border: .1px solid gray;\n}\n\n@media (max-width: 500px){\n    .gbPlayer, .gbComputer, .gbInit{\n        width: 320px;\n        height: 320px;\n        border: 16px solid #326990;\n    }\n\n    .grid, .gridInit{\n        width: 32px;\n        height: 32px;\n        border: .1px solid gray;\n    }\n}\n\n#resultPage, #placeShipPage{\n    min-height: 600px;\n    position: absolute;\n    z-index: 0;\n    display: none;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    opacity: 0.8;\n    justify-content: center;\n    align-items: center;\n}\n\n#resultPage{\n    background-color: black;\n}\n\n.result{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 40px;\n}\n\n.text{\n    color: #e8002a;\n    font-size: 2rem;\n}\n\n.winner{\n    color: #FF0000;\n    font-size: 3rem;\n}\n\n.restart{\n    background-color: lightblue;\n    border: none;\n    border-radius: 50px;\n    font-size: 1.5rem;\n    padding: 20px;\n}\n\n.restart:hover{\n    opacity: 0.5;\n}\n\n/* ---------- */\n#placeShipPage{\n    display: flex;\n    opacity: 1;\n    background-color: #0b2545;\n}\n\n.container1{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    background-color: #0b2545;\n}\n\n.container11 > h2{\n    display: flex;\n    align-items: center;\n}\n\n.container11{\n    display: flex;\n    justify-content: space-between;\n}\n\n.rotate{\n    width: 35px;\n    height: 35px;\n    background-color: red;\n    border: none;\n    border-radius: 50%;\n    cursor: pointer;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.rotate:hover{\n    opacity: 0.9;\n    transition: transform .15s; /* animation*/\n    transform: scale(1.2);\n}\n\n.rotate:active{\n    background-color: white;\n    transform: translateY(2px);\n}\n\nsvg{\n    width: 20px;\n    height: 20px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,YAAY;IACZ,KAAK;AACT;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI;QACI,sBAAsB;QACtB,6BAA6B;QAC7B,mBAAmB;QACnB,YAAY;QACZ,SAAS;QACT,aAAa;IACjB;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,eAAe;IACf,2BAA2B;IAC3B,yBAAyB;IACzB,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI;QACI,YAAY;QACZ,aAAa;QACb,0BAA0B;IAC9B;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,uBAAuB;IAC3B;AACJ;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,2BAA2B;IAC3B,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA,eAAe;AACf;IACI,aAAa;IACb,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;IAClB,eAAe;;IAEf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,0BAA0B,EAAE,aAAa;IACzC,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap');\n\n*, *::after, *::before{\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto';\n}\n\n.title{\n    background-color: #0b2545;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 40px;\n    height: 8rem;\n    top:0;\n}\n\n#mainPage{    \n    background-color: #0b2545;\n    height: 100vh;\n    display: none;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 600px;\n}\n\n@media (max-width: 900px){\n    #mainPage{\n        flex-direction: column;\n        justify-content: space-around;\n        align-items: center;\n        height: auto;\n        gap: 5rem;\n        padding: 3rem;\n    }\n}\n\n.container2{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\nh2{\n    color: white;\n}\n\n.gbPlayer, .gbComputer, .gbInit{\n    width: 400px;\n    height: 400px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-content: flex-start;\n    border: 20px solid #326990;\n    border-radius: 5%;\n}\n\n.grid{\n    width: 40px;\n    height: 40px;\n    background-color: green;\n    box-sizing: border-box;\n    border: .1px solid gray;\n    font-size: xx-large;\n    text-align: center;\n}\n\n.grid:hover{\n    opacity: 0.5;\n}\n\n.gridInit{\n    width: 40px;\n    height: 40px;\n    background-color: white;\n    box-sizing: border-box;\n    border: .1px solid gray;\n}\n\n@media (max-width: 500px){\n    .gbPlayer, .gbComputer, .gbInit{\n        width: 320px;\n        height: 320px;\n        border: 16px solid #326990;\n    }\n\n    .grid, .gridInit{\n        width: 32px;\n        height: 32px;\n        border: .1px solid gray;\n    }\n}\n\n#resultPage, #placeShipPage{\n    min-height: 600px;\n    position: absolute;\n    z-index: 0;\n    display: none;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    opacity: 0.8;\n    justify-content: center;\n    align-items: center;\n}\n\n#resultPage{\n    background-color: black;\n}\n\n.result{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 40px;\n}\n\n.text{\n    color: #e8002a;\n    font-size: 2rem;\n}\n\n.winner{\n    color: #FF0000;\n    font-size: 3rem;\n}\n\n.restart{\n    background-color: lightblue;\n    border: none;\n    border-radius: 50px;\n    font-size: 1.5rem;\n    padding: 20px;\n}\n\n.restart:hover{\n    opacity: 0.5;\n}\n\n/* ---------- */\n#placeShipPage{\n    display: flex;\n    opacity: 1;\n    background-color: #0b2545;\n}\n\n.container1{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    background-color: #0b2545;\n}\n\n.container11 > h2{\n    display: flex;\n    align-items: center;\n}\n\n.container11{\n    display: flex;\n    justify-content: space-between;\n}\n\n.rotate{\n    width: 35px;\n    height: 35px;\n    background-color: red;\n    border: none;\n    border-radius: 50%;\n    cursor: pointer;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.rotate:hover{\n    opacity: 0.9;\n    transition: transform .15s; /* animation*/\n    transform: scale(1.2);\n}\n\n.rotate:active{\n    background-color: white;\n    transform: translateY(2px);\n}\n\nsvg{\n    width: 20px;\n    height: 20px;\n}"],"sourceRoot":""}]);
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
            } else if (game.gbPlayer.board[i][j][3] == 'SUNK'){
                singleGrid[i][j].style.backgroundColor = "rgb(135,206,250)";
                singleGrid[i][j].textContent = "X";
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
            } else if (game.gbComputer.board[i][j][3] == 'SUNK'){
                singleGrid[i][j].style.backgroundColor = "rgb(135,206,250)";
                singleGrid[i][j].textContent = "X";
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
            // console.log('invalid attack');
        }else{
            board[x][y][0].hit(board[x][y][1]);
            board[x][y][2] = 'hit';
            if(board[x][y][0].isSunk()){
                for(let i=0; i < 10; i++){
                    for(let j=0; j < 10; j++){
                        if((board[i][j] !== null) && (board[i][j].length == 3)){
                            if(board[i][j][0].getName() == board[x][y][0].getName())board[i][j][3] = 'SUNK';
                        }
                    }
                }
            }
        }
    }
    // null -> miss
    // ship -> hit
    // hit -> again
    // miss -> again
    // board[i][j] = [ShipFactory, ShipPosition(0-4), hit, SUNK]
    // board[i][j] = 'miss'
    // null, hit not SUNK, hit and SUNK, miss, Ship


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
        loop1:
        if (gbComputer.board[x][y] == null || (gbComputer.board[x][y] != null && gbComputer.board[x][y][2] != 'hit' && gbComputer.board[x][y] != 'miss')){
            gbComputer.receiveAttack(x, y);

            // hit the spots around it, if all spots taken, move to the next hit spot
            
            for(let i=0; i < 10; i++){
                for(let j=0; j < 10; j++){
                    // if gbPlayer.board is Hit, but not Sunk => hit 1 of 4 spots around => if all 4 spots were hit, go to another "hit not sunk" spot
                    loop2:
                    if(gbPlayer.board[i][j] !== null && gbPlayer.board[i][j].length == 3 && gbPlayer.board[i][j].length !== 4){
                        if(i-1 >= 0 && (gbPlayer.board[i-1][j] == null || (gbPlayer.board[i-1][j] != null && gbPlayer.board[i-1][j][2] != 'hit' && gbPlayer.board[i-1][j] != 'miss'))){
                            gbPlayer.receiveAttack(i-1, j);
                            break loop1;
                        }else if(i+1 <= 9 && (gbPlayer.board[i+1][j] == null || (gbPlayer.board[i+1][j] != null && gbPlayer.board[i+1][j][2] != 'hit' && gbPlayer.board[i+1][j] != 'miss'))){
                            gbPlayer.receiveAttack(i+1, j);
                            break loop1;
                        }else if(j-1 >=0 && (gbPlayer.board[i][j-1] == null || (gbPlayer.board[i][j-1] != null && gbPlayer.board[i][j-1][2] != 'hit' && gbPlayer.board[i][j-1] != 'miss'))){
                            gbPlayer.receiveAttack(i, j-1);
                            break loop1;
                        }else if(j+1 <=9 && (gbPlayer.board[i][j+1] == null || (gbPlayer.board[i][j+1] != null && gbPlayer.board[i][j+1][2] != 'hit' && gbPlayer.board[i][j+1] != 'miss'))){
                            gbPlayer.receiveAttack(i, j+1);
                            break loop1;
                        }
                        // console.log('4 spots full');
                        break loop2;
                    }
                }
            }
            
            while(true){
                let x = Math.floor(Math.random()*10);
                let y = Math.floor(Math.random()*10);

                if (gbPlayer.board[x][y] == null || (gbPlayer.board[x][y] != null && gbPlayer.board[x][y][2] != 'hit' && gbPlayer.board[x][y] != 'miss')){
                    // console.log('random attack');
                    gbPlayer.receiveAttack(x, y);
                    break loop1;
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
        // console.log(orientation);
        // console.log(x,y);

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
                    // console.log(shipName, x, y, orientation);
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
                    // console.log(shipName, x, y, orientation);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ053QztBQUNRO0FBQ0E7O0FBRTNCOztBQUVyQjs7QUFFQSxhQUFhLHdEQUFNOztBQUVuQiw2REFBYTtBQUNiLDZEQUFhLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9SZW5kZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2NoZWNrV2luLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvUGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcGxhY2VTaGlwUGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcGxhY2VTaGlwUmFuZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmFmdGVyLCAqOjpiZWZvcmV7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjI1NDU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgaGVpZ2h0OiA4cmVtO1xcbiAgICB0b3A6MDtcXG59XFxuXFxuI21haW5QYWdleyAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMjU0NTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpe1xcbiAgICAjbWFpblBhZ2V7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgZ2FwOiA1cmVtO1xcbiAgICAgICAgcGFkZGluZzogM3JlbTtcXG4gICAgfVxcbn1cXG5cXG4uY29udGFpbmVyMntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5oMntcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZ2JQbGF5ZXIsIC5nYkNvbXB1dGVyLCAuZ2JJbml0e1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBib3JkZXI6IDIwcHggc29saWQgIzMyNjk5MDtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxufVxcblxcbi5ncmlke1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiAuMXB4IHNvbGlkIGdyYXk7XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdyaWQ6aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmdyaWRJbml0e1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiAuMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCl7XFxuICAgIC5nYlBsYXllciwgLmdiQ29tcHV0ZXIsIC5nYkluaXR7XFxuICAgICAgICB3aWR0aDogMzIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICAgICAgYm9yZGVyOiAxNnB4IHNvbGlkICMzMjY5OTA7XFxuICAgIH1cXG5cXG4gICAgLmdyaWQsIC5ncmlkSW5pdHtcXG4gICAgICAgIHdpZHRoOiAzMnB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgICAgYm9yZGVyOiAuMXB4IHNvbGlkIGdyYXk7XFxuICAgIH1cXG59XFxuXFxuI3Jlc3VsdFBhZ2UsICNwbGFjZVNoaXBQYWdle1xcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNyZXN1bHRQYWdle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnJlc3VsdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuLnRleHR7XFxuICAgIGNvbG9yOiAjZTgwMDJhO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi53aW5uZXJ7XFxuICAgIGNvbG9yOiAjRkYwMDAwO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5yZXN0YXJ0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5yZXN0YXJ0OmhvdmVye1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0gKi9cXG4jcGxhY2VTaGlwUGFnZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMjU0NTtcXG59XFxuXFxuLmNvbnRhaW5lcjF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMjU0NTtcXG59XFxuXFxuLmNvbnRhaW5lcjExID4gaDJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIxMXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucm90YXRle1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm90YXRlOmhvdmVye1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMTVzOyAvKiBhbmltYXRpb24qL1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5yb3RhdGU6YWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxufVxcblxcbnN2Z3tcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsWUFBWTtJQUNaLEtBQUs7QUFDVDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsNkJBQTZCO1FBQzdCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osU0FBUztRQUNULGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYiwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLHVCQUF1QjtJQUMzQjtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUEsZUFBZTtBQUNmO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwwQkFBMEIsRUFBRSxhQUFhO0lBQ3pDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxufVxcblxcbi50aXRsZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMjU0NTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIHRvcDowO1xcbn1cXG5cXG4jbWFpblBhZ2V7ICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIyNTQ1O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogNjAwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCl7XFxuICAgICNtYWluUGFnZXtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBnYXA6IDVyZW07XFxuICAgICAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICB9XFxufVxcblxcbi5jb250YWluZXIye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmgye1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5nYlBsYXllciwgLmdiQ29tcHV0ZXIsIC5nYkluaXR7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlcjogMjBweCBzb2xpZCAjMzI2OTkwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG59XFxuXFxuLmdyaWR7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IC4xcHggc29saWQgZ3JheTtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ3JpZDpob3ZlcntcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uZ3JpZEluaXR7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IC4xcHggc29saWQgZ3JheTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KXtcXG4gICAgLmdiUGxheWVyLCAuZ2JDb21wdXRlciwgLmdiSW5pdHtcXG4gICAgICAgIHdpZHRoOiAzMjBweDtcXG4gICAgICAgIGhlaWdodDogMzIwcHg7XFxuICAgICAgICBib3JkZXI6IDE2cHggc29saWQgIzMyNjk5MDtcXG4gICAgfVxcblxcbiAgICAuZ3JpZCwgLmdyaWRJbml0e1xcbiAgICAgICAgd2lkdGg6IDMycHg7XFxuICAgICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgICBib3JkZXI6IC4xcHggc29saWQgZ3JheTtcXG4gICAgfVxcbn1cXG5cXG4jcmVzdWx0UGFnZSwgI3BsYWNlU2hpcFBhZ2V7XFxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Jlc3VsdFBhZ2V7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucmVzdWx0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4udGV4dHtcXG4gICAgY29sb3I6ICNlODAwMmE7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLndpbm5lcntcXG4gICAgY29sb3I6ICNGRjAwMDA7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnJlc3RhcnR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnJlc3RhcnQ6aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLSAqL1xcbiNwbGFjZVNoaXBQYWdle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIyNTQ1O1xcbn1cXG5cXG4uY29udGFpbmVyMXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIyNTQ1O1xcbn1cXG5cXG4uY29udGFpbmVyMTEgPiBoMntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lcjExe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5yb3RhdGV7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3RhdGU6aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xNXM7IC8qIGFuaW1hdGlvbiovXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnJvdGF0ZTphY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXG59XFxuXFxuc3Zne1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7Y2hlY2tXaW59IGZyb20gJy4vY2hlY2tXaW4uanMnO1xuXG5jb25zdCBnYlBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYlBsYXllcicpO1xuY29uc3QgZ2JDb21wdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYkNvbXB1dGVyJyk7XG5cbmZ1bmN0aW9uIHJlbmRlclBsYXllckJvYXJkKHRvdGFsTGVuZ3RoLCBnYW1lKXtcbiAgICBjb25zdCBzaW5nbGVHcmlkID0gbmV3IEFycmF5KDEwKS5maWxsKCkubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKG51bGwpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsTGVuZ3RoOyBpKyspe1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRvdGFsTGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS5jbGFzc0xpc3QuYWRkKCdncmlkJyk7XG4gICAgXG4gICAgICAgICAgICBpZiAoZ2FtZS5nYlBsYXllci5ib2FyZFtpXVtqXSA9PSBudWxsKXtcbiAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1NSwyNTUsMjU1KVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChnYW1lLmdiUGxheWVyLmJvYXJkW2ldW2pdID09ICdtaXNzJyl7XG4gICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigwLDAsMClcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZS5nYlBsYXllci5ib2FyZFtpXVtqXVszXSA9PSAnU1VOSycpe1xuICAgICAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMTM1LDIwNiwyNTApXCI7XG4gICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChnYW1lLmdiUGxheWVyLmJvYXJkW2ldW2pdWzJdID09ICdoaXQnKXtcbiAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1NSwwLDApXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMCwxMjgsMClcIjtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGdiUGxheWVyLmFwcGVuZENoaWxkKHNpbmdsZUdyaWRbaV1bal0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJDb21wdXRlckJvYXJkKHRvdGFsTGVuZ3RoLCBnYW1lKXtcbiAgICBjb25zdCBzaW5nbGVHcmlkID0gbmV3IEFycmF5KDEwKS5maWxsKCkubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKG51bGwpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsTGVuZ3RoOyBpKyspe1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRvdGFsTGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS5jbGFzc0xpc3QuYWRkKCdncmlkJyk7XG5cbiAgICAgICAgICAgIGlmIChnYW1lLmdiQ29tcHV0ZXIuYm9hcmRbaV1bal0gPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNTUsMjU1LDI1NSlcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZS5nYkNvbXB1dGVyLmJvYXJkW2ldW2pdID09ICdtaXNzJyl7XG4gICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigwLDAsMClcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZS5nYkNvbXB1dGVyLmJvYXJkW2ldW2pdWzNdID09ICdTVU5LJyl7XG4gICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigxMzUsMjA2LDI1MClcIjtcbiAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdhbWUuZ2JDb21wdXRlci5ib2FyZFtpXVtqXVsyXSA9PSAnaGl0Jyl7XG4gICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNTUsMCwwKVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1NSwyNTUsMjU1KVwiO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgZ2JDb21wdXRlci5hcHBlbmRDaGlsZChzaW5nbGVHcmlkW2ldW2pdKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICByZW1vdmVBbGxDaGlsZChnYlBsYXllcik7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxsQ2hpbGQoZ2JDb21wdXRlcik7XG4gICAgICAgICAgICAgICAgZ2FtZS5hdHRhY2soaSwgaik7XG4gICAgICAgICAgICAgICAgcmVuZGVyUGxheWVyQm9hcmQodG90YWxMZW5ndGgsIGdhbWUpO1xuICAgICAgICAgICAgICAgIHJlbmRlckNvbXB1dGVyQm9hcmQodG90YWxMZW5ndGgsIGdhbWUpO1xuICAgICAgICAgICAgICAgIGNoZWNrV2luKGdhbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkIChwYXJlbnQpe1xuICAgIHdoaWxlKHBhcmVudC5maXJzdENoaWxkKXtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmV4cG9ydHtyZW5kZXJQbGF5ZXJCb2FyZCwgcmVuZGVyQ29tcHV0ZXJCb2FyZCwgcmVtb3ZlQWxsQ2hpbGR9OyIsImZ1bmN0aW9uIGNoZWNrV2luIChnYW1lKXtcbiAgICBpZiAoZ2FtZS5nYkNvbXB1dGVyLmFsbFN1bmsoKSl7XG4gICAgICAgIGxldCB3aW5uZXIgPSAnWU9VJztcbiAgICAgICAgZGlzcGxheVJlc3VsdCh3aW5uZXIpO1xuICAgIH0gZWxzZSBpZiAoZ2FtZS5nYlBsYXllci5hbGxTdW5rKCkpe1xuICAgICAgICBsZXQgd2lubmVyID0gJ0dlbmVyYWwgUm9ib3QnO1xuICAgICAgICBkaXNwbGF5UmVzdWx0KHdpbm5lcik7XG4gICAgfVxufVxuXG4vLyBEaXNwbGF5IFJlc3VsdCBvbiBSZXN1bHQgUGFnZVxuY29uc3QgcmVzdWx0UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRQYWdlJyk7XG5jb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluUGFnZScpOyAgIFxuXG5mdW5jdGlvbiBkaXNwbGF5UmVzdWx0ICh3aW5uZXIpe1xuICAgIHJlc3VsdFBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBtYWluUGFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbnN0IHdpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXInKTtcbiAgICB3aW4udGV4dENvbnRlbnQgPSB3aW5uZXI7XG59XG5cbi8vIHJlc3RhcnQgYnV0dG9uXG5jb25zdCByZXN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQnKTtcbnJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVzdWx0UGFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIC8vIGNsZWFyIGJvYXJkXG4gICAgLy8gcmVzZXQgZ2FtZWJvYXJkLCBwbGF5ZXIuLi4gZGF0YVxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuXG5leHBvcnQge2NoZWNrV2lufTsiLCJjb25zdCBTaGlwID0gcmVxdWlyZSgnLi9TaGlwJyk7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBsZXQgYm9hcmQgPSBuZXcgQXJyYXkoMTApLmZpbGwoKS5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwobnVsbCkpO1xuICAgIGxldCBzaGlwQXJyID0gW107XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcE5hbWUsIHgsIHksIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgICAgIGxldCBzaGlwTGVuZ3RoO1xuXG4gICAgICAgIHN3aXRjaChzaGlwTmFtZSl7XG4gICAgICAgICAgICBjYXNlICdDYXJyaWVyJzpcbiAgICAgICAgICAgICAgICBzaGlwTGVuZ3RoID0gNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0JhdHRsZXNoaXAnOlxuICAgICAgICAgICAgICAgIHNoaXBMZW5ndGggPSA0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRGVzdHJveWVyJzpcbiAgICAgICAgICAgICAgICBzaGlwTGVuZ3RoID0gMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1N1Ym1hcmluZSc6XG4gICAgICAgICAgICAgICAgc2hpcExlbmd0aCA9IDM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdQYXRyb2xCb2F0JzpcbiAgICAgICAgICAgICAgICBzaGlwTGVuZ3RoID0gMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHNoaXBOYW1lID0gU2hpcChzaGlwTGVuZ3RoLCBzaGlwTmFtZSk7XG4gICAgICAgIHNoaXBBcnIucHVzaChzaGlwTmFtZSk7XG5cbiAgICAgICAgc3dpdGNoKG9yaWVudGF0aW9uKXtcbiAgICAgICAgICAgIGNhc2UgJ2hvcml6b250YWwnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbeF1beSArIGldID0gW3NoaXBOYW1lLCBpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAndmVydGljYWwnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbeCArIGldW3ldID0gW3NoaXBOYW1lLCBpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgICAgICBpZiAoYm9hcmRbeF1beV0gPT0gbnVsbCl7XG4gICAgICAgICAgICBib2FyZFt4XVt5XSA9ICdtaXNzJztcbiAgICAgICAgfWVsc2UgaWYgKGJvYXJkW3hdW3ldID09ICdtaXNzJyB8fCBib2FyZFt4XVt5XSA9PSAnaGl0Jyl7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW52YWxpZCBhdHRhY2snKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBib2FyZFt4XVt5XVswXS5oaXQoYm9hcmRbeF1beV1bMV0pO1xuICAgICAgICAgICAgYm9hcmRbeF1beV1bMl0gPSAnaGl0JztcbiAgICAgICAgICAgIGlmKGJvYXJkW3hdW3ldWzBdLmlzU3VuaygpKXtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaSA8IDEwOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDsgaiA8IDEwOyBqKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoKGJvYXJkW2ldW2pdICE9PSBudWxsKSAmJiAoYm9hcmRbaV1bal0ubGVuZ3RoID09IDMpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihib2FyZFtpXVtqXVswXS5nZXROYW1lKCkgPT0gYm9hcmRbeF1beV1bMF0uZ2V0TmFtZSgpKWJvYXJkW2ldW2pdWzNdID0gJ1NVTksnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIG51bGwgLT4gbWlzc1xuICAgIC8vIHNoaXAgLT4gaGl0XG4gICAgLy8gaGl0IC0+IGFnYWluXG4gICAgLy8gbWlzcyAtPiBhZ2FpblxuICAgIC8vIGJvYXJkW2ldW2pdID0gW1NoaXBGYWN0b3J5LCBTaGlwUG9zaXRpb24oMC00KSwgaGl0LCBTVU5LXVxuICAgIC8vIGJvYXJkW2ldW2pdID0gJ21pc3MnXG4gICAgLy8gbnVsbCwgaGl0IG5vdCBTVU5LLCBoaXQgYW5kIFNVTkssIG1pc3MsIFNoaXBcblxuXG4gICAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBBcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKHNoaXBBcnJbaV0uaXNTdW5rKCkgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuICAgIHJldHVybntib2FyZCwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTdW5rfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkOyIsImNvbnN0IEdhbWVib2FyZCA9IHJlcXVpcmUoJy4vR2FtZWJvYXJkJyk7XG5cbmNvbnN0IFBsYXllciA9ICgpID0+IHtcbiAgICBjb25zdCBnYlBsYXllciA9IEdhbWVib2FyZCgpO1xuICAgIGNvbnN0IGdiQ29tcHV0ZXIgPSBHYW1lYm9hcmQoKTtcblxuICAgIGNvbnN0IGF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGxvb3AxOlxuICAgICAgICBpZiAoZ2JDb21wdXRlci5ib2FyZFt4XVt5XSA9PSBudWxsIHx8IChnYkNvbXB1dGVyLmJvYXJkW3hdW3ldICE9IG51bGwgJiYgZ2JDb21wdXRlci5ib2FyZFt4XVt5XVsyXSAhPSAnaGl0JyAmJiBnYkNvbXB1dGVyLmJvYXJkW3hdW3ldICE9ICdtaXNzJykpe1xuICAgICAgICAgICAgZ2JDb21wdXRlci5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuXG4gICAgICAgICAgICAvLyBoaXQgdGhlIHNwb3RzIGFyb3VuZCBpdCwgaWYgYWxsIHNwb3RzIHRha2VuLCBtb3ZlIHRvIHRoZSBuZXh0IGhpdCBzcG90XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpIDwgMTA7IGkrKyl7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7IGogPCAxMDsgaisrKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgZ2JQbGF5ZXIuYm9hcmQgaXMgSGl0LCBidXQgbm90IFN1bmsgPT4gaGl0IDEgb2YgNCBzcG90cyBhcm91bmQgPT4gaWYgYWxsIDQgc3BvdHMgd2VyZSBoaXQsIGdvIHRvIGFub3RoZXIgXCJoaXQgbm90IHN1bmtcIiBzcG90XG4gICAgICAgICAgICAgICAgICAgIGxvb3AyOlxuICAgICAgICAgICAgICAgICAgICBpZihnYlBsYXllci5ib2FyZFtpXVtqXSAhPT0gbnVsbCAmJiBnYlBsYXllci5ib2FyZFtpXVtqXS5sZW5ndGggPT0gMyAmJiBnYlBsYXllci5ib2FyZFtpXVtqXS5sZW5ndGggIT09IDQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaS0xID49IDAgJiYgKGdiUGxheWVyLmJvYXJkW2ktMV1bal0gPT0gbnVsbCB8fCAoZ2JQbGF5ZXIuYm9hcmRbaS0xXVtqXSAhPSBudWxsICYmIGdiUGxheWVyLmJvYXJkW2ktMV1bal1bMl0gIT0gJ2hpdCcgJiYgZ2JQbGF5ZXIuYm9hcmRbaS0xXVtqXSAhPSAnbWlzcycpKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2JQbGF5ZXIucmVjZWl2ZUF0dGFjayhpLTEsIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGxvb3AxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoaSsxIDw9IDkgJiYgKGdiUGxheWVyLmJvYXJkW2krMV1bal0gPT0gbnVsbCB8fCAoZ2JQbGF5ZXIuYm9hcmRbaSsxXVtqXSAhPSBudWxsICYmIGdiUGxheWVyLmJvYXJkW2krMV1bal1bMl0gIT0gJ2hpdCcgJiYgZ2JQbGF5ZXIuYm9hcmRbaSsxXVtqXSAhPSAnbWlzcycpKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2JQbGF5ZXIucmVjZWl2ZUF0dGFjayhpKzEsIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGxvb3AxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoai0xID49MCAmJiAoZ2JQbGF5ZXIuYm9hcmRbaV1bai0xXSA9PSBudWxsIHx8IChnYlBsYXllci5ib2FyZFtpXVtqLTFdICE9IG51bGwgJiYgZ2JQbGF5ZXIuYm9hcmRbaV1bai0xXVsyXSAhPSAnaGl0JyAmJiBnYlBsYXllci5ib2FyZFtpXVtqLTFdICE9ICdtaXNzJykpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYlBsYXllci5yZWNlaXZlQXR0YWNrKGksIGotMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgbG9vcDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihqKzEgPD05ICYmIChnYlBsYXllci5ib2FyZFtpXVtqKzFdID09IG51bGwgfHwgKGdiUGxheWVyLmJvYXJkW2ldW2orMV0gIT0gbnVsbCAmJiBnYlBsYXllci5ib2FyZFtpXVtqKzFdWzJdICE9ICdoaXQnICYmIGdiUGxheWVyLmJvYXJkW2ldW2orMV0gIT0gJ21pc3MnKSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdiUGxheWVyLnJlY2VpdmVBdHRhY2soaSwgaisxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBsb29wMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc0IHNwb3RzIGZ1bGwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGxvb3AyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aGlsZSh0cnVlKXtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGdiUGxheWVyLmJvYXJkW3hdW3ldID09IG51bGwgfHwgKGdiUGxheWVyLmJvYXJkW3hdW3ldICE9IG51bGwgJiYgZ2JQbGF5ZXIuYm9hcmRbeF1beV1bMl0gIT0gJ2hpdCcgJiYgZ2JQbGF5ZXIuYm9hcmRbeF1beV0gIT0gJ21pc3MnKSl7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyYW5kb20gYXR0YWNrJyk7XG4gICAgICAgICAgICAgICAgICAgIGdiUGxheWVyLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrIGxvb3AxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybntnYlBsYXllciwgZ2JDb21wdXRlciwgYXR0YWNrfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyOyIsImNvbnN0IFNoaXAgPSAobGVuZ3RoLCBzaGlwTmFtZSkgPT4ge1xuICAgIGxldCBkZWNrID0gW107XG4gICAgbGV0IGRlY2tIaXQgPSBbXTtcbiAgICBsZXQgaGVhbHRoID0gbGVuZ3RoO1xuICAgIGNvbnN0IGdldEhlYWx0aCA9ICgpID0+IGxlbmd0aDtcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gc2hpcE5hbWU7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgZGVja1tpXSA9IGk7XG4gICAgfVxuXG4gICAgY29uc3QgaGl0ID0gKHgpID0+IHtcbiAgICAgICAgaWYgKGRlY2suaW5jbHVkZXMoeCkpe1xuICAgICAgICAgICAgaGVhbHRoLS07XG5cbiAgICAgICAgICAgIGRlY2tIaXQucHVzaCh4KTtcbiAgICAgICAgICAgIGRlY2tIaXQgPSBkZWNrSGl0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBsZXQgaW5kZXggPSBkZWNrLmluZGV4T2YoeCk7IFxuICAgICAgICAgICAgLy8gaWYgKGluZGV4ID4gLTEpIHsgICAvL2luZGV4IGV4aXN0XG4gICAgICAgICAgICAgICAgLy8gZGVjay5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIC8vIGRlY2tbaW5kZXhdID0gXCJoaXRcIjtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICBpc1N1bmsoKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGlmIChoZWFsdGggPT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybntnZXRIZWFsdGgsIGdldE5hbWUsIGlzU3VuaywgaGl0LCBkZWNrSGl0fTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDsiLCJpbXBvcnQge3JlbW92ZUFsbENoaWxkfSBmcm9tICcuL1JlbmRlci5qcyc7XG5pbXBvcnQge3JlbmRlclBsYXllckJvYXJkLCByZW5kZXJDb21wdXRlckJvYXJkfSBmcm9tICcuL1JlbmRlci5qcyc7XG5cbmNvbnN0IGdiSW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYkluaXQnKTtcbmNvbnN0IHBsYWNlU2hpcFBhZ2VFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlU2hpcFBhZ2UnKTtcbmNvbnN0IG1haW5QYWdlRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluUGFnZScpO1xuY29uc3QgZ2JQbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2JQbGF5ZXInKTtcbmNvbnN0IGdiQ29tcHV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2JDb21wdXRlcicpO1xubGV0IGNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBwbGFjZVNoaXBQYWdlICh0b3RhbExlbmd0aCwgZ2FtZSl7XG4gICAgcmVtb3ZlQWxsQ2hpbGQoZ2JJbml0KTtcbiAgICBsZXQgc2hpcE5hbWU7XG4gICAgbGV0IHNoaXBMZW5ndGg7XG4gICAgXG4gICAgc3dpdGNoKGNvdW50ZXIpe1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBzaGlwTmFtZSA9ICdDYXJyaWVyJztcbiAgICAgICAgICAgIHNoaXBMZW5ndGggPSA1O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHNoaXBOYW1lID0gJ0JhdHRsZXNoaXAnO1xuICAgICAgICAgICAgc2hpcExlbmd0aCA9IDQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgc2hpcE5hbWUgPSAnRGVzdHJveWVyJztcbiAgICAgICAgICAgIHNoaXBMZW5ndGggPSAzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHNoaXBOYW1lID0gJ1N1Ym1hcmluZSc7XG4gICAgICAgICAgICBzaGlwTGVuZ3RoID0gMztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBzaGlwTmFtZSA9ICdQYXRyb2xCb2F0JztcbiAgICAgICAgICAgIHNoaXBMZW5ndGggPSAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIHBsYWNlU2hpcFBhZ2VFLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBtYWluUGFnZUUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIHJlbW92ZUFsbENoaWxkKGdiUGxheWVyKTtcbiAgICAgICAgICAgIHJlbW92ZUFsbENoaWxkKGdiQ29tcHV0ZXIpO1xuICAgICAgICAgICAgcmVuZGVyUGxheWVyQm9hcmQodG90YWxMZW5ndGgsIGdhbWUpO1xuICAgICAgICAgICAgcmVuZGVyQ29tcHV0ZXJCb2FyZCh0b3RhbExlbmd0aCwgZ2FtZSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBcbiAgICAvLyByb3RhdGUgYnV0dG9uIHN3aXRjaCByb3RhdGlvbiBzdGF0ZVxuICAgIGxldCByb3RhdGVTdGF0dXMgPSAwO1xuICAgIGNvbnN0IHJvdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUnKTtcbiAgICByb3RhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJvdGF0ZVN0YXR1cyA9IChyb3RhdGVTdGF0dXMgPT0gMCkgPyAxIDogMDtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNpbmdsZUdyaWQgPSBuZXcgQXJyYXkoMTApLmZpbGwoKS5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwobnVsbCkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxMZW5ndGg7IGkrKyl7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdG90YWxMZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdLmNsYXNzTGlzdC5hZGQoJ2dyaWRJbml0Jyk7XG5cbiAgICAgICAgICAgIGlmIChnYW1lLmdiUGxheWVyLmJvYXJkW2ldW2pdID09IG51bGwpe1xuICAgICAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjU1LDI1NSwyNTUpXCI7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDAsMTI4LDApXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bal0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHNoaXBMZW5ndGg7IGsrKyl7XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHJvdGF0ZVN0YXR1cyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChqICsgc2hpcExlbmd0aCkgPiB0b3RhbExlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHRlbXAgPSAwOyB0ZW1wIDwgdG90YWxMZW5ndGggLSBqOyB0ZW1wKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpXVtqK3RlbXBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1NSwwLDApXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihnYW1lLmdiUGxheWVyLmJvYXJkW2ldW2ora10gIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1baitrXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNTUsMCwwKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2ora10uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMCwyNTUsMClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChpICsgc2hpcExlbmd0aCkgPiB0b3RhbExlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHRlbXAgPSAwOyB0ZW1wIDwgdG90YWxMZW5ndGggLSBpOyB0ZW1wKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpK3RlbXBdW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1NSwwLDApXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihnYW1lLmdiUGxheWVyLmJvYXJkW2kra11bal0gIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZUdyaWRbaStrXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNTUsMCwwKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGVHcmlkW2kra11bal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMCwyNTUsMClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzaW5nbGVHcmlkW2ldW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoKHJvdGF0ZVN0YXR1cyl7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc2hpcExlbmd0aDsgaysrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdGVtcCA9IDA7IHRlbXAgPCB0b3RhbExlbmd0aCAtIGo7IHRlbXArKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5nYlBsYXllci5ib2FyZFtpXVtqK3RlbXBdID09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bait0ZW1wXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNTUsMjU1LDI1NSlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bait0ZW1wXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigwLDEyOCwwKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc2hpcExlbmd0aDsgaysrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdGVtcCA9IDA7IHRlbXAgPCB0b3RhbExlbmd0aCAtIGk7IHRlbXArKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihnYW1lLmdiUGxheWVyLmJvYXJkW2krdGVtcF1bal0gPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpK3RlbXBdW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1NSwyNTUsMjU1KVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlR3JpZFtpK3RlbXBdW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDAsMTI4LDApXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIHNpbmdsZUdyaWRbaV1bal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gKHJvdGF0ZVN0YXR1cyA9PSAwKSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXQgPSAnZW1wdHknO1xuICAgICAgICAgICAgICAgIHN3aXRjaChyb3RhdGVTdGF0dXMpe1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHNoaXBMZW5ndGg7IGsrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpbmdsZUdyaWRbaV1baitrXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ3JnYigyNTUsIDAsIDApJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXQgPSAndGFrZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ID09ICdlbXB0eScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuZ2JQbGF5ZXIucGxhY2VTaGlwKHNoaXBOYW1lLCBpLCBqLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlU2hpcFBhZ2UodG90YWxMZW5ndGgsIGdhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc2hpcExlbmd0aDsgaysrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2luZ2xlR3JpZFtpK2tdW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAncmdiKDI1NSwgMCwgMCknKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdCA9ICd0YWtlbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXQgPT0gJ2VtcHR5Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5nYlBsYXllci5wbGFjZVNoaXAoc2hpcE5hbWUsIGksIGosIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VTaGlwUGFnZSh0b3RhbExlbmd0aCwgZ2FtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdiSW5pdC5hcHBlbmRDaGlsZChzaW5nbGVHcmlkW2ldW2pdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0e3BsYWNlU2hpcFBhZ2V9OyIsImZ1bmN0aW9uIHBsYWNlU2hpcFJhbmQgKHRvdGFsTGVuZ3RoLCBnYW1lKXtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgbGV0IHNoaXBOYW1lO1xuICAgIGxldCBzaGlwTGVuZ3RoO1xuICAgIFxuICAgIHdoaWxlKHRydWUpe1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIpO1xuICAgICAgICBvcmllbnRhdGlvbiA9IChvcmllbnRhdGlvbiA9PSAwKSA/ICdob3Jpem9udGFsJzondmVydGljYWwnO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhvcmllbnRhdGlvbik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHgseSk7XG5cbiAgICAgICAgc3dpdGNoKGNvdW50ZXIpe1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHNoaXBOYW1lID0gJ0NhcnJpZXInO1xuICAgICAgICAgICAgICAgIHNoaXBMZW5ndGggPSA1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHNoaXBOYW1lID0gJ0JhdHRsZXNoaXAnO1xuICAgICAgICAgICAgICAgIHNoaXBMZW5ndGggPSA0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHNoaXBOYW1lID0gJ0Rlc3Ryb3llcic7XG4gICAgICAgICAgICAgICAgc2hpcExlbmd0aCA9IDM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgc2hpcE5hbWUgPSAnU3VibWFyaW5lJztcbiAgICAgICAgICAgICAgICBzaGlwTGVuZ3RoID0gMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBzaGlwTmFtZSA9ICdQYXRyb2xCb2F0JztcbiAgICAgICAgICAgICAgICBzaGlwTGVuZ3RoID0gMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbGV0IHN0YXQgPSAnZW1wdHknO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICBzd2l0Y2gob3JpZW50YXRpb24pe1xuICAgICAgICAgICAgY2FzZSAnaG9yaXpvbnRhbCc6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBzaGlwTGVuZ3RoOyBrKyspe1xuICAgICAgICAgICAgICAgICAgICBpZiAoKCh5ICsgc2hpcExlbmd0aCkgPCB0b3RhbExlbmd0aCkgJiYgZ2FtZS5nYkNvbXB1dGVyLmJvYXJkW3hdW3kra10gIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ID0gJ3Rha2VuJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICgoKHkgKyBzaGlwTGVuZ3RoKSA8IHRvdGFsTGVuZ3RoKSAmJiAoc3RhdCA9PSAnZW1wdHknKSl7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNoaXBOYW1lLCB4LCB5LCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuZ2JDb21wdXRlci5wbGFjZVNoaXAoc2hpcE5hbWUsIHgsIHksIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd2ZXJ0aWNhbCc6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBzaGlwTGVuZ3RoOyBrKyspe1xuICAgICAgICAgICAgICAgICAgICBpZiAoKCh4ICsgc2hpcExlbmd0aCkgPCB0b3RhbExlbmd0aCkgJiYgZ2FtZS5nYkNvbXB1dGVyLmJvYXJkW3gra11beV0gIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ID0gJ3Rha2VuJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKCh4ICsgc2hpcExlbmd0aCkgPCB0b3RhbExlbmd0aCkgJiYgKHN0YXQgPT0gJ2VtcHR5Jykpe1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzaGlwTmFtZSwgeCwgeSwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBnYW1lLmdiQ29tcHV0ZXIucGxhY2VTaGlwKHNoaXBOYW1lLCB4LCB5LCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoY291bnRlciA9PSA1KXtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnR7cGxhY2VTaGlwUmFuZH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9mYWN0b3JpZXMvUGxheWVyJztcbmltcG9ydCB7IHBsYWNlU2hpcFBhZ2UgfSBmcm9tICcuL3BsYWNlU2hpcFBhZ2UnO1xuaW1wb3J0IHsgcGxhY2VTaGlwUmFuZCB9IGZyb20gJy4vcGxhY2VTaGlwUmFuZCc7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5sZXQgdG90YWxMZW5ndGggPSAxMDtcblxuY29uc3QgZ2FtZSA9IFBsYXllcigpO1xuXG5wbGFjZVNoaXBQYWdlKHRvdGFsTGVuZ3RoLCBnYW1lKTtcbnBsYWNlU2hpcFJhbmQodG90YWxMZW5ndGgsIGdhbWUpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==