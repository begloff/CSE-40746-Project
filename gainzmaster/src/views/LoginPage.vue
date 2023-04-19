<template>
	<div class="backimage">
		<div class="row">
			<div class="col">
				<img class="logo" src="../assets/gainzmaster-6.png">
			</div>
		</div>
		<hr>
		<div class="row">
			<div class="col">
				<form @submit.prevent="loginUser">
						<h2 style="color: white;">Login</h2>
						<label style="padding: 15px;" for="username"><b class="text-label">Username</b></label>
						<input v-model="username" type="text" placeholder="Enter Username" name="username" required>
						<label style="padding: 15px;" for="pswd"><b class="text-label">Password</b></label>
						<input v-model="password" type="password" placeholder="Enter Password" name="pswd" required>
						<button class="btn" type="submit" >Login</button>
				</form>
			</div>
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

<style scoped>
.backimage {
	max-width: 100%;
	margin: 0;
	height: 100%;
	background-color: #000000;
	background-image: linear-gradient(rgba(34, 34, 34, 0.75),rgba(65, 65, 65, 0.75)) ,url(../assets/gymbackground.jpg);
	border: none;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	overflow-y: visible;
	text-align: center;
}

.btn{
	display: block; 
	margin-right: auto; 
	margin-left: auto; 
	margin-top: 75px;
	width: 25%;
	font-size: 1.1em;
	height: 50px;
}

.logo {
	display: inline-block;
	margin-top: -10px;
	width: 35%;
}

.btn {
	border-color: #FFC631;
	background-color: #002540;
	color: white;
	padding: 10px;
	border-radius: 6px;
	margin-bottom: 50px;
}
.btn:hover {
	background-color: #145c8b;
}
.link-text {
	color: #002540;
}
.link-text:hover {
	color: #ffc631;
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
    color: white;
	font-size: 1.1em;
	background:transparent
}

form{
	width:80%;
	display: inline-block;
	margin-left: 10px;
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



</style>
