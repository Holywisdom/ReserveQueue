import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ReseverForm from '@/components/ReseverForm'
import CreateTable from '@/components/CreateTable'

Vue.use(Router)

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
    },
    {
      path: '/create',
      name: 'CreateTable',
      component: CreateTable
    }
  ]
})
