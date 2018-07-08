<template>
	<nav class="navbar">
		<div class="container">
			<div class="navbar-menu">
				<div class="navbar-start">
					<router-link class="navbar-item" to="/" exact>
						Home
					</router-link>
					<router-link class="navbar-item" to="/projects" exact>
						Projects
					</router-link>
					<router-link class="navbar-item" to="/contact" exact>
						Contact
					</router-link>
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
