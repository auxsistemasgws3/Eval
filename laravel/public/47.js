(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

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

/***/ "../coreui/src/views/settings/Users.vue":
/*!**********************************************!*\
  !*** ../coreui/src/views/settings/Users.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_060b8b06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=060b8b06& */ "../coreui/src/views/settings/Users.vue?vue&type=template&id=060b8b06&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "../coreui/src/views/settings/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_060b8b06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_060b8b06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/settings/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/settings/Users.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ../coreui/src/views/settings/Users.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/settings/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/settings/Users.vue?vue&type=template&id=060b8b06&":
/*!*****************************************************************************!*\
  !*** ../coreui/src/views/settings/Users.vue?vue&type=template&id=060b8b06& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_060b8b06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=060b8b06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/settings/Users.vue?vue&type=template&id=060b8b06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_060b8b06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_060b8b06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/settings/Users.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/settings/Users.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  key: "nombre_completo",
  label: "Nombre completo",
  _style: "min-width:200px"
}, {
  key: "email",
  label: "Correo",
  _style: "min-width:100px;"
},
/* { key: "rol_desc", label: "Rol", _style: "min-width:100px;" }, */
{
  key: "sucursal_desc",
  label: "Sucursal",
  _style: "min-width:100px;"
},
/* { key: "areas_ventas", label: "Área ventas", _style: "min-width:100px;" },
{ key: "comision_porcentaje", label: "Comisión" }, */
{
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
  User: {
    id: "",
    name: "",
    email: "",
    menuroles: "",
    status: "",
    primer_apellido: "",
    segundo_apellido: "",
    no_empleado: "",
    puesto: "",
    fecha_ingreso: "",
    telefono: "",
    ext: "",
    estatus: "",
    usuario_id: "",
    sucursal_id: "",
    rol_id: "",
    password: "",
    password_confirmate: "",
    id_departamento: "",
    jefe_inmediato: "",
    areasventa: [],
    areas_ventas: [],
    comision_porcentaje: '',
    comision_monto: ''
  },
  data: function data() {
    return {
      moneda: "",
      estatus: [],
      sucursales: [],
      departamentos: [],
      jefeInmediato: [],
      roles: [],
      areasventa: [],
      items: [],
      idx: 0,
      isTouched: false,
      loading: true,
      user: this.$options.User,
      editModal: false,
      setPassword: true,
      action: this.$t("titles.create"),
      fields: fields,
      details: [],
      collapseDuration: 0
    };
  },
  computed: {
    isInvalid: function isInvalid() {
      return this.isTouched && this.user.areas_ventas.length === 0 && (this.user.rol_id == 7 || this.user.rol_id == 8);
    }
  },
  validations: function validations() {
    var _this = this;

    return {
      user: {
        name: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(50),
          $autoDirty: true
        },
        email: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          email: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["email"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(50),
          $autoDirty: true
        },
        primer_apellido: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(50),
          $autoDirty: true
        },
        segundo_apellido: {
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(50),
          $autoDirty: true
        },
        puesto: {
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(50),
          $autoDirty: true
        },
        no_empleado: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          $autoDirty: true
        },
        fecha_ingreso: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          $autoDirty: true
        },
        telefono: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          maxLength: Object(_utils_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(15),
          $autoDirty: true
        },
        sucursal_id: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          $autoDirty: true
        },
        id_departamento: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          $autoDirty: true
        },
        jefe_inmediato: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          $autoDirty: true
        },
        rol_id: {
          required: _utils_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          $autoDirty: true
        },
        password: {
          required: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_2__["requiredIf"])(function () {
            return _this.setPassword;
          }),
          $autoDirty: true
        },
        password_confirmate: {
          required: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_2__["requiredIf"])(function () {
            return _this.setPassword;
          }),
          sameAs: Object(_vuelidate_validators__WEBPACK_IMPORTED_MODULE_2__["sameAs"])(this.user.password),
          $autoDirty: true
        }
      }
    };
  },
  setup: function setup() {
    return {
      v$: Object(_vuelidate_core__WEBPACK_IMPORTED_MODULE_3__["useVuelidate"])({
        $stopPropagation: true
      })
    };
  },
  methods: {
    index: function index() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/user?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.estatus = response.data.estatus;
        self.sucursales = response.data.sucursal;
        self.roles = response.data.roles;
        self.areasventa = response.data.areasventa;
        self.items = response.data.usuarios;
        self.departamentos = response.data.departamentos;
        self.jefeInmediato = response.data.jefeInmediato;
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
    getUser: function getUser($id, idx) {
      var self = this;
      self.idx = idx;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/user/" + $id + "?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.action = self.$t("titles.update");
        self.editModal = true;
        self.setPassword = false;
        var user = response.data;
        self.user = {
          id: user.id,
          name: user.name,
          email: user.email,
          menuroles: user.menuroles,
          status: user.status,
          primer_apellido: user.primer_apellido,
          segundo_apellido: user.segundo_apellido,
          no_empleado: user.no_empleado,
          puesto: user.puesto,
          fecha_ingreso: moment(String(user.fecha_ingreso)).format('YYYY-MM-DD'),

          /* fecha_ingreso: fecha_ingreso
          ? moment(String(fecha_ingreso)).format("YYYY-MM-DD")
          : "", */
          telefono: user.telefono,
          ext: user.ext,
          estatus: user.estatus,
          usuario_id: user.usuario_id,
          sucursal_id: user.sucursal_id,
          rol_id: user.rol_id,
          password: "",
          password_confirmate: "",
          id_departamento: user.id_departamento,
          jefe_inmediato: user.jefe_inmediato,
          areasventa: user.areasventa,
          areas_ventas: user.areas_ventas,
          comision_porcentaje: user.comision_porcentaje,
          comision_monto: user.comision_monto
        };
        self.user.password = "";
        self.user.password_confirmate = "";
        self.user.id = $id;
        self.isTouched = true;
        self.isInvalid;
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
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var self, isUpdate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = _this2;

                _this2.v$.$touch();

                _this2.isInvalid;
                console.log(self.v$);

                if (!_this2.v$.$error) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                _context.next = 8;
                return self.$swal({
                  title: self.$t("¿Esta seguro de agregar este usuario?"),
                  text: self.$t("messages.question.status.description"),
                  icon: "warning",
                  showCancelButton: true
                }).then(function (result) {
                  return result.isConfirmed;
                });

              case 8:
                isUpdate = _context.sent;

                if (isUpdate) {
                  axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(_this2.$apiAdress + "/api/user/create" + "?token=" + localStorage.getItem("api_token"), {
                    name: self.user.name,
                    email: self.user.email,
                    menuroles: self.user.menuroles,
                    status: self.user.status,
                    primer_apellido: self.user.primer_apellido,
                    segundo_apellido: self.user.segundo_apellido,
                    numero_empleado: self.user.no_empleado,
                    puesto: self.user.puesto,
                    fecha_ingreso: self.user.fecha_ingreso,
                    telefono: self.user.telefono,
                    ext: self.user.ext,
                    usuario_id: self.user.usuario_id,
                    sucursal: self.user.sucursal_id,
                    id_departamento: self.user.id_departamento,
                    jefe_inmediato: self.user.jefe_inmediato,
                    rol: self.user.rol_id,
                    password: self.user.password,
                    password_confirmate: self.user.password_confirmate,
                    areas_ventas: self.user.areas_ventas,
                    comision_porcentaje: self.user.comision_porcentaje,
                    comision_monto: self.user.comision_monto
                  }).then(function (response) {
                    var data = response.data;
                    self.items.push(data);
                    self.formatData();
                    self.closeModal();
                    self.$toast.success(self.$t("messages.insert"));
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
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    update: function update() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var self, isUpdate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = _this3;

                _this3.v$.$touch();

                if (!_this3.v$.$error) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                _context2.next = 6;
                return self.$swal({
                  title: self.$t("¿Esta seguro de editar este usuario?"),
                  text: self.$t("messages.question.status.description"),
                  icon: "warning",
                  showCancelButton: true
                }).then(function (result) {
                  return result.isConfirmed;
                });

              case 6:
                isUpdate = _context2.sent;

                if (isUpdate) {
                  axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(_this3.$apiAdress + "/api/user/update" + "?token=" + localStorage.getItem("api_token"), {
                    id: self.user.id,
                    name: self.user.name,
                    email: self.user.email,
                    menuroles: self.user.menuroles,
                    status: self.user.status,
                    primer_apellido: self.user.primer_apellido,
                    segundo_apellido: self.user.segundo_apellido,
                    telefono: self.user.telefono,
                    ext: self.user.ext,
                    usuario_id: self.user.usuario_id,
                    sucursal: self.user.sucursal_id,
                    rol: self.user.rol_id,
                    password: self.user.password,
                    password_confirmate: self.user.password_confirmate,
                    areas_ventas: self.user.areas_ventas,
                    comision_porcentaje: self.user.comision_porcentaje,
                    comision_monto: self.user.comision_monto
                  }).then(function (response) {
                    var data = response.data;
                    self.items[self.idx] = data;
                    self.formatData();
                    self.closeModal();
                    self.$toast.success(self.$t("messages.update"));
                  })["catch"](function (error) {
                    if (error.response && error.response.data.message == "The given data was invalid.") {
                      self.message = "";

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
                }

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    formatData: function formatData() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var formatItems;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this4.items.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    nombre_completo: item.name + " " + item.primer_apellido + " " + (item.segundo_apellido || ""),
                    rol_desc: item.rol ? item.rol.text : "",
                    sucursal_desc: item.sucursal ? item.sucursal.name : ""
                  });
                });

              case 2:
                formatItems = _context3.sent;
                _this4.items = formatItems;
                _this4.loading = false;

              case 5:
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/settings/Users.vue?vue&type=template&id=060b8b06&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/settings/Users.vue?vue&type=template&id=060b8b06& ***!
  \***********************************************************************************************************************************************************************************************************/
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
                attrs: { content: _vm.$options.moodGood, size: "xl" },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "h4" }, [_vm._v("Usuarios ")]),
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
                          _vm.editModal = true
                        },
                      },
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
                    key: "areas_ventas",
                    fn: function (ref) {
                      var item = ref.item
                      return [
                        _c(
                          "td",
                          _vm._l(item.areas_ventas, function (obj, i) {
                            return _c("span", { key: "av" + i }, [
                              _vm._v(
                                "\n              " +
                                  _vm._s(obj.label + "; ") +
                                  "\n            "
                              ),
                            ])
                          }),
                          0
                        ),
                      ]
                    },
                  },
                  {
                    key: "status",
                    fn: function (ref) {
                      var item = ref.item
                      return [
                        _c(
                          "td",
                          [
                            _c(
                              "CBadge",
                              { attrs: { color: _vm.getBadge(item.status) } },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(item.status) +
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
                    key: "comision_porcentaje",
                    fn: function (ref) {
                      var item = ref.item
                      return [
                        _c("td", [
                          _vm._v(
                            "\n            " +
                              _vm._s(
                                item.comision_porcentaje
                                  ? item.comision_porcentaje + "%"
                                  : ""
                              ) +
                              "\n          "
                          ),
                        ]),
                      ]
                    },
                  },
                  {
                    key: "show_details",
                    fn: function (ref) {
                      var item = ref.item
                      var index = ref.index
                      return [
                        _c(
                          "td",
                          { staticClass: "py-2" },
                          [
                            _c(
                              "CButton",
                              {
                                attrs: {
                                  color: "primary",
                                  variant: "outline",
                                  square: "",
                                  size: "sm",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.getUser(item.id, index)
                                  },
                                },
                              },
                              [_vm._v("\n              Editar\n            ")]
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
        1
      ),
      _vm._v(" "),
      _c(
        "CModal",
        {
          attrs: {
            centered: true,
            title: _vm.action + " usuario",
            size: "lg",
            show: _vm.editModal,
          },
          on: {
            "update:show": [
              function ($event) {
                _vm.editModal = $event
              },
              _vm.closeModal,
            ],
          },
        },
        [
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
                          label: "Nombre",
                          placeholder: "Nombre",
                          "invalid-feedback": _vm.v$.user.name.$error
                            ? _vm.v$.user.name.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.name.$dirty
                            ? !_vm.v$.user.name.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.user.name.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.user.name, "$model", $$v)
                          },
                          expression: "v$.user.name.$model",
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
                          placeholder: "Segundo apellido",
                          "invalid-feedback": _vm.v$.user.primer_apellido.$error
                            ? _vm.v$.user.primer_apellido.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.primer_apellido.$dirty
                            ? !_vm.v$.user.primer_apellido.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.user.primer_apellido.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.user.primer_apellido, "$model", $$v)
                          },
                          expression: "v$.user.primer_apellido.$model",
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
                          "invalid-feedback": _vm.v$.user.segundo_apellido
                            .$error
                            ? _vm.v$.user.segundo_apellido.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.segundo_apellido.$dirty
                            ? !_vm.v$.user.segundo_apellido.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.user.segundo_apellido.$model,
                          callback: function ($$v) {
                            _vm.$set(
                              _vm.v$.user.segundo_apellido,
                              "$model",
                              $$v
                            )
                          },
                          expression: "v$.user.segundo_apellido.$model",
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
                          value: _vm.user.no_empleado,
                          label: "Numero Empleado",
                          placeholder: "Numero Empleado",
                          "invalid-feedback": _vm.v$.user.no_empleado.$error
                            ? _vm.v$.user.no_empleado.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.no_empleado.$dirty
                            ? !_vm.v$.user.no_empleado.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.user, "no_empleado", $event)
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
                          value: _vm.user.fecha_ingreso,
                          label: "Fecha Ingreso",
                          placeholder: "Fecha Ingreso",
                          type: "date",
                          "invalid-feedback": _vm.v$.user.fecha_ingreso.$error
                            ? _vm.v$.user.fecha_ingreso.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.fecha_ingreso.$dirty
                            ? !_vm.v$.user.fecha_ingreso.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.user, "fecha_ingreso", $event)
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
                          label: "Teléfono",
                          placeholder: "Teléfono",
                          "invalid-feedback": _vm.v$.user.telefono.$error
                            ? _vm.v$.user.telefono.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.telefono.$dirty
                            ? !_vm.v$.user.telefono.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.user.telefono.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.user.telefono, "$model", $$v)
                          },
                          expression: "v$.user.telefono.$model",
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
                          autocomplete: "email",
                          type: "text",
                          onkeydown: "this.type='email'",
                          label: "Correo",
                          placeholder: "Correo",
                          "invalid-feedback": _vm.v$.user.email.$error
                            ? _vm.v$.user.email.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.email.$dirty
                            ? !_vm.v$.user.email.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.user.email.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.user.email, "$model", $$v)
                          },
                          expression: "v$.user.email.$model",
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
                          value: _vm.user.id_departamento,
                          label: "Departamento",
                          placeholder: "Departamento",
                          options: _vm.departamentos,
                          "invalid-feedback": _vm.v$.user.id_departamento.$error
                            ? _vm.v$.user.id_departamento.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.id_departamento.$dirty
                            ? !_vm.v$.user.id_departamento.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.user, "id_departamento", $event)
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
                          label: "Puesto",
                          placeholder: "Puesto",
                          "invalid-feedback": _vm.v$.user.puesto.$error
                            ? _vm.v$.user.puesto.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.puesto.$dirty
                            ? !_vm.v$.user.puesto.$invalid
                            : null,
                        },
                        model: {
                          value: _vm.v$.user.puesto.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.user.puesto, "$model", $$v)
                          },
                          expression: "v$.user.puesto.$model",
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
                          autocomplete: "current-password",
                          label: "Contraseña",
                          placeholder: "Contraseña",
                          name: "password",
                          onkeydown: "this.type='password'",
                          type: "text",
                          disabled: !_vm.setPassword,
                          "invalid-feedback":
                            _vm.v$.user.password.$error && _vm.setPassword
                              ? _vm.v$.user.password.$errors[0].$message
                              : "",
                          "is-valid":
                            _vm.v$.user.password.$dirty && _vm.setPassword
                              ? !_vm.v$.user.password.$invalid
                              : null,
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "prepend-content",
                            fn: function () {
                              return [
                                _c("CSwitch", {
                                  attrs: {
                                    checked: _vm.setPassword,
                                    color: "primary",
                                    size: "sm",
                                    autocomplete: "off",
                                    disabled: _vm.user.id == "",
                                    variant: "opposite",
                                  },
                                  on: {
                                    "update:checked": function ($event) {
                                      return _vm.selectCheckbox(
                                        "setPassword",
                                        _vm.setPassword
                                      )
                                    },
                                  },
                                  model: {
                                    value: _vm.setPassword,
                                    callback: function ($$v) {
                                      _vm.setPassword = $$v
                                    },
                                    expression: "setPassword",
                                  },
                                }),
                              ]
                            },
                            proxy: true,
                          },
                        ]),
                        model: {
                          value: _vm.v$.user.password.$model,
                          callback: function ($$v) {
                            _vm.$set(_vm.v$.user.password, "$model", $$v)
                          },
                          expression: "v$.user.password.$model",
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
                          autocomplete: "current-password",
                          label: "Confirmar contraseña",
                          type: "text",
                          onkeydown: "this.type='password'",
                          placeholder: "Confirmar contraseña",
                          disabled: !_vm.setPassword,
                          "invalid-feedback": _vm.v$.user.password_confirmate
                            .$error
                            ? _vm.v$.user.password_confirmate.$errors[0]
                                .$message
                            : "",
                          "is-valid":
                            _vm.v$.user.password_confirmate.$dirty &&
                            _vm.setPassword
                              ? !_vm.v$.user.password_confirmate.$invalid
                              : null,
                        },
                        model: {
                          value: _vm.v$.user.password_confirmate.$model,
                          callback: function ($$v) {
                            _vm.$set(
                              _vm.v$.user.password_confirmate,
                              "$model",
                              $$v
                            )
                          },
                          expression: "v$.user.password_confirmate.$model",
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
                      _c("CSelect", {
                        attrs: {
                          value: _vm.user.sucursal_id,
                          plain: true,
                          label: "Sucursal",
                          options: _vm.sucursales,
                          placeholder: "Selecciona una Sucursal",
                          "invalid-feedback": _vm.v$.user.sucursal_id.$error
                            ? _vm.v$.user.sucursal_id.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.sucursal_id.$dirty
                            ? !_vm.v$.user.sucursal_id.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.user, "sucursal_id", $event)
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "7" } },
                    [
                      _c("CSelect", {
                        attrs: {
                          value: _vm.user.jefe_inmediato,
                          label: "Jefe Inmediato",
                          placeholder: "Jefe Inmediato",
                          options: _vm.jefeInmediato,
                          "invalid-feedback": _vm.v$.user.jefe_inmediato.$error
                            ? _vm.v$.user.jefe_inmediato.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.jefe_inmediato.$dirty
                            ? !_vm.v$.user.jefe_inmediato.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.user, "jefe_inmediato", $event)
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
                      _c("CSelect", {
                        attrs: {
                          value: _vm.user.rol_id,
                          plain: true,
                          label: "Roles",
                          options: _vm.roles,
                          placeholder: "Selecciona un rol",
                          "invalid-feedback": _vm.v$.user.rol_id.$error
                            ? _vm.v$.user.rol_id.$errors[0].$message
                            : "",
                          "is-valid": _vm.v$.user.rol_id.$dirty
                            ? !_vm.v$.user.rol_id.$invalid
                            : null,
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.user, "rol_id", $event)
                          },
                          change: function ($event) {
                            _vm.user.areas_ventas = []
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
                      return _vm.closeModal()
                    },
                  },
                },
                [_vm._v("\n        Cerrar\n      ")]
              ),
              _vm._v(" "),
              _vm.user.id
                ? _c(
                    "CButton",
                    {
                      attrs: { color: "primary" },
                      on: {
                        click: function ($event) {
                          return _vm.update()
                        },
                      },
                    },
                    [_vm._v("\n        Guardar\n      ")]
                  )
                : _c(
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);