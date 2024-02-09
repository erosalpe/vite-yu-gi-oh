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