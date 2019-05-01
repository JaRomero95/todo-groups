<template>
  <div>
    <v-list class="pa-0">
      <group-list-create @group="addGroup" />
      <group-list-item
        v-for="group in groups"
        :key="group.id"
        :group="group"
      />
    </v-list>

    <div v-if="!hasGroups">
      Add groups...
    </div>
  </div>
</template>

<script>
import {groupRepository} from '@/services/database/repositories';
import GroupListCreate from '@/components/groups/GroupListCreate.vue';
import GroupListItem from '@/components/groups/GroupListItem.vue';

export default {
  components: {
    GroupListCreate,
    GroupListItem,
  },
  props: {
    groups: {
      type: Array,
      required: true
    }
  },
  computed: {
    hasGroups() {
      return !!this.groups.length;
    }
  },
  methods: {
    async addGroup(group) {
      this.groups.push(group);
    }
  }
}
</script>
