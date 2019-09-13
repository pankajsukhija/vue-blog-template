<template>
    <div class="field" id='postViewSwitcher'>
        <b-switch  @input="this.changePostView">
            Compact View
        </b-switch>
    </div>
</template>

<script>
// BUG ::::: Doesn't remember the it;s old state when component is rerendered,
// Defaults to off.
// This was a mistake. Should have used localstorage for view configs. 
export default {
    name: 'postViewSwitcher',
    components: {
    },

    data: function () {
        return {
            isCompact : false
        }
    },

    methods : {
        changePostView : function(){
            this.$store.dispatch('changePostView')
        }
    },

}
</script>

<style scoped>
#postViewSwitcher{
    text-align: center;
    font-weight: 700;
}
</style>