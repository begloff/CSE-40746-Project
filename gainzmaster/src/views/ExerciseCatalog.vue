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
                    <div class="col"></div>
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
                    <tr v-for="entry in this.exerciseData" class="hoverable">
                        <th scope="row">{{entry[2]}}</th>
                        <th scope="row">
                            <div class="row">
                                <div class="col">
                                    <p class="centered">{{this.$store.state.groupData[this.$store.state.muscleData[entry[1] - 1][2] - 1][0]}}</p>
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
        }
    },

    methods:{
        async loadData(){

            this.exerciseData = this.$store.state.exerciseData
            console.log(this.exerciseData)
        },

        getSrc(muscle){
            var images = require.context('../assets/muscles/', false, /\.jpg$/)
            return images('./' + muscle + ".jpg")
        }
    },

    async mounted(){
        await this.loadData()
    }

}
</script>

<style>

</style>