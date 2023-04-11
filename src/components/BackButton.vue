<template>
  <button class="back-button" @click="$emit('back')"></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BackButton',
  emits: ['back']
})
</script>

<style scoped lang="scss">
.back-button {
  position: absolute;
  top: 50%;
  left: 20px;
  width: 16px;
  height: 16px;
  transform: translateY(-50%) rotate(45deg);
  background-color: transparent;
  border: 3px solid;
  border-top: none;
  border-right: none;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
}
</style>
