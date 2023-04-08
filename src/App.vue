<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style scoped>
@import url(modern-css-reset/dist/reset.min.css);
</style>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
