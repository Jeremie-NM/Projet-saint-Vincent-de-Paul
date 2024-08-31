<template>
        <div>
            <router-link
        :to="{ name: 'connexion', params: { connexion } }" class="bouton"
      >
        connexion
      </router-link>
      <router-link
        :to="{ name: 'Creer_compte', params: { Creer_compte } }" class="bouton"
      >
        Creer son compte
      </router-link>
      <a href="www.google.com" target="_nouveau"> aide</a>
        </div>
       
</template>

<script setup>

</script>

<style scoped>
div{
    display: flex;
    flex-direction: column;
    padding: 10px 10px 0 ;
    justify-content: center;
    align-items: center;
}
a{
    margin-right: auto;
    margin-bottom: 10px;
    color: aliceblue;
    
}
a:hover{
    font-style: oblique;
    color: aqua;
}
.bouton{
    background: rgb(248, 244, 244);
    color: rgb(8, 130, 237);
    width: 200px;
    margin: 5px;
    padding: 4px;
    border-radius: 20px;

}

.bouton:hover{
    background: rgba(0, 0, 0, 0);
    box-shadow: rgba(236, 233, 233, 0.543) 0px 2px 0px 0px;
    border-radius: 1px;
    color: white;
    width: auto;
    font-family: serif;
}

</style>