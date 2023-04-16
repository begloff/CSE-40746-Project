import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'
import HomePage from '../views/HomePage.vue'
import { auth } from '../firebase'

import store from '../store/store'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage,
    meta:{
      title: 'Gainzmaster - Login'
    }
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignupPage,
    meta:{
      title: 'Gainzmaster - Signup'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
    meta:{
      title: 'Gainzmaster - Home',
      requiresAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach( async (to, from, next) => {

  //Try to make something that recognizes when this is loading
  console.log(store.state.pageLoaded)

  if(!store.state.pageLoaded){
    //Have a variable that is set once the main app component is loaded
    //If prior to that run loaduser changed in here
    await store.dispatch('fetchUser')
    store.commit('LOADED_PAGE')
    console.log(to.path, store.state.user)


  }

  document.title = `${to.meta.title}`;

  console.log(to.path, store.state.user)

  if ( (to.path == '/' || to.path == '/signup') && store.state.user){
    console.log('NUTZ')
    next('/home')
    console.log(auth.currentUser, store.state.user)
    return;
  }

  if ( to.matched.some((record) => record.meta.requiresAuth ) && !store.state.user){
    next('/')
    return;
  }

  next();


});


export default router
