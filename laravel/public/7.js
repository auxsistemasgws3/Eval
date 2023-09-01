(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "../coreui/src/utils/validators.js":
/*!*****************************************!*\
  !*** ../coreui/src/utils/validators.js ***!
  \*****************************************/
/*! exports provided: required, numeric, maxLength, minLength, requiredIf, email, image, pdf, fileSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numeric", function() { return numeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLength", function() { return maxLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minLength", function() { return minLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredIf", function() { return requiredIf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "image", function() { return image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pdf", function() { return pdf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileSize", function() { return fileSize; });
/* harmony import */ var _withI18nMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withI18nMessage */ "../coreui/src/utils/withI18nMessage.js");
/* harmony import */ var _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vuelidate/validators */ "../coreui/node_modules/@vuelidate/validators/dist/index.esm.js");


var required = Object(_withI18nMessage__WEBPACK_IMPORTED_MODULE_0__["withI18nMessage"])(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["required"]);
var numeric = Object(_withI18nMessage__WEBPACK_IMPORTED_MODULE_0__["withI18nMessage"])(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["numeric"]); // export const maxLengthC = withI18nMessage(validators.maxLength(max))

var maxLength = function maxLength(max) {
  return Object(_withI18nMessage__WEBPACK_IMPORTED_MODULE_0__["withI18nMessage"])(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"](max));
};
var minLength = function minLength(min) {
  return Object(_withI18nMessage__WEBPACK_IMPORTED_MODULE_0__["withI18nMessage"])(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"](min));
};
var requiredIf = function requiredIf(func) {
  return Object(_withI18nMessage__WEBPACK_IMPORTED_MODULE_0__["withI18nMessage"])(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["requiredIf"](func));
};
var email = Object(_withI18nMessage__WEBPACK_IMPORTED_MODULE_0__["withI18nMessage"])(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["email"]);
var image = Object(_withI18nMessage__WEBPACK_IMPORTED_MODULE_0__["withI18nMessage"])(function (value, vm) {
  if (!value) {
    return true;
  }

  return /\/(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(value.type);
});
var pdf = Object(_withI18nMessage__WEBPACK_IMPORTED_MODULE_0__["withI18nMessage"])(function (value, vm) {
  if (!value) {
    return true;
  }

  return /\/(pdf)$/i.test(value.type);
});
var fileSize = Object(_withI18nMessage__WEBPACK_IMPORTED_MODULE_0__["withI18nMessage"])(function (value, vm) {
  if (!value) {
    return true;
  }

  return value.size < 1024 * 1024 * 25;
}); // export const fileSize = withI18nMessage(validators.helpers.withParams(options, value => {
//     console.log(value)
//     if (!value) {
//       return true
//     }
//     const size = value.size ;
//     return size <= (1024 * 1024 * 25);
//   }));

/***/ }),

/***/ "../coreui/src/utils/withI18nMessage.js":
/*!**********************************************!*\
  !*** ../coreui/src/utils/withI18nMessage.js ***!
  \**********************************************/
/*! exports provided: withI18nMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withI18nMessage", function() { return withI18nMessage; });
/* harmony import */ var _vuelidate_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vuelidate/validators */ "../coreui/node_modules/@vuelidate/validators/dist/index.esm.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../i18n */ "../coreui/src/i18n.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @/utils/withI18nMessage.js

 // export const withI18nMessage = (validator) => helpers.withMessage
// (
//   (props) => 
//   i18n.t(`message.required`, {  property: props.$property, }),
//   validator
// )

var withI18nMessage = function withI18nMessage(validator) {
  return _vuelidate_validators__WEBPACK_IMPORTED_MODULE_0__["helpers"].withMessage(function (props) {
    return (// {
      //   console.log(props)
      _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t("validations.".concat(props.$validator), _objectSpread({
        model: props.$model,
        property: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t("fields.".concat(props.$property))
      }, props.$params))
    );
  } // }
  , validator);
};

/***/ }),

/***/ "../coreui/src/views/base/Cards.vue":
/*!******************************************!*\
  !*** ../coreui/src/views/base/Cards.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cards_vue_vue_type_template_id_43e8910f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cards.vue?vue&type=template&id=43e8910f& */ "../coreui/src/views/base/Cards.vue?vue&type=template&id=43e8910f&");
/* harmony import */ var _Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards.vue?vue&type=script&lang=js& */ "../coreui/src/views/base/Cards.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cards_vue_vue_type_template_id_43e8910f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cards_vue_vue_type_template_id_43e8910f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/base/Cards.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/base/Cards.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ../coreui/src/views/base/Cards.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./Cards.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/base/Cards.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/base/Cards.vue?vue&type=template&id=43e8910f&":
/*!*************************************************************************!*\
  !*** ../coreui/src/views/base/Cards.vue?vue&type=template&id=43e8910f& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_43e8910f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./Cards.vue?vue&type=template&id=43e8910f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/base/Cards.vue?vue&type=template&id=43e8910f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_43e8910f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_43e8910f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../coreui/src/views/settings/Users.vue":
/*!**********************************************!*\
  !*** ../coreui/src/views/settings/Users.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_060b8b06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=060b8b06& */ "../coreui/src/views/settings/Users.vue?vue&type=template&id=060b8b06&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "../coreui/src/views/settings/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_060b8b06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_060b8b06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/settings/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/settings/Users.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ../coreui/src/views/settings/Users.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/settings/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/settings/Users.vue?vue&type=template&id=060b8b06&":
/*!*****************************************************************************!*\
  !*** ../coreui/src/views/settings/Users.vue?vue&type=template&id=060b8b06& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_060b8b06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=060b8b06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/settings/Users.vue?vue&type=template&id=060b8b06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_060b8b06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_060b8b06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/base/Cards.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/base/Cards.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Cards',
  data: function data() {
    return {
      show: true,
      isCollapsed: true,
      loremIpsum: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/settings/Users.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/settings/Users.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../coreui/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validators */ "../coreui/src/utils/validators.js");
/* harmony import */ var _vuelidate_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vuelidate/validators */ "../coreui/node_modules/@vuelidate/validators/dist/index.esm.js");
/* harmony import */ var _vuelidate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vuelidate/core */ "../coreui/node_modules/@vuelidate/core/dist/index.esm.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons */ "../coreui/node_modules/@coreui/icons/js/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "../coreui/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base_Cards_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/Cards.vue */ "../coreui/src/views/base/Cards.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







var fields = [{
  key: "nombre_completo",
  label: "Nombre completo",
  _style: "min-width:200px"
}, {
  key: "puesto",
  label: "Puesto",
  _style: "min-width:100px;"
}, {
  key: "email",
  label: "Correo",
  _style: "min-width:100px;"
}, {
  key: "menuroles",
  label: "Permisos",
  _style: "min-width:100px;"
}, {
  key: "sucursal_desc",
  label: "Sucursal",
  _style: "min-width:100px;"
},
/* { key: "comision_porcentaje", label: "Comisión" }, */
{
  key: "show_details",
  label: "",
  _style: "width:1%",
  sorter: false,
  filter: false
}];
var fields2 = [{
  key: "name",
  label: "Nombre Completo",
  _style: "min-width:200px"
}, {
  key: "email",
  label: "Email",
  _style: "min-width:100px;"
}];
var fields3 = [{
  key: "value",
  label: "Numero de departamento",
  _style: "min-width:200px"
}, {
  key: "label",
  label: "Departamento a Evaluar",
  _style: "min-width:200px"
}, {
  key: "show_checkbox_usuariosEval",
  label: "Habilitar",
  _style: "width:1%",
  sorter: false,
  filter: false
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdvancedTables",
  moodGood: _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["cilMoodGood"],
  plusIcon: _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["cilPlus"],
  User: {
    id: "",
    name: "",
    correo_personal: "",
    correo_empresarial: "",
    email: "",
    menuroles: "",
    status: "",
    primer_apellido: "",
    segundo_apellido: "",
    no_empleado: "",
    puesto: "",
    fecha_ingreso: "",
    fecha_nacimiento: "",
    telefono: "",
    ext: "",
    estatus: "",
    usuario_id: "",
    sucursal_id: "",
    rol_id: "",
    password: "",
    password_confirmate: "",
    id_departamento: "",
    id_empresa: "",
    jefe_inmediato: "",
    areasventa: [],
    aresas_venta: [],
    //num_departamentos_evaluar:"",
    //departamento_Evaluar:"",
    comision_porcentaje: "",
    comision_monto: ""
  },
  data: function data() {
    return {
      User: {
        id: "",
        name: "",
        correo_personal: "",
        correo_empresarial: "",
        email: "",
        menuroles: "",
        status: "",
        primer_apellido: "",
        segundo_apellido: "",
        no_empleado: "",
        puesto: "",
        fecha_ingreso: "",
        fecha_nacimiento: "",
        telefono: "",
        ext: "",
        estatus: "",
        usuario_id: "",
        sucursal_id: "",
        rol_id: "",
        password: "",
        password_confirmate: "",
        id_departamento: "",
        id_empresa: "",
        jefe_inmediato: "",
        areasventa: [],
        aresas_venta: [],
        //num_departamentos_evaluar:"",
        //departamento_Evaluar:"",
        comision_porcentaje: "",
        comision_monto: ""
      },
      moneda: "",
      estatus: [],
      sucursales: [],
      departamentos: [],
      empresa: [],
      jefeInmediato: [],
      roles: [],
      areasventa: [],
      departamentos_Evaluados: [],
      items: [],
      items2: [],
      idx: 0,
      isTouched: false,
      loading: true,
      user: this.$options.User,
      editModal: false,
      setPassword: true,
      action: this.$t("titles.create"),
      fields: fields,
      fields2: fields2,
      fields3: fields3,
      details: [],
      collapseDuration: 0,
      modalUsuariosScontestar: false,
      departamentosEvalUsuario: []
    };
  },
  computed: {
    isInvalid: function isInvalid() {
      return this.isTouched && this.user.areas_ventas.length === 0 && (this.user.rol_id == 7 || this.user.rol_id == 8);
    }
  },
  validations: function validations() {
    var _this = this;

    return {
      user: {
        name: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(50),
          $autoDirty: true
        },
        email: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          email: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["email"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(50),
          $autoDirty: true
        },
        correo_empresarial: {
          email: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["email"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(50),
          $autoDirty: true
        },
        correo_personal: {
          email: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["email"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(50),
          $autoDirty: true
        },
        primer_apellido: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(50),
          $autoDirty: true
        },
        segundo_apellido: {
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(50),
          $autoDirty: true
        },
        puesto: {
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(50),
          $autoDirty: true
        },
        no_empleado: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          $autoDirty: true
        },
        fecha_ingreso: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          $autoDirty: true
        },
        fecha_nacimiento: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          $autoDirty: true
        },
        telefono: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(15),
          $autoDirty: true
        },
        sucursal_id: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          $autoDirty: true
        },
        id_departamento: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          $autoDirty: true
        },
        id_empresa: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          $autoDirty: true
        },
        jefe_inmediato: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          $autoDirty: true
        },
        rol_id: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          $autoDirty: true
        },
        //departamentos_Evaluar:{required, $autoDirty:true},
        password: {
          required: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_2__["requiredIf"])(function () {
            return _this.setPassword;
          }),
          $autoDirty: true
        },
        password_confirmate: {
          required: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_2__["requiredIf"])(function () {
            return _this.setPassword;
          }),
          sameAs: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_2__["sameAs"])(this.user.password),
          $autoDirty: true
        }
      }
    };
  },
  setup: function setup() {
    return {
      v$: Object(_vuelidate_core__WEBPACK_IMPORTED_MODULE_3__["useVuelidate"])({
        $stopPropagation: true
      })
    };
  },
  methods: {
    index: function index() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/user?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data); // console.log(departamentos_Evaluar.value);

        self.estatus = response.data.estatus;
        self.sucursales = response.data.sucursal;
        self.roles = response.data.roles;
        self.areasventa = response.data.areasventa;
        self.empresa = response.data.empresa; //Funcion para evaluar cada elemento
        // departamentos_Evaluar.forEach(element => {
        //   self.element = document.getElementById(element.id).checked;
        //   if (self.element) {
        //     self.element = 1
        //   } else {
        //     self.element = 0
        //   }
        // });  

        /* self.items2 = response.data.usuariosSinContestar;
        console.log(self.items2); */
        // console.log(departamentos_Evaluar);
        // self.departamentos_Evaluados = response.data.departamento_Evaluar

        self.items2 = response.data.usuariosSinContestar.map(function (item) {
          return _objectSpread(_objectSpread({}, item), {}, {
            name: item.name,
            email: item.email
          });
        });
        var seleccionados = [];
        self.departamentos = response.data.departamentos;
        self.items = response.data.usuarios;
        self.jefeInmediato = response.data.jefeInmediato;
        self.formatData();
      })["catch"](function (error) {
        if (error.response.status === 401) {
          self.$router.push({
            path: "/login"
          });
        } else {
          self.$toast.error(self.$t("messages.error"));
        }
      });
    },
    save_departamentos_evaluar: function save_departamentos_evaluar(x) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = _this2;
                self.departamento_Evaluar[x] = document.getElementById("saveDepartamentoEv" + index).checked;

                if (self.departamento_Evaluar) {
                  self.departamento_Evaluar = 1;
                } else {
                  self.departamento_Evaluar = 0;
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getUser: function getUser($id, idx) {
      var self = this;
      self.idx = idx;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/user/" + $id + "?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.action = self.$t("titles.update");
        self.editModal = true;
        self.setPassword = false;
        var user = response.data.user;
        self.user = {
          id: user.id,
          name: user.name,
          email: user.email,
          correo_empresarial: user.correo_empresarial,
          correo_personal: user.correo_personal,
          menuroles: user.menuroles,
          status: user.status,
          primer_apellido: user.primer_apellido,
          segundo_apellido: user.segundo_apellido,
          no_empleado: user.no_empleado,
          puesto: user.puesto,
          fecha_ingreso: moment(String(user.fecha_ingreso)).format("YYYY-MM-DD"),
          fecha_nacimiento: moment(String(user.fecha_nacimiento)).format("YYYY-MM-DD"),
          telefono: user.telefono,
          ext: user.ext,
          estatus: user.estatus,
          usuario_id: user.usuario_id,
          sucursal_id: user.sucursal_id,
          rol_id: user.rol_id,
          password: "",
          password_confirmate: "",
          id_departamento: user.id_departamento,
          id_empresa: user.id_empresa,
          jefe_inmediato: user.jefe_inmediato,
          areasventa: user.areasventa,
          areas_ventas: user.areas_ventas,
          comision_porcentaje: user.comision_porcentaje,
          comision_monto: user.comision_monto,
          departamentos_Evaluar: user.departamentos_Evaluar
        };
        self.departamentosEvalUsuario = response.data.departamentosEvalUsuario;
        self.departamentos = self.departamentos.map(function (item) {
          var aux = false;
          self.departamentosEvalUsuario.forEach(function (element) {
            if (element.id_Departamento == item.value) {
              aux = !aux;
            }
          });
          return _objectSpread(_objectSpread({}, item), {}, {
            checado: aux
          });
        });
        self.user.password = "";
        self.user.password_confirmate = "";
        self.user.id = $id;
        self.isTouched = true;
        self.isInvalid;
      })["catch"](function (error) {
        if (error.response.status === 401) {
          self.$router.push({
            path: "/login"
          });
        } else {
          self.$toast.error(self.$t("messages.error"));
        }
      });
    },
    create: function create() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var self, isUpdate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = _this3;

                _this3.v$.$touch();

                _this3.isInvalid;
                console.log(self.v$);

                if (!_this3.v$.$error) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return");

              case 6:
                _context2.next = 8;
                return self.$swal({
                  title: self.$t("¿Esta seguro de agregar este usuario?"),
                  text: self.$t("messages.question.status.description"),
                  icon: "warning",
                  showCancelButton: true
                }).then(function (result) {
                  return result.isConfirmed;
                });

              case 8:
                isUpdate = _context2.sent;

                if (isUpdate) {
                  axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(_this3.$apiAdress + "/api/user/create" + "?token=" + localStorage.getItem("api_token"), {
                    name: self.user.name,
                    email: self.user.email,
                    correo_empresarial: self.user.correo_empresarial,
                    correo_personal: self.user.correo_personal,
                    menuroles: self.user.menuroles,
                    status: self.user.status,
                    primer_apellido: self.user.primer_apellido,
                    segundo_apellido: self.user.segundo_apellido,
                    numero_empleado: self.user.no_empleado,
                    puesto: self.user.puesto,
                    fecha_ingreso: self.user.fecha_ingreso,
                    fecha_nacimiento: self.user.fecha_nacimiento,
                    telefono: self.user.telefono,
                    departamentos_Evaluar: self.departamentos,
                    ext: self.user.ext,
                    usuario_id: self.user.usuario_id,
                    sucursal: self.user.sucursal_id,
                    id_departamento: self.user.id_departamento,
                    id_empresa: self.user.id_empresa,
                    jefe_inmediato: self.user.jefe_inmediato,
                    rol: self.user.rol_id,
                    password: self.user.password,
                    password_confirmate: self.user.password_confirmate,
                    areas_ventas: self.user.areas_ventas,
                    comision_porcentaje: self.user.comision_porcentaje,
                    comision_monto: self.user.comision_monto,
                    estatus: 1
                  }).then(function (response) {
                    var data = response.data;
                    self.items.push(data);
                    self.formatData();
                    self.closeModal();
                    self.$toast.success(self.$t("messages.insert"));
                  })["catch"](function (error) {
                    if (error.response.data.message == "The given data was invalid.") {
                      self.message = "";
                      self.errors = error.response.data.errors;

                      for (var key in error.response.data.errors) {
                        if (error.response.data.errors.hasOwnProperty(key)) {
                          self.message += error.response.data.errors[key][0] + "  ";
                        }
                      }

                      self.$toast.error(self.message);
                    } else if (error.response.status === 401) {
                      self.$router.push({
                        path: "/login"
                      });
                    } else {
                      self.$toast.error(self.$t("messages.error"));
                    }
                  });
                }

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    update: function update() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var self, isUpdate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                self = _this4;

                _this4.v$.$touch(); //console.log(document.getElementById("depEval4").checked)


                console.log("Checalo aqui, baboso");
                console.log(self.departamentos);

                if (!_this4.v$.$error) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return");

              case 6:
                _context3.next = 8;
                return self.$swal({
                  title: self.$t("¿Esta seguro de editar este usuario?"),
                  text: self.$t("messages.question.status.description"),
                  icon: "warning",
                  showCancelButton: true
                }).then(function (result) {
                  return result.isConfirmed;
                });

              case 8:
                isUpdate = _context3.sent;

                if (isUpdate) {
                  axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(_this4.$apiAdress + "/api/user/update" + "?token=" + localStorage.getItem("api_token"), {
                    numero_empleado: self.user.no_empleado,
                    puesto: self.user.puesto,
                    fecha_ingreso: self.user.fecha_ingreso,
                    fecha_nacimiento: self.user.fecha_nacimiento,
                    id_departamento: self.user.id_departamento,
                    id_empresa: self.user.id_empresa,
                    jefe_inmediato: self.user.jefe_inmediato,
                    id: self.user.id,
                    name: self.user.name,
                    email: self.user.email,
                    correo_empresarial: self.user.correo_empresarial,
                    correo_personal: self.user.correo_personal,
                    menuroles: self.user.menuroles,
                    status: self.user.status,
                    primer_apellido: self.user.primer_apellido,
                    segundo_apellido: self.user.segundo_apellido,
                    departamentos_Evaluar: self.departamentos,
                    telefono: self.user.telefono,
                    ext: self.user.ext,
                    usuario_id: self.user.usuario_id,
                    sucursal: self.user.sucursal_id,
                    rol: self.user.rol_id,
                    password: self.user.password,
                    password_confirmate: self.user.password_confirmate,
                    areas_ventas: self.user.areas_ventas,
                    comision_porcentaje: self.user.comision_porcentaje,
                    comision_monto: self.user.comision_monto,
                    estatus: "1"
                  }).then(function (response) {
                    var data = response.data;
                    self.items[self.idx] = data;
                    self.formatData();
                    self.closeModal();
                    self.$toast.success(self.$t("messages.update"));
                  })["catch"](function (error) {
                    if (error.response && error.response.data.message == "The given data was invalid.") {
                      self.message = "";

                      for (var key in error.response.data.errors) {
                        if (error.response.data.errors.hasOwnProperty(key)) {
                          self.message += error.response.data.errors[key][0] + "  ";
                        }
                      }

                      self.$toast.error(self.message);
                    } else if (error.response.status === 401) {
                      self.$router.push({
                        path: "/login"
                      });
                    } else {
                      self.$toast.error(self.$t("messages.error"));
                    }
                  });
                }

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    baja: function baja() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var self, isUpdate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                self = _this5;

                _this5.v$.$touch();

                if (!_this5.v$.$error) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt("return");

              case 4:
                _context4.next = 6;
                return self.$swal({
                  title: self.$t("¿Esta seguro que deseas dar de BAJA este usuario?"),
                  text: self.$t("messages.question.status.description"),
                  icon: "warning",
                  showCancelButton: true
                }).then(function (result) {
                  return result.isConfirmed;
                });

              case 6:
                isUpdate = _context4.sent;

                if (isUpdate) {
                  axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(_this5.$apiAdress + "/api/user/update" + "?token=" + localStorage.getItem("api_token"), {
                    numero_empleado: self.user.no_empleado,
                    puesto: self.user.puesto,
                    fecha_ingreso: self.user.fecha_ingreso,
                    fecha_nacimiento: self.user.fecha_nacimiento,
                    id_departamento: self.user.id_departamento,
                    id_empresa: self.user.id_empresa,
                    jefe_inmediato: self.user.id,
                    id: self.user.id,
                    name: self.user.name,
                    email: self.user.id + "_" + self.user.no_empleado + "@grupowattsolar.com",
                    correo_empresarial: self.correo_empresarial,
                    correo_personal: self.correo_personal,
                    menuroles: self.user.menuroles,
                    status: self.user.status,
                    primer_apellido: self.user.primer_apellido,
                    segundo_apellido: self.user.segundo_apellido,
                    departamentos_Evaluar: self.user.departamentos_Evaluar,
                    telefono: "614" + self.user.id + "0000",
                    ext: self.user.ext,
                    usuario_id: self.user.usuario_id,
                    sucursal: self.user.sucursal_id,
                    rol: self.user.rol_id,
                    password: self.user.password,
                    password_confirmate: self.user.password_confirmate,
                    areas_ventas: self.user.areas_ventas,
                    comision_porcentaje: self.user.comision_porcentaje,
                    comision_monto: self.user.comision_monto,
                    estatus: "0"
                  }).then(function (response) {
                    var data = response.data;
                    self.items[self.idx] = data;
                    self.formatData();
                    self.closeModal();
                    self.$toast.success(self.$t("messages.update"));
                  })["catch"](function (error) {
                    if (error.response && error.response.data.message == "The given data was invalid.") {
                      self.message = "";

                      for (var key in error.response.data.errors) {
                        if (error.response.data.errors.hasOwnProperty(key)) {
                          self.message += error.response.data.errors[key][0] + "  ";
                        }
                      }

                      self.$toast.error(self.message);
                    } else if (error.response.status === 401) {
                      self.$router.push({
                        path: "/login"
                      });
                    } else {
                      self.$toast.error(self.$t("messages.error"));
                    }
                  });
                }

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    formatData: function formatData() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var formatItems;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this6.items.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    nombre_completo: item.name + " " + item.primer_apellido + " " + (item.segundo_apellido || ""),
                    rol_desc: item.rol ? item.rol.text : "",
                    sucursal_desc: item.sucursal ? item.sucursal.name : ""
                  });
                });

              case 2:
                formatItems = _context5.sent;
                _this6.items = formatItems;
                _this6.loading = false;

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    selectCheckbox: function selectCheckbox(slug, code) {
      switch (slug) {
        case "setPassword":
          this.setPassword = !code;
          break;
      }
    },
    changeSelect: function changeSelect(posicion) {
      //this.departamentos
      this.departamentos[posicion].checado = document.getElementById("depEval" + posicion).checked;
    },
    onChange: function onChange(value) {
      this.user.areas_ventas = value;
      if (!value) this.user.areas_ventas = [];
      this.isInvalid;
    },
    onTouch: function onTouch() {
      this.isTouched = true;
    },
    closeModal: function closeModal(status, evt, accept) {
      var self = this;
      self.action = self.$t("titles.create");
      self.setPassword = true;
      self.$nextTick(function () {
        self.v$.$reset();
      });
      self.user = self.$options.User;
      self.editModal = false;
    },
    evenMoney: function evenMoney(value) {
      if (value.unmasked) {
        var formatted = value.unmasked.replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, "$1,");
        value.masked = "$".concat(formatted);
        return true;
      }
    }
  },
  mounted: function mounted() {
    this.index();
  },
  components: {
    Cards: _base_Cards_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/base/Cards.vue?vue&type=template&id=43e8910f&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/base/Cards.vue?vue&type=template&id=43e8910f& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm._v("\n          Card title\n          "),
                    _c("div", { staticClass: "card-header-actions" }, [
                      _c(
                        "a",
                        {
                          staticClass: "card-header-action",
                          attrs: {
                            href: "https://coreui.io/vue/docs/components/card-components",
                            rel: "noreferrer noopener",
                            target: "_blank",
                          },
                        },
                        [
                          _c("small", { staticClass: "text-muted" }, [
                            _vm._v("docs"),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("CCardBody", [
                    _vm._v(
                      "\n          " + _vm._s(_vm.loremIpsum) + "\n        "
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardBody", [_vm._v(_vm._s(_vm.loremIpsum))]),
                  _vm._v(" "),
                  _c("CCardFooter", [_vm._v("Card Footer")]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                [
                  _c(
                    "CCardHeader",
                    [
                      _c("CIcon", { attrs: { name: "cil-check" } }),
                      _vm._v(" Card with icon"),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("CCardBody", [_vm._v(_vm._s(_vm.loremIpsum))]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                [
                  _c(
                    "CCardHeader",
                    [
                      _vm._v("\n          Card with switch\n          "),
                      _c("CSwitch", {
                        staticClass: "float-right",
                        attrs: {
                          size: "sm",
                          shape: "pill",
                          color: "info",
                          "data-on": "On",
                          "data-off": "Off",
                          checked: true,
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("CCardBody", [
                    _vm._v(
                      "\n          " + _vm._s(_vm.loremIpsum) + "\n        "
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                [
                  _c(
                    "CCardHeader",
                    [
                      _vm._v("\n          Card with label\n          "),
                      _c(
                        "CBadge",
                        {
                          staticClass: "float-right",
                          attrs: { color: "success" },
                        },
                        [_vm._v("Success")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("CCardBody", [
                    _vm._v(
                      "\n          " + _vm._s(_vm.loremIpsum) + "\n        "
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                [
                  _c(
                    "CCardHeader",
                    [
                      _vm._v("\n          Card with label\n          "),
                      _c(
                        "CBadge",
                        {
                          staticClass: "float-right",
                          attrs: { shape: "pill", color: "danger" },
                        },
                        [_vm._v("42")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("CCardBody", [
                    _vm._v(
                      "\n          " + _vm._s(_vm.loremIpsum) + "\n        "
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                { attrs: { "border-color": "primary" } },
                [
                  _c("CCardHeader", [_vm._v("Card outline primary")]),
                  _vm._v(" "),
                  _c("CCardBody", [_vm._v(_vm._s(_vm.loremIpsum))]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                { attrs: { "border-color": "secondary" } },
                [
                  _c("CCardHeader", [_vm._v("Card outline secondary")]),
                  _vm._v(" "),
                  _c("CCardBody", [_vm._v(_vm._s(_vm.loremIpsum))]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                { attrs: { "border-color": "success" } },
                [
                  _c("CCardHeader", [_vm._v("Card outline success")]),
                  _vm._v(" "),
                  _c("CCardBody", [_vm._v(_vm._s(_vm.loremIpsum))]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                { attrs: { "border-color": "info" } },
                [
                  _c("CCardHeader", [_vm._v("Card outline info")]),
                  _vm._v(" "),
                  _c("CCardBody", [_vm._v(_vm._s(_vm.loremIpsum))]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                { attrs: { "border-color": "warning" } },
                [
                  _c("CCardHeader", [_vm._v("Card outline warning")]),
                  _vm._v(" "),
                  _c("CCardBody", [_vm._v(_vm._s(_vm.loremIpsum))]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                { attrs: { "border-color": "danger" } },
                [
                  _c("CCardHeader", [_vm._v("Card outline danger")]),
                  _vm._v(" "),
                  _c("CCardBody", [_vm._v(_vm._s(_vm.loremIpsum))]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                { attrs: { "accent-color": "primary" } },
                [
                  _c("CCardHeader", [_vm._v("Card with primary accent")]),
                  _vm._v(" "),
                  _c("CCardBody", [_vm._v(_vm._s(_vm.loremIpsum))]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                { attrs: { "accent-color": "secondary" } },
                [
                  _c("CCardHeader", [_vm._v("Card with secondary accent")]),
                  _vm._v(" "),
                  _c("CCardBody", [_vm._v(_vm._s(_vm.loremIpsum))]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                { attrs: { "accent-color": "success" } },
                [
                  _c("CCardHeader", [_vm._v("Card with success accent")]),
                  _vm._v(" "),
                  _c("CCardBody", [_vm._v(_vm._s(_vm.loremIpsum))]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                { attrs: { "accent-color": "info" } },
                [
                  _c("CCardHeader", [_vm._v("Card with info accent")]),
                  _vm._v(" "),
                  _c("CCardBody", [_vm._v(_vm._s(_vm.loremIpsum))]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                { attrs: { "accent-color": "info" } },
                [
                  _c("CCardHeader", [_vm._v("Card with info accent")]),
                  _vm._v(" "),
                  _c("CCardBody", [_vm._v(_vm._s(_vm.loremIpsum))]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                { attrs: { "accent-color": "danger" } },
                [
                  _c("CCardHeader", [_vm._v("Card with danger accent")]),
                  _vm._v(" "),
                  _c("CCardBody", [_vm._v(_vm._s(_vm.loremIpsum))]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                {
                  staticClass: "text-center",
                  attrs: {
                    color: "primary",
                    "body-wrapper": "",
                    "text-color": "white",
                  },
                },
                [
                  _c("blockquote", { staticClass: "card-blockquote" }, [
                    _c("p", [
                      _vm._v(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("footer", [
                      _vm._v("Someone famous in\n            "),
                      _c("cite", { attrs: { title: "Source Title" } }, [
                        _vm._v("Source Title"),
                      ]),
                    ]),
                  ]),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                {
                  staticClass: "text-center",
                  attrs: {
                    color: "success",
                    "body-wrapper": "",
                    "text-color": "white",
                  },
                },
                [
                  _c("blockquote", { staticClass: "card-blockquote" }, [
                    _c("p", [
                      _vm._v(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("footer", [
                      _vm._v("Someone famous in\n            "),
                      _c("cite", { attrs: { title: "Source Title" } }, [
                        _vm._v("Source Title"),
                      ]),
                    ]),
                  ]),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                {
                  staticClass: "text-center",
                  attrs: {
                    color: "info",
                    "body-wrapper": "",
                    "text-color": "white",
                  },
                },
                [
                  _c("blockquote", { staticClass: "card-blockquote" }, [
                    _c("p", [
                      _vm._v(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("footer", [
                      _vm._v("Someone famous in\n            "),
                      _c("cite", { attrs: { title: "Source Title" } }, [
                        _vm._v("Source Title"),
                      ]),
                    ]),
                  ]),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                {
                  staticClass: "text-center",
                  attrs: {
                    color: "warning",
                    "body-wrapper": "",
                    "text-color": "white",
                  },
                },
                [
                  _c("blockquote", { staticClass: "card-blockquote" }, [
                    _c("p", [
                      _vm._v(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("footer", [
                      _vm._v("Someone famous in\n            "),
                      _c("cite", { attrs: { title: "Source Title" } }, [
                        _vm._v("Source Title"),
                      ]),
                    ]),
                  ]),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                {
                  staticClass: "text-center",
                  attrs: {
                    color: "danger",
                    "body-wrapper": "",
                    "text-color": "white",
                  },
                },
                [
                  _c("blockquote", { staticClass: "card-blockquote" }, [
                    _c("p", [
                      _vm._v(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("footer", [
                      _vm._v("Someone famous in\n            "),
                      _c("cite", { attrs: { title: "Source Title" } }, [
                        _vm._v("Source Title"),
                      ]),
                    ]),
                  ]),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                {
                  staticClass: "text-center",
                  attrs: { color: "secondary", "body-wrapper": "" },
                },
                [
                  _c("blockquote", { staticClass: "card-blockquote" }, [
                    _c("p", [
                      _vm._v(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("footer", [
                      _vm._v("Someone famous in\n            "),
                      _c("cite", { attrs: { title: "Source Title" } }, [
                        _vm._v("Source Title"),
                      ]),
                    ]),
                  ]),
                ]
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                {
                  attrs: {
                    color: "primary",
                    "body-wrapper": "",
                    "text-color": "white",
                  },
                },
                [_vm._v("\n        " + _vm._s(_vm.loremIpsum) + "\n      ")]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                {
                  attrs: {
                    color: "success",
                    "body-wrapper": "",
                    "text-color": "white",
                  },
                },
                [_vm._v("\n        " + _vm._s(_vm.loremIpsum) + "\n      ")]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                {
                  attrs: {
                    color: "info",
                    "body-wrapper": "",
                    "text-color": "white",
                  },
                },
                [_vm._v("\n        " + _vm._s(_vm.loremIpsum) + "\n      ")]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                {
                  attrs: {
                    color: "warning",
                    "body-wrapper": "",
                    "text-color": "white",
                  },
                },
                [_vm._v("\n        " + _vm._s(_vm.loremIpsum) + "\n      ")]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "CCard",
                {
                  attrs: {
                    color: "danger",
                    "body-wrapper": "",
                    "text-color": "white",
                  },
                },
                [_vm._v("\n        " + _vm._s(_vm.loremIpsum) + "\n      ")]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "transition",
                { attrs: { name: "fade" } },
                [
                  _vm.show
                    ? _c(
                        "CCard",
                        { attrs: { color: "secondary" } },
                        [
                          _c("CCardHeader", [
                            _vm._v(
                              "\n            Card with header actions\n            "
                            ),
                            _c(
                              "div",
                              { staticClass: "card-header-actions" },
                              [
                                _c(
                                  "CLink",
                                  {
                                    staticClass:
                                      "card-header-action btn-setting",
                                    attrs: { href: "#" },
                                  },
                                  [
                                    _c("CIcon", {
                                      attrs: { name: "cil-settings" },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "CLink",
                                  {
                                    staticClass:
                                      "card-header-action btn-minimize",
                                    on: {
                                      click: function ($event) {
                                        _vm.isCollapsed = !_vm.isCollapsed
                                      },
                                    },
                                  },
                                  [
                                    _c("CIcon", {
                                      attrs: {
                                        name:
                                          "cil-chevron-" +
                                          (_vm.isCollapsed ? "bottom" : "top"),
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "CLink",
                                  {
                                    staticClass: "card-header-action btn-close",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function ($event) {
                                        _vm.show = false
                                      },
                                    },
                                  },
                                  [
                                    _c("CIcon", {
                                      attrs: { name: "cil-x-circle" },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "CCollapse",
                            { attrs: { show: _vm.isCollapsed, duration: 400 } },
                            [
                              _c("CCardBody", [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(_vm.loremIpsum) +
                                    "\n            "
                                ),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/settings/Users.vue?vue&type=template&id=060b8b06&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/settings/Users.vue?vue&type=template&id=060b8b06& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "CCard",
        [
          _c(
            "CCardHeader",
            [
              _c("CIcon", {
                staticClass: "mt-1",
                attrs: { content: _vm.$options.moodGood, size: "xl" },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "h4" }, [_vm._v("Usuarios ")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-header-actions" },
                [
                  _c(
                    "CButton",
                    {
                      attrs: { color: "primary", size: "sm", block: "" },
                      on: {
                        click: function ($event) {
                          _vm.editModal = true
                        },
                      },
                    },
                    [
                      _c("CIcon", {
                        attrs: { content: _vm.$options.plusIcon },
                      }),
                      _vm._v(" Agregar\n          "),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CButton",
                    {
                      attrs: { color: "warning", size: "sm", block: "" },
                      on: {
                        click: function ($event) {
                          _vm.modalUsuariosScontestar = true
                        },
                      },
                    },
                    [
                      _c("CIcon", { attrs: { name: "cil-X-circle" } }),
                      _vm._v(" Usuarios sin contestar\n          "),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c("CDataTable", {
                attrs: {
                  items: _vm.items,
                  fields: _vm.fields,
                  tableFilter: {
                    placeholder: _vm.$t("tables.filter.placeholder"),
                    label: _vm.$t("tables.filter.label") + ":",
                    lazy: true,
                  },
                  itemsPerPageSelect: {
                    label: _vm.$t("tables.pageSelect") + ":",
                  },
                  noItemsView: {
                    noResults: _vm.$t("tables.itemsView.noResults"),
                    noItems: _vm.$t("tables.itemsView.noItems"),
                  },
                  "items-per-page": 15,
                  hover: "",
                  columnFilter: "",
                  sorter: "",
                  pagination: "",
                  outlined: "",
                  size: "sm",
                  loading: _vm.loading,
                },
                scopedSlots: _vm._u([
                  {
                    key: "show_details",
                    fn: function (ref) {
                      var item = ref.item
                      var index = ref.index
                      return [
                        _c(
                          "td",
                          { staticClass: "py-2" },
                          [
                            _c(
                              "CButton",
                              {
                                attrs: {
                                  color: "primary",
                                  variant: "outline",
                                  square: "",
                                  size: "sm",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.getUser(item.id, index)
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n                Editar\n              "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ]
                    },
                  },
                ]),
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CModal",
        {
          attrs: {
            centered: true,
            title: "Usuarios Sin Contestar",
            size: "lg",
            show: _vm.modalUsuariosScontestar,
          },
          on: {
            "update:show": function ($event) {
              _vm.modalUsuariosScontestar = $event
            },
          },
        },
        [
          _c(
            "CCard",
            [
              _c(
                "CCardBody",
                [
                  _c("CDataTable", {
                    attrs: {
                      items: _vm.items2,
                      fields: _vm.fields2,
                      noItemsView: {
                        noResults: _vm.$t("tables.itemsView.noResults"),
                        noItems: _vm.$t("tables.itemsView.noItems"),
                      },
                      "items-per-page": 15,
                      hover: "",
                      sorter: "",
                      pagination: "",
                      outlined: "",
                      size: "sm",
                      loading: _vm.loading,
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CModal",
        {
          attrs: {
            centered: true,
            title: _vm.action + " usuario",
            size: "lg",
            show: _vm.editModal,
          },
          on: {
            "update:show": [
              function ($event) {
                _vm.editModal = $event
              },
              _vm.closeModal,
            ],
          },
        },
        [
          _c(
            "CForm",
            { attrs: { autocomplete: "off" } },
            [
              _c(
                "CRow",
                [
                  _c(
                    "CCol",
                    { attrs: { sm: "4" } },
                    [
                      _c("CInput", {
                        attrs: {
                          label: "Nombre",
                          placeholder: "Nombre",
                          "invalid-feedback": _vm.v$.user.name.$error
                            ? _vm.v$.user.name.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.name.$dirty
                            ? !_vm.v$.user.name.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.user.name.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.user.name, "$model", $$v)
                          },
                          expression: "v$.user.name.$model",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "4" } },
                    [
                      _c("CInput", {
                        attrs: {
                          label: "Primer apellido",
                          placeholder: "Primer apellido",
                          "invalid-feedback": _vm.v$.user.primer_apellido.$error
                            ? _vm.v$.user.primer_apellido.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.primer_apellido.$dirty
                            ? !_vm.v$.user.primer_apellido.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.user.primer_apellido.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.user.primer_apellido, "$model", $$v)
                          },
                          expression: "v$.user.primer_apellido.$model",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "4" } },
                    [
                      _c("CInput", {
                        attrs: {
                          label: "Segundo apellido",
                          placeholder: "Segundo apellido",
                          "invalid-feedback": _vm.v$.user.segundo_apellido
                            .$error
                            ? _vm.v$.user.segundo_apellido.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.segundo_apellido.$dirty
                            ? !_vm.v$.user.segundo_apellido.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.user.segundo_apellido.$model,
                          callback: function ($$v) {
                            _vm.$set(
                              _vm.v$.user.segundo_apellido,
                              "$model",
                              $$v
                            )
                          },
                          expression: "v$.user.segundo_apellido.$model",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "8" } },
                    [
                      _c("CInput", {
                        attrs: {
                          value: _vm.user.fecha_nacimiento,
                          label: "Fecha de Nacimiento",
                          placeholder: "Fecha de nacimiento",
                          type: "date",
                          "invalid-feedback": _vm.v$.user.fecha_nacimiento
                            .$error
                            ? _vm.v$.user.fecha_nacimiento.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.fecha_nacimiento.$dirty
                            ? !_vm.v$.user.fecha_nacimiento.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(
                              _vm.user,
                              "fecha_nacimiento",
                              $event
                            )
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "4" } },
                    [
                      _c("CInput", {
                        attrs: {
                          value: _vm.user.no_empleado,
                          label: "Numero Empleado",
                          placeholder: "Numero Empleado",
                          "invalid-feedback": _vm.v$.user.no_empleado.$error
                            ? _vm.v$.user.no_empleado.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.no_empleado.$dirty
                            ? !_vm.v$.user.no_empleado.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.user, "no_empleado", $event)
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "8" } },
                    [
                      _c("CInput", {
                        attrs: {
                          value: _vm.user.fecha_ingreso,
                          label: "Fecha Ingreso",
                          placeholder: "Fecha Ingreso",
                          type: "date",
                          "invalid-feedback": _vm.v$.user.fecha_ingreso.$error
                            ? _vm.v$.user.fecha_ingreso.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.fecha_ingreso.$dirty
                            ? !_vm.v$.user.fecha_ingreso.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.user, "fecha_ingreso", $event)
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "4" } },
                    [
                      _c("CInput", {
                        attrs: {
                          label: "Teléfono",
                          placeholder: "Teléfono",
                          "invalid-feedback": _vm.v$.user.telefono.$error
                            ? _vm.v$.user.telefono.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.telefono.$dirty
                            ? !_vm.v$.user.telefono.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.user.telefono.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.user.telefono, "$model", $$v)
                          },
                          expression: "v$.user.telefono.$model",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "6" } },
                    [
                      _c("CSelect", {
                        attrs: {
                          value: _vm.user.id_empresa,
                          label: "Empresa",
                          placeholder: "Selecciona la empresa",
                          options: _vm.empresa,
                          "invalid-feedback": _vm.v$.user.id_empresa.$error
                            ? _vm.v$.user.id_empresa.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.id_empresa.$dirty
                            ? !_vm.v$.user.id_empresa.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.user, "id_empresa", $event)
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "6" } },
                    [
                      _c("CInput", {
                        attrs: {
                          autocomplete: "email",
                          type: "text",
                          onkeydown: "this.type='email'",
                          label: "Usuario login",
                          placeholder: "Usuario login",
                          "invalid-feedback": _vm.v$.user.email.$error
                            ? _vm.v$.user.email.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.email.$dirty
                            ? !_vm.v$.user.email.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.user.email.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.user.email, "$model", $$v)
                          },
                          expression: "v$.user.email.$model",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "6" } },
                    [
                      _c("CInput", {
                        attrs: {
                          autocomplete: "Correo Empresarial",
                          type: "text",
                          onkeydown: "this.type='email'",
                          label: "Correo Empresarial",
                          placeholder: "Correo Empresarial",
                        },
                        model: {
                          value: _vm.v$.user.correo_empresarial.$model,
                          callback: function ($$v) {
                            _vm.$set(
                              _vm.v$.user.correo_empresarial,
                              "$model",
                              $$v
                            )
                          },
                          expression: "v$.user.correo_empresarial.$model",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "6" } },
                    [
                      _c("CInput", {
                        attrs: {
                          autocomplete: "Correo Personal",
                          type: "text",
                          onkeydown: "this.type='email'",
                          label: "Correo Personal",
                          placeholder: "Correo Personal",
                        },
                        model: {
                          value: _vm.v$.user.correo_personal.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.user.correo_personal, "$model", $$v)
                          },
                          expression: "v$.user.correo_personal.$model",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "6" } },
                    [
                      _c("CSelect", {
                        attrs: {
                          value: _vm.user.id_departamento,
                          label: "Departamento",
                          placeholder: "Departamento",
                          options: _vm.departamentos,
                          "invalid-feedback": _vm.v$.user.id_departamento.$error
                            ? _vm.v$.user.id_departamento.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.id_departamento.$dirty
                            ? !_vm.v$.user.id_departamento.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.user, "id_departamento", $event)
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "6" } },
                    [
                      _c("CInput", {
                        attrs: {
                          label: "Puesto",
                          placeholder: "Puesto",
                          "invalid-feedback": _vm.v$.user.puesto.$error
                            ? _vm.v$.user.puesto.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.puesto.$dirty
                            ? !_vm.v$.user.puesto.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.user.puesto.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.user.puesto, "$model", $$v)
                          },
                          expression: "v$.user.puesto.$model",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CDataTable", {
                        attrs: {
                          items: _vm.departamentos,
                          fields: _vm.fields3,
                          tableFilter: {
                            placeholder: _vm.$t("tables.filter.placeholder"),
                            label: _vm.$t("tables.filter.label") + ":",
                            lazy: true,
                          },
                          itemsPerPageSelect: {
                            label: _vm.$t("tables.pageSelect") + ":",
                          },
                          noItemsView: {
                            noResults: _vm.$t("tables.itemsView.noResults"),
                            noItems: _vm.$t("tables.itemsView.noItems"),
                          },
                          "items-per-page": 30,
                          hover: "",
                          columnFilter: "",
                          sorter: "",
                          pagination: "",
                          outlined: "",
                          size: "sm",
                          loading: _vm.loading,
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "show_checkbox_usuariosEval",
                            fn: function (ref) {
                              var item = ref.item
                              var index = ref.index
                              return [
                                _c(
                                  "td",
                                  { staticClass: "py-2" },
                                  [
                                    _c("CInputCheckbox", {
                                      attrs: {
                                        checked: item.checado,
                                        id: "depEval" + index,
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.changeSelect(index)
                                        },
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "4" } },
                    [
                      _c("CInput", {
                        attrs: {
                          autocomplete: "current-password",
                          label: "Contraseña",
                          placeholder: "Contraseña",
                          name: "password",
                          onkeydown: "this.type='password'",
                          type: "text",
                          disabled: !_vm.setPassword,
                          "invalid-feedback":
                            _vm.v$.user.password.$error && _vm.setPassword
                              ? _vm.v$.user.password.$errors[0].$message
                              : "",
                          "is-valid":
                            _vm.v$.user.password.$dirty && _vm.setPassword
                              ? !_vm.v$.user.password.$invalid
                              : null,
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "prepend-content",
                            fn: function () {
                              return [
                                _c("CSwitch", {
                                  attrs: {
                                    checked: _vm.setPassword,
                                    color: "primary",
                                    size: "sm",
                                    autocomplete: "off",
                                    disabled: _vm.user.id == "",
                                    variant: "opposite",
                                  },
                                  on: {
                                    "update:checked": function ($event) {
                                      return _vm.selectCheckbox(
                                        "setPassword",
                                        _vm.setPassword
                                      )
                                    },
                                  },
                                  model: {
                                    value: _vm.setPassword,
                                    callback: function ($$v) {
                                      _vm.setPassword = $$v
                                    },
                                    expression: "setPassword",
                                  },
                                }),
                              ]
                            },
                            proxy: true,
                          },
                        ]),
                        model: {
                          value: _vm.v$.user.password.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.user.password, "$model", $$v)
                          },
                          expression: "v$.user.password.$model",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "3" } },
                    [
                      _c("CInput", {
                        attrs: {
                          autocomplete: "current-password",
                          label: "Confirmar contraseña",
                          type: "text",
                          onkeydown: "this.type='password'",
                          placeholder: "Confirmar contraseña",
                          disabled: !_vm.setPassword,
                          "invalid-feedback": _vm.v$.user.password_confirmate
                            .$error
                            ? _vm.v$.user.password_confirmate.$errors[0]
                                .$message
                            : "",
                          "is-valid":
                            _vm.v$.user.password_confirmate.$dirty &&
                            _vm.setPassword
                              ? !_vm.v$.user.password_confirmate.$invalid
                              : null,
                        },
                        model: {
                          value: _vm.v$.user.password_confirmate.$model,
                          callback: function ($$v) {
                            _vm.$set(
                              _vm.v$.user.password_confirmate,
                              "$model",
                              $$v
                            )
                          },
                          expression: "v$.user.password_confirmate.$model",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "5" } },
                    [
                      _c("CSelect", {
                        attrs: {
                          value: _vm.user.sucursal_id,
                          plain: true,
                          label: "Sucursal",
                          options: _vm.sucursales,
                          placeholder: "Selecciona una Sucursal",
                          "invalid-feedback": _vm.v$.user.sucursal_id.$error
                            ? _vm.v$.user.sucursal_id.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.sucursal_id.$dirty
                            ? !_vm.v$.user.sucursal_id.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.user, "sucursal_id", $event)
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "7" } },
                    [
                      _c("CSelect", {
                        attrs: {
                          value: _vm.user.jefe_inmediato,
                          label: "Jefe Inmediato",
                          placeholder: "Jefe Inmediato",
                          options: _vm.jefeInmediato,
                          "invalid-feedback": _vm.v$.user.jefe_inmediato.$error
                            ? _vm.v$.user.jefe_inmediato.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.jefe_inmediato.$dirty
                            ? !_vm.v$.user.jefe_inmediato.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.user, "jefe_inmediato", $event)
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "5" } },
                    [
                      _c("CSelect", {
                        attrs: {
                          value: _vm.user.rol_id,
                          plain: true,
                          label: "Roles",
                          options: _vm.roles,
                          placeholder: "Selecciona un rol",
                          "invalid-feedback": _vm.v$.user.rol_id.$error
                            ? _vm.v$.user.rol_id.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.rol_id.$dirty
                            ? !_vm.v$.user.rol_id.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.user, "rol_id", $event)
                          },
                          change: function ($event) {
                            _vm.user.areas_ventas = []
                          },
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { slot: "footer" }, slot: "footer" },
            [
              _c(
                "CButton",
                {
                  attrs: { color: "danger", variant: "outline" },
                  on: {
                    click: function ($event) {
                      return _vm.baja()
                    },
                  },
                },
                [_vm._v("\n          Dar de BAJA\n        ")]
              ),
              _vm._v(" "),
              _c(
                "CButton",
                {
                  attrs: { color: "danger", variant: "outline" },
                  on: {
                    click: function ($event) {
                      return _vm.closeModal()
                    },
                  },
                },
                [_vm._v("\n          Cerrar\n        ")]
              ),
              _vm._v(" "),
              _vm.user.id
                ? _c(
                    "CButton",
                    {
                      attrs: { color: "primary" },
                      on: {
                        click: function ($event) {
                          return _vm.update()
                        },
                      },
                    },
                    [_vm._v("\n          Guardar\n        ")]
                  )
                : _c(
                    "CButton",
                    {
                      attrs: { color: "primary" },
                      on: {
                        click: function ($event) {
                          return _vm.create()
                        },
                      },
                    },
                    [_vm._v(" Guardar ")]
                  ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);