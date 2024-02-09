<script>
    export default {
        name: "CardTypeInput"
    }
</script>






<template>
    <div class="dropdown pt-3" id="TypeDropdown">
        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Scegli il Tipo
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Alien</a></li>
            <li><a class="dropdown-item" href="#">Warrior</a></li>
            <li><a class="dropdown-item" href="#">Mage</a></li>
        </ul>
    </div>
</template>








<style lang="scss" scoped>
    #TypeDropdown{
        padding-left: 30rem;
    }
</style>