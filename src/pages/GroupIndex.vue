<template>
  <div>
    <app-loading v-if="loading" />

    <group-list
      v-else
      :groups="groups"
      @create-group="createGroup"
    />
  </div>
</template>

<script>
import {groupRepository} from '@/services/database/repositories';
import GroupList from '@/components/groups/GroupList.vue';

export default {
  components: {
    GroupList,
  },
  data() {
    return {
      groups: [],
      loading: true
    };
  },
  created() {
    this.loadGroups();
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
  }
}
</script>
