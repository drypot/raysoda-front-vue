<script setup lang="ts">
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { useHead } from '@vueuse/head'
import { pageTitle } from '../_client/title'

useHead({
  title: pageTitle('Company')
})
</script>

<template>
  <Header/>
  <div class="column">
    <h1>회사소개</h1>
    <div class="mt-big">
      <p>
        (주)레이소다<br/>
        설립일: 2003년 3월 1일<br/>
        Korea<br/>
      </p>
      <p>
        대표이사, 이흥일<br/>
        프로그래머, 박규현<br/>
        <a href="https://raysoda.com/drypot" target="_blank">https://raysoda.com/drypot</a><br/>
      </p>
      <p>
        서비스<br/>
        <a href="https://raysoda.com" target="_blank">https://raysoda.com</a><br/>
        <a href="https://rapixel.com" target="_blank">https://rapixel.com</a><br/>
        <a href="https://osoky.com" target="_blank">https://osoky.com</a><br/>
      </p>
    </div>
  </div>
  <Footer/>
</template>
