<template>
  <div>
    <CCard>
      <CCardHeader>
        <CRow>
          <CCol sm="4"></CCol>
          <CCol sm="5">
            <CIcon name="cil-speedometer" size="xl" class="mt-1" />
            &nbsp;
            <span class="h4">Mejores Promedios: <b style="color:rgba(58, 121, 251, 1)">{{peridosDiferentesConsulta}}</b></span>
          </CCol>
          <CCol sm="3"></CCol>
        </CRow>
      </CCardHeader>
      <CRow>
        <CCol>&nbsp;</CCol>
      </CRow>
      <!-- <CCol sm="3">
        <CSelect
          @change="onChangePeriodo()"
          :value.sync="peridosDiferentesConsulta"
          :plain="true"
          label="Periodo:"
          :options="peridosDiferentesConsulta_lts"
          placeholder="Selecciona un periodo"
        />
      </CCol> -->
      <CCardBody>
        <CCardHeader>
          <CIcon name="cil-chevron-top" size="xl" class="mt-1" />
          &nbsp;
          <span class="h4"><b style="color:rgba(46, 184, 92, 1)">Top 10 Mejores</b> Colaboradores: Desempeño</span>
        </CCardHeader>
        &nbsp;
        <CRow class="justify-content-between">
          <CCol sm="5" lg="2" v-for="(item, idx) in Top5Colaboradores" :key="'grap' + idx">
            <CButton 
              color="warning"
              >
              &nbsp;<br><b>No.{{(idx+1)}}</b>&nbsp;
              &nbsp;<br>{{item.nombre_evaluado}}&nbsp;
              <br>
              &nbsp;<br><b>Promedio: {{item.calificacion_promedio}}</b>&nbsp;
              <br>
              <br><span v-if="item.calificacion_promedio == 100" class="h5"><b style="color:rgba(58, 121, 251, 1)">Extraordinario </b></span>
              <br><span v-if="item.calificacion_promedio < 100 && item.calificacion_promedio >= 95" class="h5"><b style="color:rgba(10, 187, 0, 1)">Excelente </b></span>
              <br><span v-if="item.calificacion_promedio < 95 && item.calificacion_promedio >= 85" class="h5"><b style="color:rgba(238, 232, 46, 1)">Notable </b></span>
              <br><span v-if="item.calificacion_promedio < 85 && item.calificacion_promedio >= 80" class="h5"><b style="color:rgba(239, 114, 21, 1)">Aceptable </b></span>
              <br><span v-if="item.calificacion_promedio < 80 && item.calificacion_promedio >= 0" class="h5"><b style="color:rgba(239, 21, 21, 1)">Insuficiente </b></span>
            </CButton>
          </CCol>
        </CRow>
        &nbsp;
        <CCardHeader>
          <CIcon name="cil-chevron-bottom" size="xl" class="mt-1" />
          &nbsp;
          <span class="h4"><b style="color:rgba(239, 21, 21, 1)">Top 10 Mas Bajos</b> Colaboradores: Desempeño</span>
        </CCardHeader>
        &nbsp;
        <CRow class="justify-content-between">
          <CCol sm="1" v-for="(item, idx) in Down10Colaboradores" :key="'grap' + idx">
            <CButton 
              color="secondary"
              >
              &nbsp;<br>{{item.nombre_evaluado}}&nbsp;
              <br>
              &nbsp;<br><b>Promedio: {{item.calificacion_promedio}}</b>&nbsp;
              <br>
              <br><span v-if="item.calificacion_promedio == 100" class="h5"><b style="color:rgba(58, 121, 251, 1)">Extraordinario </b></span>
              <br><span v-if="item.calificacion_promedio < 100 && item.calificacion_promedio >= 95" class="h5"><b style="color:rgba(10, 187, 0, 1)">Excelente </b></span>
              <br><span v-if="item.calificacion_promedio < 95 && item.calificacion_promedio >= 85" class="h5"><b style="color:rgba(238, 232, 46, 1)">Notable </b></span>
              <br><span v-if="item.calificacion_promedio < 85 && item.calificacion_promedio >= 80" class="h5"><b style="color:rgba(239, 114, 21, 1)">Aceptable </b></span>
              <br><span v-if="item.calificacion_promedio < 80 && item.calificacion_promedio >= 0" class="h5"><b style="color:rgba(239, 21, 21, 1)">Insuficiente </b></span>
            </CButton>
          </CCol>
        </CRow>
        &nbsp;
        <CCardHeader>
          <CIcon name="cil-chevron-top" size="xl" class="mt-1" />
          &nbsp;
          <span class="h4"><b style="color:rgba(46, 184, 92, 1)">Top 10 Mejores</b> Líderes</span>
        </CCardHeader>
        &nbsp;
        <CRow class="justify-content-between">
          <CCol sm="2" v-for="(item, idx) in Top3Lider" :key="'grap' + idx">
            <CButton
              size="lg"
              color="dark-dark-theme"
              >
              &nbsp;<br><b>No.{{(idx+1)}}</b>&nbsp;
              &nbsp;<br>{{item[1]}}&nbsp;
              <br>
              &nbsp;<br><b>Promedio: {{item[0]}}</b>&nbsp;
              <br>
              <br><span v-if="item[0] == 100" class="h5"><b style="color:rgba(58, 121, 251, 1)">Extraordinario </b></span>
              <br><span v-if="item[0] < 100 && item[0] >= 95" class="h5"><b style="color:rgba(10, 187, 0, 1)">Excelente </b></span>
              <br><span v-if="item[0] < 95 && item[0] >= 85" class="h5"><b style="color:rgba(238, 232, 46, 1)">Notable </b></span>
              <br><span v-if="item[0] < 85 && item[0] >= 80" class="h5"><b style="color:rgba(239, 114, 21, 1)">Aceptable </b></span>
              <br><span v-if="item[0] < 80 && item[0] >= 0" class="h5"><b style="color:rgba(239, 21, 21, 1)">Insuficiente </b></span>
            </CButton>
          </CCol>
        </CRow>
        <CCardHeader>
          <CIcon name="cil-chevron-top" size="xl" class="mt-1" />
          &nbsp;
          <span class="h4"><b style="color:rgba(46, 184, 92, 1)">Top 10 Mejores</b> Entre Líderes</span>
        </CCardHeader>
        &nbsp;
        <CRow class="justify-content-between">
          <CCol sm="2" v-for="(item, idx) in Top3EntreLider" :key="'grap' + idx">
            <CButton
              size="lg"
              color="dark-dark-theme"
              >
              &nbsp;<br><b>No.{{(idx+1)}}</b>&nbsp;
              &nbsp;<br>{{item[1]}}&nbsp;
              <br>
              &nbsp;<br><b>Promedio: {{item[0]}}</b>&nbsp;
              <br>
              <br><span v-if="item[0] == 100" class="h5"><b style="color:rgba(58, 121, 251, 1)">Extraordinario </b></span>
              <br><span v-if="item[0] < 100 && item[0] >= 95" class="h5"><b style="color:rgba(10, 187, 0, 1)">Excelente </b></span>
              <br><span v-if="item[0] < 95 && item[0] >= 85" class="h5"><b style="color:rgba(238, 232, 46, 1)">Notable </b></span>
              <br><span v-if="item[0] < 85 && item[0] >= 80" class="h5"><b style="color:rgba(239, 114, 21, 1)">Aceptable </b></span>
              <br><span v-if="item[0] < 80 && item[0] >= 0" class="h5"><b style="color:rgba(239, 21, 21, 1)">Insuficiente </b></span>
            </CButton>
          </CCol>
        </CRow>
        &nbsp;
        <CCardHeader>
          <CIcon name="cil-chevron-bottom" size="xl" class="mt-1" />
          &nbsp;
          <span class="h4"><b style="color:rgba(239, 21, 21, 1)">Top 5 Mas Bajos</b> Líderes</span>
        </CCardHeader>
        &nbsp;
        <CRow class="justify-content-between">
          <CCol sm="2" v-for="(item, idx) in Down5Lider" :key="'grap' + idx">
            <CButton
              size="lg"
              color="secondary"
              >
              &nbsp;<br>{{item[1]}}&nbsp;
              <br>
              &nbsp;<br><b>Promedio: {{item[0]}}</b>&nbsp;
              <br>
              <br><span v-if="item[0] == 100" class="h5"><b style="color:rgba(58, 121, 251, 1)">Extraordinario </b></span>
              <br><span v-if="item[0] < 100 && item[0] >= 95" class="h5"><b style="color:rgba(10, 187, 0, 1)">Excelente </b></span>
              <br><span v-if="item[0] < 95 && item[0] >= 85" class="h5"><b style="color:rgba(238, 232, 46, 1)">Notable </b></span>
              <br><span v-if="item[0] < 85 && item[0] >= 80" class="h5"><b style="color:rgba(239, 114, 21, 1)">Aceptable </b></span>
              <br><span v-if="item[0] < 80 && item[0] >= 0" class="h5"><b style="color:rgba(239, 21, 21, 1)">Insuficiente </b></span>
            </CButton>
          </CCol>
        </CRow>
        &nbsp;
        <CCardHeader>
          <CIcon name="cil-chevron-top" size="xl" class="mt-1" />
          &nbsp;
          <span class="h4"><b style="color:rgba(46, 184, 92, 1)">Top 3 Mejores</b> Departamentos</span>
        </CCardHeader>
        &nbsp;
        <CRow class="justify-content-between">
          <CCol sm="2" v-for="(item, idx) in Top3Dep" :key="'grap' + idx">
            <CButton
              size="lg"
              color="success"
              >
              &nbsp;<br><b>No.{{(idx+1)}}</b>&nbsp;
              &nbsp;<br><b class="h4">{{item[1]}}</b>&nbsp;
              <br>
              &nbsp;<br><b>Promedio: {{item[0]}}</b>&nbsp;
              <br>
              <br><span v-if="item[0] == 100" class="h5"><b style="color:rgba(58, 121, 251, 1)">Extraordinario </b></span>
              <br><span v-if="item[0] < 100 && item[0] >= 95" class="h5"><b style="color:rgba(10, 187, 0, 1)">Excelente </b></span>
              <br><span v-if="item[0] < 95 && item[0] >= 85" class="h5"><b style="color:rgba(238, 232, 46, 1)">Notable </b></span>
              <br><span v-if="item[0] < 85 && item[0] >= 80" class="h5"><b style="color:rgba(239, 114, 21, 1)">Aceptable </b></span>
              <br><span v-if="item[0] < 80 && item[0] >= 0" class="h5"><b style="color:rgba(239, 21, 21, 1)">Insuficiente </b></span>
            </CButton>
          </CCol>
        </CRow>
        &nbsp;
        <CCardHeader>
          <CIcon name="cil-chevron-bottom" size="xl" class="mt-1" />
          &nbsp;
          <span class="h4"><b style="color:rgba(239, 21, 21, 1)">Top 5 Mas Bajos</b> Departamentos</span>
        </CCardHeader>
        &nbsp;
        <CRow class="justify-content-between">
          <CCol sm="2" v-for="(item, idx) in Down5Dep" :key="'grap' + idx">
            <CButton
              size="lg"
              color="secondary"
              >
              &nbsp;<br><b class="h4">{{item[1]}}</b>&nbsp;
              <br>
              &nbsp;<br><b>Promedio: {{item[0]}}</b>&nbsp;
              <br>
              <br><span v-if="item[0] == 100" class="h5"><b style="color:rgba(58, 121, 251, 1)">Extraordinario </b></span>
              <br><span v-if="item[0] < 100 && item[0] >= 95" class="h5"><b style="color:rgba(10, 187, 0, 1)">Excelente </b></span>
              <br><span v-if="item[0] < 95 && item[0] >= 85" class="h5"><b style="color:rgba(238, 232, 46, 1)">Notable </b></span>
              <br><span v-if="item[0] < 85 && item[0] >= 80" class="h5"><b style="color:rgba(239, 114, 21, 1)">Aceptable </b></span>
              <br><span v-if="item[0] < 80 && item[0] >= 0" class="h5"><b style="color:rgba(239, 21, 21, 1)">Insuficiente </b></span>
            </CButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>
<script>
import {
  cilAddressBook,
  cilMoodGood,
  cilPlus,
  cilInputPower,
  cilLightbulb,
} from "@coreui/icons";
import axios from "axios";
import MainChartExample from "../charts/MainChartExample";
import { CChartLineSimple, CChartBarSimple } from "../charts/index.js";
import { CWidgetStatsB } from '@coreui/vue';

export default {
  name: "AdvancedTables",
  moodGood: cilMoodGood,
  inputPower: cilInputPower,
  plusIcon: cilPlus,
  LightbulbIcon: cilLightbulb,
  components: { MainChartExample, CChartLineSimple, CChartBarSimple, CWidgetStatsB,},
  data() {
    return {
      peridosDiferentesConsulta: "",
      peridosDiferentesConsulta_lts: [],
      Top5Colaboradores: [],
      Down10Colaboradores: [],
      Top3Dep: [],
      Down5Dep: [],
      Top3Lider: [],
      Top3EntreLider: [],
      Down5Lider: [],
    };
  },
  methods: {
      index() {
      let self = this;
      axios
        .get(
          this.$apiAdress +
            "/api/resultadosMejores?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);
          self.peridosDiferentesConsulta_lts = response.data.periodosDiferentes;
          self.peridosDiferentesConsulta = response.data.periodoAnterior;
          self.Top5Colaboradores = response.data.top5Desemp;
          self.Down10Colaboradores = response.data.down10Desemp;
          self.Top3Dep = response.data.Top3Dep;
          self.Down5Dep = response.data.Down5Dep;
          self.Top3Lider = response.data.Top3Lider;
          self.Top3EntreLider = response.data.Top3EntreLider;
          self.Down5Lider = response.data.Down5Lider;
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
    async onChangePeriodo() {
      this.index();
    },
  },
  mounted: function () {
    this.index();
  },
};
</script>