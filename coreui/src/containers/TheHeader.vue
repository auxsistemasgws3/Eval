<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <img src="/img/brand/logo-evaluaciones.png" :height="19">
    </CHeaderBrand>

    <CMenu/>

    <CHeaderNav class="mr-4">
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-bell"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-list"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-envelope-open"/>
        </CHeaderNavLink>
      </CHeaderNavItem><b>{{name_user}} </b> - {{rol_user}}
      <TheHeaderDropdownAccnt/>
    </CHeaderNav>
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0 mb-0"/>
    </CSubheader>
  </CHeader>
</template>

<script>
import axios from "axios";
import CMenu from './Menu'
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
  name: 'TheHeader',
  data() {
    return {
      name_user: "",
      rol_user: "",
    }
  },
  components: {
    TheHeaderDropdownAccnt,
    CMenu
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
          self.name_user = response.data.user.name + ' ' + response.data.user.primer_apellido + ' ' + response.data.user.segundo_apellido;
          self.rol_user = response.data.user.menuroles;
        })
        .catch(function (error) {
           console.log(error);
          self.$toast.error(self.$t("messages.error"));
          //self.$router.push({ path: "/dashboard" }); 
        });
    },
  },
  mounted: function () {
    this.index();
  },
}
</script>