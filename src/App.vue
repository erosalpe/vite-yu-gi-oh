<script>
  import HeaderComponent from './components/Header/HeaderComponent.vue'
  import MainComponent from './components/Main/MainComponent.vue'
  import { store } from './store'
  import axios from 'axios'

  export default{
    components: {
      HeaderComponent,
      MainComponent
    },
    data(){
      return{
        store
      }
    },
    methods: {
      getCards(){
        store.loading = true;
        axios
        .get( store.apiUrl ).then(response => {
          store.cardList = response.data.data
        })
        store.loading = false;
      },
      getArcheetypes(){
        store.loading = true;
        axios
        .get( store.archetypeUrl ).then(response => {
          store.archetypeList = response.data
        })
        store.loading = false;
      } 
    },
    mounted(){
      this.getCards()
      this.getArcheetypes()
    }
  }
</script>





<template>

  <HeaderComponent/>
  <MainComponent/>

</template>





<style>


</style>
