<template>
	<div class="homeHeader">
		<div style="width:60%; background-color:white; margin: auto;">
			<h1 style="font-family: monospace;"> Gainzmaster </h1>
			<div class ="quote">
				<img class="logo" src="../assets/lion.jpeg" style="width: 100%; height:100%; position: absolute; left: 5%;">
				<div style="position: absolute; top: 35%; width: 70%; left: 20%;">
					<h3 style="font-size: 2.5vw; background-color: rgba(0, 0, 0, 0.623); padding-top:5px; text-shadow: 2px 2px red">{{  this.chosenQuote }}</h3>
				</div>
			</div>
			<h2 style="text-decoration: solid; font-size: 2.3vw;" v-if="this.$store.state.user_details">Good {{ this.timeOfDay }}, {{ this.$store.state.user_details.username }}! How may I help you?</h2>
		</div>
	</div>
	
	<div style="background-color: #002540; margin-top: 7%;">
		<div class="homeButtons">
			<button class="homeBtn" id="workoutCreator" @click="$router.push('/workoutcreator')"> Workout Creator </button>
			<button class="homeBtn" id="exerciseCreator" @click="$router.push('/exercisecatalog')"> Exercise Catalog </button>
			<button class="homeBtn" id="muscleCatalog" @click="$router.push('/musclecatalog')"> Muscle Catalog </button>
		</div>
	</div>

	<div style="width:100%; height:auto; display: flex;">
		<div class="randomWorkout">
			<h3>Looking for a workout? Here's a randomly curated <em>{{ this.currWorkout[2] }}</em> workout!</h3>

			<div class="links" style="margin-bottom:2%" v-for="exercise in this.currWorkout[3]" @click="$router.push({ path: `/exercisecatalog/${exercise[0][0]}`})">{{exercise[0][1]}} {{ exercise[1] }} x {{ exercise[2] }}</div>
			<button class="homeBtn2"  style="margin-right:20%;" v-on:click="goToLog(); $router.push('/workoutcreator')"><strong class="buttonHover">Add to Log</strong></button>
			<button class="homeBtn2" v-on:click="getRandomWorkout()"><strong class="buttonHover">Regenerate Workout</strong></button>
		</div>
		<div class="workoutLog">
			<h3>This is your last logged workout:</h3>
			<div class="links" style="margin-bottom:2%" v-for="exercise in this.lastWorkout" @click="$router.push({ path: `/exercisecatalog/${exercise[3]}`})">{{exercise[0]}} {{ exercise[1] }} x {{ exercise[2] }}</div>

			<button class="homeBtn2" @click="$router.push('/workoutlog')"><strong>View More Logs</strong></button>
		</div>
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
			currWorkout: this.$store.state.creatorData[7],
			lastWorkout: null,

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
    		workoutSplits: ['Push', 'Pull', 'Legs', 'Upper'],
			sets: 0,
			reps: 0,


			muscleGroups: { 
                            'Push':  `select exercise_name, exercise_id from exercises, detail_muscles where exercises.detail_id = detail_muscles.detail_id and (general_id = 2 or general_id = 3 or general_id = 6) and muscle_force = 'Push' and (preferability = 1 or preferability = 2 ) order by dbms_random.value`,
                            'Pull':  `select exercise_name, exercise_id from exercises, detail_muscles where exercises.detail_id = detail_muscles.detail_id and (general_id = 3 or general_id = 4 or general_id = 5) and muscle_force = 'Pull' and (preferability = 1 or preferability = 2 ) order by dbms_random.value`,
                            'Upper': `select exercise_name, exercise_id from exercises, detail_muscles where exercises.detail_id = detail_muscles.detail_id and (general_id = 2 or general_id = 3 or general_id = 6 or general_id = 4 or general_id = 5) and (muscle_force = 'Push' or muscle_force ='Pull') and (preferability = 1) order by dbms_random.value`,
                            'Legs':  `select exercise_name, exercise_id from exercises, detail_muscles where exercises.detail_id = detail_muscles.detail_id and (general_id = 7 or general_id = 8 or general_id = 9 or general_id = 10) and (preferability = 1 or preferability = 2 or preferability = 3) order by dbms_random.value`
                        },
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

		clearWorkout(){
            this.currWorkout = ['Untitled Workout','', '', []]
        },

		async getRandomWorkout(){
			this.clearWorkout()
			var chosenNum = Math.floor(Math.random() * this.workoutSplits.length);
			var chosenSplit = this.workoutSplits[chosenNum]
			
			var muscles = null

			if (chosenSplit == 'Push'){
				var muscles = this.muscleGroups['Push'];}
			else if (chosenSplit == 'Pull'){
				var muscles = this.muscleGroups['Pull'];}
			else if (chosenSplit == 'Upper'){
				var muscles = this.muscleGroups['Upper'];}
			else if (chosenSplit == 'Legs'){
				var muscles = this.muscleGroups['Legs'];}

			this.currWorkout[2] = chosenSplit
            var resp = await axios.get(`http://3.89.12.221:8004/db.py/?sql=${muscles}`);
            var lift = resp.data.slice(1,8)

            for( let i = 0; i < lift.length; i++){
                this.getRepRange()
                this.currWorkout[3].push([[lift[i][1], lift[i][0]], this.sets, this.reps])
            }


		},

		getRepRange(){
			// Heavy = 0, Medium = 1, Light = 2
			var chosenNum = Math.floor(Math.random() * 3);
			if (chosenNum == 0){
				var totalReps 	=  Math.floor(Math.random() * (18-15 + 1) + 15);
				this.sets 		=  Math.floor(Math.random() * (5 - 3 + 1 ) + 3);
				this.reps 		=  Math.floor(totalReps/this.sets);
			}
			else if (chosenNum == 1){
				var totalReps 	=  Math.floor(Math.random() * (36 - 24 + 1) + 24);
				this.sets 		=  Math.floor(Math.random() * (4 - 3 + 1) + 3);
				this.reps	  	=  Math.floor(totalReps/this.sets);
			}
			else if (chosenNum == 2){
				var totalReps 	=  Math.floor(Math.random() * (40 - 36 + 1) + 36);
				this.sets 		=  Math.floor(Math.random() * (3 - 2 + 1) + 2);
				this.reps	  	=  Math.floor(totalReps/this.sets);
			}
		},

		goToLog(){
			this.$store.state.creatorData[7] = this.currWorkout
		},

		async getLastWorkout() {
				// get username
			var sql = `select user_id from users where username = '${this.$store.state.user_details.username}'`;
            var resp = await axios.get(`http://3.89.12.221:8004/db.py/?sql=${sql}`);
            var userID = resp.data[0]

				// get session id
			var sql = `select session_id from sessions where user_id = ${userID} order by session_id desc`;
            resp = await axios.get(`http://3.89.12.221:8004/db.py/?sql=${sql}`);
            var sessionID = resp.data[0][0]

				// get workouts from session id
			sql = `select unique exercises.exercise_name, log.reps, log.sets, log.exercise_id from log, sessions, exercises where log.session_id = ${sessionID} and log.exercise_id = exercises.exercise_id and sessions.user_id = ${userID}`
            resp = await axios.get(`http://3.89.12.221:8004/db.py/?sql=${sql}`);
            this.lastWorkout = resp.data
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
	height:auto;
	min-height: 100%;
	flex: 1;
}

.workoutLog{
	float:right;
	width:45%;
	padding:2.5%;
	background-color: #fafafa;
	color: #050506;
	min-height:auto;
	min-height:100%;
	flex: 1;
}


.break{
	width: 1px;
    background-color: #ccc;
    height: 100%;
}
.homeHeader {
	color:#002540;
	text-shadow: 2px 2px #FFC631;
	background-color: #002540;
	font-size: 2.3vw;	
}

.quote {
	color:rgb(255, 255, 255);
	font-family: fantasy;
	position: relative; height:40vw; width:90%; vertical-align: middle;
}


.homeBtn {
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
.homeBtn:hover {
	background-color: #145c8b;
}

.homeBtn2 {
	border-color: #FFC631;
	padding: 10px;
	border-radius: 6px;
	margin-bottom: 50px;
	justify-content: space-around;
	text-align:center;
	margin: auto;
	padding: 15px;
	background-color: #fafafa; 
	color: #002540
}
.homeBtn2:hover {
	background-color: #62bdfa;
	color: white;
}

.homeCentered {
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

.homeButtons {
	width: 70%;
	height: 100px;
	display: flex;
	justify-content: space-around;
	text-align:center;
	margin: auto;
}

.gainzmasterLLC {
	color: grey;
	margin-bottom: 15px;
	width:100%;
	float:left;

}
</style>