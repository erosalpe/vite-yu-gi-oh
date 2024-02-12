import { reactive } from 'vue'

export const store = reactive ({
    searchText: "",
    loading: true,
    cardList: [],
    archetypeList: [],
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    archetypeUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetype: 'Scegli il Tipo'
});

// https://db.ygoprodeck.com/api/v7/cardinfo.php?&archetype=Alien