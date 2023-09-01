(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

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

/***/ "../coreui/src/views/sim/simCreate.vue":
/*!*********************************************!*\
  !*** ../coreui/src/views/sim/simCreate.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simCreate_vue_vue_type_template_id_5f77923e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simCreate.vue?vue&type=template&id=5f77923e& */ "../coreui/src/views/sim/simCreate.vue?vue&type=template&id=5f77923e&");
/* harmony import */ var _simCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simCreate.vue?vue&type=script&lang=js& */ "../coreui/src/views/sim/simCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _simCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _simCreate_vue_vue_type_template_id_5f77923e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _simCreate_vue_vue_type_template_id_5f77923e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/sim/simCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/sim/simCreate.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ../coreui/src/views/sim/simCreate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_simCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./simCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/sim/simCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_simCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/sim/simCreate.vue?vue&type=template&id=5f77923e&":
/*!****************************************************************************!*\
  !*** ../coreui/src/views/sim/simCreate.vue?vue&type=template&id=5f77923e& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_simCreate_vue_vue_type_template_id_5f77923e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./simCreate.vue?vue&type=template&id=5f77923e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/sim/simCreate.vue?vue&type=template&id=5f77923e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_simCreate_vue_vue_type_template_id_5f77923e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_simCreate_vue_vue_type_template_id_5f77923e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/sim/simCreate.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/sim/simCreate.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdvancedTables",
  moodGood: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__["cilMoodGood"],
  inputPower: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__["cilInputPower"],
  plusIcon: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__["cilPlus"],
  LightbulbIcon: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__["cilLightbulb"],
  sim: {
    NumeroSim: "",
    NumeroTel: "",
    FechaRecarga: "",
    FechaCompra: "",
    Cantidad: ""
  },
  data: function data() {
    return {
      //sucursales: [],
      sims: [],
      sim: {
        NumeroSim: "",
        NumeroTel: "",
        FechaRecarga: "",
        FechaCompra: "",
        Cantidad: ""
      }
    };
  },
  validations: function validations() {
    return {
      sim: {
        NumeroSim: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        NumeroTel: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(10),
          $autoDirty: true
        },
        FechaRecarga: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        FechaCompra: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          $autoDirty: true
        },
        Cantidad: {
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
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(this.$apiAdress + "/api/sim?token=" + localStorage.getItem("api_token")).then(function (response) {
        self.sims = response.data.sims;
      })["catch"](function (error) {
        self.$toast.error(self.$t("messages.error"));
        self.$router.push({
          path: "/inventory/sim"
        });
      });
    },
    create: function create() {
      var self = this;
      this.v$.$touch();
      if (this.v$.$error) return;
      var aux = 0;
      self.sims.forEach(function (item) {
        if (self.sim.NumeroTel == item) {
          aux = 1;
        }
      });

      if (aux == 0) {
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(this.$apiAdress + "/api/sim/create" + "?token=" + localStorage.getItem("api_token"), {
          NumeroSim: self.sim.NumeroSim,
          NumeroTel: self.sim.NumeroTel,
          FechaRecarga: self.sim.FechaRecarga,
          FechaCompra: self.sim.FechaCompra,
          Cantidad: self.sim.Cantidad
        }).then(function (response) {
          self.reset();
          self.$toast.success(self.$t("Agregado exitosamente"));
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
          } else if (error.response.status === 500) {
            self.$toast.error(self.$t("Error detectado"));
            self.$router.push({
              path: "/inventory/sim"
            });
          } else {
            self.$toast.error(self.$t("messages.errorIN"));
          }
        });
      } else {
        self.$toast.error(self.$t("este telefono ya existe"));
      }
    },
    reset: function reset() {
      var self = this;
      self.$nextTick(function () {
        self.v$.$reset();
      });
      self.sim = {
        NumeroSim: "",
        NumeroTel: "",
        FechaRecarga: "",
        FechaCompra: "",
        Cantidad: ""
      };
    }
  },
  mounted: function mounted() {
    this.index();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/sim/simCreate.vue?vue&type=template&id=5f77923e&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/sim/simCreate.vue?vue&type=template&id=5f77923e& ***!
  \**********************************************************************************************************************************************************************************************************/
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
                attrs: { name: "cil-clipboard", size: "xl" },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "h4" }, [_vm._v("Nuevo Sim")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "float-right" },
                [
                  _c(
                    "CLink",
                    {
                      staticClass: "btn mx-1 float-right btn-outline-danger",
                      attrs: { href: "/#/inventory/sim" },
                    },
                    [_vm._v("\n          Cerrar\n        ")]
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
              _c(
                "CRow",
                [
                  _c(
                    "CCol",
                    { attrs: { sm: "3" } },
                    [
                      _c("CInput", {
                        attrs: {
                          value: _vm.sim.NumeroSim,
                          plain: true,
                          label: "Numero de Sim",
                          placeholder: "Ingresa Numero",
                          type: "number",
                          onkeypress:
                            "return event.charCode >= 48 && event.charCode <= 57",
                          "invalid-feedback": _vm.v$.sim.NumeroSim.$error
                            ? _vm.v$.sim.NumeroSim.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.sim.NumeroSim.$dirty
                            ? !_vm.v$.sim.NumeroSim.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.sim, "NumeroSim", $event)
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
                          value: _vm.sim.NumeroTel,
                          plain: true,
                          label: "Numero de telefono",
                          placeholder: "Ingresa Numero",
                          type: "number",
                          onkeypress:
                            "return event.charCode >= 48 && event.charCode <= 57",
                          "invalid-feedback": _vm.v$.sim.NumeroTel.$error
                            ? _vm.v$.sim.NumeroTel.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.sim.NumeroTel.$dirty
                            ? !_vm.v$.sim.NumeroTel.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.sim, "NumeroTel", $event)
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
                          value: _vm.sim.FechaCompra,
                          plain: true,
                          label: "Fecha de compra",
                          type: "date",
                          "invalid-feedback": _vm.v$.sim.FechaCompra.$error
                            ? _vm.v$.sim.FechaCompra.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.sim.FechaCompra.$dirty
                            ? !_vm.v$.sim.FechaCompra.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.sim, "FechaCompra", $event)
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
                          value: _vm.sim.FechaRecarga,
                          plain: true,
                          label: "Fecha de recarga",
                          type: "date",
                          "invalid-feedback": _vm.v$.sim.FechaRecarga.$error
                            ? _vm.v$.sim.FechaRecarga.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.sim.FechaRecarga.$dirty
                            ? !_vm.v$.sim.FechaRecarga.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.sim, "FechaRecarga", $event)
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
                          value: _vm.sim.Cantidad,
                          plain: true,
                          label: "Cantidad de la Recarga",
                          placeholder: "Cantidad Recargada",
                          type: "number",
                          onkeypress:
                            "return event.charCode >= 48 && event.charCode <= 57",
                          "invalid-feedback": _vm.v$.sim.Cantidad.$error
                            ? _vm.v$.sim.Cantidad.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.sim.Cantidad.$dirty
                            ? !_vm.v$.sim.Cantidad.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.sim, "Cantidad", $event)
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