/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/core/Component.js":
/*!*******************************!*\
  !*** ./src/core/Component.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Subject */ "./src/core/Subject.ts");
/* harmony import */ var _utils_commons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/commons */ "./src/utils/commons.ts");









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Component = /*#__PURE__*/function (_HTMLElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Component, _HTMLElement);

  var _super = _createSuper(Component);

  function Component() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Component);

    _this = _super.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "props", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", void 0);

    _this.setProps();

    _this.setup();

    _this.setEvent();

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Component, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _Subject__WEBPACK_IMPORTED_MODULE_8__["default"].observe(this);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _Subject__WEBPACK_IMPORTED_MODULE_8__["default"].unobserve(this);
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
      if ((0,_utils_commons__WEBPACK_IMPORTED_MODULE_9__.deepEqual)(this.state, newState)) return;
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
}( /*#__PURE__*/(0,_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(HTMLElement));



/***/ }),

/***/ "./src/core/TableRow.js":
/*!******************************!*\
  !*** ./src/core/TableRow.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableRow)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Subject */ "./src/core/Subject.ts");
/* harmony import */ var _utils_commons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/commons */ "./src/utils/commons.ts");









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var TableRow = /*#__PURE__*/function (_HTMLTableRowElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TableRow, _HTMLTableRowElement);

  var _super = _createSuper(TableRow);

  function TableRow() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TableRow);

    _this = _super.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "props", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", void 0);

    _this.setProps();

    _this.setup();

    _this.setEvent();

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TableRow, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _Subject__WEBPACK_IMPORTED_MODULE_8__["default"].observe(this);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _Subject__WEBPACK_IMPORTED_MODULE_8__["default"].unobserve(this);
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
      if ((0,_utils_commons__WEBPACK_IMPORTED_MODULE_9__.deepEqual)(this.state, newState)) return;
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
}( /*#__PURE__*/(0,_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(HTMLTableRowElement));



/***/ }),

/***/ "./src/views/App.js":
/*!**************************!*\
  !*** ./src/views/App.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Component */ "./src/core/Component.js");
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Router.js */ "./src/views/Router.js");
/* harmony import */ var _pages_LandingPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/LandingPage */ "./src/views/pages/LandingPage.js");
/* harmony import */ var _pages_LoginPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/LoginPage */ "./src/views/pages/LoginPage.js");
/* harmony import */ var _pages_SignupPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/SignupPage */ "./src/views/pages/SignupPage.js");
/* harmony import */ var _pages_ProfilePage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/ProfilePage */ "./src/views/pages/ProfilePage.js");
/* harmony import */ var _pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/NotFoundPage */ "./src/views/pages/NotFoundPage.js");
/* harmony import */ var _components_Snackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Snackbar */ "./src/views/components/Snackbar.js");
/* harmony import */ var _domains_Browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../domains/Browser */ "./src/domains/Browser.ts");
/* harmony import */ var _utils_domUtils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/domUtils */ "./src/utils/domUtils.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../configs/constants */ "./src/configs/constants.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }













var App = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(App, _Component);

  var _super = _createSuper(App);

  function App() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "setup",
    value: function setup() {
      _domains_Browser__WEBPACK_IMPORTED_MODULE_13__.browser.setLocation((0,_utils_domUtils__WEBPACK_IMPORTED_MODULE_14__.getPathname)());
    }
  }, {
    key: "template",
    value: function template() {
      return "\n      <main class=\"app-container\">\n        <component-router>\n          <landing-page\n            class=\"page\"\n            path=\"".concat(_configs_constants__WEBPACK_IMPORTED_MODULE_15__.PAGES.ITEM_MANAGEMENT.PATH, "|").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_15__.PAGES.CHANGE_CHARGE.PATH, "|").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_15__.PAGES.ITEM_PURCHASE.PATH, "\"\n            loginRequired=\"null\"\n          >\n          </landing-page>\n          <login-page\n            class=\"page\"\n            path=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_15__.PAGES.LOGIN.PATH, "\"\n            loginRequired=\"false\"\n          >\n          </login-page>\n          <signup-page\n            class=\"page\"\n            path=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_15__.PAGES.SIGNUP.PATH, "\"\n            loginRequired=\"false\"\n          >\n          </signup-page>\n          <profile-page\n            class=\"page\"\n            path=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_15__.PAGES.PROFILE.PATH, "\"\n            loginRequired=\"true\"\n          >\n          </profile-page>\n          <not-found\n            class=\"page\"\n            path=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_15__.PAGES.DEFAULT.PATH, "\"\n            loginRequired=\"null\"\n          >\n          </not-found>\n        </component-router>\n      </main>\n      <snack-bar id=\"snackbar\" duration=\"3000\"></snack-bar>\n    ");
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      window.addEventListener('popstate', function (event) {
        _domains_Browser__WEBPACK_IMPORTED_MODULE_13__.browser.setLocation((0,_utils_domUtils__WEBPACK_IMPORTED_MODULE_14__.getPathname)(event.path[0]));
      });
    }
  }]);

  return App;
}(_core_Component__WEBPACK_IMPORTED_MODULE_5__["default"]);


customElements.define('app-wrapper', App);

/***/ }),

/***/ "./src/views/Router.js":
/*!*****************************!*\
  !*** ./src/views/Router.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Component */ "./src/core/Component.js");
/* harmony import */ var _domains_Browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../domains/Browser */ "./src/domains/Browser.ts");
/* harmony import */ var _domains_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../domains/Auth */ "./src/domains/Auth.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../configs/constants */ "./src/configs/constants.ts");
/* harmony import */ var _utils_commons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/commons */ "./src/utils/commons.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var Router = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Router, _Component);

  var _super = _createSuper(Router);

  function Router() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Router);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Router, [{
    key: "setup",
    value: function setup() {
      var routes = Array.from(this.children).map(function (child) {
        return {
          path: child.getAttribute('path'),
          component: child
        };
      });
      this.state = {
        routes: routes
      };
    }
  }, {
    key: "render",
    value: function render() {
      var component = this.getComponent();
      this.redirect(component);
      this.clearDOM();
      this.appendChild(component);
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      var location = _domains_Browser__WEBPACK_IMPORTED_MODULE_6__.browser.useStore(function (state) {
        return state.location;
      });
      var routes = this.state.routes;
      var currentRoute = routes.filter(function (route) {
        return route.path.split('|').includes(location) || route.path === _configs_constants__WEBPACK_IMPORTED_MODULE_8__.PAGES.DEFAULT.PATH;
      })[0];
      return location === _configs_constants__WEBPACK_IMPORTED_MODULE_8__.PAGES.LANDING.PATH ? routes[0].component : currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.component;
    }
  }, {
    key: "redirect",
    value: function redirect(component) {
      var loginRequired = (0,_utils_commons__WEBPACK_IMPORTED_MODULE_9__.convertStringToBoolean)(component.getAttribute('loginRequired'));
      var redirection = _domains_Auth__WEBPACK_IMPORTED_MODULE_7__.auth.authRoute(loginRequired);
      var state = {};

      switch (redirection) {
        case _configs_constants__WEBPACK_IMPORTED_MODULE_8__.REDICTION.LANDING:
          window.history.pushState(state, '', _configs_constants__WEBPACK_IMPORTED_MODULE_8__.PAGES.LANDING.PATH);
          dispatchEvent(new PopStateEvent('popstate', {
            state: state
          }));
          break;

        case _configs_constants__WEBPACK_IMPORTED_MODULE_8__.REDICTION.LOGIN:
          window.history.pushState(state, '', _configs_constants__WEBPACK_IMPORTED_MODULE_8__.PAGES.LOGIN.PATH);
          dispatchEvent(new PopStateEvent('popstate', {
            state: state
          }));
          break;

        default:
          break;
      }
    }
  }]);

  return Router;
}(_core_Component__WEBPACK_IMPORTED_MODULE_5__["default"]);

customElements.define('component-router', Router);

/***/ }),

/***/ "./src/views/components/ChangeChargeForm.js":
/*!**************************************************!*\
  !*** ./src/views/components/ChangeChargeForm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChangeChargeForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../domains/VendingMachine */ "./src/domains/VendingMachine.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../configs/constants */ "./src/configs/constants.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var ChangeChargeForm = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ChangeChargeForm, _Component);

  var _super = _createSuper(ChangeChargeForm);

  function ChangeChargeForm() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChangeChargeForm);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChangeChargeForm, [{
    key: "template",
    value: function template() {
      return "\n      <form id=\"change-charge-form\" class=\"change-charge-form\">\n        <div>\n          <label for=\"amount\" class=\"description\">\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD560 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.</label>\n          <input\n            id=\"charge-amount\"\n            class=\"charge-amount-input styled-input\"\n            name=\"amount\"\n            placeholder=\"\uAE08\uC561\"\n            type=\"number\"\n            min=\"".concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.CHARGE_AMOUNT.MIN, "\"\n            max=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.CHARGE_AMOUNT.MAX, "\"\n            step=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.CHARGE_AMOUNT.STEP, "\"\n            required\n            autofocus\n          >\n        </div>\n        <button id=\"add-charge-button\" class=\"add-charge-button styled-button emphasized\">\uCDA9\uC804</button>\n      </form>\n    ");
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
          _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_6__.vendingMachine.addCoin(amount);
          amountInput.value = '';
        } catch (err) {
          document.querySelector('#snackbar').trigger(err.message);
        }
      });
    }
  }]);

  return ChangeChargeForm;
}(_core_Component__WEBPACK_IMPORTED_MODULE_5__["default"]);


customElements.define('charge-form', ChangeChargeForm);

/***/ }),

/***/ "./src/views/components/CoinTable.js":
/*!*******************************************!*\
  !*** ./src/views/components/CoinTable.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CoinTable)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../domains/VendingMachine */ "./src/domains/VendingMachine.ts");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var CoinTable = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CoinTable, _Component);

  var _super = _createSuper(CoinTable);

  function CoinTable() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CoinTable);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CoinTable, [{
    key: "template",
    value: function template() {
      var coins = _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_8__.vendingMachine.useStore(function (state) {
        return state.coins;
      });

      var coinArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Object.entries(coins)).sort(function (_ref, _ref2) {
        var _ref3 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 1),
            a = _ref3[0];

        var _ref4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 1),
            b = _ref4[0];

        return b - a;
      });

      return "\n      <table class=\"styled-table\">\n        <thead>\n          <tr class=\"styled-tr\">\n            <th class=\"styled-th\">\uB3D9\uC804</th>\n            <th class=\"styled-th\">\uAC1C\uC218</th>\n          </tr>\n        </thead>\n        <tbody>\n          ".concat(coinArray.map(function (_ref5) {
        var _ref6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, 2),
            key = _ref6[0],
            value = _ref6[1];

        return "\n                <tr class=\"styled-tr\">\n                  <td class=\"styled-td\">".concat(key, "\uC6D0</td>\n                  <td class=\"styled-td\">").concat(value, "\uAC1C</td>\n                </tr>\n              ");
      }).join(''), "\n        </tbody>\n      </table>\n    ");
    }
  }]);

  return CoinTable;
}(_core_Component__WEBPACK_IMPORTED_MODULE_7__["default"]);


customElements.define('coin-table', CoinTable);

/***/ }),

/***/ "./src/views/components/CurrentMoneyIndicator.js":
/*!*******************************************************!*\
  !*** ./src/views/components/CurrentMoneyIndicator.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CurrentMoneyIndicator)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../domains/VendingMachine */ "./src/domains/VendingMachine.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var CurrentMoneyIndicator = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CurrentMoneyIndicator, _Component);

  var _super = _createSuper(CurrentMoneyIndicator);

  function CurrentMoneyIndicator() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CurrentMoneyIndicator);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CurrentMoneyIndicator, [{
    key: "template",
    value: function template() {
      var totalMoney = _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_6__.vendingMachine.getTotalMoney();
      return "\n      <p class=\"money-indicator\">\uD604\uC7AC \uBCF4\uC720 \uAE08\uC561: <span>".concat(totalMoney, "\uC6D0</span></p>\n    ");
    }
  }]);

  return CurrentMoneyIndicator;
}(_core_Component__WEBPACK_IMPORTED_MODULE_5__["default"]);


customElements.define('current-money', CurrentMoneyIndicator);

/***/ }),

/***/ "./src/views/components/InsertMoneyForm.js":
/*!*************************************************!*\
  !*** ./src/views/components/InsertMoneyForm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InsertMoneyForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../domains/VendingMachine */ "./src/domains/VendingMachine.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../configs/constants */ "./src/configs/constants.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var InsertMoneyForm = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(InsertMoneyForm, _Component);

  var _super = _createSuper(InsertMoneyForm);

  function InsertMoneyForm() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InsertMoneyForm);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InsertMoneyForm, [{
    key: "template",
    value: function template() {
      return "\n      <form id=\"insert-money-form\" class=\"insert-money-form\">\n        <div>\n          <label for=\"amount\" class=\"description\">\uC0C1\uD488\uC744 \uAD6C\uC785\uD560 \uAE08\uC561\uC744 \uD22C\uC785\uD574\uC8FC\uC138\uC694.</label>\n          <input\n            id=\"insert-amount\"\n            class=\"insert-amount-input styled-input\"\n            name=\"amount\"\n            placeholder=\"\uAE08\uC561\"\n            type=\"number\"\n            min=\"10\"\n            max=\"1000000\"\n            step=\"10\"\n            required\n            autofocus\n          >\n        </div>\n        <button id=\"insert-money-button\" class=\"insert-money-button styled-button emphasized\">\uD22C\uC785</button>\n      </form>\n    ";
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      var _this = this;

      this.addEvent('submit', '#insert-money-form', function (event) {
        event.preventDefault();

        var amountInput = _this.querySelector('#insert-amount');

        var amount = amountInput.valueAsNumber;

        try {
          _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_6__.vendingMachine.insertMoney(amount);
          amountInput.value = '';
        } catch (err) {
          document.querySelector('#snackbar').trigger(err.message);
        }
      });
    }
  }]);

  return InsertMoneyForm;
}(_core_Component__WEBPACK_IMPORTED_MODULE_5__["default"]);


customElements.define('insert-form', InsertMoneyForm);

/***/ }),

/***/ "./src/views/components/InsertedMoneyIndicator.js":
/*!********************************************************!*\
  !*** ./src/views/components/InsertedMoneyIndicator.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InsertedMoneyIndicator)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../domains/VendingMachine */ "./src/domains/VendingMachine.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var InsertedMoneyIndicator = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(InsertedMoneyIndicator, _Component);

  var _super = _createSuper(InsertedMoneyIndicator);

  function InsertedMoneyIndicator() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InsertedMoneyIndicator);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InsertedMoneyIndicator, [{
    key: "template",
    value: function template() {
      var insertedMoney = _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_6__.vendingMachine.useStore(function (state) {
        return state.insertedMoney;
      });
      return "\n      <p class=\"money-indicator\">\uD22C\uC785\uD55C \uAE08\uC561: <span>".concat(insertedMoney, "\uC6D0</span></p>\n    ");
    }
  }]);

  return InsertedMoneyIndicator;
}(_core_Component__WEBPACK_IMPORTED_MODULE_5__["default"]);


customElements.define('inserted-money', InsertedMoneyIndicator);

/***/ }),

/***/ "./src/views/components/ItemAddForm.js":
/*!*********************************************!*\
  !*** ./src/views/components/ItemAddForm.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ItemAddForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../domains/VendingMachine */ "./src/domains/VendingMachine.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../configs/constants */ "./src/configs/constants.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var ItemAddForm = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ItemAddForm, _Component);

  var _super = _createSuper(ItemAddForm);

  function ItemAddForm() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ItemAddForm);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ItemAddForm, [{
    key: "template",
    value: function template() {
      return "\n      <form id=\"item-add-form\" class=\"item-add-form\">\n        <fieldset class=\"fieldset\">\n          <legend class=\"description\">\uCD94\uAC00\uD560 \uC0C1\uD488 \uD604\uD669\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.</legend>\n          <label hidden for=\"name\">".concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.ITEM.NAME.LABEL, "</label>\n          <input\n            id=\"item-name-input\"\n            class=\"item-input styled-input\"\n            name=\"name\"\n            placeholder=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.ITEM.NAME.LABEL, "\"\n            type=\"text\"\n            maxlength=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.ITEM.NAME.LENGTH.MAX, "\"\n            required\n            autofocus\n          >\n          <label hidden for=\"price\">").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.ITEM.PRICE.LABEL, "</label>\n          <input\n            id=\"item-price-input\"\n            class=\"item-input styled-input\"\n            name=\"price\"\n            placeholder=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.ITEM.PRICE.LABEL, "\"\n            type=\"number\"\n            min=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.ITEM.PRICE.MIN, "\"\n            max=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.ITEM.PRICE.MAX, "\"\n            step=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.ITEM.PRICE.STEP, "\"\n            required\n          >\n          <label hidden for=\"quantity\">").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.ITEM.QUANTITY.LABEL, "</label>\n          <input\n            id=\"item-quantity-input\"\n            class=\"item-input styled-input\"\n            name=\"quantity\"\n            placeholder=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.ITEM.QUANTITY.LABEL, "\"\n            type=\"number\"\n            min=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.ITEM.QUANTITY.MIN, "\"\n            max=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.ITEM.QUANTITY.MAX, "\"\n            step=\"1\"\n            required\n          >\n        </fieldset>\n        <button id=\"add-item-button\" class=\"add-item-button styled-button emphasized\">\uCD94\uAC00</button>\n      </form>\n    ");
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
          _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_6__.vendingMachine.addItem(item);
          nameInput.value = '';
          priceInput.value = '';
          quantityInput.value = '';
        } catch (err) {
          document.querySelector('#snackbar').trigger(err.message);
        }
      });
    }
  }]);

  return ItemAddForm;
}(_core_Component__WEBPACK_IMPORTED_MODULE_5__["default"]);


customElements.define('add-form', ItemAddForm);

/***/ }),

/***/ "./src/views/components/ItemRow.js":
/*!*****************************************!*\
  !*** ./src/views/components/ItemRow.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_TableRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/TableRow */ "./src/core/TableRow.js");
/* harmony import */ var _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../domains/VendingMachine */ "./src/domains/VendingMachine.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../configs/constants */ "./src/configs/constants.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var ItemRow = /*#__PURE__*/function (_TableRow) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ItemRow, _TableRow);

  var _super = _createSuper(ItemRow);

  function ItemRow() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ItemRow);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ItemRow, [{
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

      if (isEditing) {
        return "\n        <td class=\"item-name styled-td\">\n          <input\n            value=\"".concat(name, "\"\n            class=\"item-name-edit-input transparent-input\"\n            type=\"text\"\n            maxlength=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.ITEM.NAME.LENGTH.MAX, "\"\n          >\n        </td>\n        <td class=\"item-price styled-td\">\n          <input\n            value=\"").concat(price, "\"\n            class=\"item-price-edit-input transparent-input\"\n            type=\"number\"\n            min=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.ITEM.PRICE.MIN, "\"\n            max=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.ITEM.PRICE.MAX, "\"\n            step=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_7__.ITEM.PRICE.STEP, "\"\n          >\n        </td>\n        <td class=\"item-quantity styled-td\">\n          <input\n            value=\"").concat(quantity, "\"\n            class=\"item-quantity-edit-input transparent-input\"\n            type=\"number\"\n            step=\"1\"\n            min=\"1\"\n            max=\"20\"\n          >\n        </td>\n        <td class=\"item-button-container\">\n          <button class=\"item-update-button styled-button\">\uD655\uC778</button>\n        </td>\n      ");
      }

      return "\n      <td class=\"item-name styled-td\">".concat(name, "</td>\n      <td class=\"item-price styled-td\">").concat(price, "</td>\n      <td class=\"item-quantity styled-td\">").concat(quantity, "</td>\n      <td class=\"item-button-container\">\n        <button class=\"item-edit-button styled-button\" type=\"button\">\uC218\uC815</button>\n        <button class=\"item-remove-button styled-button\" type=\"button\">\uC0AD\uC81C</button>\n      </td>\n    ");
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
          _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_6__.vendingMachine.updateItem(prevName, updatedItem);
        } catch (err) {
          document.querySelector('#snackbar').trigger(err.message);
        }
      });
      this.addEvent('click', '.item-remove-button', function () {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
          var name = _this.props.name;

          try {
            _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_6__.vendingMachine.removeItem(name);
          } catch (err) {
            document.querySelector('#snackbar').trigger(err.message);
          }
        }
      });
    }
  }]);

  return ItemRow;
}(_core_TableRow__WEBPACK_IMPORTED_MODULE_5__["default"]);

customElements.define('item-row', ItemRow, {
  "extends": 'tr'
});

/***/ }),

/***/ "./src/views/components/ItemTable.js":
/*!*******************************************!*\
  !*** ./src/views/components/ItemTable.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ItemTable)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _ItemRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ItemRow */ "./src/views/components/ItemRow.js");
/* harmony import */ var _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../domains/VendingMachine */ "./src/domains/VendingMachine.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../configs/constants */ "./src/configs/constants.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var ItemTable = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ItemTable, _Component);

  var _super = _createSuper(ItemTable);

  function ItemTable() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ItemTable);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ItemTable, [{
    key: "template",
    value: function template() {
      var items = _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_7__.vendingMachine.useStore(function (state) {
        return state.items;
      });
      return "\n      <table class=\"styled-table\">\n        <colgroup>\n          <col style=\"width: 25%\">\n          <col style=\"width: 25%\">\n          <col style=\"width: 25%\">\n          <col style=\"width: 25%\">\n        </colgroup>\n        <thead>\n          <tr class=\"styled-tr\">\n            <th class=\"styled-th\">".concat(_configs_constants__WEBPACK_IMPORTED_MODULE_8__.ITEM.NAME.LABEL, "</th>\n            <th class=\"styled-th\">").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_8__.ITEM.PRICE.LABEL, "</th>\n            <th class=\"styled-th\">").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_8__.ITEM.QUANTITY.LABEL, "</th>\n            <th class=\"styled-th\"></th>\n          </tr>\n        </thead>\n      </table>\n      <div class=\"scrollable\">\n        <table class=\"styled-table no-border-top\">\n          <colgroup>\n            <col style=\"width: 25%\">\n            <col style=\"width: 25%\">\n            <col style=\"width: 25%\">\n            <col style=\"width: 25%\">\n          </colgroup>\n          <tbody>\n            ").concat(items.map(function (_ref) {
        var name = _ref.name,
            price = _ref.price,
            quantity = _ref.quantity;
        return "\n                  <tr\n                    is=\"item-row\"\n                    class=\"item-row styled-tr\"\n                    name=\"".concat(name, "\"\n                    price=\"").concat(price, "\"\n                    quantity=\"").concat(quantity, "\"\n                  >\n                  </tr>\n                ");
      }).join(''), "\n          </tbody>\n        </table>\n      </div>\n    ");
    }
  }]);

  return ItemTable;
}(_core_Component__WEBPACK_IMPORTED_MODULE_5__["default"]);


customElements.define('item-table', ItemTable);

/***/ }),

/***/ "./src/views/components/Link.js":
/*!**************************************!*\
  !*** ./src/views/components/Link.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Link = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Link, _Component);

  var _super = _createSuper(Link);

  function Link() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Link);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Link, [{
    key: "template",
    value: function template() {
      return this.textContent;
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      var href = this.props.href;

      this.onclick = function () {
        var state = {};
        window.history.pushState(state, '', href);
        dispatchEvent(new PopStateEvent('popstate', {
          state: state
        }));
      };
    }
  }]);

  return Link;
}(_core_Component__WEBPACK_IMPORTED_MODULE_5__["default"]);


customElements.define('a-link', Link);

/***/ }),

/***/ "./src/views/components/NavBar.js":
/*!****************************************!*\
  !*** ./src/views/components/NavBar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Link */ "./src/views/components/Link.js");
/* harmony import */ var _domains_Browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../domains/Browser */ "./src/domains/Browser.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../configs/constants */ "./src/configs/constants.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var NavBar = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(NavBar, _Component);

  var _super = _createSuper(NavBar);

  function NavBar() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavBar);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavBar, [{
    key: "template",
    value: function template() {
      var location = _domains_Browser__WEBPACK_IMPORTED_MODULE_7__.browser.useStore(function (state) {
        return state.location;
      });
      return "\n      <a-link\n        id=\"item-management-link\"\n        class=\"nav-button styled-button ".concat(location === _configs_constants__WEBPACK_IMPORTED_MODULE_8__.PAGES.ITEM_MANAGEMENT.PATH ? 'selected' : '', "\"\n        href=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_8__.PAGES.ITEM_MANAGEMENT.PATH, "\"\n      >\n        ").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_8__.PAGES.ITEM_MANAGEMENT.TITLE, "\n      </a-link>\n      <a-link\n        id=\"change-charge-link\"\n        class=\"nav-button styled-button ").concat(location === _configs_constants__WEBPACK_IMPORTED_MODULE_8__.PAGES.CHANGE_CHARGE.PATH ? 'selected' : '', "\"\n        href=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_8__.PAGES.CHANGE_CHARGE.PATH, "\"\n      >\n        ").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_8__.PAGES.CHANGE_CHARGE.TITLE, "\n      </a-link>\n      <a-link\n        id=\"item-purchase-link\"\n        class=\"nav-button styled-button ").concat(location === _configs_constants__WEBPACK_IMPORTED_MODULE_8__.PAGES.LANDING.PATH || location === _configs_constants__WEBPACK_IMPORTED_MODULE_8__.PAGES.ITEM_PURCHASE.PATH ? 'selected' : '', "\"\n        href=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_8__.PAGES.ITEM_PURCHASE.PATH, "\"\n      >\n        ").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_8__.PAGES.ITEM_PURCHASE.TITLE, "\n      </a-link>\n    ");
    }
  }]);

  return NavBar;
}(_core_Component__WEBPACK_IMPORTED_MODULE_5__["default"]);


customElements.define('nav-bar', NavBar);

/***/ }),

/***/ "./src/views/components/PurchasableItemRow.js":
/*!****************************************************!*\
  !*** ./src/views/components/PurchasableItemRow.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_TableRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/TableRow */ "./src/core/TableRow.js");
/* harmony import */ var _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../domains/VendingMachine */ "./src/domains/VendingMachine.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../configs/constants */ "./src/configs/constants.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var PurchasableItemRow = /*#__PURE__*/function (_TableRow) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(PurchasableItemRow, _TableRow);

  var _super = _createSuper(PurchasableItemRow);

  function PurchasableItemRow() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PurchasableItemRow);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PurchasableItemRow, [{
    key: "template",
    value: function template() {
      var _this$props = this.props,
          name = _this$props.name,
          price = _this$props.price,
          quantity = _this$props.quantity;
      return "\n      <td class=\"item-name styled-td\">".concat(name, "</td>\n      <td class=\"item-price styled-td\">").concat(price, "</td>\n      <td class=\"item-quantity styled-td\">").concat(quantity, "</td>\n      <td class=\"item-button-container\">\n        <button class=\"item-purchase-button styled-button\" type=\"button\">\uAD6C\uB9E4</button>\n      </td>\n    ");
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      var _this = this;

      this.addEvent('click', '.item-purchase-button', function () {
        var name = _this.props.name;

        try {
          _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_6__.vendingMachine.purchaseItem(name);
        } catch (err) {
          document.querySelector('#snackbar').trigger(err.message);
        }
      });
    }
  }]);

  return PurchasableItemRow;
}(_core_TableRow__WEBPACK_IMPORTED_MODULE_5__["default"]);

customElements.define('purchasable-row', PurchasableItemRow, {
  "extends": 'tr'
});

/***/ }),

/***/ "./src/views/components/PurchasableItemTable.js":
/*!******************************************************!*\
  !*** ./src/views/components/PurchasableItemTable.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PurchasableItemTable)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _PurchasableItemRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PurchasableItemRow */ "./src/views/components/PurchasableItemRow.js");
/* harmony import */ var _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../domains/VendingMachine */ "./src/domains/VendingMachine.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../configs/constants */ "./src/configs/constants.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var PurchasableItemTable = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(PurchasableItemTable, _Component);

  var _super = _createSuper(PurchasableItemTable);

  function PurchasableItemTable() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PurchasableItemTable);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PurchasableItemTable, [{
    key: "template",
    value: function template() {
      var items = _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_7__.vendingMachine.useStore(function (state) {
        return state.items;
      });
      return "\n      <table class=\"styled-table\">\n        <colgroup>\n          <col style=\"width: 25%\">\n          <col style=\"width: 25%\">\n          <col style=\"width: 25%\">\n          <col style=\"width: 25%\">\n        </colgroup>\n        <thead>\n          <tr class=\"styled-tr\">\n            <th class=\"styled-th\">".concat(_configs_constants__WEBPACK_IMPORTED_MODULE_8__.ITEM.NAME.LABEL, "</th>\n            <th class=\"styled-th\">").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_8__.ITEM.PRICE.LABEL, "</th>\n            <th class=\"styled-th\">").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_8__.ITEM.QUANTITY.LABEL, "</th>\n            <th class=\"styled-th\">\uAD6C\uB9E4</th>\n          </tr>\n        </thead>\n      </table>\n      <div class=\"scrollable\">\n        <table class=\"styled-table no-border-top\">\n          <colgroup>\n            <col style=\"width: 25%\">\n            <col style=\"width: 25%\">\n            <col style=\"width: 25%\">\n            <col style=\"width: 25%\">\n          </colgroup>\n          <tbody>\n            ").concat(items.map(function (_ref) {
        var name = _ref.name,
            price = _ref.price,
            quantity = _ref.quantity;
        return "\n                  <tr\n                    is=\"purchasable-row\"\n                    class=\"purchasable-item-row styled-tr\"\n                    name=\"".concat(name, "\"\n                    price=\"").concat(price, "\"\n                    quantity=\"").concat(quantity, "\"\n                  >\n                  </tr>\n                ");
      }).join(''), "\n          </tbody>\n        </table>\n      </div>\n    ");
    }
  }]);

  return PurchasableItemTable;
}(_core_Component__WEBPACK_IMPORTED_MODULE_5__["default"]);


customElements.define('purchasable-table', PurchasableItemTable);

/***/ }),

/***/ "./src/views/components/ReturnedChangeTable.js":
/*!*****************************************************!*\
  !*** ./src/views/components/ReturnedChangeTable.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReturnedChangeTable)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../domains/VendingMachine */ "./src/domains/VendingMachine.ts");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var ReturnedChangeTable = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ReturnedChangeTable, _Component);

  var _super = _createSuper(ReturnedChangeTable);

  function ReturnedChangeTable() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ReturnedChangeTable);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ReturnedChangeTable, [{
    key: "template",
    value: function template() {
      var returnedChange = _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_8__.vendingMachine.useStore(function (state) {
        return state.returnedChange;
      });

      var coinArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Object.entries(returnedChange)).sort(function (_ref, _ref2) {
        var _ref3 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 1),
            a = _ref3[0];

        var _ref4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 1),
            b = _ref4[0];

        return b - a;
      });

      return "\n      <div class=\"returned-change-container\">\n        <table class=\"styled-table\">\n          <thead>\n            <tr class=\"styled-tr\">\n              <th class=\"styled-th\">\uB3D9\uC804</th>\n              <th class=\"styled-th\">\uAC1C\uC218</th>\n            </tr>\n          </thead>\n          <tbody>\n            ".concat(coinArray.map(function (_ref5) {
        var _ref6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, 2),
            key = _ref6[0],
            value = _ref6[1];

        return "\n                  <tr class=\"styled-tr\">\n                    <td class=\"styled-td\">".concat(key, "\uC6D0</td>\n                    <td class=\"styled-td\">").concat(value, "\uAC1C</td>\n                  </tr>\n                ");
      }).join(''), "\n          </tbody>\n        </table>\n        <button id=\"return-change-button\" class=\"return-change-button styled-button\">\uBC18\uD658</button>\n      </div>\n    ");
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      this.addEvent('click', '#return-change-button', function () {
        try {
          _domains_VendingMachine__WEBPACK_IMPORTED_MODULE_8__.vendingMachine.returnChange();
        } catch (err) {
          document.querySelector('#snackbar').trigger(err.message);
        }
      });
    }
  }]);

  return ReturnedChangeTable;
}(_core_Component__WEBPACK_IMPORTED_MODULE_7__["default"]);


customElements.define('change-table', ReturnedChangeTable);

/***/ }),

/***/ "./src/views/components/Snackbar.js":
/*!******************************************!*\
  !*** ./src/views/components/Snackbar.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Snackbar)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Snackbar = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Snackbar, _Component);

  var _super = _createSuper(Snackbar);

  function Snackbar() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Snackbar);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Snackbar, [{
    key: "template",
    value: function template() {
      return '';
    }
  }, {
    key: "trigger",
    value: function trigger(message) {
      var _this = this;

      this.textContent = message;
      this.classList.toggle('show');
      setTimeout(function () {
        _this.classList.toggle('show');
      }, Number(this.props.duration));
    }
  }]);

  return Snackbar;
}(_core_Component__WEBPACK_IMPORTED_MODULE_5__["default"]);


customElements.define('snack-bar', Snackbar);

/***/ }),

/***/ "./src/views/components/UserMenu.js":
/*!******************************************!*\
  !*** ./src/views/components/UserMenu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserMenu)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Link */ "./src/views/components/Link.js");
/* harmony import */ var _domains_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../domains/Auth */ "./src/domains/Auth.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../configs/constants */ "./src/configs/constants.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var UserMenu = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(UserMenu, _Component);

  var _super = _createSuper(UserMenu);

  function UserMenu() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserMenu);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserMenu, [{
    key: "template",
    value: function template() {
      var user = _domains_Auth__WEBPACK_IMPORTED_MODULE_7__.auth.useStore(function (state) {
        return state.user;
      });

      if (user) {
        return "\n        <div class=\"thumbnail\">\n          <button id=\"user-thumbnail\" class=\"thumbnail styled-button\">".concat(user.name[0], "</button>\n          <ul id=\"user-menu\" class=\"dropdown-menu\">\n            <li><a-link id=\"profile-link\" href=\"/profile\">\uD68C\uC6D0 \uC815\uBCF4 \uC218\uC815</a-link></li>\n            <li><button id=\"logout-link\">\uB85C\uADF8\uC544\uC6C3</button></li>\n          </ul>\n        </div>\n      ");
      }

      return "\n      <a-link id=\"login-link\" href=\"/login\" class=\"login-button styled-button\">\uB85C\uADF8\uC778</a-link>\n    ";
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      var _this = this;

      this.addEvent('click', '#user-thumbnail', function () {
        _this.querySelector('#user-menu').classList.toggle('show');
      });
      this.addEvent('click', '#logout-link', function () {
        _domains_Auth__WEBPACK_IMPORTED_MODULE_7__.auth.logout();
        var state = {};
        window.history.pushState(state, '', _configs_constants__WEBPACK_IMPORTED_MODULE_8__.PAGES.LANDING.PATH);
        dispatchEvent(new PopStateEvent('popstate', {
          state: state
        }));
      });
    }
  }]);

  return UserMenu;
}(_core_Component__WEBPACK_IMPORTED_MODULE_5__["default"]);


customElements.define('user-menu', UserMenu);

/***/ }),

/***/ "./src/views/pages/ChangeChargePage.js":
/*!*********************************************!*\
  !*** ./src/views/pages/ChangeChargePage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _components_ChangeChargeForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ChangeChargeForm */ "./src/views/components/ChangeChargeForm.js");
/* harmony import */ var _components_CurrentMoneyIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CurrentMoneyIndicator */ "./src/views/components/CurrentMoneyIndicator.js");
/* harmony import */ var _components_CoinTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CoinTable */ "./src/views/components/CoinTable.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var ChangeChargePage = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ChangeChargePage, _Component);

  var _super = _createSuper(ChangeChargePage);

  function ChangeChargePage() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChangeChargePage);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChangeChargePage, [{
    key: "template",
    value: function template() {
      return "\n      <section>\n        <h2 hidden>\uC794\uB3C8 \uCDA9\uC804</h2>\n        <charge-form></charge-form>\n        <current-money></current-money>\n      </section>\n      <section>\n        <h2 class=\"table-title\">\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD55C \uB3D9\uC804</h2>\n        <coin-table></coin-table>\n      </section>\n    ";
    }
  }]);

  return ChangeChargePage;
}(_core_Component__WEBPACK_IMPORTED_MODULE_5__["default"]);

customElements.define('change-charge', ChangeChargePage);

/***/ }),

/***/ "./src/views/pages/ItemManagementPage.js":
/*!***********************************************!*\
  !*** ./src/views/pages/ItemManagementPage.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _components_ItemAddForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ItemAddForm */ "./src/views/components/ItemAddForm.js");
/* harmony import */ var _components_ItemTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ItemTable */ "./src/views/components/ItemTable.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var ItemManagementPage = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ItemManagementPage, _Component);

  var _super = _createSuper(ItemManagementPage);

  function ItemManagementPage() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ItemManagementPage);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ItemManagementPage, [{
    key: "template",
    value: function template() {
      return "\n      <section>\n        <h2 hidden>\uCD94\uAC00\uD560 \uC0C1\uD488 \uC815\uBCF4</h2>\n        <add-form></add-form>\n      </section>\n      <section>\n        <h2 class=\"table-title\">\uC0C1\uD488 \uD604\uD669</h2>\n        <item-table></item-table>\n      </section>\n    ";
    }
  }]);

  return ItemManagementPage;
}(_core_Component__WEBPACK_IMPORTED_MODULE_5__["default"]);

customElements.define('item-management', ItemManagementPage);

/***/ }),

/***/ "./src/views/pages/ItemPurchasePage.js":
/*!*********************************************!*\
  !*** ./src/views/pages/ItemPurchasePage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _components_InsertMoneyForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/InsertMoneyForm */ "./src/views/components/InsertMoneyForm.js");
/* harmony import */ var _components_InsertedMoneyIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/InsertedMoneyIndicator */ "./src/views/components/InsertedMoneyIndicator.js");
/* harmony import */ var _components_PurchasableItemTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PurchasableItemTable */ "./src/views/components/PurchasableItemTable.js");
/* harmony import */ var _components_ReturnedChangeTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ReturnedChangeTable */ "./src/views/components/ReturnedChangeTable.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var ItemPurchasePage = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ItemPurchasePage, _Component);

  var _super = _createSuper(ItemPurchasePage);

  function ItemPurchasePage() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ItemPurchasePage);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ItemPurchasePage, [{
    key: "template",
    value: function template() {
      return "\n      <section>\n        <h2 hidden>\uC794\uB3C8 \uCDA9\uC804</h2>\n        <insert-form></insert-form>\n        <inserted-money></inserted-money>\n      </section>\n      <section>\n        <h2 class=\"table-title\">\uAD6C\uB9E4 \uAC00\uB2A5 \uC0C1\uD488 \uD604\uD669</h2>\n        <purchasable-table></purchasable-table>\n      </section>\n      <section>\n        <h2 class=\"table-title\">\uC794\uB3C8 \uBC18\uD658</h2>\n        <change-table></change-table>\n      </section>\n    ";
    }
  }]);

  return ItemPurchasePage;
}(_core_Component__WEBPACK_IMPORTED_MODULE_5__["default"]);

customElements.define('item-purchase', ItemPurchasePage);

/***/ }),

/***/ "./src/views/pages/LandingPage.js":
/*!****************************************!*\
  !*** ./src/views/pages/LandingPage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LandingPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _components_UserMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserMenu */ "./src/views/components/UserMenu.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavBar */ "./src/views/components/NavBar.js");
/* harmony import */ var _ItemManagementPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ItemManagementPage */ "./src/views/pages/ItemManagementPage.js");
/* harmony import */ var _ChangeChargePage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ChangeChargePage */ "./src/views/pages/ChangeChargePage.js");
/* harmony import */ var _ItemPurchasePage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ItemPurchasePage */ "./src/views/pages/ItemPurchasePage.js");
/* harmony import */ var _domains_Auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../domains/Auth */ "./src/domains/Auth.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../configs/constants */ "./src/configs/constants.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










var LandingPage = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(LandingPage, _Component);

  var _super = _createSuper(LandingPage);

  function LandingPage() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LandingPage);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LandingPage, [{
    key: "template",
    value: function template() {
      var user = _domains_Auth__WEBPACK_IMPORTED_MODULE_11__.auth.useStore(function (state) {
        return state.user;
      });
      return "\n      <header>\n        <h1 class=\"title\">\uD83C\uDF7F \uC790\uD310\uAE30 \uD83C\uDF7F</h1>\n      </header>\n      <user-menu class=\"overlay\"></user-menu>\n      ".concat(user ? '<nav-bar class="nav-bar"></nav-bar>' : '', "\n      <div class=\"tab-container\">\n        <component-router>\n          <item-purchase\n            class=\"tab\"\n            path=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_12__.PAGES.ITEM_PURCHASE.PATH, "\"\n            loginRequired=\"null\"\n          >\n          </item-purchase>\n          <item-management\n            class=\"tab\"\n            path=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_12__.PAGES.ITEM_MANAGEMENT.PATH, "\"\n            loginRequired=\"true\"\n          >\n          </item-management>\n          <change-charge\n            class=\"tab\"\n            path=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_12__.PAGES.CHANGE_CHARGE.PATH, "\"\n            loginRequired=\"true\"\n          >\n          </change-charge>\n          <not-found\n            class=\"tab\"\n            path=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_12__.PAGES.DEFAULT.PATH, "\"\n            loginRequired=\"null\"\n          >\n          </not-found>\n        </component-router>\n      </div>\n    ");
    }
  }]);

  return LandingPage;
}(_core_Component__WEBPACK_IMPORTED_MODULE_5__["default"]);


customElements.define('landing-page', LandingPage);

/***/ }),

/***/ "./src/views/pages/LoginPage.js":
/*!**************************************!*\
  !*** ./src/views/pages/LoginPage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Link */ "./src/views/components/Link.js");
/* harmony import */ var _domains_Auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../domains/Auth */ "./src/domains/Auth.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../configs/constants */ "./src/configs/constants.ts");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var LoginPage = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(LoginPage, _Component);

  var _super = _createSuper(LoginPage);

  function LoginPage() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoginPage);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LoginPage, [{
    key: "template",
    value: function template() {
      return "\n      <header>\n        <h1 class=\"title\">\uB85C\uADF8\uC778</h1>\n      </header>\n      <div>\n        <form id=\"login-form\">\n          <fieldset class=\"profile-fieldset\">\n            <legend hidden>\uB85C\uADF8\uC778</legend>\n            <label for=\"login-email\"  class=\"description\">\uC774\uBA54\uC77C\n              <input\n                id=\"login-email\"\n                name=\"email\"\n                type=\"email\"\n                class=\"profile-input styled-input\"\n                placeholder=\"woowacourse@gmail.com\"\n                maxlength=\"".concat(_configs_constants__WEBPACK_IMPORTED_MODULE_10__.USER.EMAIL.LENGTH.MAX, "\"\n                autofocus\n                required\n              >\n            </label>\n            <label for=\"login-password\" class=\"description\">\uBE44\uBC00\uBC88\uD638\n              <input\n                id=\"login-password\"\n                name=\"password\"\n                type=\"password\"\n                class=\"profile-input styled-input\"\n                placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n                minlength=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_10__.USER.PASSWORD.LENGTH.MIN, "\"\n                maxlength=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_10__.USER.PASSWORD.LENGTH.MAX, "\"\n                required\n              >\n            </label>\n            <button id=\"login-submit\" class=\"styled-button emphasized profile-button\" type=\"submit\">\uD655\uC778</button>\n          </fieldset>\n        </form>\n        <p class=\"description signup-guide\">\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694? <a-link id=\"signup-link\" href=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_10__.PAGES.SIGNUP.PATH, "\" class=\"text-link\">\uD68C\uC6D0\uAC00\uC785</a-link></p>\n      </div>\n    ");
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      this.addEvent('submit', '#login-form', /*#__PURE__*/function () {
        var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee(event) {
          var loginInfo, state;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  event.preventDefault();
                  loginInfo = {
                    email: event.target.querySelector('[name="email"]').value,
                    password: event.target.querySelector('[name="password"]').value
                  };
                  _context.prev = 2;
                  _context.next = 5;
                  return _domains_Auth__WEBPACK_IMPORTED_MODULE_9__.auth.login(loginInfo);

                case 5:
                  state = {};
                  window.history.pushState(state, '', _configs_constants__WEBPACK_IMPORTED_MODULE_10__.PAGES.LANDING.PATH);
                  dispatchEvent(new PopStateEvent('popstate', {
                    state: state
                  }));
                  _context.next = 13;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context["catch"](2);
                  document.querySelector('#snackbar').trigger(_context.t0.message);

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[2, 10]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }]);

  return LoginPage;
}(_core_Component__WEBPACK_IMPORTED_MODULE_7__["default"]);


customElements.define('login-page', LoginPage);

/***/ }),

/***/ "./src/views/pages/NotFoundPage.js":
/*!*****************************************!*\
  !*** ./src/views/pages/NotFoundPage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var NotFound = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(NotFound, _Component);

  var _super = _createSuper(NotFound);

  function NotFound() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotFound);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NotFound, [{
    key: "template",
    value: function template() {
      return "\n      <div>\n        <p>\uD83D\uDE31 Not Found</p>\n      </div>\n    ";
    }
  }]);

  return NotFound;
}(_core_Component__WEBPACK_IMPORTED_MODULE_5__["default"]);

customElements.define('not-found', NotFound);

/***/ }),

/***/ "./src/views/pages/ProfilePage.js":
/*!****************************************!*\
  !*** ./src/views/pages/ProfilePage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _domains_Auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../domains/Auth */ "./src/domains/Auth.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../configs/constants */ "./src/configs/constants.ts");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var ProfilePage = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ProfilePage, _Component);

  var _super = _createSuper(ProfilePage);

  function ProfilePage() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProfilePage);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProfilePage, [{
    key: "template",
    value: function template() {
      var user = _domains_Auth__WEBPACK_IMPORTED_MODULE_8__.auth.useStore(function (state) {
        return state.user;
      });
      return "\n      <header>\n        <h1 class=\"title\">\uD68C\uC6D0 \uC815\uBCF4 \uC218\uC815</h1>\n      </header>\n      <form id=\"update-profile-form\">\n        <fieldset class=\"profile-fieldset\">\n          <legend hidden>\uD68C\uC6D0 \uC815\uBCF4 \uC218\uC815</legend>\n          <label for=\"profile-email\"  class=\"description\">\uC774\uBA54\uC77C\n            <input\n              id=\"profile-email\"\n              name=\"email\"\n              type=\"email\"\n              class=\"profile-input styled-input\"\n              placeholder=\"\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n              value=\"".concat(user === null || user === void 0 ? void 0 : user.email, "\"\n              maxlength=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_9__.USER.EMAIL.LENGTH.MAX, "\"\n              disabled\n              required\n            >\n          </label>\n          <label for=\"profile-name\" class=\"description\">\uC774\uB984\n            <input\n              id=\"profile-name\"\n              name=\"name\"\n              type=\"text\"\n              class=\"profile-input styled-input\"\n              placeholder=\"\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n              value=\"").concat(user === null || user === void 0 ? void 0 : user.name, "\"\n              minlength=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_9__.USER.NAME.LENGTH.MIN, "\"\n              maxlength=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_9__.USER.NAME.LENGTH.MAX, "\"\n              autofocus\n              required\n            >\n          </label>\n          <label for=\"profile-password\" class=\"description\">\uBE44\uBC00\uBC88\uD638\n            <input\n              id=\"profile-password\"\n              name=\"password\"\n              type=\"password\"\n              class=\"profile-input styled-input\"\n              placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n              minlength=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_9__.USER.PASSWORD.LENGTH.MIN, "\"\n              maxlength=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_9__.USER.PASSWORD.LENGTH.MAX, "\"\n              required\n            >\n          </label>\n          <label for=\"profile-password-confirm\" class=\"description\">\uBE44\uBC00\uBC88\uD638 \uD655\uC778\n            <input\n              id=\"profile-password-confirm\"\n              name=\"password-confirm\"\n              type=\"password\"\n              class=\"profile-input styled-input\"\n              placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n              minlength=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_9__.USER.PASSWORD.LENGTH.MIN, "\"\n              maxlength=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_9__.USER.PASSWORD.LENGTH.MAX, "\"\n              required\n            >\n          </label>\n          <button class=\"styled-button emphasized profile-button\" type=\"submit\">\uD655\uC778</button>\n        </fieldset>\n      </form>\n    ");
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      this.addEvent('submit', '#update-profile-form', /*#__PURE__*/function () {
        var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee(event) {
          var updatedProfile, passwordConfirm;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  event.preventDefault();
                  updatedProfile = {
                    name: event.target.querySelector('[name="name"]').value,
                    password: event.target.querySelector('[name="password"]').value
                  };
                  passwordConfirm = event.target.querySelector('[name="password-confirm"]').value;
                  _context.prev = 3;

                  if (!(newUser.password !== passwordConfirm)) {
                    _context.next = 6;
                    break;
                  }

                  throw new Error('비밀번호가 다릅니다.');

                case 6:
                  _context.next = 8;
                  return _domains_Auth__WEBPACK_IMPORTED_MODULE_8__.auth.updateProfile(updatedProfile);

                case 8:
                  _context.next = 13;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context["catch"](3);
                  document.querySelector('#snackbar').trigger(_context.t0.message);

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[3, 10]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }]);

  return ProfilePage;
}(_core_Component__WEBPACK_IMPORTED_MODULE_7__["default"]);


customElements.define('profile-page', ProfilePage);

/***/ }),

/***/ "./src/views/pages/SignupPage.js":
/*!***************************************!*\
  !*** ./src/views/pages/SignupPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Component */ "./src/core/Component.js");
/* harmony import */ var _domains_Auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../domains/Auth */ "./src/domains/Auth.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../configs/constants */ "./src/configs/constants.ts");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var SignupPage = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(SignupPage, _Component);

  var _super = _createSuper(SignupPage);

  function SignupPage() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SignupPage);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SignupPage, [{
    key: "template",
    value: function template() {
      return "\n      <header>\n        <h1 class=\"title\">\uD68C\uC6D0\uAC00\uC785</h1>\n      </header>\n      <form id=\"signup-form\">\n        <fieldset class=\"profile-fieldset\">\n          <legend hidden>\uD68C\uC6D0\uAC00\uC785</legend>\n          <label for=\"signup-email\"  class=\"description\">\uC774\uBA54\uC77C\n            <input\n              id=\"signup-email\"\n              name=\"email\"\n              type=\"email\"\n              class=\"profile-input styled-input\"\n              placeholder=\"woowacourse@gmail.com\"\n              maxlength=\"".concat(_configs_constants__WEBPACK_IMPORTED_MODULE_9__.USER.EMAIL.LENGTH.MAX, "\"\n              autofocus\n              required\n            >\n          </label>\n          <label for=\"signup-name\" class=\"description\">\uC774\uB984\n            <input\n              id=\"signup-name\"\n              name=\"name\"\n              type=\"text\"\n              class=\"profile-input styled-input\"\n              placeholder=\"\uC6B0\uD14C\uCF54\"\n              minlength=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_9__.USER.NAME.LENGTH.MIN, "\"\n              maxlength=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_9__.USER.NAME.LENGTH.MAX, "\"\n              required\n            >\n          </label>\n          <label for=\"signup-password\" class=\"description\">\uBE44\uBC00\uBC88\uD638\n            <input\n              id=\"signup-password\"\n              name=\"password\"\n              type=\"password\"\n              class=\"profile-input styled-input\"\n              placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n              minlength=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_9__.USER.PASSWORD.LENGTH.MIN, "\"\n              maxlength=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_9__.USER.PASSWORD.LENGTH.MAX, "\"\n              required\n            >\n          </label>\n          <label for=\"signup-password-confirm\" class=\"description\">\uBE44\uBC00\uBC88\uD638 \uD655\uC778\n            <input\n              id=\"signup-password-confirm\"\n              name=\"password-confirm\"\n              type=\"password\"\n              class=\"profile-input styled-input\"\n              placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n              minlength=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_9__.USER.PASSWORD.LENGTH.MIN, "\"\n              maxlength=\"").concat(_configs_constants__WEBPACK_IMPORTED_MODULE_9__.USER.PASSWORD.LENGTH.MAX, "\"\n              required\n            >\n          </label>\n          <button id=\"signup-submit\" class=\"styled-button emphasized profile-button\" type=\"submit\">\uD655\uC778</button>\n        </fieldset>\n      </form>\n    ");
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      this.addEvent('submit', '#signup-form', /*#__PURE__*/function () {
        var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee(event) {
          var newUser, passwordConfirm, state;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  event.preventDefault();
                  newUser = {
                    email: event.target.querySelector('[name="email"]').value,
                    name: event.target.querySelector('[name="name"]').value,
                    password: event.target.querySelector('[name="password"]').value
                  };
                  passwordConfirm = event.target.querySelector('[name="password-confirm"]').value;
                  _context.prev = 3;

                  if (!(newUser.password !== passwordConfirm)) {
                    _context.next = 6;
                    break;
                  }

                  throw new Error('비밀번호가 다릅니다.');

                case 6:
                  _context.next = 8;
                  return _domains_Auth__WEBPACK_IMPORTED_MODULE_8__.auth.signup(newUser);

                case 8:
                  state = {};
                  window.history.pushState(state, '', '/');
                  dispatchEvent(new PopStateEvent('popstate', {
                    state: state
                  }));
                  _context.next = 16;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context["catch"](3);
                  document.querySelector('#snackbar').trigger(_context.t0.message);

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[3, 13]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }]);

  return SignupPage;
}(_core_Component__WEBPACK_IMPORTED_MODULE_7__["default"]);


customElements.define('signup-page', SignupPage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n}\n\nbody {\n  background-color: #f9f9f9;\n  letter-spacing: 0.5px;\n}\n\ninput {\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  font: inherit;\n  margin: 0;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n\na-link {\n  cursor: pointer;\n}\n\n.app-container {\n  position: relative;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  background-color: #ffffff;\n  width: 518px;\n  min-height: 593px;\n  margin: 0 auto;\n  margin-top: 32px;\n  padding: 40px;\n}\n\n.page {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.title {\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 36px;\n  margin-bottom: 32px;\n}\n\n.overlay {\n  position: absolute;\n  top: 12px;\n  right: 11px;\n}\n\n.nav-bar {\n  display: flex;\n  flex-direction: row;\n  gap: 4px;\n}\n\n.nav-button {\n  width: 117px;\n  height: 36px;\n}\n\n.styled-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 4px;\n  text-decoration: none;\n  outline: none;\n  background: #f5f5f5;\n  color: black;\n}\n\n.styled-button.selected {\n  background: #ceecf0;\n}\n\n.styled-button.emphasized {\n  background: #00bcd4;\n  color: white;\n}\n\n.tab-container {\n  margin-top: 52px;\n}\n\n.tab {\n  display: flex;\n  flex-direction: column;\n  gap: 48px;\n}\n\n.description {\n  display: block;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n\n.styled-input {\n  font-family: 'Roboto', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  border: 1px solid rgba(180, 180, 180, 1);\n  border-radius: 4px;\n}\n\n.styled-input::placeholder {\n  color: #8b8b8b;\n}\n\n.transparent-input {\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  text-align: center;\n  width: 100%;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  padding: 0;\n  border: 0;\n}\n\n.table-title {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.15px;\n  margin-bottom: 16px;\n}\n\n.styled-table {\n  width: 100%;\n  border-top: 1px solid #dcdcdc;\n  border-collapse: collapse;\n  text-align: center;\n}\n\n.no-border-top {\n  border-top: none;\n}\n\n.scrollable {\n  max-height: 225px;\n  overflow-y: auto;\n}\n\n.styled-th {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  border-bottom: 1px solid #dcdcdc;\n  padding: 8px;\n}\n\n.styled-tr {\n  border-bottom: 1px solid #dcdcdc;\n  padding: 8px;\n}\n\n.styled-td {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  border-bottom: 1px solid #dcdcdc;\n  padding: 8px;\n}\n\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\n.money-indicator {\n  margin-top: 16px;\n}\n\n.text-link {\n  color: #3581d7;\n}\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;EACE,iCAAiC;EACjC,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB;EAChB,aAAa;EACb,SAAS;EACT,UAAU;EACV,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,qCAAqC;EACrC,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,cAAc;EACd,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,aAAa;EACb,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,iCAAiC;EACjC,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,wCAAwC;EACxC,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iCAAiC;EACjC,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,6BAA6B;EAC7B,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,gCAAgC;EAChC,YAAY;AACd;;AAEA;EACE,gCAAgC;EAChC,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,gCAAgC;EAChC,YAAY;AACd;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB","sourcesContent":["html {\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n}\n\nbody {\n  background-color: #f9f9f9;\n  letter-spacing: 0.5px;\n}\n\ninput {\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  font: inherit;\n  margin: 0;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n\na-link {\n  cursor: pointer;\n}\n\n.app-container {\n  position: relative;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  background-color: #ffffff;\n  width: 518px;\n  min-height: 593px;\n  margin: 0 auto;\n  margin-top: 32px;\n  padding: 40px;\n}\n\n.page {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.title {\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 36px;\n  margin-bottom: 32px;\n}\n\n.overlay {\n  position: absolute;\n  top: 12px;\n  right: 11px;\n}\n\n.nav-bar {\n  display: flex;\n  flex-direction: row;\n  gap: 4px;\n}\n\n.nav-button {\n  width: 117px;\n  height: 36px;\n}\n\n.styled-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 4px;\n  text-decoration: none;\n  outline: none;\n  background: #f5f5f5;\n  color: black;\n}\n\n.styled-button.selected {\n  background: #ceecf0;\n}\n\n.styled-button.emphasized {\n  background: #00bcd4;\n  color: white;\n}\n\n.tab-container {\n  margin-top: 52px;\n}\n\n.tab {\n  display: flex;\n  flex-direction: column;\n  gap: 48px;\n}\n\n.description {\n  display: block;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n\n.styled-input {\n  font-family: 'Roboto', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  border: 1px solid rgba(180, 180, 180, 1);\n  border-radius: 4px;\n}\n\n.styled-input::placeholder {\n  color: #8b8b8b;\n}\n\n.transparent-input {\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  text-align: center;\n  width: 100%;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  padding: 0;\n  border: 0;\n}\n\n.table-title {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.15px;\n  margin-bottom: 16px;\n}\n\n.styled-table {\n  width: 100%;\n  border-top: 1px solid #dcdcdc;\n  border-collapse: collapse;\n  text-align: center;\n}\n\n.no-border-top {\n  border-top: none;\n}\n\n.scrollable {\n  max-height: 225px;\n  overflow-y: auto;\n}\n\n.styled-th {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  border-bottom: 1px solid #dcdcdc;\n  padding: 8px;\n}\n\n.styled-tr {\n  border-bottom: 1px solid #dcdcdc;\n  padding: 8px;\n}\n\n.styled-td {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  border-bottom: 1px solid #dcdcdc;\n  padding: 8px;\n}\n\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\n.money-indicator {\n  margin-top: 16px;\n}\n\n.text-link {\n  color: #3581d7;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/changeChargePage.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/changeChargePage.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".change-charge-form {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 372px;\n}\n\n.charge-amount-input {\n  width: 300px;\n  height: 34px;\n}\n\n.add-charge-button {\n  width: 56px;\n  height: 36px;\n  align-self: flex-end;\n}\n", "",{"version":3,"sources":["webpack://./src/css/changeChargePage.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;AACtB","sourcesContent":[".change-charge-form {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 372px;\n}\n\n.charge-amount-input {\n  width: 300px;\n  height: 34px;\n}\n\n.add-charge-button {\n  width: 56px;\n  height: 36px;\n  align-self: flex-end;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_itemPurchasePage_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./itemPurchasePage.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/itemPurchasePage.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_profile_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./profile.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/profile.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_snackbar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./snackbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/snackbar.css");
// Imports








var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_itemManagementPage_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_changeChargePage_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_itemPurchasePage_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_profile_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_snackbar_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
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

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".item-add-form {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 440px;\n}\n\n.fieldset {\n  border: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  gap: 4px;\n  justify-content: stretch;\n}\n\n.item-input {\n  vertical-align: top;\n  width: 120px;\n  height: 34px;\n}\n\n.add-item-button {\n  width: 56px;\n  height: 36px;\n  margin-left: 16px;\n  align-self: flex-end;\n}\n\n.item-button-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 8px;\n}\n\n.item-edit-button,\n.item-remove-button {\n  width: 50px;\n  height: 32px;\n}\n\n.item-update-button {\n  width: 100px;\n  height: 32px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/itemManagementPage.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,SAAS;EACT,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;AACV;;AAEA;;EAEE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd","sourcesContent":[".item-add-form {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 440px;\n}\n\n.fieldset {\n  border: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  gap: 4px;\n  justify-content: stretch;\n}\n\n.item-input {\n  vertical-align: top;\n  width: 120px;\n  height: 34px;\n}\n\n.add-item-button {\n  width: 56px;\n  height: 36px;\n  margin-left: 16px;\n  align-self: flex-end;\n}\n\n.item-button-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 8px;\n}\n\n.item-edit-button,\n.item-remove-button {\n  width: 50px;\n  height: 32px;\n}\n\n.item-update-button {\n  width: 100px;\n  height: 32px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/itemPurchasePage.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/itemPurchasePage.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".insert-money-form {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 372px;\n}\n\n.insert-amount-input {\n  width: 300px;\n  height: 34px;\n}\n\n.insert-money-button {\n  width: 56px;\n  height: 36px;\n  align-self: flex-end;\n}\n\n.item-purchase-button {\n  width: 100px;\n  height: 32px;\n}\n\n.returned-change-container {\n  width: full;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.return-change-button {\n  margin-top: 16px;\n  width: 100px;\n  height: 32px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/itemPurchasePage.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;AACd","sourcesContent":[".insert-money-form {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 372px;\n}\n\n.insert-amount-input {\n  width: 300px;\n  height: 34px;\n}\n\n.insert-money-button {\n  width: 56px;\n  height: 36px;\n  align-self: flex-end;\n}\n\n.item-purchase-button {\n  width: 100px;\n  height: 32px;\n}\n\n.returned-change-container {\n  width: full;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.return-change-button {\n  margin-top: 16px;\n  width: 100px;\n  height: 32px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/profile.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/profile.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".thumbnail {\n  width: 40px;\n  height: 40px;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 46px;\n  left: -50%;\n  width: max-content;\n  padding: 10px;\n  display: none;\n  flex-direction: column;\n  gap: 8px;\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n}\n\n.dropdown-menu.show {\n  display: flex;\n}\n\n.login-button {\n  width: 117px;\n  height: 36px;\n}\n\n.thumbnail {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.profile-fieldset {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.profile-input {\n  display: block;\n  width: 300px;\n  height: 34px;\n  margin-top: 4px;\n}\n\n.profile-button {\n  height: 36px;\n  margin-top: 14px;\n}\n\n.signup-guide {\n  margin-top: 14px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/profile.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,yBAAyB;EACzB,qCAAqC;EACrC,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":[".thumbnail {\n  width: 40px;\n  height: 40px;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 46px;\n  left: -50%;\n  width: max-content;\n  padding: 10px;\n  display: none;\n  flex-direction: column;\n  gap: 8px;\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n}\n\n.dropdown-menu.show {\n  display: flex;\n}\n\n.login-button {\n  width: 117px;\n  height: 36px;\n}\n\n.thumbnail {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.profile-fieldset {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.profile-input {\n  display: block;\n  width: 300px;\n  height: 34px;\n  margin-top: 4px;\n}\n\n.profile-button {\n  height: 36px;\n  margin-top: 14px;\n}\n\n.signup-guide {\n  margin-top: 14px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/snackbar.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/snackbar.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "#snackbar {\n  visibility: hidden;\n  min-width: 250px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 0;\n}\n\n#snackbar.show {\n  visibility: visible !important; /* Show the snackbar */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.7s;\n  animation: fadein 0.5s, fadeout 0.5s 2.7s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 0;\n    opacity: 1;\n  }\n  to {\n    bottom: -30px;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 0;\n    opacity: 1;\n  }\n  to {\n    bottom: -30px;\n    opacity: 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/snackbar.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,UAAU;EACV,SAAS;EACT,2BAA2B;EAC3B,SAAS;AACX;;AAEA;EACE,8BAA8B,EAAE,sBAAsB;EACtD,iDAAiD;EACjD,yCAAyC;AAC3C;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,YAAY;IACZ,UAAU;EACZ;AACF;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,SAAS;IACT,UAAU;EACZ;AACF;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,aAAa;IACb,UAAU;EACZ;AACF;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,aAAa;IACb,UAAU;EACZ;AACF","sourcesContent":["#snackbar {\n  visibility: hidden;\n  min-width: 250px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 0;\n}\n\n#snackbar.show {\n  visibility: visible !important; /* Show the snackbar */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.7s;\n  animation: fadein 0.5s, fadeout 0.5s 2.7s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 0;\n    opacity: 1;\n  }\n  to {\n    bottom: -30px;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 0;\n    opacity: 1;\n  }\n  to {\n    bottom: -30px;\n    opacity: 0;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/configs/api.ts":
/*!****************************!*\
  !*** ./src/configs/api.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SERVER": () => (/* binding */ SERVER)
/* harmony export */ });
var SERVER = 'https://vendingmachin-json-server-auth.herokuapp.com';


/***/ }),

/***/ "./src/configs/constants.ts":
/*!**********************************!*\
  !*** ./src/configs/constants.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHARGE_AMOUNT": () => (/* binding */ CHARGE_AMOUNT),
/* harmony export */   "ITEM": () => (/* binding */ ITEM),
/* harmony export */   "COIN": () => (/* binding */ COIN),
/* harmony export */   "USER": () => (/* binding */ USER),
/* harmony export */   "PAGES": () => (/* binding */ PAGES),
/* harmony export */   "REDICTION": () => (/* binding */ REDICTION)
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
    VALUES: [10, 50, 100, 500],
    EMPTY_COINS: {
        10: 0,
        50: 0,
        100: 0,
        500: 0
    }
};
var USER = {
    EMAIL: {
        LENGTH: {
            MAX: 40
        }
    },
    NAME: {
        LENGTH: {
            MIN: 2,
            MAX: 6
        }
    },
    PASSWORD: {
        LENGTH: {
            MIN: 8,
            MAX: 30
        }
    }
};
var PAGES = {
    LANDING: {
        TITLE: '',
        PATH: '/'
    },
    ITEM_MANAGEMENT: {
        TITLE: '상품 관리',
        PATH: '/item-management'
    },
    CHANGE_CHARGE: {
        TITLE: '잔돈 충전',
        PATH: '/change-charge'
    },
    ITEM_PURCHASE: {
        TITLE: '상품 구매',
        PATH: '/item-purchase'
    },
    LOGIN: {
        PATH: '/login'
    },
    SIGNUP: {
        PATH: '/signup'
    },
    PROFILE: {
        PATH: '/profile'
    },
    DEFAULT: {
        TITLE: '',
        PATH: '*'
    }
};
var REDICTION = {
    LANDING: 'landing',
    LOGIN: 'login',
    AUTHORIZED: 'authorized'
};


/***/ }),

/***/ "./src/core/Domain.ts":
/*!****************************!*\
  !*** ./src/core/Domain.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./src/core/Subject.ts");
/* harmony import */ var _utils_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/commons */ "./src/utils/commons.ts");


var Domain = /** @class */ (function () {
    function Domain(initialState) {
        this.state = _Subject__WEBPACK_IMPORTED_MODULE_0__["default"].observable(initialState);
    }
    Domain.prototype.useStore = function (callback) {
        return (0,_utils_commons__WEBPACK_IMPORTED_MODULE_1__.deepClone)(callback(this.state));
    };
    return Domain;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Domain);


/***/ }),

/***/ "./src/core/Subject.ts":
/*!*****************************!*\
  !*** ./src/core/Subject.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Subject = /** @class */ (function () {
    function Subject(key, value, checker) {
        if (checker !== Subject.private)
            throw Error('use Subject.observable()');
        this.key = key;
        this.value = value;
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
            this.updated = false;
            this.notify();
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
    Subject.private = Symbol('subject checker');
    Subject.subjects = new Set();
    return Subject;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subject);


/***/ }),

/***/ "./src/domains/Auth.ts":
/*!*****************************!*\
  !*** ./src/domains/Auth.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "auth": () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var _core_Domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Domain */ "./src/core/Domain.ts");
/* harmony import */ var _configs_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs/api */ "./src/configs/api.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var request = function (url, option) { return __awaiter(void 0, void 0, void 0, function () {
    var res, body;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(url, option)];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                body = (_a.sent());
                if (!res.ok)
                    throw Error(body);
                return [2 /*return*/, body];
        }
    });
}); };
var Auth = /** @class */ (function (_super) {
    __extends(Auth, _super);
    function Auth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Auth.prototype.signup = function (newUser) {
        return __awaiter(this, void 0, void 0, function () {
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request("".concat(_configs_api__WEBPACK_IMPORTED_MODULE_1__.SERVER, "/signup"), {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(newUser)
                        })];
                    case 1:
                        body = _a.sent();
                        this.state.accessToken = body.accessToken;
                        this.state.user = body.user;
                        return [2 /*return*/];
                }
            });
        });
    };
    Auth.prototype.login = function (loginInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request("".concat(_configs_api__WEBPACK_IMPORTED_MODULE_1__.SERVER, "/login"), {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(loginInfo)
                        })];
                    case 1:
                        body = _a.sent();
                        this.state.accessToken = body.accessToken;
                        this.state.user = body.user;
                        return [2 /*return*/];
                }
            });
        });
    };
    Auth.prototype.logout = function () {
        this.state.accessToken = null;
        this.state.user = null;
    };
    Auth.prototype.updateProfile = function (updatedProfile) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, accessToken, user, body;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.state, accessToken = _a.accessToken, user = _a.user;
                        return [4 /*yield*/, request("".concat(_configs_api__WEBPACK_IMPORTED_MODULE_1__.SERVER, "/users/").concat(user.id), {
                                method: 'PATCH',
                                headers: {
                                    'Content-Type': 'application/json',
                                    Authorization: "Bearer ".concat(accessToken)
                                },
                                body: JSON.stringify(updatedProfile)
                            })];
                    case 1:
                        body = _b.sent();
                        this.state.user = __assign(__assign({}, this.state.user), { id: body.id, email: body.email, name: body.name });
                        return [2 /*return*/];
                }
            });
        });
    };
    Auth.prototype.authRoute = function (loginRequired) {
        var isLoggedIn = Boolean(this.state.accessToken);
        if (isLoggedIn && loginRequired === false) {
            return 'landing';
        }
        if (!isLoggedIn && loginRequired) {
            return 'login';
        }
        return 'authorized';
    };
    return Auth;
}(_core_Domain__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auth);
var auth = new Auth({ user: null, accessToken: null });


/***/ }),

/***/ "./src/domains/Browser.ts":
/*!********************************!*\
  !*** ./src/domains/Browser.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "browser": () => (/* binding */ browser)
/* harmony export */ });
/* harmony import */ var _core_Domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Domain */ "./src/core/Domain.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs/constants */ "./src/configs/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Browser = /** @class */ (function (_super) {
    __extends(Browser, _super);
    function Browser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Browser.prototype.setLocation = function (location) {
        this.state.location = location;
    };
    return Browser;
}(_core_Domain__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Browser);
var browser = new Browser({
    location: _configs_constants__WEBPACK_IMPORTED_MODULE_1__.PAGES.LANDING.PATH
});


/***/ }),

/***/ "./src/domains/VendingMachine.ts":
/*!***************************************!*\
  !*** ./src/domains/VendingMachine.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "vendingMachine": () => (/* binding */ vendingMachine)
/* harmony export */ });
/* harmony import */ var _core_Domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Domain */ "./src/core/Domain.ts");
/* harmony import */ var _utils_coinUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/coinUtils */ "./src/utils/coinUtils.ts");
/* harmony import */ var _utils_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/validator */ "./src/utils/validator.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/constants */ "./src/configs/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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




var VendingMachine = /** @class */ (function (_super) {
    __extends(VendingMachine, _super);
    function VendingMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VendingMachine.prototype.addItem = function (item) {
        var prevItem = this.findItem(item.name);
        if (prevItem) {
            this.updateItem(prevItem.name, __assign(__assign({}, prevItem), { quantity: prevItem.quantity + item.quantity }));
            return;
        }
        (0,_utils_validator__WEBPACK_IMPORTED_MODULE_2__.validate)(_utils_validator__WEBPACK_IMPORTED_MODULE_2__.itemValidator, item);
        this.state.items = __spreadArray(__spreadArray([], this.state.items, true), [item], false);
    };
    VendingMachine.prototype.updateItem = function (name, updatedItem) {
        (0,_utils_validator__WEBPACK_IMPORTED_MODULE_2__.validate)(_utils_validator__WEBPACK_IMPORTED_MODULE_2__.itemValidator, updatedItem);
        (0,_utils_validator__WEBPACK_IMPORTED_MODULE_2__.validate)(_utils_validator__WEBPACK_IMPORTED_MODULE_2__.updatedItemValidator, this, name, updatedItem);
        this.state.items = this.state.items.map(function (item) {
            return item.name === name ? updatedItem : item;
        });
    };
    VendingMachine.prototype.removeItem = function (name) {
        (0,_utils_validator__WEBPACK_IMPORTED_MODULE_2__.validate)(_utils_validator__WEBPACK_IMPORTED_MODULE_2__.removedItemValidator, this.findItem(name));
        this.state.items = this.state.items.filter(function (item) { return item.name !== name; });
    };
    VendingMachine.prototype.purchaseItem = function (name) {
        var purchasedItem = this.findItem(name);
        (0,_utils_validator__WEBPACK_IMPORTED_MODULE_2__.validate)(_utils_validator__WEBPACK_IMPORTED_MODULE_2__.purchaseItemValidator, purchasedItem, this.state.insertedMoney);
        this.state.items = this.state.items.map(function (item) {
            return item.name === name
                ? __assign(__assign({}, item), { quantity: item.quantity - 1 }) : item;
        });
        this.state.insertedMoney -= purchasedItem.price;
        if (this.findItem(name).quantity <= 0)
            this.removeItem(name);
    };
    VendingMachine.prototype.findItem = function (name) {
        return this.state.items.find(function (item) { return item.name === name; }) || null;
    };
    VendingMachine.prototype.addCoin = function (amount) {
        var _this = this;
        (0,_utils_validator__WEBPACK_IMPORTED_MODULE_2__.validate)(_utils_validator__WEBPACK_IMPORTED_MODULE_2__.amountValidator, amount, this.getTotalMoney());
        var randomCoins = (0,_utils_coinUtils__WEBPACK_IMPORTED_MODULE_1__.createRandomCoins)(amount);
        var updatedCoins = Object.keys(this.state.coins).reduce(function (next, key) {
            var _a;
            return (__assign(__assign({}, next), (_a = {}, _a[key] = _this.state.coins[key] + randomCoins[key], _a)));
        }, _configs_constants__WEBPACK_IMPORTED_MODULE_3__.COIN.EMPTY_COINS);
        this.state.coins = updatedCoins;
    };
    VendingMachine.prototype.getTotalMoney = function () {
        return Object.entries(this.state.coins).reduce(function (sum, _a) {
            var key = _a[0], value = _a[1];
            return sum + Number(key) * value;
        }, 0);
    };
    VendingMachine.prototype.insertMoney = function (amount) {
        (0,_utils_validator__WEBPACK_IMPORTED_MODULE_2__.validate)(_utils_validator__WEBPACK_IMPORTED_MODULE_2__.insertMoneyValidator, amount, this.state.insertedMoney);
        this.state.insertedMoney += amount;
    };
    VendingMachine.prototype.returnChange = function () {
        var _this = this;
        (0,_utils_validator__WEBPACK_IMPORTED_MODULE_2__.validate)(_utils_validator__WEBPACK_IMPORTED_MODULE_2__.returnChangeValidator, this.state.insertedMoney);
        var remain = this.state.insertedMoney;
        var returnedChange = Object.keys(this.state.coins).reduce(function (next, key) {
            var _a;
            var coinValue = Number(key);
            var coinAmount = Math.min(Math.floor(remain / coinValue), _this.state.coins[key]);
            remain -= coinAmount * coinValue;
            return __assign(__assign({}, next), (_a = {}, _a[key] = coinAmount, _a));
        }, _configs_constants__WEBPACK_IMPORTED_MODULE_3__.COIN.EMPTY_COINS);
        var updatedCoins = Object.keys(this.state.coins).reduce(function (next, key) {
            var _a;
            return (__assign(__assign({}, next), (_a = {}, _a[key] = _this.state.coins[key] - returnedChange[key], _a)));
        }, _configs_constants__WEBPACK_IMPORTED_MODULE_3__.COIN.EMPTY_COINS);
        this.state.insertedMoney = remain;
        this.state.returnedChange = returnedChange;
        this.state.coins = updatedCoins;
    };
    return VendingMachine;
}(_core_Domain__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VendingMachine);
var vendingMachine = new VendingMachine({
    items: [],
    coins: _configs_constants__WEBPACK_IMPORTED_MODULE_3__.COIN.EMPTY_COINS,
    insertedMoney: 0,
    returnedChange: _configs_constants__WEBPACK_IMPORTED_MODULE_3__.COIN.EMPTY_COINS
});


/***/ }),

/***/ "./src/utils/coinUtils.ts":
/*!********************************!*\
  !*** ./src/utils/coinUtils.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRandomCoins": () => (/* binding */ createRandomCoins)
/* harmony export */ });
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/constants */ "./src/configs/constants.ts");
/* harmony import */ var _commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commons */ "./src/utils/commons.ts");


var getRandomCoin = function () {
    var coinValueList = _configs_constants__WEBPACK_IMPORTED_MODULE_0__.COIN.VALUES;
    var randomIndex = Math.floor(Math.random() * 4);
    return coinValueList[randomIndex];
};
var createRandomCoins = function (amount) {
    var coins = (0,_commons__WEBPACK_IMPORTED_MODULE_1__.deepClone)(_configs_constants__WEBPACK_IMPORTED_MODULE_0__.COIN.EMPTY_COINS);
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepEqual": () => (/* binding */ deepEqual),
/* harmony export */   "deepClone": () => (/* binding */ deepClone),
/* harmony export */   "convertStringToBoolean": () => (/* binding */ convertStringToBoolean)
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
var convertStringToBoolean = function (str) {
    switch (str) {
        case 'true':
            return true;
        case 'false':
            return false;
        case 'null':
            return null;
        default:
            return undefined;
    }
};


/***/ }),

/***/ "./src/utils/domUtils.ts":
/*!*******************************!*\
  !*** ./src/utils/domUtils.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPathname": () => (/* binding */ getPathname)
/* harmony export */ });
var getPathname = function (target) {
    if (target === void 0) { target = window; }
    return target.location.pathname;
};


/***/ }),

/***/ "./src/utils/validator.ts":
/*!********************************!*\
  !*** ./src/utils/validator.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validate": () => (/* binding */ validate),
/* harmony export */   "itemValidator": () => (/* binding */ itemValidator),
/* harmony export */   "updatedItemValidator": () => (/* binding */ updatedItemValidator),
/* harmony export */   "removedItemValidator": () => (/* binding */ removedItemValidator),
/* harmony export */   "amountValidator": () => (/* binding */ amountValidator),
/* harmony export */   "insertMoneyValidator": () => (/* binding */ insertMoneyValidator),
/* harmony export */   "purchaseItemValidator": () => (/* binding */ purchaseItemValidator),
/* harmony export */   "returnChangeValidator": () => (/* binding */ returnChangeValidator)
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
        test: function (removedItem) { return removedItem; },
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
        errorMessage: "".concat(_configs_constants__WEBPACK_IMPORTED_MODULE_0__.CHARGE_AMOUNT.STEP, "\uC6D0 \uB2E8\uC704\uC758 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.")
    },
    {
        test: function (amount, totalMoney) {
            return amount + totalMoney <= _configs_constants__WEBPACK_IMPORTED_MODULE_0__.CHARGE_AMOUNT.MAX;
        },
        errorMessage: "\uCD1D\uC561\uC740 \uCD5C\uB300 ".concat(_configs_constants__WEBPACK_IMPORTED_MODULE_0__.CHARGE_AMOUNT.MAX, "\uC6D0\uAE4C\uC9C0 \uAC00\uB2A5\uD569\uB2C8\uB2E4")
    },
];
var insertMoneyValidator = [
    {
        test: function (amount) { return amount >= 10 && amount <= 10000; },
        errorMessage: "\uD22C\uC785 \uAE08\uC561\uC740 10\uC5D0\uC11C 10000\uC6D0 \uC0AC\uC774\uC5EC\uC57C \uD569\uB2C8\uB2E4."
    },
    {
        test: function (amount) { return amount % 10 === 0; },
        errorMessage: "10\uC6D0 \uB2E8\uC704\uC758 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."
    },
    {
        test: function (amount, insertedMoney) {
            return amount + insertedMoney <= 10000;
        },
        errorMessage: "\uCD1D \uD22C\uC785 \uAE08\uC561\uC740 10000\uC6D0\uAE4C\uC9C0 \uAC00\uB2A5\uD569\uB2C8\uB2E4."
    },
];
var purchaseItemValidator = [
    {
        test: function (purchasedItem, insertedMoney) {
            return purchasedItem.price <= insertedMoney;
        },
        errorMessage: "\uD22C\uC785 \uAE08\uC561\uC774 \uBD80\uC871\uD569\uB2C8\uB2E4."
    },
];
var returnChangeValidator = [
    {
        test: function (insertedMoney) { return insertedMoney > 0; },
        errorMessage: '투입한 금액이 없습니다.'
    },
];


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _construct)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if ((0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeFunction)
/* harmony export */ });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeReflectConstruct)
/* harmony export */ });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _wrapNativeSuper)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ "./node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !(0,_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return (0,_construct_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Class, arguments, (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
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
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _views_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/App */ "./src/views/App.js");


document.querySelector('#app').innerHTML = '<app-wrapper></app-wrapper>';
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map