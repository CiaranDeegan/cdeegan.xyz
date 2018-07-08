<template>
	<div id="app">
		<Hero/>
		<div class="router">
			<div class="container content">
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script>
import Hero from './components/Hero';

export default {
	name: 'App',
	components: {
		Hero
	}
}
</script>

<style lang="scss" scoped>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	.router {
		margin: 3em 0 3em 0;
	}
}
</style>
