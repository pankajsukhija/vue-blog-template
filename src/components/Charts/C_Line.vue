<script>
import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    name : "c_line",
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