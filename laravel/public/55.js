(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

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

/***/ "../coreui/src/views/ventas/VentaCreate.vue":
/*!**************************************************!*\
  !*** ../coreui/src/views/ventas/VentaCreate.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VentaCreate_vue_vue_type_template_id_258c322c_mode_out_in___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VentaCreate.vue?vue&type=template&id=258c322c&mode=out-in& */ "../coreui/src/views/ventas/VentaCreate.vue?vue&type=template&id=258c322c&mode=out-in&");
/* harmony import */ var _VentaCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VentaCreate.vue?vue&type=script&lang=js& */ "../coreui/src/views/ventas/VentaCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VentaCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VentaCreate_vue_vue_type_template_id_258c322c_mode_out_in___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VentaCreate_vue_vue_type_template_id_258c322c_mode_out_in___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/ventas/VentaCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/ventas/VentaCreate.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ../coreui/src/views/ventas/VentaCreate.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_VentaCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./VentaCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/ventas/VentaCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_VentaCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/ventas/VentaCreate.vue?vue&type=template&id=258c322c&mode=out-in&":
/*!*********************************************************************************************!*\
  !*** ../coreui/src/views/ventas/VentaCreate.vue?vue&type=template&id=258c322c&mode=out-in& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_VentaCreate_vue_vue_type_template_id_258c322c_mode_out_in___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./VentaCreate.vue?vue&type=template&id=258c322c&mode=out-in& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/ventas/VentaCreate.vue?vue&type=template&id=258c322c&mode=out-in&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_VentaCreate_vue_vue_type_template_id_258c322c_mode_out_in___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_VentaCreate_vue_vue_type_template_id_258c322c_mode_out_in___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/ventas/VentaCreate.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/ventas/VentaCreate.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdvancedTables",
  moodGood: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__["cilMoodGood"],
  inputPower: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__["cilInputPower"],
  plusIcon: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__["cilPlus"],
  LightbulbIcon: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__["cilLightbulb"],
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
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(this.$apiAdress + "/api/venta?token=" + localStorage.getItem("api_token")).then(function (response) {
        self.tipo_viviendas = response.data.tipo_viviendas;
        self.consumos_promedio = response.data.consumos_promedio;
        self.estados = response.data.estados;
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
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(this.$apiAdress + "/api/venta/create" + "?token=" + localStorage.getItem("api_token"), {
        nombre: self.venta.nombre,
        apellido1: self.venta.apellido1,
        apellido2: self.venta.apellido2,
        telefono: self.venta.telefono,
        correo: self.venta.correo,
        tipo_vivienda: self.venta.tipo_vivienda,
        consumo_promedio: self.venta.consumo_promedio,
        estado: self.venta.estado,
        municipio: self.venta.municipio,
        cp: self.venta.cp,
        colonia: self.venta.colonia,
        calle: self.venta.calle,
        numero_ext: self.venta.numero_ext,
        numero_int: self.venta.numero_int
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/ventas/VentaCreate.vue?vue&type=template&id=258c322c&mode=out-in&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/ventas/VentaCreate.vue?vue&type=template&id=258c322c&mode=out-in& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
                attrs: { name: "cil-cart", size: "xl" },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "h4" }, [
                _vm._v("Referencia de venta "),
              ]),
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
                    { attrs: { sm: "4" } },
                    [
                      _c("CInput", {
                        attrs: {
                          label: "Nombre",
                          placeholder: "Nombre",
                          "invalid-feedback": _vm.v$.venta.nombre.$error
                            ? _vm.v$.venta.nombre.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.venta.nombre.$dirty
                            ? !_vm.v$.venta.nombre.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.venta.nombre.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.venta.nombre, "$model", $$v)
                          },
                          expression: "v$.venta.nombre.$model",
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
                          "invalid-feedback": _vm.v$.venta.apellido1.$error
                            ? _vm.v$.venta.apellido1.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.venta.apellido1.$dirty
                            ? !_vm.v$.venta.apellido1.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.venta.apellido1.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.venta.apellido1, "$model", $$v)
                          },
                          expression: "v$.venta.apellido1.$model",
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
                          "invalid-feedback": _vm.v$.venta.apellido2.$error
                            ? _vm.v$.venta.apellido2.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.venta.apellido2.$dirty
                            ? !_vm.v$.venta.apellido2.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.venta.apellido2.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.venta.apellido2, "$model", $$v)
                          },
                          expression: "v$.venta.apellido2.$model",
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
                          label: "Teléfono",
                          placeholder: "Teléfono",
                          "invalid-feedback": _vm.v$.venta.telefono.$error
                            ? _vm.v$.venta.telefono.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.venta.telefono.$dirty
                            ? !_vm.v$.venta.telefono.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.venta.telefono.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.venta.telefono, "$model", $$v)
                          },
                          expression: "v$.venta.telefono.$model",
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
                          label: "Correo",
                          placeholder: "Correo",
                          "invalid-feedback": _vm.v$.venta.correo.$error
                            ? _vm.v$.venta.correo.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.venta.correo.$dirty
                            ? !_vm.v$.venta.correo.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.venta.correo.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.venta.correo, "$model", $$v)
                          },
                          expression: "v$.venta.correo.$model",
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
                          value: _vm.venta.tipo_vivienda,
                          plain: true,
                          label: "Tipo vivienda",
                          options: _vm.tipo_viviendas,
                          placeholder: "Selecciona un tipo de vivienda",
                          "invalid-feedback": _vm.v$.venta.tipo_vivienda.$error
                            ? _vm.v$.venta.tipo_vivienda.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.venta.tipo_vivienda.$dirty
                            ? !_vm.v$.venta.tipo_vivienda.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.venta, "tipo_vivienda", $event)
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
                          value: _vm.venta.consumo_promedio,
                          plain: true,
                          label: "Consumo promedio",
                          options: _vm.consumos_promedio,
                          placeholder: "Selecciona el consumo promedio",
                          "invalid-feedback": _vm.v$.venta.consumo_promedio
                            .$error
                            ? _vm.v$.venta.consumo_promedio.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.venta.consumo_promedio.$dirty
                            ? !_vm.v$.venta.consumo_promedio.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(
                              _vm.venta,
                              "consumo_promedio",
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
                          value: _vm.venta.estado,
                          plain: true,
                          label: "Estado",
                          options: _vm.estados,
                          placeholder: "Selecciona el estado",
                          "invalid-feedback": _vm.v$.venta.estado.$error
                            ? _vm.v$.venta.estado.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.venta.estado.$dirty
                            ? !_vm.v$.venta.estado.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.venta, "estado", $event)
                          },
                          change: function ($event) {
                            return _vm.getMunicipios()
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
                          value: _vm.venta.municipio,
                          plain: true,
                          label: "Municipio",
                          options: _vm.municipios,
                          placeholder: "Selecciona el municipio",
                          "invalid-feedback": _vm.v$.venta.municipio.$error
                            ? _vm.v$.venta.municipio.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.venta.municipio.$dirty
                            ? !_vm.v$.venta.municipio.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.venta, "municipio", $event)
                          },
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
                          label: "Codigo postal",
                          placeholder: "Codigo postal",
                          "invalid-feedback": _vm.v$.venta.cp.$error
                            ? _vm.v$.venta.cp.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.venta.cp.$dirty
                            ? !_vm.v$.venta.cp.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.venta.cp.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.venta.cp, "$model", $$v)
                          },
                          expression: "v$.venta.cp.$model",
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
                          label: "Colonia",
                          placeholder: "Colonia",
                          "invalid-feedback": _vm.v$.venta.colonia.$error
                            ? _vm.v$.venta.colonia.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.venta.colonia.$dirty
                            ? !_vm.v$.venta.colonia.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.venta.colonia.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.venta.colonia, "$model", $$v)
                          },
                          expression: "v$.venta.colonia.$model",
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
                          label: "Calle",
                          placeholder: "Calle",
                          "invalid-feedback": _vm.v$.venta.calle.$error
                            ? _vm.v$.venta.calle.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.venta.calle.$dirty
                            ? !_vm.v$.venta.calle.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.venta.calle.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.venta.calle, "$model", $$v)
                          },
                          expression: "v$.venta.calle.$model",
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
                          label: "Número ext.",
                          placeholder: "Número ext.",
                          "invalid-feedback": _vm.v$.venta.numero_ext.$error
                            ? _vm.v$.venta.numero_ext.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.venta.numero_ext.$dirty
                            ? !_vm.v$.venta.numero_ext.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.venta.numero_ext.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.venta.numero_ext, "$model", $$v)
                          },
                          expression: "v$.venta.numero_ext.$model",
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
                          label: "Número int.",
                          placeholder: "Número int.",
                          "invalid-feedback": _vm.v$.venta.numero_int.$error
                            ? _vm.v$.venta.numero_int.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.venta.numero_int.$dirty
                            ? !_vm.v$.venta.numero_int.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.venta.numero_int.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.venta.numero_int, "$model", $$v)
                          },
                          expression: "v$.venta.numero_int.$model",
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