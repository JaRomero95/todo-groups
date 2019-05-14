<template>
  <div>
    <app-loading v-if="loading" />

    <group-list
      v-else
      :groups="lists"
      @create-group="createGroup"
    />
  </div>
</template>

<script>
import GroupList from '@/components/groups/GroupList.vue';
import API from '@/services/api';

export default {
  components: {
    GroupList,
  },
  data() {
    return {
      groups: [],
      idBoard: null,
      loading: true
    };
  },
  created() {
    this.loadGroups();
  },
  computed: {
    lists() {
      return this.groups.sort(this.compareName);
    }
  },
  methods: {
    async loadGroups() {
      const board = await API.board.show();

      const idBoard = board.id;
      this.idBoard = idBoard;
      const lists = await API.lists.index(idBoard);

      this.groups = lists;
      this.loading = false;
    },
    async createGroup({name}) {
      const group = await API.lists.create(this.idBoard, name);
      this.groups.push(group);
    },
    compareName({name: nameA}, {name: nameB}) {
      if (nameA < nameB) {
        return -1;
      } else if (nameB < nameA) {
        return 1;
      }

      return 0;
    }
  }
}
</script>
