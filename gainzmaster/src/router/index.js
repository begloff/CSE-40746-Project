import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'
import HomePage from '../views/HomePage.vue'
import PublicHomePage from '../views/PublicHomePage'
import WorkoutCreator from '../views/WorkoutCreator.vue'
import MuscleCatalog from '../views/MuscleCatalog.vue'
import MuscleDescription from '../views/MuscleDescription.vue'
import ExerciseCatalog from '../views/ExerciseCatalog.vue'
import WorkoutLog from '../views/WorkoutLog.vue'

import { auth } from '../firebase'

import store from '../store/store'

const requireAuth= async (to,from,next)=>{
  let user=auth.currentUser
  if(!store.state.exerciseData && user){
    await store.dispatch('fillData')
    next()
  } else if (user){
    next()
  } else {
    next({name:'login'})
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
    path: '/workoutlog',
    name: 'workoutlog',
    component: WorkoutLog,
    beforeEnter: requireAuth,
    meta:{
      title: 'Gainzmaster - Workout Log',
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
    path: '/musclecatalog',
    name: 'musclecatalog',
    component: MuscleCatalog,
    beforeEnter: requireAuth,
    meta:{
      title: 'Gainzmaster - Muscles'
    }
  },
  {
    path: '/exercisecatalog',
    name: 'exercisecatalog',
    component: ExerciseCatalog,
    beforeEnter: requireAuth,
    meta:{
      title: 'Gainzmaster - Exercises'
    }
  },
  {
    path: '/musclecatalog/:id',
    name: 'detailedMuscle',
    component: MuscleDescription,
    beforeEnter: requireAuth,
    meta:{
      title: 'Gainzmaster - Muscles Description'
    }
  },
  {
    path: '/workoutCreator',
    name: 'workoutCreator',
    component: WorkoutCreator,
    beforeEnter: requireAuth,
    meta:{
      title: 'Gainzmaster - Workout Creator'
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
