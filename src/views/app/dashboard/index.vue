<template>
  <div class="main-content">
    <breadcumb :page="'Total Operaciones'" :folder="'Dashboard'" />
    <b-row>
      <b-col md="6" sm="6" lg="6" xl="6" mt="3">
        <b-card class="mb-30">
          <b-row no-gutters>
            <b-col cols="5" class="text-center">
              <p class="display-1 text-muted mb-0">NPS</p>
              <p class="display-3 text-muted mb-0">{{ Math.round(totalInsights.percent * 100) }}%</p>
              <hr class="my-3" />
              <p class="h5 text-muted mb-3">Caja Arequipa</p>
              <b-form-group label="Base:" label-for="base" class="form-group-mini" label-class="mr-2 mb-0">
                <b-form-input id="base" type="text" v-model.number="totalInsights.base" />
              </b-form-group>
            </b-col>
            <b-col cols="7">
              <div id="chart">
                <apexchart type="donut" width="100%" :options="chartOptions()" :series="parseSeries(totalInsights.summary)" />
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
                  <apexchart type="donut" width="100%" :options="chartOptions(false)" :series="parseSeries(totalInsights.total.categories.APE)" />
                </div>
                <div class="ul-widget__content-v2">
                  <h3 class="h1 text-muted heading mt-3 mb-0">{{ Math.round(totalInsights.total.nps_apertura * 100) }}%</h3>
                  <p class="text-muted m-0">Apertura</p>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col cols="6">
            <b-card class="mb-30">
              <div class="ul-widget__row-v2">
                <div id="chart">
                  <apexchart type="donut" width="100%" :options="chartOptions(false)" :series="parseSeries(totalInsights.total.categories.OPE)" />
                </div>
                <div class="ul-widget__content-v2">
                  <h3 class="h1 text-muted heading mt-3 mb-0">{{ Math.round(totalInsights.total.nps_operaciones * 100) }}%</h3>
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
            <template v-for="insight in othersInsights">
              <b-col :key="`Insight ${insight.name}`">
                <div class="card card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center">
                  <div class="card-body">
                    <i class="i-Add-User"></i>
                    <div class="content">
                      <p class="text-muted mt-2 mb-0">{{ insight.name }}</p>
                      <p class="text-primary text-24 line-height-1 mb-2">{{ insight.base }}</p>
                    </div>
                  </div>
                </div>
                <div class="ul-widget__row-v2">
                  <div id="chart">
                    <apexchart type="donut" width="100%" :options="chartOptions(false)" :series="parseSeries(insight.summary)" />
                  </div>
                  <div class="ul-widget__content-v2">
                    <h3 class="h1 text-muted heading mt-3 mb-0">{{ Math.round(insight.percent * 100) }}%</h3>
                    <p class="text-muted m-0">{{ insight.name }}</p>
                  </div>
                </div>
              </b-col>
            </template>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  metaInfo: {
    title: 'Total Operaciones'
  },
  data: () => ({
    simpleDonut: {
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
  }),
  created() {
    this.fetchOthersInsights()
    this.fetchTotalInsights()
  },
  computed: {
    ...mapGetters(['othersInsights', 'totalInsights'])
  },
  methods: {
    ...mapActions(['fetchOthersInsights', 'fetchTotalInsights']),
    parseSeries(data) {
      const series = data.map(item => {
        return Math.round(item.percent * 100)
      })
      return series
    },
    chartOptions(label) {
      const options = {
        legend: {
          show: label === false ? false : true,
          position: 'bottom'
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
      return options
    }
  }
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