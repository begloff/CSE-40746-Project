<template>
	<div class="header">
		{{ getQuote() }} <!-- make this on mount -->
		<h1> Gainzmaster Home </h1>
		<div class ="quote">
			<img class="logo" src="../assets/lion.jpeg">
			<div class ="centered">
				<h3>{{  this.$store.state.chosenQuote }}</h3>
			</div>
		</div>
		{{ getTime() }} <!-- make this on mount -->
		<h2 style="text-decoration: solid;" v-if="this.$store.state.user_details">Good {{ this.$store.state.timeOfDay }}, {{ this.$store.state.user_details.username }}! How may I help you?</h2>
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
			<h3>Looking for a workout? Here's a randomly curated <em>{{ this.$store.state.randomWorkout.type }}</em> workout!</h3>
			<p v-for="item in this.$store.state.randomWorkout.workout"> {{ item }} </p>
			<button class="btn" style="background-color: #f0f0f0; color: #002540"><strong>Regenerate Workout</strong></button>
		</div>
		<div class="break"></div>
		<div class="log">
			<h3>This is your last logged workout:</h3>
			<p v-for="item in this.$store.state.lastWorkout"> {{ item }} </p>
			<button class="btn" style="background-color: #fafafa; color: #002540"><strong>View More Logs</strong></button>
		</div>
	</div>

	<div style="margin-top:50px;">
		<p>You are now logged in</p>
		<p v-if="this.$store.state.user_details">Welcome: {{this.$store.state.user_details.username}}</p>
		<button @click="logout">LOG OUT</button>
	</div>
	<div class="gainzmasterLLC">
		Property of Gainzmaster LLC.
	</div>
</template>

<script>
export default {
  	name: 'home',
	components: {},
	data(){
		return {

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
				this.$store.state.timeOfDay = 'morning';
			else if (hour >= 12 && hour < 17)
				this.$store.state.timeOfDay = 'afternoon';
			else if (hour >= 17 && hour < 22)
				this.$store.state.timeOfDay = 'evening';
			else {
				this.$store.state.timeOfDay = 'night';
			}
		},

		getQuote(){
			var chosenNum = Math.floor(Math.random() * this.$store.state.quotes.length);
			this.$store.state.chosenNum = chosenNum
			this.$store.state.chosenQuote = this.$store.state.quotes[chosenNum];
		}
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
	margin-top:10px;
	margin-bottom: 15px;

}
</style>