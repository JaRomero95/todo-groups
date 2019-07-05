<template>
  <div>
    <task-list
      :tasks="tasks"
      @delete-task="openDeleteDialog"
    />

    <task-delete-dialog
      v-if="taskToDelete"
      :task="taskToDelete"
      @cancel="hideDeleteDialog"
      @delete="handleDeleteTask"
    />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import TaskList from '@/components/tasks/TaskList.vue';
import TaskDeleteDialog from '@/components/tasks/TaskDeleteDialog.vue';

export default {
  components: {
    TaskList,
    TaskDeleteDialog,
  },
  data() {
    return {
      taskToDelete: null
    };
  },
  computed: mapGetters(['tasks']),
  methods: {
    ...mapActions(['deleteTask']),
    async handleDeleteTask() {
      await this.deleteTask(this.taskToDelete.id);
      this.hideDeleteDialog();
    },
    openDeleteDialog(task) {
      this.taskToDelete = task;
    },
    hideDeleteDialog() {
      this.taskToDelete = null;
    },
  }
}
</script>
