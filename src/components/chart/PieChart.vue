<template>
  <Pie
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="myStyles"
  />
</template>

<script>
import { Pie } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

export default {
  name: 'PieChart',
  components: { Pie },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart',
    },
    datasetIdKey: {
      type: String,
      default: 'label',
    },
    cssClasses: {
      default: '',
      type: String,
    },
    plugins: {
      type: Object,
      default: () => {},
    },
    eventList: {
      type: Array,
      default: () => [],
    },
    chartHeight: {
      type: Number,
      default: 400,
    },
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Pie data',
            backgroundColor: [
              '#4ea397',
              '#22c3aa',
              '#7bd9a5',
              '#d0648a',
              '#f58db2',
            ],
            data: [],
            type: 'pie',
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    };
  },
  beforeUpdate() {
    this.chartData.labels = this.eventList.map((el) => el[0]);
    this.chartData.datasets[0].data = this.eventList.map((el) => el[1]);
  },
  computed: {
    myStyles() {
      return {
        height: `${this.chartHeight - 50}px`,
        position: 'relative',
      };
    },
  },
};
</script>
