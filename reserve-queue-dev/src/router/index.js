import Vue from 'vue'
import Router from 'vue-router'
import ReseverForm from '@/components/ReseverForm'
import CreateTable from '@/components/CreateTable'
import ListTable from '@/components/ListTable'
import ListQueue from '@/components/ListQueue'
import TestData from '@/components/TestData'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
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
    },
    {
      path: '/test',
      name: 'TestData',
      component: TestData
    }
  ]
})
