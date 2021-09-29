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
    <h1>도움말</h1>
    <div class="mt-big">
      <p>
        궁금하신 점은 이메일로 문의 부탁드립니다.
      </p>
      <p>
        이메일 : &nbsp;
        <a href="mailto:support+raysoda@raysoda.com">
          support+raysoda@raysoda.com
        </a><br/>
        페이스북 : &nbsp;
        <a href="https://www.facebook.com/raysoda.news" target="_blank">
          https://www.facebook.com/raysoda.news
        </a><br/>
      </p>
      <p>
        회원탈퇴를 원하실 경우 : &nbsp;
        <router-link to="/deactivate-user">계정사용중지신청</router-link>
      </p>
    </div>
  </div>
  <Footer/>
</template>
