<template>
  <div>
	  <br>
	  <br>
	  <br>
	  <br>
	  <br>
	  <br>
	  <br>
	  <br>
	  <br>
	  <b>Create an Account!</b>
	  <br>
	  <br>
	  <form action="" method="post">
		  <!--
		  <div class="imgcontainer">
			  <img src="logo.png">
		  </div>
		  -->
		<div class="container">
			<label for="email"><b>Email</b></label>
			<br>
			<input type="text" placeholder="Enter Email" name="email" required>
			<br>
			<br>
			<label for="username"><b>Username</b></label>
			<br>
			<input type="text" placeholder="Enter Username" name="username" required>
			<br>
			<br>
			<label for="pswd"><b>Password</b></label>
			<br>
			<input type="password" placeholder="Enter Password" name="pswd" required>
			<br>
			<br>
			<nav>
				<button type="submit"><router-link to="/">Create Account</router-link></button>
			</nav>
		</div>
	  </form>
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
</style>
