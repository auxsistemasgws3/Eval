(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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

/***/ "../coreui/src/views/resultadoEvaluaciones/Resultados.vue":
/*!****************************************************************!*\
  !*** ../coreui/src/views/resultadoEvaluaciones/Resultados.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Resultados_vue_vue_type_template_id_350f2c5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resultados.vue?vue&type=template&id=350f2c5a& */ "../coreui/src/views/resultadoEvaluaciones/Resultados.vue?vue&type=template&id=350f2c5a&");
/* harmony import */ var _Resultados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resultados.vue?vue&type=script&lang=js& */ "../coreui/src/views/resultadoEvaluaciones/Resultados.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Resultados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Resultados_vue_vue_type_template_id_350f2c5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Resultados_vue_vue_type_template_id_350f2c5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/resultadoEvaluaciones/Resultados.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/resultadoEvaluaciones/Resultados.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ../coreui/src/views/resultadoEvaluaciones/Resultados.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Resultados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./Resultados.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/resultadoEvaluaciones/Resultados.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Resultados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/resultadoEvaluaciones/Resultados.vue?vue&type=template&id=350f2c5a&":
/*!***********************************************************************************************!*\
  !*** ../coreui/src/views/resultadoEvaluaciones/Resultados.vue?vue&type=template&id=350f2c5a& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Resultados_vue_vue_type_template_id_350f2c5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./Resultados.vue?vue&type=template&id=350f2c5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/resultadoEvaluaciones/Resultados.vue?vue&type=template&id=350f2c5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Resultados_vue_vue_type_template_id_350f2c5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Resultados_vue_vue_type_template_id_350f2c5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/resultadoEvaluaciones/Resultados.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/resultadoEvaluaciones/Resultados.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  key: "email",
  label: "Correo",
  _style: "min-width:100px;"
}, {
  key: "sucursal_desc",
  label: "Sucursal",
  _style: "min-width:100px;"
}, {
  key: "show_details",
  label: "",
  _style: "width:1%",
  sorter: false,
  filter: false
}];
var fields2 = [{
  key: "name",
  label: "Nombre",
  _style: "min-width:200px"
}, {
  key: "email",
  label: "Correo",
  _style: "min-width:100px;"
}, {
  key: "evaluaciones",
  label: "Evaluaciones realizadas",
  _style: "min-width:100px;"
}];
var fields3 = [{
  key: "name",
  label: "Nombre",
  _style: "min-width:200px"
}, {
  key: "email",
  label: "Correo",
  _style: "min-width:100px;"
}, {
  key: "puesto",
  label: "Puesto",
  _style: "min-width:100px;"
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdvancedTables",
  moodGood: _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["cilMoodGood"],
  plusIcon: _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["cilPlus"],
  usuarioEvaluado: {
    id: "",
    name: "",
    id_departamento: "",
    sucursal_id: "",
    puesto: "",
    periodoEvaluaciones: ""
  },
  //HII
  data: function data() {
    return {
      linkeval: "",
      linklider: "",
      linkdepa: "",
      usuarioEvaluado: {
        id: "",
        name: "",
        id_departamento: "",
        sucursal_id: "",
        puesto: "",
        periodoEvaluaciones: "",
        promedioDesempeno: "",
        NoResultadosLider: "",
        promedioLider: "",
        promedioDepartamento: "",
        NoResultadosDepartamento: "",
        noEvaluacionesDepartamento: ""
      },
      peridosDiferentesConsulta: "",
      peridosDiferentesConsulta_lts: [],
      evaluacionesDepartamentos: "",
      activeTab: 0,
      resultsModal: false,
      resultsModalLider: false,
      resultsDepModal: false,
      resultsClimaModal: false,
      resultsGrupalModalLS: false,
      resultsGrupalModal: false,
      evaluacionesRealizadasModal: false,
      evaluacionesSinRealizarModal: false,
      moneda: "",
      estatus: [],
      sucursales: [],
      departamentos: [],
      jefeInmediato: [],
      roles: [],
      items: [],
      lideres: [],
      usuariosSinContestar: [],
      usuariosRespuestas: [],
      idx: 0,
      isTouched: false,
      loading: true,
      user: this.$options.User,
      setPassword: true,
      action: this.$t("titles.create"),
      fields: fields,
      fields2: fields2,
      fields3: fields3,
      details: [],
      collapseDuration: 0,
      comentarios: [],
      comentarios2: [],
      comentarios3: [],
      retroalimentacionObtenida: {
        retroalimentacion: ""
      },
      promedio_factores: [{
        data: [],
        fill: true,
        tension: 0.05,
        borderColor: "rgba(32, 189, 15)",
        borderWidth: 4,
        label: "Promedio / Factores"
      }],
      factores_labels: [],
      factores_desempeno: [{
        data: [],
        fill: true,
        tension: 0.05,
        borderColor: "rgba(35, 153, 215)",
        borderWidth: 4,
        label: "Promedio / Factores"
      }],
      factores_labels_desempeno: []
    };
  },
  computed: {
    formatHistory: function formatHistory() {
      return this.comentarios.map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          hora: item.created_at ? moment(String(item.created_at)).format("hh:mm a") : "",
          dia: item.created_at ? moment(String(item.created_at)).format("DD") : "",
          mes: item.created_at ? moment(String(item.created_at)).format("MMMM") : "",
          ano: item.created_at ? moment(String(item.created_at)).format("YYYY") : ""
        });
      });
    },
    formatHistory2: function formatHistory2() {
      return this.comentarios2.map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          hora: item.created_at ? moment(String(item.created_at)).format("hh:mm a") : "",
          dia: item.created_at ? moment(String(item.created_at)).format("DD") : "",
          mes: item.created_at ? moment(String(item.created_at)).format("MMMM") : "",
          ano: item.created_at ? moment(String(item.created_at)).format("YYYY") : ""
        });
      });
    },
    formatHistory3: function formatHistory3() {
      return this.comentarios3.map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          hora: item.created_at ? moment(String(item.created_at)).format("hh:mm a") : "",
          dia: item.created_at ? moment(String(item.created_at)).format("DD") : "",
          mes: item.created_at ? moment(String(item.created_at)).format("MMMM") : "",
          ano: item.created_at ? moment(String(item.created_at)).format("YYYY") : ""
        });
      });
    }
  },
  methods: {
    index: function index() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/evaluaciones/resultado?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.peridosDiferentesConsulta_lts = response.data.periodosDiferentes;
        self.items = response.data.usuarios;
        self.sucursales = response.data.sucursal;
        self.evaluacionesDepartamentos = response.data.departamentos_lst;
        self.lideres = response.data.lideres; //self.poEvaluacionesRealizadas = response.data.poEvaluacionesRealizadas;

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
    getUserResults: function getUserResults(id, periodo) {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/evaluaciones/resultados/" + id + "/" + periodo + "?token=" + localStorage.getItem("api_token")).then(function (response) {
        // console.log(response.data);
        self.linkeval = "/api/evaluaciones/resultados/imprimir/" + id + "/" + periodo + "?token=" + localStorage.getItem("api_token");
        self.usuarioEvaluado.promedioDesempeno = "";
        self.usuarioEvaluado.NoResultadosLider = "";
        self.resultsModal = true;
        self.usuarioEvaluado.id = response.data.usuarioEvaluado.id;
        self.usuarioEvaluado.name = response.data.usuarioEvaluado.name;
        self.usuarioEvaluado.id_departamento = response.data.usuarioEvaluado.id_departamento;
        self.usuarioEvaluado.sucursal_id = response.data.usuarioEvaluado.sucursal_id;
        self.usuarioEvaluado.puesto = response.data.usuarioEvaluado.puesto;
        self.usuarioEvaluado.periodoEvaluaciones = response.data.periodo;
        console.log(response.data.resultadosDesempenoPromedio);
        self.usuarioEvaluado.promedioDesempeno = response.data.resultadosDesempenoPromedio;
        self.usuarioEvaluado.NoResultadosLider = response.data.NoResultadosLider;
        self.usuarioEvaluado.promedioLider = response.data.promedioLider;
        self.usuarioEvaluado.noEvaluacionesRealizadas = response.data.noEvaluacionesRealizadas;
        self.usuarioEvaluado.noEvaluacionesEsperadas = response.data.noEvaluacionesEsperadas;
        self.usuarioEvaluado.poEvaluacionesRealizadas = response.data.poEvaluacionesRealizadas;
        self.promedio_factores[0].data = response.data.promediosFactoresLider;
        self.factores_labels = response.data.promediosFactoresLabelsLider;
        self.factores_desempeno[0].data = response.data.FactoresDesempeno;
        self.factores_labels_desempeno = response.data.FactoresLabelsDesempeno;
        self.comentarios = response.data.comentarios;
        self.isTouched = true;
        self.isInvalid;
        self.retroalimentacionObtenida.retroalimentacion = response.data.retroalimentacionObtenida.retroalimentacion;
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
    getLiderResults: function getLiderResults(id, periodo) {
      var self = this;
      console.log(id);
      console.log(periodo);
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/evaluaciones/resultadosLideres/" + id + "/" + periodo + "?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.usuarioEvaluado.promedioDesempeno = "";
        self.usuarioEvaluado.NoResultadosLider = "";
        self.resultsModalLider = true;
        self.linklider = "/api/evaluaciones/resultadoslider/imprimir/" + id + "/" + periodo + "?token=" + localStorage.getItem("api_token");
        self.usuarioEvaluado.id = response.data.usuarioEvaluado.id;
        self.usuarioEvaluado.name = response.data.usuarioEvaluado.name;
        self.usuarioEvaluado.id_departamento = response.data.usuarioEvaluado.id_departamento;
        self.usuarioEvaluado.sucursal_id = response.data.usuarioEvaluado.sucursal_id;
        self.usuarioEvaluado.puesto = response.data.usuarioEvaluado.puesto;
        self.usuarioEvaluado.periodoEvaluaciones = response.data.periodo;
        self.usuarioEvaluado.NoResultadosLider = response.data.NoResultadosLider;
        self.usuarioEvaluado.promedioLider = response.data.promedioLider;
        self.usuarioEvaluado.noEvaluacionesRealizadas = response.data.noEvaluacionesRealizadas;
        self.usuarioEvaluado.noEvaluacionesEsperadas = response.data.noEvaluacionesEsperadas;
        self.usuarioEvaluado.poEvaluacionesRealizadas = response.data.poEvaluacionesRealizadas;
        self.promedio_factores[0].data = response.data.promediosFactoresLider;
        self.factores_labels = response.data.promediosFactoresLabelsLider;
        self.comentarios = response.data.comentarios;
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
    getMostrarResultados: function getMostrarResultados(periodo) {
      var self = this;
      console.log(periodo);
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/evaluaciones/getMostrarResultados/" + periodo + "?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.usuariosRespuestas = response.data.usuariosRespuestas;
        self.departamentos_lst = response.data.departamentos_lst;
        self.evaluacionesRealizadasModal = true;
        self.formatData();
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
    getSincontestar: function getSincontestar(periodo) {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/evaluaciones/getSincontestar/" + periodo + "?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.evaluacionesSinRealizarModal = true;
        self.usuariosSinContestar = response.data.usuariosSinContestar;
        self.formatData();
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
    aplicarSancion: function aplicarSancion(id, periodo) {
      var self = this;
      console.log(id);
      console.log(periodo);
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/evaluaciones/resultados/aplicarSancion/" + id + "/" + periodo + "?token=" + localStorage.getItem("api_token")).then(function (response) {
        self.$toast.success(self.$t("messages.insert"));
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
    getResultsDep: function getResultsDep(idDep, periodoDep) {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/evaluaciones/resultadosDep/" + idDep + "/" + periodoDep + "?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.linkdepa = "/api/evaluaciones/resultadosdepa/imprimir/" + idDep + "/" + periodoDep + "?token=" + localStorage.getItem("api_token");
        self.usuarioEvaluado.promedioDesempeno = "";
        self.usuarioEvaluado.NoResultadosLider = "";
        self.resultsDepModal = true;
        self.usuarioEvaluado.id = response.data.departamentoEvaluado.id;
        self.usuarioEvaluado.name = response.data.departamentoEvaluado.name;
        self.usuarioEvaluado.periodoEvaluaciones = response.data.periodoDep;
        self.usuarioEvaluado.NoResultadosDepartamento = response.data.noResultadosDepartamento;
        self.usuarioEvaluado.noEvaluacionesDepartamento = response.data.noEvaluacionesDepartamento, self.usuarioEvaluado.promedioDepartamento = response.data.promedioDepartamento;
        self.promedio_factores[0].data = response.data.promediosFactores;
        self.factores_labels = response.data.promediosFactoresLabels;
        self.comentarios = response.data.comentarios;
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
    getResultadosClima: function getResultadosClima(periodoCli) {
      var self = this;
      console.log(periodoCli);
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/evaluaciones/resultadosClima/" + periodoCli + "?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.usuarioEvaluado.promedioDesempeno = "";
        self.usuarioEvaluado.NoResultadosLider = "";
        self.resultsClimaModal = true;
        self.usuarioEvaluado.periodoEvaluaciones = response.data.periodoCli;
        self.usuarioEvaluado.NoResultadosDepartamento = response.data.noResultadosClima;
        self.usuarioEvaluado.promedioDepartamento = response.data.promedioClima;
        self.promedio_factores[0].data = response.data.promediosFactores;
        self.factores_labels = response.data.promediosFactoresLabels;
        self.comentarios = response.data.comentarios;
        self.comentarios2 = response.data.comentarios2;
        self.comentarios3 = response.data.comentarios3;
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
    // getResultadosGrupalContabilidad(periodoCli) {
    //   let self = this;
    //   console.log(periodoCli);
    //   axios
    //     .get(
    //       this.$apiAdress +
    //       "/api/evaluaciones/resultadosGrupalContabilidad/" +
    //       periodoCli +
    //       "?token=" +
    //       localStorage.getItem("api_token")
    //     )
    //     .then(function (response) {
    //       console.log(response.data);
    //       self.usuarioEvaluado.promedioDesempeno = "";
    //       self.usuarioEvaluado.NoResultadosLider = "";
    //       self.resultsGrupalModal = true;
    //       self.usuarioEvaluado.periodoEvaluaciones = response.data.periodoCli;
    //       self.usuarioEvaluado.NoResultadosDepartamento = response.data.noResultadosGrupal;
    //       self.usuarioEvaluado.promedioDepartamento = response.data.promedioGrupal;
    //       self.promedio_factores[0].data = response.data.promediosFactores;
    //       self.factores_labels = response.data.promediosFactoresLabels;
    //       self.comentarios = response.data.comentarios;
    //       self.isTouched = true;
    //       self.isInvalid;
    //     })
    //     .catch(function (error) {
    //       if (error.response.status === 401) {
    //         self.$router.push({ path: "/login" });
    //       } else {
    //         self.$toast.error(self.$t("messages.error"));
    //       }
    //     });
    // },
    // getResultadosGrupalLogisticaSoporte(periodoCli) {
    //   let self = this;
    //   console.log(periodoCli);
    //   axios
    //     .get(
    //       this.$apiAdress +
    //       "/api/evaluaciones/resultadosGrupalLogisticaSoporte/" +
    //       periodoCli +
    //       "?token=" +
    //       localStorage.getItem("api_token")
    //     )
    //     .then(function (response) {
    //       console.log(response.data);
    //       self.usuarioEvaluado.promedioDesempeno = "";
    //       self.usuarioEvaluado.NoResultadosLider = "";
    //       self.resultsGrupalModalLS = true;
    //       self.usuarioEvaluado.periodoEvaluaciones = response.data.periodoCli;
    //       self.usuarioEvaluado.NoResultadosDepartamento = response.data.noResultadosGrupal;
    //       self.usuarioEvaluado.promedioDepartamento = response.data.promedioGrupal;
    //       self.promedio_factores[0].data = response.data.promediosFactores;
    //       self.factores_labels = response.data.promediosFactoresLabels;
    //       self.comentarios = response.data.comentarios;
    //       self.isTouched = true;
    //       self.isInvalid;
    //     })
    //     .catch(function (error) {
    //       if (error.response.status === 401) {
    //         self.$router.push({ path: "/login" });
    //       } else {
    //         self.$toast.error(self.$t("messages.error"));
    //       }
    //     });
    // },
    //Hii
    formatData: function formatData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formatItems, formatlideres, formatevaluaciones, formatsincontestar;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.items.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    nombre_completo: item.name + " " + item.primer_apellido + " " + (item.segundo_apellido || ""),
                    rol_desc: item.rol ? item.rol.text : "",
                    sucursal_desc: item.sucursal ? item.sucursal.name : ""
                  });
                });

              case 2:
                formatItems = _context.sent;
                _context.next = 5;
                return _this.lideres.map(function (lideres) {
                  return _objectSpread(_objectSpread({}, lideres), {}, {
                    nombre_completo: lideres.name + " " + lideres.primer_apellido + " " + (lideres.segundo_apellido || ""),
                    rol_desc: lideres.rol ? lideres.rol.text : "",
                    sucursal_desc: lideres.sucursal ? lideres.sucursal.name : ""
                  });
                });

              case 5:
                formatlideres = _context.sent;
                _context.next = 8;
                return _this.usuariosRespuestas.map(function (usuariosRespuestas) {
                  return _objectSpread(_objectSpread({}, usuariosRespuestas), {}, {
                    nombre_completo: usuariosRespuestas.name + " " + usuariosRespuestas.primer_apellido + " " + (usuariosRespuestas.segundo_apellido || "")
                  });
                });

              case 8:
                formatevaluaciones = _context.sent;
                _context.next = 11;
                return _this.usuariosSinContestar.map(function (usuariosSinContestar) {
                  return _objectSpread(_objectSpread({}, usuariosSinContestar), {}, {
                    nombre_completo: usuariosSinContestar.name + " " + usuariosSinContestar.primer_apellido + " " + (usuariosSinContestar.segundo_apellido || ""),
                    sucursal_desc: lideres.sucursal ? lideres.sucursal.name : ""
                  });
                });

              case 11:
                formatsincontestar = _context.sent;
                _this.usuariosRespuestas = formatevaluaciones;
                _this.usuariosSinContestar = formatsincontestar;
                _this.items = formatItems;
                _this.lideres = formatlideres;
                _this.loading = false;

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    selectCheckbox: function selectCheckbox(slug, code) {
      switch (slug) {
        case "setPassword":
          this.setPassword = !code;
          break;
      }
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
        // const formatted = value.unmasked.match(/\d+(\.\d+)?/g);
        // const formatted = value.unmasked.match(/(?=(?:\d{3})+(?:\.|$))/g).join(",");
        // const formatted = value.unmasked.match(/(?:\d{3})+\d{1,3}(?:\.|$)/g).join(",");
        var formatted = value.unmasked.replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, "$1,"); // let formatted = value.unmasked.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

        value.masked = "$".concat(formatted);
        return true;
      }
    }
  },
  mounted: function mounted() {
    this.index();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/resultadoEvaluaciones/Resultados.vue?vue&type=template&id=350f2c5a&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/resultadoEvaluaciones/Resultados.vue?vue&type=template&id=350f2c5a& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
                attrs: { name: "cil-speedometer", size: "xl" },
              }),
              _vm._v("\n       \n      "),
              _c("span", { staticClass: "h4" }, [_vm._v("Resultados ")]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CTabs",
            {
              attrs: { "active-tab": _vm.activeTab },
              on: {
                "update:activeTab": function ($event) {
                  _vm.activeTab = $event
                },
                "update:active-tab": function ($event) {
                  _vm.activeTab = $event
                },
              },
            },
            [
              _c(
                "CTab",
                [
                  _c(
                    "template",
                    { slot: "title" },
                    [
                      _c("CIcon", { attrs: { name: "cil-clipboard" } }),
                      _vm._v(" Desempeño y Lider\n        "),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("CRow", [_c("CCol", [_vm._v(" ")])], 1),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "4" } },
                    [
                      _c("CSelect", {
                        attrs: {
                          value: _vm.peridosDiferentesConsulta,
                          plain: true,
                          label: "Periodo:",
                          options: _vm.peridosDiferentesConsulta_lts,
                          placeholder: "Selecciona un periodo",
                        },
                        on: {
                          "update:value": function ($event) {
                            _vm.peridosDiferentesConsulta = $event
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: {
                            color: "success",
                            variant: "outline",
                            square: "",
                            size: "sm",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.getMostrarResultados(
                                _vm.peridosDiferentesConsulta
                              )
                            },
                          },
                        },
                        [_vm._v("\n            Realizar consulta\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: {
                            color: "warning",
                            variant: "outline",
                            square: "",
                            size: "sm",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.getSincontestar(
                                _vm.peridosDiferentesConsulta
                              )
                            },
                          },
                        },
                        [_vm._v("\n            Sin contestar\n          ")]
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
                              return [
                                _c(
                                  "td",
                                  { staticClass: "py-2" },
                                  [
                                    _c(
                                      "CButton",
                                      {
                                        attrs: {
                                          color: "success",
                                          variant: "outline",
                                          square: "",
                                          size: "sm",
                                        },
                                        on: {
                                          click: function ($event) {
                                            return _vm.getUserResults(
                                              item.id,
                                              _vm.peridosDiferentesConsulta
                                            )
                                          },
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                  Resultados\n                "
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
                2
              ),
              _vm._v(" "),
              _c(
                "CTab",
                { attrs: { title: "Clima Laboral y Departamentos" } },
                [
                  _c(
                    "template",
                    { slot: "title" },
                    [
                      _c("CIcon", {
                        attrs: {
                          name:
                            _vm.activeTab === 1
                              ? "cil-folder-open"
                              : "cil-folder",
                        },
                      }),
                      _vm._v(
                        "\n          Clima Laboral y Departamentos\n        "
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("CRow", [_c("CCol", [_vm._v(" ")])], 1),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "4" } },
                    [
                      _c("CSelect", {
                        attrs: {
                          value: _vm.peridosDiferentesConsulta,
                          plain: true,
                          label: "Periodo:",
                          options: _vm.peridosDiferentesConsulta_lts,
                          placeholder: "Selecciona un periodo",
                        },
                        on: {
                          "update:value": function ($event) {
                            _vm.peridosDiferentesConsulta = $event
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CRow",
                    _vm._l(_vm.evaluacionesDepartamentos, function (item, idx) {
                      return _c(
                        "CCol",
                        { key: "grap" + idx, attrs: { sm: "6" } },
                        [
                          _c(
                            "CCard",
                            [
                              _c(
                                "CCardHeader",
                                [
                                  _c(
                                    "CButton",
                                    {
                                      attrs: {
                                        color: "secondary",
                                        disabled: "",
                                        size: "sm",
                                      },
                                    },
                                    [
                                      _c("CIcon", {
                                        attrs: { name: "cil-Globe-Alt" },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  item.lider != null
                                    ? _c("label", [
                                        _c("b", [
                                          _vm._v(
                                            _vm._s(item.name) +
                                              " - " +
                                              _vm._s(item.lider.name) +
                                              " " +
                                              _vm._s(
                                                item.lider.primer_apellido
                                              ) +
                                              " " +
                                              _vm._s(
                                                item.lider.segundo_apellido
                                              )
                                          ),
                                        ]),
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  item.lider == null
                                    ? _c("label", [
                                        _c("b", [_vm._v(_vm._s(item.name))]),
                                      ])
                                    : _vm._e(),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "CCardBody",
                                [
                                  _c(
                                    "CButton",
                                    {
                                      staticClass: "mx-auto",
                                      staticStyle: { width: "200px" },
                                      attrs: {
                                        variant: "outline",
                                        size: "lg",
                                        color: "success",
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.getResultsDep(
                                            item.id,
                                            _vm.peridosDiferentesConsulta
                                          )
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Resultados\n                "
                                      ),
                                    ]
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
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CRow",
                    [
                      _c("CCol", { attrs: { sm: "3" } }),
                      _vm._v(" "),
                      _c(
                        "CCol",
                        { attrs: { sm: "6" } },
                        [
                          _c(
                            "CCard",
                            [
                              _c(
                                "CCardHeader",
                                [
                                  _c(
                                    "CButton",
                                    {
                                      attrs: {
                                        color: "secondary",
                                        disabled: "",
                                        size: "sm",
                                      },
                                    },
                                    [
                                      _c("CIcon", {
                                        attrs: { name: "cil-mood-good" },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("label", [
                                    _c("b", [_vm._v("Clima Laboral")]),
                                  ]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "CCardBody",
                                [
                                  _c(
                                    "CButton",
                                    {
                                      staticClass: "mx-auto",
                                      staticStyle: { width: "200px" },
                                      attrs: {
                                        variant: "outline",
                                        size: "lg",
                                        color: "success",
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.getResultadosClima(
                                            _vm.peridosDiferentesConsulta
                                          )
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Resultados\n                "
                                      ),
                                    ]
                                  ),
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
                      _c("CCol", { attrs: { sm: "3" } }),
                    ],
                    1
                  ),
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "CTab",
                [
                  _c(
                    "template",
                    { slot: "title" },
                    [
                      _c("CIcon", { attrs: { name: "cil-clipboard" } }),
                      _vm._v(" Evaluaciones Entre Lideres\n        "),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("CRow", [_c("CCol", [_vm._v(" ")])], 1),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "4" } },
                    [
                      _c("CSelect", {
                        attrs: {
                          value: _vm.peridosDiferentesConsulta,
                          plain: true,
                          label: "Periodo:",
                          options: _vm.peridosDiferentesConsulta_lts,
                          placeholder: "Selecciona un periodo",
                        },
                        on: {
                          "update:value": function ($event) {
                            _vm.peridosDiferentesConsulta = $event
                          },
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
                          items: _vm.lideres,
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
                              return [
                                _c(
                                  "td",
                                  { staticClass: "py-2" },
                                  [
                                    _c(
                                      "CButton",
                                      {
                                        attrs: {
                                          color: "success",
                                          variant: "outline",
                                          square: "",
                                          size: "sm",
                                        },
                                        on: {
                                          click: function ($event) {
                                            return _vm.getLiderResults(
                                              item.id,
                                              _vm.peridosDiferentesConsulta
                                            )
                                          },
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                  Resultados\n                "
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
                2
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
            entered: true,
            title: "Resultados de Evaluaciones",
            size: "xl",
            show: _vm.resultsModal,
          },
          on: {
            "update:show": function ($event) {
              _vm.resultsModal = $event
            },
          },
        },
        [
          _c(
            "h3",
            { staticClass: "text-center" },
            [
              _vm._v("Evaluaciones del periodo: "),
              _c("font", { attrs: { color: "green" } }, [
                _c("b", [
                  _vm._v(_vm._s(_vm.usuarioEvaluado.periodoEvaluaciones)),
                ]),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c("p"),
          _vm._v(" "),
          _c("CIcon", {
            staticClass: "mb-1",
            attrs: { name: "cil-speedometer", size: "xl" },
          }),
          _vm._v(" "),
          _c("h4", [
            _vm._v("Resultados de: "),
            _c(
              "b",
              [
                _c("font", { attrs: { color: "navy" } }, [
                  _vm._v(
                    _vm._s(_vm.usuarioEvaluado.name) +
                      " - " +
                      _vm._s(_vm.usuarioEvaluado.puesto)
                  ),
                ]),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c("p"),
          _vm._v(" "),
          _c(
            "CCard",
            [
              _c(
                "CCardHeader",
                [
                  _c(
                    "CRow",
                    [
                      _c("CCol", { attrs: { sm: "3" } }, [
                        _c("span", { staticClass: "h5" }, [
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(0, 14, 187, 1)" } },
                            [_vm._v("Extraordinario 100")]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("CCol", { attrs: { sm: "2" } }, [
                        _c("span", { staticClass: "h5" }, [
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(10, 187, 0, 1)" } },
                            [_vm._v("Excelente 99-95")]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("CCol", { attrs: { sm: "2" } }, [
                        _c("span", { staticClass: "h5" }, [
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(238, 232, 46, 1)" } },
                            [_vm._v("Notable 94-85")]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("CCol", { attrs: { sm: "2" } }, [
                        _c("span", { staticClass: "h5" }, [
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(239, 114, 21, 1)" } },
                            [_vm._v("Aceptable 84-80")]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("CCol", { attrs: { sm: "3" } }, [
                        _c("span", { staticClass: "h5" }, [
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(239, 21, 21, 1)" } },
                            [_vm._v("Insuficiente 79-0")]
                          ),
                        ]),
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
          _vm.usuarioEvaluado.promedioDesempeno != 0
            ? _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm.usuarioEvaluado.promedioDesempeno == 100
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Evaluacion Desempeño: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(0, 14, 187, 1)" } },
                            [_vm._v("Extraordinario ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.usuarioEvaluado.promedioDesempeno < 100 &&
                    _vm.usuarioEvaluado.promedioDesempeno >= 95
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Evaluacion Desempeño: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(10, 187, 0, 1)" } },
                            [_vm._v("Excelente ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.usuarioEvaluado.promedioDesempeno < 95 &&
                    _vm.usuarioEvaluado.promedioDesempeno >= 85
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Evaluacion Desempeño: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(238, 232, 46, 1)" } },
                            [_vm._v("Notable ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.usuarioEvaluado.promedioDesempeno < 85 &&
                    _vm.usuarioEvaluado.promedioDesempeno >= 80
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Evaluacion Desempeño: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(239, 114, 21, 1)" } },
                            [_vm._v("Aceptable ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.usuarioEvaluado.promedioDesempeno < 80 &&
                    _vm.usuarioEvaluado.promedioDesempeno >= 0
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Evaluacion Desempeño: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(239, 21, 21, 1)" } },
                            [_vm._v("Insuficiente ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _vm.retroalimentacionObtenida.retroalimentacion ==
                    "Extraordinario"
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Retroalimentación\n          Otorgada: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(0, 14, 187, 1)" } },
                            [_vm._v("Extraordinario ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.retroalimentacionObtenida.retroalimentacion ==
                    "Excelente"
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Retroalimentación Otorgada:\n          "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(10, 187, 0, 1)" } },
                            [_vm._v("Excelente ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.retroalimentacionObtenida.retroalimentacion == "Notable"
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Retroalimentación Otorgada:\n          "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(238, 232, 46, 1)" } },
                            [_vm._v("Notable ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.retroalimentacionObtenida.retroalimentacion ==
                    "Aceptable"
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Retroalimentación Otorgada:\n          "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(239, 114, 21, 1)" } },
                            [_vm._v("Aceptable ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.retroalimentacionObtenida.retroalimentacion ==
                    "Insuficiente"
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Retroalimentación\n          Otorgada: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(239, 21, 21, 1)" } },
                            [_vm._v("Insuficiente ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.retroalimentacionObtenida.retroalimentacion == null
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Retroalimentación no otorgada\n        "),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CRow",
                        [
                          _c("CCol", { attrs: { sm: "1" } }),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  value:
                                    _vm.usuarioEvaluado
                                      .noEvaluacionesRealizadas,
                                  label: "Numero de Evaluaciones Realizadas:",
                                  disabled: "",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "1" } }),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  value:
                                    _vm.usuarioEvaluado.noEvaluacionesEsperadas,
                                  label: "Numero de Evaluaciones Esperadas:",
                                  disabled: "",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "4" } }),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c(
                                "CWidgetIcon",
                                {
                                  attrs: {
                                    text: "Promedio",
                                    header:
                                      _vm.usuarioEvaluado.promedioDesempeno,
                                    color: "success",
                                  },
                                },
                                [
                                  _c("CIcon", {
                                    attrs: {
                                      name: "cil-speedometer",
                                      size: "xl",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c(
                                "CButton",
                                {
                                  attrs: { color: "danger" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.aplicarSancion(
                                        _vm.usuarioEvaluado.id,
                                        _vm.usuarioEvaluado.periodoEvaluaciones
                                      )
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n              Aplicar sancion (10 puntos)"
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "4" } }),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "12" } },
                            [
                              _c("CChartLine", {
                                staticStyle: { height: "250px" },
                                attrs: {
                                  datasets: _vm.factores_desempeno,
                                  labels: _vm.factores_labels_desempeno,
                                  options: {
                                    maintainAspectRatio: false,
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
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.usuarioEvaluado.NoResultadosLider != 0
            ? _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm.usuarioEvaluado.promedioLider == 100
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Evaluacion Lider: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(0, 14, 187, 1)" } },
                            [_vm._v("Extraordinario ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.usuarioEvaluado.promedioLider < 100 &&
                    _vm.usuarioEvaluado.promedioLider >= 95
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Evaluacion\n          Lider: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(10, 187, 0, 1)" } },
                            [_vm._v("Excelente ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.usuarioEvaluado.promedioLider < 95 &&
                    _vm.usuarioEvaluado.promedioLider >= 85
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Evaluacion\n          Lider: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(238, 232, 46, 1)" } },
                            [_vm._v("Notable ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.usuarioEvaluado.promedioLider < 85 &&
                    _vm.usuarioEvaluado.promedioLider >= 80
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Evaluacion\n          Lider: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(239, 114, 21, 1)" } },
                            [_vm._v("Aceptable ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.usuarioEvaluado.promedioLider < 80 &&
                    _vm.usuarioEvaluado.promedioLider >= 0
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Evaluacion\n          Lider: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(239, 21, 21, 1)" } },
                            [_vm._v("Insuficiente ")]
                          ),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CRow",
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "3" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  value: _vm.usuarioEvaluado.NoResultadosLider,
                                  label: "Numero de Evaluaciones Recibidas:",
                                  disabled: "",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "1" } }),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "3" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  value:
                                    _vm.usuarioEvaluado
                                      .noEvaluacionesRealizadas,
                                  label: "Numero de Evaluaciones Realizadas:",
                                  disabled: "",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "1" } }),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "3" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  value:
                                    _vm.usuarioEvaluado.noEvaluacionesEsperadas,
                                  label: "Numero de Evaluaciones Esperadas:",
                                  disabled: "",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "2" } }),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c(
                                "CWidgetIcon",
                                {
                                  attrs: {
                                    text: "Promedio de Evaluaciones",
                                    header: _vm.usuarioEvaluado.promedioLider,
                                    color: "info",
                                  },
                                },
                                [
                                  _c("CIcon", {
                                    attrs: {
                                      name: "cil-speedometer",
                                      size: "xl",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c(
                                "CButton",
                                {
                                  attrs: { color: "danger" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.aplicarSancion(
                                        _vm.usuarioEvaluado.id,
                                        _vm.usuarioEvaluado.periodoEvaluaciones
                                      )
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n              Aplicar sancion (10 puntos)"
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "1" } }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "12" } },
                            [
                              _c("CChartLine", {
                                staticStyle: { height: "250px" },
                                attrs: {
                                  datasets: _vm.promedio_factores,
                                  labels: _vm.factores_labels,
                                  options: {
                                    maintainAspectRatio: false,
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
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "CRow",
            [
              _c("CCol", { attrs: { sm: "10" } }),
              _vm._v(" "),
              _c(
                "CCol",
                [
                  _c(
                    "CButton",
                    { attrs: { href: _vm.linkeval, color: "primary" } },
                    [_vm._v("\n         Imprimir Evaluación\n        ")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "CCard",
            [
              _c(
                "CCardHeader",
                [
                  _c("CIcon", {
                    staticClass: "mt-1",
                    attrs: { name: "cil-list-rich", size: "xl" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "h4" }, [_vm._v("Comentarios")]),
                ],
                1
              ),
              _vm._v(" "),
              _c("CCardBody", [
                _c(
                  "div",
                  { staticClass: "history", attrs: { switcher: "" } },
                  _vm._l(_vm.formatHistory, function (item, index) {
                    return _c(
                      "div",
                      { key: item.i, staticClass: "row align-items-center" },
                      [
                        _c(
                          "CCol",
                          { attrs: { md: "1" } },
                          [
                            _c("CIcon", {
                              staticClass: "mt-1",
                              attrs: { name: "cil-speech", size: "xl" },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("CCol", { attrs: { md: "8" } }, [
                          _c("span", { staticClass: "m-b-0 font-medium p-0" }, [
                            _vm._v(_vm._s(item.comentarios)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "text-center", attrs: { md: "3" } },
                          [
                            _c("span", { staticClass: "day" }, [
                              _vm._v(_vm._s(item.dia)),
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", { staticClass: "month" }, [
                              _vm._v(_vm._s(item.mes) + " " + _vm._s(item.ano)),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  }),
                  0
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
        "CModal",
        {
          attrs: {
            entered: true,
            title: "Resultados de Evaluaciones",
            size: "xl",
            show: _vm.resultsModalLider,
          },
          on: {
            "update:show": function ($event) {
              _vm.resultsModalLider = $event
            },
          },
        },
        [
          _c(
            "h3",
            { staticClass: "text-center" },
            [
              _vm._v("Evaluaciones del periodo: "),
              _c("font", { attrs: { color: "green" } }, [
                _c("b", [
                  _vm._v(_vm._s(_vm.usuarioEvaluado.periodoEvaluaciones)),
                ]),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c("p"),
          _vm._v(" "),
          _c("CIcon", {
            staticClass: "mb-1",
            attrs: { name: "cil-speedometer", size: "xl" },
          }),
          _vm._v(" "),
          _c("h4", [
            _vm._v("Resultados evaluacion entre lideres de: "),
            _c(
              "b",
              [
                _c("font", { attrs: { color: "navy" } }, [
                  _vm._v(
                    _vm._s(_vm.usuarioEvaluado.name) +
                      " - " +
                      _vm._s(_vm.usuarioEvaluado.puesto)
                  ),
                ]),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c("p"),
          _vm._v(" "),
          _c(
            "CCard",
            [
              _c(
                "CCardHeader",
                [
                  _c(
                    "CRow",
                    [
                      _c("CCol", { attrs: { sm: "3" } }, [
                        _c("span", { staticClass: "h5" }, [
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(0, 14, 187, 1)" } },
                            [_vm._v("Extraordinario 100")]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("CCol", { attrs: { sm: "2" } }, [
                        _c("span", { staticClass: "h5" }, [
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(10, 187, 0, 1)" } },
                            [_vm._v("Excelente 99-95")]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("CCol", { attrs: { sm: "2" } }, [
                        _c("span", { staticClass: "h5" }, [
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(238, 232, 46, 1)" } },
                            [_vm._v("Notable 94-85")]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("CCol", { attrs: { sm: "2" } }, [
                        _c("span", { staticClass: "h5" }, [
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(239, 114, 21, 1)" } },
                            [_vm._v("Aceptable 84-80")]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("CCol", { attrs: { sm: "3" } }, [
                        _c("span", { staticClass: "h5" }, [
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(239, 21, 21, 1)" } },
                            [_vm._v("Insuficiente 79-0")]
                          ),
                        ]),
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
          _vm.usuarioEvaluado.promedioDesempeno != 0
            ? _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm.usuarioEvaluado.promedioDesempeno == 100
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Evaluacion Desempeño: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(0, 14, 187, 1)" } },
                            [_vm._v("Extraordinario ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.usuarioEvaluado.promedioDesempeno < 100 &&
                    _vm.usuarioEvaluado.promedioDesempeno >= 95
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Evaluacion Desempeño: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(10, 187, 0, 1)" } },
                            [_vm._v("Excelente ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.usuarioEvaluado.promedioDesempeno < 95 &&
                    _vm.usuarioEvaluado.promedioDesempeno >= 85
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Evaluacion Desempeño: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(238, 232, 46, 1)" } },
                            [_vm._v("Notable ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.usuarioEvaluado.promedioDesempeno < 85 &&
                    _vm.usuarioEvaluado.promedioDesempeno >= 80
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Evaluacion Desempeño: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(239, 114, 21, 1)" } },
                            [_vm._v("Aceptable ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.usuarioEvaluado.promedioDesempeno < 80 &&
                    _vm.usuarioEvaluado.promedioDesempeno >= 0
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Evaluacion Desempeño: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(239, 21, 21, 1)" } },
                            [_vm._v("Insuficiente ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("br"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CRow",
                        [
                          _c("CCol", { attrs: { sm: "1" } }),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  value:
                                    _vm.usuarioEvaluado
                                      .noEvaluacionesRealizadas,
                                  label: "Numero de Evaluaciones Realizadas:",
                                  disabled: "",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "1" } }),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  value:
                                    _vm.usuarioEvaluado.noEvaluacionesEsperadas,
                                  label: "Numero de Evaluaciones Esperadas:",
                                  disabled: "",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "4" } }),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c(
                                "CWidgetIcon",
                                {
                                  attrs: {
                                    text: "Promedio",
                                    header:
                                      _vm.usuarioEvaluado.promedioDesempeno,
                                    color: "success",
                                  },
                                },
                                [
                                  _c("CIcon", {
                                    attrs: {
                                      name: "cil-speedometer",
                                      size: "xl",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c(
                                "CButton",
                                {
                                  attrs: { color: "danger" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.aplicarSancion(
                                        _vm.usuarioEvaluado.id,
                                        _vm.usuarioEvaluado.periodoEvaluaciones
                                      )
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n              Aplicar sancion (10 puntos)"
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "4" } }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "12" } },
                            [
                              _c("CChartLine", {
                                staticStyle: { height: "250px" },
                                attrs: {
                                  datasets: _vm.factores_desempeno,
                                  labels: _vm.factores_labels_desempeno,
                                  options: {
                                    maintainAspectRatio: false,
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
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.usuarioEvaluado.NoResultadosLider != 0
            ? _c(
                "CCard",
                [
                  _c("CCardHeader", [
                    _vm.usuarioEvaluado.promedioLider == 100
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Evaluacion Lider: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(0, 14, 187, 1)" } },
                            [_vm._v("Extraordinario ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.usuarioEvaluado.promedioLider < 100 &&
                    _vm.usuarioEvaluado.promedioLider >= 95
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Evaluacion\n          Lider: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(10, 187, 0, 1)" } },
                            [_vm._v("Excelente ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.usuarioEvaluado.promedioLider < 95 &&
                    _vm.usuarioEvaluado.promedioLider >= 85
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Evaluacion\n          Lider: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(238, 232, 46, 1)" } },
                            [_vm._v("Notable ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.usuarioEvaluado.promedioLider < 85 &&
                    _vm.usuarioEvaluado.promedioLider >= 80
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Evaluacion\n          Lider: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(239, 114, 21, 1)" } },
                            [_vm._v("Aceptable ")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.usuarioEvaluado.promedioLider < 80 &&
                    _vm.usuarioEvaluado.promedioLider >= 0
                      ? _c("span", { staticClass: "h5" }, [
                          _vm._v("Evaluacion\n          Lider: "),
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(239, 21, 21, 1)" } },
                            [_vm._v("Insuficiente ")]
                          ),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CRow",
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "3" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  value: _vm.usuarioEvaluado.NoResultadosLider,
                                  label: "Numero de Evaluaciones Recibidas:",
                                  disabled: "",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "1" } }),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "3" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  value:
                                    _vm.usuarioEvaluado
                                      .noEvaluacionesRealizadas,
                                  label: "Numero de Evaluaciones Realizadas:",
                                  disabled: "",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "1" } }),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "3" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  value:
                                    _vm.usuarioEvaluado.noEvaluacionesEsperadas,
                                  label: "Numero de Evaluaciones Esperadas:",
                                  disabled: "",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "2" } }),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c(
                                "CWidgetIcon",
                                {
                                  attrs: {
                                    text: "Promedio de Evaluaciones",
                                    header: _vm.usuarioEvaluado.promedioLider,
                                    color: "info",
                                  },
                                },
                                [
                                  _c("CIcon", {
                                    attrs: {
                                      name: "cil-speedometer",
                                      size: "xl",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "1" } }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "12" } },
                            [
                              _c("CChartLine", {
                                staticStyle: { height: "250px" },
                                attrs: {
                                  datasets: _vm.promedio_factores,
                                  labels: _vm.factores_labels,
                                  options: {
                                    maintainAspectRatio: false,
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
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "CRow",
            [
              _c("CCol", { attrs: { sm: "10" } }),
              _vm._v(" "),
              _c(
                "CCol",
                [
                  _c(
                    "CButton",
                    { attrs: { href: _vm.linklider, color: "primary" } },
                    [_vm._v("\n         Imprimir Evaluación\n        ")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "CCard",
            [
              _c(
                "CCardHeader",
                [
                  _c("CIcon", {
                    staticClass: "mt-1",
                    attrs: { name: "cil-list-rich", size: "xl" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "h4" }, [_vm._v("Comentarios")]),
                ],
                1
              ),
              _vm._v(" "),
              _c("CCardBody", [
                _c(
                  "div",
                  { staticClass: "history", attrs: { switcher: "" } },
                  _vm._l(_vm.formatHistory, function (item, index) {
                    return _c(
                      "div",
                      { key: item.i, staticClass: "row align-items-center" },
                      [
                        _c(
                          "CCol",
                          { attrs: { md: "1" } },
                          [
                            _c("CIcon", {
                              staticClass: "mt-1",
                              attrs: { name: "cil-speech", size: "xl" },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("CCol", { attrs: { md: "8" } }, [
                          _c("span", { staticClass: "m-b-0 font-medium p-0" }, [
                            _vm._v(_vm._s(item.comentarios)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "text-center", attrs: { md: "3" } },
                          [
                            _c("span", { staticClass: "day" }, [
                              _vm._v(_vm._s(item.dia)),
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", { staticClass: "month" }, [
                              _vm._v(_vm._s(item.mes) + " " + _vm._s(item.ano)),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  }),
                  0
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
        "CModal",
        {
          attrs: {
            entered: true,
            title: "Resultados de Evaluaciones",
            size: "xl",
            show: _vm.resultsDepModal,
          },
          on: {
            "update:show": function ($event) {
              _vm.resultsDepModal = $event
            },
          },
        },
        [
          _c(
            "h3",
            { staticClass: "text-center" },
            [
              _vm._v("Evaluaciones del periodo: "),
              _c("font", { attrs: { color: "green" } }, [
                _c("b", [
                  _vm._v(_vm._s(_vm.usuarioEvaluado.periodoEvaluaciones)),
                ]),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c("p"),
          _vm._v(" "),
          _c("CIcon", {
            staticClass: "mb-1",
            attrs: { name: "cil-speedometer", size: "xl" },
          }),
          _vm._v(" "),
          _c("h4", [
            _vm._v("Resultados de: "),
            _c(
              "b",
              [
                _c("font", { attrs: { color: "navy" } }, [
                  _vm._v(_vm._s(_vm.usuarioEvaluado.name)),
                ]),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c("p"),
          _vm._v(" "),
          _c(
            "CCard",
            [
              _c(
                "CCardHeader",
                [
                  _c(
                    "CRow",
                    [
                      _c("CCol", { attrs: { sm: "3" } }, [
                        _c("span", { staticClass: "h5" }, [
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(0, 14, 187, 1)" } },
                            [_vm._v("Extraordinario 100")]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("CCol", { attrs: { sm: "2" } }, [
                        _c("span", { staticClass: "h5" }, [
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(10, 187, 0, 1)" } },
                            [_vm._v("Excelente 99-95")]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("CCol", { attrs: { sm: "2" } }, [
                        _c("span", { staticClass: "h5" }, [
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(238, 232, 46, 1)" } },
                            [_vm._v("Notable 94-85")]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("CCol", { attrs: { sm: "2" } }, [
                        _c("span", { staticClass: "h5" }, [
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(239, 114, 21, 1)" } },
                            [_vm._v("Aceptable 84-80")]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("CCol", { attrs: { sm: "3" } }, [
                        _c("span", { staticClass: "h5" }, [
                          _c(
                            "b",
                            { staticStyle: { color: "rgba(239, 21, 21, 1)" } },
                            [_vm._v("Insuficiente 79-0")]
                          ),
                        ]),
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
            "CCard",
            [
              _c("CCardHeader", [
                _vm.usuarioEvaluado.promedioDepartamento == 100
                  ? _c("span", { staticClass: "h5" }, [
                      _vm._v("Evaluacion Departamento: "),
                      _c(
                        "b",
                        { staticStyle: { color: "rgba(0, 14, 187, 1)" } },
                        [_vm._v("Extraordinario ")]
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.usuarioEvaluado.promedioDepartamento < 100 &&
                _vm.usuarioEvaluado.promedioDepartamento >= 95
                  ? _c("span", { staticClass: "h5" }, [
                      _vm._v("Evaluacion Departamento: "),
                      _c(
                        "b",
                        { staticStyle: { color: "rgba(10, 187, 0, 1)" } },
                        [_vm._v("Excelente ")]
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.usuarioEvaluado.promedioDepartamento < 95 &&
                _vm.usuarioEvaluado.promedioDepartamento >= 85
                  ? _c("span", { staticClass: "h5" }, [
                      _vm._v("Evaluacion Departamento: "),
                      _c(
                        "b",
                        { staticStyle: { color: "rgba(238, 232, 46, 1)" } },
                        [_vm._v("Notable ")]
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.usuarioEvaluado.promedioDepartamento < 85 &&
                _vm.usuarioEvaluado.promedioDepartamento >= 80
                  ? _c("span", { staticClass: "h5" }, [
                      _vm._v("Evaluacion Departamento: "),
                      _c(
                        "b",
                        { staticStyle: { color: "rgba(239, 114, 21, 1)" } },
                        [_vm._v("Aceptable ")]
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.usuarioEvaluado.promedioDepartamento < 80 &&
                _vm.usuarioEvaluado.promedioDepartamento >= 0
                  ? _c("span", { staticClass: "h5" }, [
                      _vm._v("Evaluacion Departamento: "),
                      _c(
                        "b",
                        { staticStyle: { color: "rgba(239, 21, 21, 1)" } },
                        [_vm._v("Insuficiente ")]
                      ),
                    ])
                  : _vm._e(),
              ]),
              _vm._v(" "),
              _c(
                "CCardBody",
                [
                  _c(
                    "CRow",
                    [
                      _c("CCol", { attrs: { sm: "1" } }),
                      _vm._v(" "),
                      _c(
                        "CCol",
                        { attrs: { sm: "4" } },
                        [
                          _c("CInput", {
                            attrs: {
                              value:
                                _vm.usuarioEvaluado.NoResultadosDepartamento,
                              label: "Numero de Evaluaciones Realizadas:",
                              disabled: "",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("CCol", { attrs: { sm: "1" } }),
                      _vm._v(" "),
                      _c(
                        "CCol",
                        { attrs: { sm: "4" } },
                        [
                          _c("CInput", {
                            attrs: {
                              value:
                                _vm.usuarioEvaluado.noEvaluacionesDepartamento,
                              label: "Numero de Evaluaciones Esperadas:",
                              disabled: "",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("CCol", { attrs: { sm: "1" } }),
                      _vm._v(" "),
                      _c(
                        "CCol",
                        { attrs: { sm: "4" } },
                        [
                          _c(
                            "CWidgetIcon",
                            {
                              attrs: {
                                text: "Promedio de Evaluaciones",
                                header:
                                  _vm.usuarioEvaluado.promedioDepartamento,
                                color: "info",
                              },
                            },
                            [
                              _c("CIcon", {
                                attrs: { name: "cil-speedometer", size: "xl" },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("CCol", { attrs: { sm: "1" } }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CRow",
                    [
                      _c(
                        "CCol",
                        { attrs: { sm: "12" } },
                        [
                          _c("CChartLine", {
                            staticStyle: { height: "250px" },
                            attrs: {
                              datasets: _vm.promedio_factores,
                              labels: _vm.factores_labels,
                              options: {
                                maintainAspectRatio: false,
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
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CRow",
            [
              _c("CCol", { attrs: { sm: "10" } }),
              _vm._v(" "),
              _c(
                "CCol",
                [
                  _c(
                    "CButton",
                    { attrs: { href: _vm.linkdepa, color: "primary" } },
                    [_vm._v("\n         Imprimir Evaluación\n        ")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCard",
            [
              _c(
                "CCardHeader",
                [
                  _c("CIcon", {
                    staticClass: "mt-1",
                    attrs: { name: "cil-list-rich", size: "xl" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "h4" }, [_vm._v("Comentarios")]),
                ],
                1
              ),
              _vm._v(" "),
              _c("CCardBody", [
                _c(
                  "div",
                  { staticClass: "history", attrs: { switcher: "" } },
                  _vm._l(_vm.formatHistory, function (item, index) {
                    return _c(
                      "div",
                      { key: item.i, staticClass: "row align-items-center" },
                      [
                        _c(
                          "CCol",
                          { attrs: { md: "1" } },
                          [
                            _c("CIcon", {
                              staticClass: "mt-1",
                              attrs: { name: "cil-speech", size: "xl" },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("CCol", { attrs: { md: "8" } }, [
                          _c("span", { staticClass: "m-b-0 font-medium p-0" }, [
                            _vm._v(_vm._s(item.comentarios)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "text-center", attrs: { md: "3" } },
                          [
                            _c("span", { staticClass: "day" }, [
                              _vm._v(_vm._s(item.dia)),
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", { staticClass: "month" }, [
                              _vm._v(_vm._s(item.mes) + " " + _vm._s(item.ano)),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  }),
                  0
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
        "CModal",
        {
          attrs: {
            entered: true,
            title: "Resultados de Evaluaciones",
            size: "xl",
            show: _vm.resultsClimaModal,
          },
          on: {
            "update:show": function ($event) {
              _vm.resultsClimaModal = $event
            },
          },
        },
        [
          _c(
            "h3",
            { staticClass: "text-center" },
            [
              _vm._v("Evaluaciones del periodo: "),
              _c("font", { attrs: { color: "green" } }, [
                _c("b", [
                  _vm._v(_vm._s(_vm.usuarioEvaluado.periodoEvaluaciones)),
                ]),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c("p"),
          _vm._v(" "),
          _c("CIcon", {
            staticClass: "mb-1",
            attrs: { name: "cil-speedometer", size: "xl" },
          }),
          _vm._v(" "),
          _c("h4", [
            _vm._v("Resultados de "),
            _c(
              "b",
              [
                _c("font", { attrs: { color: "navy" } }, [
                  _vm._v("Clima Laboral"),
                ]),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c("p"),
          _vm._v(" "),
          _c(
            "CCard",
            [
              _c("CCardHeader", [
                _c("span", { staticClass: "h5" }, [
                  _vm._v("Evaluación Clima Laboral"),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "CCardBody",
                [
                  _c(
                    "CRow",
                    [
                      _c("CCol", { attrs: { sm: "1" } }),
                      _vm._v(" "),
                      _c(
                        "CCol",
                        { attrs: { sm: "4" } },
                        [
                          _c("CInput", {
                            attrs: {
                              value:
                                _vm.usuarioEvaluado.NoResultadosDepartamento,
                              label: "Numero de Evaluaciones Realizadas:",
                              disabled: "",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("CCol", { attrs: { sm: "2" } }),
                      _vm._v(" "),
                      _c(
                        "CCol",
                        { attrs: { sm: "4" } },
                        [
                          _c(
                            "CWidgetIcon",
                            {
                              attrs: {
                                text: "Promedio de Evaluaciones",
                                header:
                                  _vm.usuarioEvaluado.promedioDepartamento,
                                color: "info",
                              },
                            },
                            [
                              _c("CIcon", {
                                attrs: { name: "cil-speedometer", size: "xl" },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CCol",
                        { attrs: { sm: "12" } },
                        [
                          _c("CChartLine", {
                            staticStyle: { height: "250px" },
                            attrs: {
                              datasets: _vm.promedio_factores,
                              labels: _vm.factores_labels,
                              options: {
                                maintainAspectRatio: false,
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
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCard",
            [
              _c(
                "CCardHeader",
                [
                  _c("CIcon", {
                    staticClass: "mt-1",
                    attrs: { name: "cil-list-rich", size: "xl" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "h4" }, [_vm._v("Comentarios")]),
                ],
                1
              ),
              _vm._v(" "),
              _c("CCardBody", [
                _c(
                  "div",
                  { staticClass: "history", attrs: { switcher: "" } },
                  _vm._l(_vm.formatHistory, function (item, index) {
                    return _c(
                      "div",
                      { key: item.i, staticClass: "row align-items-center" },
                      [
                        _c(
                          "CCol",
                          { attrs: { md: "1" } },
                          [
                            _c("CIcon", {
                              staticClass: "mt-1",
                              attrs: { name: "cil-speech", size: "xl" },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("CCol", { attrs: { md: "8" } }, [
                          _c("span", { staticClass: "m-b-0 font-medium p-0" }, [
                            _vm._v(_vm._s(item.comentarios)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "text-center", attrs: { md: "3" } },
                          [
                            _c("span", { staticClass: "day" }, [
                              _vm._v(_vm._s(item.dia)),
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", { staticClass: "month" }, [
                              _vm._v(_vm._s(item.mes) + " " + _vm._s(item.ano)),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  }),
                  0
                ),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCard",
            [
              _c(
                "CCardHeader",
                [
                  _c("CIcon", {
                    staticClass: "mt-1",
                    attrs: { name: "cil-list-rich", size: "xl" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "h4" }, [
                    _vm._v("Comentarios a los aquipos"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c("CCardBody", [
                _c(
                  "div",
                  { staticClass: "history", attrs: { switcher: "" } },
                  _vm._l(_vm.formatHistory2, function (item, index) {
                    return _c(
                      "div",
                      { key: item.i, staticClass: "row align-items-center" },
                      [
                        _c(
                          "CCol",
                          { attrs: { md: "1" } },
                          [
                            _c("CIcon", {
                              staticClass: "mt-1",
                              attrs: { name: "cil-speech", size: "xl" },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("CCol", { attrs: { md: "8" } }, [
                          _c("span", { staticClass: "m-b-0 font-medium p-0" }, [
                            _vm._v(_vm._s(item.comentarios2)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "text-center", attrs: { md: "3" } },
                          [
                            _c("span", { staticClass: "day" }, [
                              _vm._v(_vm._s(item.dia)),
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", { staticClass: "month" }, [
                              _vm._v(_vm._s(item.mes) + " " + _vm._s(item.ano)),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  }),
                  0
                ),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCard",
            [
              _c(
                "CCardHeader",
                [
                  _c("CIcon", {
                    staticClass: "mt-1",
                    attrs: { name: "cil-list-rich", size: "xl" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "h4" }, [
                    _vm._v("Comentarios a la empresa"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c("CCardBody", [
                _c(
                  "div",
                  { staticClass: "history", attrs: { switcher: "" } },
                  _vm._l(_vm.formatHistory3, function (item, index) {
                    return _c(
                      "div",
                      { key: item.i, staticClass: "row align-items-center" },
                      [
                        _c(
                          "CCol",
                          { attrs: { md: "1" } },
                          [
                            _c("CIcon", {
                              staticClass: "mt-1",
                              attrs: { name: "cil-speech", size: "xl" },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("CCol", { attrs: { md: "8" } }, [
                          _c("span", { staticClass: "m-b-0 font-medium p-0" }, [
                            _vm._v(_vm._s(item.comentarios3)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "text-center", attrs: { md: "3" } },
                          [
                            _c("span", { staticClass: "day" }, [
                              _vm._v(_vm._s(item.dia)),
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", { staticClass: "month" }, [
                              _vm._v(_vm._s(item.mes) + " " + _vm._s(item.ano)),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  }),
                  0
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
        "CModal",
        {
          attrs: {
            entered: true,
            title: "Resultados de Evaluaciones",
            size: "xl",
            show: _vm.resultsGrupalModal,
          },
          on: {
            "update:show": function ($event) {
              _vm.resultsGrupalModal = $event
            },
          },
        },
        [
          _c(
            "h3",
            { staticClass: "text-center" },
            [
              _vm._v("Evaluaciones del periodo: "),
              _c("font", { attrs: { color: "green" } }, [
                _c("b", [
                  _vm._v(_vm._s(_vm.usuarioEvaluado.periodoEvaluaciones)),
                ]),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c("p"),
          _vm._v(" "),
          _c("CIcon", {
            staticClass: "mb-1",
            attrs: { name: "cil-speedometer", size: "xl" },
          }),
          _vm._v(" "),
          _c("h4", [
            _vm._v("Resultados de "),
            _c(
              "b",
              [
                _c("font", { attrs: { color: "navy" } }, [
                  _vm._v("Evaluacion Grupal CONTABILIDAD"),
                ]),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c("p"),
          _vm._v(" "),
          _c(
            "CCard",
            [
              _c("CCardHeader", [
                _c("span", { staticClass: "h5" }, [
                  _vm._v("Evaluacion Grupal"),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "CCardBody",
                [
                  _c(
                    "CRow",
                    [
                      _c("CCol", { attrs: { sm: "1" } }),
                      _vm._v(" "),
                      _c(
                        "CCol",
                        { attrs: { sm: "4" } },
                        [
                          _c("CInput", {
                            attrs: {
                              value:
                                _vm.usuarioEvaluado.NoResultadosDepartamento,
                              label: "Numero de Evaluaciones Realizadas:",
                              disabled: "",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("CCol", { attrs: { sm: "2" } }),
                      _vm._v(" "),
                      _c(
                        "CCol",
                        { attrs: { sm: "4" } },
                        [
                          _c(
                            "CWidgetIcon",
                            {
                              attrs: {
                                text: "Promedio de Evaluaciones",
                                header:
                                  _vm.usuarioEvaluado.promedioDepartamento,
                                color: "info",
                              },
                            },
                            [
                              _c("CIcon", {
                                attrs: { name: "cil-speedometer", size: "xl" },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CCol",
                        { attrs: { sm: "12" } },
                        [
                          _c("CChartLine", {
                            staticStyle: { height: "250px" },
                            attrs: {
                              datasets: _vm.promedio_factores,
                              labels: _vm.factores_labels,
                              options: {
                                maintainAspectRatio: false,
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
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CRow",
            [
              _c("CCol", { attrs: { sm: "10" } }),
              _vm._v(" "),
              _c(
                "CCol",
                [
                  _c("CButton", { attrs: { href: "", color: "primary" } }, [
                    _vm._v("\n         Imprimir Evaluación\n        "),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "CCard",
            [
              _c(
                "CCardHeader",
                [
                  _c("CIcon", {
                    staticClass: "mt-1",
                    attrs: { name: "cil-list-rich", size: "xl" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "h4" }, [_vm._v("Comentarios")]),
                ],
                1
              ),
              _vm._v(" "),
              _c("CCardBody", [
                _c(
                  "div",
                  { staticClass: "history", attrs: { switcher: "" } },
                  _vm._l(_vm.formatHistory, function (item, index) {
                    return _c(
                      "div",
                      { key: item.i, staticClass: "row align-items-center" },
                      [
                        _c(
                          "CCol",
                          { attrs: { md: "1" } },
                          [
                            _c("CIcon", {
                              staticClass: "mt-1",
                              attrs: { name: "cil-speech", size: "xl" },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("CCol", { attrs: { md: "8" } }, [
                          _c("span", { staticClass: "m-b-0 font-medium p-0" }, [
                            _vm._v(_vm._s(item.comentarios)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "text-center", attrs: { md: "3" } },
                          [
                            _c("span", { staticClass: "day" }, [
                              _vm._v(_vm._s(item.dia)),
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", { staticClass: "month" }, [
                              _vm._v(_vm._s(item.mes) + " " + _vm._s(item.ano)),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  }),
                  0
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
        "CModal",
        {
          attrs: {
            entered: true,
            title: "Resultados de Evaluaciones",
            size: "xl",
            show: _vm.resultsGrupalModalLS,
          },
          on: {
            "update:show": function ($event) {
              _vm.resultsGrupalModalLS = $event
            },
          },
        },
        [
          _c(
            "h3",
            { staticClass: "text-center" },
            [
              _vm._v("Evaluaciones del periodo: "),
              _c("font", { attrs: { color: "green" } }, [
                _c("b", [
                  _vm._v(_vm._s(_vm.usuarioEvaluado.periodoEvaluaciones)),
                ]),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c("p"),
          _vm._v(" "),
          _c("CIcon", {
            staticClass: "mb-1",
            attrs: { name: "cil-speedometer", size: "xl" },
          }),
          _vm._v(" "),
          _c("h4", [
            _vm._v("Resultados de "),
            _c(
              "b",
              [
                _c("font", { attrs: { color: "navy" } }, [
                  _vm._v("Evaluacion Grupal LOGISTICA & SOPORTE TECNICO"),
                ]),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c("p"),
          _vm._v(" "),
          _c(
            "CCard",
            [
              _c("CCardHeader", [
                _c("span", { staticClass: "h5" }, [
                  _vm._v("Evaluacion Grupal"),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "CCardBody",
                [
                  _c(
                    "CRow",
                    [
                      _c("CCol", { attrs: { sm: "1" } }),
                      _vm._v(" "),
                      _c(
                        "CCol",
                        { attrs: { sm: "4" } },
                        [
                          _c("CInput", {
                            attrs: {
                              value:
                                _vm.usuarioEvaluado.NoResultadosDepartamento,
                              label: "Numero de Evaluaciones Realizadas:",
                              disabled: "",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("CCol", { attrs: { sm: "2" } }),
                      _vm._v(" "),
                      _c(
                        "CCol",
                        { attrs: { sm: "4" } },
                        [
                          _c(
                            "CWidgetIcon",
                            {
                              attrs: {
                                text: "Promedio de Evaluaciones",
                                header:
                                  _vm.usuarioEvaluado.promedioDepartamento,
                                color: "info",
                              },
                            },
                            [
                              _c("CIcon", {
                                attrs: { name: "cil-speedometer", size: "xl" },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CCol",
                        { attrs: { sm: "12" } },
                        [
                          _c("CChartLine", {
                            staticStyle: { height: "250px" },
                            attrs: {
                              datasets: _vm.promedio_factores,
                              labels: _vm.factores_labels,
                              options: {
                                maintainAspectRatio: false,
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
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CRow",
            [
              _c("CCol", { attrs: { sm: "10" } }),
              _vm._v(" "),
              _c(
                "CCol",
                [
                  _c("CButton", { attrs: { href: "link", color: "primary" } }, [
                    _vm._v("\n         Imprimir Evaluación\n        "),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "CCard",
            [
              _c(
                "CCardHeader",
                [
                  _c("CIcon", {
                    staticClass: "mt-1",
                    attrs: { name: "cil-list-rich", size: "xl" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "h4" }, [_vm._v("Comentarios")]),
                ],
                1
              ),
              _vm._v(" "),
              _c("CCardBody", [
                _c(
                  "div",
                  { staticClass: "history", attrs: { switcher: "" } },
                  _vm._l(_vm.formatHistory, function (item, index) {
                    return _c(
                      "div",
                      { key: item.i, staticClass: "row align-items-center" },
                      [
                        _c(
                          "CCol",
                          { attrs: { md: "1" } },
                          [
                            _c("CIcon", {
                              staticClass: "mt-1",
                              attrs: { name: "cil-speech", size: "xl" },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("CCol", { attrs: { md: "8" } }, [
                          _c("span", { staticClass: "m-b-0 font-medium p-0" }, [
                            _vm._v(_vm._s(item.comentarios)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "text-center", attrs: { md: "3" } },
                          [
                            _c("span", { staticClass: "day" }, [
                              _vm._v(_vm._s(item.dia)),
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", { staticClass: "month" }, [
                              _vm._v(_vm._s(item.mes) + " " + _vm._s(item.ano)),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  }),
                  0
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
        "CModal",
        {
          attrs: {
            entered: true,
            title: "Evaluaciones realizadas",
            size: "xl",
            show: _vm.evaluacionesRealizadasModal,
          },
          on: {
            "update:show": function ($event) {
              _vm.evaluacionesRealizadasModal = $event
            },
          },
        },
        [
          _c("h3", { staticClass: "text-center" }, [
            _vm._v("Progreso de Evaluaciones realizadas\n    "),
          ]),
          _vm._v(" "),
          _c("p"),
          _vm._v(" "),
          _c("CIcon", {
            staticClass: "mb-1",
            attrs: { name: "cil-speedometer", size: "xl" },
          }),
          _vm._v(" "),
          _c("h4", [
            _vm._v("Evaluaciones contestadas por los "),
            _c(
              "b",
              [
                _c("font", { attrs: { color: "navy" } }, [
                  _vm._v("Colaboradores"),
                ]),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c("p"),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c("CDataTable", {
                attrs: {
                  items: _vm.usuariosRespuestas,
                  fields: _vm.fields2,
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
            entered: true,
            title: "Evaluaciones realizadas",
            size: "xl",
            show: _vm.evaluacionesSinRealizarModal,
          },
          on: {
            "update:show": function ($event) {
              _vm.evaluacionesSinRealizarModal = $event
            },
          },
        },
        [
          _c("h3", { staticClass: "text-center" }, [
            _vm._v("Progreso de Evaluaciones realizadas\n    "),
          ]),
          _vm._v(" "),
          _c("p"),
          _vm._v(" "),
          _c("CIcon", {
            staticClass: "mb-1",
            attrs: { name: "cil-speedometer", size: "xl" },
          }),
          _vm._v(" "),
          _c("h4", [
            _vm._v("Evaluaciones contestadas por los "),
            _c(
              "b",
              [
                _c("font", { attrs: { color: "navy" } }, [
                  _vm._v("Colaboradores"),
                ]),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c("p"),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c("CDataTable", {
                attrs: {
                  items: _vm.usuariosSinContestar,
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
                  "items-per-page": 15,
                  hover: "",
                  columnFilter: "",
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);