import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import cssStudy from '@/views/cssStudy/index.vue'
import jsStudy from '@/views/jsStudy/index.vue'
import lecodeStudy from '@/views/lecodeStudy/index.vue'
import GitStudy from '@/components/GitStudy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cssStudy',
      name: 'cssStudy',
      component: cssStudy
    },
    {
      path: '/jsStudy',
      name: 'jsStudy',
      component: jsStudy
    },
    {
      path: '/lecodeStudy',
      name: 'lecodeStudy',
      component: lecodeStudy
    },
    {
      path: '/GitStudy',
      name: 'GitStudy',
      component: GitStudy
    }
  ]
})
