<script>
    import { store } from '../../../store'
    export default {
        name: "CardTypeInput",
        data(){
            return{
                store
            }
        },
    }
</script>






<template>
    <div class="dropdown pt-3" id="TypeDropdown">
        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{store.archetype}}
        </button>
        <ul class="dropdown-menu overflow-auto">
            <li class="dropdown-item" @click="store.archetype=element.archetype_name, getCards()" v-for="element,index in store.archetypeList">{{element.archetype_name}}</li>
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