<template>
  <AppHeader />
  <main>
    <OnlineStatusMessage />
    <OthelloBoard />
    <ResultDialog />
    <TurnIndicator />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import OthelloBoard from '@/components/OthelloBoard.vue'
import ResultDialog from '@/components/ResultDialog.vue'
import TurnIndicator from '@/components/TurnIndicator.vue'
import OnlineStatusMessage from '@/components/OnlineStatusMessage.vue'

export default defineComponent({
  components: {
    AppHeader,
    TurnIndicator,
    OthelloBoard,
    ResultDialog,
    OnlineStatusMessage
  },
  created() {
    this.$store.dispatch('othello/initialize')
  },
  computed: {
    score(): { black: number; white: number } {
      return this.$store.getters['othello/getScore']
    }
  }
})
</script>
