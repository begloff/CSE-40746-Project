<template>
    <div class="creatorHeader">
        <b>Workout Creator</b>
    </div>

    <div class="create">
        Create me a random ___ workout:
        <div class="buttons">
            <button class="split" v-for="split in this.splits" v-on:click="getRandomWorkout(split)">{{split}}</button>
        </div>
        <button class="rainbow"><b>Surprise me!</b></button>
    </div>

    <div style="margin-top:20px; font-size: 3vw;">
        Current Workout:
        <div class="hl"></div>
        <div class="workouts">
            <div v-if="currWorkout[3].length > 0">
                <table class="table" style="text-align: center; margin-top: 2%; margin-bottom: 2%;">
                    <thead>
                        <tr>
                            <th scope="col">Remove Exercise</th>
                            <th scope="col">Exercise</th>
                            <th scope="col">Sets</th>
                            <th scope="col">Reps</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="(exercise,index) in this.currWorkout[3]" class="hoverable">
                            <th scope="row"><button class="removeFromWorkout" v-on:click.stop="removeFromWorkout(index)">-</button></th>
                            <th scope="row">{{exercise[0][1]}}</th>
                            <th scope="row"> <input type="text" v-model="exercise[1]" style="font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; text-align: center; width:30%;"> </th>
                            <th scope="row"> <input type="text" v-model="exercise[2]" style="font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; text-align: center; width:30%;"> </th>
                        </tr>
                    </tbody>
                </table>

                <div class="buttons" style="text-align:center; margin-bottom: 2vh;">
                    <button class="split" style="width:30%; margin:auto;" v-on:click="clearWorkout">Clear workout</button>
                    <button class="split" style="width:30%; margin:auto;" v-on:click="toggleModal"> Complete workout</button>
                </div>
            </div>

            <div style="text-align: center;" v-else>
                <p>No exercises selected 😭😭😭</p>
            </div>
<<<<<<< HEAD
            
        </div>
    </div>
    <CreatorModal v-if="showModal" :currWorkout="currWorkout" :resetWorkout="resetFields" @close="toggleModal" @clearIt="toggleModal();clearWorkout()" />
=======
            <div style="text-align:center; margin-bottom: 2vh;">
                <button class="split" style="width:30%; margin:auto;" v-on:click="toggleModal">Add workout to log</button>
            </div>
        </div>
    </div>
    <CreatorModal v-if="showModal" @close="toggleModal"/>
>>>>>>> 8bb8c39 (modal work)

    <div class="row">
        <div class="col">
            <div class="searchEngine">
                <div class="row">
                    <div class="col">
                        <h3>Exercise Search</h3>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label for="exerciseName" class="text-label">Name</label>
                    </div>
                    <div class="col">
                        <label for="muscleGroup" class="text-label">Muscle Group</label>
                    </div>
                    <div class="col">
                        <label for="detailedMuscle" class="text-label">Detailed Muscle</label>
                    </div>
                </div>

                <div class="row" style="margin-bottom: 50px;">
                    <div class="col">
                        <input type="text" name="exerciseName" v-model="exerciseName" style="width: 75%;">
                    </div>
                    <div class="col">
                        <select name="muscleGroup" v-model="muscleGroup" style="width: 75%;">
                            <option value="All">All</option>
                            <option :value="entry" v-for="entry in this.$store.state.groupData">{{entry[0]}}</option>
                        </select>
                    </div>
                    <div class="col">
                        <select name="detailedMuscle" v-model="detailedMuscle" style="width: 75%;">
                            <option value="All">All</option>
                            <option :value="entry" v-for="entry in this.$store.state.muscleData">{{entry[0]}}</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label for="equipment" class="text-label">Equipment</label>
                    </div>
                    <div class="col">
                        <label for="utility" class="text-label">Utility</label>
                    </div>
                    <div class="col">
                        <label for="mechanics" class="text-label">Mechanics</label>
                    </div>
                    <div class="col">
                        <label for="force" class="text-label">Muscle Force</label>
                    </div>
                </div>

                <div class="row" style="margin-bottom: 50px;">
                    <div class="col">
                        <select name="equipment" v-model="equipment" style="width: 75%;">
                            <option value="All">All</option>
                            <option :value="entry" v-for="entry in this.equipmentList">{{entry}}</option>
                        </select>
                    </div>
                    <div class="col">
                        <select name="utility" v-model="utility" style="width: 75%;">
                            <option value="All">All</option>
                            <option :value="entry" v-for="entry in this.utilityList">{{entry}}</option>
                        </select>
                    </div>
                    <div class="col">
                        <select name="mechanics" v-model="mechanics" style="width: 75%;">
                            <option value="All">All</option>
                            <option :value="entry" v-for="entry in this.mechanicsList">{{entry}}</option>
                        </select>
                    </div>
                    <div class="col">
                        <select name="foce" v-model="force" style="width: 75%;">
                            <option value="All">All</option>
                            <option :value="entry" v-for="entry in this.forceList">{{entry}}</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <button class="btn" @click="resetFields">Reset Fields</button>
                    </div>
                    <div class="col">
                        <button class="btn" @click="filterMuscles">Search</button>
                    </div>
                </div>

            </div>
        </div>
    </div>


    <div class="row">
        <div class="col2">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Add Exercise</th>
                        <th scope="col">Name</th>
                        <th scope="col">Muscle Group</th>
                        <th scope="col">Detailed Muscle</th>
                        <th scope="col">Equipment</th>
                        <th scope="col">Utility</th>
                        <th scope="col">Mechanics</th>
                        <th scope="col">Muscle Force</th>
                        <th scope="col">Preferability</th>
                    </tr>
                </thead>
                <tbody v-if="this.exerciseData">
                    <tr  v-for="entry in this.exerciseData" class="hoverable" @click="$router.push({ path: `/exercisecatalog/${entry[0]}`})">
                        <td scope="row"><button class="addToWorkout" v-on:click.stop="addToWorkout(entry)">+</button></td> 
                        <th scope="row">{{entry[2]}}</th>
                        <th scope="row">
                            <div class="row">
                                <div class="col">
                                    <p class="center">{{this.$store.state.groupData[this.$store.state.muscleData[entry[1] - 1][2] - 1][0]}}</p>
                                </div>
                                <div class="col">
                                    <img :src="getSrc(this.$store.state.groupData[this.$store.state.muscleData[entry[1] - 1][2]-1][0])" style="max-width: 100%; margin-top: 10px;">
                                </div>
                            </div>
                        </th>
                        
                        <th scope="row">{{this.$store.state.muscleData[entry[1] - 1][0]}}</th>
                        <th scope="row">{{entry[3]}}</th>
                        <th scope="row" v-if="entry[4]">{{entry[4]}}</th>
                        <th scope="row" v-else>~</th>
                        <th scope="row" v-if="entry[5]">{{entry[5]}}</th>
                        <th scope="row" v-else>~</th>
                        <th scope="row" v-if="entry[6]">{{entry[6]}}</th>
                        <th scope="row" v-else>~</th>
                        <th scope="row" :style="colorCell(entry[11])">{{entry[11]}}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>




<script>
import axios from 'axios';
import CreatorModal from '../components/CreatorModal.vue'
<<<<<<< HEAD


export default {

    components: {
=======

export default {
	components: {
>>>>>>> 8bb8c39 (modal work)
        CreatorModal
    },
	data(){
		return {
			splits: ['Push', 'Pull', 'Upper', 'Legs'],
            currWorkout: this.$store.state.creatorData[7],
            date: '2023-28-06',

            exerciseData: null,
            exerciseName: this.$store.state.creatorData[0],
            detailedMuscle: this.$store.state.creatorData[1],
            muscleGroup: this.$store.state.creatorData[2],
            equipment: this.$store.state.creatorData[3],
            utility: this.$store.state.creatorData[4],
            mechanics: this.$store.state.creatorData[5],
            force: this.$store.state.creatorData[6],
            equipmentList: [],
            utilityList: [],
            mechanicsList: [],
            forceList: [],

            showModal: false
        }
	},
	methods:{

		logout(){
            this.$store.dispatch('logout')
        },

        async deleteWorkout(seshID) {   // money??
            var sql = `delete from log where session_id = ${seshID}`;
            sql += `delete from sessions where session_id = ${seshID}`;
            resp = await axios.post(`http//3.89.12.221:8004/db.py/?sql=${sql}`);
        },

        addToWorkout(entry){           // money
            var workout = [[entry[0], entry[2]], 0, 0];
            this.currWorkout[3].push(workout)
        },

        removeFromWorkout(index){   // good i think
            if (index == 0){
                this.currWorkout[3].splice(0,1);
            }
            else{
                this.currWorkout[3].splice(index,index)
            }
        },



        colorCell(range){
            if (range == 1){
                return 'background-color: #1fcc4d; color: white;'
            }
            else if (range == 2){
                return 'background-color: #45de43; color: white;'
            }
            else if (range == 3){
                return 'background-color: #7bde43; color: white;'
            }
            else if (range == 4){
                return 'background-color: #98de43; color: white;'
            }
            else if (range == 5){
                return 'background-color: #b2de43; color: white;'
            }
            else if (range == 6){
                return 'background-color: #d6de43; color: white;'
            }
            else if (range == 7){
                return 'background-color: #dec743; color: white;'
            }
            else if (range == 8){
                return 'background-color: #dead43; color: white;'
            }
            else if (range == 9){
                return 'background-color: #de9843; color: white;'
            }
            else if (range == 10){
                return 'background-color: #de7b43; color: white;'
            }
        },
        async loadData(){

            this.exerciseData = this.$store.state.exerciseData

            for( var i = 0; i < this.exerciseData.length; i++){
                if (!this.equipmentList.includes(this.exerciseData[i][3])){
                    this.equipmentList.push(this.exerciseData[i][3])
                }
                if (!this.utilityList.includes(this.exerciseData[i][4])){
                    this.utilityList.push(this.exerciseData[i][4])
                }
                if (!this.mechanicsList.includes(this.exerciseData[i][5])){
                    this.mechanicsList.push(this.exerciseData[i][5])
                }
                if (!this.forceList.includes(this.exerciseData[i][6])){
                    this.forceList.push(this.exerciseData[i][6])
                }
            }

            this.equipmentList = this.equipmentList.sort();
            this.utilityList = this.utilityList.sort();
            this.mechanicsList = this.mechanicsList.sort();
            this.forceList = this.forceList.sort();

        },

        getSrc(muscle){
            var images = require.context('../assets/muscles/', false, /\.jpg$/)
            return images('./' + muscle + ".jpg")
        },

        filterMuscles(){
            // TODO: Filter every column based on inputs
            this.exerciseData = this.$store.state.exerciseData

            if(this.exerciseName != null && this.exerciseName != ''){
                //filter based on input

                var name = this.exerciseName

                this.exerciseData = this.exerciseData.filter(function(entry){
                    return entry[2].toLowerCase().includes(name.toLowerCase())
                })
            }

            if (this.muscleGroup != 'All'){

                var group = this.muscleGroup
                var muscleData = this.$store.state.muscleData
                var groupData = this.$store.state.groupData

                this.exerciseData = this.exerciseData.filter(function(entry){
                    return groupData[muscleData[entry[1] - 1][2] - 1][0] == group[0]
                })

            }

            if (this.detailedMuscle != 'All'){

                var muscleData = this.$store.state.muscleData
                var detailedMuscle = this.detailedMuscle

                this.exerciseData = this.exerciseData.filter(function(entry){
                    return muscleData[entry[1] - 1][0] == detailedMuscle[0]
                })
            }

            if(this.equipment != 'All'){
                var equipment = this.equipment

                this.exerciseData = this.exerciseData.filter(function(entry){
                    return entry[3] == equipment
                })
            }

            if(this.utility != 'All'){
                var utility = this.utility

                this.exerciseData = this.exerciseData.filter(function(entry){
                    return entry[4] == utility
                })
            }

            if(this.mechanics != 'All'){
                var mechanics = this.mechanics

                this.exerciseData = this.exerciseData.filter(function(entry){
                    return entry[5] == mechanics
                })
            }

            if(this.force != 'All'){
                var force = this.force

                this.exerciseData = this.exerciseData.filter(function(entry){
                    return entry[6] == force
                })
            }
        },

        resetFields(){

            this.exerciseName = ''
            this.detailedMuscle = 'All'
            this.muscleGroup = 'All'
            this.equipment = 'All'
            this.utility = 'All'
            this.mechanics = 'All'
            this.force = 'All'

        },

        setFields(){
            this.exerciseName= this.$store.state.creatorData[0]
            this.detailedMuscle= this.$store.state.creatorData[1]
            this.muscleGroup= this.$store.state.creatorData[2]
            this.equipment= this.$store.state.creatorData[3]
            this.utility= this.$store.state.creatorData[4]
            this.mechanics= this.$store.state.creatorData[5]
            this.force= this.$store.state.creatorData[6]
        },

<<<<<<< HEAD
        clearWorkout(){
            this.currWorkout = ['Untitled Workout','', '', []]
        },

        toggleModal(){
            this.showModal = !this.showModal
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

        async getRandomWorkout(chosenSplit){
			var chosenNum = Math.floor(Math.random() * this.workoutSplits.length);
			var muscles = null
			var payload = ``;
			var queries = [];

			if (chosenSplit == 'push')
				muscles = this.splitMuscles['push'];
			else if (chosenSplit == 'pull')
				muscles = this.splitMuscles['pull'];
			else if (chosenSplit == 'upper')
				muscles = this.splitMuscles['upper'];
			else if (chosenSplit == 'legs')
				muscles = this.splitMuscles['legs'];


			for (let i = 0, len = muscles.length; i < len; i++) {
				queries.push(`select * from exercises where muscle_force = '${chosenSplit}'`);
			}


			for (let i = 0, len = queries.length; i < len; i++) {
				if (i < queries.length -1)
					payload += ` (${queries[i]}), `;
				else
					payload += ` (${queries[i]})`;
			}



			var sql = `select * from ${payload};`;
			var resp = await axios.get(`http://3.89.12.221/db.py/?sql=${sql}`)
		},

=======
        toggleModal(){
            this.showModal = !this.showModal
        }
>>>>>>> 8bb8c39 (modal work)

    },

    beforeMount(){
        this.setFields()
    },

    beforeRouteLeave(){
        this.$store.state.creatorData = [ this.exerciseName, this.detailedMuscle, this.muscleGroup, this.equipment, this.utility, this.mechanics, this.force, this.currWorkout ]
    },

	async mounted(){
        await this.loadData()
    },
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
    width: 60%;
    margin:auto;
    font-size: large;
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

.addToWorkout{
    background-color: green;
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
.removeFromWorkout{
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