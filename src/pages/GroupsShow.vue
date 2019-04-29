<template>
  <div>
    <app-loading v-if="loading" />

    <div v-else>
      <div v-if="group">
        <h2 class="headline">
          {{group.name}}
        </h2>
      </div>

      <div v-else>
        Group not found :(
      </div>
    </div>
  </div>
</template>

<script>
import {groupRepository} from '@/services/database/repositories';

export default {
  data() {
    return {
      loading: true,
      group: null,
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
    }
  }
}
</script>