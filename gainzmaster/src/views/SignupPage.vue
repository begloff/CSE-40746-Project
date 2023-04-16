<template>
  <div>
	<div>
		<img class="logo2" src="../assets/gainzlogo.png">
	</div>
	  <form @submit.prevent="registerUser">
		<div class="container2">
			<b>Create an Account!</b>
			<br>
			<br>
			<label for="email"><b>Email</b></label>
			<br>
			<input v-model="email" type="email" placeholder="Enter Email" name="email" required>
			<br>
			<br>
			<label for="username"><b>Username</b></label>
			<br>
			<input v-model="username" type="text" placeholder="Enter Username" name="username" required>
			<br>
			<br>
			<label for="pswd"><b>Password</b></label>
			<br>
			<input v-model="password" type="password" placeholder="Enter Password" name="pswd" required>
			<br>
			<br>
			<button class="btn" type="submit">Create Account</button>
		</div>
	  </form>
		<nav>
			<button class="btn" type="submit"><router-link class="link-text" to="/">Back</router-link></button>
		</nav>
	  <div class="bottom-border">
		<p></p>
	  </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  	name: 'register',

	components: {},

	data(){
		return{
			username: null,
			email: null,
			password: null
		}
	},

	methods:{
		registerUser(){
			//call store function to register user
			this.$store.dispatch('registerUser', {username:this.username, email:this.email, password:this.password})
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
.container2 {
	display: inline-block;
	width: 854px;
	background-color: white;
	margin-top: -5px;
	justify-content: center;
}

.logo2 {
	display: inline-block;
	margin-top: -10px;
	height: 243px;
	width:	427px;
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
