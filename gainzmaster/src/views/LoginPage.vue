<template>
  <div>
	<div>
			<img class="logo" src="../assets/gainzlogo.png">
	</div>
	  <form @submit.prevent="loginUser">
		<div class="container1">
			<label style="padding: 15px;" for="username"><b class="text-label">Username</b></label>
			<input v-model="username" type="text" placeholder="Enter Username" name="username" required>
			<label style="padding: 15px;" for="pswd"><b class="text-label">Password</b></label>
			<input v-model="password" type="password" placeholder="Enter Password" name="pswd" required>
			<button class="btn" type="submit" style="display: block; margin-right: auto; margin-left: auto; margin-top: 25px;">Login</button>
		</div>
	  </form>
	  <nav>
		<button class="btn" type="submit"><router-link to="/signup" class="link-text">Sign up</router-link></button>
		<!-- This button is completely temporary -->
		<button class="btn" @click="$store.dispatch('logout')">Logout</button>
	  </nav>
	  <p>{{username}} | {{password}}</p>
	  <div class="bottom-border">
		<p></p>
	  </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  	name: 'login',
	components: {},
	data(){
		return{
			password: null,
			username: null,
		}
	},
	methods:{
		loginUser(){
			// To do: take username and password and pass to the store to login
			this.$store.dispatch("loginUser", {username: this.username, password: this.password})
		}
	}
};
</script>

<style>
body {
	background-image: url('../assets/gymbackground.jpg');
	background-repeat: no-repeat;
	background-size: cover;
}
.container1 {
	display: inline-block;
	width: 854px;
	background-color: white;
	margin-top: -5px;
	justify-content: center;
}

.logo {
	display: inline-block;
	margin-top: -10px;
	height: 486px;
	width:	854px;
}

.btn {
	background-color: #FFC631;
	border-color: #002540;
}
.btn:hover {
	background-color: #104B1E;
}
.link-text {
	color: #002540;
}
.link-text:hover {
	color: #FFC631;
}

.text-label {
	color: #002540;
}

.bottom-border {
	position: fixed;
	bottom: 0;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 854px;
	height: 100%;
	z-index: -1;
	background-color: white;
}
</style>
