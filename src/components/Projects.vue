<template>
	<div class="projects">
		<ProjectDetails v-for="project in projects" :key="project" :project="project"/>
	</div>
</template>

<script>
import ProjectDetails from './ProjectDetails';

export default {
	name: 'Projects',
	components: {
		ProjectDetails
	},
	data() {
		return {
			projects : ['cdeegan.xyz', 'Lens', 'swaps.tf']
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
