<template>
      <!-- <div class="container-fluid">
        <a class="navbar-brand" href="#" style="color: #f8f8f8;">
        <img src="../assets/smallgainzmaster.png" class="d-inline-block align-center pl-3 img-fluid">  
        Gainzmaster   
        </a> -->
        <ul class="navbar-nav">
            <li>
                <router-link to="/" class="image-link">
                    <img src="../assets/smallgainzmaster.png" alt="">
                    <p><b>Gainzmaster</b></p>
                </router-link>
            </li>  
            <li class="nav-item" >
            <router-link class="nav-link" active-class="active" to="/login" style="color: #f8f8f8;">Login</router-link>
            </li>
            <li class="nav-item" >
            <router-link class="nav-link" active-class="active" to="/signup" style="color: #f8f8f8;">Sign Up</router-link>
            </li>
        </ul>
</template>

<script>
export default {

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
  background-color: rgb(0, 37, 64,.75);
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

</style>