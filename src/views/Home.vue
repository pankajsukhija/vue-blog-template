<template>
  <div>
    <!-- <span v-bind:title="message">
    {{myText}}
    </span>
  <div>
    <ol>
      <li v-for="todo in this.todos" v-bind:key="todo.id">
        {{todo.text }}
      </li>
    </ol>
  </div>
  <b-button name='reverseButton' @click="this.reverseMessage">Reverse Message</b-button>
  <Sidebar v-if="isLoaded" v-bind:thoughtsList=this.thoughtsList></Sidebar>
  <b-progress v-else></b-progress> -->
  <PostViewSwitcher/>

  <PostPreview v-for="n in uptoRange" v-bind:key="n"/>

  </div>
</template>

<script>
// import Sidebar from '@/components/Sidebar'
// import axios from 'axios'
// import { setInterval } from 'timers';
import PostPreview from "@/components/PostPreview"
import PostViewSwitcher from '@/components/PostViewSwitcher'


export default {
  
  name: 'home',
  components: {
    // Sidebar
    PostPreview,
    PostViewSwitcher
  },

  data: function () {
    return {
      // message: 'You loaded this page on ' + new Date().toLocaleString(),
      // myText : 'Hover your mouse over me for a few seconds to see my dynamically bound title!',
      // todos: [
      //   { id : 1, text: 'Learn JavaScript' },
      //   { id : 2, text: 'Learn Vue' },
      //   { id : 3, text: 'Build something awesome' }
      // ],
      // thoughtsList: [{data : ''}],
      // isLoaded : false
      uptoRange : [...Array(7).keys()]
    }
  },

  methods: {
    // reverseMessage: function (event) {
    //   console.log(event)
    //   this.myText = this.myText.split('').reverse().join('')
    // },

    // fetchThoughts : async function () {
    //   let result = await axios('https://www.reddit.com/r/showerthoughts/new.json?sort=new')
    //   // console.log(result.data.data.children)
    //   this.thoughtsList = result.data.data.children
    //   this.isLoaded = true
    // }
  },

  mounted () {
    // setInterval(() => this.fetchThoughts(), 5000)
  }
}
</script>
