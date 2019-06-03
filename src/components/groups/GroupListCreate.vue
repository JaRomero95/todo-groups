<template>
  <v-list-tile>
    <v-list-tile-content>
      <form @submit.prevent="createGroup">
        <v-text-field
          v-model="group.name"
          append-outer-icon="send"
          placeholder="New group..."
          name="name"
          box
          @click:append-outer="createGroup"
        />
      </form>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
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
      this.$emit('create-group', this.group);
      this.group = {};
    }
  }
}
</script>
