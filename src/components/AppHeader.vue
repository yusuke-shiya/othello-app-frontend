<template>
  <header class="app-header">
    <BackButton v-if="showBackButton" @back="onBack" />
    <h1 class="title"><img src="@/assets/logo.png" alt="OthelloT" /></h1>
  </header>
</template>
<style lang="scss" scoped>
.app-header {
  position: relative;
  z-index: 2;
  color: #333;
  text-align: center;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  .title {
    font-family: 'Oswald', sans-serif;
    letter-spacing: 2px;
    img {
      height: 38px;
    }
  }
}
</style>
<script lang="ts">
import { defineComponent } from 'vue'
import BackButton from './BackButton.vue'
export default defineComponent({
  name: 'AppHeader',
  components: {
    BackButton
  },
  props: {
    showBackButton: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onBack() {
      this.$router.back()
    }
  }
})
</script>
