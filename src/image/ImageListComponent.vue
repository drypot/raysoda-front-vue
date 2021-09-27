<script setup lang="ts">

import { limitNumber2 } from '../lib/base/primitive'
import { ImageListItem } from '../entity/image'
import { UrlMaker } from '../lib/base/url2'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const list = ref<ImageListItem[]>([])
const prevUrl = ref('')
const nextUrl = ref('')

function fetchData() {
  const page = limitNumber2(route.query.p, 1, 1, NaN)
  const pageSize = limitNumber2(route.query.ps, 16, 1, 128)
  const date = route.query.d
  fetch(`/api/image?p=${page}&ps=${pageSize}&d=${date ?? ''}`)
    .then(r => r.json())
    .then(body => {
      list.value = body.list
      prevUrl.value = page > 1 ? UrlMaker.from('/image-list')
        .add('d', date).add('p', page - 1, 1).add('ps', pageSize, 16).gen() : ''
      nextUrl.value = list.value.length === pageSize ? UrlMaker.from('/image-list')
        .add('d', date).add('p', page + 1).add('ps', pageSize, 16).gen() : ''
      window.scrollTo(0,0)
    })
}

watch(() => route.fullPath, () => {
  fetchData()
})

fetchData()

</script>

<template>
  <div class="mt-image-thumb max-w-full text-center">
    <template v-for="image in list">
      <div class="mt-image-thumb first:mt-0 link-no-deco">
        <!-- 이미지 좌상단에 FullScreen 아이콘을 넣기 위해 inline-block 을 한다. -->
        <!-- inline-block 을 하면 div 크기가 내부 이미지 크기와 같아진다. -->
        <div class="inline-block relative">
          <router-link :to="'/image/' + image.id">
            <img :src="image.thumbUrl" class="max-w-full max-h-screen">
          </router-link>
        </div>
        <div class="mt-4" v-if="image.comment">{{ image.comment.split(/\r\n|\n/, 1)[0] }}</div>
        <!-- user.home 에 '/' 있는 경우도 있으므로 인코딩한다. -->
        <div class="mt-4">
          <router-link :to="'/user/' + encodeURIComponent(image.owner.home)">{{ image.owner.name }}</router-link>
        </div>
      </div>
    </template>
    <div class="mt-image-thumb flex justify-center">
      <router-link :to="prevUrl" v-if="prevUrl.length > 0" className="mr-12">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </router-link>
      <router-link :to="nextUrl" v-if="nextUrl.length > 0">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </router-link>
    </div>
    <div class="mt-image-thumb flex justify-center space-x-6">
      <a href="https://raysoda.com">RaySoda</a>
      <a href="https://rapixel.com">Rapixel</a>
      <a href="https://osoky.com">Osoky</a>
    </div>
  </div>
</template>
