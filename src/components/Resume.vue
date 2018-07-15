<template>
	<div class="home">
		<div class="card">
			<ResumeSection class="resume-section"/>
			<ResumeSection class="resume-section"/>
			<ResumeSection class="resume-section"/>
		</div>
	</div>
</template>

<script>
import ResumeSection from './ResumeSection';

export default {
	name: 'Resume',
	components: {
		ResumeSection
	}
}
</script>

<style lang="scss" scoped>

</style>
