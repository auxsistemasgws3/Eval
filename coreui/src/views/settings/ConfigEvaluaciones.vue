<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-settings" size="xl" class="mt-1" />
        <span class="h4" align="right">Configuración Evaluaciones</span>
         <div class="card-header-actions">
          <CLink @click="getEvaluacionesDepartamento(), ModalDepartamento = true" class="btn btn-info btn-sm">
            <CIcon :content="$options.plusIcon" /> Activar Evaluaciones Departamento
          </CLink>
        </div>
      </CCardHeader>
    </CCard>
    <CCard>
      <CCardBody>
        <CRow>
          <CCol sm="6">
            <CCard>
              <CCardHeader>
                <CButton color="secondary" disabled size="sm">
                  <CIcon name="cil-Speedometer"/>
                </CButton>
                <label><b>Desempeño</b></label>
              </CCardHeader>
              <CCardBody>        
                <CButton class="me-md-2" style="width: 200px;" color="warning" @click="InformacionDesempeñoEditar(1), ModalQuestions = true" > <!-- Se manda el  -->
                  Configurar
                </CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm="6">
           <CCard>
              <CCardHeader>
                <CButton color="secondary" disabled size="sm">
                  <CIcon name="cil-Star"/>
                </CButton>
                <label><b>Lider</b></label>
              </CCardHeader>
              <CCardBody>
                <CButton size="lg" class="mx-auto" style="width: 200px;" color="warning" @click="InformacionLiderEditar(2), ModalQuestions = true" >
                  Configurar 
                </CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm="6">
            <CCard>
              <CCardHeader>
                <CButton color="secondary" disabled size="sm">
                  <CIcon name="cil-mood-good"/>
                </CButton>
                <label><b>Clima Laboral</b></label>
              </CCardHeader>
              <CCardBody>
                <CButton  size="lg" class="mx-auto" style="width: 200px;" color="warning" @click="InformacionClimaLaboralEditar(3), ModalQuestions = true" >
                  Configurar 
                </CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm="6">
            <CCard>
              <CCardHeader>
                <CButton color="secondary" disabled size="sm">
                  <CIcon name="cil-Globe-Alt"/>
                </CButton>
                <label><b>Departamento</b></label>
              </CCardHeader>
              <CCardBody>
                <CButton  size="lg" class="mx-auto" style="width: 200px;" color="warning" @click="InformacionDepartamentoEditar(4), ModalQuestions = true"  >
                  Configurar 
                </CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm="6">
            <CCard>
              <CCardHeader>
                <CButton color="secondary" disabled size="sm">
                  <CIcon name="cil-Globe-Alt"/>
                </CButton>
                <label><b>Grupal</b></label>
              </CCardHeader>
              <CCardBody>
                <CButton  size="lg" class="mx-auto" style="width: 200px;" color="warning" @click="InformacionGrupalEditar(5), ModalQuestions = true"  >
                  Configurar 
                </CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm="6">
            <CCard>
              <CCardHeader>
                <CButton color="secondary" disabled size="sm">
                  <CIcon name="cil-Globe-Alt"/>
                </CButton>
                <label><b>Entre Lideres</b></label>
              </CCardHeader>
              <CCardBody>
                <CButton  size="lg" class="mx-auto" style="width: 200px;" color="warning" @click="InformacionEntreLideresEditar(6), ModalQuestions = true"  >
                  Configurar 
                </CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm="3"></CCol>
        </CRow>
      </CCardBody>
    </CCard>
    
<!-- ------------------------------------------------------------------------------------- -->
    <CModal
      :entered="true" 
      title="Editar Preguntas de Evaluaciones"
      size="xl"
      :show.sync="ModalQuestions"
    >
    <div slot="footer">
      <CCol sm="6">
        <CButton @click="ModalQuestions = false" color="danger" variant="outline"> Cancelar </CButton> 
      </CCol>
    </div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-calculator" size="xl" class="mt-1" />
        <span class="h4">Preguntas </span>
        <div class="card-header-actions">
          <CButton @click="addModalQuestions = true, ModalQuestions = false, reset()" color="primary" size="sm" block>
            <CIcon :content="$options.plusIcon" /> Agregar Pregunta
          </CButton>
        </div>
      </CCardHeader>
      <CCardBody>
        <h3 class="text-center" >{{questionType}}</h3>
        <CDataTable
          :items="items"
          :fields="fields"
          :itemsPerPageSelect="{ label: $t('tables.pageSelect') + ':' }"
          :noItemsView="{
            noResults: $t('tables.itemsView.noResults'),
            noItems: $t('tables.itemsView.noItems'),
          }"
          :items-per-page="25"
          hover
          columnFilter
          sorter
          pagination
          outlined
          size="sm"
          :loading="loading"
        >
          <template #label="{ item }">
            <td class="py-2">
              {{item.label}}
            </td>
          </template>
           <template #active="{ item }">
            <td v-if="item.active == 1" class="py-2" style="color:#2CDD20;">
                <b>   Activa   </b> 
            </td>
            <td v-if="item.active == 0" class="py-2" style="color:#E72325;">
               <b>   Desactiva   </b> 
            </td>
          </template>
          <template #show_details="{ item, index }">
            <td class="py-2">
              <CButton
                color="primary"
                variant="outline"
                square
                size="sm"
                @click="getQuestion(item.id, index)"
              >
                Editar
              </CButton>
            </td>
          </template>
        </CDataTable>
      </CCardBody>
    </CCard>
    </CModal>
<!-- ------------------------------------------------------------------------------------- -->
     <CModal
      :entered="true" 
      title="Editar Pregunta"
      size="xl"
      :show.sync="editModalQuestions"
    >
      <CForm>
        <CRow>
          <CCol sm="10">
            <CInput
              v-model="v$.question.text.$model"
              label="Pregunta:"
              placeholder="Coloque pregunta"
            />
          </CCol>
          <CCol sm="2">
            <br />
            <input type="radio" id="1" value="1" v-model="v$.question.active.$model"/>
            <label for="uno">Activar</label>
            <input type="radio" id="0" value="0" v-model="v$.question.active.$model"/>
            <label for="Dos">Desactivar</label>
          </CCol>
          <h4 class="text-center" >Antes</h4>
          <CCol sm="12">
            <b>{{question.text_antes}}</b>
          </CCol>
        </CRow>
      </CForm>
      <div slot="footer">
        <CButton @click="editModalQuestions = false" color="danger" variant="outline">
          Cancelar
        </CButton>
        <CButton @click="updateQuestion()" color="primary">
          Guardar
        </CButton>
      </div>
    </CModal>
<!-- ------------------------------------------------------------------------------------- -->
     <CModal
      :entered="true" 
      title="Agreagr Pregunta"
      size="xl"
      :show.sync="addModalQuestions"
    >
      <CForm>
        <h4 class="text-center" >Evaluacion <b>{{questionType}}</b></h4>
        <CRow>
          <CCol sm="10">
            <CInput
              v-model="v$.question.text.$model"
              label="Pregunta:"
              placeholder="Coloque pregunta"
              :invalid-feedback="
                v$.question.text.$error
                  ? v$.question.text.$errors[0].$message
                  : ''
              "
              :is-valid="
                v$.question.text.$dirty
                  ? !v$.question.text.$invalid
                  : null
              "
            />
          </CCol>
          <CCol sm="2">
            <br />
            <input type="radio" id="1" value="1" v-model="v$.question.active.$model"/>
            <label for="uno">Activar</label>
            <input type="radio" id="0" value="0" v-model="v$.question.active.$model"/>
            <label for="Dos">Desactivar</label>
          </CCol>
        </CRow>
      </CForm>
      <div slot="footer">
        <CButton @click="addModalQuestions = false" color="danger" variant="outline">
          Cancelar
        </CButton>
        <CButton @click="addQuestion()" color="primary">
          Guardar
        </CButton>
      </div>
    </CModal>
<!-- ------------------------------------------------------------------------------------- -->
    <CModal
      :entered="true" 
      title="Evaluación Departamentos"
      size="lg"
      :show.sync="ModalDepartamento"
    >
    <div slot="footer">
      <CCol sm="6">
        <CButton @click="ModalQuestions = false" color="danger" variant="outline"> Cancelar </CButton> 
      </CCol>
    </div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-calculator" size="xl" class="mt-1" />
        <span class="h4">Departamentos </span>
        <!-- <div class="card-header-actions">
          <CButton @click="addModalQuestions = true, ModalQuestions = false, reset()" color="primary" size="sm" block>
            <CIcon :content="$options.plusIcon" /> Agregar Pregunta
          </CButton>
        </div> -->
      </CCardHeader>
      <CCardBody>
        <!-- <h3 class="text-center" >{{questionType}}</h3> -->
        <CDataTable
          :items="itemsDep"
          :fields="fieldsDep"
          :itemsPerPageSelect="{ label: $t('tables.pageSelect') + ':' }"
          :noItemsView="{
            noResults: $t('tables.itemsView.noResults'),
            noItems: $t('tables.itemsView.noItems'),
          }"
          :items-per-page="25"
          hover
          columnFilter
          sorter
          pagination
          outlined
          size="sm"
          :loading="loading"
        >
          <template #label="{ item }">
            <td class="py-2">
              {{item.label}}
            </td>
          </template>
           <template #active="{ item }">
            <td v-if="item.active == 1" class="py-2" style="color:#2CDD20;">
                <b>   Activa   </b> 
            </td>
            <td v-if="item.active == 0" class="py-2" style="color:#E72325;">
               <b>   Desactiva   </b> 
            </td>
          </template>
          <template #show_details="{ item }">
            <td class="py-2">
              <CButton @click="item.active == !item.active, activarDepartamento(item.id)" color="success">
                Activar
              </CButton>
            </td>
          </template>
          <template #show_details2="{ item }">
            <td class="py-2">
              <CButton @click="item.active == !item.active, desactivarDepartamento(item.id)" color="danger">
                Desactivar
              </CButton>
            </td>
          </template>
        </CDataTable>
      </CCardBody>
    </CCard>
    </CModal>
  </div>
</template>
<script>
import { required, numeric, maxLength, requiredIf } from "../../utils/validators";
import { useVuelidate } from "@vuelidate/core";
import {
  cilMoodGood,
  cilPlus,
  cilInputPower,
  cilLightbulb,
} from "@coreui/icons";
import axios from "axios";
const fields = [
  { key: "text", label: "Pregunta", _style: "min-width:200px" },
  { key: "active", label: "Activada/Desactivada", _style: "min-width:50px" },
  { key: "show_details", label: "", _style: "width:1%", sorter: false, filter: false, },
];
const fieldsDep = [
  { key: "name", label: "Departamento", _style: "min-width:200px" },
  { key: "active", label: "Activada/Desactivada", _style: "min-width:50px" },
  { key: "show_details", label: "", _style: "width:1%", sorter: false, filter: false, },
  { key: "show_details2", label: "", _style: "width:1%", sorter: false, filter: false, },
];

export default {
  name: "AdvancedTables",
  moodGood: cilMoodGood,
  inputPower: cilInputPower,
  plusIcon: cilPlus,
  LightbulbIcon: cilLightbulb,
  data() {
    return {
      ModalQuestions: false,
      editModalQuestions: false,
      editvalModalQuestions: 0,
      addModalQuestions: false,
      ModalDepartamento: false,
      loading: true,
      question: {
        id: "",
        text: "",
        active: "",
        code: "",
        reference_type: "",
        text_antes: "",
      },
      questionType: "",
      questionsReference_Type: "",
      usuario_departamento: "",
      departamentos_lst: [],
      periodos_lst: [],
      usuarios: [],
      user: {},
      questions: [],
      no_questions: "",
      fields,
      fieldsDep,
      details: [],
      items:[],
      itemsDep:[],
      collapseDuration: 0,
      loading: true,
      calificaciones_lst: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
      ],
      sucursales_lst: [
        { value: 4, label: "AGUASCALIENTES" },
        { value: 5, label: "CHIHUAHUA" },
        { value: 6, label: "MONTERREY" },
        { value: 7, label: "JUÁREZ" },
        { value: 8, label: "TORREÓN" },
      ],
      respuestas: {},
    };
  },
  validations() {
    return {
      question: {
        text: { 
          required: requiredIf(() => this.editModalQuestions == true), 
          maxLength: maxLength(500), 
          $autoDirty: true },
        active: { 
          required: requiredIf(() => this.editModalQuestions == true), 
          maxLength: maxLength(50), 
          $autoDirty: true },
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
            "/api/evaluaciones?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);
          self.usuarios_evaluar = response.data.usuariosEvaluar;
          self.user = response.data.user;
          //
          //
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            self.errors = error.response.data.errors;
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toast.error(self.message);
          } else {
            self.$toast.error(self.$t("messages.error"));
          } 
        });
    },
    InformacionDesempeñoEditar(id) {
      let self = this;
      axios
        .get(this.$apiAdress +
              "/api/evaluaciones/desempenoEdit/" +
              id +
              "?token=" + 
              localStorage.getItem("api_token"),)
        .then(function (response) {
          console.log(response.data.questions);
          self.items = response.data.questions.map((item) => {
            return {
              ...item,
            };
          });
          console.log(response.data);
          self.loading = false;
          self.questionType = response.data.questionsType;
          self.questionsReference_Type = response.data.questionsReference_Type;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            self.errors = error.response.data.errors;
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toast.error(self.message);
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    InformacionLiderEditar(id) {
      let self = this;
      axios
        .get(this.$apiAdress +
              "/api/evaluaciones/liderEdit/" +
              id +
              "?token=" + 
              localStorage.getItem("api_token"),)
        .then(function (response) {
          console.log(response.data.questions);
          self.items = response.data.questions.map((item) => {
            return {
              ...item,
            };
          });
          console.log(response.data);
          self.loading = false;
          self.questionType = response.data.questionsType;
          self.questionsReference_Type = response.data.questionsReference_Type;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            self.errors = error.response.data.errors;
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toast.error(self.message);
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    InformacionClimaLaboralEditar(id) {
      let self = this;
      axios
        .get(this.$apiAdress +
              "/api/evaluaciones/climaLaboralEdit/" +
              id +
              "?token=" + 
              localStorage.getItem("api_token"),)
        .then(function (response) {
          console.log(response.data.questions);
          self.items = response.data.questions.map((item) => {
            return {
              ...item,
            };
          });
          console.log(response.data);
          self.loading = false;
          self.questionType = response.data.questionsType;
          self.questionsReference_Type = response.data.questionsReference_Type;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            self.errors = error.response.data.errors;
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toast.error(self.message);
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    InformacionDepartamentoEditar(id) {
      let self = this;
      axios
        .get(this.$apiAdress +
              "/api/evaluaciones/departamentoEdit/" +
              id +
              "?token=" + 
              localStorage.getItem("api_token"),)
        .then(function (response) {
          console.log(response.data.questions);
          self.items = response.data.questions.map((item) => {
            return {
              ...item,
            };
          });
          console.log(response.data);
          self.loading = false;
          self.questionType = response.data.questionsType;
          self.questionsReference_Type = response.data.questionsReference_Type;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            self.errors = error.response.data.errors;
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toast.error(self.message);
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    InformacionGrupalEditar(id) {
      let self = this;
      axios
        .get(this.$apiAdress +
              "/api/evaluaciones/grupalEdit/" +
              id +
              "?token=" + 
              localStorage.getItem("api_token"),)
        .then(function (response) {
          console.log(response.data.questions);
          self.items = response.data.questions.map((item) => {
            return {
              ...item,
            };
          });
          console.log(response.data);
          self.loading = false;
          self.questionType = response.data.questionsType;
          self.questionsReference_Type = response.data.questionsReference_Type;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            self.errors = error.response.data.errors;
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toast.error(self.message);
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    InformacionEntreLideresEditar(id) {
      let self = this;
      axios
        .get(this.$apiAdress +
              "/api/evaluaciones/entreLideresEdit/" +
              id +
              "?token=" + 
              localStorage.getItem("api_token"),)
        .then(function (response) {
          console.log(response.data.questions);
          self.items = response.data.questions.map((item) => {
            return {
              ...item,
            };
          });
          console.log(response.data);
          self.loading = false;
          self.questionType = response.data.questionsType;
          self.questionsReference_Type = response.data.questionsReference_Type;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            self.errors = error.response.data.errors;
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toast.error(self.message);
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    getQuestion($id) {
      let self = this;
      /* self.idx = idx; */
      axios
        .get(
          this.$apiAdress +
            "/api/evaluaciones/getQuestions/" +
            $id +
            "?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);
          self.question.text = response.data.question.text;
          self.question.text_antes = response.data.question.text;
          self.question.id = response.data.question.id;
          self.question.active = response.data.question.active;
          self.question.code = response.data.question.code;
          self.question.reference_type = response.data.question.reference_type;
          self.editModalQuestions = true;
          self.ModalQuestions = false;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          }else{
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    updateQuestion() {
      let self = this;
      this.v$.$touch();
      if (this.v$.$error) return;
      axios
        .post(
          this.$apiAdress +
            "/api/evaluaciones/updateQuestions" +
            "?token=" +
            localStorage.getItem("api_token"),
          {
            id: self.question.id,
            text: self.question.text,
            active: self.question.active,
            code: self.question.code,
            reference_type: self.question.reference_type,
          }
        )
        .then(function (response) {
          self.editModalQuestions = false;
          self.ModalQuestions = true;
          self.$toast.success(self.$t("messages.update"));
          self.question.id = "";
          self.question.text = "";
          self.question.active = "";
          self.question.code = "";
          self.question.reference_type = "";
        })
        .catch(function (error) {
          if (error.response && error.response.data.message == "The given data was invalid.") {
            self.message = "";
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
    addQuestion() {
      let self = this;
      this.v$.$touch();
      if (this.v$.$error) return;
      axios
        .post(
          this.$apiAdress +
            "/api/evaluaciones/addQuestions" +
            "?token=" +
            localStorage.getItem("api_token"),
          {
            text: self.question.text,
            active: self.question.active,
            questionsReference_Type: self.questionsReference_Type,
          }
        )
        .then(function (response) {
          self.addModalQuestions = false;
          self.ModalQuestions = true;
          self.$toast.success(self.$t("messages.insert"));
          self.question.id = "";
          self.question.text = "";
          self.question.active = "";
          self.question.code = "";
          self.question.reference_type = "";
        })
        .catch(function (error) {
          if (error.response && error.response.data.message == "The given data was invalid.") {
            self.message = "";
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
    getEvaluacionesDepartamento() {
      let self = this;
      axios
        .get(this.$apiAdress +
              "/api/evaluaciones/evaluacionesDepartamento" +
              "?token=" + 
              localStorage.getItem("api_token"),)
        .then(function (response) {
          console.log(response.data.departamento);
          self.itemsDep = response.data.departamento.map((item) => {
            return {
              ...item,
            };
          });
          console.log(response.data);
          self.loading = false;
          /* self.questionType = response.data.questionsType;
          self.questionsReference_Type = response.data.questionsReference_Type; */
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            self.errors = error.response.data.errors;
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toast.error(self.message);
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    async activarDepartamento($id) {
      let self = this;
      self.v$.$touch();
      console.log(self.v$);
      if (self.v$.$error) return;
      let isUpdate = await self
        .$swal({
          title: self.$t("¿Esta seguro de activar esta encuesta?"),
          text: self.$t("messages.question.status.description"),
          icon: "warning",
          showCancelButton: true,
        })
        .then((result) => {
          return result.isConfirmed;
        });
      if (isUpdate) {
        axios
          .get(this.$apiAdress + "/api/evaluaciones/activarDepartamento/" + $id  + "?token=" + localStorage.getItem("api_token"), {
          })
          .then(function (response) {
            console.log(response.data.departamento);
            self.itemsDep = response.data.departamento.map((item) => {
              return {
                ...item,
              };
            });
            console.log(response.data);
            self.loading = false;
          })
          .catch(function (error) {
            if (error.response.status === 401) {
              self.$router.push({ path: "/login" });
            } else {
              self.$toast.error(self.$t("messages.error"));
            }
            if (error.response.data.message == "The given data was invalid.") {
              self.message = "";
              self.errors = error.response.data.errors;
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + "  ";
                }
              }
              self.$toast.error(self.message);
            } else {
              self.$toast.error(self.$t("messages.error"));
            }
          });
      }
    },
    async desactivarDepartamento($id) {
      let self = this;
      self.v$.$touch();
      console.log(self.v$);
      if (self.v$.$error) return;
      let isUpdate = await self
        .$swal({
          title: self.$t("¿Esta seguro de desactivar esta encuesta?"),
          text: self.$t("messages.question.status.description"),
          icon: "warning",
          showCancelButton: true,
        })
        .then((result) => {
          return result.isConfirmed;
        });
      if (isUpdate) {
        axios
          .get(this.$apiAdress + "/api/evaluaciones/desactivarDepartamento/" + $id  + "?token=" + localStorage.getItem("api_token"), {
          })
          .then(function (response) {
            console.log(response.data.departamento);
            self.itemsDep = response.data.departamento.map((item) => {
              return {
                ...item,
              };
            });
            console.log(response.data);
            self.loading = false;
          })
          .catch(function (error) {
            if (error.response.status === 401) {
              self.$router.push({ path: "/login" });
            } else {
              self.$toast.error(self.$t("messages.error"));
            }
            if (error.response.data.message == "The given data was invalid.") {
              self.message = "";
              self.errors = error.response.data.errors;
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + "  ";
                }
              }
              self.$toast.error(self.message);
            } else {
              self.$toast.error(self.$t("messages.error"));
            }
          });
      }
    },
    closeModal() {
      let self = this;

      this.$emit("modalShow", false);
      self.$nextTick(() => {
        /* self.v$.$reset(); */
      });
    },
    selectEncuestaRadio(data, indexOf) {
      this.respuestas[indexOf] = data;
    },
    reset() {
      let self = this;
      self.$nextTick(() => {
        self.v$.$reset();
      });
      self.question = {
        id: "",
        text: "",
        active: "",
        code: "",
        reference_type: "",
        text_antes: "",
      };
    },
  },
  mounted: function () {
    this.index();
  },
};
</script>