import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/LandingPageView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/ProjectView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/project/create',
    name: 'create',
    component: () => import('../views/ProjectCreateView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/project/:id',
    name: 'edit',
    component: () => import('../views/ProjectEditView.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  mode:history,
  history: createWebHistory(),
  routes
})

export default router
