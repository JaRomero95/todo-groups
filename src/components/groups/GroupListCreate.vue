<template>
  <v-list-tile>
    <v-list-tile-content>
      <form @submit.prevent="createGroup">
        <v-text-field
          v-model="group.name"
          append-outer-icon="send"
          placeholder="New group..."
          box
          @click:append-outer="createGroup"
        />
      </form>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
import {groupRepository} from '@/services/database/repositories';

export default {
  data() {
    return {
      group: {
        name: '',
      }
    };
  },
  methods: {
    async createGroup() {
      const group = await groupRepository.create(this.group);
      this.$emit('group', group);
      this.group = {};
    }
  }
}
</script>
