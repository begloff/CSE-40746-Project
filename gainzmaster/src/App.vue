<template>
  <div v-if="!$store.state.user" clas="public">
    <PublicNavBar/>
    <router-view/>
  </div>
  <div v-else>
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
    store.dispatch('fetchUser')
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

body {
  margin: 0;
  padding: 0;
}
</style>
