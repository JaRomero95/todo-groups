<template>
  <v-list-tile>
    <v-list-tile-action>
      <v-checkbox
        v-model="task.dueComplete"
        @change="updateComplete"
      />
    </v-list-tile-action>

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
import API from '@/services/api';

export default {
  props: {
    initialValue: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      task: {...this.initialValue},
    };
  },
  methods: {
    deleteTask() {
      this.$emit('delete-task', this.task);
    },
    updateComplete(newValue) {
      if (newValue) {
        this.markAsComplete();
      } else {
        this.markAsIncomplete();
      }
    },
    markAsComplete() {
      const now = new Date();
      this.updateTask({due: now.toISOString(), dueComplete: true});
    },
    markAsIncomplete() {
      this.updateTask({due: '', dueComplete: false});
    },
    async updateTask(params) {
      // FIXME: emit instead save here
      const task = await API.tasks.update(this.task.id, params);
    }
  }
}
</script>
