<template>
    <div class="chat container ">
        <router-link :to="{name: 'Welcome'}"><span class="right grey-text text-lighten-4 sign-out">Sign Out</span></router-link> 
        <p><br/><p/>
        <h2 class="grey-text text-lighten-4">Vue Chatroom</h2>
        
        <div class="card grey darken-4">

            <div class="card-content">
                <ul class="messages indigo darken-4" v-chat-scroll>
                    <li class="li" v-for="message in messages" :key="message.id">
                        <span class="right grey-text text-lighten-2">{{message.name}}  </span>
                        <br/>
                        <br/>
                        <span class="right content blue-text text-lighten-4">{{message.content}}</span>
                        <br/>
                        <br/>
                        <span class="right orange-text time text-lighten-2">{{message.timestamp}}</span>
                        <br/>
                        <br/>
                    </li>
                </ul>
            </div>
        <div class="card-action">
            <NewMessage class="newMessage indigo darken-4" :name="name"/>
        </div>
        </div>

    </div>
</template>
<script>
import NewMessage from '@/components/NewMessage'
import database from '@/firebase/init'
import moment from 'moment'
export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage,
    },
    data(){
        return{
            messages: [],

        }
    },
    created(){
        let ref = database.collection('Messages').orderBy('timestamp')
        ref.onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(change =>{
                if(change.type == 'added'){
                    let doc = change.doc
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('llll')
                    })
                }
            })
        })
    }
}
</script>
<style>
.newMessage{
    border: 1px solid rgb(9, 211, 76);
}

.chat h2{
    font-size: 2.6em;
    margin-bottom: 15px;
   
}
.chat span{
    font-size: 1.4em;
    
}
li.li{
    padding-bottom: 10px;
}
span.content{
    font-size: 0.9em;
    word-break: break-all;
    padding-right: 10px;
    padding-left: 10px;
}
.chat .time{
    display: block;
    font-size: 0.7em;
}
.sign-out{
    padding-right: 10px;
    
}
.messages{
    max-height: 285px;
    min-height: 60%;
    overflow: auto;
    scrollbar-color:rgb(9, 211, 76) rgb(2, 54, 199);
    scrollbar-width: thin;
    border: 1px solid rgb(9, 211, 76);
}
.messages::-webkit-scrollbar{
    width: 4px;
    
}
.messages::-webkit-scrollbar-track{
    background: rgb(9, 211, 76);
}
.messages::-webkit-scrollbar-thumb{
    
    background: rgb(2, 54, 199);
}
</style>
