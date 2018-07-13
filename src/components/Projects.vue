<template>
	<div class="projects">
		<div v-for="(projects, index) in chunkedProjects" :key="index" class="columns">
			<ProjectDetails v-for="(project, index) in projects" :key="index" :project="project" class="column"/>
		</div>
	</div>
</template>

<script>
import ProjectDetails from './ProjectDetails';
import ProjectsJSON from '../assets/json/projects.json';
import chunk from 'chunk';

export default {
	name: 'Projects',
	components: {
		ProjectDetails
	},
	data() {
		return {
			projects : [],
			columns: 3
		}
	},
	computed: {
		chunkedProjects() {
			return chunk(this.projects, this.columns);
		}
	},
	created() {
		this.projects = ProjectsJSON.projects;
	}
}
</script>

<style lang="scss" scoped>

</style>
