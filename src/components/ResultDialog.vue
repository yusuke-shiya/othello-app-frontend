<template>
  <div class="result-dialog" v-if="isGameOver">{{ message }}</div>
</template>
<style lang="scss" scoped>
.result-dialog {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 52px;
  font-weight: bold;
  letter-spacing: 2px;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue'
import type { OthelloState } from '@/store/othello/types'
export default defineComponent({
  computed: {
    currentPlayer(): OthelloState['currentPlayer'] {
      return this.$store.getters['othello/getCurrentPlayer']
    },
    isGameOver(): Boolean {
      return this.$store.getters['othello/getIsGameOver']
    },
    message(): String {
      const isGameOver: Boolean = this.$store.getters['othello/getIsGameOver']
      const score: OthelloState['score'] = this.$store.getters['othello/getScore']
      const winner = Math.max(...Object.values(score)) === score.black ? 'black' : 'white'
      if (isGameOver) {
        if (score.black === score.white) {
          return 'Draw!'
        }
        return `${winner} wins!`
      }
      return ''
    }
  }
})
</script>
