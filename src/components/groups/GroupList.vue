<template>
  <div data-test="group-list">
    <v-list class="pa-0">
      <group-list-create
        @create-group="$emit('create-group', $event)"
      />
      <group-list-item
        v-for="group in groups"
        :key="group.id"
        :group="group"
        @delete-group="$emit('delete-group', $event)"
        data-test="group-list-item"
      />
    </v-list>

    <div v-if="!hasGroups">
      Create your first group...
    </div>
  </div>
</template>

<script>
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
  }
}
</script>
