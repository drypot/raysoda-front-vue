<script setup lang="ts">
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { useHead } from '@vueuse/head'
import { pageTitle } from '../_client/title'

useHead({
  title: pageTitle('Advertise')
})

const email = 'support+' + config.appNamel + '@raysoda.com'
</script>

<template>
  <Header/>
  <div class="column">
    <h1>광고</h1>
    <div class="mt-big">
      <p>
        ‘광고 내용 / 업체명’ 한 줄 광고를 게재하실 수 있습니다.<br/>
        광고 내용, 링크, 기간, 사업자등록증을 이메일로 보내주십시오.<br/>
        광고비는 주당 부가세 포함 154,000 원입니다.<br/>
        광고비는 선불입니다.<br/>
      </p>
      <p>
        광고 신청: <a :href="'mailto:' + email">{{ email }}</a>
      </p>
    </div>
  </div>
  <Footer/>
</template>
