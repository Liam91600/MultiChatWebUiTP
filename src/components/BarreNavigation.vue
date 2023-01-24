<template>

<div id="Navig">
        <nav><h4>

            <Navigation url="testurl" label="Maison"/>
            <span> - </span>
            <Navigation url="testurl" label="Discutons !!"/>
            <span> - </span>
            <Navigation url="testurl" label="Jouons !!"/>
            <span> - </span>
            <Navigation url="testurl" label="Au revoir"/>





        </h4></nav>

    </div>
    
</template>

<script>
import Navigation from './Navigation.vue';

export default {

    name: "BarreNavigation",
    components:{
    Navigation
}

}
</script>