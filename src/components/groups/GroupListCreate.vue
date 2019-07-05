<template>
  <app-name-form
    v-model="group.name"
    name="name"
    placeholder="New group..."
    @submit="handleCreateGroup"
  />
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  data() {
    return {
      group: {
        name: '',
      }
    };
  },
  computed: mapGetters(['boardId']),
  methods: {
    ...mapActions(['createGroup']),
    async handleCreateGroup() {
      this.createGroup({boardId: this.boardId, ...this.group});
      this.resetGroup();
    },
    resetGroup() {
      this.group.name = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.row-icon {
  background-color: #eee;
  height: 40px;
  display: flex;

  input:not(:focus) + button {
    i {
      color: #888 !important;
    }
  }
  
  input {
    width: 100%;
    padding: 5px 10px;
    outline: none;
  }

  button {
    margin-right: 8px;
    outline: none;
  }
}
</style>

