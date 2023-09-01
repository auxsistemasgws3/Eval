(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

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

/***/ "../coreui/src/views/ordenes/OrdenCreate.vue":
/*!***************************************************!*\
  !*** ../coreui/src/views/ordenes/OrdenCreate.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrdenCreate_vue_vue_type_template_id_85d168d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrdenCreate.vue?vue&type=template&id=85d168d6& */ "../coreui/src/views/ordenes/OrdenCreate.vue?vue&type=template&id=85d168d6&");
/* harmony import */ var _OrdenCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrdenCreate.vue?vue&type=script&lang=js& */ "../coreui/src/views/ordenes/OrdenCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrdenCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrdenCreate_vue_vue_type_template_id_85d168d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrdenCreate_vue_vue_type_template_id_85d168d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/ordenes/OrdenCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/ordenes/OrdenCreate.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ../coreui/src/views/ordenes/OrdenCreate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdenCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./OrdenCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/ordenes/OrdenCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdenCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/ordenes/OrdenCreate.vue?vue&type=template&id=85d168d6&":
/*!**********************************************************************************!*\
  !*** ../coreui/src/views/ordenes/OrdenCreate.vue?vue&type=template&id=85d168d6& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdenCreate_vue_vue_type_template_id_85d168d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./OrdenCreate.vue?vue&type=template&id=85d168d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/ordenes/OrdenCreate.vue?vue&type=template&id=85d168d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdenCreate_vue_vue_type_template_id_85d168d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdenCreate_vue_vue_type_template_id_85d168d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/ordenes/OrdenCreate.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/ordenes/OrdenCreate.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/validators */ "../coreui/src/utils/validators.js");
/* harmony import */ var _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vuelidate/validators */ "../coreui/node_modules/@vuelidate/validators/dist/index.esm.js");
/* harmony import */ var _vuelidate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vuelidate/core */ "../coreui/node_modules/@vuelidate/core/dist/index.esm.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons */ "../coreui/node_modules/@coreui/icons/js/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../coreui/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "../coreui/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AdvancedTables",
  moodGood: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__["cilMoodGood"],
  inputPower: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__["cilInputPower"],
  plusIcon: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__["cilPlus"],
  LightbulbIcon: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__["cilLightbulb"],
  Orden: {
    sucursal_id: "",
    tipo_contrato: "",
    user_vendedor: "",
    contrato_anterior: "",
    consumo_bimestral: "",
    tipo_estructura: "",
    union_medidor: "",
    no_contrato: "",
    valor_contrato: "",
    anticipo: "",
    tipo_contrato_pago: "",
    no_factura: "",
    nombre_cliente: "",
    representante_legal: "",
    //regimen_fiscal: "",
    tipo_persona: "",
    tipo_proyecto: "",
    tipo_sistema: "",
    no_baterias: "",
    tipo_bateria: "",
    marca_bateria: "",
    no_paneles: "",
    no_paneles_promo: "",
    piezas_estructura: "",
    promocion_aplicada: "",
    capacidad_inversor: "",
    produccion_sistema: "",
    marca_inversor: "",
    modelo_inversor: "",
    voltaje_inversor: "",
    cantidad_inversor: "",
    incluye_monitoreo: "",
    preparacion_220_cuenta: "",
    preparacion_220: "",
    marca_panel: "",
    potencia_panel: "",
    proceso_CFE: "",
    acometida_zona: "",
    metros_acometida: "",
    lugar: "",
    localidad: "",
    estado: "",
    calle: "",
    numero: "",
    colonia: "",
    cp: "",
    telefono: "",
    correo: "",
    ine_ife: "",
    mensualidad: "",
    fecha_mensualidad_no1: "",
    medidor_bidireccional: "",
    estado_ine_ife: "",
    localidad_ine_ife: "",
    calle_ine_ife: "",
    numero_ine_ife: "",
    colonia_ine_ife: "",
    cp_ine_ife: "",
    ine_ife_aval: "",
    nombre_aval: "",
    gestor_tramite: ""
  },
  data: function data() {
    return {
      editModal: false,
      NumContrato: "",
      busNoContrato: "",
      user: {},
      busTipoContrato: "",
      busCliente: "",
      busSucursal: "",
      busEstatus: [],
      tipo_contratos: [],
      tipo_estructuras: [],
      //tipo_regimen_fiscal: [],
      tipo_proyectos: [],
      tipo_contrato_pagosCNTD: [],
      tipo_contrato_pagosCRD: [],
      tipo_sistemas: [],
      marca_baterias: [],
      marca_inversores: [],
      modeloGR_inversores_Inter: [],
      modeloGR_inversores_Aisla: [],
      marca_paneles: [],
      tipo_baterias: [],
      lugares: [],
      estados: [],
      procesos_CFE: [],
      user_vendedores: [],
      acometida_zona_lst: [],
      preparacion_220_lst: [{
        value: 1,
        label: 'Si'
      }, {
        value: 0,
        label: 'No'
      }],
      union_medidor_lst: [{
        value: 1,
        label: 'Si'
      }, {
        value: 0,
        label: 'No'
      }],
      gestor_proceso_lst: [{
        value: 1,
        label: 'Cliente'
      }, {
        value: 0,
        label: 'Wattsolar'
      }],
      sino_lst: [{
        value: 1,
        label: 'Si'
      }, {
        value: 0,
        label: 'No'
      }],
      medidor_bidireccional_lst: [{
        value: 1,
        label: 'Si'
      }, {
        value: 0,
        label: 'No'
      }],
      sucursales: [],
      items: [],
      errors: [],
      orden: _defineProperty({
        sucursal_id: "",
        tipo_contrato: "",
        user_vendedor: "",
        contrato_anterior: "",
        consumo_bimestral: "",
        tipo_estructura: "",
        preparacion_220_cuenta: "",
        preparacion_220: "",
        union_medidor: "",
        no_contrato: "",
        valor_contrato: "",
        anticipo: "",
        no_factura: "",
        nombre_cliente: "",
        representante_legal: "",
        //regimen_fiscal: "",
        tipo_persona: "",
        tipo_contrato_pago: "",
        tipo_proyecto: "",
        tipo_sistema: "",
        marca_baterias: "",
        tipo_baterias: "",
        no_baterias: "",
        no_paneles: "",
        capacidad_inversor: "",
        produccion_sistema: "",
        marca_inversor: "",
        modelo_inversor: "",
        voltaje_inversor: "",
        cantidad_inversor: "",
        incluye_monitoreo: 1,
        marca_panel: "",
        no_paneles_promo: "",
        piezas_estructura: "",
        promocion_aplicada: "",
        potencia_panel: "",
        proceso_CFE: "",
        acometida_zona: "",
        metros_acometida: "",
        lugar: "",
        localidad: "",
        estado: "",
        calle: "",
        numero: "",
        colonia: "",
        cp: "",
        telefono: "",
        correo: "",
        ine_ife: "",
        medidor_bidireccional: "",
        mensualidad: "",
        fecha_mensualidad_no1: "",
        estado_ine_ife: "",
        localidad_ine_ife: "",
        calle_ine_ife: "",
        numero_ine_ife: "",
        colonia_ine_ife: "",
        cp_ine_ife: "",
        ine_ife_aval: "",
        nombre_aval: "",
        gestor_tramite: ""
      }, "gestor_tramite", "")
    };
  },
  validations: function validations() {
    var _this = this,
        _orden2;

    return {
      orden: (_orden2 = {
        sucursal_id: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        tipo_contrato: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        user_vendedor: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        // tipo_contrato
        contrato_anterior: {
          required: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["requiredIf"])(function () {
            return _this.orden.tipo_proyecto == 2;
          }),
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
          $autoDirty: true
        },
        consumo_bimestral: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(10),
          $autoDirty: true
        },
        tipo_estructura: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        //no_contrato: { required, maxLength: maxLength(45), $autoDirty: true },
        valor_contrato: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(20),
          $autoDirty: true
        },
        anticipo: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(20),
          $autoDirty: true
        },
        //no_factura: { required, maxLength: maxLength(20), $autoDirty: true },
        nombre_cliente: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(100),
          $autoDirty: true
        },
        representante_legal: {
          required: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["requiredIf"])(function () {
            return _this.orden.tipo_persona == 2;
          }),
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
          $autoDirty: true
        },
        tipo_persona: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(100),
          $autoDirty: true
        },
        //regimen_fiscal: { required, maxLength: maxLength(100), $autoDirty: true },
        tipo_contrato_pago: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
          $autoDirty: true
        },
        tipo_proyecto: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
          $autoDirty: true
        },
        tipo_sistema: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
          $autoDirty: true
        },
        no_baterias: {
          required: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["requiredIf"])(function () {
            return _this.orden.tipo_sistema == 2 || _this.orden.tipo_sistema == 3;
          }),
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(10),
          $autoDirty: true
        },
        tipo_bateria: {
          required: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["requiredIf"])(function () {
            return _this.orden.tipo_sistema == 2 || _this.orden.tipo_sistema == 3;
          }),
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
          $autoDirty: true
        },
        marca_bateria: {
          required: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["requiredIf"])(function () {
            return _this.orden.tipo_sistema == 2 || _this.orden.tipo_sistema == 3;
          }),
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
          $autoDirty: true
        },
        no_paneles: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(15),
          $autoDirty: true
        },
        union_medidor: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        preparacion_220_cuenta: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        preparacion_220: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        capacidad_inversor: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
          $autoDirty: true
        },
        produccion_sistema: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
          $autoDirty: true
        },
        marca_inversor: {
          required: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["requiredIf"])(function () {
            return _this.orden.tipo_proyecto == 1;
          }),
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
          $autoDirty: true
        },
        modelo_inversor: {
          required: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["requiredIf"])(function () {
            return _this.orden.tipo_proyecto == 1 && _this.orden.marca_inversor == "GROWATT";
          }),
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(40),
          $autoDirty: true
        },
        voltaje_inversor: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(10),
          $autoDirty: true
        },
        cantidad_inversor: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
          $autoDirty: true
        },
        incluye_monitoreo: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
          $autoDirty: true
        },
        marca_panel: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
          $autoDirty: true
        },
        no_paneles_promo: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(15),
          $$autoDirty: true
        },
        piezas_estructura: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(15),
          $$autoDirty: true
        },
        promocion_aplicada: {
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(200),
          $autoDirty: true
        },
        potencia_panel: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(30),
          $autoDirty: true
        },
        proceso_CFE: {
          required: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["requiredIf"])(function () {
            return _this.orden.tipo_proyecto == 1;
          }),
          $autoDirty: true
        },
        acometida_zona: {
          required: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["requiredIf"])(function () {
            return _this.orden.preparacion_220 == 1;
          }),
          $autoDirty: true
        },
        metros_acometida: {
          required: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["requiredIf"])(function () {
            return _this.orden.acometida_zona == 0 && _this.orden.preparacion_220 == 1;
          }),
          $autoDirty: true
        },
        lugar: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        localidad: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
          $autoDirty: true
        },
        estado: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
          $autoDirty: true
        },
        calle: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
          $autoDirty: true
        },
        numero: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(10),
          $autoDirty: true
        },
        colonia: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
          $autoDirty: true
        },
        cp: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(10),
          $autoDirty: true
        },
        telefono: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(20),
          $autoDirty: true
        },
        correo: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(200),
          $autoDirty: true
        },
        ine_ife: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
          $autoDirty: true
        },
        medidor_bidireccional: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        mensualidad: {
          required: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["requiredIf"])(function () {
            return _this.orden.tipo_contrato == 1;
          }),
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(20),
          $autoDirty: true
        },
        fecha_mensualidad_no1: {
          required: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["requiredIf"])(function () {
            return _this.orden.tipo_contrato == 1;
          }),
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(20),
          $autoDirty: true
        },
        gestor_tramite: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        }
      }, _defineProperty(_orden2, "medidor_bidireccional", {
        required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
        $autoDirty: true
      }), _defineProperty(_orden2, "estado_ine_ife", {
        required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
        maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
        $autoDirty: true
      }), _defineProperty(_orden2, "localidad_ine_ife", {
        required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
        maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
        $autoDirty: true
      }), _defineProperty(_orden2, "numero_ine_ife", {
        required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
        maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
        $autoDirty: true
      }), _defineProperty(_orden2, "calle_ine_ife", {
        required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
        maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(25),
        $autoDirty: true
      }), _defineProperty(_orden2, "colonia_ine_ife", {
        required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
        maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(25),
        $autoDirty: true
      }), _defineProperty(_orden2, "cp_ine_ife", {
        required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
        numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
        maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(25),
        $autoDirty: true
      }), _defineProperty(_orden2, "ine_ife_aval", {
        required: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["requiredIf"])(function () {
          return _this.orden.tipo_contrato == 1;
        }),
        maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(50),
        $autoDirty: true
      }), _defineProperty(_orden2, "nombre_aval", {
        required: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["requiredIf"])(function () {
          return _this.orden.tipo_contrato == 1;
        }),
        maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(100),
        $autoDirty: true
      }), _orden2)
    };
  },
  setup: function setup() {
    return {
      v$: Object(_vuelidate_core__WEBPACK_IMPORTED_MODULE_2__["useVuelidate"])()
    };
  },
  methods: {
    index: function index() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/orden?token=" + localStorage.getItem("api_token")).then(function (response) {
        self.tipo_contratos = response.data.tipo_contratos;
        self.tipo_estructuras = response.data.tipo_estructuras;
        self.lugares = response.data.lugares;
        self.estados = response.data.estados;
        self.procesos_CFE = response.data.proceso_CFE;
        self.acometida_zona_lst = response.data.acometida_zona;
        self.sucursales = response.data.sucursales;
        self.user = response.data.user;
        self.user_vendedores = response.data.user_vendedores;
        self.orden.sucursal_id = response.data.user.sucursal_id;
        self.tipo_contrato_pagosCNTD = response.data.tipo_contrato_pagosCNTD;
        self.tipo_contrato_pagosCRD = response.data.tipo_contrato_pagosCRD;
        self.tipo_personas = response.data.tipo_personas; //self.tipo_regimen_fiscal = response.data.tipo_regimen_fiscal;

        self.tipo_proyectos = response.data.tipo_proyectos;
        self.tipo_sistemas = response.data.tipo_sistemas;
        self.tipo_baterias = response.data.tipo_baterias;
        self.marca_baterias = response.data.marca_baterias;
        self.marca_inversores = response.data.marca_inversores;
        self.modeloGR_inversores_Inter = response.data.modeloGR_inversores_Inter;
        self.modeloGR_inversores_Aisla = response.data.modeloGR_inversores_Aisla;
        self.marca_paneles = response.data.marca_paneles;
      })["catch"](function (error) {
        self.$toast.error(self.$t("messages.error"));
        self.$router.push({
          path: "/dashboard"
        });
      });
    },
    create: function create() {
      var self = this;
      this.v$.$touch();
      console.log(this.v$);
      if (this.v$.$error) return;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(this.$apiAdress + "/api/orden/create" + "?token=" + localStorage.getItem("api_token"), {
        sucursal_id: self.orden.sucursal_id,
        tipo_contrato: self.orden.tipo_contrato,
        user_vendedor: self.orden.user_vendedor,
        contrato_anterior: self.orden.contrato_anterior,
        consumo_bimestral: self.orden.consumo_bimestral,
        tipo_estructura: self.orden.tipo_estructura,
        union_medidor: self.orden.union_medidor,
        no_contrato: self.orden.no_contrato,
        valor_contrato: self.orden.valor_contrato,
        anticipo: self.orden.anticipo,
        nombre_cliente: self.orden.nombre_cliente,
        representante_legal: self.orden.representante_legal,
        tipo_persona: self.orden.tipo_persona,
        //regimen_fiscal : self.orden.regimen_fiscal,
        tipo_contrato_pago: self.orden.tipo_contrato_pago,
        tipo_proyecto: self.orden.tipo_proyecto,
        tipo_sistema: self.orden.tipo_sistema,
        no_baterias: self.orden.no_baterias,
        marca_bateria: self.orden.marca_bateria,
        tipo_bateria: self.orden.tipo_bateria,
        no_paneles: self.orden.no_paneles,
        capacidad_inversor: self.orden.capacidad_inversor,
        produccion_sistema: self.orden.produccion_sistema,
        marca_inversor: self.orden.marca_inversor,
        modelo_inversor: self.orden.modelo_inversor,
        voltaje_inversor: self.orden.voltaje_inversor,
        preparacion_220_cuenta: self.orden.preparacion_220_cuenta,
        preparacion_220: self.orden.preparacion_220,
        cantidad_inversor: self.orden.cantidad_inversor,
        incluye_monitoreo: self.orden.incluye_monitoreo,
        marca_panel: self.orden.marca_panel,
        no_paneles_promo: self.orden.no_paneles_promo,
        piezas_estructura: self.orden.piezas_estructura,
        promocion_aplicada: self.orden.promocion_aplicada,
        potencia_panel: self.orden.potencia_panel,
        lugar: self.orden.lugar,
        estado: self.orden.estado,
        localidad: self.orden.localidad,
        proceso_CFE: self.orden.proceso_CFE,
        acometida_zona: self.orden.acometida_zona,
        metros_acometida: self.orden.metros_acometida,
        calle: self.orden.calle,
        numero: self.orden.numero,
        colonia: self.orden.colonia,
        cp: self.orden.cp,
        telefono: self.orden.telefono,
        correo: self.orden.correo,
        ine_ife: self.orden.ine_ife,
        mensualidad: self.orden.mensualidad,
        fecha_mensualidad_no1: self.orden.fecha_mensualidad_no1,
        medidor_bidireccional: self.orden.medidor_bidireccional,
        estado_ine_ife: self.orden.estado_ine_ife,
        localidad_ine_ife: self.orden.localidad_ine_ife,
        calle_ine_ife: self.orden.calle_ine_ife,
        numero_ine_ife: self.orden.numero_ine_ife,
        colonia_ine_ife: self.orden.colonia_ine_ife,
        cp_ine_ife: self.orden.cp_ine_ife,
        ine_ife_aval: self.orden.ine_ife_aval,
        nombre_aval: self.orden.nombre_aval,
        gestor_tramite: self.orden.gestor_tramite
      }).then(function (response) {
        var data = response.data;
        self.NumContrato = data.no_contrato;
        self.$toast.success(self.$t(data.no_contrato));
        self.editModal = true;
        /*
         self.reset();
        self.$toast.success(self.$t("messages.insert"));
        self.$router.push({ path: "/ordenes" });
        */
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
        } else {
          self.$toast.error(self.$t("messages.error"));
        }
      });
    },
    reset: function reset() {
      var self = this;
      self.$nextTick(function () {
        self.v$.$reset();
      });
      self.orden = {
        sucursal_id: "",
        tipo_contrato: "",
        consumo_bimestral: "",
        user_vendedor: "",
        tipo_estructura: "",
        union_medidor: "",
        no_contrato: "",
        no_factura: "",
        nombre_cliente: "",
        representante_legal: "",
        tipo_persona: "",
        //regimen_fiscal: "",
        tipo_contrato_pago: "",
        tipo_proyecto: "",
        contrato_anterior: "",
        valor_contrato: "",
        anticipo: "",
        tipo_sistema: "",
        no_baterias: "",
        marca_bateria: "",
        tipo_bateria: "",
        no_paneles: "",
        capacidad_inversor: "",
        marca_inversor: "",
        modelo_inversor: "",
        voltaje_inversor: "",
        cantidad_inversor: "",
        incluye_monitoreo: "",
        preparacion_220_cuenta: "",
        preparacion_220: "",
        marca_panel: "",
        no_paneles_promo: "",
        piezas_estructura: "",
        promocion_aplicada: "",
        potencia_panel: "",
        lugar: "",
        proceso_CFE: "",
        acometida_zona: "",
        metros_acometida: "",
        localidad: "",
        estado: "",
        calle: "",
        numero: "",
        colonia: "",
        cp: "",
        telefono: "",
        correo: "",
        ine_ife: "",
        mensualidad: "",
        fecha_mensualidad_no1: "",
        medidor_bidireccional: "",
        estado_ine_ife: "",
        localidad_ine_ife: "",
        calle_ine_ife: "",
        numero_ine_ife: "",
        colonia_ine_ife: "",
        cp_ine_ife: "",
        ine_ife_aval: "",
        nombre_aval: ""
      };
    },
    closeModal: function closeModal(status, evt, accept) {
      var self = this;
      self.action = self.$t("titles.create");
      self.$nextTick(function () {//self.v$.$reset();
      });
      self.editModal = false;
      self.reset();
      self.$toast.success(self.$t("messages.insert"));
      self.$router.push({
        path: "/ordenes"
      });
    }
  },
  mounted: function mounted() {
    this.index();
    var recaptchaScript = document.createElement('script');
    recaptchaScript.setAttribute('src', 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js');
    document.head.appendChild(recaptchaScript);
    var recaptchaScript2 = document.createElement('script');
    recaptchaScript2.setAttribute('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js');
    document.head.appendChild(recaptchaScript2);
    var recaptchaScript3 = document.createElement('script');
    recaptchaScript3.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js');
    document.head.appendChild(recaptchaScript3);
    var recaptchaScript4 = document.createElement('script');
    recaptchaScript4.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js');
    document.head.appendChild(recaptchaScript4);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/ordenes/OrdenCreate.vue?vue&type=template&id=85d168d6&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/ordenes/OrdenCreate.vue?vue&type=template&id=85d168d6& ***!
  \****************************************************************************************************************************************************************************************************************/
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
                attrs: { content: _vm.$options.inputPower, size: "xl" },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "h4" }, [_vm._v("Orden ")]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c(
                "CRow",
                [
                  _c(
                    "CCard",
                    { staticClass: "bg-light" },
                    [
                      _c("CCardHeader", [
                        _c("span", { staticClass: "card-title" }, [
                          _c("b", [_vm._v("INFORMACION DE CONTRATO")]),
                        ]),
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
                                  _c("CSelect", {
                                    attrs: {
                                      value: _vm.orden.sucursal_id,
                                      plain: true,
                                      disabled: _vm.user.rol_id != 5,
                                      label: "Sucursal",
                                      options: _vm.sucursales,
                                      placeholder: "Selecciona una Sucursal",
                                      "invalid-feedback": _vm.v$.orden
                                        .sucursal_id.$error
                                        ? _vm.v$.orden.sucursal_id.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.sucursal_id
                                        .$dirty
                                        ? !_vm.v$.orden.sucursal_id.$invalid
                                        : null,
                                    },
                                    on: {
                                      "update:value": function ($event) {
                                        return _vm.$set(
                                          _vm.orden,
                                          "sucursal_id",
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
                                { attrs: { sm: "3" } },
                                [
                                  _c("CSelect", {
                                    attrs: {
                                      value: _vm.orden.tipo_contrato,
                                      plain: true,
                                      label: "Tipo contrato",
                                      options: _vm.tipo_contratos,
                                      placeholder:
                                        "Selecciona un tipo de contrato",
                                      "invalid-feedback": _vm.v$.orden
                                        .tipo_contrato.$error
                                        ? _vm.v$.orden.tipo_contrato.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.tipo_contrato
                                        .$dirty
                                        ? !_vm.v$.orden.tipo_contrato.$invalid
                                        : null,
                                    },
                                    on: {
                                      "update:value": function ($event) {
                                        return _vm.$set(
                                          _vm.orden,
                                          "tipo_contrato",
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
                                { attrs: { sm: "3" } },
                                [
                                  _c("CSelect", {
                                    attrs: {
                                      value: _vm.orden.user_vendedor,
                                      plain: true,
                                      label: "Vendedor(a)",
                                      placeholder: "Vendedor(a)",
                                      options: _vm.user_vendedores,
                                      "invalid-feedback": _vm.v$.orden
                                        .user_vendedor.$error
                                        ? _vm.v$.orden.user_vendedor.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.user_vendedor
                                        .$dirty
                                        ? !_vm.v$.orden.user_vendedor.$invalid
                                        : null,
                                    },
                                    on: {
                                      "update:value": function ($event) {
                                        return _vm.$set(
                                          _vm.orden,
                                          "user_vendedor",
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
                                { attrs: { sm: "3" } },
                                [
                                  _c("CSelect", {
                                    attrs: {
                                      value: _vm.orden.tipo_persona,
                                      plain: true,
                                      label: "Tipo de persona",
                                      options: _vm.tipo_personas,
                                      placeholder:
                                        "Selecciona un tipo de persona",
                                      "invalid-feedback": _vm.v$.orden
                                        .tipo_persona.$error
                                        ? _vm.v$.orden.tipo_persona.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.tipo_persona
                                        .$dirty
                                        ? !_vm.v$.orden.tipo_persona.$invalid
                                        : null,
                                    },
                                    on: {
                                      "update:value": function ($event) {
                                        return _vm.$set(
                                          _vm.orden,
                                          "tipo_persona",
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
                                  _vm.orden.tipo_persona == "1"
                                    ? _c("CLabel", [_vm._v("Cliente")])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.orden.tipo_persona == "2"
                                    ? _c("CLabel", [_vm._v("Empresa")])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("CInput", {
                                    attrs: {
                                      label: " ",
                                      placeholder: "Cliente",
                                      "invalid-feedback": _vm.v$.orden
                                        .nombre_cliente.$error
                                        ? _vm.v$.orden.nombre_cliente.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.nombre_cliente
                                        .$dirty
                                        ? !_vm.v$.orden.nombre_cliente.$invalid
                                        : null,
                                    },
                                    model: {
                                      value: _vm.v$.orden.nombre_cliente.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.nombre_cliente,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "v$.orden.nombre_cliente.$model",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.orden.tipo_persona == 2
                                ? _c(
                                    "CCol",
                                    { attrs: { sm: "3" } },
                                    [
                                      _c("CInput", {
                                        attrs: {
                                          label: "Representante legal",
                                          placeholder: "Representante legal",
                                          "invalid-feedback": _vm.v$.orden
                                            .representante_legal.$error
                                            ? _vm.v$.orden.representante_legal
                                                .$errors[0].$message
                                            : "",
                                          "is-valid": _vm.v$.orden
                                            .representante_legal.$dirty
                                            ? !_vm.v$.orden.representante_legal
                                                .$invalid
                                            : null,
                                        },
                                        model: {
                                          value:
                                            _vm.v$.orden.representante_legal
                                              .$model,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.v$.orden.representante_legal,
                                              "$model",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "v$.orden.representante_legal.$model",
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                { attrs: { sm: "3" } },
                                [
                                  _c("CInput", {
                                    attrs: {
                                      label: "Valor total contrato",
                                      placeholder: "Valor total contrato",
                                      "invalid-feedback": _vm.v$.orden
                                        .valor_contrato.$error
                                        ? _vm.v$.orden.valor_contrato.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.valor_contrato
                                        .$dirty
                                        ? !_vm.v$.orden.valor_contrato.$invalid
                                        : null,
                                    },
                                    model: {
                                      value: _vm.v$.orden.valor_contrato.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.valor_contrato,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "v$.orden.valor_contrato.$model",
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
                                      label: "Anticipo",
                                      placeholder: "Anticipo",
                                      "invalid-feedback": _vm.v$.orden.anticipo
                                        .$error
                                        ? _vm.v$.orden.anticipo.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.anticipo.$dirty
                                        ? !_vm.v$.orden.anticipo.$invalid
                                        : null,
                                    },
                                    model: {
                                      value: _vm.v$.orden.anticipo.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.anticipo,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression: "v$.orden.anticipo.$model",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.orden.tipo_contrato == 2
                                ? _c(
                                    "CCol",
                                    { attrs: { sm: "3" } },
                                    [
                                      _c("CSelect", {
                                        attrs: {
                                          value: _vm.orden.tipo_contrato_pago,
                                          plain: true,
                                          label: "Tipo de pagos",
                                          options: _vm.tipo_contrato_pagosCNTD,
                                          placeholder:
                                            "Selecciona tipo de pagos",
                                          "invalid-feedback": _vm.v$.orden
                                            .tipo_contrato_pago.$error
                                            ? _vm.v$.orden.tipo_contrato_pago
                                                .$errors[0].$message
                                            : "",
                                          "is-valid": _vm.v$.orden
                                            .tipo_contrato_pago.$dirty
                                            ? !_vm.v$.orden.tipo_contrato_pago
                                                .$invalid
                                            : null,
                                        },
                                        on: {
                                          "update:value": function ($event) {
                                            return _vm.$set(
                                              _vm.orden,
                                              "tipo_contrato_pago",
                                              $event
                                            )
                                          },
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.orden.tipo_contrato == 1
                                ? _c(
                                    "CCol",
                                    { attrs: { sm: "3" } },
                                    [
                                      _c("CSelect", {
                                        attrs: {
                                          value: _vm.orden.tipo_contrato_pago,
                                          plain: true,
                                          label: "Tipo de pagos",
                                          options: _vm.tipo_contrato_pagosCRD,
                                          placeholder:
                                            "Selecciona tipo de pagos",
                                          "invalid-feedback": _vm.v$.orden
                                            .tipo_contrato_pago.$error
                                            ? _vm.v$.orden.tipo_contrato_pago
                                                .$errors[0].$message
                                            : "",
                                          "is-valid": _vm.v$.orden
                                            .tipo_contrato_pago.$dirty
                                            ? !_vm.v$.orden.tipo_contrato_pago
                                                .$invalid
                                            : null,
                                        },
                                        on: {
                                          "update:value": function ($event) {
                                            return _vm.$set(
                                              _vm.orden,
                                              "tipo_contrato_pago",
                                              $event
                                            )
                                          },
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.orden.tipo_contrato == 1
                                ? _c(
                                    "CCol",
                                    { attrs: { sm: "3" } },
                                    [
                                      _c("CInput", {
                                        attrs: {
                                          label: "Mensualidad",
                                          placeholder: "Monto por mes",
                                          "invalid-feedback": _vm.v$.orden
                                            .mensualidad.$error
                                            ? _vm.v$.orden.mensualidad
                                                .$errors[0].$message
                                            : "",
                                          "is-valid": _vm.v$.orden.mensualidad
                                            .$dirty
                                            ? !_vm.v$.orden.mensualidad.$invalid
                                            : null,
                                        },
                                        model: {
                                          value:
                                            _vm.v$.orden.mensualidad.$model,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.v$.orden.mensualidad,
                                              "$model",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "v$.orden.mensualidad.$model",
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.orden.tipo_contrato == 1
                                ? _c(
                                    "CCol",
                                    { attrs: { sm: "3" } },
                                    [
                                      _c("CInput", {
                                        attrs: {
                                          label: "Fecha de primera mensualidad",
                                          type: "date",
                                          "invalid-feedback": _vm.v$.orden
                                            .fecha_mensualidad_no1.$error
                                            ? _vm.v$.orden.fecha_mensualidad_no1
                                                .$errors[0].$message
                                            : "",
                                          "is-valid": _vm.v$.orden
                                            .fecha_mensualidad_no1.$dirty
                                            ? !_vm.v$.orden
                                                .fecha_mensualidad_no1.$invalid
                                            : null,
                                        },
                                        model: {
                                          value:
                                            _vm.v$.orden.fecha_mensualidad_no1
                                              .$model,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.v$.orden
                                                .fecha_mensualidad_no1,
                                              "$model",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "v$.orden.fecha_mensualidad_no1.$model",
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                { attrs: { sm: "3" } },
                                [
                                  _c("CInput", {
                                    attrs: {
                                      label: "Consumo bimestral",
                                      placeholder: "Consumo Bimestral",
                                      "invalid-feedback": _vm.v$.orden
                                        .consumo_bimestral.$error
                                        ? _vm.v$.orden.consumo_bimestral
                                            .$errors[0].$message
                                        : "",
                                      "is-valid": _vm.v$.orden.consumo_bimestral
                                        .$dirty
                                        ? !_vm.v$.orden.consumo_bimestral
                                            .$invalid
                                        : null,
                                    },
                                    model: {
                                      value:
                                        _vm.v$.orden.consumo_bimestral.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.consumo_bimestral,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "v$.orden.consumo_bimestral.$model",
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
                  _c("CRow"),
                  _vm._v(" "),
                  _c(
                    "CCard",
                    { staticClass: "bg-light" },
                    [
                      _c("CCardHeader", [
                        _c("span", { staticClass: "card-title" }, [
                          _c("b", [_vm._v("PROYECTO")]),
                        ]),
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
                                  _c("CSelect", {
                                    attrs: {
                                      value: _vm.orden.tipo_proyecto,
                                      plain: true,
                                      label: "Tipo de proyecto",
                                      options: _vm.tipo_proyectos,
                                      placeholder:
                                        "Selecciona un tipo de proyecto",
                                      "invalid-feedback": _vm.v$.orden
                                        .tipo_proyecto.$error
                                        ? _vm.v$.orden.tipo_proyecto.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.tipo_proyecto
                                        .$dirty
                                        ? !_vm.v$.orden.tipo_proyecto.$invalid
                                        : null,
                                    },
                                    on: {
                                      "update:value": function ($event) {
                                        return _vm.$set(
                                          _vm.orden,
                                          "tipo_proyecto",
                                          $event
                                        )
                                      },
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.orden.tipo_proyecto == 2
                                ? _c(
                                    "CCol",
                                    { attrs: { sm: "3" } },
                                    [
                                      _c("CInput", {
                                        attrs: {
                                          label: "Contrato anterior",
                                          placeholder: "Contrato anterior",
                                          "invalid-feedback": _vm.v$.orden
                                            .contrato_anterior.$error
                                            ? _vm.v$.orden.contrato_anterior
                                                .$errors[0].$message
                                            : "",
                                          "is-valid": _vm.v$.orden
                                            .contrato_anterior.$dirty
                                            ? !_vm.v$.orden.contrato_anterior
                                                .$invalid
                                            : null,
                                        },
                                        model: {
                                          value:
                                            _vm.v$.orden.contrato_anterior
                                              .$model,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.v$.orden.contrato_anterior,
                                              "$model",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "v$.orden.contrato_anterior.$model",
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                { attrs: { sm: "3" } },
                                [
                                  _c("CSelect", {
                                    attrs: {
                                      value: _vm.orden.tipo_sistema,
                                      plain: true,
                                      label: "Tipo de sistema",
                                      options: _vm.tipo_sistemas,
                                      placeholder:
                                        "Selecciona un tipo de sistema",
                                      "invalid-feedback": _vm.v$.orden
                                        .tipo_sistema.$error
                                        ? _vm.v$.orden.tipo_sistema.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.tipo_sistema
                                        .$dirty
                                        ? !_vm.v$.orden.tipo_sistema.$invalid
                                        : null,
                                    },
                                    on: {
                                      "update:value": function ($event) {
                                        return _vm.$set(
                                          _vm.orden,
                                          "tipo_sistema",
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
                                { attrs: { sm: "3" } },
                                [
                                  _c("CSelect", {
                                    attrs: {
                                      value: _vm.orden.tipo_estructura,
                                      plain: true,
                                      label: "Tipo estructura",
                                      options: _vm.tipo_estructuras,
                                      placeholder:
                                        "Selecciona un tipo de estructura",
                                      "invalid-feedback": _vm.v$.orden
                                        .tipo_estructura.$error
                                        ? _vm.v$.orden.tipo_estructura
                                            .$errors[0].$message
                                        : "",
                                      "is-valid": _vm.v$.orden.tipo_estructura
                                        .$dirty
                                        ? !_vm.v$.orden.tipo_estructura.$invalid
                                        : null,
                                    },
                                    on: {
                                      "update:value": function ($event) {
                                        return _vm.$set(
                                          _vm.orden,
                                          "tipo_estructura",
                                          $event
                                        )
                                      },
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.orden.tipo_sistema == 2 ||
                              _vm.orden.tipo_sistema == 3
                                ? _c(
                                    "CCol",
                                    { attrs: { sm: "3" } },
                                    [
                                      _c("CInput", {
                                        attrs: {
                                          label: "No. de baterias",
                                          placeholder: "No. de baterias",
                                          "invalid-feedback": _vm.v$.orden
                                            .no_baterias.$error
                                            ? _vm.v$.orden.no_baterias
                                                .$errors[0].$message
                                            : "",
                                          "is-valid": _vm.v$.orden.no_baterias
                                            .$dirty
                                            ? !_vm.v$.orden.no_baterias.$invalid
                                            : null,
                                        },
                                        model: {
                                          value:
                                            _vm.v$.orden.no_baterias.$model,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.v$.orden.no_baterias,
                                              "$model",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "v$.orden.no_baterias.$model",
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.orden.tipo_sistema == 2 ||
                              _vm.orden.tipo_sistema == 3
                                ? _c(
                                    "CCol",
                                    { attrs: { sm: "3" } },
                                    [
                                      _c("CSelect", {
                                        attrs: {
                                          value: _vm.orden.marca_bateria,
                                          plain: true,
                                          label: "Marca de baterias",
                                          options: _vm.marca_baterias,
                                          placeholder:
                                            "Selecciona una marca de baterias",
                                          "invalid-feedback": _vm.v$.orden
                                            .marca_bateria.$error
                                            ? _vm.v$.orden.marca_bateria
                                                .$errors[0].$message
                                            : "",
                                          "is-valid": _vm.v$.orden.marca_bateria
                                            .$dirty
                                            ? !_vm.v$.orden.marca_bateria
                                                .$invalid
                                            : null,
                                        },
                                        on: {
                                          "update:value": function ($event) {
                                            return _vm.$set(
                                              _vm.orden,
                                              "marca_bateria",
                                              $event
                                            )
                                          },
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.orden.tipo_sistema == 2 ||
                              _vm.orden.tipo_sistema == 3
                                ? _c(
                                    "CCol",
                                    { attrs: { sm: "3" } },
                                    [
                                      _c("CSelect", {
                                        attrs: {
                                          value: _vm.orden.tipo_bateria,
                                          plain: true,
                                          label: "Tipo de bateria",
                                          options: _vm.tipo_baterias,
                                          placeholder:
                                            "Selecciona un tipo de bateria",
                                          "invalid-feedback": _vm.v$.orden
                                            .tipo_bateria.$error
                                            ? _vm.v$.orden.tipo_bateria
                                                .$errors[0].$message
                                            : "",
                                          "is-valid": _vm.v$.orden.tipo_bateria
                                            .$dirty
                                            ? !_vm.v$.orden.tipo_bateria
                                                .$invalid
                                            : null,
                                        },
                                        on: {
                                          "update:value": function ($event) {
                                            return _vm.$set(
                                              _vm.orden,
                                              "tipo_bateria",
                                              $event
                                            )
                                          },
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                { attrs: { sm: "3" } },
                                [
                                  _c("CSelect", {
                                    attrs: {
                                      value: _vm.orden.marca_panel,
                                      plain: true,
                                      label: "Marca panel",
                                      options: _vm.marca_paneles,
                                      placeholder: "Selecciona marca de panel",
                                      "invalid-feedback": _vm.v$.orden
                                        .marca_panel.$error
                                        ? _vm.v$.orden.marca_panel.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.marca_panel
                                        .$dirty
                                        ? !_vm.v$.orden.marca_panel.$invalid
                                        : null,
                                    },
                                    on: {
                                      "update:value": function ($event) {
                                        return _vm.$set(
                                          _vm.orden,
                                          "marca_panel",
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
                                { attrs: { sm: "3" } },
                                [
                                  _c("CInput", {
                                    attrs: {
                                      label: "No. paneles",
                                      placeholder: "No. paneles",
                                      "invalid-feedback": _vm.v$.orden
                                        .no_paneles.$error
                                        ? _vm.v$.orden.no_paneles.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.no_paneles.$dirty
                                        ? !_vm.v$.orden.no_paneles.$invalid
                                        : null,
                                    },
                                    model: {
                                      value: _vm.v$.orden.no_paneles.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.no_paneles,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression: "v$.orden.no_paneles.$model",
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
                                      label: "No. paneles promo.",
                                      placeholder: "No. paneles promo.",
                                      "invalid-feedback": _vm.v$.orden
                                        .no_paneles_promo.$error
                                        ? _vm.v$.orden.no_paneles_promo
                                            .$errors[0].$message
                                        : "",
                                      "is-valid": _vm.v$.orden.no_paneles_promo
                                        .$dirty
                                        ? !_vm.v$.orden.no_paneles_promo
                                            .$invalid
                                        : null,
                                    },
                                    model: {
                                      value:
                                        _vm.v$.orden.no_paneles_promo.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.no_paneles_promo,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "v$.orden.no_paneles_promo.$model",
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
                                      label: "No. piezas estructura",
                                      placeholder: "No. piezas estructura",
                                      "invalid-feedback": _vm.v$.orden
                                        .piezas_estructura.$error
                                        ? _vm.v$.orden.piezas_estructura
                                            .$errors[0].$message
                                        : "",
                                      "is-valid": _vm.v$.orden.piezas_estructura
                                        .$dirty
                                        ? !_vm.v$.orden.piezas_estructura
                                            .$invalid
                                        : null,
                                    },
                                    model: {
                                      value:
                                        _vm.v$.orden.piezas_estructura.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.piezas_estructura,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "v$.orden.piezas_estructura.$model",
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
                                      label:
                                        "Capacidad de los paneles en Watts",
                                      placeholder: "Capacidad de los paneles",
                                      "invalid-feedback": _vm.v$.orden
                                        .potencia_panel.$error
                                        ? _vm.v$.orden.potencia_panel.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.potencia_panel
                                        .$dirty
                                        ? !_vm.v$.orden.potencia_panel.$invalid
                                        : null,
                                    },
                                    model: {
                                      value: _vm.v$.orden.potencia_panel.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.potencia_panel,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "v$.orden.potencia_panel.$model",
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
                                      label:
                                        "Producción del sistema (kWh/bimestral)",
                                      placeholder: "Producción del sistema",
                                      "invalid-feedback": _vm.v$.orden
                                        .produccion_sistema.$error
                                        ? _vm.v$.orden.produccion_sistema
                                            .$errors[0].$message
                                        : "",
                                      "is-valid": _vm.v$.orden
                                        .produccion_sistema.$dirty
                                        ? !_vm.v$.orden.produccion_sistema
                                            .$invalid
                                        : null,
                                    },
                                    model: {
                                      value:
                                        _vm.v$.orden.produccion_sistema.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.produccion_sistema,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "v$.orden.produccion_sistema.$model",
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
                                      label: "Promocion aplicada",
                                      placeholder: "Promocion aplicada",
                                    },
                                    model: {
                                      value:
                                        _vm.v$.orden.promocion_aplicada.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.promocion_aplicada,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "v$.orden.promocion_aplicada.$model",
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
                                  _c("CSelect", {
                                    attrs: {
                                      value: _vm.orden.marca_inversor,
                                      plain: true,
                                      label: "Marca inversor / micro",
                                      options: _vm.marca_inversores,
                                      placeholder:
                                        "Selecciona un tipo de inversor",
                                      "invalid-feedback": _vm.v$.orden
                                        .marca_inversor.$error
                                        ? _vm.v$.orden.marca_inversor.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.marca_inversor
                                        .$dirty
                                        ? !_vm.v$.orden.marca_inversor.$invalid
                                        : null,
                                    },
                                    on: {
                                      "update:value": function ($event) {
                                        return _vm.$set(
                                          _vm.orden,
                                          "marca_inversor",
                                          $event
                                        )
                                      },
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.orden.marca_inversor == "GROWATT" &&
                              _vm.orden.tipo_sistema == 1
                                ? _c(
                                    "CCol",
                                    { attrs: { sm: "3" } },
                                    [
                                      _c("CSelect", {
                                        attrs: {
                                          value: _vm.orden.modelo_inversor,
                                          plain: true,
                                          label: "Modelo inversor / micro",
                                          options:
                                            _vm.modeloGR_inversores_Inter,
                                          placeholder:
                                            "Selecciona un modelo de inversor",
                                          "invalid-feedback": _vm.v$.orden
                                            .modelo_inversor.$error
                                            ? _vm.v$.orden.modelo_inversor
                                                .$errors[0].$message
                                            : "",
                                          "is-valid": _vm.v$.orden
                                            .modelo_inversor.$dirty
                                            ? !_vm.v$.orden.modelo_inversor
                                                .$invalid
                                            : null,
                                        },
                                        on: {
                                          "update:value": function ($event) {
                                            return _vm.$set(
                                              _vm.orden,
                                              "modelo_inversor",
                                              $event
                                            )
                                          },
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.orden.marca_inversor == "GROWATT" &&
                              _vm.orden.tipo_sistema == 2
                                ? _c(
                                    "CCol",
                                    { attrs: { sm: "3" } },
                                    [
                                      _c("CSelect", {
                                        attrs: {
                                          value: _vm.orden.modelo_inversor,
                                          plain: true,
                                          label: "Modelo inversor / micro",
                                          options:
                                            _vm.modeloGR_inversores_Aisla,
                                          placeholder:
                                            "Selecciona un modelo de inversor",
                                          "invalid-feedback": _vm.v$.orden
                                            .modelo_inversor.$error
                                            ? _vm.v$.orden.modelo_inversor
                                                .$errors[0].$message
                                            : "",
                                          "is-valid": _vm.v$.orden
                                            .modelo_inversor.$dirty
                                            ? !_vm.v$.orden.modelo_inversor
                                                .$invalid
                                            : null,
                                        },
                                        on: {
                                          "update:value": function ($event) {
                                            return _vm.$set(
                                              _vm.orden,
                                              "modelo_inversor",
                                              $event
                                            )
                                          },
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                { attrs: { sm: "3" } },
                                [
                                  _c("CInput", {
                                    attrs: {
                                      label:
                                        "Capacidad inversor / micro en Watts",
                                      placeholder: "Capacidad inversor",
                                      "invalid-feedback": _vm.v$.orden
                                        .capacidad_inversor.$error
                                        ? _vm.v$.orden.capacidad_inversor
                                            .$errors[0].$message
                                        : "",
                                      "is-valid": _vm.v$.orden
                                        .capacidad_inversor.$dirty
                                        ? !_vm.v$.orden.capacidad_inversor
                                            .$invalid
                                        : null,
                                    },
                                    model: {
                                      value:
                                        _vm.v$.orden.capacidad_inversor.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.capacidad_inversor,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "v$.orden.capacidad_inversor.$model",
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
                                      label: "Voltaje inversor / micro",
                                      placeholder: "Voltaje inversor / micro",
                                      "invalid-feedback": _vm.v$.orden
                                        .voltaje_inversor.$error
                                        ? _vm.v$.orden.voltaje_inversor
                                            .$errors[0].$message
                                        : "",
                                      "is-valid": _vm.v$.orden.voltaje_inversor
                                        .$dirty
                                        ? !_vm.v$.orden.voltaje_inversor
                                            .$invalid
                                        : null,
                                    },
                                    model: {
                                      value:
                                        _vm.v$.orden.voltaje_inversor.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.voltaje_inversor,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "v$.orden.voltaje_inversor.$model",
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
                                      label: "Cantidad de inversores / micros",
                                      placeholder:
                                        "Cantidad de inversores / micros",
                                      "invalid-feedback": _vm.v$.orden
                                        .cantidad_inversor.$error
                                        ? _vm.v$.orden.cantidad_inversor
                                            .$errors[0].$message
                                        : "",
                                      "is-valid": _vm.v$.orden.cantidad_inversor
                                        .$dirty
                                        ? !_vm.v$.orden.cantidad_inversor
                                            .$invalid
                                        : null,
                                    },
                                    model: {
                                      value:
                                        _vm.v$.orden.cantidad_inversor.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.cantidad_inversor,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "v$.orden.cantidad_inversor.$model",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.orden.marca_inversor == "HOYMILLES"
                                ? _c(
                                    "CCol",
                                    { attrs: { sm: "3" } },
                                    [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v("¿Incluye monitoreo?"),
                                      ]),
                                      _vm._v(" "),
                                      _c("CInputRadioGroup", {
                                        attrs: {
                                          options: _vm.sino_lst,
                                          inline: true,
                                          checked:
                                            _vm.v$.orden.incluye_monitoreo
                                              .$model,
                                          "invalid-feedback": _vm.v$.orden
                                            .incluye_monitoreo.$error
                                            ? _vm.v$.orden.incluye_monitoreo
                                                .$errors[0].$message
                                            : "",
                                          "is-valid": _vm.v$.orden
                                            .incluye_monitoreo.$dirty
                                            ? !_vm.v$.orden.incluye_monitoreo
                                                .$invalid
                                            : null,
                                        },
                                        on: {
                                          "update:checked": function ($event) {
                                            return _vm.$set(
                                              _vm.v$.orden.incluye_monitoreo,
                                              "$model",
                                              $event
                                            )
                                          },
                                        },
                                      }),
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
                  _vm._v(" "),
                  _c("CRow"),
                  _vm._v(" "),
                  _c(
                    "CCard",
                    { staticClass: "bg-light" },
                    [
                      _c("CCardHeader", [
                        _c("span", { staticClass: "card-title" }, [
                          _c("b", [_vm._v("PROCESO CFE")]),
                        ]),
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
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("¿Cuenta con preparación 220?"),
                                  ]),
                                  _vm._v(" "),
                                  _c("CInputRadioGroup", {
                                    attrs: {
                                      options: _vm.preparacion_220_lst,
                                      inline: true,
                                      checked:
                                        _vm.v$.orden.preparacion_220_cuenta
                                          .$model,
                                      "invalid-feedback": _vm.v$.orden
                                        .preparacion_220_cuenta.$error
                                        ? _vm.v$.orden.preparacion_220_cuenta
                                            .$errors[0].$message
                                        : "",
                                      "is-valid": _vm.v$.orden
                                        .preparacion_220_cuenta.$dirty
                                        ? !_vm.v$.orden.preparacion_220_cuenta
                                            .$invalid
                                        : null,
                                    },
                                    on: {
                                      "update:checked": function ($event) {
                                        return _vm.$set(
                                          _vm.v$.orden.preparacion_220_cuenta,
                                          "$model",
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
                                { attrs: { sm: "3" } },
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v(
                                      "¿Requiere preparación 220 por parte de WattSolar?"
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("CInputRadioGroup", {
                                    attrs: {
                                      options: _vm.preparacion_220_lst,
                                      inline: true,
                                      checked:
                                        _vm.v$.orden.preparacion_220.$model,
                                      "invalid-feedback": _vm.v$.orden
                                        .preparacion_220.$error
                                        ? _vm.v$.orden.preparacion_220
                                            .$errors[0].$message
                                        : "",
                                      "is-valid": _vm.v$.orden.preparacion_220
                                        .$dirty
                                        ? !_vm.v$.orden.preparacion_220.$invalid
                                        : null,
                                    },
                                    on: {
                                      "update:checked": function ($event) {
                                        return _vm.$set(
                                          _vm.v$.orden.preparacion_220,
                                          "$model",
                                          $event
                                        )
                                      },
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.orden.preparacion_220 == 1
                                ? _c(
                                    "CCol",
                                    { attrs: { sm: "2" } },
                                    [
                                      _c("CSelect", {
                                        attrs: {
                                          value: _vm.orden.acometida_zona,
                                          plain: true,
                                          label: "Tipo de Acometida",
                                          placeholder: "Tipo de Acometida",
                                          options: _vm.acometida_zona_lst,
                                          "invalid-feedback": _vm.v$.orden
                                            .acometida_zona.$error
                                            ? _vm.v$.orden.acometida_zona
                                                .$errors[0].$message
                                            : "",
                                          "is-valid":
                                            _vm.v$.orden.acometida_zona
                                              .$dirty &&
                                            _vm.orden.preparacion_220 == 1
                                              ? !_vm.v$.orden.acometida_zona
                                                  .$invalid
                                              : null,
                                        },
                                        on: {
                                          "update:value": function ($event) {
                                            return _vm.$set(
                                              _vm.orden,
                                              "acometida_zona",
                                              $event
                                            )
                                          },
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.orden.acometida_zona == 0 &&
                              _vm.orden.preparacion_220 == 1
                                ? _c(
                                    "CCol",
                                    { attrs: { sm: "2" } },
                                    [
                                      _c("CInput", {
                                        attrs: {
                                          value: _vm.orden.metros_acometida,
                                          plain: true,
                                          label: "Metros de Acometida",
                                          placeholder: "Metros de Acometida",
                                          "invalid-feedback": _vm.v$.orden
                                            .metros_acometida.$error
                                            ? _vm.v$.orden.metros_acometida
                                                .$errors[0].$message
                                            : "",
                                          "is-valid": _vm.v$.orden
                                            .metros_acometida.$dirty
                                            ? !_vm.v$.orden.metros_acometida
                                                .$invalid
                                            : null,
                                        },
                                        on: {
                                          "update:value": function ($event) {
                                            return _vm.$set(
                                              _vm.orden,
                                              "metros_acometida",
                                              $event
                                            )
                                          },
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                { attrs: { sm: "3" } },
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("¿Requiere Medidor bidireccional?"),
                                  ]),
                                  _vm._v(" "),
                                  _c("CInputRadioGroup", {
                                    attrs: {
                                      options: _vm.medidor_bidireccional_lst,
                                      inline: true,
                                      checked:
                                        _vm.v$.orden.medidor_bidireccional
                                          .$model,
                                      "invalid-feedback": _vm.v$.orden
                                        .medidor_bidireccional.$error
                                        ? _vm.v$.orden.medidor_bidireccional
                                            .$errors[0].$message
                                        : "",
                                      "is-valid": _vm.v$.orden
                                        .medidor_bidireccional.$dirty
                                        ? !_vm.v$.orden.medidor_bidireccional
                                            .$invalid
                                        : null,
                                    },
                                    on: {
                                      "update:checked": function ($event) {
                                        return _vm.$set(
                                          _vm.v$.orden.medidor_bidireccional,
                                          "$model",
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
                                { attrs: { sm: "3" } },
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("¿Requiere Union de Medidor?"),
                                  ]),
                                  _vm._v(" "),
                                  _c("CInputRadioGroup", {
                                    attrs: {
                                      options: _vm.union_medidor_lst,
                                      inline: true,
                                      checked:
                                        _vm.v$.orden.union_medidor.$model,
                                      "invalid-feedback": _vm.v$.orden
                                        .union_medidor.$error
                                        ? _vm.v$.orden.union_medidor.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.union_medidor
                                        .$dirty
                                        ? !_vm.v$.orden.union_medidor.$invalid
                                        : null,
                                    },
                                    on: {
                                      "update:checked": function ($event) {
                                        return _vm.$set(
                                          _vm.v$.orden.union_medidor,
                                          "$model",
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
                                { attrs: { sm: "3" } },
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Gestor para tramite:"),
                                  ]),
                                  _vm._v(" "),
                                  _c("CInputRadioGroup", {
                                    attrs: {
                                      options: _vm.gestor_proceso_lst,
                                      inline: true,
                                      checked:
                                        _vm.v$.orden.gestor_tramite.$model,
                                      "invalid-feedback": _vm.v$.orden
                                        .gestor_tramite.$error
                                        ? _vm.v$.orden.gestor_tramite.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.gestor_tramite
                                        .$dirty
                                        ? !_vm.v$.orden.gestor_tramite.$invalid
                                        : null,
                                    },
                                    on: {
                                      "update:checked": function ($event) {
                                        return _vm.$set(
                                          _vm.v$.orden.gestor_tramite,
                                          "$model",
                                          $event
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "CButton",
                                    {
                                      attrs: { color: "danger", disabled: "" },
                                    },
                                    [
                                      _vm._v(
                                        "Tramite por wattsolar con un máximo de 200km, mas de 200km tramite con el cliente"
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                { attrs: { sm: "2" } },
                                [
                                  _c("CSelect", {
                                    attrs: {
                                      value: _vm.orden.proceso_CFE,
                                      plain: true,
                                      label: "Proceso CFE",
                                      placeholder: "Proceso CFE",
                                      options: _vm.procesos_CFE,
                                      "invalid-feedback": _vm.v$.orden
                                        .proceso_CFE.$error
                                        ? _vm.v$.orden.proceso_CFE.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.proceso_CFE
                                        .$dirty
                                        ? !_vm.v$.orden.proceso_CFE.$invalid
                                        : null,
                                    },
                                    on: {
                                      "update:value": function ($event) {
                                        return _vm.$set(
                                          _vm.orden,
                                          "proceso_CFE",
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
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("CRow"),
                  _vm._v(" "),
                  _c(
                    "CCard",
                    { staticClass: "bg-light" },
                    [
                      _c("CCardHeader", [
                        _c("span", { staticClass: "card-title" }, [
                          _c("b", [_vm._v("DIRECCION INSTALACION")]),
                        ]),
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
                                  _c("CSelect", {
                                    attrs: {
                                      value: _vm.orden.lugar,
                                      plain: true,
                                      label: "Lugar",
                                      placeholder: "Selecciona un lugar",
                                      options: _vm.lugares,
                                      "invalid-feedback": _vm.v$.orden.lugar
                                        .$error
                                        ? _vm.v$.orden.lugar.$errors[0].$message
                                        : "",
                                      "is-valid": _vm.v$.orden.lugar.$dirty
                                        ? !_vm.v$.orden.lugar.$invalid
                                        : null,
                                    },
                                    on: {
                                      "update:value": function ($event) {
                                        return _vm.$set(
                                          _vm.orden,
                                          "lugar",
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
                                { attrs: { sm: "3" } },
                                [
                                  _c("CSelect", {
                                    attrs: {
                                      value: _vm.orden.estado,
                                      plain: true,
                                      label: "Estado / Instalación",
                                      placeholder:
                                        "Selecciona un Estado / Instalación",
                                      options: _vm.estados,
                                      "invalid-feedback": _vm.v$.orden.estado
                                        .$error
                                        ? _vm.v$.orden.estado.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.estado.$dirty
                                        ? !_vm.v$.orden.estado.$invalid
                                        : null,
                                    },
                                    on: {
                                      "update:value": function ($event) {
                                        return _vm.$set(
                                          _vm.orden,
                                          "estado",
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
                                { attrs: { sm: "3" } },
                                [
                                  _c("CInput", {
                                    attrs: {
                                      label: "Localidad / Instalación",
                                      placeholder: "Localidad / Instalación",
                                      "invalid-feedback": _vm.v$.orden.localidad
                                        .$error
                                        ? _vm.v$.orden.localidad.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.localidad.$dirty
                                        ? !_vm.v$.orden.localidad.$invalid
                                        : null,
                                    },
                                    model: {
                                      value: _vm.v$.orden.localidad.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.localidad,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression: "v$.orden.localidad.$model",
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
                                      label: "Calle / Instalación",
                                      placeholder: "Calle / Instalación",
                                      "invalid-feedback": _vm.v$.orden.calle
                                        .$error
                                        ? _vm.v$.orden.calle.$errors[0].$message
                                        : "",
                                      "is-valid": _vm.v$.orden.calle.$dirty
                                        ? !_vm.v$.orden.calle.$invalid
                                        : null,
                                    },
                                    model: {
                                      value: _vm.v$.orden.calle.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.calle,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression: "v$.orden.calle.$model",
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
                                      label: "Número / Instalación",
                                      placeholder: "Número / Instalación",
                                      "invalid-feedback": _vm.v$.orden.numero
                                        .$error
                                        ? _vm.v$.orden.numero.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.numero.$dirty
                                        ? !_vm.v$.orden.numero.$invalid
                                        : null,
                                    },
                                    model: {
                                      value: _vm.v$.orden.numero.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.numero,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression: "v$.orden.numero.$model",
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
                                      label: "Colonia / Instalación",
                                      placeholder: "Colonia / Instalación",
                                      "invalid-feedback": _vm.v$.orden.colonia
                                        .$error
                                        ? _vm.v$.orden.colonia.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.colonia.$dirty
                                        ? !_vm.v$.orden.colonia.$invalid
                                        : null,
                                    },
                                    model: {
                                      value: _vm.v$.orden.colonia.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.colonia,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression: "v$.orden.colonia.$model",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                { attrs: { sm: "2" } },
                                [
                                  _c("CInput", {
                                    attrs: {
                                      label: "Código postal / Instalación",
                                      placeholder:
                                        "Código postal / Instalación",
                                      "invalid-feedback": _vm.v$.orden.cp.$error
                                        ? _vm.v$.orden.cp.$errors[0].$message
                                        : "",
                                      "is-valid": _vm.v$.orden.cp.$dirty
                                        ? !_vm.v$.orden.cp.$invalid
                                        : null,
                                    },
                                    model: {
                                      value: _vm.v$.orden.cp.$model,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.v$.orden.cp, "$model", $$v)
                                      },
                                      expression: "v$.orden.cp.$model",
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
                                      label: "Teléfono / Instalación",
                                      placeholder: "Teléfono / Instalación",
                                      "invalid-feedback": _vm.v$.orden.telefono
                                        .$error
                                        ? _vm.v$.orden.telefono.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.telefono.$dirty
                                        ? !_vm.v$.orden.telefono.$invalid
                                        : null,
                                    },
                                    model: {
                                      value: _vm.v$.orden.telefono.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.telefono,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression: "v$.orden.telefono.$model",
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
                                      label: "Correo",
                                      placeholder: "Correo",
                                      "invalid-feedback": _vm.v$.orden.correo
                                        .$error
                                        ? _vm.v$.orden.correo.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.correo.$dirty
                                        ? !_vm.v$.orden.correo.$invalid
                                        : null,
                                    },
                                    model: {
                                      value: _vm.v$.orden.correo.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.correo,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression: "v$.orden.correo.$model",
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
                                      label: "No. identificacion",
                                      placeholder: "INE/IFE",
                                      "invalid-feedback": _vm.v$.orden.ine_ife
                                        .$error
                                        ? _vm.v$.orden.ine_ife.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.ine_ife.$dirty
                                        ? !_vm.v$.orden.ine_ife.$invalid
                                        : null,
                                    },
                                    model: {
                                      value: _vm.v$.orden.ine_ife.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.ine_ife,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression: "v$.orden.ine_ife.$model",
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
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CRow",
                [
                  _c(
                    "CCard",
                    { staticClass: "bg-light" },
                    [
                      _c("CCardHeader", [
                        _c("span", { staticClass: "card-title" }, [
                          _c("b", [_vm._v("DIRECCION INE/IFE")]),
                        ]),
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
                                  _c("CSelect", {
                                    attrs: {
                                      value: _vm.orden.estado_ine_ife,
                                      plain: true,
                                      label: "Estado / INE-IFE",
                                      placeholder: "Selecciona un estado",
                                      options: _vm.estados,
                                      "invalid-feedback": _vm.v$.orden
                                        .estado_ine_ife.$error
                                        ? _vm.v$.orden.estado_ine_ife.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.estado_ine_ife
                                        .$dirty
                                        ? !_vm.v$.orden.estado_ine_ife.$invalid
                                        : null,
                                    },
                                    on: {
                                      "update:value": function ($event) {
                                        return _vm.$set(
                                          _vm.orden,
                                          "estado_ine_ife",
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
                                { attrs: { sm: "3" } },
                                [
                                  _c("CInput", {
                                    attrs: {
                                      label: "Ciudad / INE-IFE",
                                      placeholder: "Ciudad / INE-IFE",
                                      "invalid-feedback": _vm.v$.orden
                                        .localidad_ine_ife.$error
                                        ? _vm.v$.orden.localidad_ine_ife
                                            .$errors[0].$message
                                        : "",
                                      "is-valid": _vm.v$.orden.localidad_ine_ife
                                        .$dirty
                                        ? !_vm.v$.orden.localidad_ine_ife
                                            .$invalid
                                        : null,
                                    },
                                    model: {
                                      value:
                                        _vm.v$.orden.localidad_ine_ife.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.localidad_ine_ife,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "v$.orden.localidad_ine_ife.$model",
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
                                      label: "Calle / INE-IFE",
                                      placeholder: "Calle / INE-IFE",
                                      "invalid-feedback": _vm.v$.orden
                                        .calle_ine_ife.$error
                                        ? _vm.v$.orden.calle_ine_ife.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.calle_ine_ife
                                        .$dirty
                                        ? !_vm.v$.orden.calle_ine_ife.$invalid
                                        : null,
                                    },
                                    model: {
                                      value: _vm.v$.orden.calle_ine_ife.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.calle_ine_ife,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "v$.orden.calle_ine_ife.$model",
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
                                      label: "Número / INE-IFE",
                                      placeholder: "Número / INE-IFE",
                                      "invalid-feedback": _vm.v$.orden
                                        .numero_ine_ife.$error
                                        ? _vm.v$.orden.numero_ine_ife.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.numero_ine_ife
                                        .$dirty
                                        ? !_vm.v$.orden.numero_ine_ife.$invalid
                                        : null,
                                    },
                                    model: {
                                      value: _vm.v$.orden.numero_ine_ife.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.numero_ine_ife,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "v$.orden.numero_ine_ife.$model",
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
                                      label: "Colonia / INE-IFE",
                                      placeholder: "Colonia / INE-IFE",
                                      "invalid-feedback": _vm.v$.orden
                                        .colonia_ine_ife.$error
                                        ? _vm.v$.orden.colonia_ine_ife
                                            .$errors[0].$message
                                        : "",
                                      "is-valid": _vm.v$.orden.colonia_ine_ife
                                        .$dirty
                                        ? !_vm.v$.orden.colonia_ine_ife.$invalid
                                        : null,
                                    },
                                    model: {
                                      value:
                                        _vm.v$.orden.colonia_ine_ife.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.colonia_ine_ife,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "v$.orden.colonia_ine_ife.$model",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                { attrs: { sm: "2" } },
                                [
                                  _c("CInput", {
                                    attrs: {
                                      label: "Código postal / INE-IFE",
                                      placeholder: "Código postal / INE-IFE",
                                      "invalid-feedback": _vm.v$.orden
                                        .cp_ine_ife.$error
                                        ? _vm.v$.orden.cp_ine_ife.$errors[0]
                                            .$message
                                        : "",
                                      "is-valid": _vm.v$.orden.cp_ine_ife.$dirty
                                        ? !_vm.v$.orden.cp_ine_ife.$invalid
                                        : null,
                                    },
                                    model: {
                                      value: _vm.v$.orden.cp_ine_ife.$model,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.v$.orden.cp_ine_ife,
                                          "$model",
                                          $$v
                                        )
                                      },
                                      expression: "v$.orden.cp_ine_ife.$model",
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
                            "CRow",
                            [
                              _vm.orden.tipo_contrato == 1
                                ? _c(
                                    "CCol",
                                    { attrs: { sm: "6" } },
                                    [
                                      _c("CInput", {
                                        attrs: {
                                          label: "Nombre Aval",
                                          placeholder: "Nombre Aval",
                                          "invalid-feedback": _vm.v$.orden
                                            .nombre_aval.$error
                                            ? _vm.v$.orden.nombre_aval
                                                .$errors[0].$message
                                            : "",
                                          "is-valid": _vm.v$.orden.nombre_aval
                                            .$dirty
                                            ? !_vm.v$.orden.nombre_aval.$invalid
                                            : null,
                                        },
                                        model: {
                                          value:
                                            _vm.v$.orden.nombre_aval.$model,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.v$.orden.nombre_aval,
                                              "$model",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "v$.orden.nombre_aval.$model",
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.orden.tipo_contrato == 1
                                ? _c(
                                    "CCol",
                                    { attrs: { sm: "6" } },
                                    [
                                      _c("CInput", {
                                        attrs: {
                                          label: "No. identificacion Aval",
                                          placeholder: "INE / IFE",
                                          "invalid-feedback": _vm.v$.orden
                                            .ine_ife_aval.$error
                                            ? _vm.v$.orden.ine_ife_aval
                                                .$errors[0].$message
                                            : "",
                                          "is-valid": _vm.v$.orden.ine_ife_aval
                                            .$dirty
                                            ? !_vm.v$.orden.ine_ife_aval
                                                .$invalid
                                            : null,
                                        },
                                        model: {
                                          value:
                                            _vm.v$.orden.ine_ife_aval.$model,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.v$.orden.ine_ife_aval,
                                              "$model",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "v$.orden.ine_ife_aval.$model",
                                        },
                                      }),
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
              ),
              _vm._v(" "),
              _c(
                "CRow",
                [
                  _c(
                    "CCol",
                    { attrs: { sm: "12" } },
                    [
                      _c(
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
            title: "Nuevo Contrato",
            size: "sm",
            show: _vm.editModal,
          },
          on: {
            "update:show": function ($event) {
              _vm.editModal = $event
            },
          },
        },
        [
          _c("p", { staticStyle: { "text-align": "center" } }, [
            _vm._v("Tu nuevo contrato es: "),
          ]),
          _vm._v(" "),
          _c("h3", { staticStyle: { "text-align": "center" } }, [
            _vm._v(_vm._s(_vm.NumContrato)),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { slot: "footer" }, slot: "footer" },
            [
              _c(
                "CButton",
                {
                  attrs: { color: "primary", variant: "outline" },
                  on: {
                    click: function ($event) {
                      return _vm.closeModal()
                    },
                  },
                },
                [_vm._v(" Aceptar ")]
              ),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);