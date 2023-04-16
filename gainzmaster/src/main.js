import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import { auth } from './firebase'

let app

auth.onAuthStateChanged(() => {
    if (!app) {
      app = createApp(App)
        .use(router)
        .use(store)
        .mount('#app')
    }
  })
// createApp(App).use(store).use(router).mount('#app')
