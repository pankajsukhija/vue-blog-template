<template>
    <div class="card postPreviewCard">
        
        <div class="card-content">
            <div class="media">
            <!-- <div class="media-left">
                <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
            </div> -->
                <div class="media-content">
                    <!-- BUG :::: How does this even make sense ? -->
                    <router-link to='/post'><p class="title is-4 postTitle">This is the title of the post</p></router-link>
                    <!-- <p class="subtitle is-6">@johnsmith</p> -->
                </div>
            </div>

            <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br>
            <time class='postTitle' datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
        </div>

        <div v-if="!this.$store.getters.getIsCompactPostView" class="card-image previewImage">
            <figure class="image is-4by3">
            <img class='previewImage' src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
            </figure>
        </div>
        <!-- Had to move it down cuz of router-bug -->
    </div>
</template>

<style>
.previewImage{
    max-height: 400px;
}
.postPreviewCard{
    padding: 10px;
    margin-top: 20px;
    box-shadow: 2px 4px 22px 2px rgba(0,0,0,.2) !important;
}

.postTitle{
    color: #7957d5 !important;
}

</style>

<script>
export default {
  name: 'postPreview',
  props: {
  },

  data: function () {
    return {
    }
  },

  methods : {
  }

}
</script>