<template>
    
    <!-- <router-link :to="{ name: url, params: { lenom: this.nom }}">{{ label }}</router-link>  -->
    <router-link :to="{ name: url}">{{ label }}</router-link>
</template>

<script>
export default {
    name: "NavigationPage",
    props:{
        url:String,
        label:String
    },
    data(){
        return {
            nom:this.$store.getters.getLeUser,
        }
        
    },


}
</script>