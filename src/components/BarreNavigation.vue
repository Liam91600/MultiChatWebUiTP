<template>

<div id="Navig">
        <nav><h4>

            <Navigation url="Maison" label="Maison"/>
            <span> - </span>
            <Navigation url="Chat" label="Discutons !!"/>
            <span> - </span>
            <Navigation url="Jeu" label="Jouons !!"/>
            <span> - </span>
            <Navigation url="home" label="Au revoir"/>

        </h4></nav>

    </div>
    
</template>

<script>
import Navigation from './Navigation.vue';

export default {

    name: "BarreNavigation",
    components:{
    Navigation
    },


}
</script>