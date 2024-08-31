<template>
 <div class="corps">
    <div>
        <Accueil/>
    </div>
  <div  class="acces"> <router-view /></div>
 </div>
</template>

<script setup>
import Accueil from "./views/Acceuil.vue";

</script>

<style scoped>
*{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

</style>