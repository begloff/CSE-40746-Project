<template>
  <div>
	<div>
			<img class="logo" src="../assets/gainzlogo.png">
	</div>
	  <form action="" method="post">
		<div class="container1">
			<label style="padding: 15px;" for="username"><b class="text-label">Username</b></label>
			<input type="text" placeholder="Enter Username" name="username" required>
			<label style="padding: 15px;" for="pswd"><b class="text-label">Password</b></label>
			<input type="password" placeholder="Enter Password" name="pswd" required>
			<nav>
				<button class="btn" type="submit"><router-link to="/" class="link-text">Login</router-link></button>
				<button class="btn" type="submit"><router-link to="/about" class="link-text">Sign up</router-link></button>
			</nav>
		</div>
	  </form>
	  <div class="bottom-border">
		<p></p>
	  </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
	components: {},
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
