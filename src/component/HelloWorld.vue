<template>
  <h1 class="text-4xl">{{ msg }}</h1>
  <div class="mt-4">
    <button type="button" @click="count++">count is: {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>
