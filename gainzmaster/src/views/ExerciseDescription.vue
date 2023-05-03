<template>
    <div v-if="exerciseData">
        <div class="row" style="margin-top:1%; margin-bottom:1%;">
            <div class="col">
                <div class="muscleHeader" v-if="exerciseData">
                    {{ exerciseData[2] }}
                </div>
            </div>
        </div>

        <hr style="	border-top: 7px double #2c3e50; color: #2c3e50;">

        <div class="row">
            <div class="col">
                <img :src="exerciseData[10]" style="width: 50%; border: 8px double #ffc631;">
            </div>
            <div class="col">
                <ul class="descriptionList">
                    <li class="descriptionListItem">Equipment/Method: {{exerciseData[3]}}</li>
                    <li class="descriptionListItemMuscle" @click="$router.push({ path: `/musclecatalog/${$store.state.muscleData[exerciseData[1] - 1][1]}`})">Muscle/Area of Focus: {{$store.state.muscleData[exerciseData[1] - 1][0]}}</li>
                    <li class="descriptionListItem">Utility: {{exerciseData[4]}}</li>
                    <li class="descriptionListItem">Mechanics: {{exerciseData[5]}}</li>
                    <li class="descriptionListItem">Muscle Force: {{exerciseData[6]}}</li>
                </ul>
            </div>
        </div>

        <hr style="	border-top: 7px double #2c3e50; color: #2c3e50;">

        <!-- preparation, execution, comments -->

        <div v-if="exerciseData[7] && exerciseData[7] != 'Other'">

            <div class="row">
                <div class="col">
                    <h2 style="background-color: #002540; color: white; font-family: serif; font-weight: normal;">Exercise Preparation:</h2>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <p style="font-family: serif;">{{exerciseData[7]}}</p>
                </div>
            </div>

        </div>

        <div v-if="exerciseData[8] && exerciseData[8] != 'Other'">
            <div class="row">
                <div class="col">
                    <h2 style="font-family: serif; font-weight: normal; background-color: #002540; color: white;">Exercise Execution:</h2>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <p style="font-family: serif;">{{exerciseData[8]}}</p>
                </div>
            </div>

        </div>

        <hr v-if="exerciseData[7] != 'Other' && exerciseData[8] != 'Other'" style="border-top: 7px double #2c3e50; color: #2c3e50; margin-top: 15px;">

        <div v-if="exerciseData[9] && exerciseData[9] != 'Other'">
            <div class="row">
                <div class="col">
                    <h2 style="background-color: #002540; color: white;font-family: serif; font-weight: normal;">Other Comments:</h2>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <p style="font-family: serif;">{{exerciseData[9]}}</p>
                </div>
            </div>
        </div>

        <hr style="	border-top: 7px double #2c3e50; color: #2c3e50; margin-top:20px;">

        <div class="row">
            <div class="col">
                <h2 style="background-color: #002540; color: white;font-family: serif; font-weight: normal;">Preferability Rating:</h2>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div :class="`square${exerciseData[11]}`" style="width: 100px; height: 100px; margin: auto;">
                    <p style="color:white; font-weight: bold; transform: translateY(212%);">{{exerciseData[11]}}</p>
                </div>
            </div>
        </div>
        

        <div class="row">
            <div class="col">
                <p style="font-family: serif; padding-bottom: 50px;" v-if="exerciseData[11] > 3 && exerciseData[11] < 8">
                    This exercise has a preferability rating of {{exerciseData[11]}},
                    meaning it is not a very commonly recommended exercise by personal
                    training experts and gym-goers. However, there is enough of a knowledge base on this exercise that
                    it is not necessarily a bad choice for this muscle/area of focus.
                </p>
                <p style="font-family: serif; padding-bottom: 50px;" v-else-if="exerciseData[11] > 7">
                    This exercise has a preferability rating of {{exerciseData[11]}},
                    meaning it is an exercise rarely recommended by personal
                    training experts and gym-goers. There are likely better options within
                    the catalog that better suit this muscle/area of focus.
                </p>
                <p style="font-family: serif; padding-bottom: 50px;" v-else>
                    This exercise has a preferability rating of {{exerciseData[11]}},
                    meaning it is a very commonly chosen exercise by personal
                    training experts and gym-goers. This may be one of the best choices within
                    the catalog for this muscle/area of focus
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {

    data(){
        return{
            exerciseData: null,
			exerciseId: this.$route.params.id
        }
    },

    methods:{
        async loadData(){

            //Load data based on id
            var sql = `select * from exercises where exercise_id = ${this.exerciseId}`
            var resp = await axios.get(`http://3.89.12.221:8004/db.py/?sql=${sql}`)
            this.exerciseData = resp.data[0]
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
    .descriptionList{
        list-style-type: none;
        padding-left: 0;
    }
    .descriptionListItem{
       margin-bottom: 5%;
       font-family: serif;
       font-size: 1.25vw;
    }
    .descriptionListItem::before{
       content: '🏋️ ';
       text-align: left;
    }
    .descriptionListItem:nth-child(2n):before{
       content: '💪 ';
       text-align: left;
    }
    .descriptionListItem:nth-child(3n):before{
       content: '🔧 ';
       text-align: left;
    }
    .descriptionListItem:nth-child(4n):before{
       content: '🏃‍♀️ ';
       text-align: left;
    }
    .descriptionListItem:nth-child(5n):before{
       content: '🧘‍♀️ ';
       text-align: left;
    }
    .descriptionListItemMuscle{
       margin-bottom: 5%;
       font-family: serif;
       font-size: 1.25vw;
    }
    .descriptionListItemMuscle::before{
       content: '💪 ';
       text-align: left;
    }
    .descriptionListItemMuscle:hover{
        text-decoration: underline;
        cursor: pointer;
    }
</style>