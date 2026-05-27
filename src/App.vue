<template>
    <HelloWorld />
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        components: {
            HelloWorld,
        }
    }
</script>

<style>
    #app {
        font-family: 'Segoe UI', Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: aliceblue;
        background-color: teal;
    }

    html, body {
        background-color: teal;
        margin: 0;
        padding: 0;
    }

    @import '~bootstrap/dist/css/bootstrap.css';
</style>
