import Vue from 'vue'
import Router from 'vue-router'
import Internal from '@/components/internal/Internal.vue'
import Home from '@/components/home/Home.vue'
import addDoctor from '@/components/doctor/addDoctor.vue'
import addShift from '@/components/doctor/addShift.vue'
import editDoctor from '@/components/doctor/editDoctor.vue'
import shiftDoctor from '@/components/doctor/shiftDoctor.vue'
Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'Internal',
      component: Internal,
      children:[
        {
          path:'/home',
          name:'Home',
          component:Home
        },
        {
          path:'/addDoctor',
          name:'addDoctor',
          component:addDoctor
        },
        {
          path:'/editDoctor',
          name:'editDoctor',
          component:editDoctor
        },
        {
          path:'/addShift',
          name:'addShift',
          component:addShift
        },
        {
          path:'/shiftDoctor',
          name:'shiftDoctor',
          component:shiftDoctor
        }
      ]
    }
  ]
})

export default router;
