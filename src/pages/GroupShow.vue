<template>
  <div>
    <app-loading v-if="loadingGroup" />

    <div v-else>
      <div v-if="group">
        <h2
          v-if="!editing"
          class="headline"
          data-test="group-title"
        >
          {{group.name}}
          <v-icon
            @click="enableEdit"
            data-test="group-edit"
          >
            edit
          </v-icon>
        </h2>

        <group-form
          v-else
          :input-props="{appendIcon: 'clear'}"
          :input-listeners="{'click:append': disableEdit}"
          data-test="group-edit-form"
        />

        <div class="text-xs-right">
          <v-btn
            color="info"
            small
            @click="markAllTasksAsIncomplete"
            data-test="mark-all-tasks-as-incomplete"
          >
            <v-icon>check_box_outline_blank</v-icon>
            Uncheck all tasks
          </v-btn>

          <v-btn
            color="error"
            small
            @click="openDeleteDialog"
            data-test="open-delete-dialog"
          >
            <v-icon>delete</v-icon>
            Delete
          </v-btn>
        </div>

        <task-index
          v-if="group"
          :id-list="group.id"
          :tasks="tasks"
        />
      </div>

      <div v-else>
        Group not found :(
      </div>
    </div>

    <group-delete-dialog
      v-if="showDeleteDialog"
      :group="group"
      @cancel="hideDeleteDialog"
      @delete="handleDeleteGroup"
    />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import GroupDeleteDialog from '@/components/groups/GroupDeleteDialog.vue';
import GroupForm from '@/components/groups/GroupForm.vue';
import TaskIndex from '@/components/tasks/TaskIndex.vue';

export default {
  components: {
    GroupDeleteDialog,
    GroupForm,
    TaskIndex,
  },
  data() {
    return {
      showDeleteDialog: false,
      editing: false,
    };
  },
  computed: {
    ...mapGetters(['group', 'loadingGroup']),
    tasks() {
      return this.group && this.group.cards;
    },
  },
  created() {
    this.loadGroup(this.$route.params.id);
  },
  watch: {
    group() {
      this.disableEdit();
    }
  },
  methods: {
    ...mapActions(['loadGroup', 'deleteGroup', 'markTaskAsIncomplete']),
    async handleDeleteGroup() {
      await this.deleteGroup(this.group.id);
      this.$router.push({name: 'groups-index'});
    },
    markAllTasksAsIncomplete() {
      this.tasks.forEach(({id}) => this.markTaskAsIncomplete(id));
    },
    openDeleteDialog() {
      this.showDeleteDialog = true;
    },
    hideDeleteDialog() {
      this.showDeleteDialog = false;
    },
    enableEdit() {
      this.editing = true;
    },
    disableEdit() {
      this.editing = false;
    }
  }
}
</script>