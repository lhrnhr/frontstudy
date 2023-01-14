import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GitStudy from '@/components/GitStudy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/GitStudy',
      name: 'GitStudy',
      component: GitStudy
    }
  ]
})
