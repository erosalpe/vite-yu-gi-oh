<script>
    import CardTypeInput from './components/CardTypeInput.vue'
    export default {
        name: "MainComponent",
        components: {
            CardTypeInput,
        }
    }
</script>






<template>
    <div id="mainBg">
        <CardTypeInput/>

    </div>
  


</template>








<style lang="scss" scoped>
    #mainBg{
        background-color: #d48f38;
        height: 90vh;
    }
    




</style>