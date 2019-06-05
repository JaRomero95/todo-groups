<template>
  <v-list-tile>
    <v-list-tile-content>
      <form @submit.prevent="createTask">
        <v-text-field
          v-model="task.name"
          append-outer-icon="send"
          placeholder="New task..."
          name="name"
          box
          @click:append-outer="createTask"
        />
      </form>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  data() {
    return {
      task: {
        name: '',
      }
    };
  },
  methods: {
    async createTask() {
      this.$emit('create-task', this.task);
      this.task = {};
    }
  }
}
</script>
