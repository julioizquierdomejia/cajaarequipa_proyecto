<template>
  <div class="main-content">
    <breadcumb :page="'Agencía'" :folder="'Resultados'" />
    <b-row>
      <b-col cols="12">
        <b-table hover :items="items" :fields="fields" bordered head-variant="light">
          <template #thead-top>
            <b-tr>
              <b-th colspan="4">
                <span class="sr-only">Name and ID</span>
              </b-th>
              <b-th colspan="4" class="text-center bg-sky-blue text-white"> NPS </b-th>
              <b-th colspan="5" class="text-center bg-primary text-white">Atributos</b-th>
            </b-tr>
          </template>
          <template #cell(nps.total)="data"> {{ data.item.nps.detractor + data.item.nps.neutral + data.item.nps.promoter }}% </template>
          <template #cell(attributes.ins)="data">
            {{ data.item.attributes.listening + data.item.attributes.kindness + data.item.attributes.advisory }}%
          </template>
        </b-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    fields: [
      { key: 'region', label: 'Region', sortable: true },
      { key: 'code', label: 'Cod Agencia', sortable: true },
      { key: 'name', label: 'Agencia', sortable: true },
      { key: 'quantity', label: 'Q', sortable: true },
      { key: 'nps.promoter', label: 'Promotor', sortable: true, formatter: 'valuePercent', thClass: 'bg-success text-white' },
      { key: 'nps.neutral', label: 'Neutro', sortable: true, formatter: 'valuePercent', thClass: 'bg-warning text-white' },
      { key: 'nps.detractor', label: 'Detractor', sortable: true, formatter: 'valuePercent', thClass: 'bg-danger text-white' },
      { key: 'nps.total', label: 'NPS', sortable: true, formatter: 'valuePercent', thClass: 'bg-sky-blue text-white' },
      { key: 'attributes.listening', label: 'Escucha y Disposición', sortable: true, formatter: 'valuePercent', thClass: 'bg-success text-white' },
      { key: 'attributes.kindness', label: 'Cordialidad y Amabilidad', sortable: true, formatter: 'valuePercent', thClass: 'bg-success text-white' },
      { key: 'attributes.advisory', label: 'Asesoría', sortable: true, formatter: 'valuePercent', thClass: 'bg-success text-white' },
      { key: 'attributes.ins', label: 'INS Agencia', sortable: true, formatter: 'valuePercent', thClass: 'bg-primary text-white' }
    ],
    items: [
      {
        attributes: {
          advisory: 45,
          hygiene: 73,
          kindness: 45,
          listening: 45
        },
        code: '73',
        name: 'Ayaviri',
        quantity: 11,
        nps: {
          detractor: 27,
          neutral: 36,
          promoter: 36
        },
        region: 'Andina'
      },
      {
        attributes: {
          advisory: 45,
          hygiene: 73,
          kindness: 45,
          listening: 45
        },
        code: '73',
        name: 'Ayaviri',
        quantity: 11,
        nps: {
          detractor: 27,
          neutral: 36,
          promoter: 36
        },
        region: 'Andina'
      },
      {
        attributes: {
          advisory: 45,
          hygiene: 73,
          kindness: 45,
          listening: 45
        },
        code: '73',
        name: 'Ayaviri',
        quantity: 11,
        nps: {
          detractor: 27,
          neutral: 36,
          promoter: 36
        },
        region: 'Andina'
      },
      {
        attributes: {
          advisory: 45,
          hygiene: 73,
          kindness: 45,
          listening: 45
        },
        code: '73',
        name: 'Ayaviri',
        quantity: 11,
        nps: {
          detractor: 27,
          neutral: 36,
          promoter: 36
        },
        region: 'Andina'
      },
      {
        attributes: {
          advisory: 45,
          hygiene: 73,
          kindness: 45,
          listening: 45
        },
        code: '73',
        name: 'Ayaviri',
        quantity: 11,
        nps: {
          detractor: 27,
          neutral: 36,
          promoter: 36
        },
        region: 'Andina'
      }
    ]
  }),
  methods: {
    valuePercent(value) {
      return `${value}%`
    }
  }
}
</script>