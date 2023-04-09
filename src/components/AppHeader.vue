<template>
  <header class="app-header">
    <h1 class="title">OthelloT</h1>
  </header>
</template>

<script lang="ts">
export default {
  name: 'AppHeader'
}
</script>

<style scoped lang="scss">
.app-header {
  color: #333;
  text-align: center;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  .title {
    font-family: 'Oswald', sans-serif;
    letter-spacing: 2px;
  }
}
</style>
