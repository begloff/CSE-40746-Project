<template>
    <div class="row">
        <div class="col">
            <h1>Muscle Catalog</h1>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <p>Learn more about muscle intricacies and details!</p>
        </div>
    </div>

    <hr style="	border-top: 7px double #2c3e50; color: #2c3e50;">

    <!-- Need to make a search engine that you can search by name, category, and general search (rest of columns) -->
    <div class="row">
        <div class="col">
            <div class="searchEngine">
                <div class="row">
                    <div class="col">
                        <h3>Muscle Search</h3>
                    </div>
                </div>
                <div class="row" style="margin-bottom: 5px;">
                    <div class="col">
                        <label for="muscleName" class="text-label">Name</label>
                    </div>
                    <div class="col">
                        <label for="muscleCategory" class="text-label">Category</label>
                    </div>
                    <div class="col">
                        <label for="generalSearch" class="text-label">General Search</label>
                    </div>
                </div>
                <div class="row" style="margin-bottom: 40px;">
                    <div class="col">
                        <input type="text" name="muscleName" v-model="muscleName">
                    </div>
                    <div class="col">
                        <select name="muscleCategory" id="" v-model="selectedCategory" @change="filterMuscles('category')">
                            <option value="">All</option>
                            <option :value="entry" v-for="entry in this.muscleDict">{{entry[0]}}</option>
                        </select>
                    </div>
                    <div class="col">
                        <input type="text" name="generalSearch" id="" v-model="generalSearch">
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
                        <th scope="col">Muscle Name</th>
                        <th scope="col">Muscle Category</th>
                        <th scope="col">Other Names</th>
                        <th scope="col">Muscle Heads</th>
                        <th scope="col">Related Muscles</th>
                    </tr>
                </thead>
                <tbody v-if="muscleDict">
                    <tr v-for="muscle in muscleData" class="hoverable">
                        <th scope="row">{{muscle[0]}}</th>
                        <th scope="row">{{this.muscleDict[muscle[2] - 1][0]}}</th>
                        <th scope="row" v-if="muscle[3]">{{muscle[3]}}</th>
                        <th scope="row" v-else>~</th>
                        <th scope="row" v-if="muscle[4]">{{muscle[4]}}</th>
                        <th scope="row" v-else>~</th>
                        <th scope="row" v-if="muscle[5]">{{muscle[5]}}</th>
                        <th scope="row" v-else>~</th>
                    </tr>
                </tbody>
            </table>
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
            var sql = `select * from detail_muscles`
            var resp = await axios.get(`http://3.89.12.221/db.py/?sql=${sql}`)
            resp = resp.data
            this.muscleData = resp

            console.log(resp)

            this.filteredMuscleData = this.muscleData

            sql = `select * from general_muscles`
            resp = await axios.get(`http://3.89.12.221/db.py/?sql=${sql}`)
            resp = resp.data
            this.muscleDict = resp

        },

        filterMuscles(arg){
            if(arg == 'category'){

                //Find id from muscleDict
                var checkId = this.selectedCategory[1]

                this.filteredMuscleData = this.filteredMuscleData.filter(function(entry){
                    return entry[2] == checkId
                })

                console.log(this.filteredMuscleData)
            }
        }
    },

    data(){
        return{
            muscleData: null,
            muscleDict: null,
            categorySel: [],
            selectedCategory: null,
            muscleName: null,
            generalSearch: null,
            filteredMuscleData: null,
            defaultCat: ['All', 0]
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

</style>