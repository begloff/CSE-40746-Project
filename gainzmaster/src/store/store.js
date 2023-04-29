import { createStore } from 'vuex'
import actions from './actions';
import mutations from './mutations';

export default createStore({
    
  state: {
    user: null, //Contains the user information directly from firebase
    user_details: null, //contains local/sql user information (email, username)
    pageLoaded: false,
    exerciseData: null,
    muscleData: null,
    groupData: null,
    randomWorkout: {type:"push", workout:["3x12 Bench", "2x12 Tricep Pushdown"]},
    lastWorkout: ["3x12 Bench", "2x12 Tricep Pushdown"],
    workoutSplits: ['push', 'pull', 'legs', 'upper'],
		chosenQuote: null,
    createdWorkout: ['', '', []]   // [name, split, [['exercise1', sets, reps],['exercise1', sets, reps]]]
    //  name = createdWorkout[0]  split = createdWorkout[1]  exercise_i_id = createdWorkout[2][i][0] exercise_i_sets = createdWorkout[2][i][1] ... reps
  },
  mutations: mutations,

  actions: actions

});