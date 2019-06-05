<template>
  <v-btn
    @click="logout"
    data-test="logout"
  >
    Logout
  </v-btn>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('key');
      localStorage.removeItem('token');

      this.$router.push({name: 'login'});
    }
  }
}
</script>