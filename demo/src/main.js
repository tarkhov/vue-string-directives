import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'postboot/dist/css/postboot.css'
import VueStringDirectives from './../../dist/vue-string-directives.common'

Vue.config.productionTip = false

Vue.use(VueStringDirectives)

new Vue({
  render: h => h(App),
}).$mount('#app')
