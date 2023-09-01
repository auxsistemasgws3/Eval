<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-chat-bubble" size="xl" class="mt-1" />
        <span class="h4">Comentarios </span>
      </CCardHeader>
      <CCardBody>
        <div class="comentarios" ref="scrollComentarios" id="scrollComentarios">
          <div v-for="(item, index) in comentarios" :key="item.i">
            <div class="row align-items-center" v-if="item.usuario.id == user.id">
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
                <img src="img/avatars/144.webp" onerror="onerror:this.src='img/avatars/default.png'" class="c-avatar-img" />
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
          <CRow class="align-items-center">
            <CCol md="10">
              <CTextarea v-model="comentario" placeholder="Comentario..." width="100%" rows="3" />
            </CCol>
            <CCol md="2" class="pl-md-0">
              <CButton @click="addComentario()" color="primary" block>
                <CIcon name="cil-paper-plane" size="xl" class="mt-1" />
              </CButton>
            </CCol>
          </CRow>
        </div>
      </CCardBody>
    </CCard>
  </div>
</template>
<script>
import axios from "axios";
import { useVuelidate } from "@vuelidate/core";
import { required, numeric, maxLength } from "../../utils/validators";
import { integer, requiredIf } from "@vuelidate/validators";

export default {
  name: "Comments",
  props: {
    ordenId: {
      type: Number,
    },
    ordenEstatus: {
      type: Number,
    },
    commentType: {
      type: String,
    },
    user: {
      type: Object,
    },
  },
  data() {
    return {
      loading: true,
      comentario: "",
      comentarios: [],
    };
  },
  methods: {
    index() {
      let self = this;
      axios
        .get(
          this.$apiAdress +
            "/api/" +
            self.commentType +
            "/comentarios/" +
            self.$route.params.id +
            "?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          self.comentarios = response.data.map((item) => {
            return {
              ...item,
              fecha: item.created_at ? moment(String(item.created_at)).format("DD/MM/YYYY hh:mm a") : "",
            };
          });
          self.loading = false;
          self.$nextTick(() => {
            self.$refs.scrollComentarios.scrollTop = self.$refs.scrollComentarios.scrollHeight;
          });
        })
        .catch(function (error) {
          //NuevoStatusSesion
          if (error.response.status === 401) {
            self.$router.push({ path: "/login" });
          } else {
            self.$toast.error(self.$t("messages.error"));
          }

          self.$toast.error(self.$t("messages.error"));
          // self.$router.push({ path: "/dashboard" });
        });
    },
    async addComentario() {
      let self = this;
      if (self.comentario == "") return;
      axios
        .post(this.$apiAdress + "/api/" + self.commentType + "/comentario" + "?token=" + localStorage.getItem("api_token"), {
          comentario: self.comentario,
          orden: self.$route.params.id,
          estatus: self.ordenEstatus,
        })
        .then(function (response) {
          let data = response.data;
          data.fecha = data.created_at ? moment(String(data.created_at)).format("DD/MM/YYYY hh:mm a") : "";
          self.comentarios.push(data);
          self.$nextTick(() => {
            self.$refs.scrollComentarios.scrollTop = self.$refs.scrollComentarios.scrollHeight;
          });
          self.comentario = "";
          self.$toast.success(self.$t("messages.insert"));
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
  },
  mounted: function () {
    this.index();
  },
};
</script>
