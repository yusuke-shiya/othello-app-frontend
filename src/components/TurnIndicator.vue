<template>
  <div class="turn-indicator">
    <span :class="currentPlayer === 'black' ? 'current-player' : ''">● </span>
    <span :class="currentPlayer === 'white' ? 'current-player' : ''">○ </span>
  </div>
</template>

<style lang="scss" scoped>
.turn-indicator {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.8vw;
  span {
    margin-right: 8px;
    &.current-player {
      border-bottom: 2px solid #000;
    }
  }
  .score {
    margin-left: 4px;
    font-size: 16px;
  }
}
</style>
<script lang="ts">
import { defineComponent } from 'vue'
import type { OthelloState, PlayerColor } from '@/store/othello/types'
export default defineComponent({
  name: 'ScoreBoard',
  computed: {
    score(): OthelloState['score'] {
      return this.$store.getters['othello/getScore']
    },
    currentPlayer(): PlayerColor {
      return this.$store.getters['othello/getCurrentPlayer']
    }
  }
})
</script>
