import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Knjižnica Codex',
    component: HomeView
  },
  {
    path: '/about',
    name: 'O nama - Knjižnica Codex',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/departments',
    name: 'Odjeli - Knjižnica Codex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DepartmentsView.vue')
  },
  {
    path: '/programs',
    name: 'Programi - Knjižnica Codex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProgramsView.vue')
  },
  {
    path: '/catalog',
    name: 'Katalog - Knjižnica Codex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CatalogView.vue')
  },
  {
    path: '/register',
    name: 'Registracija - Knjižnica Codex',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router
