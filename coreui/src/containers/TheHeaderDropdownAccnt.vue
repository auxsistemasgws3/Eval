<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            src="img/avatars/default.png"
            class="c-avatar-img "
          />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>Cuenta</strong>
    </CDropdownHeader>
    <CDropdownDivider/>
    <CDropdownItem>
      <CIcon name="cil-shield-alt" /> Lock Account
    </CDropdownItem>
    <CDropdownItem @click="logout()">
      <CIcon name="cil-lock-locked" />Cerrar Sesion
    </CDropdownItem>
  </CDropdown>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      itemsCount: 42,
    }
  },
  methods:{
    logout(){
      let self = this;
      axios.post(this.$apiAdress + '/api/logout?token=' + localStorage.getItem("api_token"),{})
      .then(function (response) {
        localStorage.setItem('roles', '');
        self.$router.push({ path: '/login' });
      }).catch(function (error) {
        console.log(error); 
      });
    }
  }
}
</script>
<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>
