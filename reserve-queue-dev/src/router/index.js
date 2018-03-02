import Vue from 'vue'
import Router from 'vue-router'
import VueFirestore from 'vue-firestore'
import HelloWorld from '@/components/HelloWorld'
import ReseverForm from '@/components/ReseverForm'
import CreateTable from '@/components/CreateTable'
import ListTable from '@/components/ListTable'
import ListQueue from '@/components/ListQueue'

Vue.use(Router)
Vue.use(VueFirestore);

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
    },
    {
      path: '/table',
      name: 'ListTable',
      component: ListTable
    },
    {
      path: '/queue',
      name: 'ListQueue',
      component: ListQueue
    }
  ]
})
