<script setup lang="ts">
import { limitNumber2 } from '../_util/primitive'
import { UrlMaker } from '../_util/url2'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { ImageListItem } from '../_type/image-view'
import { fetchData } from '../_client/fetch'

const route = useRoute()
const list = ref<ImageListItem[]>([])
const prevUrl = ref('')
const nextUrl = ref('')

fetchData(() => {
  const page = limitNumber2(route.query.p, 1, 1, NaN)
  const pageSize = limitNumber2(route.query.ps, 16, 1, 128)
  const date = route.query.d
  fetch(`/api/image-list?p=${page}&ps=${pageSize}&d=${date ?? ''}`)
    .then(r => r.json())
    .then(body => {
      list.value = body.list
      prevUrl.value = page > 1 ? UrlMaker.from('/image-list')
        .add('d', date).add('p', page - 1, 1).add('ps', pageSize, 16).gen() : ''
      nextUrl.value = list.value.length === pageSize ? UrlMaker.from('/image-list')
        .add('d', date).add('p', page + 1).add('ps', pageSize, 16).gen() : ''
      // 리스트 페이지들 간에 이동할 때는 스크롤을 리셋해주어야 한다.
      // 한데 이보다 더 중요한 것은 Detail 페이지에서 Back 버튼으로 돌아올 때 스크롤 위치를 보존하는 것이다.
      // 이건 잘 안 되는 것 같다. (또는 먼가 복잡해 보인다)
      window.scrollTo(0,0)
    })
})
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
