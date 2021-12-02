import { createRouter, createWebHistory, } from 'vue-router'
import Home from '../components/Home.vue'
import mini from '../components/mini.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/web-index',
    name: 'sub',
    component: mini
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (!history.state.current) {
    Object.assign(history.state, { current: from.fullPath });
  }
  next();
});

export default router
