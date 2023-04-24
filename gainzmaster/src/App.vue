<template>
  <div v-if="!$store.state.user" class="page">
    <PublicNavBar/>
    <router-view/>
  </div>
  <div v-else class="page">
    <PrivateNavBar/>
    <router-view/>
  </div>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import PublicNavBar from './components/PublicNavBar.vue'
import PrivateNavBar from './components/PrivateNavBar.vue'

export default{
  async beforeCreate(){
    const store = useStore()
    await store.dispatch('fetchUser')
  },
  components:{
    PublicNavBar,
    PrivateNavBar
  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: 100%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body, html {
  margin: 0;
  padding: 0;
  height: 100vh;
}

.page{
  height: 100vh;
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

.row{
    display: flex;
}

.col{
    flex: 1;
}
</style>
