<script setup lang="ts">
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { useHead } from '@vueuse/head'
import { pageTitle } from '../_client/title'

useHead({
  title: pageTitle('Privacy')
})
</script>

<template>
  <Header/>
  <div class="column">
    <h1>개인정보처리방침</h1>
    <div class="m-big">
      <p>
        개인정보는 로그인에만 사용됩니다.
      </p>
    </div>
  </div>
  <Footer/>
</template>
