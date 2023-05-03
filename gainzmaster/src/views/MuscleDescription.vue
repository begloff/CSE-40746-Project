<template>
    <div class="row" style="margin-top:1%; margin-bottom:1%;">
        <div class="col">
            <div class="muscleHeader" v-if="muscleData">{{ muscleData[0][0] }}</div>
        </div>
    </div>

	<hr style="	border-top: 7px double #2c3e50; color: #2c3e50;">

	<div class="row">
        <div class="col">
            <div class="searchEngine">
                <div class="row">
                    <div class="col" v-if="muscleImg">
                        <img style="width:20%; margin-top: 2%;" :src="muscleImg">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h5 v-if="muscleData">{{ muscleData[0][6] }}</h5>
                        <h3 v-if="muscleData">Sorry, <b>bros</b> we are unable to provide sufficient data on this muscle :(</h3>
                    </div>
                </div>
                <div class="row" v-if="muscleData">
                    <div class="col" v-if="muscleData[0][3]">
                        <h3>Other Names</h3>
                    </div>
                    <div class="col" v-if="muscleData[0][4]">
                        <h3>Muscle Heads</h3>
                    </div>
                    <div class="col" v-if="muscleData[0][5]">
                        <h3>Related Muscles</h3>
                    </div>
                </div>
                <div class="row" style="margin-bottom: 2%;" v-if="muscleData">
                    <div class="col" v-if="muscleData[0][3]">
                        {{ muscleData[0][3] }}
                    </div>
                    <div class="col" v-if="muscleData[0][4]">
                        {{ muscleData[0][4] }}
                    </div>
                    <div class="col" v-if="muscleData[0][5]">
                        {{ muscleData[0][5] }}
                    </div>
                </div>
			</div>
		</div>
	</div>

    <div class="row" v-if="targeted_exercises">
        <div class="col">
            <h2>Check out some exercises that target this muscle:</h2>
        </div>
    </div>
    <div class="row" v-if="targeted_exercises">
        <div class="col" style="width: 28%;">
            <router-link class="links" :to="`/exerciseCatalog/${exercise[0]}`" v-for="exercise in targeted_exercises[0]">{{ exercise[2] }}<br><br></router-link>
        </div>
        <div class="col" style="width: 28%;">
            <router-link class="links" :to="`/exerciseCatalog/${exercise[0]}`" v-for="exercise in targeted_exercises[1]">{{ exercise[2] }}<br><br></router-link>
        </div>
        <div class="col" style="width: 28%;">
            <router-link class="links" :to="`/exerciseCatalog/${exercise[0]}`" v-for="exercise in targeted_exercises[2]">{{ exercise[2] }}<br><br></router-link>
        </div>
    </div>

</template>


<script>

// General Format of muscle catalog
// Make a robust search engine and table that displays information on muscles
// Make sure each table entry is a link
import axios from 'axios'

export default {
    methods:{
        async loadData(){

            console.log(this.$router)

            this.muscleData = this.$store.state.muscleData.filter(muscle => muscle[1] == this.muscleId)

            var targeted_exercises = this.$store.state.exerciseData.filter(exercise => exercise[1] == this.muscleData[0][1])

            if(targeted_exercises.length > 18){
                targeted_exercises = targeted_exercises.slice(0,18)
            }

            const modulo = targeted_exercises.length % 3
            
            const target1 = []
            const target2 = []
            const target3 = []

            if (modulo == 0) {
                const index = targeted_exercises.length / 3

                for (let i = 0; i < index; i++) {
                    target1.push(targeted_exercises[i])
                }

                for (let i = index; i < index*2; i++) {
                    target2.push(targeted_exercises[i])
                }

                for (let i = index*2; i < targeted_exercises.length; i++) {
                    target3.push(targeted_exercises[i])
                }

            } else if (modulo == 1) {
                const index = (targeted_exercises.length -1) / 3

                for (let i = 0; i < index; i++) {
                    target1.push(targeted_exercises[i])
                }

                for (let i = index; i < index*2 + 1; i++) {
                    target2.push(targeted_exercises[i])
                }

                for (let i = index*2 + 1; i < targeted_exercises.length; i++) {
                    target3.push(targeted_exercises[i])
                }

            } else if (modulo == 2) {
                const index = (targeted_exercises.length -2) / 3

                for (let i = 0; i < index + 1; i++) {
                    target1.push(targeted_exercises[i])
                }

                for (let i = index + 1; i < index*2 + 1; i++) {
                    target2.push(targeted_exercises[i])
                }

                for (let i = index*2 + 1; i < targeted_exercises.length; i++) {
                    target3.push(targeted_exercises[i])
                }

            }

            this.targeted_exercises = [target1]
            this.targeted_exercises.push(target2)
            this.targeted_exercises.push(target3)

            this.muscleImg = this.muscleData[0][7]
            
        }
    },

    data(){
        return{
            targeted_exercises: null,
            muscleData: null,
            muscleDict: null,
            muscleImg: null,
            categorySel: [],
            selectedCategory: null,
            muscleName: null,
            generalSearch: null,
            filteredMuscleData: null,
            defaultCat: ['All', 0],
            muscleId: this.$route.params.id,
        }
    },

    async mounted(){
        await this.loadData()
    }

}
</script>


<style>
table{
    width: 95%;
    font-size: .9em;
    table-layout:fixed;
    align-self: center;
    /* border-collapse: collapse; */
}

thead{
    font-size: 1.25em;
    background-color: #ffc631;
    border-bottom: 5px solid #002540;
    margin-bottom: 50px;
    color: white;
    font-weight: bold;
}

th{
    word-wrap: break-word;
}

tr{
    line-height: 35px;
}

.row{
    display: flex;
}

.col{
    flex: 1;
}

.col2{
    display: flex;
    justify-content: center;
}

tr:nth-child(even) {
    background-color: #ffc5312f;
}

tr:nth-child(odd) {
    background-color: #00254036;
}

.hoverable:hover {
    background-color: rgb(185, 228, 184);
}

.text-label {
	color: #ffc631;
	text-transform: uppercase;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

.searchEngine{
    border: 4px groove #002540;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-top: 10px;
    width:95%;
    margin-left: auto;
    margin-right: auto;
    background-color: #80828336;
}

.muscleHeader{
    font-size:2.5vw;
    font-family:serif;
    padding-bottom: 20px;
    font-weight: bold;
}

a{
    text-decoration: none;
    color: #002540
}

.links:hover{
    text-decoration: underline;
    cursor: pointer;
}

</style>