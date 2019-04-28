<template>
  <div>
    <h1>Groups list</h1>

    <div>
      <router-link :to="{name: 'groups-create'}">
        New
      </router-link>
    </div>

    <div v-if="loading">
      Loading...
    </div>

    <div v-else>
      <ul v-if="hasGroups">
        <li
          v-for="group in groups"
          :key="group.id"
        >
          {{group.name}}
        </li>
      </ul>
      <div v-else>
        No groups
      </div>
    </div>
  </div>
</template>

<script>
import {groupRepository} from '@/services/database/repositories';

export default {
  data() {
    return {
      groups: [],
      loading: true,
    };
  },
  created() {
    this.loadGroups();
  },
  computed: {
    hasGroups() {
      return !!this.groups.length;
    }
  },
  methods: {
    async loadGroups() {
      const groups = await groupRepository.getAll();
      this.groups = groups;
      this.loading = false;
    }
  }
}
</script>