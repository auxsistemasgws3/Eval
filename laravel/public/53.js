(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

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

/***/ "../coreui/src/views/tickets/TicketIndex.vue":
/*!***************************************************!*\
  !*** ../coreui/src/views/tickets/TicketIndex.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TicketIndex_vue_vue_type_template_id_245f5b44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TicketIndex.vue?vue&type=template&id=245f5b44& */ "../coreui/src/views/tickets/TicketIndex.vue?vue&type=template&id=245f5b44&");
/* harmony import */ var _TicketIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TicketIndex.vue?vue&type=script&lang=js& */ "../coreui/src/views/tickets/TicketIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TicketIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TicketIndex_vue_vue_type_template_id_245f5b44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TicketIndex_vue_vue_type_template_id_245f5b44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/tickets/TicketIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/tickets/TicketIndex.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ../coreui/src/views/tickets/TicketIndex.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./TicketIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/tickets/TicketIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/tickets/TicketIndex.vue?vue&type=template&id=245f5b44&":
/*!**********************************************************************************!*\
  !*** ../coreui/src/views/tickets/TicketIndex.vue?vue&type=template&id=245f5b44& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketIndex_vue_vue_type_template_id_245f5b44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./TicketIndex.vue?vue&type=template&id=245f5b44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/tickets/TicketIndex.vue?vue&type=template&id=245f5b44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketIndex_vue_vue_type_template_id_245f5b44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketIndex_vue_vue_type_template_id_245f5b44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/tickets/TicketIndex.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/tickets/TicketIndex.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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





var fields = [{
  key: "folio",
  label: "Folio",
  _style: "width:9%"
}, {
  key: "no_contrato",
  label: "No. contrato",
  _style: "width:9%"
}, {
  key: "nombre_cliente",
  label: "Cliente",
  _style: "min-width:250px"
}, {
  key: "status",
  label: "Estatus",
  _style: "min-width:10px;"
}, {
  key: "created_at",
  label: "Fecha"
}, {
  key: "departamento",
  label: "Dep siguiente:"
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdvancedTables",
  moodGood: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__["cilMoodGood"],
  inputPower: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__["cilInputPower"],
  plusIcon: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__["cilPlus"],
  LightbulbIcon: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__["cilLightbulb"],
  data: function data() {
    return {
      loading: true,
      busCliente: '',
      busNoContrato: '',
      busEstatus: [],
      busSucursal: '',
      bustipoordenservicio: '',
      fixedBusEstatus: [],
      estatus: [],
      sucursales: [],
      tiposordenesservicio: [],
      items: [],
      fields: fields,
      details: [],
      collapseDuration: 0
    };
  },
  methods: {
    index: function index() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(this.$apiAdress + "/api/ticket?token=" + localStorage.getItem("api_token")).then(function (response) {
        self.estatus = response.data.estatus;
        self.sucursales = response.data.sucursales;
        self.tiposordenesservicio = response.data.tipo_ordenservicio;
        var temp = false;
        var rolEstatus = [1, 2];
        /*      for (let i = 0; i < response.data.estatus.length; i++) {
               temp = false;
               for (let j = 0; j < rolEstatus.length; j++) {
                 if (response.data.estatus[i].code == rolEstatus[j]) {
                   temp = true;
                   self.busEstatus.push(response.data.estatus[i].code);
                   break;
                 } 
               }
               self.fixedBusEstatus[response.data.estatus[i].code] = temp;
             } */

        self.buscar();
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
    buscar: function buscar() {
      this.loading = true;
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(this.$apiAdress + "/api/ticket/buscar?token=" + localStorage.getItem("api_token"), {
        busEstatus: self.busEstatus,
        busCliente: self.busCliente,
        busNoContrato: self.busNoContrato,
        busSucursal: self.busSucursal,
        bustipoordenservicio: self.bustipoordenservicio
      }).then(function (response) {
        self.items = response.data.tickets.map(function (item) {
          /*
          switch (item.estatus.next) {
          case 2: 
              depart = "Contabilidad" ;
          case 3: 
              depart = "" ;
              break; 
          case 4:
              depart = "Contabilidad" ;
              break;
          case 5: 
              depart = "Operaciones" ;
              break;
          case 6: 
              depart = "Operaciones" ;
              break;
          }  */
          return _objectSpread(_objectSpread({}, item), {}, {
            created_at: item.created_at ? moment(String(item.created_at)).format("DD/MM/YYYY") : ""
          });
        });
        self.loading = false;
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
    limpiar: function limpiar() {
      this.busEstatus = [];
      this.busCliente = '';
      this.busNoContrato = '';
      this.busSucursal = '';
      this.bustipoordenservicio = '';
      this.items = [];

      for (var i = 0; i < this.fixedBusEstatus.length; i++) {
        this.fixedBusEstatus[i] = false;
      }
    },
    getBadge: function getBadge(status) {
      return status === "Active" ? "success" : status === "Inactive" ? "secondary" : status === "Pending" ? "warning" : status === "Banned" ? "danger" : "primary";
    },
    selectCheckbox: function selectCheckbox(slug, code) {
      self = this;

      switch (slug) {
        case "busEstatus":
          var temp = this.busEstatus.indexOf(code);

          if (temp > -1) {
            this.busEstatus.splice(temp, 1);
            this.fixedBusEstatus[code] = false;
          } else {
            this.fixedBusEstatus[code] = true;
            this.busEstatus.push(code);
          }

          break;
      }
    }
  },
  mounted: function mounted() {
    this.index();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/tickets/TicketIndex.vue?vue&type=template&id=245f5b44&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/tickets/TicketIndex.vue?vue&type=template&id=245f5b44& ***!
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
              _c("span", { staticClass: "h4" }, [
                _vm._v("Ordenes de servicio  "),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-header-actions" },
                [
                  _c(
                    "CLink",
                    {
                      staticClass: "btn btn-primary btn-sm",
                      attrs: { href: "/#/tickets/crear" },
                    },
                    [
                      _c("CIcon", {
                        attrs: { content: _vm.$options.plusIcon },
                      }),
                      _vm._v(" Agregar\n        "),
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
              _c(
                "CRow",
                [
                  _c(
                    "CCol",
                    { attrs: { sm: "3" } },
                    [
                      _c("CSelect", {
                        attrs: {
                          value: _vm.busSucursal,
                          plain: true,
                          label: "Sucursal",
                          options: _vm.sucursales,
                          placeholder: "Seleccione",
                        },
                        on: {
                          "update:value": function ($event) {
                            _vm.busSucursal = $event
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
                          label: "No. de contrato",
                          placeholder: "No. de contrato",
                        },
                        model: {
                          value: _vm.busNoContrato,
                          callback: function ($$v) {
                            _vm.busNoContrato = $$v
                          },
                          expression: "busNoContrato",
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
                          value: _vm.bustipoordenservicio,
                          plain: true,
                          label: "Tipo Servicio",
                          placeholder: "Seleccione",
                          options: _vm.tiposordenesservicio,
                        },
                        on: {
                          "update:value": function ($event) {
                            _vm.bustipoordenservicio = $event
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
                        attrs: { label: "Cliente", placeholder: "Nombre" },
                        model: {
                          value: _vm.busCliente,
                          callback: function ($$v) {
                            _vm.busCliente = $$v
                          },
                          expression: "busCliente",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { staticClass: "py-3", attrs: { sm: "6" } },
                    [
                      _c("br"),
                      _vm._v(" "),
                      _vm._l(_vm.estatus, function (option) {
                        return _c("CInputCheckbox", {
                          key: option.code,
                          attrs: {
                            label: option.text,
                            custom: true,
                            addLabelClasses: "text-" + option.aux,
                            name: "busEstatus",
                            inline: true,
                            checked: _vm.fixedBusEstatus[option.code],
                          },
                          on: {
                            "update:checked": [
                              function ($event) {
                                return _vm.selectCheckbox(
                                  "busEstatus",
                                  option.code
                                )
                              },
                              function ($event) {
                                return _vm.$set(
                                  _vm.fixedBusEstatus,
                                  option.code,
                                  $event
                                )
                              },
                            ],
                          },
                        })
                      }),
                    ],
                    2
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
                    { attrs: { sm: "6" } },
                    [
                      _c(
                        "CButton",
                        {
                          attrs: { type: "button", color: "primary" },
                          on: {
                            click: function ($event) {
                              return _vm.buscar()
                            },
                          },
                        },
                        [_vm._v("\n            Buscar")]
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: {
                            type: "button",
                            variant: "outline",
                            color: "primary",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.limpiar()
                            },
                          },
                        },
                        [_vm._v("\n            Limpiar")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: false,
                          expression: "false",
                        },
                      ],
                      staticClass: "text-md-right",
                      attrs: { sm: "6" },
                    },
                    [
                      _c(
                        "CButton",
                        {
                          attrs: { type: "button", color: "dark" },
                          on: {
                            click: function ($event) {
                              return _vm.buscar()
                            },
                          },
                        },
                        [_vm._v("\n            Exportar")]
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
        "CCard",
        [
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
                    key: "folio",
                    fn: function (ref) {
                      var item = ref.item
                      return [
                        _c(
                          "td",
                          { staticClass: "py-2" },
                          [
                            _c(
                              "CLink",
                              {
                                staticClass:
                                  "btn btn-outline-primary btn-block btn-sm",
                                attrs: { href: "/#/tickets/" + item.id },
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(item.folio) +
                                    "\n            "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ]
                    },
                  },
                  {
                    key: "no_contrato",
                    fn: function (ref) {
                      var item = ref.item
                      return [
                        _c("td", [
                          _vm._v(
                            "\n            " +
                              _vm._s(item.orden.no_contrato) +
                              "\n          "
                          ),
                        ]),
                      ]
                    },
                  },
                  {
                    key: "nombre_cliente",
                    fn: function (ref) {
                      var item = ref.item
                      return [
                        _c("td", [
                          _vm._v(
                            "\n            " +
                              _vm._s(item.orden.nombre_cliente) +
                              "\n          "
                          ),
                        ]),
                      ]
                    },
                  },
                  {
                    key: "status",
                    fn: function (ref) {
                      var item = ref.item
                      return [
                        _c("td", [
                          _vm._v(
                            "\n            " +
                              _vm._s(item.estatus.text) +
                              "\n          "
                          ),
                        ]),
                      ]
                    },
                  },
                  {
                    key: "departamento",
                    fn: function (ref) {
                      var item = ref.item
                      return [
                        _c("td", [
                          _vm._v(
                            "\n            " +
                              _vm._s(item.estatus.aux2) +
                              "\n          "
                          ),
                        ]),
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);