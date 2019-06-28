<template>
  <app-name-form
    v-model="task.name"
    name="name"
    placeholder="New task..."
    @submit="createTask"
  />
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
      this.task.name = '';
    }
  }
}
</script>
