(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

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

/***/ "../coreui/src/views/sos/sos.vue":
/*!***************************************!*\
  !*** ../coreui/src/views/sos/sos.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sos_vue_vue_type_template_id_3ce5c1f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sos.vue?vue&type=template&id=3ce5c1f6& */ "../coreui/src/views/sos/sos.vue?vue&type=template&id=3ce5c1f6&");
/* harmony import */ var _sos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sos.vue?vue&type=script&lang=js& */ "../coreui/src/views/sos/sos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sos_vue_vue_type_template_id_3ce5c1f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sos_vue_vue_type_template_id_3ce5c1f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/sos/sos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/sos/sos.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ../coreui/src/views/sos/sos.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_sos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./sos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/sos/sos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_sos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/sos/sos.vue?vue&type=template&id=3ce5c1f6&":
/*!**********************************************************************!*\
  !*** ../coreui/src/views/sos/sos.vue?vue&type=template&id=3ce5c1f6& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_sos_vue_vue_type_template_id_3ce5c1f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./sos.vue?vue&type=template&id=3ce5c1f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/sos/sos.vue?vue&type=template&id=3ce5c1f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_sos_vue_vue_type_template_id_3ce5c1f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_sos_vue_vue_type_template_id_3ce5c1f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/sos/sos.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/sos/sos.vue?vue&type=script&lang=js& ***!
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
var _computed;



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






/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      editModalFelicitaciones: false,
      editModalSugerencia: false,
      editModalQueja: false,
      user: {},
      Fechahoy: "",
      categoria: "",
      isTouched: false,
      loading: true,
      setPassword: true,
      action: this.$t("titles.create"),
      details: [],
      collapseDuration: 0,
      comentarios: [],
      comentarios2: [],
      comentarios3: []
    };
  },
  computed: (_computed = {
    formatHistory: function formatHistory() {
      return this.comentarios.map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          hora: item.created_at ? moment(String(item.created_at)).format("hh:mm a") : "",
          dia: item.created_at ? moment(String(item.created_at)).format("DD") : "",
          mes: item.created_at ? moment(String(item.created_at)).format("MMMM") : "",
          ano: item.created_at ? moment(String(item.created_at)).format("YYYY") : ""
        });
      });
    }
  }, _defineProperty(_computed, "formatHistory", function formatHistory() {
    return this.comentarios2.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        hora: item.created_at ? moment(String(item.created_at)).format("hh:mm a") : "",
        dia: item.created_at ? moment(String(item.created_at)).format("DD") : "",
        mes: item.created_at ? moment(String(item.created_at)).format("MMMM") : "",
        ano: item.created_at ? moment(String(item.created_at)).format("YYYY") : ""
      });
    });
  }), _defineProperty(_computed, "formatHistory", function formatHistory() {
    return this.comentarios3.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        hora: item.created_at ? moment(String(item.created_at)).format("hh:mm a") : "",
        dia: item.created_at ? moment(String(item.created_at)).format("DD") : "",
        mes: item.created_at ? moment(String(item.created_at)).format("MMMM") : "",
        ano: item.created_at ? moment(String(item.created_at)).format("YYYY") : ""
      });
    });
  }), _computed),
  setup: function setup() {
    return {
      v$: Object(_vuelidate_core__WEBPACK_IMPORTED_MODULE_3__["useVuelidate"])()
    };
  },
  methods: {
    index: function index() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/sos?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.user = response.data.user;
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
    getFelicitacion: function getFelicitacion() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/sos/getFelicitacion?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.editModalFelicitaciones = true;
        self.Fechahoy = response.data.Fechahoy;
        self.categoria = response.data.categoria;
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
    addFelicitacion: function addFelicitacion() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var self, isUpdate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = _this;

                _this.v$.$touch();

                console.log(self.v$);

                if (!self.v$.$error) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                _context.next = 7;
                return self.$swal({
                  title: self.$t("¿Esta seguro de enviar tus respuestas?"),
                  text: self.$t("messages.question.status.description"),
                  icon: "warning",
                  showCancelButton: true
                }).then(function (result) {
                  return result.isConfirmed;
                });

              case 7:
                isUpdate = _context.sent;

                if (isUpdate) {
                  axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(_this.$apiAdress + "/api/sos/addFelicitacion" + "?token=" + localStorage.getItem("api_token"), {
                    comentarios: self.comentarios,
                    comentarios2: self.comentarios2
                  }).then(function (response) {
                    console.log(response.data);
                    self.respuestas = {};
                    self.comentarios = "";
                    self.comentarios2 = "";
                    self.$toast.success(self.$t("messages.insert"));
                  })["catch"](function (error) {
                    self.comentarios = "";
                    self.comentarios2 = "";

                    if (error.response.status == 500) {
                      self.$router.push({
                        path: "/evaluacion"
                      });
                      self.$toast.error(self.$t("messages.error"));
                    }

                    if (error.response.status == 401) {
                      self.$toast.error(self.$t("Ya realizaste esta Evaluación"));
                    }
                  });
                }

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getSugerencia: function getSugerencia() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/sos/getSugerencia?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.editModalSugerencia = true;
        self.Fechahoy = response.data.Fechahoy;
        self.categoria = response.data.categoria;
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
    addSugerencia: function addSugerencia() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var self, isUpdate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = _this2;

                _this2.v$.$touch();

                console.log(self.v$);

                if (!self.v$.$error) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return");

              case 5:
                _context2.next = 7;
                return self.$swal({
                  title: self.$t("¿Esta seguro de enviar tus respuestas?"),
                  text: self.$t("messages.question.status.description"),
                  icon: "warning",
                  showCancelButton: true
                }).then(function (result) {
                  return result.isConfirmed;
                });

              case 7:
                isUpdate = _context2.sent;

                if (isUpdate) {
                  axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(_this2.$apiAdress + "/api/sos/addSugerencia" + "?token=" + localStorage.getItem("api_token"), {
                    comentarios: self.comentarios,
                    comentarios2: self.comentarios2,
                    comentarios3: self.comentarios3
                  }).then(function (response) {
                    console.log(response.data);
                    self.respuestas = {};
                    self.comentarios = "";
                    self.comentarios2 = "";
                    self.comentarios3 = "";
                    self.$toast.success(self.$t("messages.insert"));
                  })["catch"](function (error) {
                    self.comentarios = "";
                    self.comentarios2 = "";
                    self.comentarios3 = "";

                    if (error.response.status == 500) {
                      self.$router.push({
                        path: "/evaluacion"
                      });
                      self.$toast.error(self.$t("messages.error"));
                    }

                    if (error.response.status == 401) {
                      self.$toast.error(self.$t("Ya realizaste esta Evaluación"));
                    }
                  });
                }

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getQueja: function getQueja() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/sos/getQueja?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.editModalQueja = true;
        self.Fechahoy = response.data.Fechahoy;
        self.categoria = response.data.categoria;
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
    addQueja: function addQueja() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var self, isUpdate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                self = _this3;

                _this3.v$.$touch();

                console.log(self.v$);

                if (!self.v$.$error) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return");

              case 5:
                _context3.next = 7;
                return self.$swal({
                  title: self.$t("¿Esta seguro de enviar tus respuestas?"),
                  text: self.$t("messages.question.status.description"),
                  icon: "warning",
                  showCancelButton: true
                }).then(function (result) {
                  return result.isConfirmed;
                });

              case 7:
                isUpdate = _context3.sent;

                if (isUpdate) {
                  axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(_this3.$apiAdress + "/api/sos/addQueja" + "?token=" + localStorage.getItem("api_token"), {
                    comentarios: self.comentarios,
                    comentarios2: self.comentarios2,
                    comentarios3: self.comentarios3
                  }).then(function (response) {
                    console.log(response.data);
                    self.respuestas = {};
                    self.comentarios = "";
                    self.comentarios2 = "";
                    self.comentarios3 = "";
                    self.$toast.success(self.$t("messages.insert"));
                  })["catch"](function (error) {
                    self.comentarios = "";
                    self.comentarios2 = "";
                    self.comentarios3 = "";

                    if (error.response.status == 500) {
                      self.$router.push({
                        path: "/evaluacion"
                      });
                      self.$toast.error(self.$t("messages.error"));
                    }

                    if (error.response.status == 401) {
                      self.$toast.error(self.$t("Ya realizaste esta Evaluación"));
                    }
                  });
                }

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/sos/sos.vue?vue&type=template&id=3ce5c1f6&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/sos/sos.vue?vue&type=template&id=3ce5c1f6& ***!
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
              _vm._v("\n       \n      "),
              _c("span", { staticClass: "h4" }, [
                _vm._v("SISTEMA OPERATIVO DE SUGERENCIAS "),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "CCard",
            [
              _vm._v("\n       \n      "),
              _c("H1", { staticClass: "text-center" }, [
                _vm._v("SOS - SISTEMA OPERATIVO DE SUGERENCIAS"),
              ]),
              _vm._v("\n       \n      "),
              _c("H2", { staticClass: "text-center" }, [
                _vm._v("¿Que es el S.O.S.?"),
              ]),
              _vm._v("\n       \n      "),
              _c("H4", { staticClass: "text-center" }, [
                _vm._v(
                  "\n        Es un buzón virtual que está a disposición de nuestros colaboradores y donde\n        podrás enviar tus sugerencias, quejar o felicitaciones, que nos ayudaran a\n        mejorar continuamente la calidad de los servicios dentro de la empresa.\n        Creamos este espacio para poder escucharte y estar en la mejora continua\n        para brindarte un mejor servicio. Las Quejas, Sugerencias y Felicitaciones \n        tendrán como finalidad la mejora de la  eficiencia y calidad de las actividades \n        e incrementar la satisfacción de los colaboradores."
                ),
              ]),
              _vm._v("\n         \n\n          "),
              _c(
                "CCardBody",
                { staticClass: "mx-auto", attrs: { size: "lg" } },
                [
                  _c(
                    "CButton",
                    {
                      staticClass: "me-md-2",
                      staticStyle: { width: "200px" },
                      attrs: { color: "success" },
                      on: {
                        click: function ($event) {
                          _vm.getFelicitacion(),
                            (_vm.editModalFelicitaciones = true)
                        },
                      },
                    },
                    [_vm._v("\n              Felicitación\n            ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "CButton",
                    {
                      staticClass: "me-md-2",
                      staticStyle: { width: "200px" },
                      attrs: { color: "warning" },
                      on: {
                        click: function ($event) {
                          _vm.getSugerencia(), (_vm.editModalSugerencia = true)
                        },
                      },
                    },
                    [
                      _vm._v(
                        "\n              Sugerencia de Mejora\n            "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "CButton",
                    {
                      staticClass: "me-md-2",
                      staticStyle: { width: "200px" },
                      attrs: { color: "danger" },
                      on: {
                        click: function ($event) {
                          _vm.getQueja(), (_vm.editModalQueja = true)
                        },
                      },
                    },
                    [_vm._v("\n              Queja\n            ")]
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
            title: "S.O.S. Felicitaciónes",
            size: "xl",
            show: _vm.editModalFelicitaciones,
          },
          on: {
            "update:show": function ($event) {
              _vm.editModalFelicitaciones = $event
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
                          _vm.addFelicitacion(),
                            (_vm.editModalFelicitaciones = false)
                        },
                      },
                    },
                    [_vm._v(" Enviar\n        ")]
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
                  { attrs: { width: "60%" } },
                  [
                    _c("CInput", {
                      attrs: {
                        value: _vm.categoria,
                        label: "Categoria:",
                        placeholder: "Ingrese categoria",
                        disabled: "",
                      },
                      on: {
                        "update:value": function ($event) {
                          _vm.categoria = $event
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
              "\n      Buen día, este espacio tiene como fin analizar la forma en que el personal\n      percibe el ambiente de trabajo en el que se desempeña, de esta manera con \n      la colaboración de todos podremos mejorar nuestro entorno laboral. Felicitación: \n      Expresa el reconocimiento a al persona o a el área por la satisfacción de la \n      atención brindada.\n    "
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
                  value: _vm.comentarios,
                  label: "¿A quien va dirigida tu felicitación?",
                  placeholder: "¿A quien va dirigida tu felicitación?",
                  rows: "1",
                },
                on: {
                  "update:value": function ($event) {
                    _vm.comentarios = $event
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
                  value: _vm.comentarios2,
                  label: "Comentarios:",
                  placeholder: "¿Que deseas destacar?",
                  rows: "3",
                },
                on: {
                  "update:value": function ($event) {
                    _vm.comentarios2 = $event
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
            show: _vm.editModalSugerencia,
          },
          on: {
            "update:show": function ($event) {
              _vm.editModalSugerencia = $event
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
                          _vm.addSugerencia(), (_vm.editModalSugerencia = false)
                        },
                      },
                    },
                    [_vm._v(" Enviar\n        ")]
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
                  { attrs: { width: "60%" } },
                  [
                    _c("CInput", {
                      attrs: {
                        value: _vm.categoria,
                        label: "Categoria:",
                        placeholder: "Ingrese categoria",
                        disabled: "",
                      },
                      on: {
                        "update:value": function ($event) {
                          _vm.categoria = $event
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
              "\n      Buen día, este espacio tiene como fin analizar la forma en que el personal\n      percibe el ambiente de trabajo en el que se desempeña, de esta manera con \n      la colaboración de todos podremos mejorar nuestro entorno laboral. Sugerencia: \n      Expresa toda aquella propuesta que tenga por finalidad promover la mejora \n      de la calidad mediante la aportación de ideas o iniciativas para perfeccionar \n      el funcionamiento de la organización.\n    "
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
                  value: _vm.comentarios,
                  label: "Descripcion",
                  placeholder: "Escribe una descripcion de la situacion",
                  rows: "3",
                },
                on: {
                  "update:value": function ($event) {
                    _vm.comentarios = $event
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
                  value: _vm.comentarios2,
                  label: "¿Que haria usted?",
                  placeholder:
                    "Desde tu punto de vista ¿Que solucion/mejora propondrias?",
                  rows: "3",
                },
                on: {
                  "update:value": function ($event) {
                    _vm.comentarios2 = $event
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
                  value: _vm.comentarios3,
                  label: "¿Que esperas de la empresa?",
                  placeholder:
                    "Desde tu punto de vista ¿Que plan de accion esperas por parte de la empresa?",
                  rows: "3",
                },
                on: {
                  "update:value": function ($event) {
                    _vm.comentarios3 = $event
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
            show: _vm.editModalQueja,
          },
          on: {
            "update:show": function ($event) {
              _vm.editModalQueja = $event
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
                          _vm.addQueja(), (_vm.editModalQueja = false)
                        },
                      },
                    },
                    [_vm._v(" Enviar\n        ")]
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
                  { attrs: { width: "60%" } },
                  [
                    _c("CInput", {
                      attrs: {
                        value: _vm.categoria,
                        label: "Categoria:",
                        placeholder: "Ingrese categoria",
                        disabled: "",
                      },
                      on: {
                        "update:value": function ($event) {
                          _vm.categoria = $event
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
              "\n      Buen día, este espacio tiene como fin analizar la forma en que el personal\n      percibe el ambiente de trabajo en el que se desempeña, de esta manera con \n      la colaboración de todos podremos mejorar nuestro entorno laboral. Queja: \n      Expresa la insatisfacción sobre los defectos de funcionamiento, estructura, \n      recursos, organización, trato, desatención, tardanza o cualquier otra imperfección.                         \n    "
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
                  value: _vm.comentarios,
                  label: "Descripcion",
                  placeholder: "Escribe una descripcion de la situacion",
                  rows: "3",
                },
                on: {
                  "update:value": function ($event) {
                    _vm.comentarios = $event
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
                  value: _vm.comentarios2,
                  label: "¿Que haria usted?",
                  placeholder:
                    "Desde tu punto de vista ¿Cuales son las medida que se deben tomar?",
                  rows: "3",
                },
                on: {
                  "update:value": function ($event) {
                    _vm.comentarios2 = $event
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
                  value: _vm.comentarios3,
                  label: "¿Que esperas de la empresa?",
                  placeholder:
                    "Desde tu punto de vista ¿Que plan de accion esperas por parte de la empresa?",
                  rows: "3",
                },
                on: {
                  "update:value": function ($event) {
                    _vm.comentarios3 = $event
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);