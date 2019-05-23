<template>
  <div>
    <v-list class="pa-0">
      <task-list-create
        @create-task="$emit('create-task', $event)"
      />
      <task-list-item
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @delete-task="$emit('delete-task', $event)"
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
