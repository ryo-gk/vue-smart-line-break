<script setup lang="ts">
import { loadDefaultJapaneseParser } from 'budoux'

const props = defineProps<{
  text: string
}>()

const parser = loadDefaultJapaneseParser();
const contents = parser.parse(props.text).join('<wbr>')
</script>

<template>
  <div class="LineBreak" v-html="contents">
  </div>
</template>

<style scoped>
.LineBreak {
  word-break: keep-all;
  overflow-wrap: break-word;
}
</style>
