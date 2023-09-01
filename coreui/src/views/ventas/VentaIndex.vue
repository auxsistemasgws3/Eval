<template mode="out-in">
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-cart" size="xl" class="mt-1" />
        <span class="h4"> Canal de ventas</span>
        <div class="card-header-actions">
          <CLink :href="'/#/ventas/crear'" class="btn btn-primary btn-sm">
            <CIcon :content="$options.plusIcon" /> Agregar
          </CLink>
        </div>
      </CCardHeader>
      <CCardBody>
        <CRow v-if="user.rol_id != 8">
          <CCol sm="3">
            <CInput v-model="busNombre" label="Nombre" placeholder="Nombre" />
          </CCol>
          <CCol sm="3">
            <CSelect
              :value.sync="busTipoVenta"
              :plain="true"
              label="Canal venta"
              :options="areas_ventas"
              placeholder="Seleccione"
            />
          </CCol>
          <CCol sm="3">
            <CInput
              v-model="busOrden"
              label="Orden generada"
              placeholder="No. de contrato"
            />
          </CCol>
          <CCol sm="3">
            <CInput
              v-model="busRegistra"
              label="Usuario registra"
              placeholder="Nombre"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12" class="pb-3">
            <CInputCheckbox
              v-for="option in estatus"
              :key="option.code"
              :label="option.text"
              :custom="true"
              :addLabelClasses="'text-' + option.aux"
              name="busEstatus"
              :inline="true"
              @update:checked="selectCheckbox('busEstatus', option.code)"
              :checked.sync="fixedBusEstatus[option.code]"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="6">
            <CButton type="button" @click="buscar()" color="primary">
              Buscar</CButton
            >
            <CButton
              type="button"
              @click="limpiar()"
              variant="outline"
              color="primary"
            >
              Limpiar</CButton
            >
          </CCol>
          <CCol sm="6" class="text-md-right" v-show="false">
            <CButton type="button" @click="buscar()" color="dark">
              Exportar</CButton
            >
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard>
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
          <template #folio="{ item }">
            <td class="py-2">
              <CLink
                :href="'/#/ventas/' + item.id"
                class="btn btn-outline-primary btn-block btn-sm"
              >
                {{ item.folio }}
              </CLink>
            </td>
          </template>

          <template #monto="{ item }">
            <td>
              {{ item.monto ? "$" + item.monto + " MXN" : "" }}
            </td>
          </template>
          <template #datos_generales="{ item }">
            <td v-html="item.datos_generales_html"></td>
          </template>
          <template #total_descuento="{ item }">
            <td v-show="comisionShow">
              {{ item.Porcentaje ? item.Porcentaje + "%" : "" }}
              {{
                item.total_descuento ? "$" + item.total_descuento + " MXN" : ""
              }}
            </td>
          </template>
        </CDataTable>
      </CCardBody>
    </CCard>
  </div>
</template>
<script>
import { required, numeric, maxLength } from "../../utils/validators";
import { sameAs, not } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import {
  cilAddressBook,
  cilMoodGood,
  cilPlus,
  cilInputPower,
  cilLightbulb,
} from "@coreui/icons";
import axios from "axios";
const fields = [
  { key: "folio", label: "Folio", _style: "width:1%" },
  { key: "nombre", label: "Nombre", _style: "min-width:150px" },
  {
    key: "datos_generales",
    label: "Datos generales",
    _style: "min-width:250px",
  },
  { key: "status", label: "Estatus", _style: "min-width:10px;" },
  { key: "monto", label: "Monto" },
  { key: "total_descuento", label: "Comisión" },
  { key: "orden_no_contrato", label: "Orden generada" },
  { key: "tipoventa_text", label: "Canal venta" },
  { key: "nombre_usuario", label: "Registra" },
];

export default {
  name: "AdvancedTables",
  moodGood: cilMoodGood,
  inputPower: cilInputPower,
  plusIcon: cilPlus,
  LightbulbIcon: cilLightbulb,
  data() {
    return {
      loading: true,
      comisionShow: true,
      busNombre: "",
      busOrden: "",
      busRegistra: "",
      busTipoVenta: "",
      user: {},
      busEstatus: [],
      fixedBusEstatus: [],
      estatus: [],
      areas_ventas: [{ value: "", label: "Seleccione..." }],
      items: [],
      displayColums: "none",
      fields,
      details: [],
      collapseDuration: 0,
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
          self.estatus = response.data.estatus;
          self.user = response.data.user;
          self.areas_ventas = self.areas_ventas.concat(
            response.data.areas_ventas
          );
          let temp = false;
          let rolEstatus = [1, 2];
          for (let i = 0; i < response.data.estatus.length; i++) {
            temp = false;
            for (let j = 0; j < rolEstatus.length; j++) {
              if (response.data.estatus[i].code == rolEstatus[j]) {
                temp = true;
                self.busEstatus.push(response.data.estatus[i].code);
                break;
              }
            }
            self.fixedBusEstatus[response.data.estatus[i].code] = temp;
          }
          if (response.data.user.rol_id != 5) {
            let indexFieldVenta = self.fields.findIndex((element) => {
              if (element.key == "total_descuento") {
                element._style = "display:none";
              }
            });
            self.comisionShow = false;
          }
          self.buscar();
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          }else{
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    buscar() {
      this.loading = true;
      let self = this;
      axios
        .post(
          this.$apiAdress +
            "/api/venta/buscar?token=" +
            localStorage.getItem("api_token"),
          {
            busEstatus: self.busEstatus,
            busNombre: self.busNombre,
            busOrden: self.busOrden,
            busRegistra: self.busRegistra,
            busTipoVenta: self.busTipoVenta,
          }
        )
        .then(function (response) {
          self.items = response.data.ventas.map((item) => {
            return {
              ...item,
              nombre:
                item.nombre + " " + item.apellido1 ||
                "" + " " + item.apellido2 ||
                "",
              status: item.estatus.text,
              orden_no_contrato: item.orden ? item.orden.no_contrato : "",
              tipoventa_text: item.tipoventa ? item.tipoventa.text : "",
              nombre_usuario:
                (item.usuario ? item.usuario.name : "") +
                " " +
                (item.usuario ? item.usuario.primer_apellido || "" : "") +
                " " +
                (item.usuario ? item.usuario.segundo_apellido || "" : ""),
              datos_generales:
                item.calle +
                " #" +
                item.numero_ext +
                " " +
                item.colonia +
                " " +
                (item.municipio ? item.municipio.nombre : "") +
                " " +
                (item.estado ? item.estado.nombre : "") +
                " Tel.:" +
                item.telefono +
                " Correo:" +
                item.correo,
              datos_generales_html:
                item.calle +
                " " +
                item.numero_ext +
                " " +
                item.colonia +
                " c.p. " +
                item.cp +
                ", <br>" +
                (item.municipio ? item.municipio.nombre : "") +
                " " +
                (item.estado ? item.estado.nombre : "") +
                " <br> Tel.:" +
                item.telefono +
                " Correo:" +
                item.correo,
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
    limpiar() {
      this.busNombre = "";
      this.busOrden = "";
      this.busRegistra = "";
      this.busTipoVenta = "";
      this.busEstatus = [];
      this.items = [];
      for (let i = 0; i < this.fixedBusEstatus.length; i++) {
        this.fixedBusEstatus[i] = false;
      }
    },
    getBadge(status) {
      return status === "Active"
        ? "success"
        : status === "Inactive"
        ? "secondary"
        : status === "Pending"
        ? "warning"
        : status === "Banned"
        ? "danger"
        : "primary";
    },
    selectCheckbox(slug, code) {
      self = this;
      switch (slug) {
        case "busEstatus":
          let temp = this.busEstatus.indexOf(code);
          if (temp > -1) {
            this.busEstatus.splice(temp, 1);
            this.fixedBusEstatus[code]=false;
          } else {
             this.fixedBusEstatus[code]=true;
            this.busEstatus.push(code);
          }
          break;
      }
    },
    evenMoney(value) {
      if (value.unmasked) {
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