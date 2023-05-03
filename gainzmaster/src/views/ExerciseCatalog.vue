<template>
    <div class="header">
        <h1>Exercise Catalog</h1>
    </div>

    <div class="row">
        <div class="col">
            <p style="font-style: italic;">Search our extensive database for a specific exercise or learn about new ones!</p>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <p style="font-style: italic;">Each exercise can be searched by the equipment necessary, muscle utility, muscle mechanics, and muscle force.</p>
        </div>
    </div>

    <hr style="	border-top: 7px double #2c3e50; color: #2c3e50;">

    <div class="row">
        <div class="col">
            <h3>Preferability Scale:</h3>
            <p style="font-style: italic">Each exercise is color coded according to how gym experts would rank them!</p>
        </div>
    </div>

    <div class="row" style="padding-bottom: 20px; width: 95%;margin-left: auto;margin-right: auto;">
        <div class="square1">
            <p style="color:white; font-weight: bold;">1</p>
        </div>
        <div class="square2">
            <p style="color:white; font-weight: bold;">2</p>
        </div>
        <div class="square3">
            <p style="color:white; font-weight: bold;">3</p>
        </div>
        <div class="square4">
            <p style="color:white; font-weight: bold;">4</p>
        </div>
        <div class="square5">
            <p style="color:white; font-weight: bold;">5</p>
        </div>
        <div class="square6">
            <p style="color:white; font-weight: bold;">6</p>
        </div>
        <div class="square7">
            <p style="color:white; font-weight: bold;">7</p>
        </div>
        <div class="square8">
            <p style="color:white; font-weight: bold;">8</p>
        </div>
        <div class="square9">
            <p style="color:white; font-weight: bold;">9</p>
        </div>
        <div class="square10">
            <p style="color:white; font-weight: bold;">10</p>
        </div>
    </div>

    <hr style="	border-top: 7px double #2c3e50; color: #2c3e50;">

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
                    <div class="col">
                        <label for="sortByPref" class="text-label">Sort By Preferability</label>
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
                    <div class="col">
                        <input type="checkbox" v-model="preferabilityCheck" @click="sortPref" name="sortByPref">
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label for="equipment" class="text-label">Equipment/Method</label>
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
        <div class="col2" v-if="this.exerciseData">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Muscle Group</th>
                        <th scope="col">Detailed Muscle</th>
                        <th scope="col">Equipment/Method</th>
                        <th scope="col">Utility</th>
                        <th scope="col">Mechanics</th>
                        <th scope="col">Muscle Force</th>
                        <th scope="col">Preferability</th>
                    </tr>
                </thead>
                <tbody>
                    <tr @click="$router.push({ path: `/exercisecatalog/${entry[0]}`})" v-for="entry in this.exerciseData" class="hoverable">
                        <th scope="row">{{entry[2]}}</th>
                        <th scope="row">
                            <div class="row">
                                <div class="col" style="width: 50%;">
                                    <p class="center">{{this.$store.state.groupData[this.$store.state.muscleData[entry[1] - 1][2] - 1][0]}}</p>
                                </div>
                                <div class="col" style="width: 50%;">
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
        <div class="col" v-else>
            <h3 style="color: red;">Sorry! Your search returned no results.</h3>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <button class="btn" style="margin-top: 20px; margin-bottom: 20px;" @click="expandTable" :disabled="!expand">See More Entries</button>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            exerciseData: null,
            exerciseName: null,
            detailedMuscle: 'All',
            muscleGroup: 'All',
            equipment: 'All',
            utility: 'All',
            mechanics: 'All',
            force: 'All',
            equipmentList: [],
            utilityList: [],
            mechanicsList: [],
            forceList: [],
            tableIndex: 50,
            filteredData: null,
            expand: true,
            preferabilityCheck: false,
        }
    },
    methods:{
        expandTable(){
            if (this.filteredData.length > this.exerciseData.length + 50){
                //Can you expand more?
                this.tableIndex += 50
                this.exerciseData = this.filteredData.slice(0, this.tableIndex)
                this.expand = true
            } else {
                this.exerciseData = this.filteredData
                this.expand = false
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
            for( var i = 0; i < this.$store.state.exerciseData.length; i++){
                if (!this.equipmentList.includes(this.$store.state.exerciseData[i][3])){
                    this.equipmentList.push(this.$store.state.exerciseData[i][3])
                }
                if (!this.utilityList.includes(this.$store.state.exerciseData[i][4])){
                    this.utilityList.push(this.$store.state.exerciseData[i][4])
                }
                if (!this.mechanicsList.includes(this.$store.state.exerciseData[i][5])){
                    this.mechanicsList.push(this.$store.state.exerciseData[i][5])
                }
                if (!this.forceList.includes(this.$store.state.exerciseData[i][6])){
                    this.forceList.push(this.$store.state.exerciseData[i][6])
                }
            }
            this.equipmentList = this.equipmentList.sort();
            this.utilityList = this.utilityList.sort();
            this.mechanicsList = this.mechanicsList.sort();
            this.forceList = this.forceList.sort();
            this.expand = true
            this.exerciseData = this.$store.state.exerciseData.slice(0, 50)
            this.filteredData = this.$store.state.exerciseData

        },
        getSrc(muscle){
            var images = require.context('../assets/muscles/', false, /\.jpg$/)
            return images('./' + muscle + ".jpg")
        },
        async filterMuscles(){
            // TODO: Filter every column based on inputs

            //preferabilityCheck is true when box is unchecked --> true = random,
            if(this.preferabilityCheck){
                var sql = `select * from exercises order by preferability asc`
                var resp = await axios.get(`http://3.89.12.221:8004/db.py/?sql=${sql}`)
                console.log(resp.data)
                this.filteredData = resp.data
            } else {
                this.filteredData = this.$store.state.exerciseData
            }

            if(this.exerciseName != null && this.exerciseName != ''){
                //filter based on input
                var name = this.exerciseName
                this.filteredData = this.filteredData.filter(function(entry){
                    return entry[2].toLowerCase().includes(name.toLowerCase())
                })
            }
            if (this.muscleGroup != 'All'){
                var group = this.muscleGroup
                var muscleData = this.$store.state.muscleData
                var groupData = this.$store.state.groupData
                this.filteredData = this.filteredData.filter(function(entry){
                    return groupData[muscleData[entry[1] - 1][2] - 1][0] == group[0]
                })
            }
            if (this.detailedMuscle != 'All'){
                var muscleData = this.$store.state.muscleData
                var detailedMuscle = this.detailedMuscle
                this.filteredData = this.filteredData.filter(function(entry){
                    return muscleData[entry[1] - 1][0] == detailedMuscle[0]
                })
            }
            if(this.equipment != 'All'){
                var equipment = this.equipment
                this.filteredData = this.filteredData.filter(function(entry){
                    return entry[3] == equipment
                })
            }
            if(this.utility != 'All'){
                var utility = this.utility
                this.filteredData = this.filteredData.filter(function(entry){
                    return entry[4] == utility
                })
            }
            if(this.mechanics != 'All'){
                var mechanics = this.mechanics
                this.filteredData = this.filteredData.filter(function(entry){
                    return entry[5] == mechanics
                })
            }
            if(this.force != 'All'){
                var force = this.force
                this.filteredData = this.filteredData.filter(function(entry){
                    return entry[6] == force
                })
            }

            // Filtered Data contains the queried for data --> transfer 50 or however many are in there

            if (this.filteredData.length > 50) {
                this.exerciseData = this.filteredData.slice(0,50)
                this.tableIndex = 50
                this.expand = true
            } else if (this.filteredData.length == 0){
                this.exerciseData = null
                this.tableIndex = 50
            } else {
                this.exerciseData = this.filteredData
                this.expand = false
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
            this.preferabilityCheck = false
            
        }
    },
    async mounted(){
        await this.loadData()
    }
}
</script>

<style>
.btn {
    border-color: #FFC631;
    background-color: #002540;
    color: white;
    padding: 10px;
    border-radius: 6px;
    margin-bottom: 50px;
    font-size: 1.0em;
}
.btn:hover {
	background-color: #145c8b;
}
.btn:disabled {
	background-color: #4e4f50;
    cursor: not-allowed;
}
.square0{
  height: 50px;
  width: 50px;
  background-color: #1aed76;
  flex:1;    
}
.square1{
  height: 50px;
  width: 50px;
  background-color: #1fcc4d; 
  flex:1;    
}
.square2{
  height: 50px;
  width: 50px;
  background-color: #45de43;  
  flex:1;    
}
.square3{
  height: 50px;
  width: 50px;
  background-color: #7bde43; 
  flex:1;    
}
.square4{
  height: 50px;
  width: 50px;
  background-color: #98de43;   
  flex:1;    
}
.square5{
  height: 50px;
  width: 50px;
  background-color: #b2de43;
  flex:1;    
}
.square6{
  height: 50px;
  width: 50px;
  background-color: #d6de43; 
  flex:1;    
}
.square7{
  height: 50px;
  width: 50px;
  background-color: #dec743;  
  flex:1;    
}
.square8{
  height: 50px;
  width: 50px;
  background-color: #dead43;  
  flex:1;    
}
.square9{
  height: 50px;
  width: 50px;
  background-color: #de9843; 
  flex:1;    
}
.square10{
  height: 50px;
  width: 50px;
  background-color: #de7b43; 
  flex:1;    
}
</style>