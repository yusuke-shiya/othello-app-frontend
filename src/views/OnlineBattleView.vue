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
import { consumer } from '@/actioncable'
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
  },
  data() {
    return {
      othelloChannel: null
    }
  },
  mounted() {
    this.connectToOthelloChannel()
  },
  methods: {
    connectToOthelloChannel() {
      const battleRoomId = this.$route.params.battleRoomId
      this.othelloChannel = consumer.subscriptions.create(
        { channel: 'BattleRoomChannel', room_id: battleRoomId },
        {
          connected: () => {
            console.log('Connected to OthelloChannel')
          },
          disconnected: () => {
            console.log('Disconnected from OthelloChannel')
          },
          received: (data: Object) => {
            // 受信したデータを処理
            console.log('Received data:', data)
          }
        }
      )
    }
  }
})
</script>
