<template>
	<div class="columns">
		<div class="column is-one-quarter has-text-left left-content">
			Test1
		</div>
		<div class="column is-three-quarters has-text-left">
			Test2
		</div>
	</div>
</template>

<script>
export default {
	name: 'ResumeSection'
}
</script>

<style lang="scss" scoped>
	.columns {
		.column {
			padding: 2em;
		}
		.left-content {
			font-weight: bold;
			background-color: #f7f7f7;
		}
	}

</style>
