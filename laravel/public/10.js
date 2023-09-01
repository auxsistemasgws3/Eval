(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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

/***/ "../coreui/src/views/kpi/kpi.vue":
/*!***************************************!*\
  !*** ../coreui/src/views/kpi/kpi.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kpi_vue_vue_type_template_id_840a90c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kpi.vue?vue&type=template&id=840a90c2& */ "../coreui/src/views/kpi/kpi.vue?vue&type=template&id=840a90c2&");
/* harmony import */ var _kpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kpi.vue?vue&type=script&lang=js& */ "../coreui/src/views/kpi/kpi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _kpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _kpi_vue_vue_type_template_id_840a90c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _kpi_vue_vue_type_template_id_840a90c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/kpi/kpi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/kpi/kpi.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ../coreui/src/views/kpi/kpi.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_kpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./kpi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/kpi/kpi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_kpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/kpi/kpi.vue?vue&type=template&id=840a90c2&":
/*!**********************************************************************!*\
  !*** ../coreui/src/views/kpi/kpi.vue?vue&type=template&id=840a90c2& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_kpi_vue_vue_type_template_id_840a90c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./kpi.vue?vue&type=template&id=840a90c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/kpi/kpi.vue?vue&type=template&id=840a90c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_kpi_vue_vue_type_template_id_840a90c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_kpi_vue_vue_type_template_id_840a90c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/kpi/kpi.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/kpi/kpi.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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






var fields = [{
  key: "id",
  label: "ID",
  _style: "min-width:50px;"
}, {
  key: "nombre",
  label: "Nombre completo",
  _style: "min-width:350px"
}, {
  key: "vacante_desc",
  label: "Vacante",
  _style: "min-width:200px"
}, {
  key: "sucursal_desc",
  label: "Sucursal",
  _style: "min-width:100px;"
}, {
  key: "estatus_desc",
  label: "Estatus",
  _style: "min-width:100px;"
}, {
  key: "show_details",
  label: "",
  _style: "width:1%",
  sorter: false,
  filter: false
}];
var fields2 = [{
  key: "id",
  label: "ID",
  _style: "min-width:50px;"
}, {
  key: "nombre",
  label: "Vacante",
  _style: "min-width:200px"
}, {
  key: "sucursal_desc",
  label: "Sucursal",
  _style: "min-width:100px;"
}, {
  key: "estatus_desc",
  label: "Estatus",
  _style: "min-width:100px;"
}, {
  key: "dias",
  label: "Dias",
  _style: "min-width:50px;"
}, {
  key: "show_details",
  label: "",
  _style: "width:1%",
  sorter: false,
  filter: false
}];
var fields3 = [{
  key: "id",
  label: "ID",
  _style: "min-width:50px;"
}, {
  key: "nombre_solicitante",
  label: "Solicitante",
  _style: "min-width:350px"
}, {
  key: "nombre_definicion",
  label: "Puesto solicitado",
  _style: "min-width:350px"
}, {
  key: "departamento_desc",
  label: "Departamento",
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdvancedTables",
  moodGood: _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["cilMoodGood"],
  plusIcon: _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["cilPlus"],
  data: function data() {
    var _candidato, _ref;

    return _ref = {
      linkkpi: "",
      editModaladdVacante: false,
      editModaladdCandidato: false,
      ModalCandidato: false,
      ModalVacantes: false,
      ModalSolicitudPersonal: false,
      Fechahoy: "",
      nombreVacante: "",
      nombreCandidato: "",
      telefono: "",
      departamento: "",
      sucursal: "",
      puesto: "",
      plataforma: "",
      activeTab: 0,
      candidato: (_candidato = {
        id: "",
        fecha: "",
        nombre: "",
        telefono: "",
        puesto: "",
        sucursal: "",
        plataforma: "",
        proceso: "",
        departamento: ""
      }, _defineProperty(_candidato, "proceso", ""), _defineProperty(_candidato, "estatus", ""), _defineProperty(_candidato, "comentarios", ""), _candidato),
      vacante: {
        id: "",
        fecha: "",
        nombre: "",
        sucursal: "",
        departamento: "",
        estatus: "",
        descartados: "",
        comentarios: "",
        vacantesGrafico: ""
      },
      solicitante: {
        fecha: "",
        nombre: "",
        puesto: ""
      },
      especificaciones: {
        tipo: "",
        motivo: "",
        personaSustituir: ""
      },
      definicion: {
        tipo: "",
        nombre: "",
        departamento: "",
        ubicacion: "",
        horario: "",
        funciones: ""
      },
      perfil: {
        escolaridad: "",
        idiomas: "",
        equipo: "",
        sistema: "",
        experiencia: "",
        sexo: "",
        estadoCivil: "",
        edad: ""
      },
      habilidades: {
        comprension: "",
        seguimiento: "",
        objetividad: "",
        manejo: "",
        negociacion: "",
        decisiones: "",
        poder: "",
        palabra: "",
        dominio: "",
        asertividad: "",
        iniciativa: "",
        creatividad: "",
        resultados: "",
        adaptable: "",
        logico: "",
        concentracion: "",
        equipo: "",
        estres: ""
      },
      actitudes: {
        responsable: "",
        empatico: "",
        emprendedor: "",
        colaborador: "",
        normas: "",
        comentarios: ""
      },
      items: [],
      items2: [],
      items3: [],
      items4: [],
      items5: [],
      departamentos: [],
      sucursales: [],
      puestos: [],
      plataformas: [],
      estatus: [],
      proceso: [],
      requerimientos: [],
      motivo: []
    }, _defineProperty(_ref, "puesto", []), _defineProperty(_ref, "escolaridad", []), _defineProperty(_ref, "sexo", []), _defineProperty(_ref, "estadoCivil", []), _defineProperty(_ref, "labels", []), _defineProperty(_ref, "labels2", []), _defineProperty(_ref, "idx", 0), _defineProperty(_ref, "isTouched", false), _defineProperty(_ref, "loading", true), _defineProperty(_ref, "user", this.$options.User), _defineProperty(_ref, "setPassword", true), _defineProperty(_ref, "action", this.$t("titles.create")), _defineProperty(_ref, "fields", fields), _defineProperty(_ref, "fields2", fields2), _defineProperty(_ref, "fields3", fields3), _defineProperty(_ref, "details", []), _defineProperty(_ref, "collapseDuration", 0), _defineProperty(_ref, "comentarios", []), _defineProperty(_ref, "comentarios2", []), _defineProperty(_ref, "comentarios3", []), _defineProperty(_ref, "vacantesGrafico", [{
      data: [],
      fill: true,
      tension: 0.15,
      borderColor: "rgba(118, 180, 81, 1)",
      //118 , 180 , 81
      borderWidth: 4,
      label: "Candidatos"
    }]), _defineProperty(_ref, "vacantesGrafico2", [{
      data: [],
      fill: true,
      tension: 0.15,
      borderColor: "rgba(118, 180, 81, 1)",
      //118 , 180 , 81
      borderWidth: 4,
      label: "Candidatos"
    }]), _ref;
  },
  methods: {
    index: function index() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/kpi?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.items = response.data.candidatos;
        self.items2 = response.data.vacantes;
        self.items3 = response.data.historialcandidatos;
        self.items4 = response.data.historialvacantes;
        self.items5 = response.data.solicitudes;
        self.Fechahoy = response.data.Fechahoy;
        self.departamentos = response.data.departamentos;
        self.sucursales = response.data.sucursal;
        self.puestos = response.data.puestos;
        self.plataformas = response.data.plataformas;
        self.estatus = response.data.estatus;
        self.proceso = response.data.proceso;
        self.requerimientos = response.data.requerimientos;
        self.motivo = response.data.motivo;
        self.puesto = response.data.puesto;
        self.escolaridad = response.data.escolaridad;
        self.sexo = response.data.sexo;
        self.estadoCivil = response.data.estadoCivil;
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
    addCandidato: function addCandidato() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var self, isUpdate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = _this; //this.v$.$touch();

                console.log(self.v$); //if (self.v$.$error) return;

                _context.next = 4;
                return self.$swal({
                  title: self.$t("¿Esta seguro de agregar este candidato?"),
                  text: self.$t("messages.question.status.description"),
                  icon: "warning",
                  showCancelButton: true
                }).then(function (result) {
                  return result.isConfirmed;
                });

              case 4:
                isUpdate = _context.sent;

                if (isUpdate) {
                  axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(_this.$apiAdress + "/api/kpi/addCandidato" + "?token=" + localStorage.getItem("api_token"), {
                    nombreCandidato: self.nombreCandidato,
                    telefono: self.telefono,
                    departamento: self.departamento,
                    puesto: self.puesto,
                    sucursal: self.sucursal,
                    plataforma: self.plataforma
                  }).then(function (response) {
                    console.log(response.data);
                    self.nombreCandidato = "";
                    self.telefono = "";
                    self.departamento = "";
                    self.puesto = "";
                    self.sucursal = "";
                    self.$toast.success(self.$t("messages.insert"));
                  })["catch"](function (error) {
                    self.nombreCandidato = "";
                    self.telefono = "";
                    self.departamento = "";
                    self.puesto = "";
                    self.sucursal = "";

                    if (error.response.status == 500) {
                      self.$router.push({
                        path: "/kpi/kpi"
                      });
                      self.$toast.error(self.$t("messages.error"));
                    }
                  });
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    addVacante: function addVacante() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var self, isUpdate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = _this2; //this.v$.$touch();

                console.log(self.v$); //if (self.v$.$error) return;

                _context2.next = 4;
                return self.$swal({
                  title: self.$t("¿Esta seguro de crear esta vacante?"),
                  text: self.$t("messages.question.status.description"),
                  icon: "warning",
                  showCancelButton: true
                }).then(function (result) {
                  return result.isConfirmed;
                });

              case 4:
                isUpdate = _context2.sent;

                if (isUpdate) {
                  axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(_this2.$apiAdress + "/api/kpi/addVacante" + "?token=" + localStorage.getItem("api_token"), {
                    nombreVacante: self.nombreVacante,
                    departamento: self.departamento,
                    sucursal: self.sucursal
                  }).then(function (response) {
                    console.log(response.data);
                    self.nombreVacante = "";
                    self.departamento = "";
                    self.sucursal = "";
                    self.$toast.success(self.$t("messages.insert"));
                  })["catch"](function (error) {
                    self.nombreVacante = "";
                    self.departamento = "";
                    self.sucursal = "";

                    if (error.response.status == 500) {
                      self.$router.push({
                        path: "/kpi/kpi"
                      });
                      self.$toast.error(self.$t("messages.error"));
                    }

                    if (error.response.status == 401) {
                      self.$toast.error(self.$t("Ya realizaste esta Evaluación"));
                    }
                  });
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    addVacanteSolicitud: function addVacanteSolicitud() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var self, isUpdate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                self = _this3; //this.v$.$touch();

                console.log(self.v$); //if (self.v$.$error) return;

                _context3.next = 4;
                return self.$swal({
                  title: self.$t("¿Esta seguro de crear esta vacante?"),
                  text: self.$t("messages.question.status.description"),
                  icon: "warning",
                  showCancelButton: true
                }).then(function (result) {
                  return result.isConfirmed;
                });

              case 4:
                isUpdate = _context3.sent;

                if (isUpdate) {
                  axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(_this3.$apiAdress + "/api/kpi/addVacante" + "?token=" + localStorage.getItem("api_token"), {
                    nombreVacante: self.definicion.nombre,
                    departamento: self.definicion.departamento,
                    sucursal: self.definicion.ubicacion
                  }).then(function (response) {
                    console.log(response.data);
                    self.nombreVacante = "";
                    self.departamento = "";
                    self.sucursal = "";
                    self.$toast.success(self.$t("messages.insert"));
                  })["catch"](function (error) {
                    self.nombreVacante = "";
                    self.departamento = "";
                    self.sucursal = "";

                    if (error.response.status == 500) {
                      self.$router.push({
                        path: "/kpi/kpi"
                      });
                      self.$toast.error(self.$t("messages.error"));
                    }

                    if (error.response.status == 401) {
                      self.$toast.error(self.$t("Ya realizaste esta Evaluación"));
                    }
                  });
                }

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getCandidato: function getCandidato(id) {
      var self = this;
      console.log(id);
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/kpi/getCandidato/" + id + "?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.candidato.id = response.data.candidato.id;
        self.candidato.fecha = response.data.candidato.fecha;
        self.candidato.nombre = response.data.candidato.nombre;
        self.candidato.telefono = response.data.candidato.telefono;
        self.candidato.puesto = response.data.candidato.vacante;
        self.candidato.sucursal = response.data.candidato.sucursal_id;
        self.candidato.plataforma = response.data.candidato.plataforma;
        self.candidato.proceso = response.data.candidato.proceso;
        self.candidato.departamento = response.data.candidato.departamento;
        self.candidato.proceso = response.data.candidato.estatus_id;
        self.candidato.estatus = response.data.candidato.estatus;
        self.candidato.comentarios = response.data.candidato.comentarios;
        self.isTouched = true;
        self.isInvalid;
        self.ModalCandidato = true;
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
    getVacante: function getVacante(id) {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/kpi/getVacante/" + id + "?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.linkkpi = "/api/kpi/imprimir/" + id + "/" + "?token=" + localStorage.getItem("api_token");
        self.vacante.id = response.data.vacantes.id;
        self.vacante.fecha = response.data.vacantes.fecha;
        self.vacante.nombre = response.data.vacantes.nombre;
        self.vacante.sucursal = response.data.vacantes.sucursal_id;
        self.vacante.departamento = response.data.vacantes.departamento;
        self.vacante.estatus = response.data.vacantes.estatus;
        self.vacante.descartados = response.data.vacantes.descartados;
        self.vacante.comentarios = response.data.vacantes.comentarios;
        self.labels = response.data.labels;
        self.labels2 = response.data.labels2;
        self.vacantesGrafico[0].data = response.data.vacantesGrafico;
        self.vacantesGrafico2[0].data = response.data.vacantesGrafico2;
        self.isTouched = true;
        self.isInvalid;
        self.ModalVacantes = true;
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
    updateCandidato: function updateCandidato() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var self, isUpdate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                self = _this4; //this.v$.$touch();

                console.log(self.v$); //if (self.v$.$error) return;

                _context4.next = 4;
                return self.$swal({
                  title: self.$t("¿Esta seguro de editar este candidato?"),
                  text: self.$t("messages.question.status.description"),
                  icon: "warning",
                  showCancelButton: true
                }).then(function (result) {
                  return result.isConfirmed;
                });

              case 4:
                isUpdate = _context4.sent;

                if (isUpdate) {
                  axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(_this4.$apiAdress + "/api/kpi/updateCandidato" + "?token=" + localStorage.getItem("api_token"), {
                    nombre: self.candidato.nombre,
                    telefono: self.candidato.telefono,
                    departamento: self.candidato.departamento,
                    puesto: self.candidato.puesto,
                    sucursal: self.candidato.sucursal,
                    proceso: self.candidato.proceso,
                    estatus: self.candidato.estatus,
                    plataforma: self.candidato.plataforma,
                    comentarios: self.candidato.comentarios,
                    id: self.candidato.id
                  }).then(function (response) {
                    console.log(response.data);
                    self.candidato.nombre = "";
                    self.candidato.telefono = "";
                    self.candidato.departamento = "";
                    self.candidato.puesto = "";
                    self.candidato.sucursal = "";
                    self.candidato.proceso = "";
                    self.candidato.estatus = "";
                    self.candidato.plataforma = "";
                    self.candidato.id = "";
                    self.$toast.success(self.$t("messages.insert"));
                  })["catch"](function (error) {
                    self.candidato.nombre = "";
                    self.candidato.telefono = "";
                    self.candidato.departamento = "";
                    self.candidato.puesto = "";
                    self.candidato.sucursal = "";
                    self.candidato.proceso = "";
                    self.candidato.estatus = "";
                    self.candidato.plataforma = "";

                    if (error.response.status == 500) {
                      self.$router.push({
                        path: "/kpi/kpi"
                      });
                      self.$toast.error(self.$t("messages.error"));
                    }
                  });
                }

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    updateContratacion: function updateContratacion() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var self, isUpdate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                self = _this5; //this.v$.$touch();

                console.log(self.v$); //if (self.v$.$error) return;

                _context5.next = 4;
                return self.$swal({
                  title: self.$t("¿Esta seguro de contratar este candidato y cerrar la vacante?"),
                  text: self.$t("messages.question.status.description"),
                  icon: "warning",
                  showCancelButton: true
                }).then(function (result) {
                  return result.isConfirmed;
                });

              case 4:
                isUpdate = _context5.sent;

                if (isUpdate) {
                  axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(_this5.$apiAdress + "/api/kpi/updateContratacion" + "?token=" + localStorage.getItem("api_token"), {
                    nombre: self.candidato.nombre,
                    telefono: self.candidato.telefono,
                    departamento: self.candidato.departamento,
                    puesto: self.candidato.puesto,
                    sucursal: self.candidato.sucursal,
                    proceso: self.candidato.proceso,
                    estatus: self.candidato.estatus,
                    plataforma: self.candidato.plataforma,
                    comentarios: self.candidato.comentarios,
                    id: self.candidato.id
                  }).then(function (response) {
                    console.log(response.data);
                    self.candidato.nombre = "";
                    self.candidato.telefono = "";
                    self.candidato.departamento = "";
                    self.candidato.puesto = "";
                    self.candidato.sucursal = "";
                    self.candidato.proceso = "";
                    self.candidato.estatus = "";
                    self.candidato.plataforma = "";
                    self.candidato.id = "";
                    self.$toast.success(self.$t("messages.insert"));
                  })["catch"](function (error) {
                    self.candidato.nombre = "";
                    self.candidato.telefono = "";
                    self.candidato.departamento = "";
                    self.candidato.puesto = "";
                    self.candidato.sucursal = "";
                    self.candidato.proceso = "";
                    self.candidato.estatus = "";
                    self.candidato.plataforma = "";

                    if (error.response.status == 500) {
                      self.$router.push({
                        path: "/kpi/kpi"
                      });
                      self.$toast.error(self.$t("messages.error"));
                    }
                  });
                }

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    updateVacante: function updateVacante() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var self, isUpdate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                self = _this6; //this.v$.$touch();

                console.log(self.v$); //if (self.v$.$error) return;

                _context6.next = 4;
                return self.$swal({
                  title: self.$t("¿Esta seguro de editar esta vancante?"),
                  text: self.$t("messages.question.status.description"),
                  icon: "warning",
                  showCancelButton: true
                }).then(function (result) {
                  return result.isConfirmed;
                });

              case 4:
                isUpdate = _context6.sent;

                if (isUpdate) {
                  axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(_this6.$apiAdress + "/api/kpi/updateVacante" + "?token=" + localStorage.getItem("api_token"), {
                    id: self.vacante.id,
                    fecha: self.vacante.fecha,
                    nombre: self.vacante.nombre,
                    sucursal: self.vacante.sucursal,
                    departamento: self.vacante.departamento,
                    estatus: self.vacante.estatus,
                    descartados: self.vacante.descartados,
                    comentarios: self.vacante.comentarios
                  }).then(function (response) {
                    console.log(response.data);
                    self.vacante.id = "";
                    self.vacante.fecha = "";
                    self.vacante.nombre = "";
                    self.vacante.sucursal = "";
                    self.vacante.departamento = "";
                    self.vacante.estatus = "";
                    self.vacante.descartados = "";
                    self.$toast.success(self.$t("messages.insert"));
                  })["catch"](function (error) {
                    self.vacante.fecha = "";
                    self.vacante.nombre = "";
                    self.vacante.sucursal = "";
                    self.vacante.departamento = "";
                    self.vacante.estatus = "";
                    self.vacante.descartados = "";

                    if (error.response.status == 500) {
                      self.$router.push({
                        path: "/kpi/kpi"
                      });
                      self.$toast.error(self.$t("messages.error"));
                    }
                  });
                }

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    getSolicitud: function getSolicitud(id) {
      var self = this;
      console.log(id);
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/kpi/getSolicitud/" + id + "?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.solicitante.fecha = response.data.solicitud.fecha;
        self.solicitante.nombre = response.data.solicitud.nombre_solicitante;
        self.solicitante.puesto = response.data.solicitud.puesto_solicitante;
        self.especificaciones.tipo = response.data.solicitud.tipo_especificaciones;
        self.especificaciones.motivo = response.data.solicitud.motivo_especificaciones;
        self.especificaciones.personaSustituir = response.data.solicitud.persona_sustituir;
        self.definicion.tipo = response.data.solicitud.tipo_definicion;
        self.definicion.nombre = response.data.solicitud.nombre_definicion;
        self.definicion.departamento = response.data.solicitud.departamento_definicion;
        self.definicion.ubicacion = response.data.solicitud.ubicacion_definicion;
        self.definicion.horario = response.data.solicitud.horario;
        self.definicion.funciones = response.data.solicitud.funciones;
        self.perfil.escolaridad = response.data.solicitud.escolaridad;
        self.perfil.idiomas = response.data.solicitud.idiomas;
        self.perfil.equipo = response.data.solicitud.perfil_equipo;
        self.perfil.sistema = response.data.solicitud.perfil_sistema;
        self.perfil.experiencia = response.data.solicitud.experiencia;
        self.perfil.sexo = response.data.solicitud.sexo;
        self.perfil.estadoCivil = response.data.solicitud.estadoCivil;
        self.perfil.edad = response.data.solicitud.edad;
        self.habilidades.comprension = response.data.solicitud.habilidades_comprension;
        self.habilidades.seguimiento = response.data.solicitud.habilidades_seguimiento;
        self.habilidades.objetividad = response.data.solicitud.habilidades_objetividad;
        self.habilidades.manejo = response.data.solicitud.habilidades_manejo;
        self.habilidades.negociacion = response.data.solicitud.habilidades_negociacion;
        self.habilidades.decisiones = response.data.solicitud.habilidades_decisiones;
        self.habilidades.poder = response.data.solicitud.habilidades_poder;
        self.habilidades.palabra = response.data.solicitud.habilidades_palabra;
        self.habilidades.dominio = response.data.solicitud.habilidades_dominio;
        self.habilidades.asertividad = response.data.solicitud.habilidades_asertividad;
        self.habilidades.iniciativa = response.data.solicitud.habilidades_iniciativa;
        self.habilidades.creatividad = response.data.solicitud.habilidades_creatividad;
        self.habilidades.resultados = response.data.solicitud.habilidades_resultados;
        self.habilidades.adaptable = response.data.solicitud.habilidades_adaptable;
        self.habilidades.logico = response.data.solicitud.habilidades_logico;
        self.habilidades.concentracion = response.data.solicitud.habilidades_concentracion;
        self.habilidades.equipo = response.data.solicitud.habilidades_equipo;
        self.habilidades.estres = response.data.solicitud.habilidades_estres;
        self.actitudes.responsable = response.data.solicitud.actitudes_responsable;
        self.actitudes.empatico = response.data.solicitud.actitudes_empatico;
        self.actitudes.emprendedor = response.data.solicitud.actitudes_emprendedor;
        self.actitudes.colaborador = response.data.solicitud.actitudes_colaborador;
        self.actitudes.normas = response.data.solicitud.actitudes_normas;
        self.actitudes.comentarios = response.data.solicitud.actitudes_comentarios;
        self.isTouched = true;
        self.isInvalid;
        self.ModalSolicitudPersonal = true;
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
    formatData: function formatData() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var formatItems, formatItems2, formatItems3, formatItems4, formatItems5;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _this7.items.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    sucursal_desc: item.sucursal ? item.sucursal.name : "",
                    estatus_desc: item.estatus ? item.estatus.text : "",
                    vacante_desc: item.vacante ? item.vacante.nombre : ""
                  });
                });

              case 2:
                formatItems = _context7.sent;
                _context7.next = 5;
                return _this7.items2.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    dias: Math.floor((new Date().getTime() - new Date(item.fecha).getTime()) / (1000 * 60 * 60 * 24)),
                    sucursal_desc: item.sucursal ? item.sucursal.name : "",
                    estatus_desc: item.estatus ? item.estatus.text : ""
                  });
                });

              case 5:
                formatItems2 = _context7.sent;
                _context7.next = 8;
                return _this7.items3.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    sucursal_desc: item.sucursal ? item.sucursal.name : "",
                    estatus_desc: item.estatus ? item.estatus.text : "",
                    vacante_desc: item.vacante ? item.vacante.nombre : ""
                  });
                });

              case 8:
                formatItems3 = _context7.sent;
                _context7.next = 11;
                return _this7.items4.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    sucursal_desc: item.sucursal ? item.sucursal.name : "",
                    estatus_desc: item.estatus ? item.estatus.text : ""
                  });
                });

              case 11:
                formatItems4 = _context7.sent;
                _context7.next = 14;
                return _this7.items5.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    sucursal_desc: item.ubicacion_definicion ? item.sucursal.name : "",
                    departamento_desc: item.departamento_definicion ? item.departamento.text : ""
                  });
                });

              case 14:
                formatItems5 = _context7.sent;
                _this7.items = formatItems;
                _this7.items2 = formatItems2;
                _this7.items3 = formatItems3;
                _this7.items4 = formatItems4;
                _this7.items5 = formatItems5;
                _this7.loading = false;

              case 21:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    selectCheckbox: function selectCheckbox(slug, code) {
      switch (slug) {
        case "setPassword":
          this.setPassword = !code;
          break;
      }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/kpi/kpi.vue?vue&type=template&id=840a90c2&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/kpi/kpi.vue?vue&type=template&id=840a90c2& ***!
  \****************************************************************************************************************************************************************************************************/
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
              _vm._v("\n         \n        "),
              _c("span", { staticClass: "h4" }, [_vm._v("KPI's")]),
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
                          _vm.editModaladdCandidato = true
                        },
                      },
                    },
                    [
                      _c("CIcon", {
                        attrs: { content: _vm.$options.plusIcon },
                      }),
                      _vm._v(" Agregar candidato\n          "),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CButton",
                    {
                      attrs: { color: "success", size: "sm", block: "" },
                      on: {
                        click: function ($event) {
                          _vm.editModaladdVacante = true
                        },
                      },
                    },
                    [
                      _c("CIcon", {
                        attrs: { content: _vm.$options.plusIcon },
                      }),
                      _vm._v(" Agregar vacante\n          "),
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
                      _c("CIcon", {
                        attrs: {
                          name:
                            _vm.activeTab === 1
                              ? "cil-folder-open"
                              : "cil-folder",
                        },
                      }),
                      _vm._v(" Candidatos\n          "),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("CRow", [_c("CCol", [_vm._v(" ")])], 1),
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
                                            return _vm.getCandidato(item.id)
                                          },
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                    Ver candidato\n                  "
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
                      _vm._v(" Vacantes\n          "),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("CRow", [_c("CCol", [_vm._v(" ")])], 1),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CDataTable", {
                        attrs: {
                          items: _vm.items2,
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
                        scopedSlots: _vm._u([
                          {
                            key: "show_details",
                            fn: function (ref) {
                              var item = ref.item
                              return [
                                item.sucursal.city_id == 1 && item.dias < 23
                                  ? _c(
                                      "td",
                                      {
                                        staticClass: "py-2",
                                        staticStyle: {
                                          "background-color": "#00C900",
                                        },
                                      },
                                      [
                                        _c(
                                          "CButton",
                                          {
                                            attrs: {
                                              color: "#00C900",
                                              square: "",
                                              size: "sm",
                                            },
                                            on: {
                                              click: function ($event) {
                                                return _vm.getVacante(item.id)
                                              },
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n                    Ver vacante\n                  "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                item.sucursal.city_id == 1 &&
                                item.dias > 22 &&
                                item.dias < 31
                                  ? _c(
                                      "td",
                                      {
                                        staticClass: "py-2",
                                        staticStyle: {
                                          "background-color": "#FFFF00",
                                        },
                                      },
                                      [
                                        _c(
                                          "CButton",
                                          {
                                            attrs: {
                                              color: "#FFFF00",
                                              square: "",
                                              size: "sm",
                                            },
                                            on: {
                                              click: function ($event) {
                                                return _vm.getVacante(item.id)
                                              },
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n                    Ver vacante\n                  "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                item.sucursal.city_id == 1 && item.dias > 30
                                  ? _c(
                                      "td",
                                      {
                                        staticClass: "py-2",
                                        staticStyle: {
                                          "background-color": "#FF0000",
                                        },
                                      },
                                      [
                                        _c(
                                          "CButton",
                                          {
                                            attrs: {
                                              color: "#FF0000",
                                              square: "",
                                              size: "sm",
                                            },
                                            on: {
                                              click: function ($event) {
                                                return _vm.getVacante(item.id)
                                              },
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n                    Ver vacante\n                  "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                item.sucursal.city_id !== 1 && item.dias < 49
                                  ? _c(
                                      "td",
                                      {
                                        staticClass: "py-2",
                                        staticStyle: {
                                          "background-color": "#00C900",
                                        },
                                      },
                                      [
                                        _c(
                                          "CButton",
                                          {
                                            attrs: {
                                              color: "#00C900",
                                              square: "",
                                              size: "sm",
                                            },
                                            on: {
                                              click: function ($event) {
                                                return _vm.getVacante(item.id)
                                              },
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n                    Ver vacante\n                  "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                item.sucursal.city_id !== 1 &&
                                item.dias > 48 &&
                                item.dias < 61
                                  ? _c(
                                      "td",
                                      {
                                        staticClass: "py-2",
                                        staticStyle: {
                                          "background-color": "#FFFF00",
                                        },
                                      },
                                      [
                                        _c(
                                          "CButton",
                                          {
                                            attrs: {
                                              color: "#FFFF00",
                                              square: "",
                                              size: "sm",
                                            },
                                            on: {
                                              click: function ($event) {
                                                return _vm.getVacante(item.id)
                                              },
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n                    Ver vacante\n                  "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                item.sucursal.city_id !== 1 && item.dias > 60
                                  ? _c(
                                      "td",
                                      {
                                        staticClass: "py-2",
                                        staticStyle: {
                                          "background-color": "#FF0000",
                                        },
                                      },
                                      [
                                        _c(
                                          "CButton",
                                          {
                                            attrs: {
                                              color: "#FF0000",
                                              square: "",
                                              size: "sm",
                                            },
                                            on: {
                                              click: function ($event) {
                                                return _vm.getVacante(item.id)
                                              },
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n                    Ver vacante\n                  "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    )
                                  : _vm._e(),
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
                      _vm._v(" Historial de Candidatos\n          "),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("CRow", [_c("CCol", [_vm._v(" ")])], 1),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CDataTable", {
                        attrs: {
                          items: _vm.items3,
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
                                            return _vm.getCandidato(item.id)
                                          },
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                    Ver candidato\n                  "
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
                      _vm._v(" Historial de Vacantes\n          "),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("CRow", [_c("CCol", [_vm._v(" ")])], 1),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CDataTable", {
                        attrs: {
                          items: _vm.items4,
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
                                            return _vm.getVacante(item.id)
                                          },
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                    Ver vacante\n                  "
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
                      _vm._v(" Solicitudes de personal\n          "),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("CRow", [_c("CCol", [_vm._v(" ")])], 1),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c("CDataTable", {
                        attrs: {
                          items: _vm.items5,
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
                                            return _vm.getSolicitud(item.id)
                                          },
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                    Ver solicitud\n                  "
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
                "CModal",
                {
                  attrs: {
                    centered: true,
                    entered: true,
                    title: "KPI's Vacantes",
                    size: "xl",
                    show: _vm.editModaladdVacante,
                  },
                  on: {
                    "update:show": function ($event) {
                      _vm.editModaladdVacante = $event
                    },
                  },
                },
                [
                  _c(
                    "div",
                    { attrs: { slot: "footer" }, slot: "footer" },
                    [
                      _c(
                        "CCol",
                        { attrs: { sm: "6" } },
                        [
                          _c(
                            "CButton",
                            {
                              attrs: { color: "success", variant: "outline" },
                              on: {
                                click: function ($event) {
                                  _vm.addVacante(),
                                    (_vm.editModaladdVacante = false)
                                },
                              },
                            },
                            [_vm._v(" Guardar\n              ")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("h3", { staticClass: "text-center" }, [
                    _vm._v("KPI's - VACANTES"),
                  ]),
                  _vm._v(" "),
                  _c("p"),
                  _vm._v(" "),
                  _c("table", { staticClass: "table" }, [
                    _c("tbody", { attrs: { width: "100%" } }, [
                      _c("tr", [
                        _c(
                          "th",
                          { attrs: { width: "25%" } },
                          [
                            _c("CInput", {
                              attrs: {
                                value: _vm.Fechahoy,
                                label: "Fecha:",
                                placeholder: "Ingrese fecha",
                                type: "date",
                                disabled: "",
                              },
                              on: {
                                "update:value": function ($event) {
                                  _vm.Fechahoy = $event
                                },
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          { attrs: { width: "75%" } },
                          [
                            _c("CInput", {
                              attrs: {
                                value: _vm.nombreVacante,
                                label: "Nombre de la vacante:",
                                placeholder: "Ingrese nombre de la vacante",
                              },
                              on: {
                                "update:value": function ($event) {
                                  _vm.nombreVacante = $event
                                },
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c(
                          "th",
                          { attrs: { width: "50%" } },
                          [
                            _c("CSelect", {
                              attrs: {
                                value: _vm.departamento,
                                label: "Departamento:",
                                placeholder: "Ingrese departamento",
                                options: _vm.departamentos,
                              },
                              on: {
                                "update:value": function ($event) {
                                  _vm.departamento = $event
                                },
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          { attrs: { width: "50%" } },
                          [
                            _c("CSelect", {
                              attrs: {
                                value: _vm.sucursal,
                                label: "Sucursal:",
                                placeholder: "Ingrese sucursal",
                                options: _vm.sucursales,
                              },
                              on: {
                                "update:value": function ($event) {
                                  _vm.sucursal = $event
                                },
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "CModal",
                {
                  attrs: {
                    centered: true,
                    title: "KPI's Candidatos",
                    size: "lg",
                    show: _vm.editModaladdCandidato,
                  },
                  on: {
                    "update:show": [
                      function ($event) {
                        _vm.editModaladdCandidato = $event
                      },
                      _vm.closeModal,
                    ],
                  },
                },
                [
                  _c("h3", { staticClass: "text-center" }, [
                    _vm._v("KPI's - Candidatos"),
                  ]),
                  _vm._v(" "),
                  _c("p"),
                  _vm._v(" "),
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
                                  value: _vm.Fechahoy,
                                  label: "Fecha:",
                                  placeholder: "Ingrese fecha",
                                  type: "date",
                                  disabled: "",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    _vm.Fechahoy = $event
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
                                  value: _vm.nombreCandidato,
                                  label: "Nombre completo",
                                  placeholder: "Nombre",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    _vm.nombreCandidato = $event
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
                                  value: _vm.telefono,
                                  label: "Teléfono",
                                  placeholder: "Teléfono",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    _vm.telefono = $event
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
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.departamento,
                                  label: "Departamento",
                                  placeholder: "Selecciona un Departamento",
                                  options: _vm.departamentos,
                                },
                                on: {
                                  "update:value": function ($event) {
                                    _vm.departamento = $event
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
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.puesto,
                                  plain: true,
                                  options: _vm.puestos,
                                  label: "Puesto",
                                  placeholder: "Selecciona un Puesto",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    _vm.puesto = $event
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
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.sucursal,
                                  plain: true,
                                  label: "Sucursal",
                                  options: _vm.sucursales,
                                  placeholder: "Selecciona una Sucursal",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    _vm.sucursal = $event
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
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.plataforma,
                                  plain: true,
                                  label: "Plataforma",
                                  options: _vm.plataformas,
                                  placeholder: "Selecciona una Plataforma",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    _vm.plataforma = $event
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
                          attrs: { color: "success", variant: "outline" },
                          on: {
                            click: function ($event) {
                              _vm.addCandidato(),
                                (_vm.editModaladdCandidato = false)
                            },
                          },
                        },
                        [_vm._v(" Guardar\n            ")]
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
                    title: "KPI's Candidatos",
                    size: "lg",
                    show: _vm.ModalCandidato,
                  },
                  on: {
                    "update:show": [
                      function ($event) {
                        _vm.ModalCandidato = $event
                      },
                      _vm.closeModal,
                    ],
                  },
                },
                [
                  _c("h3", { staticClass: "text-center" }, [
                    _vm._v("KPI's - "),
                    _c("b", [_vm._v(_vm._s(_vm.candidato.nombre))]),
                  ]),
                  _vm._v(" "),
                  _c("p"),
                  _vm._v(" "),
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
                                  value: _vm.candidato.fecha,
                                  label: "Fecha:",
                                  placeholder: "Ingrese fecha",
                                  disabled: "",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.candidato,
                                      "fecha",
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
                            { attrs: { sm: "8" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  value: _vm.candidato.nombre,
                                  label: "Nombre completo",
                                  placeholder: "Nombre",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.candidato,
                                      "nombre",
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
                                  value: _vm.candidato.telefono,
                                  label: "Teléfono",
                                  placeholder: "Teléfono",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.candidato,
                                      "telefono",
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
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.candidato.departamento,
                                  label: "Departamento",
                                  placeholder: "Selecciona un Departamento",
                                  options: _vm.departamentos,
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.candidato,
                                      "departamento",
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
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.candidato.puesto,
                                  plain: true,
                                  options: _vm.puestos,
                                  label: "Puesto",
                                  placeholder: "Selecciona un Puesto",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.candidato,
                                      "puesto",
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
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.candidato.sucursal,
                                  plain: true,
                                  label: "Sucursal",
                                  options: _vm.sucursales,
                                  placeholder: "Selecciona una Sucursal",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.candidato,
                                      "sucursal",
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
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.candidato.proceso,
                                  plain: true,
                                  label: "Estatus",
                                  options: _vm.proceso,
                                  placeholder: "Selecciona Activo/Inactivo",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.candidato,
                                      "proceso",
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
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.candidato.plataforma,
                                  plain: true,
                                  label: "Plataforma",
                                  options: _vm.plataformas,
                                  placeholder: "Selecciona una Plataforma",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.candidato,
                                      "plataforma",
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
                            { attrs: { sm: "12" } },
                            [
                              _c("CTextarea", {
                                attrs: {
                                  value: _vm.candidato.comentarios,
                                  label: "Comentarios",
                                  placeholder:
                                    "Escribe tus comentarios del candidato",
                                  rows: "3",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.candidato,
                                      "comentarios",
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
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.candidato.estatus,
                                  plain: true,
                                  label: "Activo/Inactivo",
                                  options: _vm.estatus,
                                  placeholder: "Selecciona Activo/Inactivo",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.candidato,
                                      "estatus",
                                      $event
                                    )
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
                              _vm.updateContratacion(),
                                (_vm.ModalCandidato = false)
                            },
                          },
                        },
                        [
                          _vm._v(
                            " Contratado\n              & Cerrar vacante\n            "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: { color: "primary", variant: "outline" },
                          on: {
                            click: function ($event) {
                              _vm.updateCandidato(),
                                (_vm.ModalCandidato = false)
                            },
                          },
                        },
                        [_vm._v(" Modificar\n            ")]
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
                    title: "KPI's Vacantes",
                    size: "lg",
                    show: _vm.ModalVacantes,
                  },
                  on: {
                    "update:show": [
                      function ($event) {
                        _vm.ModalVacantes = $event
                      },
                      _vm.closeModal,
                    ],
                  },
                },
                [
                  _c("h3", { staticClass: "text-center" }, [
                    _vm._v("KPI's - "),
                    _c("b", [_vm._v(_vm._s(_vm.vacante.nombre))]),
                  ]),
                  _vm._v(" "),
                  _c("p"),
                  _vm._v(" "),
                  _c(
                    "CForm",
                    { attrs: { autocomplete: "on" } },
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
                                  value: _vm.vacante.fecha,
                                  label: "Fecha:",
                                  placeholder: "Ingrese fecha",
                                  disabled: "",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.vacante,
                                      "fecha",
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
                            { attrs: { sm: "8" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  value: _vm.vacante.nombre,
                                  label: "Nombre de la vacante",
                                  placeholder: "Nombre de la vacante",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.vacante,
                                      "nombre",
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
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.vacante.departamento,
                                  label: "Departamento",
                                  placeholder: "Selecciona un Departamento",
                                  options: _vm.departamentos,
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.vacante,
                                      "departamento",
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
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.vacante.sucursal,
                                  plain: true,
                                  label: "Sucursal",
                                  options: _vm.sucursales,
                                  placeholder: "Selecciona una Sucursal",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.vacante,
                                      "sucursal",
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
                                  value: _vm.vacante.descartados,
                                  label: "Numero de descartados",
                                  placeholder: "Numero de descartados",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.vacante,
                                      "descartados",
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
                            { attrs: { sm: "12" } },
                            [
                              _c("CTextarea", {
                                attrs: {
                                  value: _vm.vacante.comentarios,
                                  label: "Comentarios",
                                  placeholder:
                                    "Escribe tus comentarios del candidato",
                                  rows: "3",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.vacante,
                                      "comentarios",
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
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.vacante.estatus,
                                  plain: true,
                                  label: "Activo/Inactivo",
                                  options: _vm.estatus,
                                  placeholder: "Selecciona Activo/Inactivo",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.vacante,
                                      "estatus",
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
                            { attrs: { sm: "8" } },
                            [
                              _c("br"),
                              _c(
                                "CButton",
                                {
                                  staticStyle: { float: "right" },
                                  attrs: {
                                    href: _vm.linkkpi,
                                    color: "primary",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n           Imprimir KPI\n          "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("p"),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "12" } },
                            [
                              _c("p", { staticClass: "h4" }, [
                                _vm._v("Postulados para la vacante "),
                                _c("b", [_vm._v(_vm._s(_vm.vacante.nombre))]),
                              ]),
                              _vm._v(" "),
                              _c("CChartBar", {
                                staticStyle: {
                                  height: "300px",
                                  "background-color":
                                    "rgba(58, 116, 165, 0.09)",
                                },
                                attrs: {
                                  datasets: _vm.vacantesGrafico,
                                  labels: _vm.labels,
                                  options: {
                                    maintainAspectRatio: false,
                                  },
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("p"),
                          _vm._v(" "),
                          _c("p"),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "12" } },
                            [
                              _c("p", { staticClass: "h4" }, [
                                _vm._v("Candidatos para la vacante "),
                                _c("b", [_vm._v(_vm._s(_vm.vacante.nombre))]),
                              ]),
                              _vm._v(" "),
                              _c("CChartBar", {
                                staticStyle: {
                                  height: "300px",
                                  "background-color":
                                    "rgba(58, 116, 165, 0.09)",
                                },
                                attrs: {
                                  datasets: _vm.vacantesGrafico2,
                                  labels: _vm.labels2,
                                  options: {
                                    maintainAspectRatio: false,
                                  },
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("p"),
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
                              _vm.updateVacante(), (_vm.ModalVacantes = false)
                            },
                          },
                        },
                        [_vm._v(" Modificar\n            ")]
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
                    title: "KPI's Solicitudes de personal",
                    size: "xl",
                    show: _vm.ModalSolicitudPersonal,
                  },
                  on: {
                    "update:show": function ($event) {
                      _vm.ModalSolicitudPersonal = $event
                    },
                  },
                },
                [
                  _c(
                    "div",
                    { attrs: { slot: "footer" }, slot: "footer" },
                    [
                      _c(
                        "CCol",
                        { attrs: { sm: "6" } },
                        [
                          _c(
                            "CButton",
                            {
                              attrs: { color: "success", variant: "outline" },
                              on: {
                                click: function ($event) {
                                  _vm.addVacanteSolicitud(),
                                    (_vm.ModalSolicitudPersonal = false)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                Crear vacante\n              "
                              ),
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
                    "CForm",
                    { attrs: { autocomplete: "on" } },
                    [
                      _c(
                        "CRow",
                        { staticClass: "bg-success p-2 text-white" },
                        [
                          _c("CCol", { attrs: { sm: "12" } }, [
                            _c("h3", { staticClass: "text-center" }, [
                              _vm._v("KPI's - Solicitud de personal"),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "3" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  label: "Fecha:",
                                  value: _vm.solicitante.fecha,
                                  placeholder: "Ingrese fecha",
                                  disabled: "",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.solicitante,
                                      "fecha",
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
                            { attrs: { sm: "5" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  label: "Nombre del solicitante",
                                  value: _vm.solicitante.nombre,
                                  placeholder: "Nombre del solicitante",
                                  disabled: "",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.solicitante,
                                      "nombre",
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
                                  label: "Cargo del solicitante",
                                  value: _vm.solicitante.puesto,
                                  placeholder: "Cargo del solicitante",
                                  disabled: "",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.solicitante,
                                      "puesto",
                                      $event
                                    )
                                  },
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("p"),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        [
                          _c("br"),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "12" } }, [
                            _c("h3", { staticClass: "text-center" }, [
                              _vm._v("Especificaciones de la Requisición"),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "3" } },
                            [
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.especificaciones.tipo,
                                  plain: true,
                                  label: "Requisición",
                                  disabled: "",
                                  options: _vm.requerimientos,
                                  placeholder: "Selecciona una opcion",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.especificaciones,
                                      "tipo",
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
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.especificaciones.motivo,
                                  plain: true,
                                  label: "Motivo",
                                  options: _vm.motivo,
                                  disabled: "",
                                  placeholder: "Selecciona una motivo",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.especificaciones,
                                      "motivo",
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
                            { attrs: { sm: "5" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  label: "Nombre de la persona a sustituir",
                                  value: _vm.especificaciones.personaSustituir,
                                  placeholder:
                                    "Nombre de la persona a sustituir",
                                  disabled: "",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.especificaciones,
                                      "personaSustituir",
                                      $event
                                    )
                                  },
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("p"),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        [
                          _c("br"),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "12" } }, [
                            _c("h3", { staticClass: "text-center" }, [
                              _vm._v("Definición del Puesto"),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.definicion.tipo,
                                  plain: true,
                                  label: "Tipo de puesto",
                                  options: _vm.puesto,
                                  disabled: "",
                                  placeholder: "Selecciona una opcion",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.definicion,
                                      "tipo",
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
                                  value: _vm.definicion.nombre,
                                  label: "Nombre del puesto",
                                  placeholder: "Nombre del puesto",
                                  disabled: "",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.definicion,
                                      "nombre",
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
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.definicion.departamento,
                                  plain: true,
                                  label: "Departamento del puesto",
                                  disabled: "",
                                  options: _vm.departamentos,
                                  placeholder: "Selecciona una opcion",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.definicion,
                                      "departamento",
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
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.definicion.ubicacion,
                                  plain: true,
                                  label: "Ubicacion fisica del puesto",
                                  disabled: "",
                                  options: _vm.sucursal,
                                  placeholder: "Selecciona una Sucursal",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.definicion,
                                      "ubicacion",
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
                            { attrs: { sm: "8" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  value: _vm.definicion.horario,
                                  label: "Horario de la jornada laboral",
                                  disabled: "",
                                  placeholder: "Horario de la jornada laboral",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.definicion,
                                      "horario",
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
                            { attrs: { sm: "12" } },
                            [
                              _c("CTextarea", {
                                attrs: {
                                  value: _vm.definicion.funciones,
                                  label: "Funciones generales del puesto",
                                  disabled: "",
                                  placeholder: "Funciones generales del puesto",
                                  rows: "2",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.definicion,
                                      "funciones",
                                      $event
                                    )
                                  },
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("p"),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        [
                          _c("br"),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "12" } }, [
                            _c("h3", { staticClass: "text-center" }, [
                              _vm._v(
                                "Perfil Requerido (Conocimientos Generales)"
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.perfil.escolaridad,
                                  plain: true,
                                  label: "Escolaridad o grado academico",
                                  options: _vm.escolaridad,
                                  placeholder: "Escolaridad o grado academico",
                                  disabled: "",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.perfil,
                                      "escolaridad",
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
                            { attrs: { sm: "8" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  value: _vm.perfil.idiomas,
                                  label: "Dominio de idiomas",
                                  placeholder: "Dominio de idiomas",
                                  disabled: "",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.perfil,
                                      "idiomas",
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
                            { attrs: { sm: "12" } },
                            [
                              _c("CTextarea", {
                                attrs: {
                                  value: _vm.perfil.equipo,
                                  label: "Manejo de equipo y/o maquinaria",
                                  disabled: "",
                                  placeholder:
                                    "Manejo de equipo y/o maquinaria",
                                  rows: "2",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.perfil,
                                      "equipo",
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
                            { attrs: { sm: "12" } },
                            [
                              _c("CTextarea", {
                                attrs: {
                                  value: _vm.perfil.sistema,
                                  label:
                                    "Manejo de sistemas y/o programas electronicos",
                                  disabled: "",
                                  placeholder:
                                    "Manejo de sistemas y/o programas electronicos",
                                  rows: "2",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.perfil,
                                      "sistema",
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
                            { attrs: { sm: "6" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  value: _vm.perfil.experiencia,
                                  label: "Experiencia",
                                  placeholder: "Experiencia en funciones",
                                  disabled: "",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.perfil,
                                      "experiencia",
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
                            { attrs: { sm: "6" } },
                            [
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.perfil.sexo,
                                  plain: true,
                                  label: "Sexo",
                                  options: _vm.sexo,
                                  placeholder: "Sexo",
                                  disabled: "",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(_vm.perfil, "sexo", $event)
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
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.perfil.estadoCivil,
                                  plain: true,
                                  label: "Estado civil",
                                  options: _vm.estadoCivil,
                                  disabled: "",
                                  placeholder: "Estado civil",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.perfil,
                                      "estadoCivil",
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
                            { attrs: { sm: "6" } },
                            [
                              _c("CInput", {
                                attrs: {
                                  value: _vm.perfil.edad,
                                  label: "Rango de edad",
                                  placeholder: "Rango de edad",
                                  disabled: "",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(_vm.perfil, "edad", $event)
                                  },
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("p"),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        [
                          _c("br"),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "12" } }, [
                            _c("h3", { staticClass: "text-center" }, [
                              _vm._v("HABILIDADES REQUERIDAS"),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c("label", [_c("b", [_vm._v("ANALISIS")])]),
                              _vm._v(" "),
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "habilidades.comprension",
                                  checked: _vm.habilidades.comprension,
                                  label: "Comprensión verbal/escrita",
                                  disabled: "",
                                },
                              }),
                              _vm._v(" "),
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "habilidades.seguimiento",
                                  checked: _vm.habilidades.seguimiento,
                                  label:
                                    "Seguimiento de instrucciones/procedimientos",
                                  disabled: "",
                                },
                              }),
                              _vm._v(" "),
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "habilidades.objetividad",
                                  checked: _vm.habilidades.objetividad,
                                  label:
                                    "Objetividad en el manejo de información",
                                  disabled: "",
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
                              _c("label", [_c("b", [_vm._v("LIDERAZGO")])]),
                              _vm._v(" "),
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "habilidades.manejo",
                                  checked: _vm.habilidades.manejo,
                                  label: "Manejo de personal",
                                  disabled: "",
                                },
                              }),
                              _vm._v(" "),
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "habilidades.negociacion",
                                  checked: _vm.habilidades.negociacion,
                                  label: "Negociación",
                                  disabled: "",
                                },
                              }),
                              _vm._v(" "),
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "habilidades.decisiones",
                                  checked: _vm.habilidades.decisiones,
                                  label: "Toma de decisiones",
                                  disabled: "",
                                },
                              }),
                              _vm._v(" "),
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "habilidades.poder",
                                  checked: _vm.habilidades.poder,
                                  label:
                                    "Poder personal (lograr que sucedan las cosas)",
                                  disabled: "",
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
                              _c("label", [_c("b", [_vm._v("COMUNICACION")])]),
                              _vm._v(" "),
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "habilidades.palabra",
                                  checked: _vm.habilidades.palabra,
                                  label: "Facilidad de palabra",
                                  disabled: "",
                                },
                              }),
                              _vm._v(" "),
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "habilidades.dominio",
                                  checked: _vm.habilidades.dominio,
                                  label: "Dominio de público",
                                  disabled: "",
                                },
                              }),
                              _vm._v(" "),
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "habilidades.asertividad",
                                  checked: _vm.habilidades.asertividad,
                                  label: "Asertividad",
                                  disabled: "",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "12" } }, [
                            _c("label", [
                              _c("b", [_vm._v("PLANEACION / ORGANIZACION")]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "habilidades.iniciativa",
                                  checked: _vm.habilidades.iniciativa,
                                  label: "Iniciativa",
                                  disabled: "",
                                },
                              }),
                              _vm._v(" "),
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "habilidades.creatividad",
                                  checked: _vm.habilidades.creatividad,
                                  label: "Creatividad",
                                  disabled: "",
                                },
                              }),
                              _vm._v(" "),
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "habilidades.resultados",
                                  checked: _vm.habilidades.resultados,
                                  label: "Orientado a resultados",
                                  disabled: "",
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
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "habilidades.adaptable",
                                  checked: _vm.habilidades.adaptable,
                                  label: "Adaptable a cambios",
                                  disabled: "",
                                },
                              }),
                              _vm._v(" "),
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "habilidades.logico",
                                  checked: _vm.habilidades.logico,
                                  label:
                                    "Clasificación y orden lógico de información",
                                  disabled: "",
                                },
                              }),
                              _vm._v(" "),
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "habilidades.concentracion",
                                  checked: _vm.habilidades.concentracion,
                                  label: "Concentración",
                                  disabled: "",
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
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "habilidades.equipo",
                                  checked: _vm.habilidades.equipo,
                                  label: "Trabajo en equipo",
                                  disabled: "",
                                },
                              }),
                              _vm._v(" "),
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "habilidades.estres",
                                  checked: _vm.habilidades.estres,
                                  label: "Manejo de estrés laboral",
                                  disabled: "",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("p"),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        [
                          _c("br"),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "12" } }, [
                            _c("h3", { staticClass: "text-center" }, [
                              _vm._v("ACTITUDES REQUERIDAS"),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "12" } }, [
                            _c("label", [_c("b", [_vm._v("ACTITUDES")])]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "4" } },
                            [
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "actitudes.responsable",
                                  checked: _vm.actitudes.responsable,
                                  label: "Responsable",
                                  disabled: "",
                                },
                              }),
                              _vm._v(" "),
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "actitudes.empatico",
                                  checked: _vm.actitudes.empatico,
                                  label: "Empático",
                                  disabled: "",
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
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "actitudes.emprendedor",
                                  checked: _vm.actitudes.emprendedor,
                                  label: "Emprendedor",
                                  disabled: "",
                                },
                              }),
                              _vm._v(" "),
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "actitudes.colaborador",
                                  checked: _vm.actitudes.colaborador,
                                  label: "Colaborador",
                                  disabled: "",
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
                              _c("CInputCheckbox", {
                                attrs: {
                                  id: "actitudes.normas",
                                  checked: _vm.actitudes.normas,
                                  label: "Apego a normas",
                                  disabled: "",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "12" } },
                            [
                              _c("CTextarea", {
                                attrs: {
                                  label:
                                    "Otras habilidades o actitudes requeridas",
                                  value: _vm.actitudes.comentarios,
                                  placeholder:
                                    "Otras habilidades o actitudes requeridas",
                                  rows: "2",
                                  disabled: "",
                                },
                                on: {
                                  "update:value": function ($event) {
                                    return _vm.$set(
                                      _vm.actitudes,
                                      "comentarios",
                                      $event
                                    )
                                  },
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("p"),
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