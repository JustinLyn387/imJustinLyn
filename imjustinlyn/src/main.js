import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import scroll from 'vue-scrollto'
import VueDiagonal from 'vue-diagonal'

Vue.config.productionTip = false

Vue.use(scroll)

Vue.component('vue-diagonal', VueDiagonal)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
