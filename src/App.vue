<template>
  <img alt="logo" src="./assets/logo.png">
  <HelloWorld msg="Search TFT Champions"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: aliceblue;
        margin-top: 0px;
        background-color: teal;
        min-height: 800px;
    }

    html {
        background-color: teal;
    }

    @import'~bootstrap/dist/css/bootstrap.css';
</style>
