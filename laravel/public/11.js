(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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

/***/ "../coreui/src/views/kpi/solicitudKpi.vue":
/*!************************************************!*\
  !*** ../coreui/src/views/kpi/solicitudKpi.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _solicitudKpi_vue_vue_type_template_id_445280f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solicitudKpi.vue?vue&type=template&id=445280f5& */ "../coreui/src/views/kpi/solicitudKpi.vue?vue&type=template&id=445280f5&");
/* harmony import */ var _solicitudKpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solicitudKpi.vue?vue&type=script&lang=js& */ "../coreui/src/views/kpi/solicitudKpi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _solicitudKpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _solicitudKpi_vue_vue_type_template_id_445280f5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _solicitudKpi_vue_vue_type_template_id_445280f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/kpi/solicitudKpi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/kpi/solicitudKpi.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ../coreui/src/views/kpi/solicitudKpi.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_solicitudKpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./solicitudKpi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/kpi/solicitudKpi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_solicitudKpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/kpi/solicitudKpi.vue?vue&type=template&id=445280f5&":
/*!*******************************************************************************!*\
  !*** ../coreui/src/views/kpi/solicitudKpi.vue?vue&type=template&id=445280f5& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_solicitudKpi_vue_vue_type_template_id_445280f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./solicitudKpi.vue?vue&type=template&id=445280f5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/kpi/solicitudKpi.vue?vue&type=template&id=445280f5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_solicitudKpi_vue_vue_type_template_id_445280f5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_solicitudKpi_vue_vue_type_template_id_445280f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/kpi/solicitudKpi.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/kpi/solicitudKpi.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      ModalSolicitudPersonal: false,
      user: {},
      solicitante: {
        fecha: "",
        nombre: "",
        puesto: ""
      },
      especificaciones: {
        tipo: "",
        motivo: "",
        personaSustituir: ""
      },
      definicion: {
        tipo: "",
        nombre: "",
        departamento: "",
        ubicacion: "",
        horario: "",
        funciones: ""
      },
      perfil: {
        escolaridad: "",
        idiomas: "",
        equipo: "",
        sistema: "",
        experiencia: "",
        sexo: "",
        estadoCivil: "",
        edad: ""
      },
      habilidades: {
        comprension: "",
        seguimiento: "",
        objetividad: "",
        manejo: "",
        negociacion: "",
        decisiones: "",
        poder: "",
        palabra: "",
        dominio: "",
        asertividad: "",
        iniciativa: "",
        creatividad: "",
        resultados: "",
        adaptable: "",
        logico: "",
        concentracion: "",
        equipo: "",
        estres: ""
      },
      actitudes: {
        responsable: "",
        empatico: "",
        emprendedor: "",
        colaborador: "",
        normas: "",
        comentarios: ""
      },
      requerimientos: [],
      motivo: [],
      puesto: [],
      departamentos: [],
      sucursal: [],
      escolaridad: [],
      sexo: [],
      estadoCivil: [],
      isTouched: false,
      loading: true,
      setPassword: true,
      action: this.$t("titles.create"),
      details: [],
      collapseDuration: 0,
      comentarios: []
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
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(this.$apiAdress + "/api/kpi/getSolicitudPersonal?token=" + localStorage.getItem("api_token")).then(function (response) {
        console.log(response.data);
        self.solicitante.fecha = response.data.Fechahoy;
        self.solicitante.nombre = response.data.user.name + " " + response.data.user.primer_apellido + " " + response.data.user.segundo_apellido;
        self.solicitante.puesto = response.data.user.puesto;
        self.requerimientos = response.data.requerimientos;
        self.motivo = response.data.motivo;
        self.puesto = response.data.puesto;
        self.departamentos = response.data.departamentos;
        self.sucursal = response.data.sucursal;
        self.escolaridad = response.data.escolaridad;
        self.sexo = response.data.sexo;
        self.estadoCivil = response.data.estadoCivil;
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
      self.efectivo = document.getElementById("cash").checked;
      if (self.efectivo) self.efectivo = 1;else self.efectivo = 0;
      if (this.v$.$error) return;
      var aux = 0;
      self.clientes.forEach(function (item) {
        if (self.cobro.clave_cliente == item) {
          aux = 1;
        }
      });
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(this.$apiAdress + "/api/cobro/create" + "?token=" + localStorage.getItem("api_token"), {
        folio: self.cobro.folio,
        clave_cliente: self.cobro.clave_cliente,
        cantidad: self.cobro.cantidad,
        Fecha: self.cobro.Fecha,
        efectivo: self.efectivo
      }).then(function (response) {
        if (response.data == 1) self.$toast.error(self.$t("Este cobro ya existe"));else {
          self.reset();
          self.$toast.success(self.$t("Agregado exitosamente"));
          self.$router.push({
            path: "/cobros/" + response.data.id
          });
        }
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
            path: "/cobros"
          });
        } else {
          self.$toast.error(self.$t("messages.errorIN"));
        }
      });
    },
    createKpi: function createKpi() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var self, isUpdate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = _this; //this.v$.$touch();

                console.log(self.v$); //if (self.v$.$error) return;

                self.habilidades.comprension = document.getElementById("habilidades.comprension").checked;
                if (self.habilidades.comprension) self.habilidades.comprension = 1;else self.habilidadescomprension = 0;
                self.habilidades.seguimiento = document.getElementById("habilidades.seguimiento").checked;
                if (self.habilidades.seguimiento) self.habilidades.seguimiento = 1;else self.habilidades.seguimiento = 0;
                self.habilidades.objetividad = document.getElementById("habilidades.objetividad").checked;
                if (self.habilidades.objetividad) self.habilidades.objetividad = 1;else self.habilidades.objetividad = 0;
                self.habilidades.manejo = document.getElementById("habilidades.manejo").checked;
                if (self.habilidades.manejo) self.habilidades.manejo = 1;else self.habilidades.manejo = 0;
                self.habilidades.negociacion = document.getElementById("habilidades.negociacion").checked;
                if (self.habilidades.negociacion) self.habilidades.negociacion = 1;else self.habilidades.negociacion = 0;
                self.habilidades.decisiones = document.getElementById("habilidades.decisiones").checked;
                if (self.habilidades.decisiones) self.habilidades.decisiones = 1;else self.habilidades.decisiones = 0;
                self.habilidades.poder = document.getElementById("habilidades.poder").checked;
                if (self.habilidades.poder) self.habilidades.poder = 1;else self.habilidades.poder = 0;
                self.habilidades.palabra = document.getElementById("habilidades.palabra").checked;
                if (self.habilidades.palabra) self.habilidades.palabra = 1;else self.habilidades.palabra = 0;
                self.habilidades.dominio = document.getElementById("habilidades.dominio").checked;
                if (self.habilidades.dominio) self.habilidades.dominio = 1;else self.habilidades.dominio = 0;
                self.habilidades.asertividad = document.getElementById("habilidades.asertividad").checked;
                if (self.habilidades.asertividad) self.habilidades.asertividad = 1;else self.habilidades.asertividad = 0;
                self.habilidades.iniciativa = document.getElementById("habilidades.iniciativa").checked;
                if (self.habilidades.iniciativa) self.habilidades.iniciativa = 1;else self.habilidades.iniciativa = 0;
                self.habilidades.creatividad = document.getElementById("habilidades.creatividad").checked;
                if (self.habilidades.creatividad) self.habilidades.creatividad = 1;else self.habilidades.creatividad = 0;
                self.habilidades.resultados = document.getElementById("habilidades.resultados").checked;
                if (self.habilidades.resultados) self.habilidades.resultados = 1;else self.habilidades.resultados = 0;
                self.habilidades.adaptable = document.getElementById("habilidades.adaptable").checked;
                if (self.habilidades.adaptable) self.habilidades.adaptable = 1;else self.habilidades.adaptable = 0;
                self.habilidades.logico = document.getElementById("habilidades.logico").checked;
                if (self.habilidades.logico) self.habilidades.logico = 1;else self.habilidades.logico = 0;
                self.habilidades.concentracion = document.getElementById("habilidades.concentracion").checked;
                if (self.habilidades.concentracion) self.habilidades.concentracion = 1;else self.habilidades.concentracion = 0;
                self.habilidades.equipo = document.getElementById("habilidades.equipo").checked;
                if (self.habilidades.equipo) self.habilidades.equipo = 1;else self.habilidades.equipo = 0;
                self.habilidades.estres = document.getElementById("habilidades.estres").checked;
                if (self.habilidades.estres) self.habilidades.estres = 1;else self.habilidades.estres = 0;
                self.actitudes.responsable = document.getElementById("actitudes.responsable").checked;
                if (self.actitudes.responsable) self.actitudes.responsable = 1;else self.actitudes.responsable = 0;
                self.actitudes.empatico = document.getElementById("actitudes.empatico").checked;
                if (self.actitudes.empatico) self.actitudes.empatico = 1;else self.actitudes.empatico = 0;
                self.actitudes.emprendedor = document.getElementById("actitudes.emprendedor").checked;
                if (self.actitudes.emprendedor) self.actitudes.emprendedor = 1;else self.actitudes.emprendedor = 0;
                self.actitudes.colaborador = document.getElementById("actitudes.colaborador").checked;
                if (self.actitudes.colaborador) self.actitudes.colaborador = 1;else self.actitudes.colaborador = 0;
                self.actitudes.normas = document.getElementById("actitudes.normas").checked;
                if (self.actitudes.normas) self.actitudes.normas = 1;else self.actitudes.normas = 0;
                _context.next = 50;
                return self.$swal({
                  title: self.$t("¿Esta seguro de enviar esta solicitud?"),
                  text: self.$t("messages.question.status.description"),
                  icon: "warning",
                  showCancelButton: true
                }).then(function (result) {
                  return result.isConfirmed;
                });

              case 50:
                isUpdate = _context.sent;

                if (isUpdate) {
                  axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(_this.$apiAdress + "/api/kpi/createKpi" + "?token=" + localStorage.getItem("api_token"), {
                    solicitantefecha: self.solicitante.fecha,
                    solicitantenombre: self.solicitante.nombre,
                    solicitantepuesto: self.solicitante.puesto,
                    especificacionestipo: self.especificaciones.tipo,
                    especificacionesmotivo: self.especificaciones.motivo,
                    especificacionespersonaSustituir: self.especificaciones.personaSustituir,
                    definiciontipo: self.definicion.tipo,
                    definicionnombre: self.definicion.nombre,
                    definiciondepartamento: self.definicion.departamento,
                    definicionubicacion: self.definicion.ubicacion,
                    definicionhorario: self.definicion.horario,
                    definicionfunciones: self.definicion.funciones,
                    perfilescolaridad: self.perfil.escolaridad,
                    perfilidiomas: self.perfil.idiomas,
                    perfilequipo: self.perfil.equipo,
                    perfilsistema: self.perfil.sistema,
                    perfilexperiencia: self.perfil.experiencia,
                    perfilsexo: self.perfil.sexo,
                    perfilestadoCivil: self.perfil.estadoCivil,
                    perfiledad: self.perfil.edad,
                    habilidadescomprension: self.habilidades.comprension,
                    habilidadesseguimiento: self.habilidades.seguimiento,
                    habilidadesobjetividad: self.habilidades.objetividad,
                    habilidadesmanejo: self.habilidades.manejo,
                    habilidadesnegociacion: self.habilidades.negociacion,
                    habilidadesdecisiones: self.habilidades.decisiones,
                    habilidadespoder: self.habilidades.poder,
                    habilidadespalabra: self.habilidades.palabra,
                    habilidadesdominio: self.habilidades.dominio,
                    habilidadesasertividad: self.habilidades.asertividad,
                    habilidadesiniciativa: self.habilidades.iniciativa,
                    habilidadescreatividad: self.habilidades.creatividad,
                    habilidadesresultados: self.habilidades.resultados,
                    habilidadesadaptable: self.habilidades.adaptable,
                    habilidadeslogico: self.habilidades.logico,
                    habilidadesconcentracion: self.habilidades.concentracion,
                    habilidadesequipo: self.habilidades.equipo,
                    habilidadesestres: self.habilidades.estres,
                    actitudesresponsable: self.actitudes.responsable,
                    actitudesempatico: self.actitudes.empatico,
                    actitudesemprendedor: self.actitudes.emprendedor,
                    actitudescolaborador: self.actitudes.colaborador,
                    actitudesnormas: self.actitudes.normas,
                    actitudescomentarios: self.actitudes.comentarios
                  }).then(function (response) {
                    console.log(response.data);
                    self.solicitante.fecha = "";
                    self.solicitante.nombre = "";
                    self.solicitante.puesto = "";
                    self.especificaciones.tipo = "";
                    self.especificaciones.motivo = "";
                    self.especificaciones.personaSustituir = "";
                    self.definicion.tipo = "";
                    self.definicion.nombre = "";
                    self.definicion.departamento = "";
                    self.definicion.ubicacion = "";
                    self.definicion.horario = "";
                    self.definicion.funciones = "";
                    self.perfil.escolaridad = "";
                    self.perfil.idiomas = "";
                    self.perfil.equipo = "";
                    self.perfil.sistema = "";
                    self.perfil.experiencia = "";
                    self.perfil.sexo = "";
                    self.perfil.estadoCivil = "";
                    self.perfil.edad = "";
                    location.reload();
                    self.$toast.success(self.$t("messages.insert"));
                  })["catch"](function (error) {
                    self.solicitante.fecha = "";
                    self.solicitante.nombre = "";
                    self.solicitante.puesto = "";
                    self.especificaciones.tipo = "";
                    self.especificaciones.motivo = "";
                    self.especificaciones.personaSustituir = "";
                    self.definicion.tipo = "";
                    self.definicion.nombre = "";
                    self.definicion.departamento = "";
                    self.definicion.ubicacion = "";
                    self.definicion.horario = "";
                    self.definicion.funciones = "";
                    self.perfil.escolaridad = "";
                    self.perfil.idiomas = "";
                    self.perfil.equipo = "";
                    self.perfil.sistema = "";
                    self.perfil.experiencia = "";
                    self.perfil.sexo = "";
                    self.perfil.estadoCivil = "";
                    self.perfil.edad = "";

                    if (error.response.status == 500) {
                      self.$router.push({
                        path: "/kpi/solicitudKpi"
                      });
                      self.$toast.error(self.$t("messages.error"));
                    }
                  });
                }

              case 52:
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/kpi/solicitudKpi.vue?vue&type=template&id=445280f5&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/kpi/solicitudKpi.vue?vue&type=template&id=445280f5& ***!
  \*************************************************************************************************************************************************************************************************************/
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
              _c("span", { staticClass: "h4" }, [_vm._v("KPI's ")]),
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
                _vm._v("KPI's - Solicitud de personal"),
              ]),
              _vm._v("\n       \n      "),
              _c("H2", { staticClass: "text-center" }, [
                _vm._v(
                  "\n        En Recursos Humanos somos responsables de recibir solicitudes de personal\n        por parte de otros departamentos de la empresa que desean contratar nuevos empleados."
                ),
              ]),
              _vm._v("\n       \n      "),
              _c("H4", { staticClass: "text-center" }, [
                _vm._v(
                  "\n        Las solicitudes son el punto de partida para el resto de etapas. Ellas deben ser solicitadas\n        por medio de un formulario conteniendo toda la informacion necesaria para la ocupación de una nueva vacante.\n      "
                ),
              ]),
              _vm._v("\n       \n\n      "),
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
                          _vm.ModalSolicitudPersonal = true
                        },
                      },
                    },
                    [_vm._v("\n          Solicitar personal\n        ")]
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
            title: "KPI's Solicitudes de personal",
            size: "xl",
            show: _vm.ModalSolicitudPersonal,
          },
          on: {
            "update:show": function ($event) {
              _vm.ModalSolicitudPersonal = $event
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
                          _vm.createKpi(), (_vm.ModalSolicitudPersonal = false)
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
          _c(
            "CForm",
            { attrs: { autocomplete: "on" } },
            [
              _c(
                "CRow",
                { staticClass: "bg-success p-2 text-white" },
                [
                  _c("CCol", { attrs: { sm: "12" } }, [
                    _c("h3", { staticClass: "text-center" }, [
                      _vm._v("KPI's - Solicitud de personal"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "3" } },
                    [
                      _c("CInput", {
                        attrs: {
                          label: "Fecha:",
                          value: _vm.solicitante.fecha,
                          placeholder: "Ingrese fecha",
                          disabled: "",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.solicitante, "fecha", $event)
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
                      _c("CInput", {
                        attrs: {
                          label: "Nombre del solicitante",
                          value: _vm.solicitante.nombre,
                          placeholder: "Nombre del solicitante",
                          disabled: "",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.solicitante, "nombre", $event)
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
                          label: "Cargo del solicitante",
                          value: _vm.solicitante.puesto,
                          placeholder: "Cargo del solicitante",
                          disabled: "",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.solicitante, "puesto", $event)
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("p"),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CRow",
                [
                  _c("br"),
                  _vm._v(" "),
                  _c("CCol", { attrs: { sm: "12" } }, [
                    _c("h3", { staticClass: "text-center" }, [
                      _vm._v("Especificaciones de la Requisición"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "3" } },
                    [
                      _c("CSelect", {
                        attrs: {
                          value: _vm.especificaciones.tipo,
                          plain: true,
                          label: "Requisición",
                          options: _vm.requerimientos,
                          placeholder: "Selecciona una opcion",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(
                              _vm.especificaciones,
                              "tipo",
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
                          value: _vm.especificaciones.motivo,
                          plain: true,
                          label: "Motivo",
                          options: _vm.motivo,
                          placeholder: "Selecciona una motivo",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(
                              _vm.especificaciones,
                              "motivo",
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
                    { attrs: { sm: "5" } },
                    [
                      _c("CInput", {
                        attrs: {
                          label: "Nombre de la persona a sustituir",
                          value: _vm.especificaciones.personaSustituir,
                          placeholder: "Nombre de la persona a sustituir",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(
                              _vm.especificaciones,
                              "personaSustituir",
                              $event
                            )
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("p"),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CRow",
                [
                  _c("br"),
                  _vm._v(" "),
                  _c("CCol", { attrs: { sm: "12" } }, [
                    _c("h3", { staticClass: "text-center" }, [
                      _vm._v("Definición del Puesto"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "4" } },
                    [
                      _c("CSelect", {
                        attrs: {
                          value: _vm.definicion.tipo,
                          plain: true,
                          label: "Tipo de puesto",
                          options: _vm.puesto,
                          placeholder: "Selecciona una opcion",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.definicion, "tipo", $event)
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
                          value: _vm.definicion.nombre,
                          label: "Nombre del puesto",
                          placeholder: "Nombre del puesto",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.definicion, "nombre", $event)
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
                          value: _vm.definicion.departamento,
                          plain: true,
                          label: "Departamento del puesto",
                          options: _vm.departamentos,
                          placeholder: "Selecciona una opcion",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(
                              _vm.definicion,
                              "departamento",
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
                          value: _vm.definicion.ubicacion,
                          plain: true,
                          label: "Ubicacion fisica del puesto",
                          options: _vm.sucursal,
                          placeholder: "Selecciona una Sucursal",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.definicion, "ubicacion", $event)
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
                          value: _vm.definicion.horario,
                          label: "Horario de la jornada laboral",
                          placeholder: "Horario de la jornada laboral",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.definicion, "horario", $event)
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
                          value: _vm.definicion.funciones,
                          label: "Funciones generales del puesto",
                          placeholder: "Funciones generales del puesto",
                          rows: "2",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.definicion, "funciones", $event)
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("p"),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CRow",
                [
                  _c("br"),
                  _vm._v(" "),
                  _c("CCol", { attrs: { sm: "12" } }, [
                    _c("h3", { staticClass: "text-center" }, [
                      _vm._v("Perfil Requerido (Conocimientos Generales)"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "4" } },
                    [
                      _c("CSelect", {
                        attrs: {
                          value: _vm.perfil.escolaridad,
                          plain: true,
                          label: "Escolaridad o grado academico",
                          options: _vm.escolaridad,
                          placeholder: "Escolaridad o grado academico",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.perfil, "escolaridad", $event)
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
                          value: _vm.perfil.idiomas,
                          label: "Dominio de idiomas",
                          placeholder: "Dominio de idiomas",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.perfil, "idiomas", $event)
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
                          value: _vm.perfil.equipo,
                          label: "Manejo de equipo y/o maquinaria",
                          placeholder: "Manejo de equipo y/o maquinaria",
                          rows: "2",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.perfil, "equipo", $event)
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
                          value: _vm.perfil.sistema,
                          label:
                            "Manejo de sistemas y/o programas electronicos",
                          placeholder:
                            "Manejo de sistemas y/o programas electronicos",
                          rows: "2",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.perfil, "sistema", $event)
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
                          value: _vm.perfil.experiencia,
                          label: "Experiencia",
                          placeholder: "Experiencia en funciones",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.perfil, "experiencia", $event)
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
                      _c("CSelect", {
                        attrs: {
                          value: _vm.perfil.sexo,
                          plain: true,
                          label: "Sexo",
                          options: _vm.sexo,
                          placeholder: "Sexo",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.perfil, "sexo", $event)
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
                      _c("CSelect", {
                        attrs: {
                          value: _vm.perfil.estadoCivil,
                          plain: true,
                          label: "Estado civil",
                          options: _vm.estadoCivil,
                          placeholder: "Estado civil",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.perfil, "estadoCivil", $event)
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
                          value: _vm.perfil.edad,
                          label: "Rango de edad",
                          placeholder: "Rango de edad",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(_vm.perfil, "edad", $event)
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("p"),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CRow",
                [
                  _c("br"),
                  _vm._v(" "),
                  _c("CCol", { attrs: { sm: "12" } }, [
                    _c("h3", { staticClass: "text-center" }, [
                      _vm._v("HABILIDADES REQUERIDAS"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "4" } },
                    [
                      _c("label", [_c("b", [_vm._v("ANALISIS")])]),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.comprension",
                          checked: false,
                          label: "Comprensión verbal/escrita",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.seguimiento",
                          checked: false,
                          label: "Seguimiento de instrucciones/procedimientos",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.objetividad",
                          checked: false,
                          label: "Objetividad en el manejo de información",
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
                      _c("label", [_c("b", [_vm._v("ANALISIS 2")])]),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.comprension",
                          checked: false,
                          label: "Comprensión verbal/escrita",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.seguimiento",
                          checked: false,
                          label: "Seguimiento de instrucciones/procedimientos",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.objetividad",
                          checked: false,
                          label: "Objetividad en el manejo de información",
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
                      _c("label", [_c("b", [_vm._v("ANALISIS 3")])]),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.comprension",
                          checked: false,
                          label: "Comprensión verbal/escrita",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.seguimiento",
                          checked: false,
                          label: "Seguimiento de instrucciones/procedimientos",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.objetividad",
                          checked: false,
                          label: "Objetividad en el manejo de información",
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
                      _c("label", [_c("b", [_vm._v("ANALISIS 4")])]),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.comprension",
                          checked: false,
                          label: "Comprensión verbal/escrita",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.seguimiento",
                          checked: false,
                          label: "Seguimiento de instrucciones/procedimientos",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.objetividad",
                          checked: false,
                          label: "Objetividad en el manejo de información",
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
                      _c("label", [_c("b", [_vm._v("ANALISIS 5")])]),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.comprension",
                          checked: false,
                          label: "Comprensión verbal/escrita",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.seguimiento",
                          checked: false,
                          label: "Seguimiento de instrucciones/procedimientos",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.objetividad",
                          checked: false,
                          label: "Objetividad en el manejo de información",
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
                      _c("label", [_c("b", [_vm._v("LIDERAZGO")])]),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.manejo",
                          checked: false,
                          label: "Manejo de personal",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.negociacion",
                          checked: false,
                          label: "Negociación",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.decisiones",
                          checked: false,
                          label: "Toma de decisiones",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.poder",
                          checked: false,
                          label:
                            "Poder personal (lograr que sucedan las cosas)",
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
                      _c("label", [_c("b", [_vm._v("COMUNICACION")])]),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.palabra",
                          checked: false,
                          label: "Facilidad de palabra",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.dominio",
                          checked: false,
                          label: "Dominio de público",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.asertividad",
                          checked: false,
                          label: "Asertividad",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("CCol", { attrs: { sm: "12" } }, [
                    _c("label", [
                      _c("b", [_vm._v("PLANEACION / ORGANIZACION")]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "4" } },
                    [
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.iniciativa",
                          checked: false,
                          label: "Iniciativa",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.creatividad",
                          checked: false,
                          label: "Creatividad",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.resultados",
                          checked: false,
                          label: "Orientado a resultados",
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
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.adaptable",
                          checked: false,
                          label: "Adaptable a cambios",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.logico",
                          checked: false,
                          label: "Clasificación y orden lógico de información",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.concentracion",
                          checked: false,
                          label: "Concentración",
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
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.equipo",
                          checked: false,
                          label: "Trabajo en equipo",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "habilidades.estres",
                          checked: false,
                          label: "Manejo de estrés laboral",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("p"),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CRow",
                [
                  _c("br"),
                  _vm._v(" "),
                  _c("CCol", { attrs: { sm: "12" } }, [
                    _c("h3", { staticClass: "text-center" }, [
                      _vm._v("ACTITUDES REQUERIDAS"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("CCol", { attrs: { sm: "12" } }, [
                    _c("label", [_c("b", [_vm._v("ACTITUDES")])]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { attrs: { sm: "4" } },
                    [
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "actitudes.responsable",
                          checked: false,
                          label: "Responsable",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "actitudes.empatico",
                          checked: false,
                          label: "Empático",
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
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "actitudes.emprendedor",
                          checked: false,
                          label: "Emprendedor",
                        },
                      }),
                      _vm._v(" "),
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "actitudes.colaborador",
                          checked: false,
                          label: "Colaborador",
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
                      _c("CInputCheckbox", {
                        attrs: {
                          id: "actitudes.normas",
                          checked: false,
                          label: "Apego a normas",
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
                          label: "Otras habilidades o actitudes requeridas",
                          value: _vm.actitudes.comentarios,
                          placeholder:
                            "Otras habilidades o actitudes requeridas",
                          rows: "2",
                        },
                        on: {
                          "update:value": function ($event) {
                            return _vm.$set(
                              _vm.actitudes,
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
                  _c("p"),
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