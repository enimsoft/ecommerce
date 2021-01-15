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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RXBc");


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "5lhB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// EXTERNAL MODULE: external "sourcebit-target-next"
var external_sourcebit_target_next_ = __webpack_require__("bdDJ");

// EXTERNAL MODULE: external "sourcebit-target-next/with-remote-data-updates"
var with_remote_data_updates_ = __webpack_require__("bLNz");

// EXTERNAL MODULE: ./src/utils/index.js + 13 modules
var utils = __webpack_require__("7Qib");

// CONCATENATED MODULE: ./src/components/Picture.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




class Picture_Picture extends external_react_default.a.Component {
  render() {
    let image = external_lodash_default.a.get(this.props, 'image', null);

    let alt = external_lodash_default.a.get(this.props, 'alt', null);

    let cssClass = external_lodash_default.a.get(this.props, 'cssClass', null);

    return image && __jsx("picture", null, __jsx("img", _extends({
      src: Object(utils["h" /* withPrefix */])(image)
    }, alt ? {
      alt: alt
    } : null, cssClass ? {
      className: cssClass
    } : null)));
  }

}
// CONCATENATED MODULE: ./src/components/BulletpointsSection.js
var BulletpointsSection_jsx = external_react_default.a.createElement;

function BulletpointsSection_extends() { BulletpointsSection_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return BulletpointsSection_extends.apply(this, arguments); }





class BulletpointsSection_BulletpointsSection extends external_react_default.a.Component {
  render() {
    let section = external_lodash_default.a.get(this.props, 'section', null);

    return BulletpointsSection_jsx("section", {
      className: "content__row bulletpoints__section",
      "data-id": external_lodash_default.a.get(section, 'section_id', null)
    }, external_lodash_default.a.map(external_lodash_default.a.get(section, 'bulletpoints', null), (bulletpoint, bulletpoint_idx) => BulletpointsSection_jsx("section", {
      key: bulletpoint_idx,
      className: "content__row bulletpoint__section"
    }, BulletpointsSection_jsx(Picture_Picture, BulletpointsSection_extends({}, this.props, {
      image: external_lodash_default.a.get(bulletpoint, 'image', null),
      alt: external_lodash_default.a.get(bulletpoint, 'title', null),
      cssClass: 'bulletpoint__section-image'
    })), BulletpointsSection_jsx("div", {
      className: "bulletpoint__section-content-container"
    }, BulletpointsSection_jsx("h2", {
      className: "bulletpoint__section-title"
    }, external_lodash_default.a.get(bulletpoint, 'title', null)), BulletpointsSection_jsx("div", {
      className: "bulletpoint__section-content"
    }, Object(utils["f" /* markdownify */])(external_lodash_default.a.get(bulletpoint, 'description', null)))))));
  }

}
// CONCATENATED MODULE: ./src/components/BuyButton.js
var BuyButton_jsx = external_react_default.a.createElement;

function BuyButton_extends() { BuyButton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return BuyButton_extends.apply(this, arguments); }




class BuyButton_BuyButton extends external_react_default.a.Component {
  render() {
    let product_page = external_lodash_default.a.get(this.props, 'product_page', null);

    return BuyButton_jsx("button", BuyButton_extends({
      className: "button button--std snipcart-add-item",
      "data-item-name": external_lodash_default.a.get(product_page, 'frontmatter.title', null),
      "data-item-url": external_lodash_default.a.get(product_page, '__metadata.urlPath', null),
      "data-item-price": external_lodash_default.a.get(product_page, 'frontmatter.price', null)
    }, external_lodash_default.a.get(product_page, 'frontmatter.default_thumbnail_image', null) ? {
      "data-item-image": Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(product_page, 'frontmatter.default_thumbnail_image', null))
    } : null, {
      "data-item-description": external_lodash_default.a.get(product_page, 'frontmatter.description', null)
    }, external_lodash_default.a.get(product_page, 'frontmatter.category', null) ? (() => {
      let category_page = Object(utils["d" /* getPageByFilePath */])(this.props.pages, external_lodash_default.a.get(product_page, 'frontmatter.category', null));
      return {
        "data-item-categories": external_lodash_default.a.get(category_page, 'frontmatter.title', null)
      };
    })() : null, {
      "data-item-id": external_lodash_default.a.get(product_page, 'frontmatter.id', null)
    }), BuyButton_jsx("span", {
      className: "button__icon"
    }, BuyButton_jsx("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, BuyButton_jsx("path", {
      d: "M23.2896 4.94327C22.7844 4.81588 22.2535 5.1214 22.1272 5.63093L20.0304 13.9616H7.8562L4.97602 2.16559C4.87538 1.73269 4.49648 1.42717 4.0416 1.42717H0.960093C0.429223 1.42717 0 1.86007 0 2.39549C0 2.93091 0.429223 3.36381 0.960093 3.36381H3.3095L7.19908 19.3624C7.29973 19.7953 7.67862 20.1009 8.13351 20.1009H19.2223C19.7531 20.1009 20.1824 19.668 20.1824 19.1325C20.1824 18.5971 19.7531 18.1642 19.2223 18.1642H8.86555L8.31003 15.8972H20.7378C21.1671 15.8972 21.546 15.5917 21.6723 15.1836L23.9714 6.11341C24.0977 5.60487 23.7947 5.07044 23.2895 4.94306L23.2896 4.94327Z",
      fill: "currentColor"
    }), BuyButton_jsx("path", {
      d: "M11.4678 22.4455C11.4678 23.3034 10.7781 24 9.92751 24C9.07596 24 8.38623 23.3034 8.38623 22.4455C8.38623 21.5877 9.07596 20.891 9.92751 20.891C10.7781 20.891 11.4678 21.5877 11.4678 22.4455Z",
      fill: "currentColor"
    }), BuyButton_jsx("path", {
      d: "M19.4244 22.4455C19.4244 23.3034 18.7346 24 17.8841 24C17.0325 24 16.3428 23.3034 16.3428 22.4455C16.3428 21.5877 17.0325 20.891 17.8841 20.891C18.7346 20.891 19.4244 21.5877 19.4244 22.4455Z",
      fill: "currentColor"
    }), BuyButton_jsx("path", {
      d: "M16.6972 6.11442L14.9793 7.84704V0.96832C14.9793 0.432901 14.5501 0 14.0192 0C13.4884 0 13.0592 0.432901 13.0592 0.96832V7.84704L11.3413 6.11442C11.1646 5.93628 10.912 5.83376 10.6594 5.83376C10.4068 5.83376 10.1799 5.93527 9.9776 6.11442C9.59869 6.49657 9.59869 7.1076 9.9776 7.46489L13.3375 10.8535C13.6907 11.2098 14.3222 11.2098 14.6765 10.8535L18.0363 7.46489C18.4152 7.08274 18.4152 6.4717 18.0363 6.11442C17.6821 5.73227 17.0762 5.73227 16.6973 6.11442H16.6972Z",
      fill: "currentColor"
    }))), BuyButton_jsx("span", {
      className: "button__text"
    }, "Add to cart"));
  }

}
// CONCATENATED MODULE: ./src/components/ContactSection.js
var ContactSection_jsx = external_react_default.a.createElement;



class ContactSection_ContactSection extends external_react_default.a.Component {
  render() {
    let section = external_lodash_default.a.get(this.props, 'section', null);

    return ContactSection_jsx("section", {
      className: "content__row content__row--full-width content__row--mb-0  faq__contact",
      "data-id": external_lodash_default.a.get(section, 'section_id', null)
    }, external_lodash_default.a.get(section, 'image', null) && ContactSection_jsx("img", {
      src: Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(section, 'image', null)),
      alt: "",
      className: "faq__contact-image"
    }), ContactSection_jsx("div", {
      className: "faq__contact-text-container"
    }, ContactSection_jsx("h3", {
      className: "faq__contact-title"
    }, "Have any questions? ", ContactSection_jsx("br", null), " Contact us."), ContactSection_jsx("div", {
      className: "faq__contact-info-container"
    }, ContactSection_jsx("p", {
      className: "faq__contact-address"
    }, external_lodash_default.a.get(section, 'address', null)), ContactSection_jsx("p", {
      className: "faq__contact-telephone"
    }, external_lodash_default.a.get(section, 'phone', null)), ContactSection_jsx("p", {
      className: "faq__contact-email"
    }, external_lodash_default.a.get(section, 'email', null)), ContactSection_jsx("div", {
      className: "faq__seperator"
    }), external_lodash_default.a.get(section, 'mapUrl', null) && ContactSection_jsx(utils["a" /* Link */], {
      className: "faq__map-link link link--filled link--reversed",
      href: external_lodash_default.a.get(section, 'mapUrl', null)
    }, "On the map", ContactSection_jsx("svg", {
      width: "17",
      height: "24",
      viewBox: "0 0 17 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, ContactSection_jsx("path", {
      d: "M8.25031 0C3.67589 0 0 3.67445 0 8.25031C0 12.8247 8.25031 24 8.25031 24C8.25031 24 16.5006 12.8247 16.5006 8.25031C16.5006 3.67445 12.8247 0 8.25031 0ZM8.25031 11.9993C6.15084 11.9993 4.49991 10.3498 4.49991 8.24888C4.49991 6.1494 6.1494 4.49847 8.25031 4.49847C10.3498 4.49847 12.0007 6.14796 12.0007 8.24888C12.0007 10.3498 10.3498 11.9993 8.25031 11.9993Z",
      fill: "white"
    }))))));
  }

}
// CONCATENATED MODULE: ./src/components/FaqSection.js
var FaqSection_jsx = external_react_default.a.createElement;



class FaqSection_FaqSection extends external_react_default.a.Component {
  render() {
    let section = external_lodash_default.a.get(this.props, 'section', null);

    return FaqSection_jsx("section", {
      className: "content__row faq__section",
      "data-id": external_lodash_default.a.get(section, 'section_id', null)
    }, external_lodash_default.a.map(external_lodash_default.a.get(section, 'questions', null), (question, question_idx) => FaqSection_jsx("section", {
      key: question_idx,
      className: "content__row faq__section"
    }, FaqSection_jsx("div", {
      className: "faq__section-content-container"
    }, FaqSection_jsx("h2", {
      className: "faq__question"
    }, external_lodash_default.a.get(question, 'question', null)), FaqSection_jsx("div", {
      className: "faq__answer"
    }, Object(utils["f" /* markdownify */])(external_lodash_default.a.get(question, 'answer', null)))))));
  }

}
// CONCATENATED MODULE: ./src/components/SmallBuyButton.js
var SmallBuyButton_jsx = external_react_default.a.createElement;

function SmallBuyButton_extends() { SmallBuyButton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SmallBuyButton_extends.apply(this, arguments); }




class SmallBuyButton_SmallBuyButton extends external_react_default.a.Component {
  render() {
    let product_page = external_lodash_default.a.get(this.props, 'product_page', null);

    let component = external_lodash_default.a.get(this.props, 'component', null);

    return SmallBuyButton_jsx("button", SmallBuyButton_extends({
      className: component + '__item-buy button button--icon-only snipcart-add-item',
      "data-item-name": external_lodash_default.a.get(product_page, 'frontmatter.title', null),
      "data-item-url": external_lodash_default.a.get(product_page, '__metadata.urlPath', null),
      "data-item-price": external_lodash_default.a.get(product_page, 'frontmatter.price', null)
    }, external_lodash_default.a.get(product_page, 'frontmatter.category', null) ? (() => {
      let category_page = Object(utils["d" /* getPageByFilePath */])(this.props.pages, external_lodash_default.a.get(product_page, 'frontmatter.category', null));
      return {
        "data-item-categories": external_lodash_default.a.get(category_page, 'frontmatter.title', null)
      };
    })() : null, external_lodash_default.a.get(product_page, 'frontmatter.default_thumbnail_image', null) ? {
      "data-item-image": Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(product_page, 'frontmatter.default_thumbnail_image', null))
    } : null, {
      "data-item-description": external_lodash_default.a.get(product_page, 'frontmatter.description', null),
      "data-item-id": external_lodash_default.a.get(product_page, 'frontmatter.id', null)
    }), SmallBuyButton_jsx("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, SmallBuyButton_jsx("path", {
      d: "M23.2896 4.94327C22.7844 4.81588 22.2535 5.1214 22.1272 5.63093L20.0304 13.9616H7.8562L4.97602 2.16559C4.87538 1.73269 4.49648 1.42717 4.0416 1.42717H0.960093C0.429223 1.42717 0 1.86007 0 2.39549C0 2.93091 0.429223 3.36381 0.960093 3.36381H3.3095L7.19908 19.3624C7.29973 19.7953 7.67862 20.1009 8.13351 20.1009H19.2223C19.7531 20.1009 20.1824 19.668 20.1824 19.1325C20.1824 18.5971 19.7531 18.1642 19.2223 18.1642H8.86555L8.31003 15.8972H20.7378C21.1671 15.8972 21.546 15.5917 21.6723 15.1836L23.9714 6.11341C24.0977 5.60487 23.7947 5.07044 23.2895 4.94306L23.2896 4.94327Z"
    }), SmallBuyButton_jsx("path", {
      d: "M11.4678 22.4455C11.4678 23.3034 10.7781 24 9.92751 24C9.07596 24 8.38623 23.3034 8.38623 22.4455C8.38623 21.5877 9.07596 20.891 9.92751 20.891C10.7781 20.891 11.4678 21.5877 11.4678 22.4455Z"
    }), SmallBuyButton_jsx("path", {
      d: "M19.4244 22.4455C19.4244 23.3034 18.7346 24 17.8841 24C17.0325 24 16.3428 23.3034 16.3428 22.4455C16.3428 21.5877 17.0325 20.891 17.8841 20.891C18.7346 20.891 19.4244 21.5877 19.4244 22.4455Z"
    }), SmallBuyButton_jsx("path", {
      d: "M16.6972 6.11442L14.9793 7.84704V0.96832C14.9793 0.432901 14.5501 0 14.0192 0C13.4884 0 13.0592 0.432901 13.0592 0.96832V7.84704L11.3413 6.11442C11.1646 5.93628 10.912 5.83376 10.6594 5.83376C10.4068 5.83376 10.1799 5.93527 9.9776 6.11442C9.59869 6.49657 9.59869 7.1076 9.9776 7.46489L13.3375 10.8535C13.6907 11.2098 14.3222 11.2098 14.6765 10.8535L18.0363 7.46489C18.4152 7.08274 18.4152 6.4717 18.0363 6.11442C17.6821 5.73227 17.0762 5.73227 16.6973 6.11442H16.6972Z"
    })));
  }

}
// CONCATENATED MODULE: ./src/components/ProductGridItem.js
var ProductGridItem_jsx = external_react_default.a.createElement;

function ProductGridItem_extends() { ProductGridItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ProductGridItem_extends.apply(this, arguments); }






class ProductGridItem_ProductGridItem extends external_react_default.a.Component {
  render() {
    let product_page = external_lodash_default.a.get(this.props, 'product_page', null);

    return ProductGridItem_jsx("li", {
      className: "product-grid__item"
    }, ProductGridItem_jsx("figure", {
      className: "product-grid__item-figure"
    }, ProductGridItem_jsx(utils["a" /* Link */], {
      className: "product-grid__item-link",
      href: Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(product_page, '__metadata.urlPath', null))
    }, ProductGridItem_jsx(Picture_Picture, ProductGridItem_extends({}, this.props, {
      image: external_lodash_default.a.get(product_page, 'frontmatter.default_thumbnail_image', null),
      alt: external_lodash_default.a.get(product_page, 'frontmatter.title', null),
      cssClass: 'product-grid__item-image'
    }))), ProductGridItem_jsx("figcaption", null, ProductGridItem_jsx(SmallBuyButton_SmallBuyButton, ProductGridItem_extends({}, this.props, {
      product_page: product_page,
      component: 'product-grid'
    })))), ProductGridItem_jsx("div", {
      className: "product-grid__definition"
    }, ProductGridItem_jsx(utils["a" /* Link */], {
      href: Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(product_page, '__metadata.urlPath', null))
    }, ProductGridItem_jsx("h3", {
      className: "product-grid__title"
    }, external_lodash_default.a.get(product_page, 'frontmatter.title', null))), external_lodash_default.a.get(product_page, 'frontmatter.category', null) && (() => {
      let category_page = Object(utils["d" /* getPageByFilePath */])(this.props.pages, external_lodash_default.a.get(product_page, 'frontmatter.category', null));
      return ProductGridItem_jsx("span", {
        className: "product-grid__category"
      }, " ", external_lodash_default.a.get(category_page, 'frontmatter.title', null), " ");
    })(), ProductGridItem_jsx("span", {
      className: "product-grid__price"
    }, " $", external_lodash_default.a.get(product_page, 'frontmatter.price', null), " ")));
  }

}
// CONCATENATED MODULE: ./src/components/ProductGrid.js
var ProductGrid_jsx = external_react_default.a.createElement;

function ProductGrid_extends() { ProductGrid_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ProductGrid_extends.apply(this, arguments); }





class ProductGrid_ProductGrid extends external_react_default.a.Component {
  render() {
    let site = external_lodash_default.a.get(this.props, 'site', null);

    let product_pages = external_lodash_default.a.get(this.props, 'product_pages', null);

    let listCssClass = external_lodash_default.a.get(this.props, 'cssClass', null);

    let category_url = external_lodash_default.a.get(this.props, 'category_url', null);

    return ProductGrid_jsx("ul", {
      className: 'product-grid ' + (listCssClass ? listCssClass : '')
    }, external_lodash_default.a.map(product_pages, (product_page, product_page_idx) => !category_url ? ProductGrid_jsx(ProductGridItem_ProductGridItem, ProductGrid_extends({
      key: product_page_idx
    }, this.props, {
      product_page: product_page,
      site: site
    })) : external_lodash_default.a.get(product_page, 'frontmatter.category', null) && (() => {
      let category_page = Object(utils["d" /* getPageByFilePath */])(this.props.pages, external_lodash_default.a.get(product_page, 'frontmatter.category', null));
      return category_url === external_lodash_default.a.get(category_page, '__metadata.urlPath', null) && ProductGrid_jsx(ProductGridItem_ProductGridItem, ProductGrid_extends({
        key: product_page_idx + '.1'
      }, this.props, {
        product_page: product_page,
        site: site
      }));
    })()));
  }

}
// CONCATENATED MODULE: ./src/components/FeaturedCategoriesSection.js
var FeaturedCategoriesSection_jsx = external_react_default.a.createElement;

function FeaturedCategoriesSection_extends() { FeaturedCategoriesSection_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FeaturedCategoriesSection_extends.apply(this, arguments); }





class FeaturedCategoriesSection_FeaturedCategoriesSection extends external_react_default.a.Component {
  render() {
    let section = external_lodash_default.a.get(this.props, 'section', null);

    let categories = external_lodash_default.a.get(section, 'featured_categories', null);

    return FeaturedCategoriesSection_jsx("section", {
      className: "content__row",
      "data-id": external_lodash_default.a.get(section, 'section_id', null)
    }, external_lodash_default.a.map(categories, (category, category_idx) => {
      let category_page = Object(utils["d" /* getPageByFilePath */])(this.props.pages, category);

      let product_pages = external_lodash_default.a.orderBy(Object(utils["e" /* getPages */])(this.props.pages, '/products'), 'frontmatter.order');

      return FeaturedCategoriesSection_jsx(external_react_default.a.Fragment, {
        key: category_idx + '.2'
      }, FeaturedCategoriesSection_jsx("h2", {
        key: category_idx,
        className: "content__row-title"
      }, external_lodash_default.a.get(category_page, 'frontmatter.title', null)), FeaturedCategoriesSection_jsx(ProductGrid_ProductGrid, FeaturedCategoriesSection_extends({
        key: category_idx + '.1'
      }, this.props, {
        product_pages: product_pages,
        category_url: external_lodash_default.a.get(category_page, '__metadata.urlPath', null),
        site: this.props
      })));
    }));
  }

}
// CONCATENATED MODULE: ./src/components/FeaturedGrid.js
var FeaturedGrid_jsx = external_react_default.a.createElement;

function FeaturedGrid_extends() { FeaturedGrid_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FeaturedGrid_extends.apply(this, arguments); }





class FeaturedGrid_FeaturedGrid extends external_react_default.a.Component {
  render() {
    let site = external_lodash_default.a.get(this.props, 'site', null);

    let products = external_lodash_default.a.get(this.props, 'products', null);

    let listCssClass = external_lodash_default.a.get(this.props, 'cssClass', null);

    return FeaturedGrid_jsx("ul", {
      className: 'product-grid ' + (listCssClass ? listCssClass : '')
    }, external_lodash_default.a.map(products, (product, product_idx) => {
      let product_page = Object(utils["d" /* getPageByFilePath */])(this.props.pages, product);
      return FeaturedGrid_jsx(ProductGridItem_ProductGridItem, FeaturedGrid_extends({
        key: product_idx
      }, this.props, {
        product_page: product_page,
        site: site
      }));
    }));
  }

}
// CONCATENATED MODULE: ./src/components/FeaturedProductsSection.js
var FeaturedProductsSection_jsx = external_react_default.a.createElement;

function FeaturedProductsSection_extends() { FeaturedProductsSection_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FeaturedProductsSection_extends.apply(this, arguments); }




class FeaturedProductsSection_FeaturedProductsSection extends external_react_default.a.Component {
  render() {
    let section = external_lodash_default.a.get(this.props, 'section', null);

    let featured_products = external_lodash_default.a.get(section, 'featured_products', null);

    return FeaturedProductsSection_jsx("section", {
      className: "content__row",
      "data-id": external_lodash_default.a.get(section, 'section_id', null)
    }, FeaturedProductsSection_jsx("h2", {
      className: 'content__row-title' + (external_lodash_default.a.get(section, 'light_title', null) ? ' content__row-title--light' : '')
    }, external_lodash_default.a.get(section, 'icon', null) && FeaturedProductsSection_jsx("svg", {
      width: "29",
      height: "25",
      viewBox: "0 0 29 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, FeaturedProductsSection_jsx("path", {
      d: "M28.152 3.4188C27.2129 1.75821 21.3251 -3.80243 14.4999 4.24829C7.33226 -3.80243 1.78532 1.75821 0.847792 3.4188C-0.859337 6.48936 0.164613 11.138 2.55492 13.3791L14.5015 25L26.4482 13.3791C28.8352 11.138 29.8592 6.49096 28.1521 3.4188H28.152Z"
    })), external_lodash_default.a.get(section, 'title', null)), FeaturedProductsSection_jsx(FeaturedGrid_FeaturedGrid, FeaturedProductsSection_extends({}, this.props, {
      products: featured_products,
      site: this.props
    })));
  }

}
// CONCATENATED MODULE: ./src/components/Footer.js
var Footer_jsx = external_react_default.a.createElement;

function Footer_extends() { Footer_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Footer_extends.apply(this, arguments); }





class Footer_Footer extends external_react_default.a.Component {
  render() {
    let page = external_lodash_default.a.get(this.props, 'page', null);

    let site = external_lodash_default.a.get(this.props, 'site', null);

    let menu = external_lodash_default.a.get(site, 'data.config.main_menu', null);

    return Footer_jsx("footer", {
      className: "footer"
    }, Footer_jsx("div", {
      className: "footer__container"
    }, Footer_jsx(utils["a" /* Link */], {
      href: Object(utils["h" /* withPrefix */])('/')
    }, Footer_jsx(Picture_Picture, Footer_extends({}, this.props, {
      image: external_lodash_default.a.get(site, 'data.config.logo_light', null),
      cssClass: 'footer__logo',
      alt: 'Planty logo'
    }))), Footer_jsx("ul", {
      className: "footer__nav"
    }, external_lodash_default.a.map(menu, (item, item_idx) => Footer_jsx("li", {
      key: item_idx,
      className: "footer__nav-item"
    }, Footer_jsx(utils["a" /* Link */], Footer_extends({
      href: Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(item, 'url', null))
    }, external_lodash_default.a.get(item, 'title', null) === external_lodash_default.a.get(page, 'frontmatter.title', null) ? {
      className: 'footer__nav-link footer__nav-link--active'
    } : {
      className: 'footer__nav-link'
    }), external_lodash_default.a.get(item, 'title', null))))), Footer_jsx("div", {
      className: "footer__legal-notice"
    }, external_lodash_default.a.get(site, 'data.config.footer_text', null))));
  }

}
// CONCATENATED MODULE: ./src/components/Header.js
var Header_jsx = external_react_default.a.createElement;

function Header_extends() { Header_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Header_extends.apply(this, arguments); }





class Header_Header extends external_react_default.a.Component {
  render() {
    let page = external_lodash_default.a.get(this.props, 'page', null);

    let site = external_lodash_default.a.get(this.props, 'site', null);

    let white_header = external_lodash_default.a.get(page, 'frontmatter.white_header', null) || false;
    return Header_jsx("header", {
      className: "header"
    }, Header_jsx("nav", {
      className: Object(utils["b" /* classNames */])('nav', {
        'nav--light': white_header,
        'nav--dark': white_header !== true
      })
    }, Header_jsx("div", Header_extends({
      className: "nav__logo"
    }, white_header || external_lodash_default.a.get(page, 'frontmatter.layout', null) === 'product' ? {
      "data-original": Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(site, 'data.config.logo_light', null))
    } : null, {
      "data-dark": Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(site, 'data.config.logo_dark', null))
    }), Header_jsx(utils["a" /* Link */], {
      href: Object(utils["h" /* withPrefix */])('/')
    }, white_header || external_lodash_default.a.get(page, 'frontmatter.layout', null) === 'product' ? Header_jsx(Picture_Picture, Header_extends({}, this.props, {
      image: external_lodash_default.a.get(site, 'data.config.logo_light', null),
      cssClass: 'nav__logo-image',
      alt: 'Site logo'
    })) : Header_jsx(Picture_Picture, Header_extends({}, this.props, {
      image: external_lodash_default.a.get(site, 'data.config.logo_dark', null),
      cssClass: 'nav__logo-image',
      alt: 'Site logo'
    })))), Header_jsx("ul", {
      className: "nav__menu"
    }, external_lodash_default.a.map(external_lodash_default.a.get(site, 'data.config.main_menu', null), (item, item_idx) => {
      let section = external_lodash_default.a.get(page, 'frontmatter.section', null) || external_lodash_default.a.get(page, 'frontmatter.title', null);

      let isActive = external_lodash_default.a.get(item, 'title', null) === section ? true : false;
      return Header_jsx(external_react_default.a.Fragment, {
        key: item_idx + '.1'
      }, Header_jsx("li", {
        key: item_idx,
        className: "nav__menu-item"
      }, Header_jsx(utils["a" /* Link */], {
        href: Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(item, 'url', null)),
        className: Object(utils["b" /* classNames */])('nav__menu-item-link', {
          'nav__menu-item-link--active': isActive
        })
      }, external_lodash_default.a.get(item, 'title', null))));
    })), Header_jsx("div", {
      className: "nav__right"
    }, Header_jsx("button", {
      className: "snipcart-checkout nav__button button button--transparent"
    }, Header_jsx("span", {
      className: "button__icon nav__button-icon"
    }, Header_jsx("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, Header_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22.907 4.22024C23.0315 4.1993 23.1614 4.20403 23.2896 4.2384L23.2895 4.23818C23.7947 4.37362 24.0977 4.94184 23.9714 5.48253L21.6723 15.1262C21.546 15.5601 21.1671 15.8849 20.7378 15.8849H8.31003L8.86555 18.2952H19.2223C19.7531 18.2952 20.1824 18.7555 20.1824 19.3248C20.1824 19.8941 19.7531 20.3543 19.2223 20.3543H8.13351C7.67862 20.3543 7.29973 20.0295 7.19908 19.5692L3.3095 2.55908H0.960093C0.429223 2.55908 0 2.09881 0 1.52954C0 0.960271 0.429223 0.5 0.960093 0.5H4.0416C4.49648 0.5 4.87538 0.824833 4.97602 1.2851L7.8562 13.8269H20.0304L21.7767 6.45023H13.8998C13.2827 6.45023 12.7823 5.94993 12.7823 5.33277C12.7823 4.71561 13.2827 4.2153 13.8998 4.2153L22.8012 4.21533C22.8369 4.21533 22.8722 4.21699 22.907 4.22024ZM9.92751 24.4999C10.7781 24.4999 11.4678 23.7593 11.4678 22.8472C11.4678 21.9351 10.7781 21.1944 9.92751 21.1944C9.07596 21.1944 8.38623 21.9351 8.38623 22.8472C8.38623 23.7593 9.07596 24.4999 9.92751 24.4999ZM19.4244 22.8472C19.4244 23.7593 18.7346 24.4999 17.8841 24.4999C17.0325 24.4999 16.3428 23.7593 16.3428 22.8472C16.3428 21.9351 17.0325 21.1944 17.8841 21.1944C18.7346 21.1944 19.4244 21.9351 19.4244 22.8472Z",
      fill: "white"
    }))), Header_jsx("span", {
      className: "snipcart-items-count nav__total-items button__text"
    }, "0")), Header_jsx("button", {
      className: "hamburger button button--transparent"
    }, Header_jsx("svg", {
      width: "24",
      height: "16",
      viewBox: "0 0 24 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, Header_jsx("path", {
      className: "hamburger__icon-path",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 1.00049C0 0.448204 0.447715 0.000488281 1 0.000488281H23C23.5523 0.000488281 24 0.448204 24 1.00049C24 1.55277 23.5523 2.00049 23 2.00049H1C0.447716 2.00049 0 1.55277 0 1.00049ZM0 8.00049C0 7.4482 0.447715 7.00049 1 7.00049H13C13.5523 7.00049 14 7.4482 14 8.00049C14 8.55277 13.5523 9.00049 13 9.00049H1C0.447716 9.00049 0 8.55277 0 8.00049ZM1 14.0005C0.447715 14.0005 0 14.4482 0 15.0005C0 15.5528 0.447715 16.0005 1 16.0005H16C16.5523 16.0005 17 15.5528 17 15.0005C17 14.4482 16.5523 14.0005 16 14.0005H1Z",
      fill: "white"
    }))), Header_jsx("div", {
      className: "hamburger__content hamburger__content--closed",
      style: Object(utils["g" /* toStyleObj */])('background-image: url(\'' + Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(site, 'data.config.hamburger_background_image', null)) + '\')')
    }, Header_jsx("div", {
      className: "hamburger__options"
    }, Header_jsx("button", {
      className: "snipcart-checkout button button--transparent"
    }, Header_jsx("span", {
      className: "button__icon nav__button-icon"
    }, Header_jsx("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, Header_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22.907 4.22024C23.0315 4.1993 23.1614 4.20403 23.2896 4.2384L23.2895 4.23818C23.7947 4.37362 24.0977 4.94184 23.9714 5.48253L21.6723 15.1262C21.546 15.5601 21.1671 15.8849 20.7378 15.8849H8.31003L8.86555 18.2952H19.2223C19.7531 18.2952 20.1824 18.7555 20.1824 19.3248C20.1824 19.8941 19.7531 20.3543 19.2223 20.3543H8.13351C7.67862 20.3543 7.29973 20.0295 7.19908 19.5692L3.3095 2.55908H0.960093C0.429223 2.55908 0 2.09881 0 1.52954C0 0.960271 0.429223 0.5 0.960093 0.5H4.0416C4.49648 0.5 4.87538 0.824833 4.97602 1.2851L7.8562 13.8269H20.0304L21.7767 6.45023H13.8998C13.2827 6.45023 12.7823 5.94993 12.7823 5.33277C12.7823 4.71561 13.2827 4.2153 13.8998 4.2153L22.8012 4.21533C22.8369 4.21533 22.8722 4.21699 22.907 4.22024ZM9.92751 24.4999C10.7781 24.4999 11.4678 23.7593 11.4678 22.8472C11.4678 21.9351 10.7781 21.1944 9.92751 21.1944C9.07596 21.1944 8.38623 21.9351 8.38623 22.8472C8.38623 23.7593 9.07596 24.4999 9.92751 24.4999ZM19.4244 22.8472C19.4244 23.7593 18.7346 24.4999 17.8841 24.4999C17.0325 24.4999 16.3428 23.7593 16.3428 22.8472C16.3428 21.9351 17.0325 21.1944 17.8841 21.1944C18.7346 21.1944 19.4244 21.9351 19.4244 22.8472Z",
      fill: "white"
    })))), Header_jsx("div", {
      className: ""
    }, Header_jsx("span", {
      className: "snipcart-items-count"
    }), " products | ", Header_jsx("span", {
      className: "snipcart-total-price"
    }), "                        ")), Header_jsx("button", {
      className: "link snipcart-checkout hamburger__checkout"
    }, "Checkout", Header_jsx("svg", {
      width: "26",
      height: "14",
      viewBox: "0 0 26 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, Header_jsx("path", {
      d: "M22.6819 6.07886H0V7.79048H22.8139L18.2402 12.3182L19.434 13.5L26 7L19.434 0.5L18.2402 1.68182L22.6819 6.07886Z",
      fill: "currentColor"
    }))), Header_jsx("ul", {
      className: "hamburger__nav"
    }, external_lodash_default.a.map(external_lodash_default.a.get(site, 'data.config.main_menu', null), (item, item_idx) => {
      let section = external_lodash_default.a.get(page, 'frontmatter.section', null) || external_lodash_default.a.get(page, 'frontmatter.title', null);

      let isActive = external_lodash_default.a.get(item, 'title', null) === section ? true : false;
      return Header_jsx(external_react_default.a.Fragment, {
        key: item_idx + '.1'
      }, Header_jsx("li", {
        key: item_idx,
        className: "hamburger__nav-item"
      }, Header_jsx(utils["a" /* Link */], {
        href: Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(item, 'url', null)),
        className: Object(utils["b" /* classNames */])('hamburger__nav-link', {
          'hamburger__nav-link--active': isActive
        })
      }, external_lodash_default.a.get(item, 'title', null))));
    }))))));
  }

}
// CONCATENATED MODULE: ./src/components/HeaderSection.js
var HeaderSection_jsx = external_react_default.a.createElement;

function HeaderSection_extends() { HeaderSection_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return HeaderSection_extends.apply(this, arguments); }




class HeaderSection_HeaderSection extends external_react_default.a.Component {
  render() {
    let section = external_lodash_default.a.get(this.props, 'section', null);

    return HeaderSection_jsx("section", HeaderSection_extends({
      className: "content__row header-section__header"
    }, external_lodash_default.a.get(section, 'background_image', null) ? {
      style: Object(utils["g" /* toStyleObj */])('background-image: url(\'' + Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(section, 'background_image', null)) + '\')')
    } : null, {
      "data-id": external_lodash_default.a.get(section, 'section_id', null)
    }), HeaderSection_jsx("h1", {
      className: "header-section__title content__row"
    }, external_lodash_default.a.get(section, 'headline', null)), HeaderSection_jsx("div", {
      className: "content__row header-section__content"
    }, Object(utils["f" /* markdownify */])(external_lodash_default.a.get(section, 'subtitle', null))));
  }

}
// CONCATENATED MODULE: ./src/components/HeroSection.js
var HeroSection_jsx = external_react_default.a.createElement;



class HeroSection_HeroSection extends external_react_default.a.Component {
  render() {
    let section = external_lodash_default.a.get(this.props, 'section', null);

    let bg_img_opacity_pct = external_lodash_default.a.get(section, 'background_image_opacity', null) || 100;
    let bg_img_opacity = bg_img_opacity_pct * 0.01;
    return HeroSection_jsx("section", {
      className: "hero bg-color",
      "data-id": external_lodash_default.a.get(section, 'section_id', null)
    }, external_lodash_default.a.get(section, 'background_image', null) && HeroSection_jsx("div", {
      className: "hero__img",
      style: Object(utils["g" /* toStyleObj */])('background-image: url(\'' + Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(section, 'background_image', null)) + '\'); opacity: ' + bg_img_opacity + ';')
    }), HeroSection_jsx("div", {
      className: "hero__title"
    }, Object(utils["f" /* markdownify */])(external_lodash_default.a.get(section, 'content', null))), HeroSection_jsx("div", {
      className: "link-group"
    }, external_lodash_default.a.map(external_lodash_default.a.get(section, 'actions', null), (action, action_idx) => {
      let action_style = external_lodash_default.a.get(action, 'style', null) || 'primary';
      return HeroSection_jsx(utils["a" /* Link */], {
        key: action_idx,
        href: Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(action, 'url', null)),
        className: Object(utils["b" /* classNames */])('link', {
          'link--filled': action_style === 'primary',
          'link--transparent': action_style === 'secondary',
          'link--simple ': action_style === 'link'
        })
      }, external_lodash_default.a.get(action, 'title', null), external_lodash_default.a.get(action, 'arrow', null) && HeroSection_jsx("svg", {
        width: "26",
        height: "14",
        viewBox: "0 0 26 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, HeroSection_jsx("path", {
        d: "M22.6819 6.07886H0V7.79048H22.8139L18.2402 12.3182L19.434 13.5L26 7L19.434 0.5L18.2402 1.68182L22.6819 6.07886Z",
        fill: "currentColor"
      })));
    })));
  }

}
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__("zIXN");

// CONCATENATED MODULE: ./src/components/Layout.js
var Layout_jsx = external_react_default.a.createElement;

function Layout_extends() { Layout_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Layout_extends.apply(this, arguments); }







class Layout_Body extends external_react_default.a.Component {
  render() {
    return Layout_jsx(external_react_default.a.Fragment, null, Layout_jsx(external_react_helmet_["Helmet"], null, Layout_jsx("title", null, external_lodash_default.a.get(this.props, 'page.frontmatter.title', null)), Layout_jsx("meta", {
      charSet: "UTF-8"
    }), Layout_jsx("meta", {
      name: "viewport",
      content: "width=device-width, initialScale=1.0"
    }), Layout_jsx("meta", {
      httpEquiv: "X-UA-Compatible",
      content: "ie=edge"
    }), Layout_jsx("link", {
      rel: "stylesheet",
      href: "https://cdn.snipcart.com/themes/v3.0.18/default/snipcart.css"
    }), Layout_jsx("link", {
      rel: "icon",
      type: "image/png",
      href: Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(this.props, 'data.config.favicon', null))
    }), Layout_jsx("body", {
      className: external_lodash_default.a.get(this.props, 'page.frontmatter.layout', null) + '-template'
    })), Layout_jsx("div", {
      className: "site-wrapper"
    }, Layout_jsx(Header_Header, Layout_extends({}, this.props, {
      page: this.props.page,
      site: this.props
    })), this.props.children, Layout_jsx(Footer_Footer, Layout_extends({}, this.props, {
      page: this.props.page,
      site: this.props
    }))), Layout_jsx("div", {
      style: Object(utils["g" /* toStyleObj */])("display: none"),
      id: "template-params",
      "data-api-key": external_lodash_default.a.get(this.props, 'data.config.snipcart_api_key', null),
      "data-templates-url": Object(utils["h" /* withPrefix */])('js/snipcart-templates.vue')
    }));
  }

}
// CONCATENATED MODULE: ./src/components/NavCategories.js
var NavCategories_jsx = external_react_default.a.createElement;



class NavCategories_NavCategories extends external_react_default.a.Component {
  render() {
    let site = external_lodash_default.a.get(this.props, 'site', null);

    let page = external_lodash_default.a.get(this.props, 'page', null);

    let category_pages = external_lodash_default.a.orderBy(Object(utils["e" /* getPages */])(this.props.pages, '/category'), 'frontmatter.order');

    return NavCategories_jsx("ul", {
      className: "store__nav-items"
    }, external_lodash_default.a.map(category_pages, (item, item_idx) => {
      let isCurrentPage = external_lodash_default.a.get(page, '__metadata.urlPath', null) === external_lodash_default.a.get(item, '__metadata.urlPath', null) ? true : false;
      return NavCategories_jsx(external_react_default.a.Fragment, {
        key: item_idx + '.1'
      }, NavCategories_jsx("li", {
        key: item_idx,
        className: "store__nav-item"
      }, NavCategories_jsx(utils["a" /* Link */], {
        href: Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(item, '__metadata.urlPath', null)),
        className: Object(utils["b" /* classNames */])('store__nav-item-link', {
          'store__nav-item-link--active': isCurrentPage
        })
      }, external_lodash_default.a.get(item, 'frontmatter.title', null))));
    }));
  }

}
// CONCATENATED MODULE: ./src/components/ProductCard.js
var ProductCard_jsx = external_react_default.a.createElement;

function ProductCard_extends() { ProductCard_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ProductCard_extends.apply(this, arguments); }




class ProductCard_ProductCard extends external_react_default.a.Component {
  render() {
    let product_page = external_lodash_default.a.get(this.props, 'product_page', null);

    return ProductCard_jsx("li", {
      className: "product__card"
    }, ProductCard_jsx("figure", {
      className: "product__card__image"
    }, ProductCard_jsx(Picture_Picture, ProductCard_extends({}, this.props, {
      image: external_lodash_default.a.get(product_page, 'frontmatter.default_thumbnail_image', null),
      alt: external_lodash_default.a.get(product_page, 'frontmatter.title', null)
    }))), ProductCard_jsx("h2", {
      className: "product__card__title"
    }, external_lodash_default.a.get(product_page, 'frontmatter.title', null)));
  }

}
// CONCATENATED MODULE: ./src/components/PromotionSection.js
var PromotionSection_jsx = external_react_default.a.createElement;

function PromotionSection_extends() { PromotionSection_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PromotionSection_extends.apply(this, arguments); }





class PromotionSection_PromotionSection extends external_react_default.a.Component {
  render() {
    let section = external_lodash_default.a.get(this.props, 'section', null);

    return PromotionSection_jsx("section", {
      className: "content__row content__row--full-width content__row--mb-0",
      "data-id": external_lodash_default.a.get(section, 'section_id', null)
    }, PromotionSection_jsx("div", {
      className: "promo"
    }, PromotionSection_jsx(Picture_Picture, PromotionSection_extends({}, this.props, {
      image: external_lodash_default.a.get(section, 'image', null),
      alt: external_lodash_default.a.get(section, 'title', null)
    })), PromotionSection_jsx("div", {
      className: "promo__message-container",
      style: Object(utils["g" /* toStyleObj */])('background-image: url(\'' + Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(this.props, 'data.config.bg_image_product', null)) + '\')')
    }, PromotionSection_jsx("h2", {
      className: "promo__title"
    }, external_lodash_default.a.get(section, 'title', null)), PromotionSection_jsx("p", {
      className: "promo__subtitle"
    }, external_lodash_default.a.get(section, 'subtitle', null)), external_lodash_default.a.get(section, 'cta', null) && (() => {
      let cta_style = external_lodash_default.a.get(section, 'cta.style', null) || 'primary';
      return PromotionSection_jsx(utils["a" /* Link */], {
        className: Object(utils["b" /* classNames */])('link', {
          'link--promo--filled': cta_style === 'primary',
          'link--promo--transparent': cta_style === 'secondary',
          'link--promo--simple ': cta_style === 'link'
        }),
        href: external_lodash_default.a.get(section, 'cta.url', null)
      }, external_lodash_default.a.get(section, 'cta.title', null), PromotionSection_jsx("svg", {
        width: "26",
        height: "14",
        viewBox: "0 0 26 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, PromotionSection_jsx("path", {
        d: "M22.6819 6.07886H0V7.79048H22.8139L18.2402 12.3182L19.434 13.5L26 7L19.434 0.5L18.2402 1.68182L22.6819 6.07886Z",
        fill: "currentColor"
      })));
    })())));
  }

}
// CONCATENATED MODULE: ./src/components/StoreSection.js
var StoreSection_jsx = external_react_default.a.createElement;

function StoreSection_extends() { StoreSection_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return StoreSection_extends.apply(this, arguments); }






class StoreSection_StoreSection extends external_react_default.a.Component {
  render() {
    let page = external_lodash_default.a.get(this.props, 'page', null);

    let section = external_lodash_default.a.get(this.props, 'section', null);

    let category_url = external_lodash_default.a.get(this.props, 'category_url', null);

    let product_pages = external_lodash_default.a.orderBy(Object(utils["e" /* getPages */])(this.props.pages, '/products'), 'frontmatter.order');

    return StoreSection_jsx("section", {
      className: "content__row",
      "data-id": external_lodash_default.a.get(section, 'section_id', null)
    }, StoreSection_jsx("div", {
      className: "content__row content__row--direction-row store__head"
    }, StoreSection_jsx("h1", {
      className: "store__title"
    }, "All Products")), StoreSection_jsx("div", {
      className: "content__row store__container"
    }, StoreSection_jsx("nav", {
      className: "store__nav"
    }, StoreSection_jsx(NavCategories_NavCategories, StoreSection_extends({}, this.props, {
      page: page,
      site: this.props
    }))), StoreSection_jsx("section", {
      className: "store__products"
    }, StoreSection_jsx(ProductGrid_ProductGrid, StoreSection_extends({}, this.props, {
      product_pages: product_pages,
      category_url: category_url,
      cssClass: 'store__product-grid',
      site: this.props
    })))));
  }

}
// CONCATENATED MODULE: ./src/components/TestimonialsSection.js
var TestimonialsSection_jsx = external_react_default.a.createElement;


class TestimonialsSection_TestimonialsSection extends external_react_default.a.Component {
  render() {
    let section = external_lodash_default.a.get(this.props, 'section', null);

    let testimonials = external_lodash_default.a.get(section, 'testimonials', null);

    return TestimonialsSection_jsx("section", {
      className: "content__row",
      "data-id": external_lodash_default.a.get(section, 'section_id', null)
    }, TestimonialsSection_jsx("h2", {
      className: "content__row-title"
    }, "Testimonials"), TestimonialsSection_jsx("div", {
      className: "quotes"
    }, external_lodash_default.a.map(testimonials, (testimonial, testimonial_idx) => TestimonialsSection_jsx(external_react_default.a.Fragment, {
      key: testimonial_idx + '.2'
    }, TestimonialsSection_jsx("div", {
      key: testimonial_idx,
      className: "quotes__item"
    }, TestimonialsSection_jsx("svg", {
      className: "quotes__icon",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg"
    }, TestimonialsSection_jsx("path", {
      d: "M0 14.1818L4.57143 0H9.52381L5.71429 13.2893H9.52381V24H0V14.1818ZM14.4762 14.1818L19.0476 0H24L20.1905 13.2893H24V24H14.4762V14.1818Z"
    })), TestimonialsSection_jsx("div", {
      className: "quotes__text"
    }, external_lodash_default.a.get(testimonial, 'text', null)), TestimonialsSection_jsx("div", {
      className: "quotes__author"
    }, external_lodash_default.a.get(testimonial, 'author.name', null), TestimonialsSection_jsx("span", {
      className: "quotes__location"
    }, ",", external_lodash_default.a.get(testimonial, 'author.location', null)))), TestimonialsSection_jsx("div", {
      key: testimonial_idx + '.1',
      className: "quotes__separator"
    })))));
  }

}
// CONCATENATED MODULE: ./src/components/index.js






















/* harmony default export */ var components = ({
  BulletpointsSection: BulletpointsSection_BulletpointsSection,
  BuyButton: BuyButton_BuyButton,
  ContactSection: ContactSection_ContactSection,
  FaqSection: FaqSection_FaqSection,
  FeaturedCategoriesSection: FeaturedCategoriesSection_FeaturedCategoriesSection,
  FeaturedGrid: FeaturedGrid_FeaturedGrid,
  FeaturedProductsSection: FeaturedProductsSection_FeaturedProductsSection,
  Footer: Footer_Footer,
  Header: Header_Header,
  HeaderSection: HeaderSection_HeaderSection,
  HeroSection: HeroSection_HeroSection,
  Layout: Layout_Body,
  NavCategories: NavCategories_NavCategories,
  Picture: Picture_Picture,
  ProductCard: ProductCard_ProductCard,
  ProductGrid: ProductGrid_ProductGrid,
  ProductGridItem: ProductGridItem_ProductGridItem,
  PromotionSection: PromotionSection_PromotionSection,
  SmallBuyButton: SmallBuyButton_SmallBuyButton,
  StoreSection: StoreSection_StoreSection,
  TestimonialsSection: TestimonialsSection_TestimonialsSection
});
// CONCATENATED MODULE: ./src/layouts/advanced.js
var advanced_jsx = external_react_default.a.createElement;

function advanced_extends() { advanced_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return advanced_extends.apply(this, arguments); }




class advanced_Advanced extends external_react_default.a.Component {
  render() {
    return advanced_jsx(Layout_Body, this.props, advanced_jsx("main", {
      className: 'content' + (external_lodash_default.a.get(this.props, 'page.frontmatter.page_css_class', null) ? ' ' + external_lodash_default.a.get(this.props, 'page.frontmatter.page_css_class', null) : '')
    }, external_lodash_default.a.map(external_lodash_default.a.get(this.props, 'page.frontmatter.sections', null), (section, section_idx) => {
      let component = external_lodash_default.a.upperFirst(external_lodash_default.a.camelCase(external_lodash_default.a.get(section, 'type', null)));

      let Component = components[component];
      return advanced_jsx(Component, advanced_extends({
        key: section_idx
      }, this.props, {
        section: section,
        page: this.props.page,
        site: this.props
      }));
    })));
  }

}
// CONCATENATED MODULE: ./src/layouts/category.js
var category_jsx = external_react_default.a.createElement;

function category_extends() { category_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return category_extends.apply(this, arguments); }





class category_Category extends external_react_default.a.Component {
  render() {
    let store_page = Object(utils["c" /* getPage */])(this.props.pages, '/store');
    return category_jsx(Layout_Body, this.props, category_jsx("main", {
      className: 'content' + (external_lodash_default.a.get(store_page, 'frontmatter.page_css_class', null) ? ' ' + external_lodash_default.a.get(store_page, 'frontmatter.page_css_class', null) : '')
    }, external_lodash_default.a.map(external_lodash_default.a.get(store_page, 'frontmatter.sections', null), (section, section_idx) => external_lodash_default.a.get(section, 'type', null) === 'store_section' ? (() => {
      let component = external_lodash_default.a.upperFirst(external_lodash_default.a.camelCase(external_lodash_default.a.get(section, 'type', null)));

      let Component = components[component];
      return category_jsx(Component, category_extends({
        key: section_idx
      }, this.props, {
        section: section,
        page: this.props.page,
        category_url: external_lodash_default.a.get(this.props, 'page.__metadata.urlPath', null),
        site: this.props
      }));
    })() : (() => {
      let component = external_lodash_default.a.upperFirst(external_lodash_default.a.camelCase(external_lodash_default.a.get(section, 'type', null)));

      let Component = components[component];
      return (() => {
        let component = external_lodash_default.a.upperFirst(external_lodash_default.a.camelCase(external_lodash_default.a.get(section, 'type', null)));

        let Component = components[component];
        return category_jsx(Component, category_extends({
          key: section_idx
        }, this.props, {
          section: section,
          page: this.props.page,
          category_url: external_lodash_default.a.get(this.props, 'page.__metadata.urlPath', null),
          site: this.props
        }));
      })();
    })())));
  }

}
// CONCATENATED MODULE: ./src/layouts/home.js
var home_jsx = external_react_default.a.createElement;

function home_extends() { home_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return home_extends.apply(this, arguments); }




class home_Home extends external_react_default.a.Component {
  render() {
    return home_jsx(Layout_Body, this.props, home_jsx("main", {
      className: 'content' + (external_lodash_default.a.get(this.props, 'page.frontmatter.page_css_class', null) ? ' ' + external_lodash_default.a.get(this.props, 'page.frontmatter.page_css_class', null) : '')
    }, external_lodash_default.a.map(external_lodash_default.a.get(this.props, 'page.frontmatter.sections', null), (section, section_idx) => {
      let component = external_lodash_default.a.upperFirst(external_lodash_default.a.camelCase(external_lodash_default.a.get(section, 'type', null)));

      let Component = components[component];
      return home_jsx(Component, home_extends({
        key: section_idx
      }, this.props, {
        section: section,
        page: this.props.page,
        site: this.props
      }));
    })));
  }

}
// CONCATENATED MODULE: ./src/layouts/product.js
var product_jsx = external_react_default.a.createElement;

function product_extends() { product_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return product_extends.apply(this, arguments); }








class product_Product extends external_react_default.a.Component {
  render() {
    return product_jsx(Layout_Body, this.props, product_jsx("main", {
      className: "content"
    }, product_jsx("section", {
      className: "product content__row content__row--full-width"
    }, product_jsx("div", {
      className: "product__background-left-overlay"
    }), product_jsx("div", {
      className: "product__background-left",
      style: Object(utils["g" /* toStyleObj */])('background-image: url(\'' + Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(this.props, 'data.config.bg_image_primary', null)) + '\')')
    }), product_jsx("div", {
      className: "product__background-right",
      style: Object(utils["g" /* toStyleObj */])('background-image: url(\'' + Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(this.props, 'data.config.bg_image_secondary', null)) + '\')')
    }), product_jsx("div", {
      className: "product__header"
    }, product_jsx(utils["a" /* Link */], {
      href: Object(utils["h" /* withPrefix */])('/store'),
      className: "product__back-to-store-link"
    }, product_jsx("svg", {
      width: "20",
      height: "10",
      viewBox: "0 0 20 10",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, product_jsx("path", {
      d: "M2.73859 4.30914H19.75V5.59286H2.63961L6.06986 8.98864L5.17449 9.875L0.25 5L5.17449 0.125L6.06986 1.01136L2.73859 4.30914Z",
      fill: "currentColor"
    })), "see all products")), product_jsx("figure", {
      className: "product__figure"
    }, product_jsx(Picture_Picture, product_extends({}, this.props, {
      image: external_lodash_default.a.get(this.props, 'page.frontmatter.default_original_image', null),
      alt: external_lodash_default.a.get(this.props, 'page.frontmatter.title', null),
      cssClass: 'product__image'
    }))), product_jsx("div", {
      className: "product__details"
    }, product_jsx("h1", {
      className: "product__title"
    }, external_lodash_default.a.get(this.props, 'page.frontmatter.title', null)), external_lodash_default.a.get(this.props, 'page.frontmatter.category', null) && (() => {
      let category_page = Object(utils["d" /* getPageByFilePath */])(this.props.pages, external_lodash_default.a.get(this.props, 'page.frontmatter.category', null));
      return product_jsx("h2", {
        className: "product__category"
      }, product_jsx(utils["a" /* Link */], {
        href: Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(category_page, '__metadata.urlPath', null))
      }, " ", external_lodash_default.a.get(category_page, 'frontmatter.title', null), " "));
    })(), product_jsx("div", {
      className: "product__price"
    }, "$", external_lodash_default.a.get(this.props, 'page.frontmatter.price', null)), product_jsx("article", {
      className: "product__description"
    }, external_lodash_default.a.get(this.props, 'page.frontmatter.description', null)), product_jsx(BuyButton_BuyButton, product_extends({}, this.props, {
      product_page: this.props.page
    })))), external_lodash_default.a.get(this.props, 'page.frontmatter.category', null) && (() => {
      let product_pages = external_lodash_default.a.filter(external_lodash_default.a.orderBy(Object(utils["e" /* getPages */])(this.props.pages, '/products'), 'frontmatter.order'), item => external_lodash_default.a.get(item, 'frontmatter.id') != external_lodash_default.a.get(this.props, 'page.frontmatter.id', null));

      let category_page = Object(utils["d" /* getPageByFilePath */])(this.props.pages, external_lodash_default.a.get(this.props, 'page.frontmatter.category', null));
      return product_jsx("section", {
        className: "content__row"
      }, product_jsx("h2", {
        className: "content__row-title"
      }, "Related"), product_jsx(ProductGrid_ProductGrid, product_extends({}, this.props, {
        product_pages: product_pages,
        category_url: external_lodash_default.a.get(category_page, '__metadata.urlPath', null),
        cssClass: 'store__product-grid',
        site: this.props
      })));
    })(), product_jsx(utils["a" /* Link */], {
      href: Object(utils["h" /* withPrefix */])('/store'),
      className: "content__row content__row--full-width content__row--mb-0 product__back-to-store",
      style: Object(utils["g" /* toStyleObj */])('background-image: url(\'' + Object(utils["h" /* withPrefix */])(external_lodash_default.a.get(this.props, 'data.config.bg_image_product', null)) + '\')')
    }, product_jsx("svg", {
      width: "20",
      height: "10",
      viewBox: "0 0 20 10",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, product_jsx("path", {
      d: "M2.73859 4.30914H19.75V5.59286H2.63961L6.06986 8.98864L5.17449 9.875L0.25 5L5.17449 0.125L6.06986 1.01136L2.73859 4.30914Z",
      fill: "white"
    })), "see all products")));
  }

}
// CONCATENATED MODULE: ./src/layouts/store.js
var store_jsx = external_react_default.a.createElement;

function store_extends() { store_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return store_extends.apply(this, arguments); }




class store_Store extends external_react_default.a.Component {
  render() {
    return store_jsx(Layout_Body, this.props, store_jsx("main", {
      className: 'content' + (external_lodash_default.a.get(this.props, 'page.frontmatter.page_css_class', null) ? ' ' + external_lodash_default.a.get(this.props, 'page.frontmatter.page_css_class', null) : '')
    }, external_lodash_default.a.map(external_lodash_default.a.get(this.props, 'page.frontmatter.sections', null), (section, section_idx) => {
      let component = external_lodash_default.a.upperFirst(external_lodash_default.a.camelCase(external_lodash_default.a.get(section, 'type', null)));

      let Component = components[component];
      return store_jsx(Component, store_extends({
        key: section_idx
      }, this.props, {
        section: section,
        page: this.props.page,
        site: this.props
      }));
    })));
  }

}
// CONCATENATED MODULE: ./src/layouts/index.js






/* harmony default export */ var layouts = ({
  advanced: advanced_Advanced,
  category: category_Category,
  home: home_Home,
  product: product_Product,
  store: store_Store
});
// CONCATENATED MODULE: ./src/pages/[...slug].js
var _slug_jsx = external_react_default.a.createElement;






class _slug_Page extends external_react_default.a.Component {
  render() {
    // every page can have different layout, pick the layout based
    // on the model of the page (_type in Sanity CMS)
    const componentName = external_lodash_default.a.get(this.props, 'page.__metadata.modelName');

    const PageLayout = layouts[componentName];
    return _slug_jsx(PageLayout, this.props);
  }

}

async function getStaticPaths() {
  console.log('Page [...slug].js getStaticPaths'); // filter out the root page as it has its own page file `src/pages/index.js`

  const paths = await external_sourcebit_target_next_["sourcebitDataClient"].getStaticPaths();
  return {
    paths: external_lodash_default.a.reject(paths, path => path === '/'),
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  console.log('Page [...slug].js getStaticProps, params: ', params);
  const pagePath = '/' + params.slug.join('/');
  const props = await external_sourcebit_target_next_["sourcebitDataClient"].getStaticPropsForPageAtPath(pagePath);
  return {
    props
  };
}
/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (Object(with_remote_data_updates_["withRemoteDataUpdates"])(_slug_Page));

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7Qib":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ classNames; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ getPage; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ getPageByFilePath; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ getPages; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ markdownify; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ withPrefix; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ toStyleObj; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Link; });

// UNUSED EXPORTS: cycler, getData, htmlToReact, toUrl, pathJoin

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./src/utils/classNames.js
 // A simple wrapper around classNames to return null, if no classes were generated
// Otherwise, original classNames returns empty string which causes class="" to be generated

function classNames(...args) {
  return external_classnames_default.a.call(this, ...args) || null;
}
// CONCATENATED MODULE: ./src/utils/cycler.js
function cycler() {
  const args = Array.prototype.slice.call(arguments);
  let index = 0;
  return {
    next: () => args[index++ % args.length]
  };
}
;
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./src/utils/getPage.js

/**
 * Get the page at the provided `urlPath`.
 *
 * @param {Array} pages Array of page objects. All pages must have '__metadata.urlPath' field.
 * @param {string} urlPath The url path to find the page by
 * @return {Object}
 */

function getPage(pages, urlPath) {
  urlPath = external_lodash_default.a.trim(urlPath, '/');
  return external_lodash_default.a.find(pages, page => {
    const pageUrlPath = external_lodash_default.a.trim(external_lodash_default.a.get(page, '__metadata.urlPath'), '/');

    return urlPath === pageUrlPath;
  });
}
// CONCATENATED MODULE: ./src/utils/getPageByFilePath.js

/**
 * Get the page at the provided `filePath`.
 *
 * @param {Array} pages Array of page objects. All pages must have '__metadata.urlPath' field.
 * @param {string} filePath The file path to find the page by
 * @return {Object}
 */

function getPageByFilePath(pages, filePath) {
  filePath = external_lodash_default.a.trim(filePath, '.md');
  const urlPath = filePath.replace(/^\/?content\/pages\//, '');
  return external_lodash_default.a.find(pages, page => {
    const pageUrlPath = external_lodash_default.a.trim(external_lodash_default.a.get(page, '__metadata.urlPath'), '/');

    return urlPath === pageUrlPath;
  });
}
// CONCATENATED MODULE: ./src/utils/getPages.js

/**
 * Get all the pages located under the provided `urlPath`, not including the
 * index page. I.e.: All pages having their URLs start with `urlPath` excluding
 * the page having its URL equal to `urlPath`.
 *
 * @example
 * pages => [
 *   {'__metadata.urlPath': '/'},
 *   {'__metadata.urlPath': '/about'},
 *   {'__metadata.urlPath': '/posts'},
 *   {'__metadata.urlPath': '/posts/hello'},
 *   {'__metadata.urlPath': '/posts/world'}
 * ]
 *
 * getPages(pages, /posts')
 * => [
 *   {'__metadata.urlPath': '/posts/hello'},
 *   {'__metadata.urlPath': '/posts/world'}
 * ]
 *
 *
 * @param {Array} pages Array of page objects. All pages must have '__metadata.urlPath' field.
 * @param {string} urlPath The url path to filter pages by
 * @return {Array}
 */

function getPages(pages, urlPath) {
  urlPath = external_lodash_default.a.trim(urlPath, '/');

  const urlPathParts = external_lodash_default.a.split(urlPath, '/');

  return external_lodash_default.a.filter(pages, page => {
    const pageUrlPath = external_lodash_default.a.trim(external_lodash_default.a.get(page, '__metadata.urlPath'), '/');

    const pageUrlParts = external_lodash_default.a.split(pageUrlPath, '/');

    return pageUrlParts.length > urlPathParts.length && external_lodash_default.a.isEqual(pageUrlParts.slice(0, urlPathParts.length), urlPathParts);
  });
}
// CONCATENATED MODULE: ./src/utils/getData.js

function getData(props, dataPath) {
  dataPath = external_lodash_default.a.trim(dataPath, '/');

  if (external_lodash_default.a.startsWith(dataPath, 'content/data/')) {
    dataPath = dataPath.replace('content/data/', '');
  } // remove extension


  dataPath = dataPath.replace(/\.\w+$/, '');
  const path = dataPath.split('/');
  return external_lodash_default.a.get(props, path);
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-html-parser"
var external_react_html_parser_ = __webpack_require__("gifY");
var external_react_html_parser_default = /*#__PURE__*/__webpack_require__.n(external_react_html_parser_);

// EXTERNAL MODULE: external "react-script-tag"
var external_react_script_tag_ = __webpack_require__("MAkM");
var external_react_script_tag_default = /*#__PURE__*/__webpack_require__.n(external_react_script_tag_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/utils/link.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Link(_ref) {
  let {
    children,
    href
  } = _ref,
      other = _objectWithoutProperties(_ref, ["children", "href"]);

  // Pass Any internal link to Next.js Link, for anything else, use <a> tag
  const internal = /^\/(?!\/)/.test(href);

  if (internal) {
    // For root page, use index.js, for rest use [...slug].js
    const page = href === '/' ? '/' : '/[...slug]';
    return __jsx(link_default.a, {
      href: page,
      as: href
    }, __jsx("a", other, children));
  }

  return __jsx("a", _extends({
    href: href
  }, other), children);
}
// CONCATENATED MODULE: ./src/utils/htmlToReact.js
var htmlToReact_jsx = external_react_default.a.createElement;

function htmlToReact_extends() { htmlToReact_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return htmlToReact_extends.apply(this, arguments); }







const convertChildren = (children, index) => external_lodash_default.a.map(children, childNode => Object(external_react_html_parser_["convertNodeToElement"])(childNode, index, external_lodash_default.a.noop()));

function htmlToReact(html) {
  if (!html) {
    return null;
  }

  return external_react_html_parser_default()(html, {
    transform: (node, index) => {
      if (node.type === 'script') {
        if (!external_lodash_default.a.isEmpty(node.children)) {
          return htmlToReact_jsx(external_react_script_tag_default.a, htmlToReact_extends({
            key: index
          }, node.attribs), convertChildren(node.children, index));
        } else {
          return htmlToReact_jsx(external_react_script_tag_default.a, htmlToReact_extends({
            key: index
          }, node.attribs));
        }
      } else if (node.type === 'tag' && node.name === 'a') {
        const href = node.attribs.href;

        const props = external_lodash_default.a.omit(node.attribs, 'href'); // use Link only if there are no custom attributes like style, class, and what's not that might break react


        if (external_lodash_default.a.isEmpty(props)) {
          return htmlToReact_jsx(Link, htmlToReact_extends({
            key: index,
            href: href
          }, props), convertChildren(node.children, index));
        }
      }
    }
  });
}
;
// CONCATENATED MODULE: ./src/utils/toUrl.js


function toUrl(pages, pagePath) {
  if (external_lodash_default.a.startsWith(pagePath, '#')) {
    return pagePath;
  } else {
    // remove extension
    pagePath = pagePath.replace(/\.\w+$/, '');
    const page = getPage(pages, pagePath);

    if (!page) {
      throw new Error('could not find page with path: ' + pagePath);
    }

    return page.url;
  }
}
// CONCATENATED MODULE: ./src/utils/pathJoin.js

function pathJoin(...pathParts) {
  const result = external_lodash_default.a.compact(pathParts).join('/').replace(/\/{2,}/g, '/');

  return result || '.';
}
// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__("HWFp");
var external_marked_default = /*#__PURE__*/__webpack_require__.n(external_marked_);

// CONCATENATED MODULE: ./src/utils/markdownify.js


function markdownify(markdown) {
  if (!markdown) {
    return null;
  }

  return htmlToReact(external_marked_default()(markdown));
}
;
// CONCATENATED MODULE: ./src/utils/withPrefix.js
const _ = __webpack_require__("YLtl");

const pathPrefix = __webpack_require__("jWCw").path_prefix;

function withPrefix(url) {
  if (!url) {
    return url;
  }

  if (_.startsWith(url, '#') || _.startsWith(url, 'http://') || _.startsWith(url, 'https://')) {
    return url;
  }

  const basePath = _.trim(pathPrefix, '/');

  return '/' + _.compact([basePath, _.trimStart(url, '/')]).join('/');
}
// CONCATENATED MODULE: ./src/utils/toStyleObj.js

function toStyleObj(styleAttr) {
  return styleAttr.split(';').reduce((accumulator, pair) => {
    pair = pair.trim();

    if (external_lodash_default.a.isEmpty(pair)) {
      return accumulator;
    }

    let index = pair.indexOf(':');

    if (index === -1) {
      throw 'could not split style attribute into names and values';
    }

    let name = external_lodash_default.a.camelCase(pair.substring(0, index).trim());

    accumulator[name] = pair.substring(index + 1).trim();
    return accumulator;
  }, {});
}
// CONCATENATED MODULE: ./src/utils/index.js














/***/ }),

/***/ "HWFp":
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "MAkM":
/***/ (function(module, exports) {

module.exports = require("react-script-tag");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RXBc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sourcebit_target_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bdDJ");
/* harmony import */ var sourcebit_target_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sourcebit_target_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slug___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5lhB");


/**
 * In next.js we can't use `src/pages/[...slug].js` for root site page `/`.
 * Instead, we import and export the [...slug].js while overriding its getStaticProps.
 */


async function getStaticProps({
  params
}) {
  console.log('Page [index] getStaticProps, params: ', params);
  const props = await sourcebit_target_next__WEBPACK_IMPORTED_MODULE_1__["sourcebitDataClient"].getStaticPropsForPageAtPath('/');
  return {
    props
  };
}
/* harmony default export */ __webpack_exports__["default"] = (_slug___WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  true ? path => {
  if (/\.[^/]+\/?$/.test(path)) {
    return removePathTrailingSlash(path);
  } else if (path.endsWith('/')) {
    return path;
  } else {
    return path + '/';
  }
} : undefined;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "bLNz":
/***/ (function(module, exports) {

module.exports = require("sourcebit-target-next/with-remote-data-updates");

/***/ }),

/***/ "bdDJ":
/***/ (function(module, exports) {

module.exports = require("sourcebit-target-next");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _utils = __webpack_require__("kYf9");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return _react.default.cloneElement(child, childProps);
}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _querystring = __webpack_require__("3WeD");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _normalizeTrailingSlash = __webpack_require__("X24+");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (false) {}

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "gifY":
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "jWCw":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Planty\",\"path_prefix\":\"/\",\"favicon\":\"images/favicon.png\",\"logo_dark\":\"images/logo.svg\",\"logo_light\":\"images/logo-white.svg\",\"hamburger_background_image\":\"/images/leaf-light-grey.svg\",\"bg_image_primary\":\"/images/header.jpg\",\"bg_image_secondary\":\"/images/leaf-light-grey.svg\",\"bg_image_product\":\"/images/leaf.svg\",\"snipcart_api_key\":\"\",\"footer_text\":\"Copyright 2021 Planty Inc. All rights reserved.\",\"palette\":\"green\",\"palettes\":{\"green\":{\"sass\":{\"default\":\"#FFFFFF\",\"light\":\"#F0F0F0\",\"medium\":\"#6B797A\",\"dark\":\"#384647\",\"active\":\"#88DD9B\",\"active_light\":\"#C0FDB6\",\"active_medium\":\"#5C9174\",\"active_dark\":\"#547567\",\"dark_grey\":\"#273132\",\"light_grey\":\"#6B797A\",\"bg_image_cart\":\"/images/leaf-light-grey.svg\"}}},\"main_menu\":[{\"title\":\"Store\",\"url\":\"/store\",\"style\":\"link\"},{\"title\":\"About\",\"url\":\"/about\",\"style\":\"link\"},{\"title\":\"FAQ\",\"url\":\"/faq\",\"style\":\"link\"}]}");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })

/******/ });