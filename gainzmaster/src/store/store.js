import { createStore } from 'vuex'
import actions from './actions';
import mutations from './mutations';

export default createStore({
    
  state: {
    user: null, //Contains the user information directly from firebase
    user_details: null, //contains local/sql user information (email, username)
    pageLoaded: false
  },
  mutations: mutations,

  actions: actions

});