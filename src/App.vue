<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <component :is="layout">
          <router-view />
        </component>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AnonymousLayout from '@/layouts/AnonymousLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

export default {
  components: {
    AnonymousLayout,
    AuthLayout
  },
  computed: {
    isAuthRequired() {
      return this.$route.matched.some(route => route.meta.auth);
    },
    layout() {
      return this.isAuthRequired ? AuthLayout : AnonymousLayout;
    }
  }
}
</script>
