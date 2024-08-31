<template>
  <div class="general">
    <div >
        <Entete/> 
    </div>
    <div class="contenaire">
        
        <input type="text" placeholder="Entrez votre psuedo" required>
        <input type="password" placeholder="Entrez votre mot de passe" required>
        <button>
            connexion
        </button>
    </div>
  </div>
</template>

<script setup>
import Entete from "../components/Entete.vue";
import Boutonretour from "../components/Boutonretour.vue";



</script>

<style scoped>
input{
    margin: 4px;
    border-radius: 4px;
    text-align: center;
    background: rgba(255, 0, 0, 0);
    color: white;
    width: 15rem;
   

}
input:hover{
    box-shadow: 5px red;
    border: 2px rgba(255, 0, 0, 0) solid;
    
}
input:active{
    
}
 button{
    margin: 4px;
    border-radius: 4px;
    text-align: center;
    background: rgba(244, 241, 241, 0.814);
    color: white;
    padding: 5px;
    width: 15rem;
    height: 2rem;
    color: blue;
}
.general{
    background: rgb(1, 1, 41);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
}
   .contenaire{
      justify-content: center;
      align-items: center;
      background: #0322785b;
      display: flex;
      flex-direction: column;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: rgba(1, 11, 1, 0.235) 10px 1px 10px 1px;
      border: solide  red 2px 2px   ;
      
   }

</style>