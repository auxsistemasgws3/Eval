(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

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

/***/ "../coreui/src/views/tickets/TicketCreate.vue":
/*!****************************************************!*\
  !*** ../coreui/src/views/tickets/TicketCreate.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TicketCreate_vue_vue_type_template_id_e17f500c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TicketCreate.vue?vue&type=template&id=e17f500c& */ "../coreui/src/views/tickets/TicketCreate.vue?vue&type=template&id=e17f500c&");
/* harmony import */ var _TicketCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TicketCreate.vue?vue&type=script&lang=js& */ "../coreui/src/views/tickets/TicketCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TicketCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TicketCreate_vue_vue_type_template_id_e17f500c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TicketCreate_vue_vue_type_template_id_e17f500c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/tickets/TicketCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/tickets/TicketCreate.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ../coreui/src/views/tickets/TicketCreate.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./TicketCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/tickets/TicketCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/tickets/TicketCreate.vue?vue&type=template&id=e17f500c&":
/*!***********************************************************************************!*\
  !*** ../coreui/src/views/tickets/TicketCreate.vue?vue&type=template&id=e17f500c& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketCreate_vue_vue_type_template_id_e17f500c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./TicketCreate.vue?vue&type=template&id=e17f500c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/tickets/TicketCreate.vue?vue&type=template&id=e17f500c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketCreate_vue_vue_type_template_id_e17f500c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketCreate_vue_vue_type_template_id_e17f500c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/tickets/TicketCreate.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/tickets/TicketCreate.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdvancedTables",
  moodGood: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__["cilMoodGood"],
  inputPower: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__["cilInputPower"],
  plusIcon: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__["cilPlus"],
  LightbulbIcon: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__["cilLightbulb"],
  ticket: {
    id_orden: "",
    no_contrato: "",
    nombre_cliente: "",
    telefono: "",
    fecha_instalacion: "",
    facturar_visita: "",
    tipo_servicio: "",
    servicio: "",
    domicilio: "",
    ciudad: "",
    fecha: "",
    observaciones: ""
  },
  data: function data() {
    return {
      busNoContrato: "",
      busEstatus: [],
      errors: [],
      servicios: [],
      tipos_servicio: [],
      tipos_servicios_monitoreo: [],
      sino_lst: [{
        value: "1",
        label: 'Si'
      }, {
        value: "0",
        label: 'No'
      }],
      ticket: {
        id_orden: "",
        no_contrato: "",
        nombre_cliente: "",
        telefono: "",
        tipo_servicio: "",
        fecha_instalacion: "",
        facturar_visita: "",
        servicio: "",
        domicilio: "",
        ciudad: "",
        fecha: "",
        observaciones: ""
      }
    };
  },
  validations: function validations() {
    var _this = this;

    return {
      ticket: {
        nombre_cliente: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        telefono: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        servicio: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        tipo_servicio: {
          required: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__["requiredIf"])(function () {
            return _this.ticket.servicio == 1;
          }),
          $autoDirty: true
        },
        ciudad: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        domicilio: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        fecha: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        no_contrato: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        observaciones: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        facturar_visita: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
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
      this.ticket.fecha = moment(new Date()).format("YYYY-MM-DD");
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(this.$apiAdress + "/api/ticket?token=" + localStorage.getItem("api_token")).then(function (response) {
        self.servicios = response.data.tipo_ordenservicio;
        self.tipos_servicios_monitoreo = response.data.tipos_servicios_monitoreo;
      })["catch"](function (error) {
        self.$toast.error(self.$t("messages.error"));
        self.$router.push({
          path: "/dashboard"
        });
      });
    },
    BuscarOrden: function BuscarOrden() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(this.$apiAdress + "/api/ticket/orden?token=" + localStorage.getItem("api_token"), {
        no_contrato: self.ticket.no_contrato
      }).then(function (response) {
        var data = response.data.orden;
        self.ticket.id_orden = data.id;
        self.ticket.no_contrato = data.no_contrato;
        self.ticket.nombre_cliente = data.nombre_cliente;
        self.ticket.telefono = data.telefono;
        self.ticket.fecha_instalacion = moment(String(data.fecha_instalacion)).format("YYYY-MM-DD");
        self.ticket.domicilio = data.calle + " #" + data.numero + " " + data.colonia + " cp. " + data.cp;
        self.ticket.ciudad = data.sucursal.name;
      })["catch"](function (error) {
        /*    if (error.response.status === 401) {
             self.$router.push({ path: "/login" });
           }else{
             self.$toast.error(self.$t("messages.error"));
           } */
        if (error.response.status == 500) {
          self.$router.push({
            path: "/tickets/crear"
          });
          self.$toast.error(self.$t("messages.ErrorOS1"));
        }

        if (error.response.status == 401) {
          self.$toast.error(self.$t("messages.ErrorOS1"));
        }
      });
    },
    create: function create() {
      var self = this;
      this.v$.$touch();
      if (this.v$.$error) return;
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(this.$apiAdress + "/api/ticket/create" + "?token=" + localStorage.getItem("api_token"), {
        no_contrato: self.ticket.no_contrato,
        observaciones: self.ticket.observaciones,
        id_orden: self.ticket.id_orden,
        servicio: self.ticket.servicio,
        tipo_servicio: self.ticket.tipo_servicio,
        facturar_visita: self.ticket.facturar_visita
      }).then(function (response) {
        var data = response.data;
        self.reset();
        self.$toast.success(self.$t(data.folio)); //self.$toast.success(self.$t("messages.insert"));

        self.$router.push({
          path: "/tickets"
        });
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
    },
    reset: function reset() {
      var self = this;
      self.$nextTick(function () {
        self.v$.$reset();
      });
      self.orden = {
        sucursal_id: "",
        tipo_contrato: "",
        no_contrato: "",
        no_factura: "",
        nombre_cliente: "",
        no_paneles: "",
        capacidad_inversor: "",
        marca_inversor: "",
        marca_panel: "",
        potencia_panel: "",
        lugar: "",
        localidad: "",
        calle: "",
        numero: "",
        colonia: "",
        cp: "",
        telefono: "",
        tipo_servicio: ""
      };
    }
  },
  mounted: function mounted() {
    this.index();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/tickets/TicketCreate.vue?vue&type=template&id=e17f500c&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/tickets/TicketCreate.vue?vue&type=template&id=e17f500c& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
                attrs: { name: "cil-pin", size: "xl" },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "h4" }, [_vm._v("Orden de servicio ")]),
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
                      _c("CInput", {
                        attrs: {
                          label: "No. contrato",
                          placeholder: "No. contrato",
                          "invalid-feedback": _vm.v$.ticket.no_contrato.$error
                            ? _vm.v$.ticket.no_contrato.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.ticket.no_contrato.$dirty
                            ? !_vm.v$.ticket.no_contrato.$invalid
                            : null,
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "append",
                            fn: function () {
                              return [
                                _c(
                                  "CButton",
                                  {
                                    attrs: {
                                      color: "primary",
                                      size: "sm",
                                      variant: "outline",
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.BuscarOrden()
                                      },
                                    },
                                  },
                                  [
                                    _c("CIcon", {
                                      attrs: { name: "cil-magnifying-glass" },
                                    }),
                                  ],
                                  1
                                ),
                              ]
                            },
                            proxy: true,
                          },
                        ]),
                        model: {
                          value: _vm.v$.ticket.no_contrato.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.ticket.no_contrato, "$model", $$v)
                          },
                          expression: "v$.ticket.no_contrato.$model",
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
                          label: "Cliente",
                          placeholder: "Cliente",
                          disabled: "",
                        },
                        model: {
                          value: _vm.ticket.nombre_cliente,
                          callback: function ($$v) {
                            _vm.$set(_vm.ticket, "nombre_cliente", $$v)
                          },
                          expression: "ticket.nombre_cliente",
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
                          label: "Fecha Instalación",
                          placeholder: "Fecha Instalación",
                          disabled: "",
                        },
                        model: {
                          value: _vm.ticket.fecha_instalacion,
                          callback: function ($$v) {
                            _vm.$set(_vm.ticket, "fecha_instalacion", $$v)
                          },
                          expression: "ticket.fecha_instalacion",
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
                          value: _vm.ticket.servicio,
                          plain: true,
                          label: "Servicio",
                          placeholder: "Seleccione",
                          options: _vm.servicios,
                          "invalid-feedback": _vm.v$.ticket.servicio.$error
                            ? _vm.v$.ticket.servicio.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.ticket.servicio.$dirty
                            ? !_vm.v$.ticket.servicio.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.ticket, "servicio", $event)
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.ticket.servicio == 1
                    ? _c(
                        "CCol",
                        { attrs: { sm: "3" } },
                        [
                          _c("CSelect", {
                            attrs: {
                              value: _vm.ticket.tipo_servicio,
                              plain: true,
                              label: "Servicio Monitoreo",
                              placeholder: "Seleccione",
                              options: _vm.tipos_servicios_monitoreo,
                              "invalid-feedback": _vm.v$.ticket.tipo_servicio
                                .$error
                                ? _vm.v$.ticket.tipo_servicio.$errors[0]
                                    .$message
                                : "",
                              "is-valid": _vm.v$.ticket.tipo_servicio.$dirty
                                ? !_vm.v$.ticket.tipo_servicio.$invalid
                                : null,
                            },
                            on: {
                              "update:value": function ($event) {
                                return _vm.$set(
                                  _vm.ticket,
                                  "tipo_servicio",
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
                        _vm._v("¿Facturar O. de Servicio?"),
                      ]),
                      _vm._v(" "),
                      _c("CInputRadioGroup", {
                        attrs: {
                          options: _vm.sino_lst,
                          inline: true,
                          checked: _vm.v$.ticket.facturar_visita.$model,
                          "invalid-feedback": _vm.v$.ticket.facturar_visita
                            .$error
                            ? _vm.v$.ticket.facturar_visita.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.ticket.facturar_visita.$dirty
                            ? !_vm.v$.ticket.facturar_visita.$invalid
                            : null,
                        },
                        on: {
                          "update:checked": function ($event) {
                            return _vm.$set(
                              _vm.v$.ticket.facturar_visita,
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
                      _c("CInput", {
                        attrs: {
                          label: "Teléfono",
                          placeholder: "Teléfono",
                          disabled: "",
                        },
                        model: {
                          value: _vm.ticket.telefono,
                          callback: function ($$v) {
                            _vm.$set(_vm.ticket, "telefono", $$v)
                          },
                          expression: "ticket.telefono",
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
                          label: "Domicilio",
                          placeholder: "Domicilio",
                          disabled: "",
                        },
                        model: {
                          value: _vm.ticket.domicilio,
                          callback: function ($$v) {
                            _vm.$set(_vm.ticket, "domicilio", $$v)
                          },
                          expression: "ticket.domicilio",
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
                          label: "Ciudad",
                          placeholder: "Ciudad",
                          disabled: "",
                        },
                        model: {
                          value: _vm.ticket.ciudad,
                          callback: function ($$v) {
                            _vm.$set(_vm.ticket, "ciudad", $$v)
                          },
                          expression: "ticket.ciudad",
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
                          type: "date",
                          label: "Fecha Ticket",
                          placeholder: "Fecha",
                          disabled: "",
                        },
                        model: {
                          value: _vm.ticket.fecha,
                          callback: function ($$v) {
                            _vm.$set(_vm.ticket, "fecha", $$v)
                          },
                          expression: "ticket.fecha",
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
                          label: "Observaciones",
                          placeholder: "Observaciones",
                          rows: "9",
                          "invalid-feedback": _vm.v$.ticket.observaciones.$error
                            ? _vm.v$.ticket.observaciones.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.ticket.observaciones.$dirty
                            ? !_vm.v$.ticket.observaciones.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.ticket.observaciones.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.ticket.observaciones, "$model", $$v)
                          },
                          expression: "v$.ticket.observaciones.$model",
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