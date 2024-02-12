<script>
    import axios from 'axios'
    import { store } from '../../../store'
    export default {
        name: "CardTypeInput",
        data(){
            return{
                store
            }
        },
        methods:{
            sortCards(){
                store.cardList = [];
                store.apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
                store.loading = true;
                if(store.archetype != 'Scegli il Tipo'){
                    store.apiUrl += `?&archetype=${store.archetype}`
                    console.log(store.apiUrl)
                    axios
                    .get( store.apiUrl ).then(response => {
                    store.cardList = response.data.data
                    console.log(store.cardList, "nuova")
                    })
                } else {
                    axios
                    .get( store.apiUrl ).then(response => {
                    store.cardList = response.data.data
                    console.log(store.cardList, "vecchia")
                    })
                }
                setTimeout(function(){
                    store.loading = false;
                }, 1000);
            }
        }
    }
</script>






<template>
    <div class="dropdown pt-3" id="TypeDropdown">
        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{store.archetype}}
        </button>
        <ul class="dropdown-menu overflow-auto">
            <li class="dropdown-item" @click="store.archetype=element.archetype_name, sortCards()" v-for="element,index in store.archetypeList">{{element.archetype_name}}</li>
        </ul>
    </div>
</template>








<style lang="scss" scoped>
    #TypeDropdown{
        padding-left: 17rem;
        height: 8vh;
    }
    .dropdown-menu.overflow-auto{
        height: 20rem;
    }
</style>