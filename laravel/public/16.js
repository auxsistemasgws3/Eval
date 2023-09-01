(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

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

/***/ "../coreui/src/views/sos/ResultadosSos.vue":
/*!*************************************************!*\
  !*** ../coreui/src/views/sos/ResultadosSos.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResultadosSos_vue_vue_type_template_id_8620a83e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResultadosSos.vue?vue&type=template&id=8620a83e& */ "../coreui/src/views/sos/ResultadosSos.vue?vue&type=template&id=8620a83e&");
/* harmony import */ var _ResultadosSos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResultadosSos.vue?vue&type=script&lang=js& */ "../coreui/src/views/sos/ResultadosSos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResultadosSos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResultadosSos_vue_vue_type_template_id_8620a83e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResultadosSos_vue_vue_type_template_id_8620a83e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/sos/ResultadosSos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/sos/ResultadosSos.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ../coreui/src/views/sos/ResultadosSos.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultadosSos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./ResultadosSos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/sos/ResultadosSos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultadosSos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/sos/ResultadosSos.vue?vue&type=template&id=8620a83e&":
/*!********************************************************************************!*\
  !*** ../coreui/src/views/sos/ResultadosSos.vue?vue&type=template&id=8620a83e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultadosSos_vue_vue_type_template_id_8620a83e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./ResultadosSos.vue?vue&type=template&id=8620a83e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/sos/ResultadosSos.vue?vue&type=template&id=8620a83e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultadosSos_vue_vue_type_template_id_8620a83e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultadosSos_vue_vue_type_template_id_8620a83e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/sos/ResultadosSos.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/sos/ResultadosSos.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  _style: "min-width:100px;"
}, {
  key: "nombre_completo",
  label: "Nombre completo",
  _style: "min-width:200px"
}, {
  key: "sucursal_desc",
  label: "Sucursal",
  _style: "min-width:100px;"
}, {
  key: "created_at",
  label: "Fecha realizada",
  style: "min-width:100px;"
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
    return {
      reportesFelicitacion: {
        reporte_sos: "",
        fecha_realizada: "",
        puesto_evaluador: "",
        comentarios: "",
        comentarios2: "",
        nombre_realizo_reporte: "",
        primer_apellido_realizo_reporte: "",
        segundo_apellido_realizo_reporte: "",
        categoria: ""
      },
      reportesSugerencia: {
        reporte_sos: "",
        fecha_realizada: "",
        puesto_evaluador: "",
        comentarios: "",
        comentarios2: "",
        comentarios3: "",
        nombre_realizo_reporte: "",
        primer_apellido_realizo_reporte: "",
        segundo_apellido_realizo_reporte: "",
        categoria: ""
      },
      reportesQueja: {
        reporte_sos: "",
        fecha_realizada: "",
        puesto_evaluador: "",
        comentarios: "",
        comentarios2: "",
        comentarios3: "",
        nombre_realizo_reporte: "",
        primer_apellido_realizo_reporte: "",
        segundo_apellido_realizo_reporte: "",
        categoria: ""
      },
      editModalReporteFelicitaciones: false,
      editModalReporteSugerencia: false,
      editModalReporteQueja: false,
      activeTab: 0,
      items: [],
      items2: [],
      items3: [],
      sucursales: [],
      idx: 0,
      isTouched: false,
      loading: true,
      user: this.$options.User,
      setPassword: true,
      action: this.$t("titles.create"),
      fields: fields,
      details: [],
      collapseDuration: 0,
      comentarios: [],
      comentarios2: [],
      comentarios3: []
    };
  },
  methods: {
    index: function index() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/sos/reportes?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.items = response.data.reportesFelicitacion;
        self.items2 = response.data.reportesSugerencias;
        self.items3 = response.data.reportesQuejas;
        self.sucursales = response.data.sucursal;
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
    getReporteFelicitacion: function getReporteFelicitacion(id) {
      var self = this;
      console.log(id);
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/sos/getReporteFelicitacion/" + id + "?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.reportesFelicitacion.reporte_sos = response.data.reporte_sos;
        self.reportesFelicitacion.fecha_realizada = response.data.fecha_realizada;
        self.reportesFelicitacion.puesto_evaluador = response.data.puesto_evaluador;
        self.reportesFelicitacion.comentarios = response.data.comentarios;
        self.reportesFelicitacion.comentarios2 = response.data.comentarios2;
        self.reportesFelicitacion.nombre_realizo_reporte = response.data.nombre_realizo_reporte;
        self.reportesFelicitacion.primer_apellido_realizo_reporte = response.data.primer_apellido_realizo_reporte;
        self.reportesFelicitacion.segundo_apellido_realizo_reporte = response.data.segundo_apellido_realizo_reporte;
        self.reportesFelicitacion.categoria = response.data.categoria;
        self.isTouched = true;
        self.isInvalid;
        self.editModalReporteFelicitaciones = true;
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
    getReporteSugerencia: function getReporteSugerencia(id) {
      var self = this;
      console.log(id);
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/sos/getReporteSugerencia/" + id + "?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.reportesSugerencia.reporte_sos = response.data.reporte_sos;
        self.reportesSugerencia.fecha_realizada = response.data.fecha_realizada;
        self.reportesSugerencia.puesto_evaluador = response.data.puesto_evaluador;
        self.reportesSugerencia.comentarios = response.data.comentarios;
        self.reportesSugerencia.comentarios2 = response.data.comentarios2;
        self.reportesSugerencia.comentarios3 = response.data.comentarios3;
        self.reportesSugerencia.nombre_realizo_reporte = response.data.nombre_realizo_reporte;
        self.reportesSugerencia.primer_apellido_realizo_reporte = response.data.primer_apellido_realizo_reporte;
        self.reportesSugerencia.segundo_apellido_realizo_reporte = response.data.segundo_apellido_realizo_reporte;
        self.reportesSugerencia.categoria = response.data.categoria;
        self.isTouched = true;
        self.isInvalid;
        self.editModalReporteSugerencia = true;
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
    getReporteQueja: function getReporteQueja(id) {
      var self = this;
      console.log(id);
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/sos/getReporteQueja/" + id + "?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.reportesQueja.reporte_sos = response.data.reporte_sos;
        self.reportesQueja.fecha_realizada = response.data.fecha_realizada;
        self.reportesQueja.puesto_evaluador = response.data.puesto_evaluador;
        self.reportesQueja.comentarios = response.data.comentarios;
        self.reportesQueja.comentarios2 = response.data.comentarios2;
        self.reportesQueja.comentarios3 = response.data.comentarios3;
        self.reportesQueja.nombre_realizo_reporte = response.data.nombre_realizo_reporte;
        self.reportesQueja.primer_apellido_realizo_reporte = response.data.primer_apellido_realizo_reporte;
        self.reportesQueja.segundo_apellido_realizo_reporte = response.data.segundo_apellido_realizo_reporte;
        self.reportesQueja.categoria = response.data.categoria;
        self.isTouched = true;
        self.isInvalid;
        self.editModalReporteQueja = true;
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
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formatItems, formatItems2, formatItems3;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.items.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    nombre_completo: item.nombre_realizo_reporte + " " + item.primer_apellido_realizo_reporte + " " + (item.segundo_apellido_realizo_reporte || ""),
                    sucursal_desc: item.sucursal ? item.sucursal.name : "",
                    created_at: item.created_at ? moment(item.created_at).format("YYYY-MM-DD") : ""
                  });
                });

              case 2:
                formatItems = _context.sent;
                _context.next = 5;
                return _this.items2.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    nombre_completo: item.nombre_realizo_reporte + " " + item.primer_apellido_realizo_reporte + " " + (item.segundo_apellido_realizo_reporte || ""),
                    sucursal_desc: item.sucursal ? item.sucursal.name : "",
                    created_at: item.created_at ? moment(item.created_at).format("YYYY-MM-DD") : ""
                  });
                });

              case 5:
                formatItems2 = _context.sent;
                _context.next = 8;
                return _this.items3.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    nombre_completo: item.nombre_realizo_reporte + " " + item.primer_apellido_realizo_reporte + " " + (item.segundo_apellido_realizo_reporte || ""),
                    sucursal_desc: item.sucursal ? item.sucursal.name : "",
                    created_at: item.created_at ? moment(item.created_at).format("YYYY-MM-DD") : ""
                  });
                });

              case 8:
                formatItems3 = _context.sent;
                _this.items = formatItems;
                _this.items2 = formatItems2;
                _this.items3 = formatItems3;
                _this.loading = false;

              case 13:
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/sos/ResultadosSos.vue?vue&type=template&id=8620a83e&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/sos/ResultadosSos.vue?vue&type=template&id=8620a83e& ***!
  \**************************************************************************************************************************************************************************************************************/
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
              _c("span", { staticClass: "h4" }, [_vm._v("Reportes S.O.S. ")]),
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
                      _vm._v(" Felicitaciones\n        "),
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
                                            return _vm.getReporteFelicitacion(
                                              item.id
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
                      _vm._v(" Sugerencias de Mejora\n        "),
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
                                            return _vm.getReporteSugerencia(
                                              item.id
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
                      _vm._v(" Queja\n        "),
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
                                            return _vm.getReporteQueja(item.id)
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
                "CModal",
                {
                  attrs: {
                    entered: true,
                    title: "S.O.S. Felicitaciónes",
                    size: "xl",
                    show: _vm.editModalReporteFelicitaciones,
                  },
                  on: {
                    "update:show": function ($event) {
                      _vm.editModalReporteFelicitaciones = $event
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
                                  _vm.editModalReporteFelicitaciones = false
                                },
                              },
                            },
                            [_vm._v(" Cerrar\n            ")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("h3", { staticClass: "text-center" }, [
                    _vm._v("SOS - SISTEMA OPERATIVO DE SUGERENCIAS"),
                  ]),
                  _vm._v(" "),
                  _c("p"),
                  _vm._v(" "),
                  _c("table", { staticClass: "table" }, [
                    _c("tbody", { attrs: { width: "100%" } }, [
                      _c("tr", [
                        _c(
                          "th",
                          { attrs: { width: "40%" } },
                          [
                            _c("CInput", {
                              attrs: {
                                value: _vm.reportesFelicitacion.fecha_realizada,
                                label: "Fecha:",
                                placeholder: "Ingrese fecha",
                                disabled: "",
                              },
                              on: {
                                "update:value": function ($event) {
                                  return _vm.$set(
                                    _vm.reportesFelicitacion,
                                    "fecha_realizada",
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
                          "th",
                          { attrs: { width: "60%" } },
                          [
                            _c("CInput", {
                              attrs: {
                                value: _vm.reportesFelicitacion.categoria,
                                label: "Categoria:",
                                placeholder: "Ingrese categoria",
                                disabled: "",
                              },
                              on: {
                                "update:value": function ($event) {
                                  return _vm.$set(
                                    _vm.reportesFelicitacion,
                                    "categoria",
                                    $event
                                  )
                                },
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("tbody", { attrs: { width: "100%" } }, [
                      _c("tr", [
                        _c(
                          "th",
                          { attrs: { width: "40%" } },
                          [
                            _c("CInput", {
                              attrs: {
                                value:
                                  _vm.reportesFelicitacion
                                    .nombre_realizo_reporte,
                                label: "Nombre:",
                                placeholder: "Ingrese Nombre",
                                disabled: "",
                              },
                              on: {
                                "update:value": function ($event) {
                                  return _vm.$set(
                                    _vm.reportesFelicitacion,
                                    "nombre_realizo_reporte",
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
                          "th",
                          { attrs: { width: "30%" } },
                          [
                            _c("CInput", {
                              attrs: {
                                value:
                                  _vm.reportesFelicitacion.puesto_evaluador,
                                label: "Puesto:",
                                placeholder: "Ingrese Puesto",
                                disabled: "",
                              },
                              on: {
                                "update:value": function ($event) {
                                  return _vm.$set(
                                    _vm.reportesFelicitacion,
                                    "puesto_evaluador",
                                    $event
                                  )
                                },
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-center" }, [
                    _vm._v(
                      "\n          Buen día, este espacio tiene como fin analizar la forma en que el personal\n          percibe el ambiente de trabajo en el que se desempeña, de esta manera con \n          la colaboración de todos podremos mejorar nuestro entorno laboral. Felicitación: \n          Expresa el reconocimiento a al persona o a el área por la satisfacción de la \n          atención brindada.\n        "
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b",
                    [
                      _c("CIcon", {
                        staticClass: "mb-1",
                        attrs: { name: "cil-user", size: "xl" },
                      }),
                      _vm._v(" "),
                      _c("h4", [_vm._v("Felicitación")]),
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
                      _c("CTextarea", {
                        attrs: {
                          value: _vm.reportesFelicitacion.comentarios,
                          disabled: "",
                          label: "¿A quien va dirigida tu felicitación?",
                          placeholder: "¿A quien va dirigida tu felicitación?",
                          rows: "1",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(
                              _vm.reportesFelicitacion,
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
                    { attrs: { sm: "12" } },
                    [
                      _c("CTextarea", {
                        attrs: {
                          value: _vm.reportesFelicitacion.comentarios2,
                          disabled: "",
                          label: "Comentarios:",
                          placeholder: "¿Que deseas destacar?",
                          rows: "3",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(
                              _vm.reportesFelicitacion,
                              "comentarios2",
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
              _vm._v(" "),
              _c(
                "CModal",
                {
                  attrs: {
                    entered: true,
                    title: "S.O.S. Sugerencia de mejora",
                    size: "xl",
                    show: _vm.editModalReporteSugerencia,
                  },
                  on: {
                    "update:show": function ($event) {
                      _vm.editModalReporteSugerencia = $event
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
                                  _vm.editModalReporteSugerencia = false
                                },
                              },
                            },
                            [_vm._v(" Cerrar\n            ")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("h3", { staticClass: "text-center" }, [
                    _vm._v("SOS - SISTEMA OPERATIVO DE SUGERENCIAS"),
                  ]),
                  _vm._v(" "),
                  _c("p"),
                  _vm._v(" "),
                  _c("table", { staticClass: "table" }, [
                    _c("tbody", { attrs: { width: "100%" } }, [
                      _c("tr", [
                        _c(
                          "th",
                          { attrs: { width: "40%" } },
                          [
                            _c("CInput", {
                              attrs: {
                                value: _vm.reportesSugerencia.fecha_realizada,
                                label: "Fecha:",
                                placeholder: "Ingrese fecha",
                                disabled: "",
                              },
                              on: {
                                "update:value": function ($event) {
                                  return _vm.$set(
                                    _vm.reportesSugerencia,
                                    "fecha_realizada",
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
                          "th",
                          { attrs: { width: "60%" } },
                          [
                            _c("CInput", {
                              attrs: {
                                value: _vm.reportesSugerencia.categoria,
                                label: "Categoria:",
                                placeholder: "Ingrese categoria",
                                disabled: "",
                              },
                              on: {
                                "update:value": function ($event) {
                                  return _vm.$set(
                                    _vm.reportesSugerencia,
                                    "categoria",
                                    $event
                                  )
                                },
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("tbody", { attrs: { width: "100%" } }, [
                      _c("tr", [
                        _c(
                          "th",
                          { attrs: { width: "40%" } },
                          [
                            _c("CInput", {
                              attrs: {
                                value:
                                  _vm.reportesSugerencia.nombre_realizo_reporte,
                                label: "Nombre:",
                                placeholder: "Ingrese Nombre",
                                disabled: "",
                              },
                              on: {
                                "update:value": function ($event) {
                                  return _vm.$set(
                                    _vm.reportesSugerencia,
                                    "nombre_realizo_reporte",
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
                          "th",
                          { attrs: { width: "30%" } },
                          [
                            _c("CInput", {
                              attrs: {
                                value: _vm.reportesSugerencia.puesto_evaluador,
                                label: "Puesto:",
                                placeholder: "Ingrese Puesto",
                                disabled: "",
                              },
                              on: {
                                "update:value": function ($event) {
                                  return _vm.$set(
                                    _vm.reportesSugerencia,
                                    "puesto_evaluador",
                                    $event
                                  )
                                },
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-center" }, [
                    _vm._v(
                      "\n          Buen día, este espacio tiene como fin analizar la forma en que el personal\n          percibe el ambiente de trabajo en el que se desempeña, de esta manera con \n          la colaboración de todos podremos mejorar nuestro entorno laboral. Sugerencia: \n          Expresa toda aquella propuesta que tenga por finalidad promover la mejora \n          de la calidad mediante la aportación de ideas o iniciativas para perfeccionar \n          el funcionamiento de la organización.\n        "
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b",
                    [
                      _c("CIcon", {
                        staticClass: "mb-1",
                        attrs: { name: "cil-user", size: "xl" },
                      }),
                      _vm._v(" "),
                      _c("h4", [_vm._v("Sugerencia de mejora")]),
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
                      _c("CTextarea", {
                        attrs: {
                          value: _vm.reportesSugerencia.comentarios,
                          label: "Descripcion",
                          placeholder:
                            "Escribe una descripcion de la situacion",
                          disabled: "",
                          rows: "3",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(
                              _vm.reportesSugerencia,
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
                    { attrs: { sm: "12" } },
                    [
                      _c("CTextarea", {
                        attrs: {
                          value: _vm.reportesSugerencia.comentarios2,
                          label: "¿Que haria usted?",
                          placeholder:
                            "Desde tu punto de vista ¿Que solucion/mejora propondrias?",
                          disabled: "",
                          rows: "3",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(
                              _vm.reportesSugerencia,
                              "comentarios2",
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
                          value: _vm.reportesSugerencia.comentarios3,
                          label: "¿Que esperas de la empresa?",
                          placeholder:
                            "Desde tu punto de vista ¿Que plan de accion esperas por parte de la empresa?",
                          disabled: "",
                          rows: "3",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(
                              _vm.reportesSugerencia,
                              "comentarios3",
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
              _vm._v(" "),
              _c(
                "CModal",
                {
                  attrs: {
                    entered: true,
                    title: "S.O.S. Queja",
                    size: "xl",
                    show: _vm.editModalReporteQueja,
                  },
                  on: {
                    "update:show": function ($event) {
                      _vm.editModalReporteQueja = $event
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
                                  _vm.editModalReporteQueja = false
                                },
                              },
                            },
                            [_vm._v(" Cerrar\n            ")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("h3", { staticClass: "text-center" }, [
                    _vm._v("SOS - SISTEMA OPERATIVO DE SUGERENCIAS"),
                  ]),
                  _vm._v(" "),
                  _c("p"),
                  _vm._v(" "),
                  _c("table", { staticClass: "table" }, [
                    _c("tbody", { attrs: { width: "100%" } }, [
                      _c("tr", [
                        _c(
                          "th",
                          { attrs: { width: "40%" } },
                          [
                            _c("CInput", {
                              attrs: {
                                value: _vm.reportesQueja.fecha_realizada,
                                label: "Fecha:",
                                placeholder: "Ingrese fecha",
                                disabled: "",
                              },
                              on: {
                                "update:value": function ($event) {
                                  return _vm.$set(
                                    _vm.reportesQueja,
                                    "fecha_realizada",
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
                          "th",
                          { attrs: { width: "60%" } },
                          [
                            _c("CInput", {
                              attrs: {
                                value: _vm.reportesQueja.categoria,
                                label: "Categoria:",
                                placeholder: "Ingrese categoria",
                                disabled: "",
                              },
                              on: {
                                "update:value": function ($event) {
                                  return _vm.$set(
                                    _vm.reportesQueja,
                                    "categoria",
                                    $event
                                  )
                                },
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("tbody", { attrs: { width: "100%" } }, [
                      _c("tr", [
                        _c(
                          "th",
                          { attrs: { width: "40%" } },
                          [
                            _c("CInput", {
                              attrs: {
                                value: _vm.reportesQueja.nombre_realizo_reporte,
                                label: "Nombre:",
                                placeholder: "Ingrese nombre",
                                disabled: "",
                              },
                              on: {
                                "update:value": function ($event) {
                                  return _vm.$set(
                                    _vm.reportesQueja,
                                    "nombre_realizo_reporte",
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
                          "th",
                          { attrs: { width: "60%" } },
                          [
                            _c("CInput", {
                              attrs: {
                                value: _vm.reportesQueja.puesto_evaluador,
                                label: "Puesto:",
                                placeholder: "Ingrese puesto",
                                disabled: "",
                              },
                              on: {
                                "update:value": function ($event) {
                                  return _vm.$set(
                                    _vm.reportesQueja,
                                    "puesto_evaluador",
                                    $event
                                  )
                                },
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-center" }, [
                    _vm._v(
                      "\n          Buen día, este espacio tiene como fin analizar la forma en que el personal\n          percibe el ambiente de trabajo en el que se desempeña, de esta manera con \n          la colaboración de todos podremos mejorar nuestro entorno laboral. Queja: \n          Expresa la insatisfacción sobre los defectos de funcionamiento, estructura, \n          recursos, organización, trato, desatención, tardanza o cualquier otra imperfección.                         \n        "
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b",
                    [
                      _c("CIcon", {
                        staticClass: "mb-1",
                        attrs: { name: "cil-user", size: "xl" },
                      }),
                      _vm._v(" "),
                      _c("h4", [_vm._v("Queja")]),
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
                      _c("CTextarea", {
                        attrs: {
                          value: _vm.reportesQueja.comentarios,
                          label: "Descripcion",
                          placeholder:
                            "Escribe una descripcion de la situacion",
                          disabled: "",
                          rows: "3",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(
                              _vm.reportesQueja,
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
                    { attrs: { sm: "12" } },
                    [
                      _c("CTextarea", {
                        attrs: {
                          value: _vm.reportesQueja.comentarios2,
                          label: "¿Que haria usted?",
                          placeholder:
                            "Desde tu punto de vista ¿Cuales son las medida que se deben tomar?",
                          disabled: "",
                          rows: "3",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(
                              _vm.reportesQueja,
                              "comentarios2",
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
                          value: _vm.reportesQueja.comentarios3,
                          label: "¿Que esperas de la empresa?",
                          placeholder:
                            "Desde tu punto de vista ¿Que plan de accion esperas por parte de la empresa?",
                          disabled: "",
                          rows: "3",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(
                              _vm.reportesQueja,
                              "comentarios3",
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);