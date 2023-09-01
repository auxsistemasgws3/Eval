<template>
  <div>
   
    <CCard>
      <CCardHeader>
        <CIcon name="cil-cart" size="xl" class="mt-1" />
        <span class="h4">Detalle referencia venta</span>
      </CCardHeader>
      <CCardBody>
        <CElementCover :opacity="0.8" style="z-index: 99;" v-show="loading"/>
        <CRow>
          <CCol sm="4">
            <CInput
              v-model="venta.nombre"
              label="Nombre"
              placeholder="Nombre"
              disabled
            />
          </CCol>
          <CCol sm="4">
            <CInput
              v-model="venta.apellido1"
              label="Primer apellido"
              placeholder="Primer apellido"
              disabled
            />
          </CCol>
          <CCol sm="4">
            <CInput
              v-model="venta.apellido2"
              label="Segundo apellido"
              placeholder="Segundo apellido"
              disabled
            />
          </CCol>
          <CCol sm="3">
            <CInput
              v-model="venta.telefono"
              label="Teléfono"
              placeholder="Teléfono"
              disabled
            />
          </CCol>
          <CCol sm="3">
            <CInput
              v-model="venta.correo"
              label="Correo"
              placeholder="Correo"
              disabled
            />
          </CCol>
          <CCol sm="3">
            <CInput
              v-model="venta.tipo_vivienda.text"
              label="Tipo vivienda"
              placeholder="Tipo vivienda"
              disabled
            />
          </CCol>
          <CCol sm="3">
            <CInput
              v-model="venta.consumo_promedio.text"
              label="Consumo promedio"
              placeholder="Consumo promedio"
              disabled
            />
          </CCol>
          <CCol sm="3">
            <CInput
              v-model="venta.estado.nombre"
              label="Estado"
              placeholder="Estado"
              disabled
            />
          </CCol>
          <CCol sm="3">
            <CInput
              v-model="venta.municipio.nombre"
              label="Municipio"
              placeholder="Municipio"
              disabled
            />
          </CCol>
          <CCol sm="2">
            <CInput
              v-model="venta.cp"
              label="Codigo postal"
              placeholder="Codigo postal"
              disabled
            />
          </CCol>
          <CCol sm="4">
            <CInput
              v-model="venta.colonia"
              label="Colonia"
              placeholder="Colonia"
              disabled
            />
          </CCol>
          <CCol sm="3">
            <CInput
              v-model="venta.calle"
              label="Calle"
              placeholder="Calle"
              disabled
            />
          </CCol>
          <CCol sm="2">
            <CInput
              v-model="venta.numero_ext"
              label="Número ext."
              placeholder="Número ext."
              disabled
            />
          </CCol>
          <CCol sm="2">
            <CInput
              v-model="venta.numero_int"
              label="Número int."
              placeholder="Número int."
              disabled
            />
          </CCol>
          <CCol sm="3" v-if="user.rol_id == 5 || user.rol_id == 7">
            <div role="group" class="form-group">
              <label class=""> Monto </label>
              <div class="input-group">
                <input-facade
                  class="form-control text-right"
                  :class="{ 'is-invalid': v$.venta.monto.$invalid }"
                  v-model="v$.venta.monto.$model"
                  mask="###########"
                  :disabled="venta.estatus && venta.estatus.code != 1"
                  :formatter="evenMoney"
                  placeholder="$000.00"
                  :masked="false"
                  :invalid-feedback="
                    v$.venta.monto.$error
                      ? v$.venta.monto.$errors[0].$message
                      : ''
                  "
                  :is-valid="
                    venta.estatus &&
                    venta.estatus.code == 1 &&
                    v$.venta.monto.$dirty
                      ? !v$.venta.monto.$invalid
                      : null
                  "
                />
                <div class="input-group-append">
                  <CButton
                    variant="outline"
                    :color="v$.venta.monto.$invalid ? 'danger' : 'success'"
                    disabled
                    size="sm"
                  >
                    MXN
                  </CButton>
                </div>
              </div>
              <div class="invalid-feedback">Este campo es obligatorio.</div>
            </div>
          </CCol>

          <CCol sm="2">
            <label>Estatus</label>
            <CButton
              disabled
              variant="outline"
              :color="venta.estatus ? venta.estatus.aux : ''"
              block
            >
              {{ venta.estatus ? venta.estatus.text : "" }}
            </CButton>
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="5">
            <CInputFile
              v-if="venta.file_cotizacion === null"
              type="file"
              addLabelClasses="btn-outline-primary"
              :custom="true"
              v-on:change="handleFileUpload"
              :placeholder="nameFile"
              :invalid-feedback="v$.venta.file.$error ? v$.venta.file.$errors[0].$message : ''"
              :is-valid="v$.venta.file.$dirty ? !v$.venta.file.$invalid : null"
            >
              <template #append-content> buscar </template>
            </CInputFile>
            <CButton
              v-else
              block
              size="sm"
              variant="outline"
              color="primary"
              @click="downloadFile(venta.id, 'cotizacion')"
            >
              <CIcon name="cil-cloud-download" size="lg" /> Cotización PDF
            </CButton>
          </CCol>
        </CRow>
        <CRow class="justify-content-between pt-2">
          <div class="col-auto" v-if="venta.estatus && venta.estatus.code != 4">
            <CButton
              v-if="
                venta.estatus &&
                venta.estatus.next == 2 &&
                (user.rol_id == 5 || user.rol_id == 7)
              "
              @click="cotizar()"
              color="dark"
              class="mx-1"
              >Cotizado</CButton
            >
            <CButton
              v-if="
                venta.estatus &&
                venta.estatus.next == 3 &&
                (user.rol_id == 5 || user.rol_id == 7)
              "
              @click="cerrar()"
              color="success"
              class="mx-1"
              >Cerrado</CButton
            >

            <CButton
              v-if="
                venta.estatus && venta.estatus.next == 4 && user.rol_id == 5
              "
              @click="cerrar()"
              color="primary"
              class="mx-1"
              >Generar orden</CButton
            >
          </div>
          <div class="col-auto" v-else></div>
          <div class="col-auto">
            <CButton
              v-if="
                venta.estatus &&
                venta.estatus.code != 0 &&
                venta.estatus.code != 3 &&
                user.rol_id == 5
              "
              @click="setEstatus(0)"
              color="danger"
              class="mx-1"
              >Cancelar</CButton
            >
          </div>
        </CRow>
      </CCardBody>
    </CCard>
    <CRow>
      <CCol md="6">
        <CCard>
          <CCardHeader>
            <CIcon :content="$options.chatIcon" size="xl" class="mt-1" />
            <span class="h4">Comentarios </span>
          </CCardHeader>
          <CCardBody>
            <div class="comentarios" ref="comentarios" id="comentarios">
              <div v-for="(item, index) in comentarios">
                <div
                  class="row align-items-center"
                  v-if="item.usuario.id == user.id"
                >
                  <CCol md="4"> </CCol>
                  <CCol md="8" class="bg-light py-2">
                    <span class="text-muted text">
                      {{ item.texto }}
                    </span>
                    <br />
                    <span class="text-muted">{{ item.fecha }}</span>
                  </CCol>
                </div>
                <div class="row align-items-center" v-else>
                  <CCol md="1">
                    <img
                      src="img/avatars/144.webp"
                      onerror="onerror:this.src='img/avatars/default.png'"
                      class="c-avatar-img"
                    />
                  </CCol>
                  <CCol md="8" class="bg-light mx-3 py-2">
                    <span class="m-b-0 font-medium p-0">
                      {{ item.usuario.name }}
                      {{ item.usuario.primer_apellido }}
                      {{ item.usuario.segundo_apellido }}</span
                    >
                    <br />
                    <span class="text-muted text">
                      {{ item.texto }}
                    </span>
                    <br />
                    <span class="text-muted">{{ item.fecha }}</span>
                  </CCol>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <CRow>
                <CCol md="10">
                  <CTextarea
                    v-model="comentario"
                    placeholder="Comentario..."
                    width="100%"
                    rows="5"
                  />
                </CCol>
                <CCol md="2">
                  <CButton @click="addComentario()" color="primary" block>
                    Enviar
                  </CButton>
                </CCol>
              </CRow>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md="6">
        <CCard>
          <CCardHeader>
            <CIcon :content="$options.listIcon" size="xl" class="mt-1" />
            <span class="h4">Historial </span>
          </CCardHeader>
          <CCardBody>
            <div class="history" switcher>
              <div
                class="row align-items-center"
                v-for="(item, index) in movimientos"
              >
                <CCol md="1">
                  <CIcon
                    :content="$options.calendarIcon"
                    size="xl"
                    class="mt-1"
                  />
                </CCol>
                <CCol md="8">
                  <span class="m-b-0 font-medium p-0">{{ item.texto }}</span>
                  <br />
                  <span class="text-muted">
                    {{ item.usuario.name }} {{ item.usuario.primer_apellido }}
                    {{ item.usuario.segundo_apellido }}
                    - {{ item.hora }}
                  </span>
                </CCol>
                <CCol md="3" class="text-center">
                  <span class="day">{{ item.dia }}</span>
                  <br />
                  <span class="month">{{ item.mes }}</span>
                </CCol>
              </div>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
   

  </div>
</template>
<script>
import { required, numeric, maxLength, pdf , fileSize} from "../../utils/validators";
import { requiredIf, helpers } from "@vuelidate/validators";

import { useVuelidate } from "@vuelidate/core";
import {
  cilMoodGood,
  cilPlus,
  cilInputPower,
  cilLightbulb,
} from "@coreui/icons";
import axios from "axios";
// const pdfRule = helpers.withMessage('Debe ser pdf', helpers.regex('image', /\.(gif|jpe?g|tiff|png)$/))
// const pdfRule = helpers.regex('file', /\.(gif|jpe?g|tiff|png)$/)
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
    monto: "",
    file: {},
  },
  data() {
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
        file_cotizacion: null,
      },
    };
  },
  validations() {
    return {
      venta: {
        monto: { required, maxLength: maxLength(45), $autoDirty: true },
        file: { required, pdf, fileSize, $autoDirty: true },
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
            "/api/venta/" +
            self.$route.params.id +
            "?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          self.user = response.data.user;
          let getVenta= response.data.venta
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
          }
          self.thisFolder = response.data.folder.id;
          self.movimientos = response.data.movimientos.map((item) => {
            return {
              ...item,
              hora: item.created_at
                ? moment(String(item.created_at)).format("hh:mm a")
                : "",
              dia: item.created_at
                ? moment(String(item.created_at)).format("DD")
                : "",
              mes: item.created_at
                ? moment(String(item.created_at)).format("MMMM")
                : "",
            };
          });
          self.comentarios = response.data.comentarios.map((item) => {
            return {
              ...item,
              fecha: item.created_at
                ? moment(String(item.created_at)).format("DD/MM/YYYY hh:mm a")
                : "",
            };
          });
          self.loading = false;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          }else{
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    getMunicipios() {
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
          self.venta.municipio = null;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          }else{
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    cotizar() {
      let self = this;
      this.v$.$touch();
      if (this.v$.$error) return;
      self.formData.append("id_venta", self.venta.id);
      self.formData.append("monto", self.venta.monto);
      self.loading = true;
      axios
        .post(
          this.$apiAdress +
            "/api/venta/cotizar" +
            "?token=" +
            localStorage.getItem("api_token"),
          self.formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(function (response) {
          self.venta = response.data;
          self.$toast.success(self.$t("messages.update"));
          if(response.data.errorMail.status){
            setTimeout(() => self.$toast.warning(response.data.errorMail.message) , 700);
          }
          self.loading = false;
        })
        .catch(function (error) {
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            self.errors = error.response.data.errors;
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toast.error(self.message);
          } else if (error.response.status === 400) {
            self.$toast.warning(error.response.data.error);
          }else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    handleFileUpload(files, event) {
      let self = this;
      self.nameFile = files[0].name;
      self.formData.append("file", files[0]);
      self.venta.file=files[0];
      self.v$.venta.file.$model= {
        name : files[0].name,
        size : files[0].size,
        type : files[0].type
      };
    },
    cerrar() {
      let self = this;
      this.v$.$touch();
      if (this.v$.$error) return;
      self.loading = true;
      axios
        .post(
          this.$apiAdress +
            "/api/venta/cerrar" +
            "?token=" +
            localStorage.getItem("api_token"),
          {
            id_venta: self.venta.id,
          }
        )
        .then(function (response) {
          self.venta = response.data;
          self.$toast.success(self.$t("messages.update"));
           if(response.data.errorMail.status){
            setTimeout(() => self.$toast.warning(response.data.errorMail.message) , 700);
          }
          self.loading = false;
        })
        .catch(function (error) {
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
    downloadFile(id, name) {
      let self = this;
      this.downloadFileName = name;
      self.loading = false;
      axios({
        method: "get",
        url:
          this.$apiAdress +
          "/api/venta/file/" +
          name +
          "?id=" +
          id +
          "&token=" +
          localStorage.getItem("api_token"),
        responseType: "arraybuffer",
      })
        .then(function (response) {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute(
            "download",
            "cotizacion-" + self.venta.folio + ".pdf"
          );
          document.body.appendChild(link);
          link.click();
          self.loading = false;
        })
        .catch(function (error) {
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
          // self.$router.push({ path: '/login' })
        });
    },
    async addComentario() {
      let self = this;
      if (self.comentario == "") return;
      axios
        .post(
          this.$apiAdress +
            "/api/venta/comentario" +
            "?token=" +
            localStorage.getItem("api_token"),
          {
            comentario: self.comentario,
            venta: self.$route.params.id,
            estatus: self.venta.estatus ? self.venta.estatus.id : "",
          }
        )
        .then(function (response) {
          let data = response.data;
          self.comentarios.push(data);
          self.$nextTick(() => {
            self.$refs.comentarios.scrollTop =
              self.$refs.comentarios.scrollHeight;
          });
          self.comentario = "";
          self.$toast.success(self.$t("messages.insert"));
        })
        .catch(function (error) {
          console.log(error.response)
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
        numero_int: "",
      };
    },
    evenMoney(value) {
      if (value.unmasked) {
        //  let formatted = value.unmasked.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        let formatted = value.unmasked.replace(
          /(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g,
          "$1,"
        );
        value.masked = `\$${formatted}`;
        return true;
      }
    },
  },
  mounted: function () {
    this.index();
  },
};
</script>