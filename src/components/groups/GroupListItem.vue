<template>
  <v-list-tile @click="goToShow">
    <v-list-tile-content>
      <v-list-tile-title v-text="group.name" />
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  props: {
    group: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToShow() {
      this.$router.push({name: 'groups-show', params: {id: this.group.id}});
    }
  }
}
</script>
