<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-speedometer" size="xl" class="mt-1" />
        &nbsp;
        <span class="h4">KPI's </span>
      </CCardHeader>
    </CCard>
    <div>
      <CCard>
        &nbsp;
        <H1 class="text-center">KPI's - Solicitud de personal</H1>
        &nbsp;
        <H2 class="text-center">
          En Recursos Humanos somos responsables de recibir solicitudes de personal
          por parte de otros departamentos de la empresa que desean contratar nuevos empleados.</H2>
        &nbsp;
        <H4 class="text-center">
          Las solicitudes son el punto de partida para el resto de etapas. Ellas deben ser solicitadas
          por medio de un formulario conteniendo toda la informacion necesaria para la ocupación de una nueva vacante.
        </H4>
        &nbsp;

        <CCardBody size="lg" class="mx-auto">
          <CButton class="me-md-2" style="width: 200px;" color="success" @click="ModalSolicitudPersonal = true">
            <!-- Se manda el  -->
            Solicitar personal
          </CButton>
        </CCardBody>
      </CCard>
    </div>

    <!-- -------------------------------Solicitudes de personal-------------------------------------------------- -->
    <CModal :entered="true" title="KPI's Solicitudes de personal" size="xl" :show.sync="ModalSolicitudPersonal">
      <div slot="footer">
        <CCol sm="6">
          <CButton @click="createKpi(), ModalSolicitudPersonal = false" color="success" variant="outline"> Enviar
          </CButton>
        </CCol>
      </div>
      <CForm autocomplete="on">
        <!-- ---------------SOLICITANTE------------------------- -->
        <CRow class="bg-success p-2 text-white">
          <CCol sm="12">
          <h3 class="text-center">KPI's - Solicitud de personal</h3>
          </CCol>
          <CCol sm="3">
            <CInput label="Fecha:" :value.sync="solicitante.fecha" placeholder="Ingrese fecha" disabled />
          </CCol>
          <CCol sm="5">
            <CInput label="Nombre del solicitante" :value.sync="solicitante.nombre" placeholder="Nombre del solicitante"
              disabled />
          </CCol>
          <CCol sm="4">
            <CInput label="Cargo del solicitante" :value.sync="solicitante.puesto" placeholder="Cargo del solicitante"
              disabled />
          </CCol>
          <p></p>
        </CRow>
        <!-- ---------------ESPECIFICACIONES------------------------- -->
        <CRow>
          <br />
          <CCol sm="12">
          <h3 class="text-center">Especificaciones de la Requisición</h3>
          </CCol>
          <CCol sm="3">
            <CSelect :value.sync="especificaciones.tipo" :plain="true" label="Requisición" :options="requerimientos"
              placeholder="Selecciona una opcion" />
          </CCol>
          <CCol sm="4">
            <CSelect :value.sync="especificaciones.motivo" :plain="true" label="Motivo" :options="motivo"
              placeholder="Selecciona una motivo" />
          </CCol>
          <CCol sm="5">
            <CInput label="Nombre de la persona a sustituir" :value.sync="especificaciones.personaSustituir"
              placeholder="Nombre de la persona a sustituir" />
          </CCol>
          <p></p>
        </CRow>
        <!-- ---------------DEFINICION------------------------- -->
        <CRow>
          <br />
          <CCol sm="12">
          <h3 class="text-center">Definición del Puesto</h3>
          </CCol>
          <CCol sm="4">
            <CSelect :value.sync="definicion.tipo" :plain="true" label="Tipo de puesto" :options="puesto"
              placeholder="Selecciona una opcion" />
          </CCol>
          <CCol sm="4">
            <CInput :value.sync="definicion.nombre" label="Nombre del puesto" placeholder="Nombre del puesto" />
          </CCol>
          <CCol sm="4">
            <CSelect :value.sync="definicion.departamento" :plain="true" label="Departamento del puesto"
              :options="departamentos" placeholder="Selecciona una opcion" />
          </CCol>
          <CCol sm="4">
            <CSelect :value.sync="definicion.ubicacion" :plain="true" label="Ubicacion fisica del puesto"
              :options="sucursal" placeholder="Selecciona una Sucursal" />
          </CCol>
          <CCol sm="8">
            <CInput :value.sync="definicion.horario" label="Horario de la jornada laboral"
              placeholder="Horario de la jornada laboral" />
          </CCol>
          <CCol sm="12">
            <CTextarea :value.sync="definicion.funciones" label="Funciones generales del puesto"
              placeholder="Funciones generales del puesto" rows="2" />
          </CCol>
          <p></p>
        </CRow>
        <!-- ---------------PERFIL------------------------- -->
        <CRow>
          <br />
          <CCol sm="12">
          <h3 class="text-center">Perfil Requerido (Conocimientos Generales)</h3>
          </CCol>
          <CCol sm="4">
            <CSelect :value.sync="perfil.escolaridad" :plain="true" label="Escolaridad o grado academico"
              :options="escolaridad" placeholder="Escolaridad o grado academico" />
          </CCol>
          <CCol sm="8">
            <CInput :value.sync="perfil.idiomas" label="Dominio de idiomas" placeholder="Dominio de idiomas" />
          </CCol>
          <CCol sm="12">
            <CTextarea :value.sync="perfil.equipo" label="Manejo de equipo y/o maquinaria"
              placeholder="Manejo de equipo y/o maquinaria" rows="2" />
          </CCol>
          <CCol sm="12">
            <CTextarea :value.sync="perfil.sistema" label="Manejo de sistemas y/o programas electronicos"
              placeholder="Manejo de sistemas y/o programas electronicos" rows="2" />
          </CCol>
          <CCol sm="6">
            <CInput :value.sync="perfil.experiencia" label="Experiencia" placeholder="Experiencia en funciones" />
          </CCol>
          <CCol sm="6">
            <CSelect :value.sync="perfil.sexo" :plain="true" label="Sexo" :options="sexo" placeholder="Sexo" />
          </CCol>
          <CCol sm="6">
            <CSelect :value.sync="perfil.estadoCivil" :plain="true" label="Estado civil" :options="estadoCivil"
              placeholder="Estado civil" />
          </CCol>
          <CCol sm="6">
            <CInput :value.sync="perfil.edad" label="Rango de edad" placeholder="Rango de edad" />
          </CCol>
          <p></p>
        </CRow>
        <!-- ---------------HABILIDADES------------------------- -->
        <CRow>
          <br />
          <CCol sm="12">
          <h3 class="text-center">HABILIDADES REQUERIDAS</h3>
          </CCol>
          <CCol sm="4">
            <label><b>ANALISIS</b></label>
            <CInputCheckbox id="habilidades.comprension" :checked=false label="Comprensión verbal/escrita" />
            <CInputCheckbox id="habilidades.seguimiento" :checked=false
              label="Seguimiento de instrucciones/procedimientos" />
            <CInputCheckbox id="habilidades.objetividad" :checked=false
              label="Objetividad en el manejo de información" />

          </CCol>

          <CCol sm="4">
            <label><b>ANALISIS 2</b></label>
            <CInputCheckbox id="habilidades.comprension" :checked=false label="Comprensión verbal/escrita" />
            <CInputCheckbox id="habilidades.seguimiento" :checked=false
              label="Seguimiento de instrucciones/procedimientos" />
            <CInputCheckbox id="habilidades.objetividad" :checked=false
              label="Objetividad en el manejo de información" />
          </CCol>

          <CCol sm="4">
            <label><b>ANALISIS 3</b></label>
            <CInputCheckbox id="habilidades.comprension" :checked=false label="Comprensión verbal/escrita" />
            <CInputCheckbox id="habilidades.seguimiento" :checked=false
              label="Seguimiento de instrucciones/procedimientos" />
            <CInputCheckbox id="habilidades.objetividad" :checked=false
              label="Objetividad en el manejo de información" />
          </CCol>

          <CCol sm="4">
            <label><b>ANALISIS 4</b></label>
            <CInputCheckbox id="habilidades.comprension" :checked=false label="Comprensión verbal/escrita" />
            <CInputCheckbox id="habilidades.seguimiento" :checked=false
              label="Seguimiento de instrucciones/procedimientos" />
            <CInputCheckbox id="habilidades.objetividad" :checked=false
              label="Objetividad en el manejo de información" />
          </CCol>

          <CCol sm="4">
            <label><b>ANALISIS 5</b></label>
            <CInputCheckbox id="habilidades.comprension" :checked=false label="Comprensión verbal/escrita" />
            <CInputCheckbox id="habilidades.seguimiento" :checked=false
              label="Seguimiento de instrucciones/procedimientos" />
            <CInputCheckbox id="habilidades.objetividad" :checked=false
              label="Objetividad en el manejo de información" />
          </CCol>


          <CCol sm="4">
            <label><b>LIDERAZGO</b></label>
            <CInputCheckbox id="habilidades.manejo" :checked=false label="Manejo de personal" />
            <CInputCheckbox id="habilidades.negociacion" :checked=false label="Negociación" />
            <CInputCheckbox id="habilidades.decisiones" :checked=false label="Toma de decisiones" />
            <CInputCheckbox id="habilidades.poder" :checked=false
              label="Poder personal (lograr que sucedan las cosas)" />

          </CCol>
          <CCol sm="4">
            <label><b>COMUNICACION</b></label>
            <CInputCheckbox id="habilidades.palabra" :checked=false label="Facilidad de palabra" />
            <CInputCheckbox id="habilidades.dominio" :checked=false label="Dominio de público" />
            <CInputCheckbox id="habilidades.asertividad" :checked=false label="Asertividad" />

          </CCol>
          <CCol sm="12">
          <label><b>PLANEACION / ORGANIZACION</b></label>
          </CCol>
          <CCol sm="4">
            <CInputCheckbox id="habilidades.iniciativa" :checked=false label="Iniciativa" />
            <CInputCheckbox id="habilidades.creatividad" :checked=false label="Creatividad" />
            <CInputCheckbox id="habilidades.resultados" :checked=false label="Orientado a resultados" />

          </CCol>
          <CCol sm="4">
            <CInputCheckbox id="habilidades.adaptable" :checked=false label="Adaptable a cambios" />
            <CInputCheckbox id="habilidades.logico" :checked=false
              label="Clasificación y orden lógico de información" />
            <CInputCheckbox id="habilidades.concentracion" :checked=false label="Concentración" />

          </CCol>
          <CCol sm="4">
            <CInputCheckbox id="habilidades.equipo" :checked=false label="Trabajo en equipo" />
            <CInputCheckbox id="habilidades.estres" :checked=false label="Manejo de estrés laboral" />
          </CCol>
          <p></p>
        </CRow>
        <!-- ---------------ACTITUDES------------------------- -->
        <CRow>
          <br />
          <CCol sm="12">
          <h3 class="text-center">ACTITUDES REQUERIDAS</h3>
          </CCol>
          <CCol sm="12">
          <label><b>ACTITUDES</b></label>
          </CCol>
          <CCol sm="4">
            <CInputCheckbox id="actitudes.responsable" :checked=false label="Responsable" />
            <CInputCheckbox id="actitudes.empatico" :checked=false label="Empático" />
          </CCol>
          <CCol sm="4">
            <CInputCheckbox id="actitudes.emprendedor" :checked=false label="Emprendedor" />
            <CInputCheckbox id="actitudes.colaborador" :checked=false label="Colaborador" />
          </CCol>
          <CCol sm="4">
            <CInputCheckbox id="actitudes.normas" :checked=false label="Apego a normas" />
          </CCol>
          <CCol sm="12">
            <CTextarea label="Otras habilidades o actitudes requeridas" :value.sync="actitudes.comentarios"
              placeholder="Otras habilidades o actitudes requeridas" rows="2" />
          </CCol>
          <p></p>
        </CRow>
      </CForm>
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
      ModalSolicitudPersonal: false,
      user: {},
      solicitante: {
        fecha: "",
        nombre: "",
        puesto: "",
      },
      especificaciones: {
        tipo: "",
        motivo: "",
        personaSustituir: "",
      },
      definicion: {
        tipo: "",
        nombre: "",
        departamento: "",
        ubicacion: "",
        horario: "",
        funciones: "",
      },
      perfil: {
        escolaridad: "",
        idiomas: "",
        equipo: "",
        sistema: "",
        experiencia: "",
        sexo: "",
        estadoCivil: "",
        edad: "",
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
        estres: "",
      },
      actitudes: {
        responsable: "",
        empatico: "",
        emprendedor: "",
        colaborador: "",
        normas: "",
        comentarios: "",
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
      comentarios: [],
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
          "/api/kpi/getSolicitudPersonal?token=" +
          localStorage.getItem("api_token")
        )
        .then(function (response) {
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

        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    create() {
      let self = this;
      this.v$.$touch();

      self.efectivo = document.getElementById("cash").checked;
      if (self.efectivo)
        self.efectivo = 1;
      else
        self.efectivo = 0;
      if (this.v$.$error) return;
      var aux = 0;
      (self.clientes).forEach(function (item) {
        if (self.cobro.clave_cliente == item) {
          aux = 1;
        }
      })
      axios
        .post(
          this.$apiAdress +
          "/api/cobro/create" +
          "?token=" +
          localStorage.getItem("api_token"),
          {
            folio: self.cobro.folio,
            clave_cliente: self.cobro.clave_cliente,
            cantidad: self.cobro.cantidad,
            Fecha: self.cobro.Fecha,
            efectivo: self.efectivo,
          }
        )
        .then(function (response) {
          if (response.data == 1)
            self.$toast.error(self.$t("Este cobro ya existe"));
          else {
            self.reset();
            self.$toast.success(self.$t("Agregado exitosamente"));
            self.$router.push({ path: "/cobros/" + response.data.id });
          }
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
          } else if (error.response.status === 500) {
            self.$toast.error(self.$t("Error detectado"));
            self.$router.push({ path: "/cobros" });
          } else {
            self.$toast.error(self.$t("messages.errorIN"));
          }
        });
    },
    async createKpi() {
      let self = this;
      //this.v$.$touch();
      console.log(self.v$);
      //if (self.v$.$error) return;
      self.habilidades.comprension = document.getElementById("habilidades.comprension").checked;
      if(self.habilidades.comprension)
      self.habilidades.comprension = 1;
      else
      self.habilidadescomprension = 0;

      self.habilidades.seguimiento = document.getElementById("habilidades.seguimiento").checked;
      if(self.habilidades.seguimiento)
      self.habilidades.seguimiento = 1;
      else
      self.habilidades.seguimiento = 0;

      self.habilidades.objetividad = document.getElementById("habilidades.objetividad").checked;
      if(self.habilidades.objetividad)
      self.habilidades.objetividad = 1;
      else
      self.habilidades.objetividad = 0;

      self.habilidades.manejo = document.getElementById("habilidades.manejo").checked;
      if(self.habilidades.manejo)
      self.habilidades.manejo = 1;
      else
      self.habilidades.manejo = 0;

      self.habilidades.negociacion = document.getElementById("habilidades.negociacion").checked;
      if(self.habilidades.negociacion)
      self.habilidades.negociacion = 1;
      else
      self.habilidades.negociacion = 0;

      self.habilidades.decisiones = document.getElementById("habilidades.decisiones").checked;
      if(self.habilidades.decisiones)
      self.habilidades.decisiones = 1;
      else
      self.habilidades.decisiones = 0;

      self.habilidades.poder = document.getElementById("habilidades.poder").checked;
      if(self.habilidades.poder)
      self.habilidades.poder = 1;
      else
      self.habilidades.poder = 0;

      self.habilidades.palabra = document.getElementById("habilidades.palabra").checked;
      if(self.habilidades.palabra)
      self.habilidades.palabra = 1;
      else
      self.habilidades.palabra = 0;

      self.habilidades.dominio = document.getElementById("habilidades.dominio").checked;
      if(self.habilidades.dominio)
      self.habilidades.dominio = 1;
      else
      self.habilidades.dominio = 0;

      self.habilidades.asertividad = document.getElementById("habilidades.asertividad").checked;
      if(self.habilidades.asertividad)
      self.habilidades.asertividad = 1;
      else
      self.habilidades.asertividad = 0;

      self.habilidades.iniciativa = document.getElementById("habilidades.iniciativa").checked;
      if(self.habilidades.iniciativa)
      self.habilidades.iniciativa = 1;
      else
      self.habilidades.iniciativa = 0;

      self.habilidades.creatividad = document.getElementById("habilidades.creatividad").checked;
      if(self.habilidades.creatividad)
      self.habilidades.creatividad = 1;
      else
      self.habilidades.creatividad = 0;

      self.habilidades.resultados = document.getElementById("habilidades.resultados").checked;
      if(self.habilidades.resultados)
      self.habilidades.resultados = 1;
      else
      self.habilidades.resultados = 0;

      self.habilidades.adaptable = document.getElementById("habilidades.adaptable").checked;
      if(self.habilidades.adaptable)
      self.habilidades.adaptable = 1;
      else
      self.habilidades.adaptable = 0;

      self.habilidades.logico = document.getElementById("habilidades.logico").checked;
      if(self.habilidades.logico)
      self.habilidades.logico = 1;
      else
      self.habilidades.logico = 0;

      self.habilidades.concentracion = document.getElementById("habilidades.concentracion").checked;
      if(self.habilidades.concentracion)
      self.habilidades.concentracion = 1;
      else
      self.habilidades.concentracion = 0;

      self.habilidades.equipo = document.getElementById("habilidades.equipo").checked;
      if(self.habilidades.equipo)
      self.habilidades.equipo = 1;
      else
      self.habilidades.equipo = 0;

      self.habilidades.estres = document.getElementById("habilidades.estres").checked;
      if(self.habilidades.estres)
      self.habilidades.estres = 1;
      else
      self.habilidades.estres = 0;

      self.actitudes.responsable = document.getElementById("actitudes.responsable").checked;
      if(self.actitudes.responsable)
      self.actitudes.responsable = 1;
      else
      self.actitudes.responsable = 0;

      self.actitudes.empatico = document.getElementById("actitudes.empatico").checked;
      if(self.actitudes.empatico)
      self.actitudes.empatico = 1;
      else
      self.actitudes.empatico = 0;

      self.actitudes.emprendedor = document.getElementById("actitudes.emprendedor").checked;
      if(self.actitudes.emprendedor)
      self.actitudes.emprendedor = 1;
      else
      self.actitudes.emprendedor = 0;

      self.actitudes.colaborador = document.getElementById("actitudes.colaborador").checked;
      if(self.actitudes.colaborador)
      self.actitudes.colaborador = 1;
      else
      self.actitudes.colaborador = 0;

      self.actitudes.normas = document.getElementById("actitudes.normas").checked;
      if(self.actitudes.normas)
      self.actitudes.normas = 1;
      else
      self.actitudes.normas = 0;

      let isUpdate = await self
        .$swal({
          title: self.$t("¿Esta seguro de enviar esta solicitud?"),
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
            "/api/kpi/createKpi" +
            "?token=" +
            localStorage.getItem("api_token"), {
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
            actitudescomentarios: self.actitudes.comentarios,

          })
          .then(function (response) {
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
          })
          .catch(function (error) {
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
              self.$router.push({ path: "/kpi/solicitudKpi" });
              self.$toast.error(self.$t("messages.error"));
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