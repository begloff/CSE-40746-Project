<template>
    <div class="row">
        <div class="col">
            <h1>Exercise Catalog</h1>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <p style="font-style: italic;">Search our extensive database for a specific exercise or learn about new ones!</p>
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
                </div>

                <div class="row" style="margin-bottom: 50px;">
                    <div class="col">
                        <input type="text" name="exerciseName" v-model="exerciseName">
                    </div>
                    <div class="col">
                        <select name="muscleGroup" v-model="muscleGroup">
                            <option value="All">All</option>
                            <option :value="entry" v-for="entry in this.$store.state.groupData">{{entry[0]}}</option>
                        </select>
                    </div>
                    <div class="col">
                        <select name="detailedMuscle" v-model="detailedMuscle">
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
                        <select name="equipment" v-model="equipment">
                            <option value="All">All</option>
                            <option :value="entry" v-for="entry in this.equipmentList">{{entry}}</option>
                        </select>
                    </div>
                    <div class="col">
                        <select name="utility" v-model="utility">
                            <option value="All">All</option>
                            <option :value="entry" v-for="entry in this.utilityList">{{entry}}</option>
                        </select>
                    </div>
                    <div class="col">
                        <select name="mechanics" v-model="mechanics">
                            <option value="All">All</option>
                            <option :value="entry" v-for="entry in this.mechanicsList">{{entry}}</option>
                        </select>
                    </div>
                    <div class="col">
                        <select name="foce" v-model="force">
                            <option value="All">All</option>
                            <option :value="entry" v-for="entry in this.forceList">{{entry}}</option>
                        </select>
                    </div>
                </div>

                <div class="row" style="margin-bottom: 20px;">
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
                        <th scope="col">Name</th>
                        <th scope="col">Muscle Group</th>
                        <th scope="col">Detailed Muscle</th>
                        <th scope="col">Equipment</th>
                        <th scope="col">Utility</th>
                        <th scope="col">Mechanics</th>
                        <th scope="col">Muscle Force</th>
                    </tr>
                </thead>
                <tbody v-if="this.exerciseData">
                    <tr @click="$router.push({ path: `/exercisecatalog/${entry[0]}`})" v-for="entry in this.exerciseData" class="hoverable">
                        <th scope="row">{{entry[2]}}</th>
                        <th scope="row">
                            <div class="row">
                                <div class="col">
                                    <p class="center">{{this.$store.state.groupData[this.$store.state.muscleData[entry[1] - 1][2] - 1][0]}}</p>
                                </div>
                                <div class="col">
                                    <img :src="getSrc(this.$store.state.groupData[this.$store.state.muscleData[entry[1] - 1][2]-1][0])" style="width: 50px; margin-top: 10px;">
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
                    </tr>
                </tbody>
            </table>
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
            forceList: []
        }
    },

    methods:{
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
            
        }
    },

    async mounted(){
        await this.loadData()
    }

}
</script>

<style>

</style>