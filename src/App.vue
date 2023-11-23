<template>
    <div class="col-md-12" style="margin: 50px; padding: 50px;">
        <img id="logo" alt="logo" src="./assets/logo.png">
        <HelloWorld msg="Search TFT Champions" />
        <!--
        <h1>TFT Search</h1>
        <div class="row">
            <div class="col-md-12">
                <div class="row search-bar">
                    <div class="col-md-4">
                        <button class="btn btn-navigation" @click="goToChampions()"> Champions  </button>
                    </div>
                    <div class="col-md-4">
                        <button class="btn btn-navigation" @click="goToItems()"> Items  </button>
                    </div>
                    <div class="col-md-4">
                        <button class="btn btn-navigation" @click="goToAugments()"> Augments  </button>
                    </div>
                </div>
            </div>
        </div>
        <router-view>
            <HelloWorld msg="Search Champions" />
        </router-view>
            -->
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import Items from './components/Items.vue'
    import Augments from './components/Augments.vue'

    export default {
        name: 'App',
        components: {
            HelloWorld,
            Items,
            Augments
        },
        methods: {
            /*
            goToChampions() {
                this.$router.push('/');
            },
            goToItems() {
                this.$router.push('/items');
            },
            goToAugments() {
                this.$router.push('/augments');
            }
            */
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

    #logo {
        max-height: 200px;
    }

    .search-bar {
        font-weight: bold;
        border: 3px solid goldenrod;
        border-radius: 25px;
        padding: 10px;
        background-color: lightseagreen;
    }

    .btn-navigation {
        background-color: goldenrod;
        color: teal;
    }

    .btn-navigation:hover {
        background-color: aliceblue;
        color: teal;
    }

    @import'~bootstrap/dist/css/bootstrap.css';
</style>
