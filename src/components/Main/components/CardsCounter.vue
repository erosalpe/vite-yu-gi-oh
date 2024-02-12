<script>
    import { store } from '../../../store'
    export default {
        name: "CardsCounter",
        data(){
            return {
                store
            }
        },
    }
</script>






<template>
    <div id="Counter">
        <span class="fw-bold text-light">Found {{store.cardList.length}} cards</span>
    </div>
</template>








<style lang="scss" scoped>
    #Counter{
        background-color: #212529;
        padding: 10px;
    }
    




</style>