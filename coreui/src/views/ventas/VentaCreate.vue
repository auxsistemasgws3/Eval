<template mode="out-in">
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-cart" size="xl" class="mt-1" />
        <span class="h4">Referencia de venta </span>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol sm="4">
            <CInput
              v-model="v$.venta.nombre.$model"
              label="Nombre"
              placeholder="Nombre"
              :invalid-feedback="
                v$.venta.nombre.$error
                  ? v$.venta.nombre.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.venta.nombre.$dirty ? !v$.venta.nombre.$invalid : null
              "
            />
          </CCol>
          <CCol sm="4">
            <CInput
              v-model="v$.venta.apellido1.$model"
              label="Primer apellido"
              placeholder="Primer apellido"
              :invalid-feedback="
                v$.venta.apellido1.$error
                  ? v$.venta.apellido1.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.venta.apellido1.$dirty ? !v$.venta.apellido1.$invalid : null
              "
            />
          </CCol>
          <CCol sm="4">
            <CInput
              v-model="v$.venta.apellido2.$model"
              label="Segundo apellido"
              placeholder="Segundo apellido"
              :invalid-feedback="
                v$.venta.apellido2.$error
                  ? v$.venta.apellido2.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.venta.apellido2.$dirty ? !v$.venta.apellido2.$invalid : null
              "
            />
          </CCol>
          <CCol sm="3">
            <CInput
              v-model="v$.venta.telefono.$model"
              label="Teléfono"
              placeholder="Teléfono"
              :invalid-feedback="
                v$.venta.telefono.$error
                  ? v$.venta.telefono.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.venta.telefono.$dirty ? !v$.venta.telefono.$invalid : null
              "
            />
          </CCol>
          <CCol sm="3">
            <CInput
              v-model="v$.venta.correo.$model"
              label="Correo"
              placeholder="Correo"
              :invalid-feedback="
                v$.venta.correo.$error
                  ? v$.venta.correo.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.venta.correo.$dirty ? !v$.venta.correo.$invalid : null
              "
            />
          </CCol>
          <CCol sm="3">
            <CSelect
              :value.sync="venta.tipo_vivienda"
              :plain="true"
              label="Tipo vivienda"
              :options="tipo_viviendas"
              placeholder="Selecciona un tipo de vivienda"
              :invalid-feedback="
                v$.venta.tipo_vivienda.$error
                  ? v$.venta.tipo_vivienda.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.venta.tipo_vivienda.$dirty
                  ? !v$.venta.tipo_vivienda.$invalid
                  : null
              "
            />
          </CCol>
          <CCol sm="3">
            <CSelect
              :value.sync="venta.consumo_promedio"
              :plain="true"
              label="Consumo promedio"
              :options="consumos_promedio"
              placeholder="Selecciona el consumo promedio"
              :invalid-feedback="
                v$.venta.consumo_promedio.$error
                  ? v$.venta.consumo_promedio.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.venta.consumo_promedio.$dirty
                  ? !v$.venta.consumo_promedio.$invalid
                  : null
              "
            />
          </CCol>
          <CCol sm="3">
            <CSelect
              :value.sync="venta.estado"
              :plain="true"
              label="Estado"
              :options="estados"
              @change="getMunicipios()"
              placeholder="Selecciona el estado"
              :invalid-feedback="
                v$.venta.estado.$error
                  ? v$.venta.estado.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.venta.estado.$dirty ? !v$.venta.estado.$invalid : null
              "
            />
          </CCol>
          <CCol sm="3">
            <CSelect
              :value.sync="venta.municipio"
              :plain="true"
              label="Municipio"
              :options="municipios"
              placeholder="Selecciona el municipio"
              :invalid-feedback="
                v$.venta.municipio.$error
                  ? v$.venta.municipio.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.venta.municipio.$dirty ? !v$.venta.municipio.$invalid : null
              "
            />
          </CCol>
          <CCol sm="2">
            <CInput
              v-model="v$.venta.cp.$model"
              label="Codigo postal"
              placeholder="Codigo postal"
              :invalid-feedback="
                v$.venta.cp.$error ? v$.venta.cp.$errors[0].$message : ''
              "
              :is-valid="v$.venta.cp.$dirty ? !v$.venta.cp.$invalid : null"
            />
          </CCol>
          <CCol sm="4">
            <CInput
              v-model="v$.venta.colonia.$model"
              label="Colonia"
              placeholder="Colonia"
              :invalid-feedback="
                v$.venta.colonia.$error
                  ? v$.venta.colonia.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.venta.colonia.$dirty ? !v$.venta.colonia.$invalid : null
              "
            />
          </CCol>
          <CCol sm="4">
            <CInput
              v-model="v$.venta.calle.$model"
              label="Calle"
              placeholder="Calle"
              :invalid-feedback="
                v$.venta.calle.$error ? v$.venta.calle.$errors[0].$message : ''
              "
              :is-valid="
                v$.venta.calle.$dirty ? !v$.venta.calle.$invalid : null
              "
            />
          </CCol>
          <CCol sm="2">
            <CInput
              v-model="v$.venta.numero_ext.$model"
              label="Número ext."
              placeholder="Número ext."
              :invalid-feedback="
                v$.venta.numero_ext.$error
                  ? v$.venta.numero_ext.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.venta.numero_ext.$dirty
                  ? !v$.venta.numero_ext.$invalid
                  : null
              "
            />
          </CCol>
          <CCol sm="2">
            <CInput
              v-model="v$.venta.numero_int.$model"
              label="Número int."
              placeholder="Número int."
              :invalid-feedback="
                v$.venta.numero_int.$error
                  ? v$.venta.numero_int.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.venta.numero_int.$dirty
                  ? !v$.venta.numero_int.$invalid
                  : null
              "
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <CButton @click="create()" color="primary"> Guardar </CButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>
<script>
import { required, numeric, maxLength } from "../../utils/validators";
import { requiredIf } from "@vuelidate/validators";

import { useVuelidate } from "@vuelidate/core";
import {
  cilMoodGood,
  cilPlus,
  cilInputPower,
  cilLightbulb,
} from "@coreui/icons";
import axios from "axios";
export default {
  name: "AdvancedTables",
  moodGood: cilMoodGood,
  inputPower: cilInputPower,
  plusIcon: cilPlus,
  LightbulbIcon: cilLightbulb,
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
  },
  data() {
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
        numero_int: "",
      },
    };
  },
  validations() {
    return {
      venta: {
        nombre: { required, maxLength: maxLength(45), $autoDirty: true },
        apellido1: { required, maxLength: maxLength(45), $autoDirty: true },
        apellido2: {  maxLength: maxLength(45), $autoDirty: true },
        telefono: { required, maxLength: maxLength(15), $autoDirty: true },
        correo: { required, maxLength: maxLength(45), $autoDirty: true },
        tipo_vivienda: { required, $autoDirty: true },
        consumo_promedio: { required, $autoDirty: true },
        estado: { required, $autoDirty: true },
        municipio: { required, $autoDirty: true },
        cp: { required, numeric, maxLength: maxLength(6), $autoDirty: true },
        colonia: { required, maxLength: maxLength(45), $autoDirty: true },
        calle: { required, maxLength: maxLength(45), $autoDirty: true },
        numero_ext: { required, maxLength: maxLength(15), $autoDirty: true },
        numero_int: {  maxLength: maxLength(15), $autoDirty: true },
      },
    };
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  methods: {
    index() {
      let self = this;
      axios
        .get(
          this.$apiAdress +
            "/api/venta?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          self.tipo_viviendas = response.data.tipo_viviendas;
          self.consumos_promedio = response.data.consumos_promedio;
          self.estados = response.data.estados;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          }else{
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    getMunicipios(){
      let self = this;
      axios
        .get(
          this.$apiAdress +
            "/api/catalogos/municipios/" +
            self.venta.estado +
            "?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          self.municipios = response.data.municipios;
          self.venta.municipio= null;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          }else{
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    create() {
      let self = this;
      this.v$.$touch();
      if (this.v$.$error) return;
      axios
        .post(
          this.$apiAdress +
            "/api/venta/create" +
            "?token=" +
            localStorage.getItem("api_token"),
          {
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
          }
        )
        .then(function (response) {
          self.reset();
          self.$toast.success(self.$t("messages.insert"));
          if(response.data.errorMail.status){
            setTimeout(() => self.$toast.warning(response.data.errorMail.message) , 700);
          }
          setTimeout(() => self.$router.push({ path: "/ventas" }) , 500);
        })
        .catch(function (error) {
          console.log(error)
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            self.errors = error.response.data.errors;
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toast.error(self.message);
          } else if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          }else{
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    reset() {
      let self = this;
      self.$nextTick(() => {
        self.v$.$reset();
      });
      self.venta= {
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
      }
    },
  },
  mounted: function () {
    this.index();
  },
};
</script>