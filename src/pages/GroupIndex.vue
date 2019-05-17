<template>
  <div>
    <app-loading v-if="loading" />

    <group-list
      v-else
      :groups="sortedGroups"
      @create-group="createGroup"
    />
  </div>
</template>

<script>
import GroupList from '@/components/groups/GroupList.vue';
import API from '@/services/api';

const MAX_POSITION = 10000;

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
    sortedGroups() {
      return this.groups.sort(this.comparePos);
    },
    slowerPos() {
      if (this.groups.length) {
        const positions = this.groups.map(l => l.pos);
        return Math.min(...positions);
      }

      return MAX_POSITION;
    },
    nextGroupPosition() {
      return this.slowerPos - 1;
    }
  },
  methods: {
    async loadGroups() {
      const board = await API.board.show();

      const idBoard = board.id;
      this.idBoard = idBoard;
      const groups = await API.groups.index(idBoard);

      this.groups = groups;
      this.loading = false;
    },
    async createGroup({name}) {
      const group = await API.groups.create(this.idBoard, {name, pos: this.nextGroupPosition});
      this.groups.push(group);
    },
    comparePos({pos: posA}, {pos: posB}) {
      if (posA < posB) {
        return -1;
      } else if (posB < posA) {
        return 1;
      }

      return 0;
    }
  }
}
</script>
