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
    }
  },
  methods: {
    handleCellClicked({ row, column }: { row: number; column: number }) {
      // オンライン対戦中（myColorが定義されている）だったら、相手のターンの時は石を置けないようにする
      if (
        this.$store.getters['online/getMyColor'] &&
        this.$store.getters['online/getMyColor'] !== this.$store.getters['othello/getCurrentPlayer']
      ) {
        return
      }

      this.$store.dispatch('othello/putStone', { row, column })
      // Rails側に石が置かれた情報を送信
      this.$emit('stonePlaced', this.board)
    }
  }
})
</script>
