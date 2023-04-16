<template>
    <h3>Workout Creator</h3>
  <!--Workout Maker-->
    <div style="magin-top:15px; text-align:center;">
        <h4>Select muscle groups you would like to hit:</h4>
        <ul v-for="muscleGroup in muscleGroups">
            <input type="checkbox" id={{muscleGroupsSelected}} v-model="muscleGroupsSelected" />
            <label for="checkbox"> {{ muscleGroup }}</label>
        </ul>
    </div>
</template>

<script>
    export default{
        components:{

        },
        async mounted(){

        },
        methods:{
            onMuscleGroupsChanged: function(listBox){
                this.muscleGroupsSelected = listBox.muscleGroupsSelected;
            }
        },

        data(){
            return{
                muscleGroupsSelected: [],
                muscleGroups: ["Neck", "Shoulders", "Upper", "Forearms", "Back", "Chest", "Waist", "Hips", "Thighs", "Calves"]
            }
        },

        beforeMount(){
        }
    
    }
</script>

<style scoped>
    .workout{
    width: 68%;
    height: 70px;
    text-align: center;
    }
</style>
