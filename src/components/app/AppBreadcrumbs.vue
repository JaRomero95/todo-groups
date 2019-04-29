<template>
  <v-breadcrumbs
    v-if="breadcrumbs"
    :items="breadcrumbs"
  >
    <template v-slot:item="props">
      <component
        :is="componentName(props.item)"
        :to="props.item.to"
      >
        {{ props.item.text }}
      </component>
    </template>
    <template v-slot:divider>
      <v-icon>forward</v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      return this.$route.meta.breadcrumbs;
    },
  },
  methods: {
    componentName(item) {
      return item.to ? 'router-link' : 'span';
    }
  },
}
</script>
