<template>
  <div class="d-flex align-items-center min-vh-100 background-1 theme-dark">
  <CContainer>
    <CRow class="justify-content-center  text-center">
      <CCol md="4" >
         <CIcon
            class="c-sidebar-brand-full"
            name="logo"
            size="custom-size"
            src="/img/brand/logo-evaluaciones.png"
            height="40"
          />
          <!--<h5>Development</h5>
          {{isError}}-->

          <h2 class="text-muted pt-4">Iniciar sesión</h2>
          <p class="text-muted pb-4">Ingrese sus datos para iniciar sesión en su cuenta::</p>
        <CForm @submit.prevent="login" method="POST">
          <CInput
            v-model="email"
            class="mb-4"
            :isValid="isError"
            prependHtml="<i class='cui-user'></i>"
            placeholder="Username"
            autocomplete="username email"
          >
            <template #prepend-content><CIcon name="cil-user" /></template>
          </CInput>
          <CInput
            v-model="password"
            prependHtml="<i class='cui-lock-locked'></i>"
            placeholder="Password"
            :isValid="isError"
            type="password"
            autocomplete="curent-password"
          >
            <template #prepend-content
              ><CIcon name="cil-lock-locked"
            /></template>
          </CInput>
          <p class="text-danger text-left" v-if="message">{{message}}</p>
         
          <CRow class="justify-content-center pt-5">
            <CCol col="5">
              <CButton type="submit" block color="primary" class="px-4"
                >Iniciar sesión</CButton
              >
            </CCol>
          </CRow>
          
          <CButton color="link" class="px-0 mt-3 text-muted ">¿Olvido su contraseña?</CButton>
        </CForm>
      </CCol>
    </CRow>
  </CContainer>
  </div>
</template>
<script>

import axios from "axios";

    export default {
      name: 'Login',
      data() {
        return {
          email: '',
          password: '',
          isError: null,
          message: '',
        }
      },
      methods: {
        goRegister(){
          this.$router.push({ path: 'register' });
        },
        login() { 
          let self = this; 
          axios.post(  this.$apiAdress + '/api/login', {
            email: self.email,
            password: self.password,
          }).then(function (response) {
            self.email = '';
            self.password = '';
            localStorage.setItem("api_token", response.data.access_token);
            localStorage.setItem('roles', response.data.roles);
            self.$router.push({ path: 'evaluacion' });
          })
          .catch(function (error) {
            self.message = 'Incorrect E-mail or password';
            self.isError = false;

            console.log(error);
          });
  
        }
      }
    }

</script>
