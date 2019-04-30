<template>
  <div>
    <app-loading v-if="loading" />

    <div v-else>
      <div v-if="hasGroups">
        <v-list class="pa-0">
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
          <template v-for="group in groups">
            <div :key="group.id">
              <v-list-tile :to="{name: 'groups-show', params: {id: group.id}}">
                <v-list-tile-content>
                  <v-list-tile-title v-text="group.name" />
                </v-list-tile-content>
              </v-list-tile>

              <v-divider />
            </div>
          </template>
        </v-list>
      </div>
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
      group: {
        name: '',
      }
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
    },
    async createGroup() {
      const group = await groupRepository.create(this.group);
      this.groups.push(group);
      this.group = {};
    }
  }
}
</script>
