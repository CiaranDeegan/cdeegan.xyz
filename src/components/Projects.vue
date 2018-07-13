<template>
	<div class="projects">
		<ProjectDetails v-for="project in projects" :key="project.name" :project="project"/>
	</div>
</template>

<script>
import ProjectDetails from './ProjectDetails';
import ProjectsJSON from '../assets/json/projects.json';

export default {
	name: 'Projects',
	components: {
		ProjectDetails
	},
	data() {
		return {
			projects : []
		}
	},
	created() {
		this.projects = ProjectsJSON.projects;
	}
}
</script>

<style lang="scss" scoped>

</style>
