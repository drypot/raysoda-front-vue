<script setup lang="ts">
import { useConfig } from '../_client/global'

const config = useConfig()
</script>

<template>
  <div class="mt-ultra mb-12 border-t column link-no-deco">
    <div class="my-3 flex justify-center space-x-3">
      <router-link to="/about">사이트소개</router-link>
      <router-link to="/company">회사소개</router-link>
      <router-link to="/ad">광고</router-link>
      <router-link to="/privacy">개인정보처리방침</router-link>
      <router-link to="/help">도움말</router-link>
    </div>
    <div class="my-4 leading-none">
      <a href="/api/counters/adng/inc?r=http://www.natgeokorea.com/magazine" target="_blank">
        National Geographic
      </a>
    </div>
    <h3 class="my-4 leading-none">
      <router-link to="/">{{ config.appName }}</router-link>
    </h3>
  </div>
</template>
