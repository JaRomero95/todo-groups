<template>
  <div>
    <task-list
      :tasks="sortedTasks"
      @create-task="createTask"
      @delete-task="openDeleteDialog"
    />

    <task-delete-dialog
      v-if="taskToDelete"
      :task="taskToDelete"
      @cancel="hideDeleteDialog"
      @delete="deleteTask"
    />
  </div>
</template>

<script>
import TaskList from '@/components/tasks/TaskList.vue';
import TaskDeleteDialog from '@/components/tasks/TaskDeleteDialog.vue';
import API from '@/services/api';

const MAX_POSITION = 10000;

export default {
  props: {
    idList: {
      type: String,
      required: true
    },
    tasks: {
      type: Array,
      required: true
    }
  },
  components: {
    TaskList,
    TaskDeleteDialog,
  },
  data() {
    return {
      taskToDelete: null
    };
  },
  computed: {
    sortedTasks() {
      return this.tasks.sort(this.comparePos);
    },
    slowerPos() {
      if (this.tasks.length) {
        const positions = this.tasks.map(l => l.pos);
        return Math.min(...positions);
      }

      return MAX_POSITION;
    },
    nextPosition() {
      return this.slowerPos - 1;
    }
  },
  methods: {
    async createTask({name}) {
      const task = await API.tasks.create(this.idList, {name, pos: this.nextPosition});
      this.tasks.push(task);
    },
    async deleteTask() {
      await API.tasks.destroy(this.taskToDelete.id);
      this.tasks = this.tasks.filter(task => task.id !== this.taskToDelete.id);
      this.hideDeleteDialog();
    },
    openDeleteDialog(task) {
      this.taskToDelete = task;
    },
    hideDeleteDialog() {
      this.taskToDelete = null;
    },
    comparePos({pos: posA}, {pos: posB}) {
      if (posA < posB) {
        return -1;
      } else if (posB < posA) {
        return 1;
      }

      return 0;
    }
  }
}
</script>
