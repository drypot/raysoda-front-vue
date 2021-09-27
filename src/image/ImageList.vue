<script setup lang="ts">
import Footer from '../layout/Footer.vue'
import { config } from '../entity/config'
import ImageListComponent from './ImageListComponent.vue'
import { user } from '../entity/session-user'
import { bannerList } from '../banner/banner'

// useHead({
// })
user
bannerList
</script>

<template>
  <div class="column">
    <h1 class="link-no-deco">
      <router-link to="/">{{ config.appName }}</router-link>
    </h1>
    <!-- Home Menu -->
    <div className="mt-big flex justify-center space-x-3">
      <template v-if="user">
        <router-link to="/about">사이트소개</router-link>
        <router-link to="/upload-image">사진등록</router-link>
        <router-link :to="'/' + encodeURIComponent(user.home)">내사진</router-link>
        <router-link to="/user-list">회원목록</router-link>
        <router-link to="/image-list-by-year">연도별사진</router-link>
        <router-link to="/logout">접속종료</router-link>
      </template>
      <template v-else>
        <router-link to="/about">사이트소개</router-link>
        <router-link to="/login">로그인</router-link>
        <router-link to="/register">회원가입</router-link>
        <router-link to="/user-list">회원목록</router-link>
        <router-link to="/image-list-by-year">연도별사진</router-link>
      </template>
    </div>
    <!-- Banner List -->
    <div className="mt-large flex flex-col" v-if="bannerList.length">
      <a v-for="banner in bannerList" :href="banner.url" target="_blank">{{ banner.text }}</a>
    </div>
  </div>
  <ImageListComponent/>
  <Footer/>
</template>
