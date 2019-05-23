<template>
  <task-list
    :tasks="sortedTasks"
    @create-task="createTask"
  />
</template>

<script>
import TaskList from '@/components/tasks/TaskList.vue';
import API from '@/services/api';

const MAX_POSITION = 10000;

export default {
  props: {
    idList: {
      type: String,
      required: true
    }
  },
  components: {
    TaskList,
  },
  data() {
    return {
      tasks: []
    };
  },
  created() {
    this.loadTasks();
  },
  computed: {
    sortedTasks() {
      return this.tasks.sort(this.comparePos);
    },
    slowerPos() {
      if (this.tasks.length) {
        const positions = this.tasks.map(l => l.pos);
        return Math.min(...positions);
      }

      return MAX_POSITION;
    },
    nextPosition() {
      return this.slowerPos - 1;
    }
  },
  methods: {
    async loadTasks() {
      this.tasks = await API.tasks.index(this.idList);
    },
    async createTask({name}) {
      const task = await API.tasks.create(this.idList, {name, pos: this.nextPosition});
      this.tasks.push(task);
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
