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
          <h3 class="card-title">Otras Interacciones</h3>
          <b-row>
            <b-col>
              <div class="card card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center">
                <div class="card-body">
                  <i class="i-Add-User"></i>
                  <div class="content">
                    <p class="text-muted mt-2 mb-0">Créditos</p>
                    <p class="text-primary text-24 line-height-1 mb-2">50</p>
                  </div>
                </div>
              </div>
              <div class="ul-widget__row-v2">
                <div id="chart">
                  <apexchart type="donut" width="100%" :options="simpleDonutNoLegend.chartOptions" :series="simpleDonutNoLegend.series" />
                </div>
                <div class="ul-widget__content-v2">
                  <h3 class="h1 text-muted heading mt-3 mb-0">50%</h3>
                  <p class="text-muted m-0">Créditos</p>
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="card card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center">
                <div class="card-body">
                  <i class="i-Add-User"></i>
                  <div class="content">
                    <p class="text-muted mt-2 mb-0">Reprogramación</p>
                    <p class="text-primary text-24 line-height-1 mb-2">68</p>
                  </div>
                </div>
              </div>
              <div class="ul-widget__row-v2">
                <div id="chart">
                  <apexchart type="donut" width="100%" :options="simpleDonutNoLegend.chartOptions" :series="simpleDonutNoLegend.series" />
                </div>
                <div class="ul-widget__content-v2">
                  <h3 class="h1 text-muted heading mt-3 mb-0">45%</h3>
                  <p class="text-muted m-0">Reprogramación</p>
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="card card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center">
                <div class="card-body">
                  <i class="i-Add-User"></i>
                  <div class="content">
                    <p class="text-muted mt-2 mb-0">Desembolso Digital</p>
                    <p class="text-primary text-24 line-height-1 mb-2">20</p>
                  </div>
                </div>
              </div>
              <div class="ul-widget__row-v2">
                <div id="chart">
                  <apexchart type="donut" width="100%" :options="simpleDonutNoLegend.chartOptions" :series="simpleDonutNoLegend.series" />
                </div>
                <div class="ul-widget__content-v2">
                  <h3 class="h1 text-muted heading mt-3 mb-0">58%</h3>
                  <p class="text-muted m-0">Desembolso Digital</p>
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="card card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center">
                <div class="card-body">
                  <i class="i-Add-User"></i>
                  <div class="content">
                    <p class="text-muted mt-2 mb-0">Caja Móvil</p>
                    <p class="text-primary text-24 line-height-1 mb-2">40</p>
                  </div>
                </div>
              </div>
              <div class="ul-widget__row-v2">
                <div id="chart">
                  <apexchart type="donut" width="100%" :options="simpleDonutNoLegend.chartOptions" :series="simpleDonutNoLegend.series" />
                </div>
                <div class="ul-widget__content-v2">
                  <h3 class="h1 text-muted heading mt-3 mb-0">40%</h3>
                  <p class="text-muted m-0">Caja Móvil</p>
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="card card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center">
                <div class="card-body">
                  <i class="i-Add-User"></i>
                  <div class="content">
                    <p class="text-muted mt-2 mb-0">Canales de Atención</p>
                    <p class="text-primary text-24 line-height-1 mb-2">4</p>
                  </div>
                </div>
              </div>
              <div class="ul-widget__row-v2">
                <div id="chart">
                  <apexchart type="donut" width="100%" :options="simpleDonutNoLegend.chartOptions" :series="simpleDonutNoLegend.series" />
                </div>
                <div class="ul-widget__content-v2">
                  <h3 class="h1 text-muted heading mt-3 mb-0">40%</h3>
                  <p class="text-muted m-0">Canales de Atención</p>
                </div>
              </div>
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