(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

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

/***/ "../coreui/src/views/computers/ComputerCreate.vue":
/*!********************************************************!*\
  !*** ../coreui/src/views/computers/ComputerCreate.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComputerCreate_vue_vue_type_template_id_42bcbe50_mode_out_in___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComputerCreate.vue?vue&type=template&id=42bcbe50&mode=out-in& */ "../coreui/src/views/computers/ComputerCreate.vue?vue&type=template&id=42bcbe50&mode=out-in&");
/* harmony import */ var _ComputerCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComputerCreate.vue?vue&type=script&lang=js& */ "../coreui/src/views/computers/ComputerCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ComputerCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComputerCreate_vue_vue_type_template_id_42bcbe50_mode_out_in___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComputerCreate_vue_vue_type_template_id_42bcbe50_mode_out_in___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/computers/ComputerCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/computers/ComputerCreate.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ../coreui/src/views/computers/ComputerCreate.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_ComputerCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./ComputerCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/computers/ComputerCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_ComputerCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/computers/ComputerCreate.vue?vue&type=template&id=42bcbe50&mode=out-in&":
/*!***************************************************************************************************!*\
  !*** ../coreui/src/views/computers/ComputerCreate.vue?vue&type=template&id=42bcbe50&mode=out-in& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_ComputerCreate_vue_vue_type_template_id_42bcbe50_mode_out_in___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./ComputerCreate.vue?vue&type=template&id=42bcbe50&mode=out-in& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/computers/ComputerCreate.vue?vue&type=template&id=42bcbe50&mode=out-in&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_ComputerCreate_vue_vue_type_template_id_42bcbe50_mode_out_in___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_ComputerCreate_vue_vue_type_template_id_42bcbe50_mode_out_in___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/computers/ComputerCreate.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/computers/ComputerCreate.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/validators */ "../coreui/src/utils/validators.js");
/* harmony import */ var _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vuelidate/validators */ "../coreui/node_modules/@vuelidate/validators/dist/index.esm.js");
/* harmony import */ var _vuelidate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vuelidate/core */ "../coreui/node_modules/@vuelidate/core/dist/index.esm.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons */ "../coreui/node_modules/@coreui/icons/js/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "../coreui/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  laptop: {
    sucursal: "",
    marca: "",
    nombre_equipo: "",
    modelo: "",
    numero_serie: "",
    usuario: "",
    usuario_practicante: "",
    mac_address: "",
    sistema_operativo: "",
    procesador: "",
    disco_duro: "",
    disco_duro_secundario: "",
    ram: "",
    condiciones: "",
    accesorios: "",
    fecha_asignacion: "",
    fecha_factura: "",
    valor_factura: "",
    anydesk: "",
    teamviewer: "",
    fecha_antivirus: ""
  },
  venta: {
    nombre: "",
    apellido1: "",
    apellido2: "",
    telefono: "",
    correo: "",
    tipo_vivienda: "",
    consumo_promedio: "",
    estado: "",
    municipio: "",
    cp: "",
    colonia: "",
    calle: "",
    numero_ext: "",
    numero_int: ""
  },
  data: function data() {
    return {
      busNoContrato: "",
      tipo_viviendas: [],
      consumos_promedio: [],
      estados: [],
      municipios: [],
      errors: [],
      sucursales: [],
      marcas: [],
      sistemas_operativos: [],
      procesadores: [],
      laptop: {
        sucursal: "",
        marca: "",
        nombre_equipo: "",
        modelo: "",
        numero_serie: "",
        usuario: "",
        usuario_practicante: "",
        mac_address: "",
        sistema_operativo: "",
        procesador: "",
        disco_duro: "",
        disco_duro_secundario: "",
        ram: "",
        condiciones: "",
        accesorios: "",
        fecha_asignacion: "",
        fecha_factura: "",
        valor_factura: "",
        anydesk: "",
        teamviewer: "",
        fecha_antivirus: ""
      },
      venta: {
        nombre: "",
        apellido1: "",
        apellido2: "",
        telefono: "",
        correo: "",
        tipo_vivienda: "",
        consumo_promedio: "",
        estado: "",
        municipio: "",
        cp: "",
        colonia: "",
        calle: "",
        numero_ext: "",
        numero_int: ""
      }
    };
  },
  validations: function validations() {
    return {
      laptop: {
        sucursal: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        marca: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        modelo: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        nombre_equipo: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        numero_serie: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        mac_address: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        sistema_operativo: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        procesador: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        disco_duro: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          $autoDirty: true
        },
        disco_duro_secundario: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          $autoDirty: true
        },
        ram: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          $autoDirty: true
        },
        condiciones: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        accesorios: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        fecha_asignacion: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        fecha_factura: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        valor_factura: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          $autoDirty: true
        },
        fecha_antivirus: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        anydesk: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          $autoDirty: true
        },
        teamviewer: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          $autoDirty: true
        }
      },
      venta: {
        nombre: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(45),
          $autoDirty: true
        },
        apellido1: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(45),
          $autoDirty: true
        },
        apellido2: {
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(45),
          $autoDirty: true
        },
        telefono: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(15),
          $autoDirty: true
        },
        correo: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(45),
          $autoDirty: true
        },
        tipo_vivienda: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        consumo_promedio: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        estado: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        municipio: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        cp: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          numeric: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["numeric"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(6),
          $autoDirty: true
        },
        colonia: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(45),
          $autoDirty: true
        },
        calle: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(45),
          $autoDirty: true
        },
        numero_ext: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(15),
          $autoDirty: true
        },
        numero_int: {
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(15),
          $autoDirty: true
        }
      }
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
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(this.$apiAdress + "/api/computer?token=" + localStorage.getItem("api_token")).then(function (response) {
        self.sucursales = response.data.sucursales;
        self.marcas = response.data.marcas;
        self.sistemas_operativos = response.data.sistemas_operativos;
        self.procesadores = response.data.procesadores;
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
    getMunicipios: function getMunicipios() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(this.$apiAdress + "/api/catalogos/municipios/" + self.venta.estado + "?token=" + localStorage.getItem("api_token")).then(function (response) {
        self.municipios = response.data.municipios;
        self.venta.municipio = null;
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
      var self = this;
      this.v$.$touch();
      if (this.v$.$error) return;
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(this.$apiAdress + "/api/computer/create" + "?token=" + localStorage.getItem("api_token"), {
        sucursal: self.laptop.sucursal,
        marca: self.laptop.marca,
        nombre_equipo: self.laptop.nombre_equipo,
        modelo: self.laptop.modelo,
        numero_serie: self.laptop.numero_serie,
        usuario: self.laptop.usuario,
        usuario_practicante: self.laptop.usuario_practicante,
        mac_address: self.laptop.mac_address,
        sistema_operativo: self.laptop.sistema_operativo,
        procesador: self.laptop.procesador,
        disco_duro: self.laptop.disco_duro,
        disco_duro_secundario: self.laptop.disco_duro_secundario,
        ram: self.laptop.ram,
        condiciones: self.laptop.condiciones,
        accesorios: self.laptop.accesorios,
        fecha_asignacion: self.laptop.fecha_asignacion,
        fecha_factura: self.laptop.fecha_factura,
        valor_factura: self.laptop.valor_factura,
        anydesk: self.laptop.anydesk,
        teamviewer: self.laptop.teamviewer,
        fecha_antivirus: self.laptop.fecha_antivirus
      }).then(function (response) {
        self.reset();
        self.$toast.success(self.$t("messages.insert"));

        if (response.data.errorMail.status) {
          setTimeout(function () {
            return self.$toast.warning(response.data.errorMail.message);
          }, 700);
        }

        setTimeout(function () {
          return self.$router.push({
            path: "/ventas"
          });
        }, 500);
      })["catch"](function (error) {
        console.log(error);

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
    },
    reset: function reset() {
      var self = this;
      self.$nextTick(function () {
        self.v$.$reset();
      });
      self.venta = {
        nombre: "",
        apellido1: "",
        apellido2: "",
        telefono: "",
        correo: "",
        tipo_vivienda: "",
        consumo_promedio: "",
        estado: "",
        municipio: "",
        cp: "",
        colonia: "",
        calle: "",
        numero_ext: "",
        numero_int: ""
      };
    }
  },
  mounted: function mounted() {
    this.index();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/computers/ComputerCreate.vue?vue&type=template&id=42bcbe50&mode=out-in&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/computers/ComputerCreate.vue?vue&type=template&id=42bcbe50&mode=out-in& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
                attrs: { name: "cil-laptop", size: "xl" },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "h4" }, [_vm._v("Nueva computadora ")]),
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
                    "CCol",
                    { attrs: { sm: "3" } },
                    [
                      _c("CSelect", {
                        attrs: {
                          value: _vm.laptop.sucursal,
                          plain: true,
                          label: "Sucursal",
                          options: _vm.sucursales,
                          placeholder: "Sucursal",
                          "invalid-feedback": _vm.v$.laptop.sucursal.$error
                            ? _vm.v$.laptop.sucursal.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.laptop.sucursal.$dirty
                            ? !_vm.v$.laptop.sucursal.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.laptop, "sucursal", $event)
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
                          value: _vm.laptop.marca,
                          plain: true,
                          label: "Marca",
                          options: _vm.marcas,
                          placeholder: "Selecciona la marca",
                          "invalid-feedback": _vm.v$.laptop.marca.$error
                            ? _vm.v$.laptop.marca.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.laptop.marca.$dirty
                            ? !_vm.v$.laptop.marca.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.laptop, "marca", $event)
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
                          label: "Nombre Equipo",
                          placeholder: "Nombre Equipo",
                          "invalid-feedback": _vm.v$.laptop.nombre_equipo.$error
                            ? _vm.v$.laptop.nombre_equipo.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.laptop.nombre_equipo.$dirty
                            ? !_vm.v$.laptop.nombre_equipo.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.laptop.nombre_equipo.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.laptop.nombre_equipo, "$model", $$v)
                          },
                          expression: "v$.laptop.nombre_equipo.$model",
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
                          label: "Modelo",
                          placeholder: "Modelo",
                          "invalid-feedback": _vm.v$.laptop.modelo.$error
                            ? _vm.v$.laptop.modelo.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.laptop.modelo.$dirty
                            ? !_vm.v$.laptop.modelo.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.laptop.modelo.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.laptop.modelo, "$model", $$v)
                          },
                          expression: "v$.laptop.modelo.$model",
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
                          label: "MAC Address",
                          placeholder: "Número de Serie",
                          "invalid-feedback": _vm.v$.laptop.mac_address.$error
                            ? _vm.v$.laptop.mac_address.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.laptop.mac_address.$dirty
                            ? !_vm.v$.laptop.mac_address.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.laptop.mac_address.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.laptop.mac_address, "$model", $$v)
                          },
                          expression: "v$.laptop.mac_address.$model",
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
                          value: _vm.laptop.sistema_operativo,
                          plain: true,
                          label: "SO",
                          options: _vm.sistemas_operativos,
                          placeholder: "Selecciona un SO",
                          "invalid-feedback": _vm.v$.laptop.sistema_operativo
                            .$error
                            ? _vm.v$.laptop.sistema_operativo.$errors[0]
                                .$message
                            : "",
                          "is-valid": _vm.v$.laptop.sistema_operativo.$dirty
                            ? !_vm.v$.laptop.sistema_operativo.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(
                              _vm.laptop,
                              "sistema_operativo",
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
                          value: _vm.laptop.procesador,
                          plain: true,
                          label: "Procesador",
                          options: _vm.procesadores,
                          placeholder: "Selecciona un Procesador",
                          "invalid-feedback": _vm.v$.laptop.procesador.$error
                            ? _vm.v$.laptop.procesador.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.laptop.procesador.$dirty
                            ? !_vm.v$.laptop.procesador.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.laptop, "procesador", $event)
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
                          label: "Disco  duro",
                          placeholder: "Disco duro",
                          "invalid-feedback": _vm.v$.laptop.disco_duro.$error
                            ? _vm.v$.laptop.disco_duro.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.laptop.disco_duro.$dirty
                            ? !_vm.v$.laptop.disco_duro.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.laptop.disco_duro.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.laptop.disco_duro, "$model", $$v)
                          },
                          expression: "v$.laptop.disco_duro.$model",
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
                          label: "Disco  duro secundario",
                          placeholder: "Disco duro sec.",
                          "invalid-feedback": _vm.v$.laptop
                            .disco_duro_secundario.$error
                            ? _vm.v$.laptop.disco_duro_secundario.$errors[0]
                                .$message
                            : "",
                          "is-valid": _vm.v$.laptop.disco_duro_secundario.$dirty
                            ? !_vm.v$.laptop.disco_duro_secundario.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.laptop.disco_duro_secundario.$model,
                          callback: function ($$v) {
                            _vm.$set(
                              _vm.v$.laptop.disco_duro_secundario,
                              "$model",
                              $$v
                            )
                          },
                          expression: "v$.laptop.disco_duro_secundario.$model",
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
                          label: "RAM",
                          placeholder: "RAM",
                          "invalid-feedback": _vm.v$.laptop.ram.$error
                            ? _vm.v$.laptop.ram.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.laptop.ram.$dirty
                            ? !_vm.v$.laptop.ram.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.laptop.ram.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.laptop.ram, "$model", $$v)
                          },
                          expression: "v$.laptop.ram.$model",
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
                          label: "Condiciones",
                          placeholder: "Condiciones",
                          "invalid-feedback": _vm.v$.laptop.condiciones.$error
                            ? _vm.v$.laptop.condiciones.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.laptop.condiciones.$dirty
                            ? !_vm.v$.laptop.condiciones.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.laptop.condiciones.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.laptop.condiciones, "$model", $$v)
                          },
                          expression: "v$.laptop.condiciones.$model",
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
                          label: "Accesorios",
                          placeholder: "Accesorios",
                          "invalid-feedback": _vm.v$.laptop.accesorios.$error
                            ? _vm.v$.laptop.accesorios.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.laptop.accesorios.$dirty
                            ? !_vm.v$.laptop.accesorios.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.laptop.accesorios.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.laptop.accesorios, "$model", $$v)
                          },
                          expression: "v$.laptop.accesorios.$model",
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
                          label: "Fecha asignación",
                          type: "date",
                          "invalid-feedback": _vm.v$.laptop.fecha_asignacion
                            .$error
                            ? _vm.v$.laptop.fecha_asignacion.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.laptop.fecha_asignacion.$dirty
                            ? !_vm.v$.laptop.fecha_asignacion.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.laptop.fecha_asignacion.$model,
                          callback: function ($$v) {
                            _vm.$set(
                              _vm.v$.laptop.fecha_asignacion,
                              "$model",
                              $$v
                            )
                          },
                          expression: "v$.laptop.fecha_asignacion.$model",
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
                          label: "Fecha factura",
                          type: "date",
                          "invalid-feedback": _vm.v$.laptop.fecha_factura.$error
                            ? _vm.v$.laptop.fecha_factura.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.laptop.fecha_factura.$dirty
                            ? !_vm.v$.laptop.fecha_factura.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.laptop.fecha_factura.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.laptop.fecha_factura, "$model", $$v)
                          },
                          expression: "v$.laptop.fecha_factura.$model",
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
                          label: "Valor Factura",
                          placeholder: "Valor Factura",
                          "invalid-feedback": _vm.v$.laptop.valor_factura.$error
                            ? _vm.v$.laptop.valor_factura.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.laptop.valor_factura.$dirty
                            ? !_vm.v$.laptop.valor_factura.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.laptop.valor_factura.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.laptop.valor_factura, "$model", $$v)
                          },
                          expression: "v$.laptop.valor_factura.$model",
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
                          label: "AnyDesk",
                          placeholder: "AnyDesk",
                          "invalid-feedback": _vm.v$.laptop.anydesk.$error
                            ? _vm.v$.laptop.anydesk.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.laptop.anydesk.$dirty
                            ? !_vm.v$.laptop.anydesk.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.laptop.anydesk.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.laptop.anydesk, "$model", $$v)
                          },
                          expression: "v$.laptop.anydesk.$model",
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
                          label: "TeamViewer",
                          placeholder: "TeamViewer",
                          "invalid-feedback": _vm.v$.laptop.teamviewer.$error
                            ? _vm.v$.laptop.teamviewer.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.laptop.teamviewer.$dirty
                            ? !_vm.v$.laptop.teamviewer.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.laptop.teamviewer.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.laptop.teamviewer, "$model", $$v)
                          },
                          expression: "v$.laptop.teamviewer.$model",
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);