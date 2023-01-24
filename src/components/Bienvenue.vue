<template>

    <Titre msg="Bienvenue sur MyMultiChat-Game !!!"/>
    <Login/>
    
</template>

<script>
import Titre from '@/components/Titre.vue';
import Login from '@/components/Login.vue';


export default {
    name: 'BienvenuePage',
    components: {
    Titre,
    Login
    }
}

</script>