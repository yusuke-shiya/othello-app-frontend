<template>
  <header class="app-header">
    <BackButton v-if="showBackButton" @back="onBack" />
    <h1 class="title"><img src="@/assets/logo.png" alt="OthelloT" /></h1>
  </header>
</template>
<style lang="scss" scoped>
.title {
  img {
    height: 38px;
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

<style scoped lang="scss">
.app-header {
  position: relative;
  color: #333;
  text-align: center;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  .title {
    font-family: 'Oswald', sans-serif;
    letter-spacing: 2px;
  }
}
</style>
