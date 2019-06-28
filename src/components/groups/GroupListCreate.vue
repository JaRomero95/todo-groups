<template>
  <app-name-form
    v-model="group.name"
    name="name"
    placeholder="New group..."
    @submit="createGroup"
  />
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
      this.group.name = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.row-icon {
  background-color: #eee;
  // background-color: blue;
  height: 40px;
  display: flex;

  input:not(:focus) + button {
    i {
      color: #888 !important;
    }
  }
  
  input {
    // background: red;
    width: 100%;
    padding: 5px 10px;
    outline: none;
  }

  button {
    // background: green;
    margin-right: 8px;
    outline: none;
  }
}
</style>

