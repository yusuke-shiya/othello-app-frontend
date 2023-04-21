<template>
  <div class="cell" @click="handleClick">
    <span class="stone">
      {{ cellData === 'black' ? '●' : cellData === 'white' ? '○' : '' }}
    </span>
  </div>
</template>
<style lang="scss" scoped>
.cell {
  position: relative;
  width: calc(100% / 8);
  height: 0;
  padding-top: calc(100% / 8 - 0.5%);
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  &:last-child {
    border-right: none;
  }
  .stone {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 2px));
    font-size: 1.8vw;
  }
}
</style>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { OthelloCell } from '@/store/othello/types'
export default defineComponent({
  name: 'OthelloCellComponent',
  props: {
    row: {
      type: Number,
      required: true
    },
    column: {
      type: Number,
      required: true
    },
    cellData: {
      type: String as PropType<OthelloCell>,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('cellClicked', { row: this.row, column: this.column })
    }
  }
})
</script>
