import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import StartPage from '@/pages/Start'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: StartPage
    },
    {
      path: '/:package',
      component: StartPage
    }
  ]
})
