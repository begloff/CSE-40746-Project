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
    creatorData: ['', 'All', 'All', 'All', 'All', 'All', 'All', ['Untitled Workout', null, '', []]]
                                                                  // currentWorkout
    //  name = createdWorkout[0]  split = createdWorkout[1]  exercise_i_id = createdWorkout[2][i][0] exercise_i_sets = createdWorkout[2][i][1] ... reps
  },
  mutations: mutations,

  actions: actions

});