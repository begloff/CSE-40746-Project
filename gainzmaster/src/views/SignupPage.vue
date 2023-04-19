<template>
	<div class="row">
		<div class="col">
			<img class="logo2" src="../assets/gainzmaster-6.png">
		</div>
	</div>

	<hr>

	<div class="row">
		<div class="col">
			<form @submit.prevent="registerUser">
					<p style="color: white;">Create an Account!</p>
					<br>
					<br>
					<label for="email"><b class="text-label">Email</b></label>
					<br>
					<input v-model="email" type="email" placeholder="Enter Email" name="email" required>
					<br>
					<br>
					<label for="username"><b class="text-label">Username</b></label>
					<br>
					<input v-model="username" type="text" placeholder="Enter Username" name="username" required>
					<br>
					<br>
					<label for="pswd"><b class="text-label">Password</b></label>
					<br>
					<input v-model="password" type="password" placeholder="Enter Password" name="pswd" required>
					<br>
					<br>
					<button class="btn" type="submit">Create Account</button>
			</form>
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
	width: 100%;
	margin: 0;
	height: 100vh;
	background-image: linear-gradient(rgba(34, 34, 34, 0.75),rgba(65, 65, 65, 0.75)) ,url(../assets/gymbackground.jpg);
	background-size: cover;
	background-position: center;
	overflow: auto;
}

.text-label {
	color: #ffc631;
	text-transform: uppercase;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

.logo2 {
	display: inline-block;
	margin-top: -10px;
	width:	35%;
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


.bottom-border {
	position: fixed;
	bottom: 0;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 854px;
	height: 100%;
	z-index: -1;
	/* background-color: white; */
}

::placeholder{
	color: #aaa;
	text-transform: uppercase;
    font-size: 0.8em;

}

input{
    display: block;
    padding: 10px 6px;
	padding-left: 10px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 4px solid #fffdfd;
    color: yellow;
	background:transparent
}
form{
	width:80%;
	display: inline-block;
	margin-left: 10px;
}

.btn:hover {
	background-color: #145c8b;
}

.btn {
	border-color: #FFC631;
	background-color: #002540;
	color: white;
	padding: 10px;
	border-radius: 6px;
	margin-bottom: 50px;
}

</style>
