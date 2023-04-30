<template>
  <div v-if="battleStatus !== 'playing' && battleStatus !== 'finished'" class="messageBox">
    <div v-if="battleStatus === 'waiting'" class="waiting">相手のプレイヤーを待っています</div>
    <div v-if="battleStatus === 'starting'" class="starting">対戦を開始します</div>
  </div>
</template>

<style lang="scss" scoped>
.messageBox {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 5%;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  .waiting {
    &::after {
      content: '';
      animation: ellipsis 1.25s infinite;
    }
  }
  @keyframes ellipsis {
    0% {
      content: '';
    }
    25% {
      content: '.';
    }
    50% {
      content: '..';
    }
    75% {
      content: '...';
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import type { OnlineState } from '@/store/online/types'

export default defineComponent({
  name: 'OnlineStatusMessage',
  computed: {
    battleStatus(): OnlineState['battleStatus'] {
      return this.$store.getters['online/getBattleStatus']
    }
  }
})
</script>
