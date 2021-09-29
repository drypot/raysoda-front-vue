<script setup lang="ts">
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { useHead } from '@vueuse/head'
import { pageTitle } from '../_client/title'

useHead({
  title: pageTitle('About')
})
</script>

<template>
  <Header/>
  <div class="column">
    <h1>About</h1>
    <div class="mt-big">
      <p class="leading-10">
        사진 갤러리입니다.<br/>
        업로드된 사진은 2048x2048 크기로 리사이즈됩니다.<br/>
        사진은 18시간마다 등록하실 수 있습니다.<br/>
      </p>
    </div>
  </div>
  <Footer/>
</template>
