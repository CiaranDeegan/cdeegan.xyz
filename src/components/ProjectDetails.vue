<template>
	<section>
		<div :style="{ backgroundImage: 'url(/dist/' + project.links.image + ')' }" class="card">
			<div class="card-header">
				<p class="card-header-title">{{ project.name }}</p>
			</div>
			<div class="card-content">
				<b-taglist class="tags">
					<b-tag v-for="tag in project.tags" :key="tag" rounded type="is-primary">{{ tag }}</b-tag>
				</b-taglist>
				<div class="content" v-html="project.description"/>
				<a v-if="project.links.video" class="button is-primary is-rounded is-outlined" @click="isModalActive = true">
					<b-icon pack="fas" icon="video" size="is-small"/><span>Watch Video</span>
				</a>
			</div>
		</div>
		<b-modal :active.sync="isModalActive" width="640">
			<video width="100%" controls="" controlslist="nodownload">
				<source :src="'/dist/' + project.links.video" type="video/mp4">
				Your browser does not support HTML5 video.
			</video>
		</b-modal>
	</section>
</template>

<script>
export default {
	name: 'ProjectDetails',
	props: {
		project: {
			type: Object,
			default: () => {}
		}
	},
	data() {
		return {
			isModalActive: false
		}
	}
}
</script>

<style lang="scss" scoped>
	.card {
		height: 100%;
		background-position: center;
		.tags {
			display: inline-block;
		}
	}
</style>
