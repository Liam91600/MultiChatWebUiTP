<template>

<div id="Navig">
        <nav><h4>

            <Navigation url="./../maison/nom" label="Maison"/>
            <span> - </span>
            <Navigation url="chaturl" label="Discutons !!"/>
            <span> - </span>
            <Navigation url="jeuurl" label="Jouons !!"/>
            <span> - </span>
            <Navigation url="./../" label="Au revoir"/>

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
    // props:{
    //     nom:String,
    // },

}
</script>