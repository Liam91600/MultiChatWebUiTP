<template>

    <Titre :msg="'Bienvenue sur la page principale, ' + nom"/>


    <BarreNavigation/>

    
    <div class="hello">
        <h3> Hello {{ $route.params.lenom }}</h3>
        <!-- <h3> Salut {{ $store.getters.getLeUser }}</h3> -->
    </div>


    



</template>

<script>
import BarreNavigation from './BarreNavigation.vue';
import Titre from './Titre.vue';


export default{
    name: "MaisonView",
    components: {
    Titre,
    BarreNavigation
},


    created(){
        this.nom = this.$route.params.lenom
    },

}
</script>
