<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div class="col-md-12">
            <div class="row search-bar">
                <div class="col-md-3">
                    Name:
                    <input v-model="model.searchName" v-on:change="model.getChampionsByName" />
                </div>
                <div class="col-md-4">
                    Skill Keyword:
                    <input v-model="model.searchSkillDescription" v-on:change="model.getChampionsBySkillKeyword" />
                </div>
                <div class="col-md-4">
                    Trait:
                    <input v-model="model.searchTraits" v-on:change="model.getChampionsByTrait" />
                </div>
            </div>
        </div>

        <div class="champion-data" v-for="c in model.selectedChampions"
             :accesskey="c.name"
             :value="c">
            <h2>{{c.name}}</h2>
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-6">
                        <div class="col-md-12 stat-box">
                            <div class="col-md-12">Armor: {{c.stats.armor}} </div>
                            <div class="col-md-12">Attack Speed: {{c.stats.attackSpeed}}</div>
                            <div class="col-md-12">Crit Chance: {{c.stats.critChance}}</div>
                            <div class="col-md-12">Crit Multiplier: {{c.stats.critMultiplier}}</div>
                            <div class="col-md-12">Damage: {{c.stats.damage}}</div>
                            <div class="col-md-12">HP: {{c.stats.hp}}</div>
                            <div class="col-md-12">Initial Mana: {{c.stats.initialMana}}</div>
                            <div class="col-md-12">Magic Resist: {{c.stats.magicResist}}</div>
                            <div class="col-md-12">Mana: {{c.stats.mana}}</div>
                            <div class="col-md-12"> Range: {{c.stats.range}}</div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div v-html="span(c.ability.desc)" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { ref, reactive } from 'vue';
    import state from '@/state';
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        methods: {
            span(text) {
                return `<span> ${text} </span>`
            }
        },
        setup(methods) {
            const model = reactive(state.viewModel);
            model.getAllChampions();
            return {
                model,
                methods,
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style: inside;
        list-style-type: disc;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    div {
        align-items: center;
    }

    .stat-box {
        text-align: left;
        border: 3px solid lavender;
        border-radius: 25px;
        padding: 10px;
        margin: 10px;
        background-color: lavender;
        color: darkslateblue;
    }

    .champion-data {
        text-align: left;
        border: 3px solid goldenrod;
        border-radius: 25px;
        padding: 10px;
        margin: 10px;
        background-color:darkslateblue;
    }

    .champion-data h2 {
        text-align:center;
        font-weight: bold;
        margin-top: 0px;
    }

    .hello {
        background-color: teal;
        color: aliceblue;
        margin: 50px;
        padding: 50px;
    }

    .search-bar {
        font-weight: bold;
        border: 3px solid goldenrod;
        border-radius: 25px;
        padding: 10px;
        background-color: lightseagreen;
    }
</style>
