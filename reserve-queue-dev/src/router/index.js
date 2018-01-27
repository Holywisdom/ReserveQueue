import Vue from 'vue'
import Router from 'vue-router'
import Antv from 'antv'
import HelloWorld from '@/components/HelloWorld'
import ReseverForm from '@/components/ReseverForm'

Vue.use(Router)
Vue.use(Antv)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/reserve',
      name: 'ReseverForm',
      component: ReseverForm
    }
  ]
})
