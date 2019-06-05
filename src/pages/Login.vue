<template>
  <div>
    <h1>Login</h1>

    <form
      @submit.prevent="login"
      data-test="login-form"
    >
      <v-alert
        :value="errors.login"
        type="error"
      >
        {{ errors.login }}
      </v-alert>

      <p>
        <a target="_blank" href="https://trello.com/app-key">Get API Token</a>
        <br/>
        <v-text-field
          name="api-key"
          v-model="data.key"
          placeholder="API Token"
          required
        />
      </p>

      <p>
        <a
          target="_blank"
          href="https://trello.com/1/authorize?expiration=1day&scope=read,write&response_type=token&name=Server%20Token&key=b41d3f3db4a9917457824f555a5de85a">
          Get OAuth token
        </a>
        <br/>
        <v-text-field
          name="oauth-token"
          v-model="data.token"
          placeholder="OAuth Token"
          required
        />
      </p>

      <v-btn
        type="submit"
        color="primary"
      >
        Submit
      </v-btn>
    </form>
  </div>
</template>

<script>
import API from '@/services/api';

export default {
  data() {
    return {
      data: {
        key: '',
        token: ''
      },
      errors: {}
    }
  },
  created() {
    const key = localStorage.getItem('key');
    const token = localStorage.getItem('token');

    if (key && token) {
      this.$router.push({name: 'groups-index'});
    }
  },
  methods: {
    // TODO: refactor required
    async login() {
      const {key, token} = this.data;

      localStorage.setItem('key', key);
      localStorage.setItem('token', token);

      try {
        await API.profile.show(); // only test auth, does not do anything with the profile

        this.$router.push({name: 'groups-index'});
      } catch(error) {
        this.errors = {login: 'Invalid credentials'};

        localStorage.removeItem('key');
        localStorage.removeItem('token');
      }
    },
  }
}
</script>