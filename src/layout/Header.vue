<template>
  <div class="column border-b link-no-deco">
    <h3 class="my-4 leading-none">
      <router-link to="/">{{ config.appName }}</router-link>
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { config } from '../entity/config'

export default defineComponent({
  setup() {
    return { config }
  }
})
</script>
