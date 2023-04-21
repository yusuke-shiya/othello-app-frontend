<template>
  <AppHeader />
  <main>
    <TurnIndicator />
    <ScoreBoard />
    <OthelloBoard />
    <ResultDialog />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'
import AppHeader from '@/components/AppHeader.vue'
import TurnIndicator from '@/components/TurnIndicator.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import OthelloBoard from '@/components/OthelloBoard.vue'
import ResultDialog from '@/components/ResultDialog.vue'

export default defineComponent({
  components: {
    AppHeader,
    TurnIndicator,
    ScoreBoard,
    OthelloBoard,
    ResultDialog
  },
  created() {
    this.initializeBoard()
  },
  methods: {
    ...mapMutations('othello', ['initializeBoard'])
  }
})
</script>
