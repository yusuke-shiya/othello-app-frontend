<template>
  <div id="app">
    <Messages />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Messages from './components/Messages.vue'

export default defineComponent({
  components: {
    Messages
  }
})
</script>
