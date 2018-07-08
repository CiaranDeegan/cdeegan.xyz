<template>
	<nav class="navbar">
		<div class="navbar-brand">
			<a class="navbar-item" href="https://bulma.io">
				<img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
			</a>
			<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
				<span aria-hidden="true">1</span>
				<span aria-hidden="true">2</span>
				<span aria-hidden="true">3</span>
			</a>
		</div>
		<div class="navbar-menu">
			<div class="navbar-start">
				<div class="navbar-item has-dropdown">
					<b-dropdown v-model="navigation" hoverable>
						<a slot="trigger" class="navbar-item">
							<span>Menu</span>
							<b-icon icon="menu-down"/>
						</a>
						<b-dropdown-item value="home">
							<router-link to="/">
								<b-icon icon="home"/>
								Home
							</router-link>
						</b-dropdown-item>
						<b-dropdown-item value="projects" has-link>
							<router-link to="/projects">
								<b-icon icon="folder-multiple"/>
								Projects
							</router-link>
						</b-dropdown-item>
					</b-dropdown>
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
			navigation: 'home'
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
