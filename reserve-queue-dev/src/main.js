// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Antv from 'antv'
import 'antv/dist/antv.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Antv)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
