<template>
  <v-list-tile>
    <v-list-tile-action>
      <v-checkbox
        v-model="task.dueComplete"
        @change="updateComplete"
      />
    </v-list-tile-action>

    <v-list-tile-content>
      <v-list-tile-title
        v-text="task.name"
        :class="{'task-done': task.dueComplete}"
        class="task-name"
      />
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
    ...mapActions(['markTaskAsComplete', 'markTaskAsIncomplete']),
    deleteTask() {
      this.$emit('delete-task', this.task);
    },
    updateComplete(newValue) {
      if (newValue) {
        this.markTaskAsComplete(this.task.id);
      } else {
        this.markTaskAsIncomplete(this.task.id);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .task-done {
    text-decoration: line-through;
  }
</style>

