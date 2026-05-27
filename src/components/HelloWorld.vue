<template>
    <div class="app-shell">

        <!-- Header -->
        <header class="app-header">
            <div class="brand-row">
                <div class="brand-logo">
                    <img alt="logo" src="../assets/logo.png" />
                </div>
                <div class="brand-text">
                    <h1>TFT Search</h1>
                    <p>Champion &amp; Trait Database</p>
                </div>
            </div>
            <div class="command-bar">
                <div class="cmd-field">
                    <label>Name</label>
                    <input type="text" v-model="model.searchName" v-on:blur="model.getChampionsByName" @keyup.enter="search()" placeholder="e.g. Ahri" />
                </div>
                <div class="cmd-field">
                    <label>Skill Keyword</label>
                    <input type="text" v-model="model.searchSkillDescription" v-on:blur="model.getChampionsBySkillKeyword" @keyup.enter="search()" placeholder="e.g. stun" />
                </div>
                <div class="cmd-field">
                    <label>Trait</label>
                    <input type="text" v-model="model.searchTraits" v-on:blur="model.getChampionsByTrait" @keyup.enter="search()" placeholder="e.g. Sorcerer" />
                </div>
                <button class="btn-search" @click="search()">Search</button>
            </div>
        </header>

        <div class="gold-rule"></div>

        <div class="shell">

            <!-- Sidebar: traits only -->
            <aside class="trait-sidebar">
                <div class="sidebar-section-title">Traits</div>
                <div class="trait-card" v-for="t in model.selectedTraits" :key="t.name">
                    <h4>{{ t.name }}</h4>
                    <div class="trait-scale">{{ t.unitScale }}</div>
                    <p>{{ t.desc }}</p>
                </div>
            </aside>

            <!-- Main: champion cards -->
            <main class="champion-main">
                <div class="champion-card" v-for="c in model.selectedChampions" :key="c.name">

                    <div class="card-header">
                        <img class="champ-icon" :src="c.squareIcon" width="52" height="52" />
                        <span class="champ-name">{{ c.name }}</span>
                        <div class="traits-inline">
                            <span class="trait-badge" v-for="t in c.traits" :key="t">{{ t }}</span>
                        </div>
                        <span class="cost-badge" :style="{ backgroundColor: costColor(c.cost) }">{{ c.cost }}</span>
                    </div>

                    <div class="card-body">
                        <div class="stat-col">
                            <div class="stat-col-title">Base Stats</div>
                            <div class="stat-grid">
                                <div class="stat-item stat-item--role"><span class="s-label">Role</span><span class="s-val">{{ c.role }}</span></div>
                                <div class="stat-item"><span class="s-label">HP</span><span class="s-val">{{ c.stats.hp }}</span></div>
                                <div class="stat-item"><span class="s-label">Damage</span><span class="s-val">{{ c.stats.damage }}</span></div>
                                <div class="stat-item"><span class="s-label">Armor</span><span class="s-val">{{ c.stats.armor }}</span></div>
                                <div class="stat-item"><span class="s-label">Magic Resist</span><span class="s-val">{{ c.stats.magicResist }}</span></div>
                                <div class="stat-item"><span class="s-label">Atk Speed</span><span class="s-val">{{ roundToPercent(c.stats.attackSpeed) }}%</span></div>
                                <div class="stat-item"><span class="s-label">Crit Chance</span><span class="s-val">{{ roundToPercent(c.stats.critChance) }}%</span></div>
                                <div class="stat-item"><span class="s-label">Crit Multi</span><span class="s-val">{{ round(c.stats.critMultiplier) }}</span></div>
                                <div class="stat-item"><span class="s-label">Mana</span><span class="s-val">{{ c.stats.initialMana }} / {{ c.stats.mana }}</span></div>
                                <div class="stat-item"><span class="s-label">Range</span><span class="s-val">{{ c.stats.range }}</span></div>
                            </div>
                        </div>
                        <div class="ability-col">
                            <div class="ability-col-title">Ability</div>
                            <div class="ability-header-row">
                                <img class="ability-icon" :src="c.ability.icon" width="40" height="40" />
                                <span class="ability-name">{{ c.ability.name }}</span>
                            </div>
                            <div class="ability-desc" v-html="c.ability.desc"></div>
                        </div>
                    </div>

                </div>
            </main>

        </div>
    </div>
</template>

<script>
    import { reactive } from 'vue';
    import state from '@/state';

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        methods: {
            search() {
                if (this.model.searchName.trim() !== '') {
                    this.model.getChampionsByName();
                } else if (this.model.searchSkillDescription.trim() !== '') {
                    this.model.getChampionsBySkillKeyword();
                } else if (this.model.searchTraits.trim() !== '') {
                    this.model.getChampionsByTrait();
                } else {
                    this.model.selectedChampions = this.model.champions;
                }
            },
            costColor(cost) {
                if (cost == 1) return '#6c757d';
                if (cost == 2) return '#28a745';
                if (cost == 3) return '#007bff';
                if (cost == 4) return '#dc3545';
                if (cost == 5) return '#ffc107';
                return '#6c757d';
            },
            roundToPercent(number) {
                return Math.round(number * 100);
            },
            round(number) {
                return Math.round(number * 1000) / 1000;
            },
        },
        setup() {
            const model = reactive(state.viewModel);
            model.getAllChampions();
            model.getAllTraits();
            return { model };
        }
    }
</script>

<style scoped>
    *, *::before, *::after { box-sizing: border-box; }

    /* ── Shell ── */
    .app-shell {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    /* ── Header ── */
    .app-header {
        padding: 20px 28px 0;
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    .brand-row {
        display: flex;
        align-items: center;
        gap: 14px;
    }

    .brand-logo {
        width: 56px;
        height: 56px;
        background: goldenrod;
        border-radius: 14px;
        box-shadow: 0 0 18px rgba(218,165,32,0.4);
        flex-shrink: 0;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .brand-logo img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        /* collapses image to black then shifts hue to darkslateblue */
        filter: brightness(0) saturate(100%) invert(20%) sepia(45%) saturate(900%) hue-rotate(215deg) brightness(88%);
    }

    .brand-text h1 {
        font-size: 1.6rem;
        color: goldenrod;
        letter-spacing: 2px;
        line-height: 1;
        margin: 0;
    }

    .brand-text p {
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 3px;
        opacity: 0.55;
        margin: 3px 0 0;
    }

    /* ── Command bar ── */
    .command-bar {
        display: flex;
        align-items: stretch;
        background: rgba(72,61,139,0.75);
        border: 2px solid goldenrod;
        border-radius: 12px;
        overflow: hidden;
    }

    .cmd-field {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 18px;
        flex: 1;
        border-right: 1px solid rgba(218,165,32,0.3);
    }

    .cmd-field label {
        font-size: 0.68rem;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        color: goldenrod;
        white-space: nowrap;
    }

    .cmd-field input {
        background: transparent;
        border: none;
        outline: none;
        color: aliceblue;
        font-size: 0.9rem;
        width: 100%;
    }

    .cmd-field input::placeholder { opacity: 0.38; }

    .btn-search {
        padding: 0 30px;
        border: none;
        background: goldenrod;
        color: darkslateblue;
        font-weight: 800;
        font-size: 0.9rem;
        cursor: pointer;
        letter-spacing: 1px;
        text-transform: uppercase;
        flex-shrink: 0;
    }

    .btn-search:hover { background: aliceblue; }

    /* ── Gold rule ── */
    .gold-rule {
        height: 2px;
        background: linear-gradient(90deg, transparent, goldenrod 20%, goldenrod 80%, transparent);
        margin: 14px 28px 0;
    }

    /* ── Body shell ── */
    .shell {
        display: flex;
        flex: 1;
    }

    /* ── Trait sidebar ── */
    .trait-sidebar {
        width: 270px;
        flex-shrink: 0;
        background: #006666;
        border-right: 3px solid goldenrod;
        padding: 24px 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .sidebar-section-title {
        font-size: 0.65rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: goldenrod;
        margin-bottom: 4px;
    }

    .trait-card {
        background: darkslateblue;
        border: 1.5px solid goldenrod;
        border-radius: 12px;
        padding: 13px 14px;
    }

    .trait-card h4 {
        font-size: 0.95rem;
        color: goldenrod;
        font-weight: 700;
        margin: 0 0 2px;
    }

    .trait-scale {
        font-size: 0.72rem;
        color: lavender;
        opacity: 0.85;
        margin-bottom: 6px;
    }

    .trait-card p {
        font-size: 0.78rem;
        line-height: 1.45;
        opacity: 0.82;
        margin: 0;
    }

    /* ── Champion main ── */
    .champion-main {
        flex: 1;
        padding: 22px 24px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        overflow-y: auto;
    }

    /* ── Champion card ── */
    .champion-card {
        background: darkslateblue;
        border: 2px solid goldenrod;
        border-radius: 16px;
        overflow: hidden;
    }

    .card-header {
        display: flex;
        align-items: center;
        gap: 0;
        padding: 12px 18px;
        background: rgba(0,0,0,0.3);
        border-bottom: 1.5px solid goldenrod;
        flex-wrap: wrap;
        row-gap: 8px;
    }

    .champ-icon {
        width: 52px;
        height: 52px;
        border-radius: 10px;
        border: 2px solid goldenrod;
        flex-shrink: 0;
        margin-right: 14px;
    }

    .champ-name {
        font-size: 1.2rem;
        font-weight: 800;
        margin-right: 12px;
    }

    .traits-inline {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        flex: 1;
    }

    .trait-badge {
        font-size: 0.68rem;
        padding: 3px 10px;
        border-radius: 20px;
        background: rgba(255,255,255,0.13);
        border: 1px solid rgba(255,255,255,0.25);
    }

    .cost-badge {
        font-size: 0.75rem;
        font-weight: 700;
        padding: 4px 11px;
        border-radius: 20px;
        color: #fff;
        margin-left: auto;
        flex-shrink: 0;
    }

    /* ── Card body ── */
    .card-body {
        display: flex;
    }

    .stat-col {
        flex: 1;
        padding: 16px 18px;
        border-right: 1px solid rgba(218,165,32,0.25);
    }

    .stat-col-title {
        font-size: 0.62rem;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        color: goldenrod;
        margin-bottom: 10px;
    }

    .stat-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5px 10px;
    }

    .stat-item {
        display: flex;
        justify-content: space-between;
        font-size: 0.82rem;
        background: rgba(230,230,250,0.1);
        border-radius: 6px;
        padding: 4px 8px;
    }

    .s-label { color: lavender; opacity: 0.8; }
    .s-val   { font-weight: 600; }

    .stat-item--role .s-val {
        color: goldenrod;
        font-style: italic;
    }

    .ability-col {
        flex: 1;
        padding: 16px 18px;
    }

    .ability-col-title {
        font-size: 0.62rem;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        color: goldenrod;
        margin-bottom: 10px;
    }

    .ability-header-row {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
    }

    .ability-icon {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        border: 1.5px solid goldenrod;
        flex-shrink: 0;
    }

    .ability-name {
        font-size: 0.95rem;
        font-weight: 700;
    }

    .ability-desc {
        font-size: 0.8rem;
        line-height: 1.5;
        opacity: 0.82;
    }
</style>
