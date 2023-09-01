(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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

/***/ "../coreui/src/views/reservas/Reservar.vue":
/*!*************************************************!*\
  !*** ../coreui/src/views/reservas/Reservar.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reservar_vue_vue_type_template_id_60d1eed8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reservar.vue?vue&type=template&id=60d1eed8& */ "../coreui/src/views/reservas/Reservar.vue?vue&type=template&id=60d1eed8&");
/* harmony import */ var _Reservar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reservar.vue?vue&type=script&lang=js& */ "../coreui/src/views/reservas/Reservar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reservar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reservar_vue_vue_type_template_id_60d1eed8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reservar_vue_vue_type_template_id_60d1eed8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/reservas/Reservar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/reservas/Reservar.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ../coreui/src/views/reservas/Reservar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./Reservar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/reservas/Reservar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/reservas/Reservar.vue?vue&type=template&id=60d1eed8&":
/*!********************************************************************************!*\
  !*** ../coreui/src/views/reservas/Reservar.vue?vue&type=template&id=60d1eed8& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservar_vue_vue_type_template_id_60d1eed8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./Reservar.vue?vue&type=template&id=60d1eed8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/reservas/Reservar.vue?vue&type=template&id=60d1eed8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservar_vue_vue_type_template_id_60d1eed8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservar_vue_vue_type_template_id_60d1eed8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/reservas/Reservar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/reservas/Reservar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../coreui/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/icons */ "../coreui/node_modules/@coreui/icons/js/index.js");
/* harmony import */ var _utils_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/validators */ "../coreui/src/utils/validators.js");
/* harmony import */ var _vuelidate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vuelidate/core */ "../coreui/node_modules/@vuelidate/core/dist/index.esm.js");
/* harmony import */ var _fullcalendar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/vue */ "../coreui/node_modules/@fullcalendar/vue/dist/index.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/daygrid */ "../coreui/node_modules/@fullcalendar/daygrid/index.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/interaction */ "../coreui/node_modules/@fullcalendar/interaction/index.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/timegrid */ "../coreui/node_modules/@fullcalendar/timegrid/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "../coreui/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _coreui_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @coreui/vue */ "../coreui/node_modules/@coreui/vue/dist/coreui-vue.common.js");
/* harmony import */ var _coreui_vue__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_coreui_vue__WEBPACK_IMPORTED_MODULE_9__);
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









var fields = [{
  key: "titulo",
  label: "Reserva",
  _style: "width:15%"
}, {
  key: "Fecha",
  label: "Fecha",
  _style: "width:15%"
}, {
  key: "Accion",
  label: "Eliminar",
  _style: "width:8%"
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Utilidades",
  plusIcon: _coreui_icons__WEBPACK_IMPORTED_MODULE_1__["cilPlus"],
  cilIndustry: _coreui_icons__WEBPACK_IMPORTED_MODULE_1__["cilBuilding"],
  fileIcon: _coreui_icons__WEBPACK_IMPORTED_MODULE_1__["cilFile"],
  levelUpIcon: _coreui_icons__WEBPACK_IMPORTED_MODULE_1__["cilLevelUp"],
  edit: _coreui_icons__WEBPACK_IMPORTED_MODULE_1__["cilPencil"],
  components: {
    Fullcalendar: _fullcalendar_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    CButton: _coreui_vue__WEBPACK_IMPORTED_MODULE_9__["CButton"]
  },
  data: function data() {
    return {
      sala: "",
      mensajeConflicto: "",
      Destatus: [],
      tcontrato: [],
      user: [],
      estatus: "",
      contrato: "",
      referencia: "",
      proyectosConflicto: [],
      objetos: [],
      fields: fields,
      ban: false,
      items: [],
      diasEvento: [],
      horasInicio: {},
      horasFin: {},
      noConflictos: '',
      mostrarConflictos: false,
      calendarioModal: false,
      addEventoModal: false,
      eliminarModal: false,
      loading: false,
      dictionari: false,
      habilitar: true,
      reservas: [],
      actual: "",
      salas: [{
        value: 1,
        label: "Sala 1"
      }, {
        value: 2,
        label: "Sala 2"
      }],
      dictionary: {
        code: "",
        text: "",
        aux: "",
        next: "",
        sort: "",
        active: "",
        aux2: ""
      },
      newEvent: {
        titulo: '',
        fecha_inicio: '',
        hora_inicio: '',
        dias_totales: '',
        cuadrilla: ''
      },
      calendarOptions: {
        plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_7__["default"]],
        initialView: 'dayGridWeek',
        footerToolbar: true,
        buttonText: {
          today: 'Día de Hoy',
          month: 'Mes',
          week: 'Semana',
          day: 'Dia',
          list: 'Lista'
        },
        locale: 'es',
        selectable: true,
        height: 750,
        headerToolbar: {
          left: 'prev,next,today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        allDaySlot: false,
        slotMinTime: "07:00:00",
        slotMaxTime: "20:00:00",
        dateClick: this.dateClick,
        events: ''
      },
      calendarOptionsN: {
        plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_7__["default"]],
        initialView: 'dayGridWeek',
        footerToolbar: true,
        buttonText: {
          today: 'Día de Hoy',
          month: 'Mes',
          week: 'Semana',
          day: 'Dia',
          list: 'Lista'
        },
        locale: 'es',
        selectable: false,
        height: 750,
        headerToolbar: {
          left: 'prev,next,today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        allDaySlot: false,
        slotMinTime: "07:00:00",
        slotMaxTime: "20:00:00",
        dateClick: "",
        events: ''
      }
    };
  },
  validations: function validations() {},
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
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(this.$apiAdress + "/api/reserva?token=" + localStorage.getItem("api_token")).then(function (response) {
        self.user = response.data.user;

        if (self.user.rol_id == 5 || self.user.rol_id == 11) {
          self.calendarOptions.events = response.data.eventos;
        } else {
          self.calendarOptionsN.events = response.data.eventos;
        }

        self.objetos = response.data.reference;
      })["catch"](function (error) {
        self.$toast.error(self.$t("messages.error"));
      });
    },
    calcularDias: function calcularDias() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var self, fecha, comprobar;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = _this;
                fecha = new Date();
                comprobar = 1;
                fecha = fecha.toLocaleDateString();

                if (self.sala == "") {
                  comprobar = 0;
                }

                if (comprobar == 1) {
                  axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(_this.$apiAdress + "/api/reserva/calcularDias" + "?token=" + localStorage.getItem("api_token"), {
                    fecha_inicio: fecha,
                    dias_totales: 1
                  }).then(function (response) {
                    var data = response.data;
                    self.diasEvento = data.diasEventos;
                    self.ban = true; // self.rangoEvento =  data.rangoEvento;

                    for (var i = 0; i < self.diasEvento.length; i++) {
                      self.horasInicio[i] = "08:00";
                      self.horasFin[i] = "17:30";
                    }
                  })["catch"](function (error) {
                    if (error.response.status === 401) {
                      self.$router.push({
                        path: "/login"
                      });
                    } else {
                      self.$toast.error(self.$t("messages.error"));
                    }

                    self.$toast.error(self.$t("messages.error"));
                  });
                } else {
                  if (self.sala == "") {
                    self.$toast.error(self.$t("Llenar campo Sala a reservar"));
                  }
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    verificarDias: function verificarDias() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var self, isUpdate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = _this2;
                _context2.next = 3;
                return self.$swal({
                  title: self.$t("¿Seguro que quieres reservar la sala?"),
                  text: self.$t("Fechas a reservar: " + self.diasEvento),
                  icon: "warning",
                  showCancelButton: true
                }).then(function (result) {
                  return result.isConfirmed;
                });

              case 3:
                isUpdate = _context2.sent;

                if (isUpdate) {
                  axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(_this2.$apiAdress + "/api/reserva/verificarDias" + "?token=" + localStorage.getItem("api_token"), {
                    diasEvento: self.diasEvento,
                    horasinicio: self.horasInicio,
                    horasfin: self.horasFin,
                    dias_totales: 1,
                    sala: self.sala
                  }).then(function (response) {
                    var data = response.data;
                    self.proyectosConflicto = null;
                    console.log(data.merge);
                    self.proyectosConflicto = data.merge;
                    self.mensajeConflicto = data.mensaje;
                    self.noConflictos = data.sumaConflictos;
                    self.mostrarConflictos = true;

                    if (self.noConflictos != 0) {
                      self.$toast.error(self.$t(self.mensajeConflicto));
                    } else {
                      self.$toast.success(self.$t(self.mensajeConflicto));
                      location.reload();
                    } // console.log(data);

                  })["catch"](function (error) {
                    if (error.response.status === 401) {
                      self.$router.push({
                        path: "/login"
                      });
                    } else {
                      self.$toast.error(self.$t("messages.error"));
                    }

                    self.$toast.error(self.$t("messages.error"));
                  });
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    elim: function elim(id, titulo, fecha) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var self, isUpdate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                self = _this3;
                _context3.next = 3;
                return self.$swal({
                  title: self.$t("¿Seguro que quieres eliminar la reserva?"),
                  text: self.$t(titulo + " " + fecha),
                  icon: "warning",
                  showCancelButton: true
                }).then(function (result) {
                  return result.isConfirmed;
                });

              case 3:
                isUpdate = _context3.sent;

                if (isUpdate) {
                  axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(_this3.$apiAdress + "/api/reserva/eliminarR" + "?token=" + localStorage.getItem("api_token"), {
                    id: id
                  }).then(function (response) {
                    self.$toast.success(self.$t("Reserva Eliminada"));
                    location.reload();
                  })["catch"](function (error) {
                    if (error.response.status === 401) {
                      self.$router.push({
                        path: "/login"
                      });
                    } else {
                      self.$toast.error(self.$t("messages.error"));
                    }

                    self.$toast.error(self.$t("messages.error"));
                  });
                }

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    setModalEvent: function setModalEvent(obj) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var self, dateAndTime, dateFormat;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                self = _this4;
                dateAndTime = obj.dateStr.split("T");
                dateFormat = dateAndTime[0].split("-");
                _this4.newEvent.hora_fin = "17:30:00";
                _this4.newEvent.titulo = "Servicio ";
                _this4.newEvent.fecha_inicio = dateFormat[2] + "/" + dateFormat[1] + "/" + dateFormat[0]; // this.ticket.fecha_instalacion = this.newEvent.fecha_inicio;
                // this.ticket.fecha_instalacion = self.ticket.fecha_instalacion
                //       ? moment(String(self.ticket.fecha_instalacion)).format("YYYY-MM-DD")
                //       : "";

                if (dateAndTime[1] != null) {
                  _this4.newEvent.hora_inicio = dateAndTime[1].substr(0, 8);
                } else {
                  _this4.newEvent.hora_inicio = "08:00:00";
                }

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    onChangeDiasE: function onChangeDiasE() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.mostrarConflictos = false;
                _this5.rangoEvento = '';

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    eliminar: function eliminar() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                self = _this6;
                axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(_this6.$apiAdress + "/api/reserva/consultar?token=" + localStorage.getItem("api_token")).then(function (response) {
                  self.items = response.data.eventosE.map(function (item) {
                    return _objectSpread(_objectSpread({}, item), {}, {
                      Fecha: "Del: " + moment(String(item.fecha_inicio)).format("DD/MM/YYYY HH:mm") + ' Hasta el: ' + moment(String(item.fecha_fin)).format("DD/MM/YYYY HH:mm")
                    });
                  });
                  self.eliminarModal = true; // self.reservas = response.data.eventosE;
                })["catch"](function (error) {
                  if (error.response.status === 401) {
                    self.$router.push({
                      path: "/login"
                    });
                  } else {
                    self.$toast.error(self.$t("messages.error"));
                  }

                  self.$toast.error(self.$t("messages.error"));
                });

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    closeModal: function closeModal(status, evt, accept) {
      var self = this;
      self.action = self.$t("titles.create");
      self.$nextTick(function () {//self.v$.$reset();
      });
      self.editModal = false;
      self.editModal_Encender_CRD = false;
      self.editModal_cancelado = false;
      self.editModal_pausado = false;
      self.calendarioModal = false;
      self.addEventoModal = false;
      self.onChangeDiasE();
    },
    dateClick: function dateClick(arg) {
      var self = this;
      console.log(arg);
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(this.$apiAdress + "/api/reserva/consultar/" + arg.dateStr + "?token=" + localStorage.getItem("api_token")).then(function (response) {
        self.items = response.data.eventosE.map(function (item) {
          return _objectSpread(_objectSpread({}, item), {}, {
            Fecha: "Del: " + moment(String(item.fecha_inicio)).format("DD/MM/YYYY HH:mm") + ' Hasta el: ' + moment(String(item.fecha_fin)).format("DD/MM/YYYY HH:mm")
          });
        });
        self.eliminarModal = true;
      })["catch"](function (error) {
        if (error.response.status === 401) {
          self.$router.push({
            path: "/login"
          });
        } else {
          self.$toast.error(self.$t("messages.error"));
        }

        self.$toast.error(self.$t("messages.error"));
      });
    }
  },
  mounted: function mounted() {
    this.index();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/reservas/Reservar.vue?vue&type=template&id=60d1eed8&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/reservas/Reservar.vue?vue&type=template&id=60d1eed8& ***!
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
          _c("CCardHeader", [
            _c(
              "div",
              { staticClass: "float-left" },
              [
                _c("CIcon", {
                  staticClass: "mt-1",
                  attrs: { content: _vm.$options.cilIndustry, size: "xl" },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "h4" }, [_vm._v("Reservar sala")]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h5", [
                  _vm._v("\n          Salas disponibles:\n           \n      "),
                  _c(
                    "span",
                    {
                      staticClass: "badge badge-pill",
                      staticStyle: {
                        "background-color": "#58ae0c",
                        color: "#ffffff",
                      },
                    },
                    [_vm._v("Sala 1")]
                  ),
                  _vm._v("\n           \n      "),
                  _c(
                    "span",
                    {
                      staticClass: "badge badge-pill badge-success",
                      staticStyle: {
                        "background-color": "#0062c5",
                        color: "#ffffff",
                      },
                    },
                    [_vm._v("Sala 2")]
                  ),
                  _vm._v("\n       "),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "float-right" },
              [
                _c(
                  "CButton",
                  {
                    attrs: { color: "primary", variant: "outline" },
                    on: {
                      click: function ($event) {
                        _vm.addEventoModal = true
                      },
                    },
                  },
                  [_vm._v("Agregar Reserva")]
                ),
                _vm._v(" "),
                _vm.user.rol_id == 5 || _vm.user.rol_id == 11
                  ? _c(
                      "CButton",
                      {
                        attrs: { color: "danger", variant: "outline" },
                        on: {
                          click: function ($event) {
                            return _vm.eliminar()
                          },
                        },
                      },
                      [_vm._v("Eliminar Reservas")]
                    )
                  : _vm._e(),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _vm.user.rol_id == 5 || _vm.user.rol_id == 11
                ? _c("Fullcalendar", {
                    attrs: { options: _vm.calendarOptions },
                    on: { dateclick: _vm.dateClick },
                  })
                : _c("Fullcalendar", {
                    attrs: { options: _vm.calendarOptionsN },
                    on: { dateclick: _vm.dateClick },
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
            title: "Nueva Reserva",
            show: _vm.addEventoModal,
            size: "xl",
          },
          on: {
            "update:show": function ($event) {
              _vm.addEventoModal = $event
            },
          },
        },
        [
          _c("div", { attrs: { slot: "footer" }, slot: "footer" }),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "CCard",
                [
                  _c(
                    "CCardHeader",
                    [
                      _c("CIcon", {
                        staticClass: "mb-1",
                        attrs: { name: "cil-calendar", size: "lg" },
                      }),
                      _vm._v(" Reservar\n      "),
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
                            { attrs: { sm: "5" } },
                            [
                              _c("CSelect", {
                                attrs: {
                                  value: _vm.sala,
                                  plain: true,
                                  label: "Sala a Reservar",
                                  placeholder: "Seleccione",
                                  options: _vm.salas,
                                  disabled: _vm.ban,
                                },
                                on: {
                                  "update:value": function ($event) {
                                    _vm.sala = $event
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
                      _c("CRow", [_c("CCol", { attrs: { sm: "2" } })], 1),
                      _vm._v(" "),
                      !_vm.ban
                        ? _c(
                            "CButton",
                            {
                              staticClass: "text-md-right",
                              attrs: { color: "warning", variant: "outline" },
                              on: {
                                click: function ($event) {
                                  return _vm.calcularDias()
                                },
                              },
                            },
                            [_vm._v(" Pasar al paso 2")]
                          )
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _vm.ban
                ? _c(
                    "CCard",
                    [
                      _c(
                        "CCardBody",
                        [
                          _c(
                            "CRow",
                            [
                              _c("CCol", { attrs: { sm: "2" } }, [_c("b")]),
                              _vm._v(" "),
                              _c("CCol", { attrs: { sm: "4" } }, [
                                _c("b", [_vm._v("Fechas:")]),
                              ]),
                              _vm._v(" "),
                              _c("CCol", { attrs: { sm: "2" } }, [
                                _c("b", [_vm._v("Hora Inicio:")]),
                              ]),
                              _vm._v(" "),
                              _c("CCol", { attrs: { sm: "2" } }, [
                                _c("b", [_vm._v("Hora Fin:")]),
                              ]),
                              _vm._v(" "),
                              _c("CCol", { attrs: { sm: "1" } }, [_c("b")]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _vm._l(_vm.diasEvento, function (item, idx) {
                            return _c(
                              "CRow",
                              { key: "grap" + idx },
                              [
                                _c("CCol", { attrs: { sm: "2" } }),
                                _vm._v(" "),
                                _c(
                                  "CCol",
                                  { attrs: { sm: "4" } },
                                  [
                                    _c("CInput", {
                                      attrs: {
                                        value: _vm.diasEvento[idx],
                                        placeholder: "Agrege fecha final",
                                        type: "date",
                                      },
                                      on: {
                                        "update:value": function ($event) {
                                          return _vm.$set(
                                            _vm.diasEvento,
                                            idx,
                                            $event
                                          )
                                        },
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("CCol", { attrs: { sm: "2" } }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.horasInicio[idx],
                                        expression: "horasInicio[idx]",
                                      },
                                    ],
                                    attrs: { type: "time" },
                                    domProps: { value: _vm.horasInicio[idx] },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.horasInicio,
                                          idx,
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]),
                                _vm._v(" "),
                                _c("CCol", { attrs: { sm: "2" } }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.horasFin[idx],
                                        expression: "horasFin[idx]",
                                      },
                                    ],
                                    attrs: { type: "time" },
                                    domProps: { value: _vm.horasFin[idx] },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.horasFin,
                                          idx,
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]),
                                _vm._v(" "),
                                _c("CCol", { attrs: { sm: "1" } }),
                              ],
                              1
                            )
                          }),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "CRow",
                            [
                              _c(
                                "CCol",
                                { attrs: { sm: "1" } },
                                [
                                  _c(
                                    "CButton",
                                    {
                                      staticClass: "text-md-right",
                                      attrs: {
                                        color: "info",
                                        variant: "outline",
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.verificarDias()
                                        },
                                      },
                                    },
                                    [_vm._v(" Reservar ")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                { attrs: { sm: "3" } },
                                [
                                  _c(
                                    "CButton",
                                    {
                                      staticClass: "text-md-right",
                                      attrs: {
                                        color: "warning",
                                        variant: "outline",
                                      },
                                      on: {
                                        click: function ($event) {
                                          _vm.ban = !_vm.ban
                                        },
                                      },
                                    },
                                    [_vm._v(" Volver al paso 1 ")]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        2
                      ),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _vm.noConflictos != 0 && _vm.mostrarConflictos
            ? _c(
                "CCard",
                [
                  _c(
                    "CCardHeader",
                    [
                      _c("CIcon", {
                        staticClass: "mb-1",
                        attrs: { name: "cil-warning", size: "lg" },
                      }),
                      _vm._v(" Fechas en conflicto: "),
                      _c("font", { attrs: { size: "4", color: "#FF1C1C" } }, [
                        _c("b", [_vm._v(_vm._s(_vm.noConflictos))]),
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
                          _c("CCol", { attrs: { sm: "3" } }, [
                            _c("b", [_vm._v("Evento")]),
                          ]),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "2" } }, [
                            _c("b", [_vm._v("Fecha inicio")]),
                          ]),
                          _vm._v(" "),
                          _c("CCol", { attrs: { sm: "2" } }, [
                            _c("b", [_vm._v("Fecha Fin")]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _vm._l(_vm.proyectosConflicto, function (item, idx) {
                        return _c(
                          "CRow",
                          { key: "grap" + idx },
                          [
                            _c("CCol", { attrs: { sm: "3" } }, [
                              _vm._v(
                                "\n              " +
                                  _vm._s(item.titulo) +
                                  "\n            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("CCol", { attrs: { sm: "2" } }, [
                              _vm._v(
                                "\n              " +
                                  _vm._s(item.fecha_inicio) +
                                  "\n            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("CCol", { attrs: { sm: "2" } }, [
                              _vm._v(
                                "\n              " +
                                  _vm._s(item.fecha_fin) +
                                  "\n            "
                              ),
                            ]),
                          ],
                          1
                        )
                      }),
                    ],
                    2
                  ),
                ],
                1
              )
            : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CModal",
        {
          attrs: {
            entered: true,
            title: "Eliminar Reserva",
            show: _vm.eliminarModal,
            size: "xl",
          },
          on: {
            "update:show": function ($event) {
              _vm.eliminarModal = $event
            },
          },
        },
        [
          _c("div", { attrs: { slot: "footer" }, slot: "footer" }),
          _vm._v(" "),
          _c(
            "CCard",
            [
              _c("CCardHeader", [_c("b", [_vm._v("Reservas Actuales")])]),
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
                        key: "Accion",
                        fn: function (ref) {
                          var item = ref.item
                          return [
                            _c(
                              "td",
                              [
                                _c(
                                  "CButton",
                                  {
                                    staticClass:
                                      "btn btn-outline-danger btn-block btn-sm",
                                    on: {
                                      click: function ($event) {
                                        return _vm.elim(
                                          item.id,
                                          item.titulo,
                                          item.Fecha
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n              Eliminar\n            "
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
                  _vm._v(" "),
                  _c(
                    "CRow",
                    _vm._l(_vm.reservas, function (item, idx) {
                      return _c(
                        "CCol",
                        { key: "res" + idx, attrs: { sm: "6" } },
                        [
                          _c("CInput", {
                            attrs: {
                              label: item.titulo,
                              value:
                                "De: " +
                                item.fecha_inicio +
                                " Hasta: " +
                                item.fecha_fin,
                              disabled: "true",
                            },
                          }),
                        ],
                        1
                      )
                    }),
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