<template>
  <nav class="navigation">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link class="nav-link" to="/offline-battle">オフラインでプレイ</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'HomeNavigation'
}
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
  }
}
</style>
