<template>
	<section>
		<div class="card">
			<div class="card-header">
				<p class="card-header-title">{{ project.name }}</p>
			</div>
			<div class="card-content">
				<b-taglist class="tags">
					<b-tag v-for="tag in project.tags" :key="tag" rounded type="is-primary">{{ tag }}</b-tag>
				</b-taglist>
				<div class="content" v-html="project.description"/>
			</div>
		</div>
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
