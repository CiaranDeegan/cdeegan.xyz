<template>
	<div class="box">
		<h2>{{ project.name }}</h2>
		<b-taglist class="tags">
			<b-tag v-for="tag in project.tags" :key="tag" rounded type="is-primary">{{ tag }}</b-tag>
		</b-taglist>
		<div v-html="project.description"/>
	</div>
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
	.box {
		margin: 2em;
		.tags {
			display: inline-block;
		}
	}
</style>
