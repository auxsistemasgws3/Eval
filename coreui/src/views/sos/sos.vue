<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-speedometer" size="xl" class="mt-1" />
        &nbsp;
        <span class="h4">SISTEMA OPERATIVO DE SUGERENCIAS </span>
      </CCardHeader>
    </CCard>
    <div>
      <CCard>
        &nbsp;
        <H1 class="text-center">SOS - SISTEMA OPERATIVO DE SUGERENCIAS</H1>
        &nbsp;
        <H2 class="text-center">¿Que es el S.O.S.?</H2>
        &nbsp;
        <H4 class="text-center">
          Es un buzón virtual que está a disposición de nuestros colaboradores y donde
          podrás enviar tus sugerencias, quejar o felicitaciones, que nos ayudaran a
          mejorar continuamente la calidad de los servicios dentro de la empresa.
          Creamos este espacio para poder escucharte y estar en la mejora continua
          para brindarte un mejor servicio. Las Quejas, Sugerencias y Felicitaciones 
          tendrán como finalidad la mejora de la  eficiencia y calidad de las actividades 
          e incrementar la satisfacción de los colaboradores.</H4>
          &nbsp;

            <CCardBody size="lg" class="mx-auto">        
              <CButton class="me-md-2" style="width: 200px;" color="success" @click="getFelicitacion(), editModalFelicitaciones = true"> <!-- Se manda el  -->
                Felicitación
              </CButton>
                      
              <CButton class="me-md-2" style="width: 200px;" color="warning" @click="getSugerencia(), editModalSugerencia = true"> <!-- Se manda el  -->
                Sugerencia de Mejora
              </CButton>
                       
              <CButton class="me-md-2" style="width: 200px;" color="danger" @click="getQueja(), editModalQueja = true"> <!-- Se manda el  -->
                Queja
              </CButton>
            </CCardBody>
      </CCard>
    </div>

   <!-- -------------------------------FELICITACIONES-------------------------------------------------- -->
    <CModal :entered="true" title="S.O.S. Felicitaciónes" size="xl" :show.sync="editModalFelicitaciones">
      <div slot="footer">
        <CCol sm="6">
          <CButton
          @click="addFelicitacion(), editModalFelicitaciones = false" color="success" variant="outline"> Enviar
          </CButton>
        </CCol>
      </div>
      <h3 class="text-center">SOS - SISTEMA OPERATIVO DE SUGERENCIAS</h3>
      <p></p>
      <table class="table">
        <tbody width="100%">
          <tr>
            <th width="40%">
              <CInput :value.sync="Fechahoy"  label="Fecha:"
                placeholder="Ingrese fecha" type="date" disabled />
            </th>
            <th width="60%">
              <CInput :value.sync="categoria" label="Categoria:" 
                placeholder="Ingrese categoria" disabled />
            </th>
          </tr>
        </tbody>
      </table>
      <p class="text-center">
        Buen día, este espacio tiene como fin analizar la forma en que el personal
        percibe el ambiente de trabajo en el que se desempeña, de esta manera con 
        la colaboración de todos podremos mejorar nuestro entorno laboral. Felicitación: 
        Expresa el reconocimiento a al persona o a el área por la satisfacción de la 
        atención brindada.
      </p>
     
      <b>
        <CIcon name="cil-user" size="xl" class="mb-1" />
        <h4>Felicitación</h4>
      </b>
      <p></p>
      <CCol sm="12">
        <CTextarea :value.sync="comentarios"  label="¿A quien va dirigida tu felicitación?"
          placeholder="¿A quien va dirigida tu felicitación?" rows="1"/>
      </CCol>
      <CCol sm="12">
        <CTextarea :value.sync="comentarios2"  label="Comentarios:"
          placeholder="¿Que deseas destacar?" rows="3" />
      </CCol>
    </CModal>

    <!-- -------------------------------SUGERENCIA DE MEJORA-------------------------------------------------- -->
    <CModal :entered="true" title="S.O.S. Sugerencia de mejora" size="xl" :show.sync="editModalSugerencia">
      <div slot="footer">
        <CCol sm="6">
          <CButton
            @click="addSugerencia(), editModalSugerencia = false" color="success" variant="outline"> Enviar
          </CButton>
        </CCol>
      </div>
      <h3 class="text-center">SOS - SISTEMA OPERATIVO DE SUGERENCIAS</h3>
      <p></p>
      <table class="table">
        <tbody width="100%">
          <tr>
            <th width="40%">
              <CInput :value.sync="Fechahoy"  label="Fecha:"
                placeholder="Ingrese fecha" type="date" disabled />
            </th>
            <th width="60%">
              <CInput :value.sync="categoria" label="Categoria:" 
                placeholder="Ingrese categoria" disabled />
            </th>
          </tr>
        </tbody>
      </table>
      <p class="text-center">
        Buen día, este espacio tiene como fin analizar la forma en que el personal
        percibe el ambiente de trabajo en el que se desempeña, de esta manera con 
        la colaboración de todos podremos mejorar nuestro entorno laboral. Sugerencia: 
        Expresa toda aquella propuesta que tenga por finalidad promover la mejora 
        de la calidad mediante la aportación de ideas o iniciativas para perfeccionar 
        el funcionamiento de la organización.
      </p>
     
      <b>
        <CIcon name="cil-user" size="xl" class="mb-1" />
        <h4>Sugerencia de mejora</h4>
      </b>
      <p></p>
      <CCol sm="12">
        <CTextarea :value.sync="comentarios" label="Descripcion"
          placeholder="Escribe una descripcion de la situacion" rows="3"/>
      </CCol>
      <CCol sm="12">
        <CTextarea :value.sync="comentarios2" label="¿Que haria usted?"
          placeholder="Desde tu punto de vista ¿Que solucion/mejora propondrias?" rows="3" />
      </CCol>
      <CCol sm="12">
        <CTextarea :value.sync="comentarios3" label="¿Que esperas de la empresa?"
          placeholder="Desde tu punto de vista ¿Que plan de accion esperas por parte de la empresa?" rows="3" />
      </CCol>
    </CModal>

    <!-- -------------------------------QUEJA-------------------------------------------------- -->
    <CModal :entered="true" title="S.O.S. Queja" size="xl" :show.sync="editModalQueja">
      <div slot="footer">
        <CCol sm="6">
          <CButton
            @click="addQueja(), editModalQueja = false" color="success" variant="outline"> Enviar
          </CButton>
        </CCol>
      </div>
      <h3 class="text-center">SOS - SISTEMA OPERATIVO DE SUGERENCIAS</h3>
      <p></p>
      <table class="table">
        <tbody width="100%">
          <tr>
            <th width="40%">
              <CInput :value.sync="Fechahoy" label="Fecha:" 
                placeholder="Ingrese fecha" type="date" disabled />
            </th>
            <th width="60%">
              <CInput :value.sync="categoria" label="Categoria:" 
                placeholder="Ingrese categoria" disabled />
            </th>
          </tr>
        </tbody>
      </table>
      <p class="text-center">
        Buen día, este espacio tiene como fin analizar la forma en que el personal
        percibe el ambiente de trabajo en el que se desempeña, de esta manera con 
        la colaboración de todos podremos mejorar nuestro entorno laboral. Queja: 
        Expresa la insatisfacción sobre los defectos de funcionamiento, estructura, 
        recursos, organización, trato, desatención, tardanza o cualquier otra imperfección.                         
      </p>
     
      <b>
        <CIcon name="cil-user" size="xl" class="mb-1" />
        <h4>Queja</h4> 
      </b>
      <p></p>
      <CCol sm="12">
        <CTextarea :value.sync="comentarios" label="Descripcion"
          placeholder="Escribe una descripcion de la situacion" rows="3"/>
      </CCol>
      <CCol sm="12">
        <CTextarea :value.sync="comentarios2" label="¿Que haria usted?"
          placeholder="Desde tu punto de vista ¿Cuales son las medida que se deben tomar?" rows="3" />
      </CCol>
      <CCol sm="12">
        <CTextarea :value.sync="comentarios3" label="¿Que esperas de la empresa?"
          placeholder="Desde tu punto de vista ¿Que plan de accion esperas por parte de la empresa?" rows="3" />
      </CCol>
    </CModal>

    
  </div>
</template>
<script>

import {
  numeric,
  maxLength,
  minLength,
  email,
  required,
} from "../../utils/validators";
import { sameAs, not } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { requiredIf } from "@vuelidate/validators";
import { cilAddressBook, cilMoodGood, cilPlus } from "@coreui/icons";
import axios from "axios";


export default {
  
  data() {
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
      comentarios3: [],
    };
  },
  
  computed: {
    formatHistory() {
      return this.comentarios.map((item) => {
        return {
          ...item,
          hora: item.created_at ? moment(String(item.created_at)).format("hh:mm a") : "",
          dia: item.created_at ? moment(String(item.created_at)).format("DD") : "",
          mes: item.created_at ? moment(String(item.created_at)).format("MMMM") : "",
          ano: item.created_at ? moment(String(item.created_at)).format("YYYY") : "",
        };
      });
    },
    formatHistory() {
      return this.comentarios2.map((item) => {
        return {
          ...item,
          hora: item.created_at ? moment(String(item.created_at)).format("hh:mm a") : "",
          dia: item.created_at ? moment(String(item.created_at)).format("DD") : "",
          mes: item.created_at ? moment(String(item.created_at)).format("MMMM") : "",
          ano: item.created_at ? moment(String(item.created_at)).format("YYYY") : "",
        };
      });
    },
    formatHistory() {
      return this.comentarios3.map((item) => {
        return {
          ...item,
          hora: item.created_at ? moment(String(item.created_at)).format("hh:mm a") : "",
          dia: item.created_at ? moment(String(item.created_at)).format("DD") : "",
          mes: item.created_at ? moment(String(item.created_at)).format("MMMM") : "",
          ano: item.created_at ? moment(String(item.created_at)).format("YYYY") : "",
        };
      });
    },
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
          "/api/sos?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);
          self.user = response.data.user;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    getFelicitacion() {
      let self = this;
      axios
        .get(
          this.$apiAdress +
          "/api/sos/getFelicitacion?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);
          self.editModalFelicitaciones = true;
          self.Fechahoy = response.data.Fechahoy;
          self.categoria = response.data.categoria;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    async addFelicitacion() {
      let self = this;
      this.v$.$touch();
      console.log(self.v$);
      if (self.v$.$error) return;
      let isUpdate = await self
        .$swal({
          title: self.$t("¿Esta seguro de enviar tus respuestas?"),
          text: self.$t("messages.question.status.description"),
          icon: "warning",
          showCancelButton: true,
        })
        .then((result) => {
          return result.isConfirmed;
        });
      if (isUpdate) {
        axios
          .post(this.$apiAdress +
            "/api/sos/addFelicitacion" +
            "?token=" +
            localStorage.getItem("api_token"), {
            comentarios: self.comentarios,
            comentarios2: self.comentarios2,
          })
          .then(function (response) {
            console.log(response.data);
            self.respuestas = {};
            self.comentarios = "";
            self.comentarios2 = "";
            self.$toast.success(self.$t("messages.insert"));
          })
          .catch(function (error) {
            self.comentarios = "";
            self.comentarios2 = "";
            if (error.response.status == 500) {
              self.$router.push({ path: "/evaluacion" });
              self.$toast.error(self.$t("messages.error"));
            } if (error.response.status == 401) {
              self.$toast.error(self.$t("Ya realizaste esta Evaluación"));
            }
          });
      }
    },
    getSugerencia() {
      let self = this;
      axios
        .get(
          this.$apiAdress +
          "/api/sos/getSugerencia?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);
          self.editModalSugerencia = true;
          self.Fechahoy = response.data.Fechahoy;
          self.categoria = response.data.categoria;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    async addSugerencia() {
      let self = this;
      this.v$.$touch();
      console.log(self.v$);
      if (self.v$.$error) return;
      let isUpdate = await self
        .$swal({
          title: self.$t("¿Esta seguro de enviar tus respuestas?"),
          text: self.$t("messages.question.status.description"),
          icon: "warning",
          showCancelButton: true,
        })
        .then((result) => {
          return result.isConfirmed;
        });
      if (isUpdate) {
        axios
          .post(this.$apiAdress +
            "/api/sos/addSugerencia" +
            "?token=" +
            localStorage.getItem("api_token"), {
            comentarios: self.comentarios,
            comentarios2: self.comentarios2,
            comentarios3: self.comentarios3,
          })
          .then(function (response) {
            console.log(response.data);
            self.respuestas = {};
            self.comentarios = "";
            self.comentarios2 = "";
            self.comentarios3 = "";
            self.$toast.success(self.$t("messages.insert"));
          })
          .catch(function (error) {
            self.comentarios = "";
            self.comentarios2 = "";
            self.comentarios3 = "";
            if (error.response.status == 500) {
              self.$router.push({ path: "/evaluacion" });
              self.$toast.error(self.$t("messages.error"));
            } if (error.response.status == 401) {
              self.$toast.error(self.$t("Ya realizaste esta Evaluación"));
            }
          });
      }
    },
    getQueja() {
      let self = this;
      axios
        .get(
          this.$apiAdress +
          "/api/sos/getQueja?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);
          self.editModalQueja = true;
          self.Fechahoy = response.data.Fechahoy;
          self.categoria = response.data.categoria;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    async addQueja() {
      let self = this;
      this.v$.$touch();
      console.log(self.v$);
      if (self.v$.$error) return;
      let isUpdate = await self
        .$swal({
          title: self.$t("¿Esta seguro de enviar tus respuestas?"),
          text: self.$t("messages.question.status.description"),
          icon: "warning",
          showCancelButton: true,
        })
        .then((result) => {
          return result.isConfirmed;
        });
      if (isUpdate) {
        axios
          .post(this.$apiAdress +
            "/api/sos/addQueja" +
            "?token=" +
            localStorage.getItem("api_token"), {
            comentarios: self.comentarios,
            comentarios2: self.comentarios2,
            comentarios3: self.comentarios3,
          })
          .then(function (response) {
            console.log(response.data);
            self.respuestas = {};
            self.comentarios = "";
            self.comentarios2 = "";
            self.comentarios3 = "";
            self.$toast.success(self.$t("messages.insert"));
          })
          .catch(function (error) {
            self.comentarios = "";
            self.comentarios2 = "";
            self.comentarios3 = "";
            if (error.response.status == 500) {
              self.$router.push({ path: "/evaluacion" });
              self.$toast.error(self.$t("messages.error"));
            } if (error.response.status == 401) {
              self.$toast.error(self.$t("Ya realizaste esta Evaluación"));
            }
          });
      }
    },
    selectCheckbox(slug, code) {
      switch (slug) {
        case "setPassword":
          this.setPassword = !code;
          break;
      }
    },
    onChange(value) {
      this.user.areas_ventas = value;
      if (!value) this.user.areas_ventas = [];
      this.isInvalid;
    },
    onTouch() {
      this.isTouched = true;
    },
    closeModal(status, evt, accept) {
      let self = this;
      self.action = self.$t("titles.create");
      self.setPassword = true;
      self.$nextTick(() => {
        self.v$.$reset();
      });
      self.user = self.$options.User;
      self.editModal = false;
    },
    evenMoney(value) {
      if (value.unmasked) {
        // const formatted = value.unmasked.match(/\d+(\.\d+)?/g);
        // const formatted = value.unmasked.match(/(?=(?:\d{3})+(?:\.|$))/g).join(",");
        // const formatted = value.unmasked.match(/(?:\d{3})+\d{1,3}(?:\.|$)/g).join(",");
        let formatted = value.unmasked.replace(
          /(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g,
          "$1,"
        );
        // let formatted = value.unmasked.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
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