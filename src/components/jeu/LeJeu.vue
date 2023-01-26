<template>
    <Titre msg="Bienvenue sur la page de jeu !!!"/>
    <BarreNavigation/>



    <div>
        <table id="plateau">
            <tr>
                <th>
                    <LaCase :id="plateau.case[0].id" :image="plateau.case[0].image" @clickCase="traiteClick"/>
                </th>
                <th>
                    <LaCase :id="plateau.case[1].id" :image="plateau.case[1].image" @clickCase="traiteClick"/>
                </th>
                <th>
                    <LaCase :id="plateau.case[2].id" :image="plateau.case[2].image" @clickCase="traiteClick"/>
                </th>
            </tr>
            <tr>
                <th>
                    <LaCase :id="plateau.case[3].id" :image="plateau.case[3].image" @clickCase="traiteClick"/>
                </th>
                <th>
                    <LaCase :id="plateau.case[4].id" :image="plateau.case[4].image" @clickCase="traiteClick"/>
                </th>
                <th>
                    <LaCase :id="plateau.case[5].id" :image="plateau.case[5].image" @clickCase="traiteClick"/>
                </th>
            </tr>
            <tr>
                <th>
                    <LaCase :id="plateau.case[6].id" :image="plateau.case[6].image" @clickCase="traiteClick"/>
                </th>
                <th>
                    <LaCase :id="plateau.case[7].id" :image="plateau.case[7].image" @clickCase="traiteClick"/>
                </th>
                <th>
                    <LaCase :id="plateau.case[8].id" :image="plateau.case[8].image" @clickCase="traiteClick"/>
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
                case:[
                    {id: "1", image:"", state: 0},
                    {id: "2", image:"", state: 0},
                    {id: "3", image:"", state: 0},
                    {id: "4", image:"", state: 0},
                    {id: "5", image:"", state: 0},
                    {id: "6", image:"", state: 0},
                    {id: "7", image:"", state: 0},
                    {id: "8", image:"", state: 0},
                    {id: "9", image:"", state: 0},
                ]
            }
        }
    },

    methods: {
        traiteClick(idcase){
            console.log("Case cliquée :" + idcase);
            Object.keys(this.plateau.case).forEach((cse) => {
                if (idcase==this.plateau.case[cse].id) {
                    switch (this.plateau.case[cse].state){
                        case 0:
                            this.plateau.case[cse].state = 1;
                            this.plateau.case[cse].image = "croix";
                            break;
                        case 1:
                            this.plateau.case[cse].state = 2;
                            this.plateau.case[cse].image = "rond";
                            break;
                        case 2:
                            this.plateau.case[cse].state = 0;
                            this.plateau.case[cse].image = "";
                    }
                }
            })
        }
    }
}
</script>

<style scoped>

#plateau{
    margin: auto;
}


</style>