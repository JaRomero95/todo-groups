<template>
  <div>
    <task-list-create />
    <v-list class="pa-0">
      <task-list-item
        v-for="task in tasks"
        :key="task.id"
        :initial-value="task"
        @delete-task="$emit('delete-task', $event)"
        data-test="task-list-item"
      />
    </v-list>

    <div v-if="!hasTasks">
      Add tasks...
    </div>
  </div>
</template>

<script>
import TaskListCreate from '@/components/tasks/TaskListCreate.vue';
import TaskListItem from '@/components/tasks/TaskListItem.vue';

export default {
  components: {
    TaskListCreate,
    TaskListItem,
  },
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  computed: {
    hasTasks() {
      return !!this.tasks.length;
    }
  }
}
</script>
