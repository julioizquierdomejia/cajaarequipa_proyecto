<template>
  <div class="main-content">
    <breadcumb :page="'Total Operaciones'" :folder="'Dashboard'" />
    <b-row>
      <b-col cols="12">
        <div class="d-flex align-items-center mb-3">
          <div class="title-circle orangex">
            <div class="title-circle-inner"></div>
          </div>
          <h2 class="h3 text-muted mb-0">ESCUCHA Y DISPOSICIÓN</h2>
        </div>
        <b-row>
          <b-col cols="3">
            <b-table hover small :items="items" :fields="fields" bordered head-variant="dark">
              <template #custom-foot="data">
                <b-tr>
                  <b-th colspan="2">INS</b-th>
                  <b-td>83%</b-td>
                </b-tr>
              </template>
            </b-table>
          </b-col>
          <b-col cols="7">
            <apexchart type="line" height="180" width="100%" :options="simpleLines.chartOptions" :series="simpleLines.series" />
          </b-col>
          <b-col cols="2">
            <apexchart type="donut" height="200" width="100%" :options="simpleDonut.chartOptions" :series="simpleDonut.series" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <div class="d-flex align-items-center mb-3">
          <div class="title-circle lime">
            <div class="title-circle-inner"></div>
          </div>
          <h2 class="h3 text-muted mb-0">CORDIALIDAD Y AMABILIDAD</h2>
        </div>
        <b-row>
          <b-col cols="3">
            <b-table hover small :items="items" :fields="fields" bordered head-variant="dark">
              <template #custom-foot="data">
                <b-tr>
                  <b-th colspan="2">INS</b-th>
                  <b-td>83%</b-td>
                </b-tr>
              </template>
            </b-table>
          </b-col>
          <b-col cols="7">
            <apexchart type="line" height="180" width="100%" :options="simpleLines.chartOptions" :series="simpleLines.series" />
          </b-col>
          <b-col cols="2">
            <apexchart type="donut" height="200" width="100%" :options="simpleDonut.chartOptions" :series="simpleDonut.series" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <div class="d-flex align-items-center mb-3">
          <div class="title-circle acqua">
            <div class="title-circle-inner"></div>
          </div>
          <h2 class="h3 text-muted mb-0">ASESORÍA DURANTE LA OPERACION</h2>
        </div>
        <b-row>
          <b-col cols="3">
            <b-table hover small :items="items" :fields="fields" bordered head-variant="dark">
              <template #custom-foot="data">
                <b-tr>
                  <b-th colspan="2">INS</b-th>
                  <b-td>83%</b-td>
                </b-tr>
              </template>
            </b-table>
          </b-col>
          <b-col cols="7">
            <apexchart type="line" height="180" width="100%" :options="simpleLines.chartOptions" :series="simpleLines.series" />
          </b-col>
          <b-col cols="2">
            <apexchart type="donut" height="200" width="100%" :options="simpleDonut.chartOptions" :series="simpleDonut.series" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <div class="d-flex align-items-center mb-3">
          <div class="title-circle bluex">
            <div class="title-circle-inner"></div>
          </div>
          <h2 class="h3 text-muted mb-0">HIGIENE Y CUIDADO PERSONAL</h2>
        </div>
        <b-row>
          <b-col cols="3">
            <b-table hover small :items="items" :fields="fields" bordered head-variant="dark">
              <template #custom-foot="data">
                <b-tr>
                  <b-th colspan="2">INS</b-th>
                  <b-td>83%</b-td>
                </b-tr>
              </template>
            </b-table>
          </b-col>
          <b-col cols="7">
            <apexchart type="line" height="180" width="100%" :options="simpleLines.chartOptions" :series="simpleLines.series" />
          </b-col>
          <b-col cols="2">
            <apexchart type="donut" height="200" width="100%" :options="simpleDonut.chartOptions" :series="simpleDonut.series" />
          </b-col>
        </b-row>
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
    fields: [
      { key: 'rpta', label: 'RPTA' },
      { key: 'quantity', label: 'Q' },
      { key: 'percent', label: '%' }
    ],
    items: [
      { rpta: 'Insatisfechos', quantity: '95', percent: '5%', _cellVariants: { rpta: 'danger' } },
      { rpta: 'Neutros', quantity: '122', percent: '7%', _cellVariants: { rpta: 'warning' } },
      { rpta: 'Satisfechos', quantity: '1646', percent: '8%', _cellVariants: { rpta: 'success' } }
    ],
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
      series: [83, 17],
      chartOptions: {
        legend: {
          show: false,
          position: 'bottom'
        },
        // labels: ['Promotores', 'Neutros', 'Detractores'],
        dataLabels: {
          enabled: false
        },
        colors: ['#01B0F1', '#A6A6A6'],
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
          data: [82, 81, 93, 81, 84, 82, 84, 83, 84, 81, 81, 87, 90, 81, 78, 100, 100, 68, 70]
        }
      ],
      chartOptions: {
        chart: {
          height: '50px',
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
          // curve: 'straight',
          curve: 'smooth'
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
        // xaxis: {
        //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        //   title: {
        //     text: 'Month'
        //   }
        // },
        // yaxis: {
        //   title: {
        //     text: 'Temperature'
        //   }
        // min: 5,
        // max: 110
        // },
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
.title-circle {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  margin-right: 0.5rem;
  border: 2px solid;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;

  &-inner {
    width: 15px;
    height: 15px;
    border-radius: 100%;
  }

  &.orangex {
    border-color: #f09a11;

    .title-circle-inner {
      background-color: #f09a11;
    }
  }

  &.lime {
    border-color: #99bb5d;

    .title-circle-inner {
      background-color: #99bb5d;
    }
  }

  &.acqua {
    border-color: #0ea383;

    .title-circle-inner {
      background-color: #0ea383;
    }
  }

  &.bluex {
    border-color: #2e87bf;

    .title-circle-inner {
      background-color: #2e87bf;
    }
  }
}
</style>