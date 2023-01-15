import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '@/views/index.vue'
import GitStudy from '@/components/GitStudy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/GitStudy',
      name: 'GitStudy',
      component: GitStudy
    }
  ]
})
