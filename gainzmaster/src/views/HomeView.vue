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
	  <br>
	  <b>Welcome to GainzMaster!</b>
	  <br>
	  <br>
	  <!--
	  	<div class="imgcontainer">
			<img src="logo.png">
		</div>
	  -->
	  <form action="" method="post">
		<div class="container">
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
				<button type="submit"><router-link to="/about">Login</router-link></button>
				<button type="submit"><router-link to="/about">Sign up</router-link></button>
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
