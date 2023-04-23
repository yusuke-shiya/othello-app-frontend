<template>
  <div class="score-board">
    <span :class="currentPlayer === 'black' ? 'current-player' : ''">● {{ score.black }}</span>
    <span :class="currentPlayer === 'white' ? 'current-player' : ''">○ {{ score.white }}</span>
  </div>
</template>

<style lang="scss" scoped>
.score-board {
  display: flex;
  margin-bottom: 12px;
  span {
    margin-right: 8px;
    &.current-player {
      border-bottom: 2px solid #000;
    }
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
