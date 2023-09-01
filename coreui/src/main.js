import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import i18n from './i18n'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Multiselect from 'vue-multiselect';
//importing Vue plugin
import CoreuiVueCharts from '@coreui/vue-chartjs'

import InputFacade from 'vue-input-facade';
//fonts
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faPercent, faDollarSign } from '@fortawesome/free-solid-svg-icons'
window.moment = require('moment');
moment.locale("es-mx");

library.add(faUserSecret, faPercent, faDollarSign)

const options = {
  customClass: {
    confirmButton: 'btn btn-primary mx-1',
    cancelButton: 'btn btn-outline-danger mx-1'
  },
  buttonsStyling: false,
  confirmButtonText: i18n.t('buttons.success'),
  cancelButtonText: i18n.t('buttons.cancel'),
};

//Vue.prototype.$apiAdress = 'https://evaluaciones.mayoristapanelessolares.com';
Vue.prototype.$apiAdress = 'http://localhost:8000';
//Vue.prototype.$apiAdress = 'http://172.17.1.247:8000';
//Vue.prototype.$apiAdress = 'http://192.168.1.158:8000';	
//Vue.prototype.$apiAdress = 'https://evaluaciones.grupowattsolar.com';
//Vue.prototype.$apiAdress = 'http://192.168.100.81:8000';

Vue.config.performance = true 
Vue.use(Toast);
Vue.use(CoreuiVue);
Vue.use(VueSweetalert2, options);
Vue.component('multiselect', Multiselect)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(InputFacade)
Vue.use(CoreuiVueCharts)

new Vue({
  el: '#app',
  router,
  store, 
  icons,
  template: '<App/>',
  i18n,

  components: {
    App
  }
})