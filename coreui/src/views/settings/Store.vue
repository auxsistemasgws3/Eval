<template>
  <div>
    <CCard>
      <CCardHeader> <CIcon :content="$options.cilIndustry" size="xl" class="mt-1"/> 
        <span class="h4">Sucursales </span>
         <div class="card-header-actions">
              <CButton @click="editModal = true" color="primary" size="sm" block>
              <CIcon :content="$options.plusIcon" /> Agregar
            </CButton>
            </div>
      </CCardHeader>
      <CCardBody>
        <CRow class="justify-content-between">
          <CCol md="6" v-for="(item, idx) in items" :key="idx" class="mb-3">
            <CCard
              :accent-color="item.color"
              :borderColor="item.color"
              class="h-100"
            >
              <CCardHeader>
                <CButton
                  :color="item.color"
                  @click="getStore(item.id, idx)"
                  size="sm"
                >
                  <CIcon :content="$options.edit" />
                </CButton>
                <CSwitch
                  @update:checked="
                    (val) => (!val ? remove(item.id, idx) : (item.active = 1))
                  "
                  class="float-right"
                  shape="pill"
                  variant="3d"
                  :color="item.color"
                  data-on="On"
                  data-off="Off"
                  :checked="item.active == 1 ? true : false"
                />
              </CCardHeader>
              <CCardBody>
                <h3>{{ item.code + " - " + item.name }}</h3>
                <p>
                  {{
                    (item.street_address || "") +
                    " " +
                    (item.number_address || "") +
                    " " +
                    (item.colony_address || "") +
                    " C.P. " +
                    item.cp_address +
                    " " +
                    item.city.name
                  }}
                </p>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CModal
      :centered="true"
      :title="action + 'sucursal'"
      size="lg"
      :show.sync="editModal"
      @update:show="closeModal"
      :color="modalColor"
    >
      <CRow>
        <CCol sm="3">
          <CInput
            v-model="v$.store.code.$model"
            label="Clave"
            :invalid-feedback="
              v$.store.code.$error ? v$.store.code.$errors[0].$message : ''
            "
            :is-valid="v$.store.code.$dirty ? !v$.store.code.$invalid : null"
          />
        </CCol>
        <CCol sm="4">
          <CInput
            v-model="v$.store.name.$model"
            label="Nombre"
            placeholder="Nombre"
            :invalid-feedback="
              v$.store.name.$error ? v$.store.name.$errors[0].$message : ''
            "
            :is-valid="v$.store.name.$dirty ? !v$.store.name.$invalid : null"
          />
        </CCol>
        <CCol sm="5">
          <CInput
            v-model="v$.store.street_address.$model"
            label="Calle"
            placeholder="Calle"
            :invalid-feedback="
              v$.store.street_address.$error
                ? v$.store.street_address.$errors[0].$message
                : ''
            "
            :is-valid="
              v$.store.street_address.$dirty
                ? !v$.store.street_address.$invalid
                : null
            "
          />
        </CCol>
        <CCol sm="3">
          <CInput
            v-model="v$.store.number_address.$model"
            label="Número"
            placeholder="Número"
            :invalid-feedback="
              v$.store.number_address.$error
                ? v$.store.number_address.$errors[0].$message
                : ''
            "
            :is-valid="
              v$.store.number_address.$dirty
                ? !v$.store.number_address.$invalid
                : null
            "
          />
        </CCol>
        <CCol sm="4">
          <CInput
            v-model="v$.store.colony_address.$model"
            label="Colonia"
            placeholder="Colonia"
            :invalid-feedback="
              v$.store.colony_address.$error
                ? v$.store.colony_address.$errors[0].$message
                : ''
            "
            :is-valid="
              v$.store.colony_address.$dirty
                ? !v$.store.colony_address.$invalid
                : null
            "
          />
        </CCol>
        <CCol sm="5">
          <CSelect
            :value.sync="store.city_id"
            :plain="true"
            label="Ciudad"
            :options="cities"
            placeholder="Selecciona una ciudad"
            :invalid-feedback="
              v$.store.city_id.$error
                ? v$.store.city_id.$errors[0].$message
                : ''
            "
            :is-valid="
              v$.store.city_id.$dirty ? !v$.store.city_id.$invalid : null
            "
          />
        </CCol>
        <CCol sm="3">
          <CInput
            v-model="v$.store.cp_address.$model"
            label="Código postal"
            placeholder="Código postal"
            :invalid-feedback="
              v$.store.cp_address.$error
                ? v$.store.cp_address.$errors[0].$message
                : ''
            "
            :is-valid="
              v$.store.cp_address.$dirty ? !v$.store.cp_address.$invalid : null
            "
          />
        </CCol>

        <CCol sm="4">
          <CSelect
            :value.sync="store.color"
            :plain="true"
            label="Color"
            :options="colors"
            placeholder="Selecciona un color"
            :invalid-feedback="
              v$.store.color.$error ? v$.store.color.$errors[0].$message : ''
            "
            :is-valid="v$.store.color.$dirty ? !v$.store.color.$invalid : null"
          />
        </CCol>
      </CRow>
      <div slot="footer">
        <CButton @click="closeModal()" color="danger" variant="outline">
          Cerrar
        </CButton>
        <CButton @click="update()" :color="modalColor" v-if="store.id">
          Guardar
        </CButton>
        <CButton @click="create()" :color="modalColor" v-else>
          Guardar
        </CButton>
      </div>
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
  cilIndustry
} from "@coreui/icons";
import { required, numeric, maxLength } from "../../utils/validators";
import { useVuelidate } from "@vuelidate/core";
import axios from "axios";
export default {
  name: "Store",
  plusIcon: cilPlus,
  cilIndustry: cilIndustry,
  fileIcon: cilFile,
  levelUpIcon: cilLevelUp,
  edit: cilPencil,
  Store: {
    id: "",
    name: "",
    code: "",
    street_address: "",
    number_address: "",
    colony_address: "",
    city_id: "",
    color: "",
    cp_address: "",
  },
  data() {
    return {
      editModal: false,
      modalColor: "dark",
      items: [],
      cities: [],
      idx: 0,
      action: this.$t("titles.create"),
      colors: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "dark",
        "light",
      ],
      errors: [],
      store: this.$options.Store,
      message: null,
    };
  },
  validations() {
    return {
      store: {
        name: { required, maxLength: maxLength(30), $autoDirty: true },
        code: { required, maxLength: maxLength(6), $autoDirty: true },
        street_address: { maxLength: maxLength(50), $autoDirty: true },
        number_address: { maxLength: maxLength(15), $autoDirty: true },
        colony_address: { maxLength: maxLength(50), $autoDirty: true },
        cp_address: {
          maxLength: maxLength(6),
          required,
          numeric,
          $autoDirty: true,
        },
        city_id: { required, $autoDirty: true },
        color: { required, $autoDirty: true },
      },
    };
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
            "/api/store?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          self.items = response.data.stores;
          self.cities = response.data.cities;
        })
        .catch(function (error) {
          self.$toast.error(self.$t("messages.error"));
          self.$router.push({ path: "/dashboard" });
        });
    },
    getStore($id, idx) {
      let self = this;
      self.idx = idx;
      axios
        .get(
          this.$apiAdress +
            "/api/store/" +
            $id +
            "?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          self.action = self.$t("titles.update");
          self.editModal = true;
          self.store = response.data;
          // self.v$.$model =response.data;
          self.store.id = $id;
          self.modalColor = response.data.color;
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
      this.isInvalid;
      if (this.v$.$error) return;
      axios
        .post(
          this.$apiAdress +
            "/api/store/create" +
            "?token=" +
            localStorage.getItem("api_token"),
          {
            name: self.store.name,
            code: self.store.code,
            street_address: self.store.street_address,
            number_address: self.store.number_address,
            colony_address: self.store.colony_address,
            cp_address: self.store.cp_address,
            city_id: self.store.city_id,
            color: self.store.color,
          }
        )
        .then(function (response) {
          let data = response.data;
          self.items.push(data);
          sel.editModal = false;
          self.$toast.success(self.$t("messages.success"));
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
    update() {
      let self = this;
      this.v$.$touch();
      if (this.v$.$error) return;
      axios
        .post(
          this.$apiAdress +
            "/api/store/update" +
            "?token=" +
            localStorage.getItem("api_token"),
          {
            name: self.store.name,
            code: self.store.code,
            street_address: self.store.street_address,
            number_address: self.store.number_address,
            colony_address: self.store.colony_address,
            cp_address: self.store.cp_address,
            city_id: self.store.city_id,
            color: self.store.color,
            id: self.store.id,
          }
        )
        .then(function (response) {
          self.items[self.idx] = self.store;
          self.items[self.idx].city = response.data.city;
          self.editModal = false;
          self.$toast.success(self.$t("messages.update"));
        })
        .catch(function (error) {
          if ( error.response &&  error.response.data.message == "The given data was invalid." ) {
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
    async remove($id, idx) {
      let self = this;
      self.items[idx].active = self.items[idx].active ? 0 : 1;
      let isDelete = await self
        .$swal({
          title: self.$t("messages.question.delete.title"),
          text: self.$t("messages.question.delete.description"),
          icon: "warning",
          showCancelButton: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            self.items[idx].active = 0;
            return false;
          } else {
            self.items[idx].active = 1;
            return true;
          }
        });
      if (!isDelete) {
        axios
          .get(
            this.$apiAdress +
              "/api/store/" +
              $id +
              "/delete?token=" +
              localStorage.getItem("api_token")
          )
          .then(function (response) {
            if (response.data.status) {
              self.items.splice(idx, 1);
              self.$toast.success(self.$t("messages.success"));
            } else self.$toast.error(self.$t("messages.error"));
          })
          .catch(function (error) {
            if (error.response.status === 401) {
              self.$router.push({ path: "/login" });
            }else{
              self.$toast.error(self.$t("messages.error"));
            }
          });
      }
      return isDelete;
    },
    closeModal(status, evt, accept) {
      let self = this;
      self.action = self.$t("titles.create");
      self.modalColor = "dark";
      self.$nextTick(() => {
        self.v$.$reset();
      });
      self.editModal = false;
      self.store = self.$options.Store;
    },
  },
  mounted: function () {
    this.index();
  },
};
</script>
