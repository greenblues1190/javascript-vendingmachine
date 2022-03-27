/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/Component.js":
/*!*******************************!*\
  !*** ./src/core/Component.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./src/core/Subject.ts");
/* harmony import */ var _utils_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/commons */ "./src/utils/commons.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Component = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Component, _HTMLElement);

  var _super = _createSuper(Component);

  function Component() {
    var _this;

    _classCallCheck(this, Component);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "props", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", void 0);

    _this.setProps();

    _this.setup();

    _this.setEvent();

    return _this;
  }

  _createClass(Component, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _Subject__WEBPACK_IMPORTED_MODULE_0__["default"].observe(this);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _Subject__WEBPACK_IMPORTED_MODULE_0__["default"].unobserve(this);
    }
  }, {
    key: "setProps",
    value: function setProps() {
      var _this2 = this;

      this.props = {};
      this.getAttributeNames().forEach(function (attributeName) {
        _this2.props[attributeName] = _this2.getAttribute(attributeName);
      });
    }
  }, {
    key: "setup",
    value: function setup() {}
  }, {
    key: "render",
    value: function render() {
      this.beforeRender();
      this.innerHTML = this.template();
      this.afterRender();
    }
  }, {
    key: "clearDOM",
    value: function clearDOM() {
      while (this.firstChild) {
        this.removeChild(this.lastChild);
      }
    }
  }, {
    key: "template",
    value: function template() {
      throw new Error('override');
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {}
  }, {
    key: "afterRender",
    value: function afterRender() {}
  }, {
    key: "setState",
    value: function setState(newState) {
      if ((0,_utils_commons__WEBPACK_IMPORTED_MODULE_1__.deepEqual)(this.state, newState)) return;
      this.state = _objectSpread(_objectSpread({}, this.state), newState);
      this.render();
    }
  }, {
    key: "setEvent",
    value: function setEvent() {}
  }, {
    key: "addEvent",
    value: function addEvent(type, selector, callback) {
      var isTarget = function isTarget(target) {
        return target.closest(selector);
      };

      this.addEventListener(type, function (event) {
        if (!isTarget(event.target)) return;
        callback(event);
      });
    }
  }, {
    key: "notify",
    value: function notify() {
      this.render();
    }
  }]);

  return Component;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));



/***/ }),

/***/ "./src/core/TableRow.js":
/*!******************************!*\
  !*** ./src/core/TableRow.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableRow)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./src/core/Subject.ts");
/* harmony import */ var _utils_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/commons */ "./src/utils/commons.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var TableRow = /*#__PURE__*/function (_HTMLTableRowElement) {
  _inherits(TableRow, _HTMLTableRowElement);

  var _super = _createSuper(TableRow);

  function TableRow() {
    var _this;

    _classCallCheck(this, TableRow);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "props", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", void 0);

    _this.setProps();

    _this.setup();

    _this.setEvent();

    return _this;
  }

  _createClass(TableRow, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _Subject__WEBPACK_IMPORTED_MODULE_0__["default"].observe(this);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _Subject__WEBPACK_IMPORTED_MODULE_0__["default"].unobserve(this);
    }
  }, {
    key: "setProps",
    value: function setProps() {
      var _this2 = this;

      this.props = {};
      this.getAttributeNames().forEach(function (attributeName) {
        _this2.props[attributeName] = _this2.getAttribute(attributeName);
      });
    }
  }, {
    key: "setup",
    value: function setup() {}
  }, {
    key: "render",
    value: function render() {
      this.beforeRender();
      this.innerHTML = this.template();
      this.afterRender();
    }
  }, {
    key: "clearDOM",
    value: function clearDOM() {
      while (this.firstChild) {
        this.removeChild(this.lastChild);
      }
    }
  }, {
    key: "template",
    value: function template() {
      throw new Error('override');
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {}
  }, {
    key: "afterRender",
    value: function afterRender() {}
  }, {
    key: "setState",
    value: function setState(newState) {
      if ((0,_utils_commons__WEBPACK_IMPORTED_MODULE_1__.deepEqual)(this.state, newState)) return;
      this.state = _objectSpread(_objectSpread({}, this.state), newState);
      this.render();
    }
  }, {
    key: "setEvent",
    value: function setEvent() {}
  }, {
    key: "addEvent",
    value: function addEvent(type, selector, callback) {
      var isTarget = function isTarget(target) {
        return target.closest(selector);
      };

      this.addEventListener(type, function (event) {
        if (!isTarget(event.target)) return;
        callback(event);
      });
    }
  }, {
    key: "notify",
    value: function notify() {
      this.render();
    }
  }]);

  return TableRow;
}( /*#__PURE__*/_wrapNativeSuper(HTMLTableRowElement));



/***/ }),

/***/ "./src/views/App.js":
/*!**************************!*\
  !*** ./src/views/App.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Component */ "./src/core/Component.js");
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Router.js */ "./src/views/Router.js");
/* harmony import */ var _pages_ItemManagementPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/ItemManagementPage */ "./src/views/pages/ItemManagementPage.js");
/* harmony import */ var _pages_ChangeChargePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/ChangeChargePage */ "./src/views/pages/ChangeChargePage.js");
/* harmony import */ var _pages_ItemPurchasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/ItemPurchasePage */ "./src/views/pages/ItemPurchasePage.js");
/* harmony import */ var _pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/NotFoundPage */ "./src/views/pages/NotFoundPage.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/NavBar */ "./src/views/components/NavBar.js");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../configs/constants */ "./src/configs/constants.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "template",
    value: function template() {
      return "\n      <main class=\"app-container\">\n        <header>\n          <h1 class=\"title\">\uD83C\uDF7F \uC790\uD310\uAE30 \uD83C\uDF7F</h1>\n        </header>\n        <nav-bar class=\"nav-bar\"></nav-bar>\n        <div class=\"page-container\">\n          <page-router>\n            <item-management class=\"page\" path=\"".concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.PAGES.ITEM_MANAGEMENT.PATH, "\"></item-management>\n            <change-charge class=\"page\" path=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.PAGES.CHANGE_CHARGE.PATH, "\"></change-charge>\n            <item-purchase class=\"page\" path=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.PAGES.ITEM_PURCHASE.PATH, "\"></item-purchase>\n            <not-found class=\"page\" path=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.PAGES.DEFAULT.PATH, "\"></not-found>\n          </page-router>\n        </div>\n      </main>\n    ");
    }
  }]);

  return App;
}(_core_Component__WEBPACK_IMPORTED_MODULE_0__["default"]);


customElements.define('app-wrapper', App);

/***/ }),

/***/ "./src/views/Router.js":
/*!*****************************!*\
  !*** ./src/views/Router.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Component */ "./src/core/Component.js");
/* harmony import */ var _utils_domUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/domUtils */ "./src/utils/domUtils.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/constants */ "./src/configs/constants.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Router = /*#__PURE__*/function (_Component) {
  _inherits(Router, _Component);

  var _super = _createSuper(Router);

  function Router() {
    _classCallCheck(this, Router);

    return _super.apply(this, arguments);
  }

  _createClass(Router, [{
    key: "setup",
    value: function setup() {
      var routes = Array.from(this.children).map(function (child) {
        return {
          path: child.getAttribute('path'),
          component: child
        };
      });
      this.state = {
        routes: routes,
        location: (0,_utils_domUtils__WEBPACK_IMPORTED_MODULE_1__.getHash)()
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          routes = _this$state.routes,
          location = _this$state.location;
      var currentRoute = routes.filter(function (route) {
        return route.path === location || route.path === _configs_constants__WEBPACK_IMPORTED_MODULE_2__.PAGES.DEFAULT.PATH;
      })[0];
      var component = location === '' && routes[0].component || (currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.component);
      this.clearDOM();
      this.appendChild(component);
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      var _this = this;

      window.addEventListener('hashchange', function (event) {
        _this.setState({
          location: (0,_utils_domUtils__WEBPACK_IMPORTED_MODULE_1__.getHash)(event.target)
        });
      });
    }
  }]);

  return Router;
}(_core_Component__WEBPACK_IMPORTED_MODULE_0__["default"]);

customElements.define('page-router', Router);

/***/ }),

/***/ "./src/views/components/ChangeChargeForm.js":
/*!**************************************************!*\
  !*** ./src/views/components/ChangeChargeForm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChangeChargeForm)
/* harmony export */ });
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domains/VendingMachine */ "./src/domains/VendingMachine.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../configs/constants */ "./src/configs/constants.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ChangeChargeForm = /*#__PURE__*/function (_Component) {
  _inherits(ChangeChargeForm, _Component);

  var _super = _createSuper(ChangeChargeForm);

  function ChangeChargeForm() {
    _classCallCheck(this, ChangeChargeForm);

    return _super.apply(this, arguments);
  }

  _createClass(ChangeChargeForm, [{
    key: "template",
    value: function template() {
      return "\n      <form id=\"change-charge-form\" class=\"change-charge-form\">\n        <div>\n          <label for=\"amount\" class=\"description\">\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD560 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.</label>\n          <input\n            id=\"charge-amount\"\n            class=\"charge-amount-input styled-input\"\n            name=\"amount\"\n            placeholder=\"\uAE08\uC561\"\n            type=\"number\"\n            min=\"".concat(_configs_constants__WEBPACK_IMPORTED_MODULE_2__.CHARGE_AMOUNT.MIN, "\"\n            max=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_2__.CHARGE_AMOUNT.MAX, "\"\n            step=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_2__.CHARGE_AMOUNT.STEP, "\"\n            required\n            autofocus\n          >\n        </div>\n        <button class=\"add-charge-button styled-button emphasized\">\uCDA9\uC804</button>\n      </form>\n    ");
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      var _this = this;

      this.addEvent('submit', '#change-charge-form', function (event) {
        event.preventDefault();

        var amountInput = _this.querySelector('#charge-amount');

        var amount = amountInput.valueAsNumber;

        try {
          _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_1__.vendingMachine.addCoin(amount);
          amountInput.value = '';
        } catch (err) {
          window.alert(err);
        }
      });
    }
  }]);

  return ChangeChargeForm;
}(_core_Component__WEBPACK_IMPORTED_MODULE_0__["default"]);


customElements.define('charge-form', ChangeChargeForm);

/***/ }),

/***/ "./src/views/components/CoinTable.js":
/*!*******************************************!*\
  !*** ./src/views/components/CoinTable.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CoinTable)
/* harmony export */ });
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domains/VendingMachine */ "./src/domains/VendingMachine.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var CoinTable = /*#__PURE__*/function (_Component) {
  _inherits(CoinTable, _Component);

  var _super = _createSuper(CoinTable);

  function CoinTable() {
    _classCallCheck(this, CoinTable);

    return _super.apply(this, arguments);
  }

  _createClass(CoinTable, [{
    key: "template",
    value: function template() {
      var coins = _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_1__.vendingMachine.useStore(function (state) {
        return state.coins;
      });

      var coinArray = _toConsumableArray(Object.entries(coins)).sort(function (_ref, _ref2) {
        var _ref3 = _slicedToArray(_ref, 1),
            a = _ref3[0];

        var _ref4 = _slicedToArray(_ref2, 1),
            b = _ref4[0];

        return b - a;
      });

      return "\n      <table class=\"styled-table\">\n        <thead>\n          <tr class=\"styled-tr\">\n            <th class=\"styled-th\">\uB3D9\uC804</th>\n            <th class=\"styled-th\">\uAC1C\uC218</th>\n          </tr>\n        </thead>\n        <tbody>\n          ".concat(coinArray.map(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            key = _ref6[0],
            value = _ref6[1];

        return "\n                <tr class=\"styled-tr\">\n                  <td class=\"styled-td\">".concat(key, "\uC6D0</td>\n                  <td class=\"styled-td\">").concat(value, "\uAC1C</td>\n                </tr>\n              ");
      }).join(''), "\n        </tbody>\n      </table>\n    ");
    }
  }]);

  return CoinTable;
}(_core_Component__WEBPACK_IMPORTED_MODULE_0__["default"]);


customElements.define('coin-table', CoinTable);

/***/ }),

/***/ "./src/views/components/CurrentMoneyIndicator.js":
/*!*******************************************************!*\
  !*** ./src/views/components/CurrentMoneyIndicator.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CurrentMoneyIndicator)
/* harmony export */ });
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domains/VendingMachine */ "./src/domains/VendingMachine.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var CurrentMoneyIndicator = /*#__PURE__*/function (_Component) {
  _inherits(CurrentMoneyIndicator, _Component);

  var _super = _createSuper(CurrentMoneyIndicator);

  function CurrentMoneyIndicator() {
    _classCallCheck(this, CurrentMoneyIndicator);

    return _super.apply(this, arguments);
  }

  _createClass(CurrentMoneyIndicator, [{
    key: "template",
    value: function template() {
      var totalMoney = _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_1__.vendingMachine.getTotalMoney();
      return "\n      <p class=\"current-money-indicator\">\uD604\uC7AC \uBCF4\uC720 \uAE08\uC561: <span>".concat(totalMoney, "\uC6D0</span></p>\n    ");
    }
  }]);

  return CurrentMoneyIndicator;
}(_core_Component__WEBPACK_IMPORTED_MODULE_0__["default"]);


customElements.define('current-money', CurrentMoneyIndicator);

/***/ }),

/***/ "./src/views/components/ItemAddForm.js":
/*!*********************************************!*\
  !*** ./src/views/components/ItemAddForm.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ItemAddForm)
/* harmony export */ });
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domains/VendingMachine */ "./src/domains/VendingMachine.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../configs/constants */ "./src/configs/constants.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ItemAddForm = /*#__PURE__*/function (_Component) {
  _inherits(ItemAddForm, _Component);

  var _super = _createSuper(ItemAddForm);

  function ItemAddForm() {
    _classCallCheck(this, ItemAddForm);

    return _super.apply(this, arguments);
  }

  _createClass(ItemAddForm, [{
    key: "template",
    value: function template() {
      return "\n      <form id=\"item-add-form\" class=\"item-add-form\">\n        <fieldset class=\"fieldset\">\n          <legend class=\"description\">\uCD94\uAC00\uD560 \uC0C1\uD488 \uD604\uD669\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.</legend>\n          <label hidden for=\"name\">".concat(_configs_constants__WEBPACK_IMPORTED_MODULE_2__.ITEM.NAME.LABEL, "</label>\n          <input\n            id=\"item-name-input\"\n            class=\"item-input styled-input\"\n            name=\"name\"\n            placeholder=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_2__.ITEM.NAME.LABEL, "\"\n            type=\"text\"\n            maxlength=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_2__.ITEM.NAME.LENGTH.MAX, "\"\n            required\n            autofocus\n          >\n          <label hidden for=\"price\">").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_2__.ITEM.PRICE.LABEL, "</label>\n          <input\n            id=\"item-price-input\"\n            class=\"item-input styled-input\"\n            name=\"price\"\n            placeholder=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_2__.ITEM.PRICE.LABEL, "\"\n            type=\"number\"\n            min=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_2__.ITEM.PRICE.MIN, "\"\n            max=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_2__.ITEM.PRICE.MAX, "\"\n            step=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_2__.ITEM.PRICE.STEP, "\"\n            required\n          >\n          <label hidden for=\"quantity\">").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_2__.ITEM.QUANTITY.LABEL, "</label>\n          <input\n            id=\"item-quantity-input\"\n            class=\"item-input styled-input\"\n            name=\"quantity\"\n            placeholder=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_2__.ITEM.QUANTITY.LABEL, "\"\n            type=\"number\"\n            min=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_2__.ITEM.QUANTITY.MIN, "\"\n            max=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_2__.ITEM.QUANTITY.MAX, "\"\n            step=\"1\"\n            required\n          >\n        </fieldset>\n        <button class=\"add-item-button styled-button emphasized\">\uCD94\uAC00</button>\n      </form>\n    ");
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      this.addEvent('submit', '#item-add-form', function (event) {
        event.preventDefault();
        var target = event.target;
        var nameInput = target.querySelector('#item-name-input');
        var priceInput = target.querySelector('#item-price-input');
        var quantityInput = target.querySelector('#item-quantity-input');
        var item = {
          name: nameInput.value.trim(),
          price: priceInput.valueAsNumber,
          quantity: quantityInput.valueAsNumber
        };

        try {
          _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_1__.vendingMachine.addItem(item);
          nameInput.value = '';
          priceInput.value = '';
          quantityInput.value = '';
        } catch (err) {
          window.alert(err);
        }
      });
    }
  }]);

  return ItemAddForm;
}(_core_Component__WEBPACK_IMPORTED_MODULE_0__["default"]);


customElements.define('add-form', ItemAddForm);

/***/ }),

/***/ "./src/views/components/ItemRow.js":
/*!*****************************************!*\
  !*** ./src/views/components/ItemRow.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_TableRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/TableRow */ "./src/core/TableRow.js");
/* harmony import */ var _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domains/VendingMachine */ "./src/domains/VendingMachine.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../configs/constants */ "./src/configs/constants.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ItemRow = /*#__PURE__*/function (_TableRow) {
  _inherits(ItemRow, _TableRow);

  var _super = _createSuper(ItemRow);

  function ItemRow() {
    _classCallCheck(this, ItemRow);

    return _super.apply(this, arguments);
  }

  _createClass(ItemRow, [{
    key: "setup",
    value: function setup() {
      this.state = {
        isEditing: false
      };
    }
  }, {
    key: "template",
    value: function template() {
      var _this$props = this.props,
          name = _this$props.name,
          price = _this$props.price,
          quantity = _this$props.quantity;
      var isEditing = this.state.isEditing;
      return "\n       ".concat(isEditing ? "\n            <td class=\"item-name styled-td\">\n              <input\n                value=\"".concat(name, "\"\n                class=\"item-name-edit-input transparent-input\"\n                type=\"text\"\n                maxlength=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_2__.ITEM.NAME.LENGTH.MAX, "\"\n              >\n            </td>\n            <td class=\"item-price styled-td\">\n              <input\n                value=\"").concat(price, "\"\n                class=\"item-price-edit-input transparent-input\"\n                type=\"number\"\n                min=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_2__.ITEM.PRICE.MIN, "\"\n                max=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_2__.ITEM.PRICE.MAX, "\"\n                step=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_2__.ITEM.PRICE.STEP, "\"\n              >\n            </td>\n            <td class=\"item-quantity styled-td\">\n              <input\n                value=\"").concat(quantity, "\"\n                class=\"item-quantity-edit-input transparent-input\"\n                type=\"number\"\n                step=\"1\"\n                min=\"1\"\n                max=\"20\"\n              >\n            </td>\n            <td class=\"item-button-container\">\n              <button class=\"item-update-button styled-button\">\uC644\uB8CC</button>\n            </td>\n          ") : "\n            <td class=\"item-name styled-td\">".concat(name, "</td>\n            <td class=\"item-price styled-td\">").concat(price, "</td>\n            <td class=\"item-quantity styled-td\">").concat(quantity, "</td>\n            <td class=\"item-button-container\">\n              <button class=\"item-edit-button styled-button\" type=\"button\">\uC218\uC815</button>\n              <button class=\"item-remove-button styled-button\" type=\"button\">\uC0AD\uC81C</button>\n            </td>\n          "), "\n    ");
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      var _this = this;

      this.addEvent('click', '.item-edit-button', function () {
        _this.setState({
          isEditing: true
        });

        var input = _this.querySelector('.item-name-edit-input');

        input.focus();
        setTimeout(function () {
          input.selectionStart = Number.MAX_SAFE_INTEGER;
          input.selectionEnd = Number.MAX_SAFE_INTEGER;
        }, 0);
      });
      this.addEvent('click', '.item-update-button', function () {
        var prevName = _this.props.name;
        var updatedItem = {
          name: _this.querySelector('.item-name-edit-input').value.trim(),
          price: _this.querySelector('.item-price-edit-input').valueAsNumber,
          quantity: _this.querySelector('.item-quantity-edit-input').valueAsNumber
        };

        try {
          _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_1__.vendingMachine.updateItem(prevName, updatedItem);
        } catch (err) {
          window.alert(err);
        }
      });
      this.addEvent('click', '.item-remove-button', function () {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
          var name = _this.props.name;

          try {
            _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_1__.vendingMachine.removeItem(name);
          } catch (err) {
            window.alert(err);
          }
        }
      });
    }
  }]);

  return ItemRow;
}(_core_TableRow__WEBPACK_IMPORTED_MODULE_0__["default"]);

customElements.define('item-row', ItemRow, {
  "extends": 'tr'
});

/***/ }),

/***/ "./src/views/components/ItemTable.js":
/*!*******************************************!*\
  !*** ./src/views/components/ItemTable.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ItemTable)
/* harmony export */ });
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _ItemRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemRow */ "./src/views/components/ItemRow.js");
/* harmony import */ var _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domains/VendingMachine */ "./src/domains/VendingMachine.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configs/constants */ "./src/configs/constants.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var ItemTable = /*#__PURE__*/function (_Component) {
  _inherits(ItemTable, _Component);

  var _super = _createSuper(ItemTable);

  function ItemTable() {
    _classCallCheck(this, ItemTable);

    return _super.apply(this, arguments);
  }

  _createClass(ItemTable, [{
    key: "template",
    value: function template() {
      var items = _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_2__.vendingMachine.useStore(function (state) {
        return state.items;
      });
      return "\n      <table class=\"styled-table\">\n        <colgroup>\n          <col style=\"width: 25%\">\n          <col style=\"width: 25%\">\n          <col style=\"width: 25%\">\n          <col style=\"width: 25%\">\n        </colgroup>\n        <thead>\n          <tr class=\"styled-tr\">\n            <th class=\"styled-th\">".concat(_configs_constants__WEBPACK_IMPORTED_MODULE_3__.ITEM.NAME.LABEL, "</th>\n            <th class=\"styled-th\">").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_3__.ITEM.PRICE.LABEL, "</th>\n            <th class=\"styled-th\">").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_3__.ITEM.QUANTITY.LABEL, "</th>\n            <th class=\"styled-th\"></th>\n          </tr>\n        </thead>\n      </table>\n      <div class=\"scrollable\">\n        <table class=\"styled-table no-border-top\">\n          <colgroup>\n            <col style=\"width: 25%\">\n            <col style=\"width: 25%\">\n            <col style=\"width: 25%\">\n            <col style=\"width: 25%\">\n          </colgroup>\n          <tbody>\n            ").concat(items.map(function (_ref) {
        var name = _ref.name,
            price = _ref.price,
            quantity = _ref.quantity;
        return "\n                  <tr\n                    is=\"item-row\"\n                    class=\"styled-tr\"\n                    name=\"".concat(name, "\"\n                    price=\"").concat(price, "\"\n                    quantity=\"").concat(quantity, "\"\n                  >\n                  </tr>\n                ");
      }).join(''), "\n          </tbody>\n        </table>\n      </div>\n    ");
    }
  }]);

  return ItemTable;
}(_core_Component__WEBPACK_IMPORTED_MODULE_0__["default"]);


customElements.define('item-table', ItemTable);

/***/ }),

/***/ "./src/views/components/NavBar.js":
/*!****************************************!*\
  !*** ./src/views/components/NavBar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configs/constants */ "./src/configs/constants.ts");
/* harmony import */ var _utils_domUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/domUtils */ "./src/utils/domUtils.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var NavBar = /*#__PURE__*/function (_Component) {
  _inherits(NavBar, _Component);

  var _super = _createSuper(NavBar);

  function NavBar() {
    _classCallCheck(this, NavBar);

    return _super.apply(this, arguments);
  }

  _createClass(NavBar, [{
    key: "setup",
    value: function setup() {
      this.state = {
        location: (0,_utils_domUtils__WEBPACK_IMPORTED_MODULE_2__.getHash)()
      };
    }
  }, {
    key: "template",
    value: function template() {
      var location = this.state.location;
      return "\n      <a\n        class=\"nav-button styled-button ".concat(location === _configs_constants__WEBPACK_IMPORTED_MODULE_1__.PAGES.LANDING.PATH || location === _configs_constants__WEBPACK_IMPORTED_MODULE_1__.PAGES.ITEM_MANAGEMENT.PATH ? 'selected' : '', "\"\n        href=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_1__.PAGES.ITEM_MANAGEMENT.PATH, "\"\n      >\n        ").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_1__.PAGES.ITEM_MANAGEMENT.TITLE, "\n      </a>\n      <a\n        class=\"nav-button styled-button ").concat(location === _configs_constants__WEBPACK_IMPORTED_MODULE_1__.PAGES.CHANGE_CHARGE.PATH ? 'selected' : '', "\"\n        href=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_1__.PAGES.CHANGE_CHARGE.PATH, "\"\n      >\n        ").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_1__.PAGES.CHANGE_CHARGE.TITLE, "\n      </a>\n      <a\n        class=\"nav-button styled-button ").concat(location === _configs_constants__WEBPACK_IMPORTED_MODULE_1__.PAGES.ITEM_PURCHASE.PATH ? 'selected' : '', "\"\n        href=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_1__.PAGES.ITEM_PURCHASE.PATH, "\"\n      >\n        ").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_1__.PAGES.ITEM_PURCHASE.TITLE, "\n      </a>\n    ");
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      var _this = this;

      this.addEvent('click', '.nav-button', function (_ref) {
        var target = _ref.target;
        var location = target.getAttribute('href');

        _this.setState({
          location: location
        });
      });
    }
  }]);

  return NavBar;
}(_core_Component__WEBPACK_IMPORTED_MODULE_0__["default"]);


customElements.define('nav-bar', NavBar);

/***/ }),

/***/ "./src/views/pages/ChangeChargePage.js":
/*!*********************************************!*\
  !*** ./src/views/pages/ChangeChargePage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _components_ChangeChargeForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ChangeChargeForm */ "./src/views/components/ChangeChargeForm.js");
/* harmony import */ var _components_CurrentMoneyIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CurrentMoneyIndicator */ "./src/views/components/CurrentMoneyIndicator.js");
/* harmony import */ var _components_CoinTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CoinTable */ "./src/views/components/CoinTable.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var ChangeChargePage = /*#__PURE__*/function (_Component) {
  _inherits(ChangeChargePage, _Component);

  var _super = _createSuper(ChangeChargePage);

  function ChangeChargePage() {
    _classCallCheck(this, ChangeChargePage);

    return _super.apply(this, arguments);
  }

  _createClass(ChangeChargePage, [{
    key: "template",
    value: function template() {
      return "\n      <section>\n        <h2 hidden>\uC794\uB3C8 \uCDA9\uC804</h2>\n        <charge-form></charge-form>\n        <current-money></current-money>\n      </section>\n      <section>\n        <h2 class=\"table-title\">\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD55C \uB3D9\uC804</h2>\n        <coin-table></coin-table>\n      </section>\n    ";
    }
  }]);

  return ChangeChargePage;
}(_core_Component__WEBPACK_IMPORTED_MODULE_0__["default"]);

customElements.define('change-charge', ChangeChargePage);

/***/ }),

/***/ "./src/views/pages/ItemManagementPage.js":
/*!***********************************************!*\
  !*** ./src/views/pages/ItemManagementPage.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _components_ItemAddForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ItemAddForm */ "./src/views/components/ItemAddForm.js");
/* harmony import */ var _components_ItemTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ItemTable */ "./src/views/components/ItemTable.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ItemManagementPage = /*#__PURE__*/function (_Component) {
  _inherits(ItemManagementPage, _Component);

  var _super = _createSuper(ItemManagementPage);

  function ItemManagementPage() {
    _classCallCheck(this, ItemManagementPage);

    return _super.apply(this, arguments);
  }

  _createClass(ItemManagementPage, [{
    key: "template",
    value: function template() {
      return "\n      <section>\n        <h2 hidden>\uCD94\uAC00\uD560 \uC0C1\uD488 \uC815\uBCF4</h2>\n        <add-form></add-form>\n      </section>\n      <section>\n        <h2 class=\"table-title\">\uC0C1\uD488 \uD604\uD669</h2>\n        <item-table></item-table>\n      </section>\n    ";
    }
  }]);

  return ItemManagementPage;
}(_core_Component__WEBPACK_IMPORTED_MODULE_0__["default"]);

customElements.define('item-management', ItemManagementPage);

/***/ }),

/***/ "./src/views/pages/ItemPurchasePage.js":
/*!*********************************************!*\
  !*** ./src/views/pages/ItemPurchasePage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ItemPurchasePage = /*#__PURE__*/function (_Component) {
  _inherits(ItemPurchasePage, _Component);

  var _super = _createSuper(ItemPurchasePage);

  function ItemPurchasePage() {
    _classCallCheck(this, ItemPurchasePage);

    return _super.apply(this, arguments);
  }

  _createClass(ItemPurchasePage, [{
    key: "template",
    value: function template() {
      return "\n      <div>\n        <p>2\uB2E8\uACC4 \uAD6C\uD604 \uC608\uC815</p>\n      </div>\n    ";
    }
  }]);

  return ItemPurchasePage;
}(_core_Component__WEBPACK_IMPORTED_MODULE_0__["default"]);

customElements.define('item-purchase', ItemPurchasePage);

/***/ }),

/***/ "./src/views/pages/NotFoundPage.js":
/*!*****************************************!*\
  !*** ./src/views/pages/NotFoundPage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var NotFound = /*#__PURE__*/function (_Component) {
  _inherits(NotFound, _Component);

  var _super = _createSuper(NotFound);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _super.apply(this, arguments);
  }

  _createClass(NotFound, [{
    key: "template",
    value: function template() {
      return "\n      <div>\n        <p>\uD83D\uDE31 Not Found</p>\n      </div>\n    ";
    }
  }]);

  return NotFound;
}(_core_Component__WEBPACK_IMPORTED_MODULE_0__["default"]);

customElements.define('not-found', NotFound);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n}\n\nbody {\n  background-color: #f9f9f9;\n  letter-spacing: 0.5px;\n}\n\ninput {\n  margin: 0;\n  padding: 0;\n}\n\n.app-container {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  width: 518px;\n  min-height: 593px;\n  margin: 0 auto;\n  align-items: center;\n  margin-top: 32px;\n  padding: 40px;\n}\n\n.title {\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 36px;\n  margin-bottom: 32px;\n}\n\n.nav-bar {\n  display: flex;\n  flex-direction: row;\n  gap: 4px;\n}\n\n.nav-button {\n  width: 117px;\n  height: 36px;\n}\n\n.styled-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 4px;\n  text-decoration: none;\n  outline: none;\n  background: #f5f5f5;\n  color: black;\n  cursor: pointer;\n}\n\n.styled-button.selected {\n  background: #ceecf0;\n}\n\n.styled-button.emphasized {\n  background: #00bcd4;\n  color: white;\n}\n\n.page-container {\n  margin-top: 52px;\n}\n\n.page {\n  display: flex;\n  flex-direction: column;\n  gap: 48px;\n}\n\n.description {\n  display: block;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n\n.styled-input {\n  font-family: 'Roboto', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  border: 1px solid rgba(180, 180, 180, 1);\n  border-radius: 4px;\n}\n\n.styled-input::placeholder {\n  color: #8b8b8b;\n}\n\n.transparent-input {\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  text-align: center;\n  width: 100%;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  padding: 0;\n  border: 0;\n}\n\n.table-title {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.15px;\n  margin-bottom: 16px;\n}\n\n.styled-table {\n  width: 100%;\n  border-top: 1px solid #dcdcdc;\n  border-collapse: collapse;\n  text-align: center;\n}\n\n.no-border-top {\n  border-top: none;\n}\n\n.scrollable {\n  max-height: 225px;\n  overflow-y: auto;\n}\n\n.styled-th {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  border-bottom: 1px solid #dcdcdc;\n  padding: 8px;\n}\n\n.styled-tr {\n  border-bottom: 1px solid #dcdcdc;\n  padding: 8px;\n}\n\n.styled-td {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  border-bottom: 1px solid #dcdcdc;\n  padding: 8px;\n}\n\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;EACE,iCAAiC;EACjC,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,qCAAqC;EACrC,kBAAkB;EAClB,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,iBAAiB;EACjB,cAAc;EACd,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,iCAAiC;EACjC,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,wCAAwC;EACxC,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iCAAiC;EACjC,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,6BAA6B;EAC7B,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,gCAAgC;EAChC,YAAY;AACd;;AAEA;EACE,gCAAgC;EAChC,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,gCAAgC;EAChC,YAAY;AACd;;AAEA;EACE,wBAAwB;AAC1B","sourcesContent":["html {\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n}\n\nbody {\n  background-color: #f9f9f9;\n  letter-spacing: 0.5px;\n}\n\ninput {\n  margin: 0;\n  padding: 0;\n}\n\n.app-container {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  width: 518px;\n  min-height: 593px;\n  margin: 0 auto;\n  align-items: center;\n  margin-top: 32px;\n  padding: 40px;\n}\n\n.title {\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 36px;\n  margin-bottom: 32px;\n}\n\n.nav-bar {\n  display: flex;\n  flex-direction: row;\n  gap: 4px;\n}\n\n.nav-button {\n  width: 117px;\n  height: 36px;\n}\n\n.styled-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 4px;\n  text-decoration: none;\n  outline: none;\n  background: #f5f5f5;\n  color: black;\n  cursor: pointer;\n}\n\n.styled-button.selected {\n  background: #ceecf0;\n}\n\n.styled-button.emphasized {\n  background: #00bcd4;\n  color: white;\n}\n\n.page-container {\n  margin-top: 52px;\n}\n\n.page {\n  display: flex;\n  flex-direction: column;\n  gap: 48px;\n}\n\n.description {\n  display: block;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n\n.styled-input {\n  font-family: 'Roboto', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  border: 1px solid rgba(180, 180, 180, 1);\n  border-radius: 4px;\n}\n\n.styled-input::placeholder {\n  color: #8b8b8b;\n}\n\n.transparent-input {\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  text-align: center;\n  width: 100%;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  padding: 0;\n  border: 0;\n}\n\n.table-title {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.15px;\n  margin-bottom: 16px;\n}\n\n.styled-table {\n  width: 100%;\n  border-top: 1px solid #dcdcdc;\n  border-collapse: collapse;\n  text-align: center;\n}\n\n.no-border-top {\n  border-top: none;\n}\n\n.scrollable {\n  max-height: 225px;\n  overflow-y: auto;\n}\n\n.styled-th {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  border-bottom: 1px solid #dcdcdc;\n  padding: 8px;\n}\n\n.styled-tr {\n  border-bottom: 1px solid #dcdcdc;\n  padding: 8px;\n}\n\n.styled-td {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  border-bottom: 1px solid #dcdcdc;\n  padding: 8px;\n}\n\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/changeChargePage.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/changeChargePage.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".change-charge-form {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 372px;\n}\n\n.charge-amount-input {\n  width: 300px;\n  height: 34px;\n}\n\n.add-charge-button {\n  width: 56px;\n  height: 36px;\n  align-self: flex-end;\n}\n\n.current-money-indicator {\n  margin-top: 16px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/changeChargePage.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":[".change-charge-form {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 372px;\n}\n\n.charge-amount-input {\n  width: 300px;\n  height: 34px;\n}\n\n.add-charge-button {\n  width: 56px;\n  height: 36px;\n  align-self: flex-end;\n}\n\n.current-money-indicator {\n  margin-top: 16px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_itemManagementPage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./itemManagementPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/itemManagementPage.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_changeChargePage_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./changeChargePage.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/changeChargePage.css");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_itemManagementPage_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_changeChargePage_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/itemManagementPage.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/itemManagementPage.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".item-add-form {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 440px;\n}\n\n.fieldset {\n  border: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  gap: 4px;\n  justify-content: stretch;\n}\n\n.item-input {\n  vertical-align: top;\n  width: 120px;\n  height: 34px;\n}\n\n.add-item-button {\n  width: 56px;\n  height: 36px;\n  margin-left: 16px;\n  align-self: flex-end;\n}\n\n.item-button-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 8px;\n}\n\n.item-edit-button,\n.item-remove-button,\n.item-update-button {\n  width: 50px;\n  height: 32px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/itemManagementPage.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,SAAS;EACT,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;AACV;;AAEA;;;EAGE,WAAW;EACX,YAAY;AACd","sourcesContent":[".item-add-form {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 440px;\n}\n\n.fieldset {\n  border: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  gap: 4px;\n  justify-content: stretch;\n}\n\n.item-input {\n  vertical-align: top;\n  width: 120px;\n  height: 34px;\n}\n\n.add-item-button {\n  width: 56px;\n  height: 36px;\n  margin-left: 16px;\n  align-self: flex-end;\n}\n\n.item-button-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 8px;\n}\n\n.item-edit-button,\n.item-remove-button,\n.item-update-button {\n  width: 50px;\n  height: 32px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/configs/constants.ts":
/*!**********************************!*\
  !*** ./src/configs/constants.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHARGE_AMOUNT": () => (/* binding */ CHARGE_AMOUNT),
/* harmony export */   "ITEM": () => (/* binding */ ITEM),
/* harmony export */   "COIN": () => (/* binding */ COIN),
/* harmony export */   "PAGES": () => (/* binding */ PAGES)
/* harmony export */ });
var CHARGE_AMOUNT = {
    LABEL: '충전 금액',
    MIN: 10,
    MAX: 100000,
    STEP: 10
};
var ITEM = {
    NAME: {
        LABEL: '상품명',
        LENGTH: {
            MIN: 1,
            MAX: 10
        }
    },
    PRICE: {
        LABEL: '가격',
        MIN: 100,
        MAX: 10000,
        STEP: 10
    },
    QUANTITY: {
        LABEL: '수량',
        MIN: 1,
        MAX: 20
    }
};
var COIN = {
    VALUES: [10, 50, 100, 500]
};
var PAGES = {
    LANDING: {
        TITLE: '',
        PATH: ''
    },
    ITEM_MANAGEMENT: {
        TITLE: '상품 관리',
        PATH: '#item-management'
    },
    CHANGE_CHARGE: {
        TITLE: '잔돈 충전',
        PATH: '#change-charge'
    },
    ITEM_PURCHASE: {
        TITLE: '상품 구매',
        PATH: '#item-purchase'
    },
    DEFAULT: {
        TITLE: '',
        PATH: '*'
    }
};


/***/ }),

/***/ "./src/core/Subject.ts":
/*!*****************************!*\
  !*** ./src/core/Subject.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Subject = /** @class */ (function () {
    function Subject(key, initValue, checker) {
        if (checker !== Subject.private)
            return;
        this.key = key;
        this.value = initValue;
        this.observers = new Set();
        this.updated = false;
        Object.seal(this);
        Subject.subjects.add(this);
        this.checkUpdated();
    }
    Subject.observable = function (obj) {
        var observableObj = {};
        Object.keys(obj).forEach(function (key) {
            var subject = new Subject(key, obj[key], Subject.private);
            Object.defineProperty(observableObj, key, {
                get: function () {
                    return subject.get();
                },
                set: function (newValue) {
                    subject.set(newValue);
                }
            });
        });
        Object.seal(observableObj);
        return observableObj;
    };
    Subject.observe = function (target) {
        Subject.currentObserver = target;
        target.notify();
        Subject.currentObserver = null;
    };
    Subject.unobserve = function (target) {
        Subject.subjects.forEach(function (subject) {
            subject.unobserve(target);
        });
    };
    Subject.prototype.get = function () {
        if (Subject.currentObserver)
            this.observe(Subject.currentObserver);
        return this.value;
    };
    Subject.prototype.set = function (newValue) {
        this.value = newValue;
        this.updated = true;
    };
    Subject.prototype.observe = function (observer) {
        this.observers.add(observer);
    };
    Subject.prototype.unobserve = function (observer) {
        this.observers["delete"](observer);
    };
    Subject.prototype.checkUpdated = function () {
        var _this = this;
        if (this.updated) {
            this.notify();
            this.updated = false;
        }
        window.requestAnimationFrame(function () {
            _this.checkUpdated();
        });
    };
    Subject.prototype.notify = function () {
        this.observers.forEach(function (observer) { return observer.notify(); });
    };
    Subject.prototype.toString = function () {
        return this.key;
    };
    Subject.private = Symbol('private checker');
    Subject.subjects = new Set();
    return Subject;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subject);


/***/ }),

/***/ "./src/domains/VendingMachine.ts":
/*!***************************************!*\
  !*** ./src/domains/VendingMachine.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "vendingMachine": () => (/* binding */ vendingMachine)
/* harmony export */ });
/* harmony import */ var _core_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Subject */ "./src/core/Subject.ts");
/* harmony import */ var _utils_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/commons */ "./src/utils/commons.ts");
/* harmony import */ var _utils_coinUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/coinUtils */ "./src/utils/coinUtils.ts");
/* harmony import */ var _utils_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/validator */ "./src/utils/validator.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




var VendingMachine = /** @class */ (function () {
    function VendingMachine(initItems, initCoins) {
        this.init(initItems, initCoins);
    }
    VendingMachine.prototype.init = function (initItems, initCoins) {
        this.state = _core_Subject__WEBPACK_IMPORTED_MODULE_0__["default"].observable({
            items: initItems,
            coins: initCoins
        });
    };
    VendingMachine.prototype.useStore = function (callback) {
        return (0,_utils_commons__WEBPACK_IMPORTED_MODULE_1__.deepClone)(callback(this.state));
    };
    VendingMachine.prototype.addItem = function (item) {
        var prevItem = this.findItem(item.name);
        if (prevItem) {
            this.updateItem(prevItem.name, __assign(__assign({}, prevItem), { quantity: prevItem.quantity + item.quantity }));
            return;
        }
        (0,_utils_validator__WEBPACK_IMPORTED_MODULE_3__.validate)(_utils_validator__WEBPACK_IMPORTED_MODULE_3__.itemValidator, item);
        var newItem = prevItem
            ? __assign(__assign({}, prevItem), { price: item.price, quantity: prevItem.quantity + item.quantity }) : item;
        this.state.items = __spreadArray(__spreadArray([], this.state.items, true), [newItem], false);
    };
    VendingMachine.prototype.updateItem = function (name, updatedItem) {
        (0,_utils_validator__WEBPACK_IMPORTED_MODULE_3__.validate)(_utils_validator__WEBPACK_IMPORTED_MODULE_3__.itemValidator, updatedItem);
        (0,_utils_validator__WEBPACK_IMPORTED_MODULE_3__.validate)(_utils_validator__WEBPACK_IMPORTED_MODULE_3__.updatedItemValidator, this, name, updatedItem);
        this.state.items = this.state.items.map(function (item) {
            return item.name === name ? updatedItem : item;
        });
    };
    VendingMachine.prototype.removeItem = function (name) {
        (0,_utils_validator__WEBPACK_IMPORTED_MODULE_3__.validate)(_utils_validator__WEBPACK_IMPORTED_MODULE_3__.removedItemValidator, this);
        this.state.items = this.state.items.filter(function (item) { return item.name !== name; });
    };
    VendingMachine.prototype.findItem = function (name) {
        return this.state.items.filter(function (item) { return item.name === name; })[0] || null;
    };
    VendingMachine.prototype.addCoin = function (amount) {
        var _this = this;
        (0,_utils_validator__WEBPACK_IMPORTED_MODULE_3__.validate)(_utils_validator__WEBPACK_IMPORTED_MODULE_3__.amountValidator, amount, this.getTotalMoney());
        var randomCoins = (0,_utils_coinUtils__WEBPACK_IMPORTED_MODULE_2__.createRandomCoins)(amount);
        var updatedCoins = {
            10: 0,
            50: 0,
            100: 0,
            500: 0
        };
        Object.keys(this.state.coins).forEach(function (key) {
            updatedCoins[key] = _this.state.coins[key] + randomCoins[key];
        });
        this.state.coins = updatedCoins;
    };
    VendingMachine.prototype.getTotalMoney = function () {
        return Object.entries(this.state.coins).reduce(function (sum, _a) {
            var key = _a[0], value = _a[1];
            return sum + Number(key) * value;
        }, 0);
    };
    return VendingMachine;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VendingMachine);
var vendingMachine = new VendingMachine([], {
    10: 0,
    50: 0,
    100: 0,
    500: 0
});


/***/ }),

/***/ "./src/utils/coinUtils.ts":
/*!********************************!*\
  !*** ./src/utils/coinUtils.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRandomCoins": () => (/* binding */ createRandomCoins)
/* harmony export */ });
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/constants */ "./src/configs/constants.ts");
/* harmony import */ var _commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commons */ "./src/utils/commons.ts");


var emptyCoins = {
    10: 0,
    50: 0,
    100: 0,
    500: 0
};
var getRandomCoin = function () {
    var coinValueList = _configs_constants__WEBPACK_IMPORTED_MODULE_0__.COIN.VALUES;
    var randomIndex = Math.floor(Math.random() * 4);
    return coinValueList[randomIndex];
};
var createRandomCoins = function (amount) {
    var coins = (0,_commons__WEBPACK_IMPORTED_MODULE_1__.deepClone)(emptyCoins);
    var sum = 0;
    while (sum !== amount) {
        var randomCoin = getRandomCoin();
        if (sum + randomCoin <= amount) {
            sum += randomCoin;
            coins[randomCoin] += 1;
        }
    }
    return coins;
};


/***/ }),

/***/ "./src/utils/commons.ts":
/*!******************************!*\
  !*** ./src/utils/commons.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepEqual": () => (/* binding */ deepEqual),
/* harmony export */   "deepClone": () => (/* binding */ deepClone)
/* harmony export */ });
var deepEqual = function (a, b) {
    if (a === b)
        return true;
    if (a && b && typeof a === 'object' && typeof b === 'object') {
        if (Array.isArray(a)) {
            return (a.length === b.length &&
                a.every(function (elem, index) { return deepEqual(elem, b[index]); }));
        }
        if (a instanceof Set && b instanceof Set) {
            return (a.size === b.size &&
                Array.from(a.entries()).every(function (_a) {
                    var key = _a[0];
                    return b.has(key);
                }));
        }
        if (a instanceof Map && b instanceof Map) {
            return (a.size === b.size &&
                Array.from(a.entries()).every(function (_a) {
                    var key = _a[0], value = _a[1];
                    return b.has(key) && deepEqual(value, b.get(key));
                }));
        }
        var keys = {
            a: Object.keys(a),
            b: Object.keys(b)
        };
        return (a.constructor === b.constructor &&
            keys.a.length === keys.b.length &&
            keys.a.some(function (key) { return Object.prototype.hasOwnProperty.call(b, key); }) &&
            keys.a.every(function (key) { return deepEqual(a[key], b[key]); }));
    }
    return Number.isNaN(a) && Number.isNaN(b);
};
var deepClone = function (obj) {
    if (obj === null ||
        obj === undefined ||
        Number.isNaN(obj) ||
        typeof obj !== 'object')
        return obj;
    if (Array.isArray(obj)) {
        return obj.map(function (elem) { return deepClone(elem); });
    }
    if (obj instanceof Set) {
        var clone_1 = new Set();
        obj.forEach(function (elem) { return clone_1.add(deepClone(elem)); });
        return clone_1;
    }
    if (obj instanceof Map) {
        var clone_2 = new Map();
        obj.forEach(function (value, key) {
            clone_2.set(key, value);
        });
        return clone_2;
    }
    var clone = {};
    Object.keys(obj).forEach(function (key) {
        clone[key] =
            typeof obj[key] === 'object' && obj[key] !== null
                ? deepClone(obj[key])
                : (clone[key] = obj[key]);
    });
    return clone;
};


/***/ }),

/***/ "./src/utils/domUtils.ts":
/*!*******************************!*\
  !*** ./src/utils/domUtils.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHash": () => (/* binding */ getHash)
/* harmony export */ });
var getHash = function (target) {
    var href = (target || window).location.href;
    return new URL(href).hash;
};


/***/ }),

/***/ "./src/utils/validator.ts":
/*!********************************!*\
  !*** ./src/utils/validator.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validate": () => (/* binding */ validate),
/* harmony export */   "itemValidator": () => (/* binding */ itemValidator),
/* harmony export */   "updatedItemValidator": () => (/* binding */ updatedItemValidator),
/* harmony export */   "removedItemValidator": () => (/* binding */ removedItemValidator),
/* harmony export */   "amountValidator": () => (/* binding */ amountValidator)
/* harmony export */ });
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/constants */ "./src/configs/constants.ts");

var validate = function (validator) {
    var target = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        target[_i - 1] = arguments[_i];
    }
    validator.forEach(function (_a) {
        var test = _a.test, errorMessage = _a.errorMessage;
        if (!test.apply(void 0, target))
            throw new Error(errorMessage);
    });
};
var itemValidator = [
    {
        test: function (item) {
            return item.name.trim().length >= _configs_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM.NAME.LENGTH.MIN &&
                item.name.trim().length <= _configs_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM.NAME.LENGTH.MAX;
        },
        errorMessage: "\uC0C1\uD488\uBA85\uC740 ".concat(_configs_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM.NAME.LENGTH.MIN, "\uC5D0\uC11C ").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM.NAME.LENGTH.MAX, " \uAE00\uC790 \uC0AC\uC774\uC5EC\uC57C \uD569\uB2C8\uB2E4.")
    },
    {
        test: function (item) { return item.price % _configs_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM.PRICE.STEP === 0; },
        errorMessage: "\uC0C1\uD488 \uAC00\uACA9\uC740 ".concat(_configs_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM.PRICE.STEP, "\uC6D0 \uB2E8\uC704\uC5EC\uC57C \uD569\uB2C8\uB2E4.")
    },
    {
        test: function (item) {
            return item.price >= _configs_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM.PRICE.MIN && item.price <= _configs_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM.PRICE.MAX;
        },
        errorMessage: "\uC0C1\uD488 \uAC00\uACA9\uC740 ".concat(_configs_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM.PRICE.MIN, "\uC5D0\uC11C ").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM.PRICE.MAX, "\uC6D0 \uC0AC\uC774\uC5EC\uC57C \uD569\uB2C8\uB2E4.")
    },
    {
        test: function (item) {
            return item.quantity >= _configs_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM.QUANTITY.MIN && item.quantity <= _configs_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM.QUANTITY.MAX;
        },
        errorMessage: "\uC0C1\uD488\uC758 \uC218\uB7C9\uC740 ".concat(_configs_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM.QUANTITY.MIN, "\uC5D0\uC11C ").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM.QUANTITY.MAX, "\uAC1C \uC0AC\uC774\uC5EC\uC57C \uD569\uB2C8\uB2E4.")
    },
];
var updatedItemValidator = [
    {
        test: function (vendingMachine, name) {
            return vendingMachine.findItem(name);
        },
        errorMessage: '존재하지 않는 상품입니다.'
    },
    {
        test: function (vendingMachine, name, updatedItem) {
            return name === updatedItem.name || !vendingMachine.findItem(updatedItem.name);
        },
        errorMessage: '이미 존재하는 상품명입니다. 다른 상품명을 입력해주세요.'
    },
];
var removedItemValidator = [
    {
        test: function (vendingMachine, name) {
            return vendingMachine.findItem(name);
        },
        errorMessage: '존재하지 않는 상품입니다.'
    },
];
var amountValidator = [
    {
        test: function (amount) {
            return amount >= _configs_constants__WEBPACK_IMPORTED_MODULE_0__.CHARGE_AMOUNT.MIN && amount <= _configs_constants__WEBPACK_IMPORTED_MODULE_0__.CHARGE_AMOUNT.MAX;
        },
        errorMessage: "\uCDA9\uC804 \uAE08\uC561\uC740 ".concat(_configs_constants__WEBPACK_IMPORTED_MODULE_0__.CHARGE_AMOUNT.MIN, "\uC5D0\uC11C ").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_0__.CHARGE_AMOUNT.MAX, "\uC6D0 \uC0AC\uC774\uC5EC\uC57C \uD569\uB2C8\uB2E4.")
    },
    {
        test: function (amount) { return amount % _configs_constants__WEBPACK_IMPORTED_MODULE_0__.CHARGE_AMOUNT.STEP === 0; },
        errorMessage: "".concat(_configs_constants__WEBPACK_IMPORTED_MODULE_0__.CHARGE_AMOUNT.STEP, "\uC6D0 \uB2E8\uC704\uC758 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694")
    },
    {
        test: function (amount, totalMoney) {
            return amount + totalMoney <= _configs_constants__WEBPACK_IMPORTED_MODULE_0__.CHARGE_AMOUNT.MAX;
        },
        errorMessage: "\uCD1D\uC561\uC740 \uCD5C\uB300 ".concat(_configs_constants__WEBPACK_IMPORTED_MODULE_0__.CHARGE_AMOUNT.MAX, "\uC6D0\uAE4C\uC9C0 \uAC00\uB2A5\uD569\uB2C8\uB2E4")
    },
];


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _views_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/App */ "./src/views/App.js");


document.querySelector('#app').innerHTML = '<app-wrapper></app-wrapper>';
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map