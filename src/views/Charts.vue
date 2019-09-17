<template>
<div>
  <div>
    <C_Bar :chartdata="chartdata" :options="options"/>
  </div>
  <div>
    <C_Line :chartdata="chartdata" :options="options"/>
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

    data: function (){
        return {
            chartdata: {
                labels: ['Jan', 'Feb', 'Mar', "Apr", 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
                datasets: [
                    {
                    label: 'No. of Votes',
                    backgroundColor: '#f87979',
                    data: [40, 23, 33, 56, 23, 34, 45, 45, 61]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },

    mounted() {
        setInterval(() => this.generateRandomData(), 3000)

    },

    components : {
        C_Line,
        C_Bar
    },

    methods : {
        getRandomInt : function (max = 100) {
            return Math.floor(Math.random() * Math.floor(max))
        },

        generateRandomData : function (){
            let data = []
            let range = [...Array(9).keys()]
            range.forEach(i => {
                data.push(this.getRandomInt())
            })
            // console.log(this.chartdata.datasets[0].data)
            this.chartdata = {
                labels: ['Jan', 'Feb', 'Mar', "Apr", 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
                datasets: [
                    {
                    label: 'No. of Votes',
                    backgroundColor: '#f87979',
                    data: data
                    },
                    // {
                    // label: 'No. of Nopes',
                    // data: [43, 13, 43, 36, 21, 30, 34, 89, 32]
                    // }
                ]
            }
            
        }
    }

}
</script>