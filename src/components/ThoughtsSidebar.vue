<template>
<!-- This widget fetches latest data from r/showerthoughts -->
  <b-message class='sidebarItem' size="is-medium">
    <p v-if="isLoaded">{{this.thoughtsList}}</p>
    <p v-else>Loading thoughts..</p>
  </b-message>
  
</template>

<style scoped>

</style>

<script>
import axios from 'axios'

export default {
    name: 'thoughtsSidebar',
    props: {
    },

    data: function () {
        return {
            thoughtsList: [{data : ''}],
            isLoaded : false
        }
    },

    methods : {
        fetchThoughts : async function () {
            try {
                let result = await axios('https://www.reddit.com/r/showerthoughts/new.json?sort=new')
                // console.log(result.data.data.children)
                this.thoughtsList = result.data.data.children[0].data.title
                this.isLoaded = true
            } catch (error) {
                console.log(error)
            }
        }
    },

    mounted () {
        setInterval(() => this.fetchThoughts(), 5000)
    },

    // updated(){
    //     // This must not run when data recieved is same
    //     // Working now after using children[0].data.title :)
    //     console.log(`ThoughtsSidebar component updated`)
    // }

}
</script>