<template>
    <div class="general">
       <div class="gr_div">
     <div class="t">
       <img src="../../public/img/logo.png" alt="logo">
       <h1>
           COLLEGE SAINT VINCENT DE PAUL
       </h1>
      
     </div>
     <div class="boutons">
           <Boutons_connexion/>
       </div>
     </div>
    </div>
   
   </template>
   
   <script setup>
   import Boutons_connexion from "../components/Boutons_connexion.vue";
   
   </script>
   
   <style scoped>
   
   .gr_div{
       padding: 1px;
       background: rgb(1, 1, 41);
       display: flex;
       flex-direction: column;
       text-align: center;
       height: 100vh;
       align-items: center;
       justify-content: center;
       
   }
   h1{
       font-size: 1rem;
       text-shadow: rgba(45, 3, 123, 0.327) 2px 2px;
       color: azure;
       margin: 3px;
   }
   img{
       height: 10rem;
       width: 10rem;
       margin: auto ;
       border-radius: 2px;
   }
   
   .boutons{
      margin: 30px;
      justify-content: center;
      background: #0322785b;
      display: flex;
      height: auto;
      width: auto;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: rgba(1, 11, 1, 0.235) 10px 1px 10px 1px;
      border: solide  red 2px 2px   ;
      
   }
   
   </style>