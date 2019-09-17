<template>
<div>
  <div>
    <C_Bar />
  </div>
  <div>
    <C_Line />
  </div>
</div>
</template>

<style>

</style>

<script>
import C_Line from '@/components/Charts/C_Line'
import C_Bar from '@/components/Charts/C_Bar'


export default {
    name: 'charts',

    props: {
    },

    components : {
        C_Line,
        C_Bar
    },

    data: function () {
        return {
        }
    },

    methods : {
    }

}
</script>