<script setup lang="ts">
import Footer from '../layout/Footer.vue'
import { useHead } from '@vueuse/head'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ImageDetail } from '../_type/image-view'
import { pageTitle } from '../_client/title'
import { fetchData } from '../_client/fetch'

const router = useRouter()
const route = useRoute()
const image = ref<ImageDetail | null>(null)
const title = ref<string>(pageTitle())

useHead({ title })

fetchData(() => {
  const id = route.params.id
  title.value = pageTitle('Image ' + id)
  return fetch(`/api/image/${id}`)
    .then(res => res.json())
    .then(body => {
      image.value = body.image
    })
})

const onClickImage = () => {
  router.go(-1)
}
</script>

<template>
  <template v-if="image">
    <div class="flex flex-col items-center">
      <div class="max-w-full inline-block relative">
        <img :src="image.thumbUrl" class="max-w-full cursor-pointer" @click="onClickImage"/>
      </div>
    </div>
    <div class="mt-big column">
      <p class="whitespace-pre-line" v-if="image.comment">{{ image.comment }}</p>
      <p class="text-xl link-no-deco">
        <router-link :to="'/user/' + encodeURIComponent(image.owner.home)">{{ image.owner.name }}</router-link>
      </p>
      <p class="mt-big">{{ image.cdateStr.slice(0, 16) }}</p>
      <div class="mt-big space-x-3" v-if="image.updatable">
        <button class="btn btn-hover-green text-sm">수정</button>
        <button class="btn btn-hover-red text-sm">삭제</button>
      </div>
    </div>
  </template>
  <Footer/>
</template>
