<template>
  <v-list-tile :to="{name: 'groups-show', params: {id: group.id}}">
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
  }
}
</script>
