import { createRouter, createWebHistory } from 'vue-router'
import main from '../views/platon/ecoMain.vue'
import ecoPages from '../views/platon/ecoPages.vue'
import ecoServices from '../views/platon/ecoServises.vue'
import contacts from '../views/platon/contacts.vue'
import Login from '../views/Login.vue'
import Service from '../views/platon/ecoService.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: main
    },
    {
      path: '/pages',
      name: 'pages',
      component: ecoPages,
      children:[
        {
          path: 'services',
          name: 'services',
          component: ecoServices
        },
        {
          path: 'service',
          name: 'service',
          component: Service
        },
        {
          path: 'contacts',
          name: 'contacts',
          component: contacts
        },
        // Add a catch-all route for nested routes
        {
          path: '', // No path, so it will match /pages
          redirect: { name: 'services' } // Redirect to services by default
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})

router.beforeEach((to, from, next) => {
  console.log("Navigating to:", to.fullPath);

  if (to.name !== 'service') {
    next();
  } else {
    const isAuthenticated = localStorage.getItem('auth_users');
    if (!isAuthenticated) {
      next({
        name: 'Login',
        query: { next: encodeURIComponent(to.fullPath) }
      });
    } else {
      next();
    }
  }
});




export default router
