<template>
	<div class="row">
        <div class="col">
            <h1>yo</h1>
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