<script setup lang="ts">
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { useHead } from '@vueuse/head'
import { pageTitle } from '../_client/title'

useHead({
  title: pageTitle('Page Not Found')
})
</script>

<template>
  <Header/>
  <div class="column">
    <h1>Page Not Found</h1>
    <div class="mt-big">
      <p class="leading-10">
        {{ $route.params.pathMatch }}
      </p>
    </div>
  </div>
  <Footer/>
</template>

