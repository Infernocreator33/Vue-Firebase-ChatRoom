<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <p class="grey-text text-lighten-4 messageName">Username:  {{name}}</p>
            <label for="new-message" class="grey-text text-lighten-4" >New Message: </label>
            <input type="text" name="new-message" class="grey-text text-lighten-4 new-message" v-model="newMessage"/>
            <a class="btn-floating btn-small right green accent-4"  @click="addMessage"><i class="indigo-text text-darken-4 material-icons">add</i></a>
            <p class="red-text" v-if="feedback">{{feedback}}</p>
        </form>
    </div>
</template>
<script>
import database from '@/firebase/init'
export default {
    name: 'NewMessage',
    props: ['name'],
    data(){
        return{
            newMessage: null,
            feedback: null
        }
    },
    methods: {
        addMessage(){
            if(this.newMessage){
                database.collection('Messages').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                }).catch(error =>{
                    console.log(error)
                })
                this.newMessage = null
                this.feedback = null
            }
            else{
                this.feedback = 'You must enter a message'
            }
        }
    }
}
</script>
<style>
.btn-small{
    position: absolute;
    right: 50px;
    bottom: 50px;
    cursor: pointer;
    
}
.new-message{
    padding: 20px;
}

.messageName{
    font-size: 1.2em;
    font-weight: bold;
}
</style>
