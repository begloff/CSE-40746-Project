<template>
    <div class="creatorHeader">
        <b>Workout Creator</b>
    </div>

    <div class="create">
        Create me a random ___ workout:
        <div class="buttons">
            <button class="split" v-for="split in this.splits">{{split}}</button>
        </div>
        <button class="rainbow"><b>Surprise me!</b></button>
    </div>

    <div style="margin-top:20px; font-size: 3vw;">
        Current Workout:
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
//            currWorkout: [],          MOVED TO STORE
            date: '',
            split: null,
            reps: 0,
            sets: 0
		}
	},
	methods:{

		logout(){
            this.$store.dispatch('logout')
        },


        async addWorkout(){         // money
            var sql = `insert into sessions (sdate, workout_type, user_id, name) values (to_date('${this.date}', 'yyyy-dd-mm'), '${this.$store.state.createdWorkout[1]}', ${this.$store.state.user_details.username}, '${this.$store.createdWorkout[0]}')`;
            var resp = await axios.post(`http://3.89.12.221:8004/db.py/?sql=${sql}`);
            sql = `select session_id from sessions order by session_id`;
            resp = await axios.post(`http://3.89.12.221:8004/db.py/?sql=${sql}`);
            var seshID = resp[-1][0]

            sql = ``
            for (exercise in this.$store.state.createdWorkout[2])
                sql += `insert into log (exercise_id, session_id, reps, sets) values (${exercise[0]}, ${seshID}, ${exercise[2]}, ${exercise[1]});`

            resp = await axios.post(`http://3.89.12.221:8004/db.py/?sql=${sql}`);
            this.$store.state
        },

        async deleteWorkout(seshID) {   // money??
            var sql = `delete from log where session_id = ${seshID}`;
            sql += `delete from sessions where session_id = ${seshID}`;
            resp = await axios.post(`http://3.89.12.221:8004/db.py/?sql=${sql}`);
        },

        addToWorkout(id){           // good i think
            var workout = [id, this.sets, this.reps];
            this.$store.state.createdWorkout[2].push(workout)
        },

        removeFromWorkout(index){   // good i think
            const garbage = this.$store.state.createdWorkout[2].splice(index,index)
        }

    },
	beforeMount(){
	}
};
</script>

<style>

.creatorHeader {
    color: #002540;
    width: 60%;
    border-bottom: 3px solid #002540;
    text-shadow: 2px 2px #FFC631;
    background-color: #ffffff;
    font-size: 5.3vw;
    margin: auto;
    margin-bottom: 30px;
    font-family: monospace;
    height:auto;
}

.create {
    margin:auto;
    margin-top:20px;
    width:75%;
    height:18vw;
    border: 3px dotted #002540;
    padding-top: 2%;
    font-size:1.5vw;
}
.buttons {
	width: 90%;
	height: 50%;
	display: flex;
	justify-content: space-around;
	text-align:center;
	margin: auto;
    margin-top: 0px;
}

.split {
	border-color: #FFC631;
	background-color: #002540;
    width: 13%;
	color: white;
	padding: 10px;
	border-radius: 6px;
	margin-bottom: 50px;
	justify-content: space-around;
	text-align:center;
    font-size:1.4vw;
    font-family:Georgia, 'Times New Roman', Times, serif;
	margin: auto;
	padding: 15px;
    display: inline-block;
    height: 4vw;
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
	justify-content: space-around;
	text-align:center;
	margin: auto;
	padding: 15px;
    display: inline-block;
    font-family:Georgia, 'Times New Roman', Times, serif;
    width: 14vw;
    height: 4vw;
    font-size: 1.3vw;
}
.rainbow:hover{
    background-image: linear-gradient(to top left, indigo, violet, red, orange, yellow, green, blue );
}
.hl {
    height:2px;
    width:30%;
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