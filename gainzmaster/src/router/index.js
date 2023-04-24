import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'
import HomePage from '../views/HomePage.vue'
import PublicHomePage from '../views/PublicHomePage.vue'
import WorkoutMaker from '../views/WorkoutMaker.vue'
import { auth } from '../firebase'

import store from '../store/store'

const requireAuth=(to,from,next)=>{
  let user=auth.currentUser
  if(!user){
    next({name:'login'})
  }else{
    next()
  }
}

const notRequireAuth=(to,from,next)=>{
  let user=auth.currentUser
  if(user){
    next({name:'home'})
  }else{
    next()
  }
}


const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    beforeEnter: notRequireAuth,
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
    beforeEnter: notRequireAuth,
    meta:{
      title: 'Gainzmaster - Signup'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
    beforeEnter: requireAuth,
    meta:{
      title: 'Gainzmaster - Home',
    }
  },
  {
    path: '/workoutmaker',
    name: 'workoutmaker',
    component: WorkoutMaker,
    beforeEnter: requireAuth,
    meta:{
      title: 'Gainzmaster - Workout Maker'
    }
  },
  {
    path: '/',
    name: 'publichome',
    component: PublicHomePage,
    beforeEnter: notRequireAuth,
    meta:{
      title: 'Gainzmaster'
    }
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach( async (to, from, next) => {

  document.title = `${to.meta.title}`;

  next();


});


export default router
