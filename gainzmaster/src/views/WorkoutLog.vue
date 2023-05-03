<template>
    <div class="header">
        <h1>Workout Log</h1>
    </div>
    <div class="log">
        <div v-if="this.sessions.length > 0">
            <h2>Hello, {{this.$store.state.user_details.username}}. Here is a description of your last {{ this.sessions.length }} logged workouts:</h2>
            <div class="logEntry" v-for="(workout,index) in this.sessions">
                <div class="logEntryHeader">
                    <div style="width:5%; display: inline-block;">
                        <button class="removeFromLog" v-on:click="removeFromLog(index, workout[0])">-</button>
                    </div>
                    <div style="width:55%; display: inline-block;">
                        {{ workout[3] }}
                    </div>
                    <div style="width:10%; display: inline-block;">
                        {{ workout[2] }}
                    </div>
                    <div style="width:30%; display: inline-block;">
                        {{ workout[1] }}
                    </div>
                </div>
                <div class="logEntryBody" v-for="exercise in workout[4]">
                    <div>
                        <div style="width:70%; display: inline-block;">{{ exercise[0] }}</div>
                        <div style="width:30%; display: inline-block;">{{ exercise[1] }} x {{ exercise[1] }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h2>No workouts logged 😭😭😭</h2>
        </div>
    </div>


</template>

<script>
import axios from 'axios';

export default {
	components: {},
	data(){
		return {
            sessions: []
		}
	},
	methods:{

		logout(){
            this.$store.dispatch('logout')
        },

        async getLog(){
                // get user id's
            var sql = `select user_id from users where username = '${this.$store.state.user_details.username}'`;
            var resp = await axios.get(`http://3.89.12.221:8004/db.py/?sql=${sql}`);
            var user_id = resp.data[0]

                // get sessions
            var sql = `select session_id, to_char(sdate), workout_type, name from sessions where user_id = ${user_id}`;
            resp = await axios.get(`http://3.89.12.221:8004/db.py/?sql=${sql}`);
            this.sessions = resp.data

                // get session logs
            sql = `select exercise_name, reps, sets, log.session_id from sessions join log on sessions.session_id = log.session_id, exercises where sessions.user_id = ${user_id} and log.exercise_id = exercises.exercise_id order by sessions.session_id;`
            resp = await axios.get(`http://3.89.12.221:8004/db.py/?sql=${sql}`);
            var log = resp.data

                // append session logs to sessions
            for(let i = 0; i < this.sessions.length; i++){
                this.sessions[i].push([])
                for(let j = 0; j < log.length; j++){
                    if (this.sessions[i][0] == log[j][3]){
                        this.sessions[i][4].push(log[j])
                    }
                }
            }
        },

        async removeFromLog(index, sessionID){
            if (index == 0){
                this.sessions.splice(0,1);
            }
            else{
                this.sessions.splice(index,index)
            }
            var sql = `delete from log where session_id = ${sessionID}; delete from sessions where session_id = ${sessionID}`
            console.log(sql)
            var resp = await axios.post(`http://3.89.12.221:8004/db.py/?sql=${sql}`);
            console.log(resp)
        }


    },
	beforeMount(){
        this.getLog()
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
    background-color: #80828336;
    border: 4px groove #002540;
    border-radius: 1%;
    width: 60%;
    padding: 2%;
    padding-left: 10%;
    padding-right: 10%;
    text-align: center;
    margin:auto;
    margin-top: 2%;
}

.logEntry{
    margin:auto;
    width:90%;
    background-color: #002540;
    color: #FFC631;
    margin-bottom: 5%;
    border:2px solid #FFC631;
}

.logEntryHeader{
    border-bottom: 3px dashed #FFC631;
    font-size: 2vw;
}

.logEntryBody{
    width:90;
    font-size: 2.7vh;
}

.removeFromLog{
    background-color: red;
    color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin:auto;
}


</style>