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
        setTimeout(function(){
          store.loading = false;
        }, 1000);
      },
      getArcheetypes(){
        axios
        .get( store.archetypeUrl ).then(response => {
          store.archetypeList = response.data
        })   
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
  <div v-if="store.loading" class="d-flex w-100 justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <MainComponent v-else/>

</template>





<style>


</style>
