
<script setup lang="ts">
import { pageTitle } from './entity/config'
import { useHead } from '@vueuse/head'

useHead({
  title: pageTitle()
})
</script>

<template>
  <router-view></router-view>
</template>

