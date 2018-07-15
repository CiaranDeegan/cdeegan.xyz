<template>
	<div class="home">
		<div class="card">
			<div class="columns">
				<div class="column is-one-quarter has-text-left left-content">
					<div class="card-image">
						<figure class="image">
							<img src="../assets/images/me.jpg">
						</figure>
					</div>
					<b-taglist class="tags">
						<b-tag v-for="(lang, index) in languages" :key="index" rounded type="is-primary">{{ lang }}</b-tag>
					</b-taglist>
				</div>
				<div class="column is-three-quarters has-text-left content">
					<div class="content">
						<p>My name is Ciarán Deegan and I'm a software developer from Ireland.</p>
						<p>I believe in living outside my comfort zone -- for me that is where I learn the most about myself. In 2018 I moved out and to a new country, from Ireland to Canada, where I discovered some new passions and some amazing people.</p>
						<p>My next goal is to develop myself professionally, by finding a job in which I can meet my career growth aims.</p>
						<blockquote>"Normality is a paved road: It’s comfortable to walk, but no flowers grow on it." ― Vincent van Gogh</blockquote>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Resume',
	data() {
		return {
			languages: [
				"Angular",
				"Vue.js",
				"Node.js",
				"Java",
				"Android Development",
				"MySQL",
				"NoSQL",
			]
		}
	}
}
</script>

<style lang="scss" scoped>
	.columns {
		.column {
			padding: 2em;
			.tags {
				margin: 1em;
			}
		}
		.left-content {
			background-color: #f7f7f7;
		}
	}
</style>
