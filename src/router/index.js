import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomeView from '../views/HomeView1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: () => import('../views/IndexView.vue')
    },
    {
      path: '/interface',
      name: 'interface',
      component: () => import('../components/interface/index.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('../components/index/index.vue')
        },
        {
          path: '/chart1',
          name: 'chart1',
          component: () => import('../components/char1/index.vue')
        },
        {
          path: '/chart2',
          name: 'chart2',
          component: () => import('../components/char2/index.vue')
        },
        {
          path: "/dataView:title",
          name: "dataView",
          props: true,
          component: () => import('../components/index/component/DataView.vue')
        }

      ]
    },
    {
      path: '/space1',
      name: 'space1',
      component: () => import('../components/char4/index.vue'),
    },
    {
      path: '/space-data1/:title',
      name: 'space-data1',
      props: true,
      component: () => import('../components/char5/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
