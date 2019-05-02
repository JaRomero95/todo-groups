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
import {groupRepository} from '@/services/database/repositories';
import GroupDeleteDialog from '@/components/groups/GroupDeleteDialog.vue';
import GroupForm from '@/components/groups/GroupForm.vue';

export default {
  components: {
    GroupDeleteDialog,
    GroupForm,
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
      const groupId = parseInt(this.$route.params.id, 10);
      const group = await groupRepository.find(groupId);

      this.group = group;
      this.loading = false;
    },
    async deleteGroup() {
      await groupRepository.remove(this.group.id);
      this.$router.push({name: 'groups-index'});
    },
    async editGroup(attributes) {
      const group = {
        ...this.group,
        ...attributes,
      };

      this.group = await groupRepository.update(group);
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