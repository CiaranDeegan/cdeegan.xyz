<template>
	<section class="hero is-primary">
		<div class="hero-body">
			<div class="container has-text-centered">
				<h1 class="title">
					Ciarán Deegan
				</h1>
				<h2 class="subtitle">
					Software Developer
				</h2>
			</div>
		</div>
		<div class="hero-footer">
			<NavBar/>
		</div>
	</section>
</template>

<script>
import NavBar from './NavBar';

export default {
	name: 'Hero',
	components: {
		NavBar
	}
}
</script>

<style lang="scss" scoped>

</style>
