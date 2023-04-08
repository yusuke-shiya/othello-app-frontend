<template>
  <div id="app">
    <Messages />
  </div>
</template>
<style scoped>
@import url(modern-css-reset/dist/reset.min.css);
</style>
<script lang="ts">
import { defineComponent } from 'vue'
import Messages from './components/Messages.vue'

export default defineComponent({
  components: {
    Messages
  }
})
</script>
