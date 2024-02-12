<script>
import SingleCard from './SingleCard.vue'
import { store } from '../../../store'
    export default {
        name: "CardsContainer",
        components: {
            SingleCard,
        },
        data(){
            return {
                store
            }
        },
        methods:{
            ricercaArchetipo(searchedArchetype){
                if(store.cardList.archetype.includes(searchedArchetype)){
                console.log(store.cardList.archetype)
                return false
                }
            },
        }
    }
</script>






<template>
    <div id="cardContainer">
        <div class="d-flex flex-wrap">
            <SingleCard v-for="(element, index) in store.cardList"
            :key="index" 
            :propsElement="element"
            />
            <div v-if="store.loading" class="d-flex w-100 justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>

    </div>
  


  


</template>








<style lang="scss" scoped>
    #cardContainer{
        div.d-flex.flex-wrap{
            gap: 2rem;
        }
    }

</style>