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
						<p>My name is Ciarán Deegan and I'm an Irish software developer currently living in Toronto, Canada.</p>
						<p>I believe in continuously improving and learning about myself, which is why I'm always open to new challenges and experiences.</p>
						<blockquote>"Normality is a paved road: It’s comfortable to walk, but no flowers grow on it." ― Vincent van Gogh</blockquote>
						<div class="resume-container has-text-centered">
							<a :href="resumePDF" target="_blank" class="button is-primary is-rounded is-outlined">
								<b-icon pack="fas" icon="download" size="is-small"/><span>Download Resume</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ResumePDF from '../assets/pdf/CiaranDeegan_CV.pdf';

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
			],
			resumePDF: ResumePDF
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
