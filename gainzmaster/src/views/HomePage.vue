<template>
  <p>You are now logged in</p>
  <p>Welcome: {{this.$store.state.user_details.username}}</p>
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
	}
};
</script>

<style>

</style>