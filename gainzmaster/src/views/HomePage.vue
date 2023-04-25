<template>
	<div class="header">
		<div style="width:60%; background-color: white; margin: auto;">
			<h1> Gainzmaster Home </h1>
			<div class ="quote">
				<img class="logo" src="../assets/lion.jpeg">
				<div class ="centered">
					<h3>{{  this.chosenQuote }}</h3>
				</div>
			</div>
			<h2 style="text-decoration: solid;" v-if="this.$store.state.user_details">Good {{ this.timeOfDay }}, {{ this.$store.state.user_details.username }}! How may I help you?</h2>
		</div>
	</div>
	
	<div style="background-color: #002540;">
		<div class="buttons">
			<button class="btn" id="workoutCreator"> Workout Creator </button>
			<button class="btn" id="exerciseCreator"> Exercise Catalog </button>
			<button class="btn" id="muscleCatalog"> Muscle Catalog </button>
		</div>
	</div>

	<div style="min-height:250px;">
		<div class="randomWorkout">
			<h3>Looking for a workout? Here's a randomly curated <em>{{ this.randomWorkout.type }}</em> workout!</h3>
			<p v-for="item in this.workout"> {{ item }} </p>
			{{this.repsBySets}}
			<button class="btn" style="background-color: #f0f0f0; color: #002540"><strong>Regenerate Workout</strong></button>
		</div>
		<div class="break"></div>
		<div class="log">
			<h3>This is your last logged workout:</h3>
			<p v-for="item in this.lastWorkout"> {{ item }} </p>
			<button class="btn" style="background-color: #fafafa; color: #002540"><strong>View More Logs</strong></button>
		</div>
	</div>

	<div style="margin-top:50px;">
		<p>You are now logged in</p>
		<p v-if="this.$store.state.user_details">Welcome: {{this.$store.state.user_details.username}}</p>
		<button @click="logout">LOG OUT</button>
	</div>
	<div class="gainzmasterLLC">
		<h2>Property of Gainzmaster LLC.</h2>
		<h3>All rights reserved. </h3>
	</div>
</template>

<script>
import axios from 'axios';

export default {
  	name: 'home',
	components: {},
	data(){
		return {
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
			chosenQuote: null,
			randomWorkout: {type:null, workout:null},
    		lastWorkout: null,
    		workoutSplits: ['push', 'pull', 'legs', 'upper'],
			repsBySets: null
		}
	},
	methods:{
        logout(){
            this.$store.dispatch('logout')
        },

		getTime(){
			const d = new Date();
			let hour = d.getHours();
			if (hour >=4 && hour < 12) 
				this.timeOfDay = 'morning';
			else if (hour >= 12 && hour < 17)
				this.timeOfDay = 'afternoon';
			else if (hour >= 17 && hour < 22)
				this.timeOfDay = 'evening';
			else {
				this.timeOfDay = 'night';
			}
		},

		getQuote(){
			var chosenNum = Math.floor(Math.random() * this.quotes.length);
			this.chosenNum = chosenNum
			this.chosenQuote = this.quotes[chosenNum];
		},

		getRandomWorkout(){
			var chosenNum = Math.floor(Math.random() * this.workoutSplits.length);
			var chosenSplit = this.workoutSplits[chosenNum];
			
			// make the query //
			if (chosenSplit == 'push')
				var sql = 'select _ from _';
			else if (chosenSplit == 'pull')
				var sql = 'select _ from _';
			else if (chosenSplit == 'upper')
				var sql = 'select _ from _';
			else if (chosenSplit == 'legs')
				var sql = 'select _ from _';

			//var resp = await;
			//axios.get('http://3.89.12.221/db.py/?sql=${sql}');
			
			this.randomWorkout.type = chosenSplit;
			// for exercise in response:
				this.getRepRange()
			//	this.randomWorkout.exercise.append.push(exercise + this.reps)
		},

		getRepRange(){
			// Heavy = 0, Medium = 1, Light = 2
			var chosenNum = Math.floor(Math.random() * 3);
			if (chosenNum == 0){
				var totalReps 	=  Math.floor(Math.random() * (18-15 + 1) + 15);
				var sets 		=  Math.floor(Math.random() * (5 - 3 + 1 ) + 3);
				var reps 		=  Math.floor(totalReps/sets);
				this.repsBySets =  sets.toString() + ' x ' + reps.toString() + ' (HEAVY)';
			}
			else if (chosenNum == 1){
				var totalReps 	=  Math.floor(Math.random() * (36 - 24 + 1) + 24);
				var sets 		=  Math.floor(Math.random() * (4 - 3 + 1) + 3);
				var reps	  	=  Math.floor(totalReps/sets);
				this.repsBySets =  sets.toString() + ' x ' + reps.toString() + ' (MEDIUM)';
			}
			else if (chosenNum == 2){
				var totalReps 	=  Math.floor(Math.random() * (40 - 36 + 1) + 36);
				var sets 		=  Math.floor(Math.random() * (3 - 2 + 1) + 2);
				var reps	  	=  Math.floor(totalReps/sets);
				this.repsBySets =  sets.toString() + ' x ' + reps.toString() + ' (LIGHT)';
			}
		},

		getLastWorkout() {


		}
    },
	beforeMount(){
		this.getQuote()
		this.getTime()
		this.getRandomWorkout()
		this.getLastWorkout()
	}
};
</script>

<style>
.randomWorkout{
	float:left;
	width:45%;
	padding:2.5%;
	background-color: #f0f0f0;
	color: #0f0f10;
}

.log{
	float:right;
	width:45%;
	padding:2.5%;
	background-color: #fafafa;
	color: #050506;
}

.break{
	width: 1px;
    background-color: #ccc;
    height: 100%;
}
.header {
	margin-top: 10px;
	color:rgb(5, 107, 37);
	background-color: #002540;
}

.quote {
	margin-top: px;
	color:rgb(0, 0, 0);
	padding: 3px;
}


.btn {
	border-color: #FFC631;
	background-color: #002540;
	color: white;
	padding: 10px;
	border-radius: 6px;
	margin-bottom: 50px;
	justify-content: space-around;
	text-align:center;
	margin: auto;
	padding: 15px;
}
.btn:hover {
	background-color: #145c8b;
}

.centered {
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: fantasy;
  background-color: rgba(0, 0, 0, 0.623);
  font-size: large;
  color:rgb(255, 255, 255);
  max-width:400px;
}

.buttons {
	width: 70%;
	height: 100px;
	display: flex;
	justify-content: space-around;
	text-align:center;
	margin: auto;
}

.gainzmasterLLC {
	color: grey;
	margin-bottom: 15px

}
</style>