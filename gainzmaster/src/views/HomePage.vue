<template>
  <p>You are now logged in</p>
  <p v-if="this.$store.state.user_details">Welcome: {{this.$store.state.user_details.username}}</p>
  <button @click="logout">LOG OUT</button>
</template>

<script>
export default {
  	name: 'home',
	components: {},
	data(){
		return{
		}
	},
	methods:{
        logout(){
            this.$store.dispatch('logout')
        }
	}
};
</script>

<style>

</style>