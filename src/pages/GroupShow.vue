<template>
  <div>
    <app-loading v-if="loading" />

    <div v-else>
      <div v-if="group">
        <h2
          v-if="!editing"
          class="headline"
        >
          {{group.name}}
          <v-icon @click="toggleEditing">edit</v-icon>
        </h2>

        <group-form
          v-else
          :initial-value="group"
          :input-props="{appendIcon: 'clear'}"
          :input-listeners="{'click:append': toggleEditing}"
          @save-group="editGroup"
        />

        <div class="text-xs-right">
          <v-btn
            color="error"
            small
            @click="openDeleteDialog"
          >
            <v-icon>delete</v-icon>
            Delete
          </v-btn>
        </div>

        <task-index :id-list="group.id" />
      </div>

      <div v-else>
        Group not found :(
      </div>
    </div>

    <group-delete-dialog
      v-if="showDeleteDialog"
      :group="group"
      @cancel="hideDeleteDialog"
      @delete="deleteGroup"
    />
  </div>
</template>

<script>
import API from '@/services/api';
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
      loading: true,
      group: null,
      showDeleteDialog: false,
      editing: false,
    };
  },
  created() {
    this.loadGroup();
  },
  methods: {
    async loadGroup() {
      const groupId = this.$route.params.id;
      const group = await API.groups.show(groupId);

      this.group = group;
      this.loading = false;
    },
    async deleteGroup() {
      await API.groups.destroy(this.group.id);
      this.$router.push({name: 'groups-index'});
    },
    async editGroup(attributes) {
      const group = {
        ...this.group,
        ...attributes,
      };

      this.group = await API.groups.update(this.group.id, group);
      this.toggleEditing();
    },
    openDeleteDialog() {
      this.showDeleteDialog = true;
    },
    hideDeleteDialog() {
      this.showDeleteDialog = false;
    },
    toggleEditing() {
      this.editing = !this.editing;
    }
  }
}
</script>