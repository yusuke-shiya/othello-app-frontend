<template>
  <AppHeader />
  <main>
    <OthelloBoard />
    <ResultDialog />
    <TurnIndicator />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'
import AppHeader from '@/components/AppHeader.vue'
import OthelloBoard from '@/components/OthelloBoard.vue'
import ResultDialog from '@/components/ResultDialog.vue'
import TurnIndicator from '@/components/TurnIndicator.vue'

export default defineComponent({
  components: {
    AppHeader,
    TurnIndicator,
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
