<template>
  <div>
    <h1>Messages</h1>
    <ul>
      <li v-for="message in messages" :key="message.id">{{ message.content }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import MessagesApi from '../api/messages'

export default defineComponent({
  setup() {
    const messages = ref([])

    onMounted(async () => {
      const response = await MessagesApi.getMessages()
      console.log('response', response)
      messages.value = response.data.data
    })

    return {
      messages
    }
  }
})
</script>
