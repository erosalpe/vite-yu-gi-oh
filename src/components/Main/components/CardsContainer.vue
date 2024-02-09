<script>
import SingleCard from './SingleCard.vue'
    export default {
        name: "CardsContainer",
        components: {
            SingleCard,
        }
    }
</script>






<template>
    <div id="cardContainer" class="container-fluid">
        <div class="row">
            <SingleCard/>
        </div>

    </div>
  


  


</template>








<style lang="scss" scoped>
    #cardContainer{
        background-color: red;
    }

</style>