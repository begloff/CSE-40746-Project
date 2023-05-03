<template>
    <div class="new-backdrop" @click.self="closeModal">
        <div class="new-modal">
            <h2>Log Workout</h2>

              <div style="margin-bottom:.5%">
                <label for="name">Enter Workout Name: </label>
                <input id="name" type="text" v-model="currWorkout[0]">
              </div>
              <div style="margin-bottom:.5%">
                <label for="splt" >Enter Workout Split: </label>
                <select id="split" v-model="currWorkout[2]">
                  <option v-for="split in this.splits">{{split}}</option>
                </select>
              </div>
              <div style="margin-bottom:.5%">
                <label for="date">Enter Workout Date: </label>
                <input type="date" v-model="currWorkout[1]">
              </div>

            <div v-if="currWorkout[1]!=null && currWorkout[2]!=''">
              <button class="split" style="height:auto" v-on:click="addWorkout(); submitModal()">Submit Workout</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {

    data(){
        return{
            splits: ['Push', 'Pull', 'Upper', 'Legs', 'Other']
        }
    },

    components:{
    },

    methods:{
        closeModal(){
            this.$emit('close')
        },

        submitModal(){
            this.$emit('clearIt')
        },

        async addWorkout(){         // money
                // get user id
            var sql = `select user_id from users where username = '${this.$store.state.user_details.username}'`;
            var resp = await axios.get(`http://3.89.12.221:8004/db.py/?sql=${sql}`);
            var user_id = resp.data[0]
            console.log(resp)

                // post user session
            sql = `insert into sessions (sdate, workout_type, user_id, name) values (to_date('${this.currWorkout[1]}', 'yyyy-mm-dd'), '${this.currWorkout[2]}', '${user_id}', USERINPUT:${this.currWorkout[0]})END`;
            resp = await axios.post(`http://3.89.12.221:8004/db.py/?sql=${sql}`);
            console.log(resp)

                // get session id
            sql = `select session_id from sessions where user_id = ${user_id} order by session_id desc`;
            resp = await axios.get(`http://3.89.12.221:8004/db.py/?sql=${sql}`);
            var seshID = resp.data[0]
            console.log(resp)

                // push to log
            sql = ``
            for ( let i = 0; i < this.currWorkout[3].length; i++) {
                sql += `insert into log (exercise_id, session_id, reps, sets) values (${this.currWorkout[3][i][0][0]}, ${seshID}, ${this.currWorkout[3][i][2]}, ${this.currWorkout[3][i][1]}); `
            }

            resp = await axios.post(`http://3.89.12.221:8004/db.py/?sql=${sql}`);
            console.log(resp)

            this.submitModal()

        }
    },

    props: ['currWorkout']
}
</script>

<style>
.descriptor{
  font-style: normal;
  color: rgb(161, 154, 154);
}
.new-modal {
  width: auto;
  height: auto;
  padding: 10px;
  margin: 50px 50px;
  max-height: 85%;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  overflow-y: auto;
}

.new-backdrop {
  top: 0;
  position: fixed;
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
}

.new-modal h1 {
  color: #2c3e50;
  border: none;
  padding: 0;
}

.new-modal p {
    font-style: italic;
    color: #2c3e50;
}

.new-modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
  color: #333;
}
.new-modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}


</style>