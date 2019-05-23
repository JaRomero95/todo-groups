<template>
  <v-list-tile>
    <v-list-tile-content>
      <v-list-tile-title v-text="task.name" />
    </v-list-tile-content>

    <v-list-tile-action @click="deleteTask">
      <v-btn icon>
        <v-icon>delete</v-icon>
      </v-btn>
    </v-list-tile-action>
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
    deleteTask() {
      this.$emit('delete-task', this.task);
    }
  }
}
</script>
