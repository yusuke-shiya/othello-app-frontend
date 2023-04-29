<template>
  <nav class="navigation">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link class="nav-link" to="/offline-battle">オフラインでプレイ</router-link>
      </li>
      <li class="nav-item">
        <button class="nav-link" @click="startOnlineBattle" :disabled="isLoading">
          オンラインでプレイ
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import BattleRoomsApi from '@/api/BattleRoomsApi'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomeNavigation',
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    async startOnlineBattle() {
      this.isLoading = true
      try {
        const { data } = await BattleRoomsApi.create()
        this.$router.push(`/online-battle/${data.id}`)
      } catch (error) {
        console.error('Failed to start online battle:' + error)
      } finally {
        this.isLoading = false
      }
    }
  }
})
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .nav-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .nav-item {
    margin-bottom: 16px;
  }
  .nav-link {
    font-weight: bold;
    border: none;
    background: none;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }
}
</style>
