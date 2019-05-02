<template>
  <div>
    <app-loading v-if="loading" />

    <div v-else>
      <div v-if="group">
        <h2 class="headline">
          {{group.name}}
        </h2>

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

export default {
  components: {
    GroupDeleteDialog,
  },
  data() {
    return {
      loading: true,
      group: null,
      showDeleteDialog: false,
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
    async openDeleteDialog() {
      this.showDeleteDialog = true;
    },
    async hideDeleteDialog() {
      this.showDeleteDialog = false;
    },
  }
}
</script>