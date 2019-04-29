<template>
  <transition name="fade">
    <div class="loading-container">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      />
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
