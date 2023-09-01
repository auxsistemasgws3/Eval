<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-speedometer" size="xl" class="mt-1" />
        &nbsp;
        <span class="h4">Reportes S.O.S. </span>
      </CCardHeader>
      <CTabs :active-tab.sync="activeTab">
        
        <CTab>
          <template slot="title">
            <CIcon :name="activeTab === 1 ? 'cil-folder-open' : 'cil-folder'" /> Felicitaciones
          </template>
          <CRow>
            <CCol>&nbsp;</CCol>
          </CRow>
          
          <CCardBody>
            <CDataTable :items="items" :fields="fields" :tableFilter="{
              placeholder: $t('tables.filter.placeholder'),
              label: $t('tables.filter.label') + ':',
              lazy: true,
            }" :itemsPerPageSelect="{ label: $t('tables.pageSelect') + ':' }" :noItemsView="{
              noResults: $t('tables.itemsView.noResults'),
              noItems: $t('tables.itemsView.noItems'),
            }" :items-per-page="15" hover columnFilter sorter pagination outlined size="sm" :loading="loading">              
              <template #show_details="{ item }">
                <td class="py-2">
                  <CButton color="success" variant="outline" square size="sm"
                    @click="getReporteFelicitacion(item.id)">
                    Resultados
                  </CButton>
                </td>
              </template>
            </CDataTable>
          </CCardBody>
        </CTab>
        
        <CTab>
          <template slot="title">
            <CIcon :name="activeTab === 1 ? 'cil-folder-open' : 'cil-folder'" /> Sugerencias de Mejora
          </template>
          <CRow>
            <CCol>&nbsp;</CCol>
          </CRow>
  
          <CCardBody>
            <CDataTable :items="items2" :fields="fields" :tableFilter="{
              placeholder: $t('tables.filter.placeholder'),
              label: $t('tables.filter.label') + ':',
              lazy: true,
            }" :itemsPerPageSelect="{ label: $t('tables.pageSelect') + ':' }" :noItemsView="{
              noResults: $t('tables.itemsView.noResults'),
              noItems: $t('tables.itemsView.noItems'),
            }" :items-per-page="15" hover columnFilter sorter pagination outlined size="sm" :loading="loading">              
              <template #show_details="{ item }">
                <td class="py-2">
                  <CButton color="success" variant="outline" square size="sm"
                    @click="getReporteSugerencia(item.id)">
                    Resultados
                  </CButton>
                </td>
              </template>
            </CDataTable>
          </CCardBody>
        </CTab>
        
        <CTab>
          <template slot="title">
            <CIcon :name="activeTab === 1 ? 'cil-folder-open' : 'cil-folder'" /> Queja
          </template>
          <CRow>
            <CCol>&nbsp;</CCol>
          </CRow>

          
  
          <CCardBody>
            <CDataTable :items="items3" :fields="fields" :tableFilter="{
              placeholder: $t('tables.filter.placeholder'),
              label: $t('tables.filter.label') + ':',
              lazy: true,
            }" :itemsPerPageSelect="{ label: $t('tables.pageSelect') + ':' }" :noItemsView="{
              noResults: $t('tables.itemsView.noResults'),
              noItems: $t('tables.itemsView.noItems'),
            }" :items-per-page="15" hover columnFilter sorter pagination outlined size="sm" :loading="loading">              
              <template #show_details="{ item }">
                <td class="py-2">
                  <CButton color="success" variant="outline" square size="sm"
                    @click="getReporteQueja(item.id)">
                    Resultados
                  </CButton>
                </td>
              </template>
            </CDataTable>
          </CCardBody>
        </CTab>

      <!-- -------------------------------FELICITACIONES-------------------------------------------------- -->
        <CModal :entered="true" title="S.O.S. Felicitaciónes" size="xl" :show.sync="editModalReporteFelicitaciones">
          <div slot="footer">
            <CCol sm="6">
              <CButton
                @click=" editModalReporteFelicitaciones = false" color="success" variant="outline"> Cerrar
              </CButton>
            </CCol>
          </div>
          <h3 class="text-center">SOS - SISTEMA OPERATIVO DE SUGERENCIAS</h3>
          <p></p>
          <table class="table">
            <tbody width="100%">
              <tr>
                <th width="40%">
                  <CInput :value.sync="reportesFelicitacion.fecha_realizada"  label="Fecha:"
                    placeholder="Ingrese fecha"  disabled />
                </th>
                <th width="60%">
                  <CInput :value.sync="reportesFelicitacion.categoria" label="Categoria:" 
                    placeholder="Ingrese categoria" disabled />
                </th>
              </tr>
            </tbody>
            <tbody width="100%">
              <tr>
                <th width="40%">
                  <CInput :value.sync="reportesFelicitacion.nombre_realizo_reporte"  label="Nombre:"
                    placeholder="Ingrese Nombre"  disabled />
                </th>
                <th width="30%">
                  <CInput :value.sync="reportesFelicitacion.puesto_evaluador" label="Puesto:" 
                    placeholder="Ingrese Puesto" disabled />
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
            <CTextarea :value.sync="reportesFelicitacion.comentarios" disabled label="¿A quien va dirigida tu felicitación?"
              placeholder="¿A quien va dirigida tu felicitación?" rows="1"/>
          </CCol>
          <CCol sm="12">
            <CTextarea :value.sync="reportesFelicitacion.comentarios2" disabled label="Comentarios:"
              placeholder="¿Que deseas destacar?" rows="3" />
          </CCol>
        </CModal>

        <!-- -------------------------------SUGERENCIA DE MEJORA-------------------------------------------------- -->
        <CModal :entered="true" title="S.O.S. Sugerencia de mejora" size="xl" :show.sync="editModalReporteSugerencia">
          <div slot="footer">
            <CCol sm="6">
              <CButton
                @click="editModalReporteSugerencia = false" color="success" variant="outline"> Cerrar
              </CButton>
            </CCol>
          </div>
          <h3 class="text-center">SOS - SISTEMA OPERATIVO DE SUGERENCIAS</h3>
          <p></p>
          <table class="table">
            <tbody width="100%">
              <tr>
                <th width="40%">
                  <CInput :value.sync="reportesSugerencia.fecha_realizada"  label="Fecha:"
                    placeholder="Ingrese fecha" disabled />
                </th>
                <th width="60%">
                  <CInput :value.sync="reportesSugerencia.categoria" label="Categoria:" 
                    placeholder="Ingrese categoria" disabled />
                </th>
              </tr>
            </tbody>  
            <tbody width="100%">
              <tr>
                <th width="40%">
                  <CInput :value.sync="reportesSugerencia.nombre_realizo_reporte"  label="Nombre:"
                    placeholder="Ingrese Nombre"  disabled />
                </th>
                <th width="30%">
                  <CInput :value.sync="reportesSugerencia.puesto_evaluador" label="Puesto:" 
                    placeholder="Ingrese Puesto" disabled />
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
            <CTextarea :value.sync="reportesSugerencia.comentarios" label="Descripcion"
              placeholder="Escribe una descripcion de la situacion" disabled rows="3"/>
          </CCol>
          <CCol sm="12">
            <CTextarea :value.sync="reportesSugerencia.comentarios2" label="¿Que haria usted?"
              placeholder="Desde tu punto de vista ¿Que solucion/mejora propondrias?" disabled rows="3" />
          </CCol>
          <CCol sm="12">
            <CTextarea :value.sync="reportesSugerencia.comentarios3" label="¿Que esperas de la empresa?"
              placeholder="Desde tu punto de vista ¿Que plan de accion esperas por parte de la empresa?" disabled rows="3" />
          </CCol>
        </CModal>

      <!-- -------------------------------QUEJA-------------------------------------------------- -->
        <CModal :entered="true" title="S.O.S. Queja" size="xl" :show.sync="editModalReporteQueja">
          <div slot="footer">
            <CCol sm="6">
              <CButton
                @click="editModalReporteQueja = false" color="success" variant="outline"> Cerrar
              </CButton>
            </CCol>
          </div>
          <h3 class="text-center">SOS - SISTEMA OPERATIVO DE SUGERENCIAS</h3>
          <p></p>
          <table class="table">
            <tbody width="100%">
              <tr>
                <th width="40%">
                  <CInput :value.sync="reportesQueja.fecha_realizada" label="Fecha:" 
                    placeholder="Ingrese fecha" disabled />
                </th>
                <th width="60%">
                  <CInput :value.sync="reportesQueja.categoria" label="Categoria:" 
                    placeholder="Ingrese categoria" disabled />
                </th>
              </tr>
            </tbody>
            <tbody width="100%">
              <tr>
                <th width="40%">
                  <CInput :value.sync="reportesQueja.nombre_realizo_reporte" label="Nombre:" 
                    placeholder="Ingrese nombre"  disabled />
                </th>
                <th width="60%">
                  <CInput :value.sync="reportesQueja.puesto_evaluador" label="Puesto:" 
                    placeholder="Ingrese puesto" disabled />
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
            <CTextarea :value.sync="reportesQueja.comentarios" label="Descripcion"
              placeholder="Escribe una descripcion de la situacion" disabled rows="3"/>
          </CCol>
          <CCol sm="12">
            <CTextarea :value.sync="reportesQueja.comentarios2" label="¿Que haria usted?"
              placeholder="Desde tu punto de vista ¿Cuales son las medida que se deben tomar?" disabled rows="3" />
          </CCol>
          <CCol sm="12">
            <CTextarea :value.sync="reportesQueja.comentarios3" label="¿Que esperas de la empresa?"
              placeholder="Desde tu punto de vista ¿Que plan de accion esperas por parte de la empresa?" disabled rows="3" />
          </CCol>
        </CModal>
        
      </CTabs>
    </CCard>


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
const fields = [
  { key: "id", label: "ID", _style: "min-width:100px;" },  
  { key: "nombre_completo", label: "Nombre completo", _style: "min-width:200px" },
  { key: "sucursal_desc", label: "Sucursal", _style: "min-width:100px;" },
  {key:"created_at", label:"Fecha realizada",style:"min-width:100px;"},
  { key: "show_details", label: "", _style: "width:1%", sorter: false, filter: false, },
];

export default {
  name: "AdvancedTables",
  moodGood: cilMoodGood,
  plusIcon: cilPlus,
  data() {
    return {
      reportesFelicitacion:{
        reporte_sos:"",
        fecha_realizada:"",
        puesto_evaluador:"",
        comentarios:"",
        comentarios2:"", 
        nombre_realizo_reporte:"",
        primer_apellido_realizo_reporte:"",
        segundo_apellido_realizo_reporte:"",
        categoria:"",
      },
      reportesSugerencia:{
        reporte_sos:"",
        fecha_realizada:"",
        puesto_evaluador:"",
        comentarios:"",
        comentarios2:"", 
        comentarios3:"", 
        nombre_realizo_reporte:"",
        primer_apellido_realizo_reporte:"",
        segundo_apellido_realizo_reporte:"",
        categoria:"",
      },
      reportesQueja:{
        reporte_sos:"",
        fecha_realizada:"",
        puesto_evaluador:"",
        comentarios:"",
        comentarios2:"", 
        comentarios3:"", 
        nombre_realizo_reporte:"",
        primer_apellido_realizo_reporte:"",
        segundo_apellido_realizo_reporte:"",
        categoria:"",
      },
      editModalReporteFelicitaciones: false,
      editModalReporteSugerencia: false,
      editModalReporteQueja: false,
      activeTab: 0,
      items: [],
      items2: [],
      items3: [],
      sucursales: [],
      idx: 0,
      isTouched: false,
      loading: true,
      user: this.$options.User,
      setPassword: true,
      action: this.$t("titles.create"),
      fields,
      details: [],
      collapseDuration: 0,
      comentarios: [],
      comentarios2: [],
      comentarios3: [],
    };
  },
  methods: {
    index() {
      let self = this;
      axios
        .get(
          this.$apiAdress +
          "/api/sos/reportes?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);
          self.items = response.data.reportesFelicitacion;
          self.items2 = response.data.reportesSugerencias;
          self.items3 = response.data.reportesQuejas;
          self.sucursales = response.data.sucursal;
          self.formatData();
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    getReporteFelicitacion(id) {
      let self = this;
      console.log(id);
      axios
        .get(
          this.$apiAdress +
          "/api/sos/getReporteFelicitacion/" + id + "?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);
          self.reportesFelicitacion.reporte_sos = response.data.reporte_sos;
          self.reportesFelicitacion.fecha_realizada = response.data.fecha_realizada;
          self.reportesFelicitacion.puesto_evaluador = response.data.puesto_evaluador;
          self.reportesFelicitacion.comentarios = response.data.comentarios;
          self.reportesFelicitacion.comentarios2 = response.data.comentarios2;
          self.reportesFelicitacion.nombre_realizo_reporte = response.data.nombre_realizo_reporte;
          self.reportesFelicitacion.primer_apellido_realizo_reporte = response.data.primer_apellido_realizo_reporte;
          self.reportesFelicitacion.segundo_apellido_realizo_reporte = response.data.segundo_apellido_realizo_reporte;
          self.reportesFelicitacion.categoria = response.data.categoria;

          self.isTouched = true;
          self.isInvalid;
          self.editModalReporteFelicitaciones = true;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    getReporteSugerencia(id) {
      let self = this;
      console.log(id);
      axios
        .get(
          this.$apiAdress +
          "/api/sos/getReporteSugerencia/" + id + "?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);
          self.reportesSugerencia.reporte_sos = response.data.reporte_sos;
          self.reportesSugerencia.fecha_realizada = response.data.fecha_realizada;
          self.reportesSugerencia.puesto_evaluador = response.data.puesto_evaluador;
          self.reportesSugerencia.comentarios = response.data.comentarios;
          self.reportesSugerencia.comentarios2 = response.data.comentarios2;
          self.reportesSugerencia.comentarios3 = response.data.comentarios3;
          self.reportesSugerencia.nombre_realizo_reporte = response.data.nombre_realizo_reporte;
          self.reportesSugerencia.primer_apellido_realizo_reporte = response.data.primer_apellido_realizo_reporte;
          self.reportesSugerencia.segundo_apellido_realizo_reporte = response.data.segundo_apellido_realizo_reporte;
          self.reportesSugerencia.categoria = response.data.categoria;

          self.isTouched = true;
          self.isInvalid;
          self.editModalReporteSugerencia = true;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    getReporteQueja(id) {
      let self = this;
      console.log(id);
      axios
        .get(
          this.$apiAdress +
          "/api/sos/getReporteQueja/" + id + "?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response.data);
          self.reportesQueja.reporte_sos = response.data.reporte_sos;
          self.reportesQueja.fecha_realizada = response.data.fecha_realizada;
          self.reportesQueja.puesto_evaluador = response.data.puesto_evaluador;
          self.reportesQueja.comentarios = response.data.comentarios;
          self.reportesQueja.comentarios2 = response.data.comentarios2;
          self.reportesQueja.comentarios3 = response.data.comentarios3;
          self.reportesQueja.nombre_realizo_reporte = response.data.nombre_realizo_reporte;
          self.reportesQueja.primer_apellido_realizo_reporte = response.data.primer_apellido_realizo_reporte;
          self.reportesQueja.segundo_apellido_realizo_reporte = response.data.segundo_apellido_realizo_reporte;
          self.reportesQueja.categoria = response.data.categoria;

          self.isTouched = true;
          self.isInvalid;
          self.editModalReporteQueja = true;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    async formatData() {
      let formatItems = await this.items.map((item) => {
        return {
          ...item,
          nombre_completo:
            item.nombre_realizo_reporte +
            " " +
            item.primer_apellido_realizo_reporte +
            " " +
            (item.segundo_apellido_realizo_reporte || ""),
            sucursal_desc: item.sucursal ? item.sucursal.name : "",
            created_at:item.created_at ? moment ((item.created_at)).format("YYYY-MM-DD") : "",
        };
      });
      let formatItems2 = await this.items2.map((item) => {
        return {
          ...item,
          nombre_completo:
            item.nombre_realizo_reporte +
            " " +
            item.primer_apellido_realizo_reporte +
            " " +
            (item.segundo_apellido_realizo_reporte || ""),
            sucursal_desc: item.sucursal ? item.sucursal.name : "",
            created_at:item.created_at ? moment ((item.created_at)).format("YYYY-MM-DD") : "",
        };
      });
      let formatItems3 = await this.items3.map((item) => {
        return {
          ...item,
          nombre_completo:
            item.nombre_realizo_reporte +
            " " +
            item.primer_apellido_realizo_reporte +
            " " +
            (item.segundo_apellido_realizo_reporte || ""),
            sucursal_desc: item.sucursal ? item.sucursal.name : "",
            created_at:item.created_at ? moment ((item.created_at)).format("YYYY-MM-DD") : "",
        };
      });
      
      this.items = formatItems;
      this.items2 = formatItems2;
      this.items3 = formatItems3;
      this.loading = false;
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