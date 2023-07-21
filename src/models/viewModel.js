export default class ViewModel {
    champions = [];
    selectedChampions = [];
    searchName = '';
    searchSkillDescription = '';
    searchTraits = '';

    getChampionsByName() {
        this.selectedChampions = [];
        this.champions.forEach(x => {
            var lowerName = x.name.toLowerCase();
            var lowerSearchName = this.searchName.toLowerCase();
            if (lowerName.includes(lowerSearchName))
                this.selectedChampions.push(x);
        });
    }

    getChampionsBySkillKeyword() {
        this.searchName = '';
        this.searchTraits = '';
        this.selectedChampions = [];
        this.champions.forEach(x => {
            var lowerSkill = x.ability.desc.toLowerCase();
            var lowerSearchSkillDescription = this.searchSkillDescription.toLowerCase();
            if (lowerSkill.includes(lowerSearchSkillDescription))
                this.selectedChampions.push(x);
        });
    }

    async getAllChampions() {
        // http://cors-anywhere.herokuapp.com/
        const request = await fetch(`https://api.tft.versionverve.com/currentset/champions`, {
            method: 'GET'
        });
        var response = await request.json();
        this.champions = response;
    }
}