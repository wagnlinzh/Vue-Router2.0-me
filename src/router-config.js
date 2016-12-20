import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Hello from './components/Hello'
import Hello1 from './components/Hello1'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/router1',
      component: Hello
    },{
      path: '/router2',
      component: Hello1
    },
    {
      path: '/',
      redirect :'/router1'
    }
  ]
})