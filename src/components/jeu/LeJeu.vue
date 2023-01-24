<template>
    <div>
        <table>
            <tr>
                <th>
                    <LaCase 
                        :id="plateau.case[1].id"
                        :image="plat"
                    />
                </th>
            </tr>
        </table>
    </div>
</template>

<script>
import LaCase from './LaCase.vue';




export default {
    components: { LaCase },
    data(){
        return{
            plateau:{
                case:[
                    {id: "1", image:"", state: 0},
                    {id: "2", image:"", state: 0},
                ]
            }
        }
    },

    methods: {
        traiteClick(idCase){
            console.log("Case cliquée :" + idcase);
            Object.keys(this.plateau)
        }
    }
}
</script>
