// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'antv/dist/antv.css'
import App from './App'
import router from './router'
import VueFirestore from 'vue-firestore'

Vue.config.productionTip = false

Vue.use(VueFirestore)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
