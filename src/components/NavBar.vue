<template>
	<nav class="navbar">
		<div class="container">
			<div class="navbar-brand">
				<div :class="{ 'is-active': mobileMenuActive }" class="navbar-burger" @click="toggleMobileNav">
					<span aria-hidden="true"/>
					<span aria-hidden="true"/>
					<span aria-hidden="true"/>
				</div>
			</div>
			<div :class="{ 'is-active': mobileMenuActive }" class="navbar-menu">
				<div class="navbar-start">
					<router-link class="navbar-item" to="/" exact>
						About Me
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
	name: 'NavBar',
	data() {
		return {
			mobileMenuActive: false
		}
	},
	methods: {
		toggleMobileNav: function() {
			this.mobileMenuActive = !this.mobileMenuActive;
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
