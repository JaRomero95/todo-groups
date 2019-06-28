<template>
  <form @submit.prevent="emitSubmit">
    <div class="row-icon">
      <input
        v-bind="$attrs"
        v-on="inputListeners"
        :value="value"
      />
      <button type="submit">
        <v-icon color="primary" @click:append="emitSubmit">send</v-icon>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
    };
  },
  computed: {
    inputListeners() {
      return {
        ...this.$listeners,
        input: ev => this.$emit('input', ev.target.value)
      }
    }
  },
  methods: {
    emitSubmit() {
      this.$emit('submit');
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

