<template>
    <v-card
    class="mx-auto"
    max-width="350"
    v-show="isActiveMoreInformation"
  >
    <v-card-subtitle class="text-overline mb-1">
      Информация
    </v-card-subtitle>
    <v-card-title class="text-h5 mb-1 pt-0">
      Headline 5
    </v-card-title>
    <v-card-text>
      Greyhound divisely hello coldly fonwderfully
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="#F44336"
      >
        Закрыть
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'TableDetailsInfo',
  data() {
    return {
      isActiveMoreInformation: false
    }
  }
}
</script>