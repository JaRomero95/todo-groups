<template>
  <div>
    <app-loading v-if="loadingGroups" />

    <group-list
      v-else
      :groups="groups"
    />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import GroupList from '@/components/groups/GroupList.vue';

export default {
  components: {
    GroupList,
  },
  computed: {
    ...mapGetters(['groups', 'loadingGroups', 'boardId'])
  },
  watch: {
    boardId(boardId) {
      this.loadGroups(boardId);
    }
  },
  created() {
    if (!this.boardId) {
      this.loadBoard();
    }
  },
  methods: mapActions(['loadBoard', 'loadGroups'])
}
</script>
