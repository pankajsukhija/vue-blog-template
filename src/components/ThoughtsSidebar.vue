<template>
<!-- This widget fetches latest data from r/showerthoughts -->
  <b-message class='sidebarItem' size="is-medium">
    <p v-if="isLoaded">{{this.thoughtsList[0].data.title}}</p>
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
                this.thoughtsList = result.data.data.children
                this.isLoaded = true
            } catch (error) {
                console.log(error)
            }
        }
    },

    mounted () {
        setInterval(() => this.fetchThoughts(), 5000)
    }

}
</script>