<template>
    <Titre msg="Bienvenue sur la page de jeu !!!"/>
    <BarreNavigation/>



    <div>
        <table id="plateau">
            <tr v-for="(row, i) in plateau.case" :key="i">
                <th v-for="(item, j) in row" :key="j">
                    <LaCase :id="item.id" :image="item.image" @clickCase="traiteClick"/>
                </th>
            </tr>
        </table>
    </div>
</template>

<script>
import LaCase from './LaCase.vue';
import Titre from '@/components/Titre.vue';
import BarreNavigation from '../BarreNavigation.vue';


export default {
    components: { 
        LaCase,
        Titre,
        BarreNavigation,
    },
    data(){
        return{
            
            plateau:{
                case:[]          
            }
        }
    },
    created(){
        for (let i=0; i<3; i++){
            this.plateau.case[i] = [];
            for (let j=0; j<3; j++) {
            this.plateau.case[i][j] = {id:(3*i+j+1).toString(), image:"", state: 0} 
        }
        }
        

    },

    methods: {
        traiteClick(idcase){
            console.log("Case cliquée :" + idcase);

            this.plateau.case.forEach(row => {
                row.forEach(cse => {
                    if (idcase == cse.id){
                        switch(cse.state){
                        case 0:
                            cse.state=1;
                            cse.image="croix";
                            break;
                        case 1:
                            cse.state=2;
                            cse.image="rond";
                            break;
                        case 2:
                            cse.state=0;
                            cse.image="";
                    }
                    }

                    
                });
            
            });
         }
    }
}
</script>

<style scoped>

#plateau{
    margin: auto;
}


</style>