(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

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

/***/ "../coreui/src/views/ventas/Venta.vue":
/*!********************************************!*\
  !*** ../coreui/src/views/ventas/Venta.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Venta_vue_vue_type_template_id_52fe2f64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Venta.vue?vue&type=template&id=52fe2f64& */ "../coreui/src/views/ventas/Venta.vue?vue&type=template&id=52fe2f64&");
/* harmony import */ var _Venta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Venta.vue?vue&type=script&lang=js& */ "../coreui/src/views/ventas/Venta.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Venta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Venta_vue_vue_type_template_id_52fe2f64___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Venta_vue_vue_type_template_id_52fe2f64___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/ventas/Venta.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/ventas/Venta.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ../coreui/src/views/ventas/Venta.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Venta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./Venta.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/ventas/Venta.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Venta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/ventas/Venta.vue?vue&type=template&id=52fe2f64&":
/*!***************************************************************************!*\
  !*** ../coreui/src/views/ventas/Venta.vue?vue&type=template&id=52fe2f64& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Venta_vue_vue_type_template_id_52fe2f64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./Venta.vue?vue&type=template&id=52fe2f64& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/ventas/Venta.vue?vue&type=template&id=52fe2f64&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Venta_vue_vue_type_template_id_52fe2f64___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Venta_vue_vue_type_template_id_52fe2f64___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/ventas/Venta.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/ventas/Venta.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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




 // const pdfRule = helpers.withMessage('Debe ser pdf', helpers.regex('image', /\.(gif|jpe?g|tiff|png)$/))
// const pdfRule = helpers.regex('file', /\.(gif|jpe?g|tiff|png)$/)

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdvancedTables",
  moodGood: _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["cilMoodGood"],
  inputPower: _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["cilInputPower"],
  plusIcon: _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["cilPlus"],
  LightbulbIcon: _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["cilLightbulb"],
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
    numero_int: "",
    monto: "",
    file: {}
  },
  data: function data() {
    return {
      loading: true,
      comentario: "",
      nameFile: "Archivo de cotización...",
      formData: new FormData(),
      thisFolder: null,
      movimientos: [],
      comentarios: [],
      user: {},
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
        numero_int: "",
        monto: "",
        file: {},
        file_cotizacion: null
      }
    };
  },
  validations: function validations() {
    return {
      venta: {
        monto: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(45),
          $autoDirty: true
        },
        file: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          pdf: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["pdf"],
          fileSize: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["fileSize"],
          $autoDirty: true
        }
      }
    };
  },
  setup: function setup() {
    return {
      v$: Object(_vuelidate_core__WEBPACK_IMPORTED_MODULE_3__["useVuelidate"])()
    };
  },
  methods: {
    index: function index() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/venta/" + self.$route.params.id + "?token=" + localStorage.getItem("api_token")).then(function (response) {
        self.user = response.data.user;
        var getVenta = response.data.venta;
        self.venta = {
          id: getVenta.id,
          nombre: getVenta.nombre,
          apellido1: getVenta.apellido1,
          apellido2: getVenta.apellido2,
          telefono: getVenta.telefono,
          correo: getVenta.correo,
          tipo_vivienda: getVenta.tipo_vivienda,
          consumo_promedio: getVenta.consumo_promedio,
          estado: getVenta.estado,
          municipio: getVenta.municipio,
          cp: getVenta.cp,
          colonia: getVenta.colonia,
          calle: getVenta.calle,
          numero_ext: getVenta.numero_ext,
          numero_int: getVenta.numero_int,
          monto: getVenta.monto,
          file_cotizacion: getVenta.file_cotizacion,
          estatus: getVenta.estatus,
          file: {}
        };
        self.thisFolder = response.data.folder.id;
        self.movimientos = response.data.movimientos.map(function (item) {
          return _objectSpread(_objectSpread({}, item), {}, {
            hora: item.created_at ? moment(String(item.created_at)).format("hh:mm a") : "",
            dia: item.created_at ? moment(String(item.created_at)).format("DD") : "",
            mes: item.created_at ? moment(String(item.created_at)).format("MMMM") : ""
          });
        });
        self.comentarios = response.data.comentarios.map(function (item) {
          return _objectSpread(_objectSpread({}, item), {}, {
            fecha: item.created_at ? moment(String(item.created_at)).format("DD/MM/YYYY hh:mm a") : ""
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
    getMunicipios: function getMunicipios() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/catalogos/municipios/" + self.venta.estado + "?token=" + localStorage.getItem("api_token")).then(function (response) {
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
    cotizar: function cotizar() {
      var self = this;
      this.v$.$touch();
      if (this.v$.$error) return;
      self.formData.append("id_venta", self.venta.id);
      self.formData.append("monto", self.venta.monto);
      self.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(this.$apiAdress + "/api/venta/cotizar" + "?token=" + localStorage.getItem("api_token"), self.formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        self.venta = response.data;
        self.$toast.success(self.$t("messages.update"));

        if (response.data.errorMail.status) {
          setTimeout(function () {
            return self.$toast.warning(response.data.errorMail.message);
          }, 700);
        }

        self.loading = false;
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
        } else if (error.response.status === 400) {
          self.$toast.warning(error.response.data.error);
        } else {
          self.$toast.error(self.$t("messages.error"));
        }
      });
    },
    handleFileUpload: function handleFileUpload(files, event) {
      var self = this;
      self.nameFile = files[0].name;
      self.formData.append("file", files[0]);
      self.venta.file = files[0];
      self.v$.venta.file.$model = {
        name: files[0].name,
        size: files[0].size,
        type: files[0].type
      };
    },
    cerrar: function cerrar() {
      var self = this;
      this.v$.$touch();
      if (this.v$.$error) return;
      self.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(this.$apiAdress + "/api/venta/cerrar" + "?token=" + localStorage.getItem("api_token"), {
        id_venta: self.venta.id
      }).then(function (response) {
        self.venta = response.data;
        self.$toast.success(self.$t("messages.update"));

        if (response.data.errorMail.status) {
          setTimeout(function () {
            return self.$toast.warning(response.data.errorMail.message);
          }, 700);
        }

        self.loading = false;
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
    downloadFile: function downloadFile(id, name) {
      var self = this;
      this.downloadFileName = name;
      self.loading = false;
      axios__WEBPACK_IMPORTED_MODULE_5___default()({
        method: "get",
        url: this.$apiAdress + "/api/venta/file/" + name + "?id=" + id + "&token=" + localStorage.getItem("api_token"),
        responseType: "arraybuffer"
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "cotizacion-" + self.venta.folio + ".pdf");
        document.body.appendChild(link);
        link.click();
        self.loading = false;
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
        } // self.$router.push({ path: '/login' })

      });
    },
    addComentario: function addComentario() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = _this;

                if (!(self.comentario == "")) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(_this.$apiAdress + "/api/venta/comentario" + "?token=" + localStorage.getItem("api_token"), {
                  comentario: self.comentario,
                  venta: self.$route.params.id,
                  estatus: self.venta.estatus ? self.venta.estatus.id : ""
                }).then(function (response) {
                  var data = response.data;
                  self.comentarios.push(data);
                  self.$nextTick(function () {
                    self.$refs.comentarios.scrollTop = self.$refs.comentarios.scrollHeight;
                  });
                  self.comentario = "";
                  self.$toast.success(self.$t("messages.insert"));
                })["catch"](function (error) {
                  console.log(error.response);

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

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
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
    },
    evenMoney: function evenMoney(value) {
      if (value.unmasked) {
        //  let formatted = value.unmasked.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        var formatted = value.unmasked.replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, "$1,");
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/ventas/Venta.vue?vue&type=template&id=52fe2f64&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/ventas/Venta.vue?vue&type=template&id=52fe2f64& ***!
  \*********************************************************************************************************************************************************************************************************/
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
                _vm._v("Detalle referencia venta"),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c("CElementCover", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.loading,
                    expression: "loading",
                  },
                ],
                staticStyle: { "z-index": "99" },
                attrs: { opacity: 0.8 },
              }),
              _vm._v(" "),
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
                          disabled: "",
                        },
                        model: {
                          value: _vm.venta.nombre,
                          callback: function ($$v) {
                            _vm.$set(_vm.venta, "nombre", $$v)
                          },
                          expression: "venta.nombre",
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
                          disabled: "",
                        },
                        model: {
                          value: _vm.venta.apellido1,
                          callback: function ($$v) {
                            _vm.$set(_vm.venta, "apellido1", $$v)
                          },
                          expression: "venta.apellido1",
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
                          disabled: "",
                        },
                        model: {
                          value: _vm.venta.apellido2,
                          callback: function ($$v) {
                            _vm.$set(_vm.venta, "apellido2", $$v)
                          },
                          expression: "venta.apellido2",
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
                          value: _vm.venta.telefono,
                          callback: function ($$v) {
                            _vm.$set(_vm.venta, "telefono", $$v)
                          },
                          expression: "venta.telefono",
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
                          disabled: "",
                        },
                        model: {
                          value: _vm.venta.correo,
                          callback: function ($$v) {
                            _vm.$set(_vm.venta, "correo", $$v)
                          },
                          expression: "venta.correo",
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
                          label: "Tipo vivienda",
                          placeholder: "Tipo vivienda",
                          disabled: "",
                        },
                        model: {
                          value: _vm.venta.tipo_vivienda.text,
                          callback: function ($$v) {
                            _vm.$set(_vm.venta.tipo_vivienda, "text", $$v)
                          },
                          expression: "venta.tipo_vivienda.text",
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
                          label: "Consumo promedio",
                          placeholder: "Consumo promedio",
                          disabled: "",
                        },
                        model: {
                          value: _vm.venta.consumo_promedio.text,
                          callback: function ($$v) {
                            _vm.$set(_vm.venta.consumo_promedio, "text", $$v)
                          },
                          expression: "venta.consumo_promedio.text",
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
                          label: "Estado",
                          placeholder: "Estado",
                          disabled: "",
                        },
                        model: {
                          value: _vm.venta.estado.nombre,
                          callback: function ($$v) {
                            _vm.$set(_vm.venta.estado, "nombre", $$v)
                          },
                          expression: "venta.estado.nombre",
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
                          label: "Municipio",
                          placeholder: "Municipio",
                          disabled: "",
                        },
                        model: {
                          value: _vm.venta.municipio.nombre,
                          callback: function ($$v) {
                            _vm.$set(_vm.venta.municipio, "nombre", $$v)
                          },
                          expression: "venta.municipio.nombre",
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
                          disabled: "",
                        },
                        model: {
                          value: _vm.venta.cp,
                          callback: function ($$v) {
                            _vm.$set(_vm.venta, "cp", $$v)
                          },
                          expression: "venta.cp",
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
                          disabled: "",
                        },
                        model: {
                          value: _vm.venta.colonia,
                          callback: function ($$v) {
                            _vm.$set(_vm.venta, "colonia", $$v)
                          },
                          expression: "venta.colonia",
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
                          label: "Calle",
                          placeholder: "Calle",
                          disabled: "",
                        },
                        model: {
                          value: _vm.venta.calle,
                          callback: function ($$v) {
                            _vm.$set(_vm.venta, "calle", $$v)
                          },
                          expression: "venta.calle",
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
                          disabled: "",
                        },
                        model: {
                          value: _vm.venta.numero_ext,
                          callback: function ($$v) {
                            _vm.$set(_vm.venta, "numero_ext", $$v)
                          },
                          expression: "venta.numero_ext",
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
                          disabled: "",
                        },
                        model: {
                          value: _vm.venta.numero_int,
                          callback: function ($$v) {
                            _vm.$set(_vm.venta, "numero_int", $$v)
                          },
                          expression: "venta.numero_int",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.user.rol_id == 5 || _vm.user.rol_id == 7
                    ? _c("CCol", { attrs: { sm: "3" } }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            attrs: { role: "group" },
                          },
                          [
                            _c("label", {}, [_vm._v(" Monto ")]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "input-group" },
                              [
                                _c("input-facade", {
                                  staticClass: "form-control text-right",
                                  class: {
                                    "is-invalid": _vm.v$.venta.monto.$invalid,
                                  },
                                  attrs: {
                                    mask: "###########",
                                    disabled:
                                      _vm.venta.estatus &&
                                      _vm.venta.estatus.code != 1,
                                    formatter: _vm.evenMoney,
                                    placeholder: "$000.00",
                                    masked: false,
                                    "invalid-feedback": _vm.v$.venta.monto
                                      .$error
                                      ? _vm.v$.venta.monto.$errors[0].$message
                                      : "",
                                    "is-valid":
                                      _vm.venta.estatus &&
                                      _vm.venta.estatus.code == 1 &&
                                      _vm.v$.venta.monto.$dirty
                                        ? !_vm.v$.venta.monto.$invalid
                                        : null,
                                  },
                                  model: {
                                    value: _vm.v$.venta.monto.$model,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.v$.venta.monto,
                                        "$model",
                                        $$v
                                      )
                                    },
                                    expression: "v$.venta.monto.$model",
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "input-group-append" },
                                  [
                                    _c(
                                      "CButton",
                                      {
                                        attrs: {
                                          variant: "outline",
                                          color: _vm.v$.venta.monto.$invalid
                                            ? "danger"
                                            : "success",
                                          disabled: "",
                                          size: "sm",
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                  MXN\n                "
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
                            _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v("Este campo es obligatorio."),
                            ]),
                          ]
                        ),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "2" } },
                    [
                      _c("label", [_vm._v("Estatus")]),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: {
                            disabled: "",
                            variant: "outline",
                            color: _vm.venta.estatus
                              ? _vm.venta.estatus.aux
                              : "",
                            block: "",
                          },
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(
                                _vm.venta.estatus ? _vm.venta.estatus.text : ""
                              ) +
                              "\n          "
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
                "CRow",
                [
                  _c(
                    "CCol",
                    { attrs: { sm: "5" } },
                    [
                      _vm.venta.file_cotizacion === null
                        ? _c("CInputFile", {
                            attrs: {
                              type: "file",
                              addLabelClasses: "btn-outline-primary",
                              custom: true,
                              placeholder: _vm.nameFile,
                              "invalid-feedback": _vm.v$.venta.file.$error
                                ? _vm.v$.venta.file.$errors[0].$message
                                : "",
                              "is-valid": _vm.v$.venta.file.$dirty
                                ? !_vm.v$.venta.file.$invalid
                                : null,
                            },
                            on: { change: _vm.handleFileUpload },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "append-content",
                                  fn: function () {
                                    return [_vm._v(" buscar ")]
                                  },
                                  proxy: true,
                                },
                              ],
                              null,
                              false,
                              1228786339
                            ),
                          })
                        : _c(
                            "CButton",
                            {
                              attrs: {
                                block: "",
                                size: "sm",
                                variant: "outline",
                                color: "primary",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.downloadFile(
                                    _vm.venta.id,
                                    "cotizacion"
                                  )
                                },
                              },
                            },
                            [
                              _c("CIcon", {
                                attrs: {
                                  name: "cil-cloud-download",
                                  size: "lg",
                                },
                              }),
                              _vm._v(" Cotización PDF\n          "),
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
              _c("CRow", { staticClass: "justify-content-between pt-2" }, [
                _vm.venta.estatus && _vm.venta.estatus.code != 4
                  ? _c(
                      "div",
                      { staticClass: "col-auto" },
                      [
                        _vm.venta.estatus &&
                        _vm.venta.estatus.next == 2 &&
                        (_vm.user.rol_id == 5 || _vm.user.rol_id == 7)
                          ? _c(
                              "CButton",
                              {
                                staticClass: "mx-1",
                                attrs: { color: "dark" },
                                on: {
                                  click: function ($event) {
                                    return _vm.cotizar()
                                  },
                                },
                              },
                              [_vm._v("Cotizado")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.venta.estatus &&
                        _vm.venta.estatus.next == 3 &&
                        (_vm.user.rol_id == 5 || _vm.user.rol_id == 7)
                          ? _c(
                              "CButton",
                              {
                                staticClass: "mx-1",
                                attrs: { color: "success" },
                                on: {
                                  click: function ($event) {
                                    return _vm.cerrar()
                                  },
                                },
                              },
                              [_vm._v("Cerrado")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.venta.estatus &&
                        _vm.venta.estatus.next == 4 &&
                        _vm.user.rol_id == 5
                          ? _c(
                              "CButton",
                              {
                                staticClass: "mx-1",
                                attrs: { color: "primary" },
                                on: {
                                  click: function ($event) {
                                    return _vm.cerrar()
                                  },
                                },
                              },
                              [_vm._v("Generar orden")]
                            )
                          : _vm._e(),
                      ],
                      1
                    )
                  : _c("div", { staticClass: "col-auto" }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-auto" },
                  [
                    _vm.venta.estatus &&
                    _vm.venta.estatus.code != 0 &&
                    _vm.venta.estatus.code != 3 &&
                    _vm.user.rol_id == 5
                      ? _c(
                          "CButton",
                          {
                            staticClass: "mx-1",
                            attrs: { color: "danger" },
                            on: {
                              click: function ($event) {
                                return _vm.setEstatus(0)
                              },
                            },
                          },
                          [_vm._v("Cancelar")]
                        )
                      : _vm._e(),
                  ],
                  1
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
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c(
                    "CCardHeader",
                    [
                      _c("CIcon", {
                        staticClass: "mt-1",
                        attrs: { content: _vm.$options.chatIcon, size: "xl" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "h4" }, [
                        _vm._v("Comentarios "),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("CCardBody", [
                    _c(
                      "div",
                      {
                        ref: "comentarios",
                        staticClass: "comentarios",
                        attrs: { id: "comentarios" },
                      },
                      _vm._l(_vm.comentarios, function (item, index) {
                        return _c("div", [
                          item.usuario.id == _vm.user.id
                            ? _c(
                                "div",
                                { staticClass: "row align-items-center" },
                                [
                                  _c("CCol", { attrs: { md: "4" } }),
                                  _vm._v(" "),
                                  _c(
                                    "CCol",
                                    {
                                      staticClass: "bg-light py-2",
                                      attrs: { md: "8" },
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "text-muted text" },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(item.texto) +
                                              "\n                  "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "text-muted" },
                                        [_vm._v(_vm._s(item.fecha))]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : _c(
                                "div",
                                { staticClass: "row align-items-center" },
                                [
                                  _c("CCol", { attrs: { md: "1" } }, [
                                    _c("img", {
                                      staticClass: "c-avatar-img",
                                      attrs: {
                                        src: "img/avatars/144.webp",
                                        onerror:
                                          "onerror:this.src='img/avatars/default.png'",
                                      },
                                    }),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "CCol",
                                    {
                                      staticClass: "bg-light mx-3 py-2",
                                      attrs: { md: "8" },
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "m-b-0 font-medium p-0",
                                        },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(item.usuario.name) +
                                              "\n                    " +
                                              _vm._s(
                                                item.usuario.primer_apellido
                                              ) +
                                              "\n                    " +
                                              _vm._s(
                                                item.usuario.segundo_apellido
                                              )
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "text-muted text" },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(item.texto) +
                                              "\n                  "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "text-muted" },
                                        [_vm._v(_vm._s(item.fecha))]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                        ])
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "CRow",
                          [
                            _c(
                              "CCol",
                              { attrs: { md: "10" } },
                              [
                                _c("CTextarea", {
                                  attrs: {
                                    placeholder: "Comentario...",
                                    width: "100%",
                                    rows: "5",
                                  },
                                  model: {
                                    value: _vm.comentario,
                                    callback: function ($$v) {
                                      _vm.comentario = $$v
                                    },
                                    expression: "comentario",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "CCol",
                              { attrs: { md: "2" } },
                              [
                                _c(
                                  "CButton",
                                  {
                                    attrs: { color: "primary", block: "" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.addComentario()
                                      },
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                  Enviar\n                "
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
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { md: "6" } },
            [
              _c(
                "CCard",
                [
                  _c(
                    "CCardHeader",
                    [
                      _c("CIcon", {
                        staticClass: "mt-1",
                        attrs: { content: _vm.$options.listIcon, size: "xl" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "h4" }, [_vm._v("Historial ")]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("CCardBody", [
                    _c(
                      "div",
                      { staticClass: "history", attrs: { switcher: "" } },
                      _vm._l(_vm.movimientos, function (item, index) {
                        return _c(
                          "div",
                          { staticClass: "row align-items-center" },
                          [
                            _c(
                              "CCol",
                              { attrs: { md: "1" } },
                              [
                                _c("CIcon", {
                                  staticClass: "mt-1",
                                  attrs: {
                                    content: _vm.$options.calendarIcon,
                                    size: "xl",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("CCol", { attrs: { md: "8" } }, [
                              _c(
                                "span",
                                { staticClass: "m-b-0 font-medium p-0" },
                                [_vm._v(_vm._s(item.texto))]
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-muted" }, [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(item.usuario.name) +
                                    " " +
                                    _vm._s(item.usuario.primer_apellido) +
                                    "\n                  " +
                                    _vm._s(item.usuario.segundo_apellido) +
                                    "\n                  - " +
                                    _vm._s(item.hora) +
                                    "\n                "
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "CCol",
                              {
                                staticClass: "text-center",
                                attrs: { md: "3" },
                              },
                              [
                                _c("span", { staticClass: "day" }, [
                                  _vm._v(_vm._s(item.dia)),
                                ]),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c("span", { staticClass: "month" }, [
                                  _vm._v(_vm._s(item.mes)),
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