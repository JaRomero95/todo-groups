<template>
  <div>
    <app-loading v-if="loading" />

    <group-list
      v-else
      :groups="groups"
      @create-group="createGroup"
      @delete-group="openDeleteDialog"
    />

    <group-delete-dialog
      v-if="showDeleteDialog"
      :group="groupToDelete"
      @cancel="hideDeleteDialog"
      @delete="deleteGroup"
    />
  </div>
</template>

<script>
import {groupRepository} from '@/services/database/repositories';
import GroupList from '@/components/groups/GroupList.vue';
import GroupDeleteDialog from '@/components/groups/GroupDeleteDialog.vue';

export default {
  components: {
    GroupList,
    GroupDeleteDialog,
  },
  data() {
    return {
      groups: [],
      loading: true,
      groupToDelete: null
    };
  },
  created() {
    this.loadGroups();
  },
  computed: {
    showDeleteDialog() {
      return !!this.groupToDelete;
    }
  },
  methods: {
    async loadGroups() {
      this.groups = await groupRepository.getAll();
      this.loading = false;
    },
    async createGroup(attributes) {
      const group = await groupRepository.create(attributes);
      this.groups.push(group);
    },
    async deleteGroup() {
      const id = this.groupToDelete.id;
      await groupRepository.remove(id);
      this.groups = this.groups.filter(group => group.id !== id);
      this.hideDeleteDialog();
    },
    async openDeleteDialog(group) {
      this.groupToDelete = group;
    },
    async hideDeleteDialog() {
      this.groupToDelete = null;
    },
  }
}
</script>
