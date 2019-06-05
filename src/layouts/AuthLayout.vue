<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <app-title />

        <logout />

        <app-breadcrumbs />

        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Logout from '@/components/general/Logout.vue';

export default {
  components: {
    Logout
  }
}
</script>
