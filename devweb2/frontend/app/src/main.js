import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import 'vuetify/dist/vuetify.min.css'

Vue.config.performance = true;
Vue.config.productionTip = false;

new Vue({
  el: "#app"
  vuetify,
  router,
  components: { App },
  render: h => h(App)
}).$mount('#app')
