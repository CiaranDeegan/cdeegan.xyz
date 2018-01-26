<template>
    <div>
        <p> My Projects </p>
        <ul>
            <li v-for='item in projects'>
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            projects: ['project-1', 'project-2'],
        }
    }
}
</script>

<style scoped>
ul li {
    font-size: 2em;
    text-align: center;
}
</style>
