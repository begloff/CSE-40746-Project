<template>
  <ul class="navbar-nav" >
      <li>
          <router-link to="/" class="image-link" :style="testActive('/home')">
              <img src="../assets/smallgainzmaster.png" alt="">
              <p><b>Gainzmaster</b></p>
          </router-link>
      </li>  
      <li class="nav-item" >
      <router-link class="nav-link" active-class="active" to="/workoutcreator" :style="testActive('/workoutcreator')">Workout Creator</router-link>
      </li>
      <li class="nav-item" >
      <router-link class="nav-link" active-class="active" to="/workoutlog" :style="testActive('/workoutlog')">Workout Log</router-link>
      </li>
      <li class="nav-item" >
      <router-link class="nav-link" active-class="active" to="/exercisecatalog" :style="testActive('/exercisecatalog')">Exercise Catalog</router-link>
      </li>
      <li class="nav-item" >
      <router-link class="nav-link" active-class="active" to="/musclecatalog" :style="testActive('/musclecatalog')">Muscle Catalog</router-link>
      </li>
      <li class="nav-item" @click="$store.dispatch('logout')">
          <router-link class="nav-link" active-class="active" to="/" style="color: #f8f8f8;">Log Out</router-link>
      </li>
  </ul>
  <div class="row" style= "margin-top: 5px; margin-left: 5px; margin-bottom: 2px; height: 30px;">
    <button class="backbtn" @click="$router.go(-1)">
      <img src="../assets/backarrowwhite.png" style="height: 100%;">
      <p style="padding: 0; top: -8px; padding-left: 5px;">Back</p>
    </button>
  </div>
</template>

<script>
export default {
  methods:{
    testActive(route){

      if(this.$route.path == route){
        return 'background-color: rgb(255, 198, 49, .8); height: 100%;'
      } else {
        return 'color: #f8f8f8; height: 100%;'
      }
    }
  }

}
</script>

<style scoped>
img{
    width: auto;
    height: 3em;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(0, 37, 64);
  height: 3em;
}


li {
  float: left;
  height: 3em;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: rgb(255, 198, 49, .8);
}

.image-link{
    margin: 0;
    padding: 0;
    text-align: center;
}

p{
    display: inline;
    position: relative;
    top: -20px;
    margin-bottom: 10px;
    height: 3em;
    padding: 14px 16px;
}

.backbtn {
	border-color: #FFC631;
	background-color: #002540;
	color: white;
	padding: 10px;
	border-radius: 6px;
	margin-bottom: 50px;
  height: 100%;
  padding-top: 0;
  padding-bottom: 0;
}
.backbtn:hover {
	background-color: #145c8b;
}

</style>