export default class ViewModel {
    champions = [];
    selectedChampions = [];
    searchName = '';
    searchSkillDescription = '';
    searchTraits = '';

    getChampionsByName() {
        this.searchSkillDescription = '';
        this.searchTraits = '';
        this.selectedChampions = [];
        if (this.searchName.trim() == '')
            this.selectedChampions = this.champions;
        else
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
        if (this.searchName.trim() == '')
            this.selectedChampions = this.champions;
        else
            this.champions.forEach(x => {
                var lowerSkill = x.ability.desc.toLowerCase();
                var lowerSearchSkillDescription = this.searchSkillDescription.toLowerCase();
                if (lowerSkill.includes(lowerSearchSkillDescription))
                    this.selectedChampions.push(x);
            });
    }

    getChampionsByTrait() {
        this.searchName = '';
        this.searchTraits = '';
        this.selectedChampions = [];
        if (this.searchName.trim() == '')
            this.selectedChampions = this.champions;
        else
            this.champions.forEach(x => {
                var lowerSearchTraits = this.searchTraits.toLowerCase();
                x.traits.forEach(y => {
                    var lowerTrait = y.toLowerCase();
                    if (lowerTrait.includes(lowerSearchTraits))
                        this.selectedChampions.push(x);
                });
            });
    }

    async getAllChampions() {
        // http://cors-anywhere.herokuapp.com/
        const request = await fetch(`https://api.tft.versionverve.com/currentset/champions`, {
            method: 'GET',
            headers: {
                'Origin':'https://www.tft.versionverve.com'
            }
        });
        var response = await request.json();
        this.champions = response;
        this.selectedChampions = response;
    }
}