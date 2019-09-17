<script>
import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    name : "c_line",
    data: () => ({
        chartdata: {
        labels: ['Jan', 'Feb', 'Mar', "Apr", 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
        datasets: [
            {
            label: 'No. of Votes',
            data: [40, 23, 33, 56, 23, 34, 45, 45, 61]
            },
            {
            label: 'No. of Nopes',
            data: [43, 13, 43, 36, 21, 30, 34, 89, 32]
            }
        ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }),

    mounted () {
        this.renderChart(this.chartdata, this.options)
    }
}
</script>