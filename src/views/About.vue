<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b>{{$route.params.something}}</b>
    <p>{{msg}}</p>
    <input v-model="msg" type="text"/> <!-- or v-bind='handleChange' for event -->
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
    }

  }

}
</script>