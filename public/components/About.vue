<template>
    <p> About {{name}} </p>
</template>

<script>
module.exports = {
    data: function() {
        return {
            name: 'Ciarán Deegan',
        }
    }
}
</script>

<style scoped>
p {
    font-size: 2em;
    text-align: center;
}
</style>
