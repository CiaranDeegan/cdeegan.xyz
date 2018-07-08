<template>
	<nav class="navbar">
		<div class="container">
			<div class="navbar-menu">
				<div class="navbar-start">
					<div class="navbar-item">
						<router-link to="/">
							Home
						</router-link>
					</div>
					<div class="navbar-item">
						<router-link to="/projects">
							Projects
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'NavBar'
}
</script>

<style lang="scss" scoped>

</style>
