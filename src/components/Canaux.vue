<template>
    <Titre msg="Bienvenue sur la page de chat !!!"/>
    <BarreNavigation/>

    <table id="liste-chat" class="center">
        <thead>
            <tr>
                <th>N°</th>
                <th>Nom</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in this.leschat" :key="row">
                <td>{{ row.canalId }}</td>
                <td>{{ row.canalName }}</td>
                <td>{{ row.canalDescription }}</td>
            
            </tr>
        </tbody>
    </table>
    <span>--------------------</span>

    <div>
        <button @click="chatConnect">Blablabla ...</button>
        <div>
            <span><pre>{{ chatAllMessage }}</pre></span>
        </div>
        <input v-model="reponse" style="width:300px"/>
        <button @click="sendReponse">répondre ...</button>
        <p>
            <button @click="chatBye">ByeBye ...</button>
        </p>


    </div>

</template>

<script>
import Titre from '@/components/Titre.vue';
import BarreNavigation from './BarreNavigation.vue';

export default{

    name:"CanauxPage",
    components:{
        Titre,
        BarreNavigation
    },
    data(){
        return{
            leschat:{
                canalId: "",
                canalName: "",
                canalDescription: "",
            },
            reponse: '',
            chatMessage:{
                canalId: 0,
                lePseudo: "",
                leContenu: "",
            },
            chatReponse: {
                canalId: 0,
                lePseudo: "",
                leContenu: "",
            },
            chatAllMessage: "",
            serverUrl:"ws://localhost:8082/ws/multichat/1:Liam",
        }
    },

    // props:{
    //     pseudo: {
    //         type:String,
    //         required:true,
    //     },
    // },


    mounted(){
        console.log("Appel service Rest")
        const APP_SERVER_URL = "http://127.0.0.1:8082/rest"

        let request = new Request(APP_SERVER_URL + '/chatcanal/' + "1", {
            method: 'GET',
            headers: {'Content-Type' : 'application/json'}
        })
        fetch(request)
            .then((response)=> {
                if (response.ok) {
                    return response.json()
                }
            })
            .then(data=> {
                console.log(data);
                this.leschat= [data]
            })
    },


    methods: {
        receiptRestDataOk(data){
            this.leschat=data
        },

        handleNewMessage(event){
            console.log(event.data);
            this.chatMessage = JSON.parse(event.data);
            this.chatAllMessage= this.chatAllMessage + this.chatMessage.lePseudo + " :" + this.chatMessage.leContenu +"\n";
        },

        chatBye(){
            this.ws.close();
            console.log("Déconnexion")
            this.ws = null;
            this.chatAllMessage = '';
        },

        sendReponse(){
            this.chatReponse.lePseudo = this.$store.getters.getLeUser;
            this.chatReponse.leContenu = this.reponse;
            this.ws.send(JSON.stringify(this.chatReponse));
            this.chatAllMessage= this.chatAllMessage + this.chatReponse.lePseudo + " :" + this.chatReponse.leContenu +"\n";

            this.reponse ='';
        },

        chatConnect(){
            console.log("Starting connextion to WebSocket Server")
            this.ws=new WebSocket(this.serverUrl);
            this.ws.onopen = function (event){
                console.log(event);
                console.log("On est connecté !!!");
            };
            this.ws.addEventListener('message', (event) => {this.handleNewMessage(event)})

        },
    },



}

</script>

<style scoped>

.center{
    margin: auto;
}

</style>