import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import './asset/index.css'
import ImageList from './image/ImageList.vue'
import ImageDetail from './image/ImageDetail.vue'
import About from './home/About.vue'
import Ad from './home/Ad.vue'
import Help from './home/Help.vue'
import Privacy from './home/Privacy.vue'
import Company from './home/Company.vue'
import NotFound from './error/NotFound.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name:'home', component: ImageList},
    { path: '/image-list', name:'image-list', component: ImageList},
    { path: '/image/:id', name:'image', component: ImageDetail},
    { path: '/about', name:'about', component: About },
    { path: '/ad', name:'ad', component: Ad },
    { path: '/company', name:'company', component: Company },
    { path: '/privacy', name:'privacy', component: Privacy },
    { path: '/help', name:'help', component: Help },
    { path: '/user/:home', name:'user-home', component: Help },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  ]
})

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)
app.mount('#app')
