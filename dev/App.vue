<script setup lang="ts">
import LineBreak from '../lib/LineBreak.vue'

const text = `
どうも、初めまして。本日は簡単に適切な位置で改行を入れる方法を説明したいと思います。
基本的にはApp.use(LineBreak)で有効化した後に、'v-line-break'を自動改行を入れたいタグにつけるだけです。
`
</script>

<template>
  <div class="case">
    <h2>Component</h2>
    <LineBreak :text="text" />
  </div>
  <div class="case">
    <h2>Directive</h2>
    <div v-line-break>
      <p>どうも、初めまして。本日は簡単に適切な位置で改行を入れる方法を説明したいと思います。</p>
      <p>基本的にはApp.use(LineBreak)で有効化した後に、`v-line-break`を自動改行を入れたいタグにつけるだけです。</p>
    </div>
  </div>
</template>
