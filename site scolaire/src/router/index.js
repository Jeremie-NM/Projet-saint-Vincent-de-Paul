import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Connexion from "../views/Connexion.vue";
import Creer_compte from "../views/Creer_compte.vue";



const routes = [
    {
        Path: '/home/:home',
        name: 'home',
        component: Home,
    },
    {
        Path: '/connexion/:connexion',
        name: 'connexion',
        component: Connexion,
    },
    {
        Path: '/Creer_compte/:Creer_compte',
        name: 'Creer_compte',
        component: Creer_compte,
    },

    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;