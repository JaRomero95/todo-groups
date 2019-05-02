<template>
  <form @submit.prevent="saveGroup">
    <v-text-field
      v-model="group.name"
      append-outer-icon="send"
      placeholder="Name..."
      box
      @click:append-outer="saveGroup"
      v-bind="inputProps"
      v-on="inputListeners"
    />
  </form>
</template>

<script>
export default {
  props: {
    initialValue: {
      type: Object,
      default: () => ({
        name: '',
      })
    },
    inputProps: {
      type: Object,
      default: () => ({})
    },
    inputListeners: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      group: {...this.initialValue},
    };
  },
  methods: {
    async saveGroup() {
      this.$emit('save-group', this.group);
      this.group = {};
    }
  }
}
</script>
