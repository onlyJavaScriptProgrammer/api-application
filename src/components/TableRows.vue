<template>
  <div class="wrapper">
      <v-data-table
    :search="searchData"
    :headers="headers"
    :items="query"
    hide-default-footer
  >
    <template v-slot:[`item.admin`]="{ item }">
      <v-icon>
        mdi-account
      </v-icon>
      {{ item.admin }}
    </template>
    <template v-slot:[`item.status`]="{ item }">
      <v-chip
        :color="getStatus(item.status)"
        text-color="white"
      >
      {{ item.status }}
      </v-chip>
    </template>
    <template v-slot:[`item.showInfo`]="{ item }">
      <v-btn
        class="ma-2"
        outlined
        color="primary"
      >
        {{ item.showInfo }}
      </v-btn>
    </template>
  </v-data-table>
  <table-details-info />
  </div>
</template>

<script>
import TableDetailsInfo from './TableDetailsInfo.vue';

export default {
  name: 'TableRows',
  components: {
    TableDetailsInfo
  },
  data() {
    return {
      headers: [
        {
          text: 'Название',
          sortable: false,
          value: 'name',
          align: 'start'
        },
        {text: 'Статус', value: 'status'},
        {text: 'Ответственный', value: 'admin'},
        {text: 'Дата создания', value: 'dataOfCreate'},
        {text: 'Бюджет', value: 'budget'},
        {
          text: 'Детальная информация',
          value: 'showInfo',
          align: 'end',
          sortable: false
        }
      ],
      query: [
        {
        name: 'Запрос тарифов',
        status: 'Переговоры',
        admin: 'Иван Фокин',
        dataOfCreate: '9 февраля 2021',
        budget: '14000 ₽',
        showInfo: 'Показать'
        },
        {
        name: 'Рекламная продукция',
        status: 'Первичный контакт',
        admin: 'Иван Фокин',
        dataOfCreate: '9 февраля 2021',
        budget: '14000 ₽',
        showInfo: 'Показать'
        },
        {
        name: 'Запрос тарифов',
        status: 'Первичный контакт',
        admin: 'Иван Фокин',
        dataOfCreate: '9 февраля 2021',
        budget: '14000 ₽',
        showInfo: 'Показать'
        },
        {
        name: 'Запрос тарифов',
        status: 'Принятие решения',
        admin: 'Иван Фокин',
        dataOfCreate: '9 февраля 2021',
        budget: '14000 ₽',
        showInfo: 'Показать'
        },
        {
        name: 'Запрос тарифов',
        status: 'Сделка состоялась',
        admin: 'Иван Фокин',
        dataOfCreate: '9 февраля 2021',
        budget: '14000 ₽',
        showInfo: 'Показать'
        },
      ],
      processing: {
        start: 'Первичный контакт',
        talk: 'Переговоры',
        accept: 'Принятие решения',
        success: 'Сделка состоялась',
        error: 'Сделка отменена'
      }
    }
  },
  methods: {
    getStatus(status) {
      switch(status) {
        case this.processing.start:
          return '#2196F3';
        case this.processing.talk:
          return '#FFEB3B';
        case this.processing.accept:
          return '#FF9800';
        case this.processing.success:
          return '#4CAF50';
        case this.processing.error:
          return '#F44336';
      }
    }
  },
  props: ['searchData']
}
</script>