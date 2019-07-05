<template>
  <form @submit.prevent="handleSubmit">
    <v-text-field
      v-model="group.name"
      name="name"
      append-outer-icon="send"
      placeholder="Name..."
      box
      @click:append-outer="handleSubmit"
      v-bind="inputProps"
      v-on="inputListeners"
    />
  </form>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  props: {
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
      group: {},
    };
  },
  computed: mapGetters({initialValue: 'group'}),
  beforeMount() {
    this.group = {...this.initialValue};
  },
  methods: {
    ...mapActions(['editGroup']),
    async handleSubmit() {
      this.editGroup(this.group);
    }
  }
}
</script>
