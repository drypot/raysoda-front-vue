<script setup lang="ts">
import { useConfig } from '../_client/global'

const config = useConfig()
</script>

<template>
  <div class="column border-b link-no-deco">
    <h3 class="my-4 leading-none">
      <router-link to="/">{{ config.appName }}</router-link>
    </h3>
  </div>
</template>
