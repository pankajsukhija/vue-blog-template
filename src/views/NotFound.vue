<template>
  <div>
    <b>{{path}}</b> not found
  </div>
</template>

<style>

</style>

<script>
export default {
    name: 'notFound',
    props: {
    },

    data: function () {
        return {
        }
    },

    computed : {
        path : () => window.location.href
        },

    methods : {
    }

}
</script>