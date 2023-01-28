<template>
    
    <router-link :to="{ name: url, params: { lenom: label }}">{{ label }}</router-link> 
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