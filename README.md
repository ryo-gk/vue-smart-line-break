# Vue Smart Line Break

This is a package which provide line-breaks automatically to the text.
Support only Japanese for now.

## Getting Started

### Install packege.

```bash
> npm install vue-smart-line-break
```

### Usage

#### Use via component

If you want to use this package as a component,
you just import and can use it.

```vue
<script setup>
import LineBreak from 'vue-smart-line-break/LineBreak.vue'
</script>

<template>
  <LineBreak text="今日はいい天気です。" />
</template>
```

#### Use via directive

If you want to use this package as a directive,
you need to apply this like the below at first.

```ts
// e.g.) main.ts
import { createApp } from 'vue'
import App from './App.vue'
import LineBreak from 'vue-smart-line-break'

createApp(App).use(LineBreak).mount('#app')
```

After applying, you can use this by attaching `v-line-break` to the arbitrary HTML tag which includes text.

```vue
<template>
    <div v-line-break>
      <p>今日はいい天気です。</p>
    </div>
</template>
```

### Powered by
This packege is powered by [BudouX](https://github.com/google/budoux).
