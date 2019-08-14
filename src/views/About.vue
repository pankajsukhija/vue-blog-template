<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b>{{$route.params.something}}</b>
    <p>{{msg}}</p>
    <input v-model="msg" type="text"/> <!-- or v-bind='handleChange' for event -->

    <p>From Vuex store => msg : {{this.$store.getters.getMsg}}</p>
    <p>From Vuex store => stupidButtonState : {{this.$store.getters.getStupidButtonState.toString()}}</p>
    <button @click='this.changeStupidButtonState'>Change State of Button </button>
    <input @keyup="this.setMsg" type="text"/>
  </div>
</template>

<style>

</style>

<script>
export default {
  name: 'about',
  props: {
  },

  data: function () {
    return {
      msg : ''
    }
  },

  methods : {
    handleChange : function (event){
      this.msg = event.target.value
    },

    changeStupidButtonState : function(){
    this.$store.dispatch('changeStupidButtonState')
    },

    setMsg : function(event){
      this.$store.dispatch('setMsg', {msg : event.target.value})
    }
  },
}
</script>