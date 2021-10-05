<template>
  <v-card>
    <v-card-title>
      {{ title }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Поиск сделок"
        placeholder="Поиск сделок"
        single-line
      ></v-text-field>
    </v-card-title>
    <table-rows
      :searchData="search"
    />
  </v-card>
</template>

<script>
import TableRows from './TableRows.vue';

export default {
  name: 'TableField',
  components: {
    TableRows
  },
  data() {
    return {
      search: '',
      title: 'Тестовое задание'
    }
  }
}
</script>