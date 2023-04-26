<template>
  <div class="score-board">
    <span>● {{ score.black }}</span>
    <span>○ {{ score.white }}</span>
  </div>
</template>

<style lang="scss" scoped>
.score-board {
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1.8vw;
  span:not(:last-child) {
    margin-right: 40px;
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
