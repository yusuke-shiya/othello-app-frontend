<template>
  <div class="board">
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="row">
      <OthelloCellComponent
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
        :row="rowIndex"
        :column="cellIndex"
        :cellData="cell"
        @cellClicked="handleCellClicked"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.board {
  border: 2px solid #000;
  border-bottom: none;
  margin-bottom: 12px;
  .row {
    display: flex;
  }
}
</style>
<script lang="ts">
import { defineComponent } from 'vue'
import type { OthelloBoard } from '@/store/othello/types'
import OthelloCellComponent from '@/components/OthelloCellComponent.vue'

export default defineComponent({
  components: {
    OthelloCellComponent
  },
  computed: {
    board(): OthelloBoard {
      return this.$store.getters['othello/getBoard']
    },
    isOnlineBattle(): boolean {
      return !!this.$store.getters['online/getMyColor']
    },
    isOpponentTurn(): boolean {
      return (
        this.$store.getters['othello/getCurrentPlayer'] !== this.$store.getters['online/getMyColor']
      )
    }
  },
  methods: {
    handleCellClicked({ row, column }: { row: number; column: number }) {
      // オンライン対戦中で相手のターンだった場合は何もしない
      if (this.isOnlineBattle && this.isOpponentTurn) return
      // オフライン対戦中か、自分のターンだった場合は石を置く
      this.$store.dispatch('othello/putStone', { row, column })
      this.$emit('stonePlaced')
    }
  }
})
</script>
