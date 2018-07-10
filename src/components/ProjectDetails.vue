<template>
	<div class="box">
		<h2>{{ project }}</h2>
	</div>
</template>

<script>
export default {
	name: 'ProjectDetails',
	props: {
		project: {
			type: String,
			default: 'Project'
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
