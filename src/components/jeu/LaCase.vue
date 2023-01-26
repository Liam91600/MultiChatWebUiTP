<template>
    <button @click="clickMe">
        <img :src="require('@/assets' + imageurl)" alt="Case de jeu" height="110" width="110"/>
    </button>
</template>

<script>

const urlcroix = '/img/croix.png'
const urlrond = '/img/rond.png'
const urlvide = '/img/vide.png'

export default {
    props:{
        image:String,
        id:String
    },

    computed:{
        imageurl: function(){

            if(this.image=='croix'){
                return urlcroix;
            }
            if(this.image=='rond'){
                return urlrond;
            }
            return urlvide;

        }
    },

    methods:{
        clickMe(){
            this.$emit('clickCase', this.id)
        }
    }
}
</script>

<style scoped>

#case{
    /* width: 110px;
    height: 110px; */
}

</style>