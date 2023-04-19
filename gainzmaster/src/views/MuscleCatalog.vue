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

    <div class="row">
        <div class="col">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Muscle Name</th>
                        <th scope="col">Detail ID</th>
                        <th scope="col">General ID</th>
                        <th scope="col">Other Names</th>
                        <th scope="col">Muscle Heads</th>
                        <th scope="col">Related Muscles</th>
                        <th scope="col">Comments</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="muscle in muscleData">
                        <th scope="row">{{muscle[0]}}</th>
                        <th scope="row">{{muscle[1]}}</th>
                        <th scope="row">{{muscle[2]}}</th>
                        <th scope="row">{{muscle[3]}}</th>
                        <th scope="row">{{muscle[4]}}</th>
                        <th scope="row">{{muscle[5]}}</th>
                        <th scope="row">{{muscle[6]}}</th>
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
            var resp = await axios.get(`http://34.206.226.160/?sql=${sql}`)
            resp = resp.data
            this.muscleData = resp
        }
    },

    data(){
        return{
            muscleData: null
        }
    },

    async mounted(){
        console.log("In")
        await this.loadData()
    }

}
</script>


<style>

</style>