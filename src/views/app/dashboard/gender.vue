<template>
  <div class="main-content">
    <breadcumb :page="'Total Operaciones'" :folder="'Dashboard'" />
    <b-row>
      <b-col md="6" sm="6" lg="6" xl="6" mt="3">
        <b-card class="mb-30">
          <b-row no-gutters>
            <b-col cols="5" class="text-center">
              <p class="display-1 text-muted mb-0">NPS</p>
              <p class="display-3 text-muted mb-0">60%</p>
              <hr class="my-3" />
              <p class="h5 text-muted mb-3">Caja Arequipa</p>
              <b-form-group label="Base:" label-for="base" class="form-group-mini" label-class="mr-2 mb-0">
                <b-form-input id="base" type="text" v-model.number="baseValue" />
              </b-form-group>
            </b-col>
            <b-col cols="7">
              <div id="chart">
                <apexchart type="donut" width="100%" :options="simpleDonut.chartOptions" :series="simpleDonut.series" />
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col md="6" sm="6" lg="6" xl="6" mt="3">
        <b-row>
          <b-col cols="6">
            <b-card class="mb-30">
              <div class="ul-widget__row-v2">
                <div id="chart">
                  <apexchart type="donut" width="100%" :options="simpleDonutNoLegend.chartOptions" :series="simpleDonutNoLegend.series" />
                </div>
                <div class="ul-widget__content-v2">
                  <h3 class="h1 text-muted heading mt-3 mb-0">58%</h3>
                  <p class="text-muted m-0">Apertura</p>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col cols="6">
            <b-card class="mb-30">
              <div class="ul-widget__row-v2">
                <div id="chart">
                  <apexchart type="donut" width="100%" :options="simpleDonutNoLegend.chartOptions" :series="simpleDonutNoLegend.series" />
                </div>
                <div class="ul-widget__content-v2">
                  <h3 class="h1 text-muted heading mt-3 mb-0">40%</h3>
                  <p class="text-muted m-0">Operaciones</p>
                </div>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <b-card class="mb-30">
          <h3 class="card-title">Evolutivo Periodo Mensual</h3>
          <b-row>
            <b-col cols="2" offset="2">
              <b-button variant="">Más Información</b-button>
            </b-col>
            <b-col cols="8">
              <apexchart type="line" width="100%" :options="simpleLines.chartOptions" :series="simpleLines.series" />
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { multipleYxis, basicColumnChart } from '@/data/apexChart'
import { simplePie, simpleDonut, monochromePie, gradientDonut, donutwithPattern } from '@/data/apexChart.js'

import { echart1, echart3, echart2, echart4 } from '@/data/dashboard3'
import { widgetBarChartThree, widgetBarChartFour, widgetBarChartFive, widgetBarChartSix } from '@/data/widgetStatistics'
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Dashboard v3'
  },
  data: () => ({
    selected: 'x',
    echart1,
    echart2,
    echart3,
    echart4,
    widgetBarChartThree,
    widgetBarChartFour,
    widgetBarChartFive,
    widgetBarChartSix,
    basicColumnChart,
    baseValue: 2.499,
    simpleDonut: {
      series: [42.5, 42.5, 15],
      chartOptions: {
        legend: {
          position: 'bottom'
        },
        labels: ['Promotores', 'Neutros', 'Detractores'],
        dataLabels: {
          enabled: false
        },
        colors: ['#FE9B00', '#548237', '#BD0201'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }
        ]
      }
    },
    simpleDonutNoLegend: {
      series: [42.5, 42.5, 15],

      chartOptions: {
        legend: {
          show: false
        },
        colors: ['#FE9B00', '#548237', '#BD0201'],
        labels: ['Promotores', 'Neutros', 'Detractores'],
        dataLabels: {
          enabled: false
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              }
            }
          }
        ]
      }
    },
    simpleLines: {
      series: [
        {
          name: 'High - 2013',
          data: [59, 49, 57, 46, 54, 51, 40, 56, 53, 56, 55, 63, 61, 75, 57, 33, 100, 53, 41]
        }
      ],
      chartOptions: {
        chart: {
          height: 50,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'straight'
        },
        // title: {
        //   text: 'Average High & Low Temperature',
        //   align: 'left'
        // },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          title: {
            text: 'Month'
          }
        },
        yaxis: {
          title: {
            text: 'Temperature'
          }
          // min: 5,
          // max: 110
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      }
    }
  })
}
</script>

<style lang="scss" scoped>
.form-group {
  &-mini {
    display: flex;
    align-items: center;
    justify-content: center;

    .form-control {
      background: white;
      width: 5rem;
    }
  }
}
</style>