<script>
    import CardTypeInput from './components/CardTypeInput.vue'
    import CardsCounter from './components/CardsCounter.vue'
    import CardsContainer from './components/CardsContainer.vue'
    export default {
        name: "MainComponent",
        components: {
            CardTypeInput,
            CardsCounter,
            CardsContainer
        }
    }
</script>






<template>
    <main>
        <div id="mainBg">
            <CardTypeInput/>
            <div id="mainBodyBg" class="w-75 m-auto p-5">
                <CardsCounter/>
                <CardsContainer/>
            </div>
    
        </div>
    </main>
  


</template>








<style lang="scss" scoped>
    main{
        #mainBg{
            background-color: #d48f38;
            #mainBodyBg{
                background-color: white;
            }
        }
    }
    




</style>