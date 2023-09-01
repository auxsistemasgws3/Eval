<template>
  <div>
    <CCard>
      <CCardHeader>
        <div class="float-left">
          <CIcon :content="$options.cilIndustry" size="xl" class="mt-1"/> <span class="h4">Reservar sala</span>
          <br>
          <br>
          <h5>
            Salas disponibles:
            &nbsp;
        <span style="background-color: #58ae0c; color: #ffffff;" class="badge badge-pill">Sala 1</span>
            &nbsp;
        <span  style="background-color: #0062c5; color: #ffffff;" class="badge badge-pill badge-success">Sala 2</span>
        &nbsp;</h5>
        </div>
        <div class="float-right">
        <CButton color="primary" variant="outline" @click="addEventoModal = true">Agregar Reserva</CButton>
        <CButton v-if="user.rol_id == 5 || user.rol_id == 11" color="danger" variant="outline" @click="eliminar()">Eliminar Reservas</CButton>
        </div>
      </CCardHeader>
      <CCardBody>
      <Fullcalendar v-if="user.rol_id == 5 || user.rol_id == 11" @dateclick="dateClick" :options="calendarOptions"/>
      <Fullcalendar v-else @dateclick="dateClick" :options="calendarOptionsN"/>
      </CCardBody>
    </CCard>

    <CModal
      :entered="true" 
      title="Nueva Reserva"
      :show.sync="addEventoModal"
      size="xl"
    >
    <div slot="footer"> 
    </div>
    <div>
      <CCard>
        <CCardHeader>
          <CIcon name="cil-calendar" size="lg" class="mb-1" /> Reservar
        </CCardHeader>
        <CCardBody>
          <CRow>
            <!-- <CCol sm="5">
              <CInput 
                @change="onChangeDiasE()"
                :value.sync="newEvent.dias_totales" 
                label="Cantidad de reservas" 
                placeholder="Reservas"  
                type="number"
                :disabled="ban"
              />
            </CCol> -->
            <CCol sm="5">
              <CSelect 
              :value.sync="sala"
              :plain="true"
              label="Sala a Reservar"
              placeholder="Seleccione"
              :options="salas"
              :disabled="ban"
            />
            </CCol>
          </CRow>
          <CRow>
            <CCol sm="2">
            </CCol>
          </CRow>
          <CButton v-if="!ban" @click="calcularDias()" class="text-md-right" color="warning" variant="outline"> Pasar al paso 2</CButton>
        </CCardBody>
      </CCard>
          <CCard v-if="ban">
            <CCardBody>
              <CRow>
                <CCol sm="2">
                  <b></b> 
                </CCol>
                <CCol sm="4">
                  <b>Fechas:</b> 
                </CCol>
                <CCol sm="2">
                  <b>Hora Inicio:</b>
                </CCol>
                <CCol sm="2">
                  <b>Hora Fin:</b>
                </CCol>
                <CCol sm="1">
                  <b></b> 
                </CCol>
              </CRow>
              <br>
              <CRow v-for="(item, idx) in diasEvento" :key="'grap' + idx">
                <CCol sm="2">
                </CCol>
                <CCol sm="4">
                  <CInput 
                    :value.sync="diasEvento[idx]" 
                    placeholder="Agrege fecha final"
                    type="date"
                  />
                </CCol>
                <CCol sm="2">
                  <input type="time" v-model="horasInicio[idx]" />
                </CCol>
                <CCol sm="2">
                  <input type="time" v-model="horasFin[idx]" />
                </CCol>
                <CCol sm="1"> 
                </CCol>
              </CRow>
              <br>
              <CRow>
                <CCol sm="1">
                  <CButton @click="verificarDias()" class="text-md-right" color="info" variant="outline"> Reservar </CButton>
                </CCol>
                <CCol sm="3">
                  <CButton @click="ban = !ban" class="text-md-right" color="warning" variant="outline"> Volver al paso 1 </CButton>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </div>
        <CCard v-if="noConflictos != 0 && mostrarConflictos">
          <CCardHeader>
            <CIcon name="cil-warning" size="lg" class="mb-1" /> Fechas en conflicto: <font size="4" color="#FF1C1C"><b>{{noConflictos}}</b></font>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="3">
                <b>Evento</b>
              </CCol>
              <CCol sm="2">
                <b>Fecha inicio</b>
              </CCol>
              <CCol sm="2">
                <b>Fecha Fin</b>
              </CCol>
            </CRow>
            <br>
            <CRow v-for="(item, idx) in proyectosConflicto" :key="'grap' + idx">
              <CCol sm="3">
                {{item.titulo}}
              </CCol>
              <CCol sm="2">
                {{item.fecha_inicio}}
              </CCol>
              <CCol sm="2">
                {{item.fecha_fin}}
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
    </CModal>

    <CModal
      :entered="true" 
      title="Eliminar Reserva"
      :show.sync="eliminarModal"
      size="xl"
    >
    <div slot="footer"> 
    </div>
      <CCard>
        <CCardHeader>
         <b>Reservas Actuales</b>
        </CCardHeader>
        <CCardBody>
          <CDataTable
          :items="items"
          :fields="fields"
          :tableFilter="{
            placeholder: $t('tables.filter.placeholder'),
            label: $t('tables.filter.label') + ':',
            lazy: true,
          }"
          :itemsPerPageSelect="{ label: $t('tables.pageSelect') + ':' }"
          :noItemsView="{
            noResults: $t('tables.itemsView.noResults'),
            noItems: $t('tables.itemsView.noItems'),
          }"
          :items-per-page="15"
          hover
          columnFilter
          sorter
          pagination
          outlined
          size="sm"
          :loading="loading"
        >
           <template #Accion="{ item }">
            <td>
              <CButton @click="elim(item.id,item.titulo,item.Fecha)" class="btn btn-outline-danger btn-block btn-sm">
                Eliminar
              </CButton>
            </td>
           </template>
        </CDataTable>
        <CRow>
          <CCol sm="6" v-for="(item, idx) in reservas" :key="'res' + idx">
            <CInput
              :label="item.titulo" 
              :value="'De: '+item.fecha_inicio+' Hasta: '+item.fecha_fin"
              disabled="true"
            />
          </CCol>
        </CRow>
        </CCardBody>
      </CCard>
    </CModal>
  </div>
</template>

<script>
import {
  cilPlus,
  cilFolder,
  cilFile,
  cilLevelUp,
  cilPencil,
  cilIndustry,
  cilBuilding
} from "@coreui/icons";
import { required, numeric, maxLength } from "../../utils/validators";
import { useVuelidate } from "@vuelidate/core";
import Fullcalendar from '@fullcalendar/vue';
import daygrid from '@fullcalendar/daygrid';
import interactionPlugin, { ThirdPartyDraggable } from '@fullcalendar/interaction';
import timeGrid from '@fullcalendar/timegrid';
import axios from "axios";
import { CButton } from "@coreui/vue";
const fields = [
  { key: "titulo", label: "Reserva", _style: "width:15%" },
  { key: "Fecha", label: "Fecha", _style: "width:15%" },
  { key: "Accion", label: "Eliminar", _style: "width:8%" },
];

export default {
  name: "Utilidades",
  plusIcon: cilPlus,
  cilIndustry: cilBuilding,
  fileIcon: cilFile,
  levelUpIcon: cilLevelUp,
  edit: cilPencil,
  components: { Fullcalendar, CButton },
  data() {
    return {
      sala:"",
      mensajeConflicto:"",
      Destatus: [],
      tcontrato:[],
      user:[],
      estatus:"",
      contrato:"",
      referencia:"",
      proyectosConflicto:[],
      objetos:[],
      fields,
      ban:false,
      items:[],
      diasEvento: [],
      horasInicio: {},
      horasFin: {},
      noConflictos: '',
      mostrarConflictos: false,
      calendarioModal: false,
      addEventoModal: false,
      eliminarModal:false,
      loading:false,
      dictionari:false,
      habilitar: true,
      reservas:[],
      actual:"",
      salas:[ 
        { value: 1, label: "Sala 1" },
        { value: 2, label: "Sala 2" },
      ],
      dictionary:{
        code:"",
        text:"",
        aux:"",
        next:"",
        sort:"",
        active:"",
        aux2:"",
      },
      newEvent:{
        titulo: '',
        fecha_inicio: '',
        hora_inicio: '',
        dias_totales: '',
        cuadrilla: '',
      },
      calendarOptions: {
        plugins : [daygrid, interactionPlugin, timeGrid],
        initialView: 'dayGridWeek',
        footerToolbar: true,
        buttonText: {
          today:    'Día de Hoy',
          month:    'Mes',
          week:     'Semana',
          day:      'Dia',
          list:     'Lista'
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
          events: '',         
      },
      calendarOptionsN: {
        plugins : [daygrid, interactionPlugin, timeGrid],
        initialView: 'dayGridWeek',
        footerToolbar: true,
        buttonText: {
          today:    'Día de Hoy',
          month:    'Mes',
          week:     'Semana',
          day:      'Dia',
          list:     'Lista'
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
          events: '',         
      }
    };
  },
  validations() {

  },
  setup() {
    return {
      v$: useVuelidate({ $stopPropagation: true }),
    };
  },
  methods: {
    index() {
      let self = this;
      axios
        .get(
          this.$apiAdress +
            "/api/reserva?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          self.user = response.data.user;
          if(self.user.rol_id == 5 || self.user.rol_id == 11){
            self.calendarOptions.events = response.data.eventos;
          }else{
            self.calendarOptionsN.events = response.data.eventos;
          }
         self.objetos = response.data.reference;
        })
        .catch(function (error) {
          self.$toast.error(self.$t("messages.error"));
        });
    },
    async calcularDias(){
      let self = this;
      var fecha = new Date();
      var comprobar = 1;
      fecha = fecha.toLocaleDateString();
      if(self.sala == ""){
      comprobar = 0;
      }
      if(comprobar == 1){
        axios
        .post(this.$apiAdress + "/api/reserva/calcularDias" + "?token=" + localStorage.getItem("api_token"), {
         fecha_inicio: fecha,
         dias_totales: 1,
        })
        .then(function (response) {
          let data = response.data;
          self.diasEvento =  data.diasEventos;
          self.ban = true;
         // self.rangoEvento =  data.rangoEvento;

          for(let i = 0; i < self.diasEvento.length; i++){
            self.horasInicio[i] = "08:00";
            self.horasFin[i] = "17:30";
          }
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          self.$toast.error(self.$t("messages.error"));
        });
      }else{
      if(self.sala == ""){
        self.$toast.error(self.$t("Llenar campo Sala a reservar"));
      }
      }
    },
    async verificarDias(){
      let self = this;
      let isUpdate = await self
        .$swal({
          title: self.$t("¿Seguro que quieres reservar la sala?"),
          text: self.$t("Fechas a reservar: "+self.diasEvento),
          icon: "warning",
          showCancelButton: true,
        })
        .then((result) => {
          return result.isConfirmed;
        });
      if (isUpdate) {
      axios
        .post(this.$apiAdress + "/api/reserva/verificarDias" + "?token=" + localStorage.getItem("api_token"), {
          diasEvento: self.diasEvento,
          horasinicio: self.horasInicio,
          horasfin: self.horasFin,
          dias_totales: 1,
          sala:self.sala,
        })
        .then(function (response) {
           let data = response.data;
           self.proyectosConflicto = null;
           console.log(data.merge);
           self.proyectosConflicto = data.merge;
           self.mensajeConflicto = data.mensaje;
           self.noConflictos = data.sumaConflictos;
           self.mostrarConflictos = true;
           if(self.noConflictos != 0){
            self.$toast.error(self.$t(self.mensajeConflicto));
           }else{
            self.$toast.success(self.$t(self.mensajeConflicto));
            location.reload();
           }
          // console.log(data);
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          self.$toast.error(self.$t("messages.error"));
        });
      }
    },
    async elim(id,titulo,fecha){
      let self = this;
      let isUpdate = await self
        .$swal({
          title: self.$t("¿Seguro que quieres eliminar la reserva?"),
          text: self.$t(titulo+" "+fecha),
          icon: "warning",
          showCancelButton: true,
        })
        .then((result) => {
          return result.isConfirmed;
        });
      if (isUpdate) {
      axios
        .post(this.$apiAdress + "/api/reserva/eliminarR" + "?token=" + localStorage.getItem("api_token"), {
          id: id,
        })
        .then(function (response) {
            self.$toast.success(self.$t("Reserva Eliminada"));
            location.reload();
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          self.$toast.error(self.$t("messages.error"));
        });
      }
    },
    async setModalEvent(obj){
      let self = this;

      let dateAndTime = obj.dateStr.split("T");

      let dateFormat = dateAndTime[0].split("-"); 

      this.newEvent.hora_fin = "17:30:00";
      this.newEvent.titulo = "Servicio ";
      this.newEvent.fecha_inicio = dateFormat[2]+"/"+dateFormat[1]+"/"+dateFormat[0];
      // this.ticket.fecha_instalacion = this.newEvent.fecha_inicio;
      // this.ticket.fecha_instalacion = self.ticket.fecha_instalacion
      //       ? moment(String(self.ticket.fecha_instalacion)).format("YYYY-MM-DD")
      //       : "";
      if(dateAndTime[1] != null){
        this.newEvent.hora_inicio = dateAndTime[1].substr(0,8);
      }else{
        this.newEvent.hora_inicio = "08:00:00";
      }
      
    },
    async onChangeDiasE() {
      this.mostrarConflictos = false;
      this.rangoEvento = '';
    },
    async eliminar() {
      let self = this;
      axios
      .get(
          this.$apiAdress +
            "/api/reserva/consultar?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          self.items = response.data.eventosE.map((item) => {
            return {
              ...item,
              Fecha:"Del: "+moment(String(item.fecha_inicio)).format("DD/MM/YYYY HH:mm")+' Hasta el: '+moment(String(item.fecha_fin)).format("DD/MM/YYYY HH:mm"),
            };
          });
          self.eliminarModal = true;
          // self.reservas = response.data.eventosE;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          self.$toast.error(self.$t("messages.error"));
        });
    },
    closeModal(status, evt, accept) {
      let self = this;
      self.action = self.$t("titles.create");
      self.$nextTick(() => {
        //self.v$.$reset();
      });
      self.editModal = false;
      self.editModal_Encender_CRD = false;
      self.editModal_cancelado = false;
      self.editModal_pausado = false;
      self.calendarioModal = false;
      self.addEventoModal = false;
      self.onChangeDiasE();
    },
    dateClick(arg) {
      let self = this;
      console.log(arg);
      axios
      .get(
          this.$apiAdress +
            "/api/reserva/consultar/"+arg.dateStr+"?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          self.items = response.data.eventosE.map((item) => {
            return {
              ...item,
              Fecha:"Del: "+moment(String(item.fecha_inicio)).format("DD/MM/YYYY HH:mm")+' Hasta el: '+moment(String(item.fecha_fin)).format("DD/MM/YYYY HH:mm"),
            };
          });
          self.eliminarModal = true;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
          self.$toast.error(self.$t("messages.error"));
        });
    },
}, mounted: function () {
    this.index();
  },
};
</script>
