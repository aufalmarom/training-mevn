import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
  router.beforeEach((to) => {
    if (store.getters.token && to.name == 'login'){
      return {
        name: 'dashboard',
      }
    }
    if (to.meta.requiresAuth && !store.getters.token) {
      return {
        name: 'login',
      }
    }
  })
  

