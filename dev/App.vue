<script setup lang="ts">
import LineBreak from '../lib/LineBreak.vue'

const text = `どうも、初めまして。田中と申します。本日は簡単に適切な位置で改行を入れる方法を説明したいと思います。`
</script>

<template>
  <div style="width: 500px;">
    <LineBreak :text="text" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
