import Vue from 'vue'
import Router from 'vue-router'
import Antv from 'antv'
import HelloWorld from '@/components/HelloWorld'
import ReserveForm from '@/componets/ReserveForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/reserve',
      name: 'ReserveForm',
      component: ReserveForm
    }
  ]
})
