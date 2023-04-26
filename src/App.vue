<template>
  <router-view />
</template>
<style lang="scss">
body {
  background-color: #787878;
}
#app {
  position: relative;
  max-width: 100%;
  width: 390px;
  margin: 0 auto;
  background-color: #fff;
  height: 100svh;
}
*,
*::before,
*::after {
  vertical-align: middle;
  font-family: 'noto sans jp', sans-serif;
  color: #333;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
}
main {
  height: calc(100svh - 60px);
  padding: 5%;
  overflow-x: hidden;
  overflow-y: scroll;
}
a {
  text-decoration: none;
  &:hover {
    opacity: 0.6;
  }
}
</style>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
