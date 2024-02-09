<script>
    export default {
        name: "SingleCard",
        props: [
            'propsElement','key'
        ],
        data(){
            return{

            }
        },
    }
</script>






<template>
    <div id="card">
        <img :src="propsElement.card_images[0].image_url" :alt="propsElement.name">
        <div class="d-flex flex-column align-items-center gap-3 my-3">
            <span class="text-light fw-bold">{{ propsElement.name }}</span>
            <span>{{ propsElement.archetype }}</span>
        </div>
        

    </div>
  


</template>








<style lang="scss" scoped>
    
    #card{
        background-color: #d48f38;
        --gap: 2rem;
        --columns: 5;
        flex-basis: calc((100% / var(--columns)) - var(--gap) + (var(--gap) / var(--columns)));
        img{
            width: 100%;
        }
    }



</style>