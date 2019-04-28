<template>
  <div>
    <h1>Groups create</h1>

    <div>
      <router-link :to="{name: 'groups-list'}">
        Back
      </router-link>
    </div>

    <form @submit.prevent="createGroup">
      <div>
        <label for="name">Name</label>
        <input
          v-model="group.name"
          type="text"
          id="name"
          placeholder="name"
          required
        />
      </div>

      <button type="submit">
        Create
      </button>
    </form>
  </div>
</template>

<script>
import {groupRepository} from '@/services/database/repositories';

export default {
  data() {
    return {
      group: {
        name: '',
      },
    };
  },
  methods: {
    async createGroup() {
      const group = await groupRepository.create(this.group);
      this.$router.push({name: 'groups-show', params: {id: group.id}});
    }
  }
}
</script>