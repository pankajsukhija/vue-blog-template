<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    name : 'c_bar',
    data: () => ({
        chartdata: {
        labels: ['Jan', 'Feb', 'Mar', "Apr", 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
        datasets: [
            {
            label: 'No. of Votes',
            backgroundColor: 'orange',
            data: [40, 23, 33, 56, 23, 34, 45, 45, 61]
            },
            {
            label: 'No. of Nopes',
            backgroundColor: '#f77879',
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