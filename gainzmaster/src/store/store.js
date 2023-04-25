import { createStore } from 'vuex'
import actions from './actions';
import mutations from './mutations';

export default createStore({
    
  state: {
    user: null, //Contains the user information directly from firebase
    user_details: null, //contains local/sql user information (email, username)
    pageLoaded: false,


    randomWorkout: {type:"push", workout:["3x12 Bench", "2x12 Tricep Pushdown"]},
    lastWorkout: ["3x12 Bench", "2x12 Tricep Pushdown"],
    workoutSplits: ['push', 'pull', 'legs', 'upper'],
		chosenQuote: null
  },
  mutations: mutations,

  actions: actions

});