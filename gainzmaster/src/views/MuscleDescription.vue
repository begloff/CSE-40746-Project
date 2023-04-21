<template>
    <div class="row">
        <div class="col">
            <h1 v-for="muscle in muscleData">{{ muscle[0] }}</h1>
        </div>
    </div>

	<hr style="	border-top: 7px double #2c3e50; color: #2c3e50;">

	<div class="row">
        <div class="col">
            <div class="searchEngine">
                <div class="row">
                    <div class="col" v-if="muscleImg">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefRgkx3-jr_PRFGr3sV9u-GGKuiuYdXydnnl1YQnnXTMG0v35noQGd1h34F4&amp;s">
                    </div>
                </div>
			</div>
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
            var sql = `select * from detail_muscles where detail_id = ${window.location.href.split("=")[1]}`
            var resp = await axios.get(`http://3.89.12.221/db.py/?sql=${sql}`)
            resp = resp.data
            this.muscleData = resp
            this.muscleImg = resp[0][7]

            console.log(this.muscleImg)

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
            muscleImg: null,
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