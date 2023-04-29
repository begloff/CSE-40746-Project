<template>
    <div class="header">
        <h1>Workout Creator</h1>
    </div>

    <div class="create">
        <h2 style="font-size: larger;">Create me a random ___ workout:</h2>
        <div class="buttons">
            <button class="split" v-for="split in this.splits">{{split}}</button>
        </div>
        <button class="rainbow"><b>Surprise me!</b></button>
    </div>

    <div style="margin-top:20px;">
        <h2>Current Workout:</h2>
        <div class="hl"></div>
        <div class="workouts">
            <li style="font-size:larger;" v-for="workout in this.currWorkout">{{workout}}</li>
        </div>
    </div>


    <div style="border-top:3px dotted #002540; width:90%; margin:auto; margin-top: 30px;">
        <h2> Add an exercise by: </h2>
        <div class="bySplit">
            <h3>Split</h3>
        </div>
        <div class="byMuscle">
            <h3>Muscle</h3>
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
	components: {},
	data(){
		return {
			splits: ['Push', 'Pull', 'Upper', 'Legs'],
            currWorkout: ['a','b'],
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
	text-shadow: 2px 2px #FFC631;
	background-color: #ffffff;
	font-size: 2.3vw;
}

.create {
    margin:auto;
    width:90%;
    height:235px;
    border: 3px dotted #002540;
}
.buttons {
	width: 70%;
	height: 100px;
	display: flex;
	justify-content: space-around;
	text-align:center;
	margin: auto;
    margin-top: 0px;
}

.split {
	border-color: #FFC631;
	background-color: #002540;
    width: 180px;
	color: white;
	padding: 10px;
	border-radius: 6px;
	margin-bottom: 50px;
	justify-content: space-around;
	text-align:center;
    font-size:larger;
    font-family:Georgia, 'Times New Roman', Times, serif;
	margin: auto;
	padding: 15px;
    display: inline-block;
}
.split:hover {
	background-color: #145c8b;
}
.workouts {
    text-align: left;
    margin-left: 20%;
    font-size:large
}
.rainbow{
    background-image: linear-gradient(to top left, red, orange, yellow, green, blue, indigo, violet);
    color: rgb(255, 255, 255);
	padding: 10px;
	border-radius: 6px;
	margin-bottom: 50px;
	justify-content: space-around;
	text-align:center;
	margin: auto;
	padding: 15px;
    display: inline-block;
}
.rainbow:hover{
    background-image: linear-gradient(to top left, indigo, violet, red, orange, yellow, green, blue );
}
.hl {
    height:2px;
    width:80%;
    margin: auto;
    background-color: #002540;
}

.bySplit {
    width:45%;
    margin:auto;
    float:left;
}


.byMuscle{
    width:45%;
    margin:auto;
    float:right;
}

</style>