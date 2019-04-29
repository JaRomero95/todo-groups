<template>
  <div>
    <div>
      <v-btn
        :to="{name: 'groups-create'}"
        color="primary"
        fab
        fixed
        right
        bottom
      >
        <v-icon>add</v-icon>
      </v-btn>
    </div>

    <app-loading v-if="loading" />

    <div v-else>
      <div v-if="hasGroups">
        <v-list class="pa-0">
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
