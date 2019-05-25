<template>
  <div>
    <h1>Login</h1>

    <form
      @submit.prevent="login"
      data-test="login-form"
    >
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
export default {
  data() {
    return {
      data: {
        key: '',
        token: ''
      }
    }
  },
  created() {
  },
  methods: {
    login() {
      const {key, token} = this.data;

      localStorage.setItem('key', key);
      localStorage.setItem('token', token);

      this.$router.push({name: 'groups-index'});
    }
  }
}
</script>