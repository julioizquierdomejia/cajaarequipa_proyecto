<template>
  <div class="main-content">
    <breadcumb :page="'Total Operaciones'" :folder="'Dashboard'" />
    <b-row>
      <b-col cols="4">
        <b-card class="mb-30">
          <div class="d-flex align-items-center">
            <div class="circle bg-success mr-3">
              <span class="percent">40%</span>
            </div>
            <div>
              <p class="h4 text-success mb-3">Promotores</p>
              <b-form-group label="Base:" label-for="base" class="form-group-mini" label-class="mr-2 mb-0">
                <b-form-input id="base" type="text" v-model.number="baseValue" />
              </b-form-group>
            </div>
          </div>
          <b-table hover :items="items" :fields="fields" bordered head-variant="dark" table-variant="success"></b-table>
          <b-table hover :items="items2" :fields="fields2" bordered head-variant="dark" table-variant="success"></b-table>
        </b-card>
      </b-col>
      <b-col cols="4">
        <b-card class="mb-30">
          <div class="d-flex align-items-center">
            <div class="circle bg-warning mr-3">
              <span class="percent">40%</span>
            </div>
            <div>
              <p class="h4 text-warning mb-3">Neutros</p>
              <b-form-group label="Base:" label-for="base" class="form-group-mini" label-class="mr-2 mb-0">
                <b-form-input id="base" type="text" v-model.number="baseValue" />
              </b-form-group>
            </div>
          </div>
          <b-table hover :items="items" :fields="fields" bordered head-variant="dark" table-variant="warning"></b-table>
          <b-table hover :items="items2" :fields="fields2" bordered head-variant="dark" table-variant="warning"></b-table>
        </b-card>
      </b-col>
      <b-col cols="4">
        <b-card class="mb-30">
          <div class="d-flex align-items-center">
            <div class="circle bg-danger mr-3">
              <span class="percent">40%</span>
            </div>
            <div>
              <p class="h4 text-danger mb-3">Detractores</p>
              <b-form-group label="Base:" label-for="base" class="form-group-mini" label-class="mr-2 mb-0">
                <b-form-input id="base" type="text" v-model.number="baseValue" />
              </b-form-group>
            </div>
          </div>
          <b-table hover :items="items" :fields="fields" bordered head-variant="dark" table-variant="danger"></b-table>
          <b-table hover :items="items2" :fields="fields2" bordered head-variant="dark" table-variant="danger"></b-table>
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
    fields: [
      { key: 'dimension', label: 'DIMENSION' },
      { key: 'percent', label: '%' }
    ],
    fields2: [
      { key: 'attribute', label: 'ATRIBUTO' },
      { key: 'percent', label: '%' }
    ],
    items: [
      { dimension: 'Interacción', percent: '100%' },
      { dimension: 'Producto', percent: '2%' },
      { dimension: 'Marca', percent: '0%' }
    ],
    items2: [
      { attribute: 'Trato del Personal', percent: '64%' },
      { attribute: 'Rapidez para la atención (Antes de la atención)', percent: '47%' },
      { attribute: 'Asesoria/Información', percent: '16%' },
      { attribute: 'Disposición del personal', percent: '15%' },
      { attribute: 'Rapidez durante la atención', percent: '10%' },
      { attribute: 'Capacitación', percent: '7%' }
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
    baseValue: 400,
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

.circle {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  margin-bottom: 2rem;

  .percent {
    color: white;
    font-size: 1.5rem;
  }
}
</style>