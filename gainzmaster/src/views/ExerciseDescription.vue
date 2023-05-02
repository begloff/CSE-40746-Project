<template>
	<div class="row">
        <div class="col">
            <h1>{{exerciseData}}</h1>
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
            this.exerciseData = resp.data
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