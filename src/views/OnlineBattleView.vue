<template>
  <AppHeader />
  <main>
    <OnlineStatusMessage />
    <OthelloBoard @stonePlaced="handleStonePlaced" />
    <ResultDialog />
    <TurnIndicator />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { OnlineState } from '@/store/online/types'
import { consumer } from '@/actioncable'
import type { Channel } from 'actioncable'
import AppHeader from '@/components/AppHeader.vue'
import OthelloBoard from '@/components/OthelloBoard.vue'
import ResultDialog from '@/components/ResultDialog.vue'
import TurnIndicator from '@/components/TurnIndicator.vue'
import OnlineStatusMessage from '@/components/OnlineStatusMessage.vue'
import type { OthelloState } from '@/store/othello/types'

interface ReceivedData extends OnlineState {
  othello: Partial<OthelloState>
}

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
      othelloChannel: null as Channel | null
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
          received: (data: ReceivedData) => {
            // 受信したデータを処理
            console.log('Received data:', data)
            this.handleReceivedData(data)
          }
        }
      )
    },
    handleReceivedData(data: ReceivedData) {
      // 自分の色をセット
      if (data.myColor) {
        this.$store.commit('online/setMyColor', data.myColor)
      }
      // battleStatusを更新
      if (data.battleStatus) {
        this.$store.commit('online/setBattleStatus', data.battleStatus)
      }
      // オセロの状態を更新
      if (!data.othello) return
      const othelloData = data.othello
      // boardを更新
      if (othelloData.board) {
        this.$store.commit('othello/setBoard', othelloData.board)
      }
      // currentPlayerを更新
      if (othelloData.currentPlayer) {
        this.$store.commit('othello/setCurrentPlayer', othelloData.currentPlayer)
      }
      // scoreを更新
      if (othelloData.score) {
        this.$store.commit('othello/setScore', othelloData.score)
      }
      // isGameOverを更新
      if (othelloData.isGameOver) {
        this.$store.commit('othello/setIsGameOver', othelloData.isGameOver)
      }
    },
    handleStonePlaced() {
      if (!this.othelloChannel) return
      this.othelloChannel.send({
        board: this.$store.getters['othello/getBoard'],
        currentPlayer: this.$store.getters['othello/getCurrentPlayer'],
        score: this.$store.getters['othello/getScore'],
        isGameOver: this.$store.getters['othello/getIsGameOver']
      })
    }
  }
})
</script>
