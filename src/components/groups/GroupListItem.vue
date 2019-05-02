<template>
  <v-list-tile @click="goToShow">
    <v-list-tile-content>
      <v-list-tile-title v-text="group.name" />
    </v-list-tile-content>

    <v-list-tile-action>
      <v-btn
        icon
        ripple
        @click.stop="deleteGroup"
      >
        <v-icon color="grey">delete</v-icon>
      </v-btn>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
import {groupRepository} from '@/services/database/repositories';

export default {
  props: {
    group: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteGroup() {
      this.$emit('delete-group', this.group);
    },
    goToShow() {
      this.$router.push({name: 'groups-show', params: {id: this.group.id}});
    }
  }
}
</script>
