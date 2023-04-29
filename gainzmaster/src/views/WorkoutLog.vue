<template>
    <div class="header">
        <h1>Workout Log</h1>
    </div>
    <div class="log">
        <h2>Hello, {{this.$store.state.user_details.username}}. Here is a description of your last {{ this.workoutHistory.length }} logged workouts:</h2>
        <div class="workout" v-for="workout in this.workoutHistory">
            <li v-for="exercise in workout">{{ exercise }}</li>
        </div>

    </div>


</template>

<script>
import axios from 'axios';

export default {
	components: {},
	data(){
		return {
			workoutHistory : [['bench','curls'],['bench','curls']]
		}
	},
	methods:{

		logout(){
            this.$store.dispatch('logout')
        },


    },
	beforeMount(){
	}
};
</script>

<style>

.header {
	color:#002540;
    width:60%;
    border-bottom:3px solid #002540;
	text-shadow: 2px 2px #FFC631;
	background-color: #ffffff;
	font-size: 2.3vw;
    margin: auto;
}

.workout {
    background-color: grey;
    margin-top:20px;
}

.log {
    background-color: #002540;
    
    
    width: 80%;
    padding: 20px;
    text-align: center;
    background-color: #f0f0f0;
    margin-right:10%;
}


</style>