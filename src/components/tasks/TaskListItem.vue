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
      <v-btn
        icon
        data-test="open-task-delete-dialog"
      >
        <v-icon>delete</v-icon>
      </v-btn>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
import {mapActions} from 'vuex';

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
  watch: {
    task() {
      this.task = {...this.initialValue};
    }
  },
  methods: {
    ...mapActions(['updateTask']),
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
      this.handleUpdateTask({due: now.toISOString(), dueComplete: true});
    },
    markAsIncomplete() {
      this.handleUpdateTask({due: '', dueComplete: false});
    },
    async handleUpdateTask(params) {
      const payload = {id: this.task.id, ...params};
      this.updateTask(payload);
    }
  }
}
</script>
