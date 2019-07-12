<template>
<div class="welcome container">
  <div class="card grey darken-4">
    <div class="card-content center-align">
      <h2 class="grey-text text-lighten-4 ">Welcome</h2>
      <form @submit.prevent="enterChat">
        <label for="name" class="left grey-text text-lighten-4 ">Enter Name: </label>
        <input type="text" name="name" class="grey-text text-lighten-4" v-model="name"/>
        
        <button class="btn blue darken-4 white-text">Enter Chat</button>
        
        <p v-if="feedback" class="red-text feedback">{{feedback}}</p>
      </form>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  }, 
  methods: {
    enterChat(){
      if(this.name)
      {
        this.$router.push({name: 'Chat', params: {name: this.name}})// same as the props of 'name' from Chat.vue props value
      }
      else{
        this.feedback = 'You must enter a name to join the chat'
      }
    }
  }
}
</script>

<style>
button{
  margin-top: 4%;
}

.welcome{
  max-width: 60%;
  margin-top: 80px;
}
.welcome h2{
  font-size: 3em;
}
</style>