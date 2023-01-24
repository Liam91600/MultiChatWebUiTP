<template>
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

</template>

<script>
export default{
    data(){
        return{
            leschat:{
                canalId: "",
                canalName: "",
                canalDescription: "",
            }
        }
    },


    mounted(){
        console.log("Appel service Rest")
        const APP_SERVER_URL = "http://127.0.0.1:8082/rest"

        let request = new Request(APP_SERVER_URL + '/chatcanal/' + "all", {
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
                this.leschat= data
            })
    },


    methods: {
        receiptRestDataOk(data){
            this.leschat=data
        },

        handleNewMessage(event){
            console.log(event.data);
            this.chatMessage = JSON.parse(event.data);
            this.chatAllMessage= this.chatAllMessage + this.chatMessage.lePseudo + " :";
        },

        chatBye(){
            this.ws.close();
            this.ws = null;
            this.chatAllMessage = '';
        },

        sendReponse(){
            this.chatReponse.lePseudo
        },

        chatConnect(){
            console.log("Starting connextion to WebSocket Server")
            this.ws=new WebSocket(this.serverUrl);
            this.ws.onopen = function (event){
                console.log(event);
                console.log("On est connexté !!!");
            };
            this.ws.addEventListener('message', (event) => {this.handleNewMessage(event)})

        },
    },



}

</script>