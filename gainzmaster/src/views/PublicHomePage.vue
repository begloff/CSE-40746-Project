<template>
    <div class="backimage">
        <div>
            <img src="../assets/gainzmaster-6.png" style="width:40%;">
        </div>

        <hr>

        <div class="row">

            <div class="col">
                <h2>Welcome To Gainzmaster!</h2>
                <p>We are a workout tracking and muscle knowledge service focused on optimizing and providing variety to your workouts!</p>
                <p><router-link class="non-intrusive" to="/signup">Sign up for an account</router-link> to take advantage of our numerous features and rich muscle database, and never be bored at the gym again!</p>
            </div>

            <div class="col">
                <h2>Features & Capabilities</h2>
                <ul class = "list">
                    <li class="list">Workout Creator with over 2500 Exercises</li>
                    <li class="list">Workout Log To View Past Workouts</li>
                    <li class="list">Detailed Muscle & Exercise Catalogs</li>
                    <li class="list">Advanced Exercise Search Engine</li>
                </ul>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col">
                <router-link to="/signup" class="non-intrusive"><button class="btn" style="margin-top: 50px; width: 55%;">Sign Up</button></router-link>
            </div>
            <div class="col">
                <router-link to="/login" class="non-intrusive"><button class="btn" style="margin-top: 50px; width: 55%;">Login</button></router-link>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <img style="width: 90%; margin-bottom: 50px;" src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/Runner-training-on-running-track-1296x728-header-1296x728.jpg?w=1155&h=1528" alt="">
            </div>
            <div class="col">
                <img style="width: 90%;" src="https://weightliftingplace.com/wp-content/uploads/2018/09/Weightlifting-In-The-Long-Run-1.jpg" alt="">
            </div>
            <div class="col">
                <img style="width: 90%;" src="https://www.muscleandfitness.com/wp-content/uploads/2019/01/woman-flexing-bicep-GettyImages-906615248.jpg?quality=86&strip=all" alt="">
            </div>
        </div>
    </div>


</template>

<script>
export default {

}
</script>

<style scoped>
    .backimage {
        max-width: 100%;
        margin: 0;
        height: auto;
        background-color: #000000;
        background-image: linear-gradient(rgba(34, 34, 34, 0.75),rgba(65, 65, 65, 0.75)) ,url(../assets/gymbackground.jpg);
        border: none;
        background-size: cover;
        background-position: center;
        overflow-y:visible;
        text-align: center;
    }
    .non-intrusive, .non-intrusive:visited, .non-intrusive:link{   
        color: inherit;
        text-decoration: underline;
    }

    .non-intrusive:hover{
        color: #ffc631;
    }

    h2{
        color: white;
        font-size: 2.5em;

    }

    p{
        color: white;
        margin-top: 30px;
        font-size: 1.25em;
    }

    .left-div{
        display: block;
        float: left;
        width: 49%;
        height: 30%;
        margin-right: 1%;
    }

    .right-div{
        display: block;
        float: right;
        width: 49%;
        margin-left: 1%;
        height: 30%;

    }

    .row{
        display: flex;
    }

    .col{
        flex: 1;
    }

    ul.list{
        list-style-type:square;
        color: white;
        font-size: 1.25em;
    }

    li.list{
        margin-top:30px;
    }

    hr {
        border: none;
        border-top: 7px double white;
        color: white;
        overflow: visible;
        text-align: center;
        height: 5px;
    }

    hr:after {
        background: transparent;
        content: '🏋️‍♂️💪🏃‍♂️';
        font-size: 1.5em;
        padding: 0 10px;
        position: relative;
        top: -22px;
    }

    .btn {
        border-color: #FFC631;
        background-color: #002540;
        color: white;
        padding: 10px;
        border-radius: 6px;
        margin-bottom: 50px;
	    font-size: 1.1em;
    }
    .btn:hover {
        background-color: #145c8b;
    }
    .link-text {
        color: #002540;
    }
    .link-text:hover {
        color: #FFC631;
    }


</style>