import Vue from 'vue'
import Router from 'vue-router'
import Internal from '@/components/internal/Internal.vue'
Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'Internal',
      component: Internal
    }
  ]
})

export default router;
