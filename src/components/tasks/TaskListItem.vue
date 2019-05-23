<template>
  <v-list-tile>
    <v-list-tile-content>
      <v-list-tile-title v-text="task.name" />
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
  }
}
</script>
