<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import HomeNavigation from '@/components/HomeNavigation.vue'
</script>

<template>
  <AppHeader :show-back-button="false" />
  <main>
    <HomeNavigation />
  </main>
</template>
