<template>
  <app-name-form
    v-model="task.name"
    name="name"
    placeholder="New task..."
    @submit="handleCreateTask"
  />
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  data() {
    return {
      task: {
        name: '',
      }
    };
  },
  computed: mapGetters(['group']),
  methods: {
    ...mapActions(['createTask']),
    async handleCreateTask() {
      this.createTask({groupId: this.group.id, ...this.task});
      this.resetTask();
    },
    resetTask() {
      this.task.name = '';
    }
  }
}
</script>
