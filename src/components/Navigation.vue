<template>
    
    <router-link :to="url">{{ label }}</router-link> 
</template>

<script>
export default {
    name: "NavigationPage",
    props:{
        url:String,
        label:String
    }

}
</script>