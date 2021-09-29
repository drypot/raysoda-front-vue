
<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { pageTitle } from './_client/title'

useHead({
  title: pageTitle()
})
</script>

<template>
  <router-view></router-view>
</template>

