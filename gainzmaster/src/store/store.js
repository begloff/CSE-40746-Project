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
    workoutSplits: ['push, pull, legs, upper'],
    quotes: [
      'If the door says PUSH, pull it. It\'s not a direction, it\'s a challenge',
      'You don\'t need a spot for back. You don\'t even need to do back. Back is the legs of the upper body',
      'Flexibility? You mean the ability to flex?',
      'Legs - what do I gotta train them for, I\'ve already got 2 of em\'',
      'You\'re probably still sore from your last leg workout, which was your first leg workout, and your last leg workout',
      'Lifting and Game of Thrones share the same calendar: there\'s only 2 seasons, cutting and bulking',
      'No matter how hard you try, you\'ll never be as big as your pump',
      'Fitness is 98% lighting. The other 2% is the sun effect on Instagram',
      'Just assume anyone bigger than you is on steroids',
      'Chickens evolved from dinosaurs, and they were huge, bro. So eat lots of chicken',
      'Do it for the after selfie',
      'When you feel like dying - do 10 more',
      'Things may come to those who wait, but gains come to those who lift weight',
      'I GOT 99 PROBLEMS, BUT I\'M GOING TO THE GYM TO IGNORE ALL OF THEM',
      'WEIGHTS BEFORE DATES',
      'Curls for the girls, tris for the guys',
      'If the bar ain\'t bending, you\'re just pretending',
      'LIFE IS SHORT. LIFT HEAVY THINGS.',
      'I like big weights and I cannot lie.',
      'Do not fear what you cannot lift, fear that which can lift you',
      'Education is important, but big biceps are importanter',
      'This is the whey'
    ],
		chosenQuote: null
  },
  mutations: mutations,

  actions: actions

});