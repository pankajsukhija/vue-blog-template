<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    name : 'c_bar',
    data: function (){
        return {
        }
    },

    props : {
        chartdata: {
            type: Object,
            default: null
        },
        options: {
            type: Object,
            default: null
        }
    },

    mounted () {
        this.renderChart(this.chartdata, this.options, { responsive: true, maintainAspectRatio: false })
    },

    watch: {
        chartdata: function() {
        // this._chart.destroy();
        this.renderChart(this.chartdata, this.options, { responsive: true, maintainAspectRatio: false })
        }

    }
}
</script>